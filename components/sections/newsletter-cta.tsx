import { NewsletterForm } from "@/components/newsletter/newsletter-form";

export function NewsletterCta() {
  return (
    <section id="dispatch" className="border-y border-border bg-surface/60">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-primary-soft">The Dispatch</p>
          <h2 className="mt-3 font-display text-3xl font-semibold">A signal-rich briefing for curious builders.</h2>
          <p className="mt-4 max-w-2xl text-muted">
            Get new essays, resource drops, video notes, and product updates from Astra Parallax.
          </p>
        </div>
        <NewsletterForm />
      </div>
    </section>
  );
}
