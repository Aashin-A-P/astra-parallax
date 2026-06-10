import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.string().email(),
  name: z.string().max(120).optional()
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;

export async function subscribeToNewsletter(input: NewsletterInput) {
  const parsed = newsletterSchema.parse(input);

  if (process.env.BREVO_API_KEY && process.env.BREVO_LIST_ID) {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.BREVO_API_KEY
      },
      body: JSON.stringify({
        email: parsed.email,
        attributes: parsed.name ? { FIRSTNAME: parsed.name } : undefined,
        listIds: [Number(process.env.BREVO_LIST_ID)],
        updateEnabled: true
      })
    });

    if (!response.ok) {
      throw new Error("Brevo subscription failed");
    }
    return { provider: "brevo", ok: true };
  }

  if (process.env.MAILCHIMP_API_KEY && process.env.MAILCHIMP_AUDIENCE_ID && process.env.MAILCHIMP_SERVER_PREFIX) {
    return { provider: "mailchimp-placeholder", ok: true };
  }

  return { provider: "mock", ok: true };
}
