import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.string().email(),
  name: z.string().max(120).optional()
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;

type NewsletterResult = {
  provider: "google-sheets" | "brevo" | "mailchimp-placeholder" | "mock";
  ok: true;
  duplicate?: boolean;
};

const googleSheetsResponseSchema = z
  .object({
    ok: z.boolean().optional(),
    duplicate: z.boolean().optional(),
    status: z.string().optional(),
    message: z.string().optional()
  })
  .passthrough();

export async function subscribeToNewsletter(input: NewsletterInput) {
  const parsed = newsletterSchema.parse(input);
  const email = parsed.email.trim().toLowerCase();
  const name = parsed.name?.trim();

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
      throw new Error("Google Sheets subscription failed");
    }

    const result = googleSheetsResponseSchema.parse(await response.json());

    if (result.ok === false) {
      throw new Error(result.message || "Google Sheets subscription failed");
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
