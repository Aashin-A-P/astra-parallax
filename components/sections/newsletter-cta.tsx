import { NewsletterForm } from "@/components/newsletter/newsletter-form";
import { StarfieldBackground } from "@/components/visual/starfield-background";

export function NewsletterCta() {
  return (
    <section id="dispatch" className="relative overflow-hidden border-y border-border bg-surface/60">
      <StarfieldBackground className="opacity-60" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-primary-soft">The Dispatch</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold">A signal-rich briefing from the edge of curiosity.</h2>
          <p className="mt-4 max-w-2xl text-muted">
            Get mystery threads, tool notes, motivational systems, and future product drops from Astra Parallax.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-background/70 p-5 backdrop-blur">
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
