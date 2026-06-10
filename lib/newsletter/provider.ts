import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.string().email(),
  name: z.string().max(120).optional()
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;

type NewsletterResult = {
  provider: "supabase" | "google-sheets" | "brevo" | "mailchimp-placeholder" | "mock";
  ok: true;
  duplicate?: boolean;
};

export class NewsletterProviderError extends Error {
  constructor(
    message: string,
    public details?: Record<string, unknown>
  ) {
    super(message);
    this.name = "NewsletterProviderError";
  }
}

const googleSheetsResponseSchema = z
  .object({
    ok: z.boolean().optional(),
    duplicate: z.boolean().optional(),
    status: z.string().optional(),
    message: z.string().optional()
  })
  .passthrough();

const supabaseErrorSchema = z
  .object({
    code: z.string().optional(),
    message: z.string().optional(),
    details: z.string().optional(),
    hint: z.string().optional()
  })
  .passthrough();

export async function subscribeToNewsletter(input: NewsletterInput) {
  const parsed = newsletterSchema.parse(input);
  const email = parsed.email.trim().toLowerCase();
  const name = parsed.name?.trim();

  if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    const baseUrl = process.env.SUPABASE_URL.replace(/\/$/, "");
    const response = await fetch(`${baseUrl}/rest/v1/dispatch_subscribers`, {
      method: "POST",
      headers: {
        apikey: process.env.SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal"
      },
      body: JSON.stringify({
        email,
        name: name || null,
        source: "dispatch"
      })
    });

    if (response.status === 409) {
      return { provider: "supabase", ok: true, duplicate: true } satisfies NewsletterResult;
    }

    if (!response.ok) {
      const responseText = await response.text();
      let errorBody: unknown = null;

      try {
        errorBody = JSON.parse(responseText);
      } catch {
        errorBody = responseText.slice(0, 180);
      }

      const parsedError = typeof errorBody === "object" && errorBody !== null ? supabaseErrorSchema.safeParse(errorBody) : null;

      throw new NewsletterProviderError("Supabase subscription failed", {
        status: response.status,
        statusText: response.statusText,
        error: parsedError?.success ? parsedError.data : errorBody
      });
    }

    return { provider: "supabase", ok: true, duplicate: false } satisfies NewsletterResult;
  }

  if (process.env.GOOGLE_SHEETS_WEBHOOK_URL && process.env.GOOGLE_SHEETS_WEBHOOK_SECRET) {
    const response = await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify({
        secret: process.env.GOOGLE_SHEETS_WEBHOOK_SECRET,
        email,
        name,
        source: "dispatch"
      })
    });

    if (!response.ok) {
      throw new NewsletterProviderError("Google Sheets webhook returned a non-OK response", {
        status: response.status,
        statusText: response.statusText
      });
    }

    const responseText = await response.text();
    let responseJson: unknown;

    try {
      responseJson = JSON.parse(responseText);
    } catch {
      throw new NewsletterProviderError("Google Sheets webhook did not return JSON", {
        status: response.status,
        contentType: response.headers.get("content-type"),
        responsePreview: responseText.slice(0, 180)
      });
    }

    const result = googleSheetsResponseSchema.parse(responseJson);

    if (result.ok === false) {
      throw new NewsletterProviderError(result.message || "Google Sheets subscription failed", {
        status: result.status,
        duplicate: result.duplicate
      });
    }

    return {
      provider: "google-sheets",
      ok: true,
      duplicate: result.duplicate === true || result.status === "duplicate"
    } satisfies NewsletterResult;
  }

  if (process.env.BREVO_API_KEY && process.env.BREVO_LIST_ID) {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.BREVO_API_KEY
      },
      body: JSON.stringify({
        email,
        attributes: name ? { FIRSTNAME: name } : undefined,
        listIds: [Number(process.env.BREVO_LIST_ID)],
        updateEnabled: true
      })
    });

    if (!response.ok) {
      throw new Error("Brevo subscription failed");
    }
    return { provider: "brevo", ok: true } satisfies NewsletterResult;
  }

  if (process.env.MAILCHIMP_API_KEY && process.env.MAILCHIMP_AUDIENCE_ID && process.env.MAILCHIMP_SERVER_PREFIX) {
    return { provider: "mailchimp-placeholder", ok: true } satisfies NewsletterResult;
  }

  return { provider: "mock", ok: true } satisfies NewsletterResult;
}
