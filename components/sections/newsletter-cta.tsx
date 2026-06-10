import { NewsletterForm } from "@/components/newsletter/newsletter-form";
import { StarfieldBackground } from "@/components/visual/starfield-background";

export function NewsletterCta() {
  return (
    <section id="dispatch" className="relative overflow-hidden border-y border-border bg-surface/80">
      <StarfieldBackground className="opacity-60" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">The Dispatch</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight">Updates from the hub.</h2>
          <p className="mt-4 max-w-2xl text-muted">
            Get new articles, recommended tools, project notes, and future product drops from Astra Parallax.
          </p>
        </div>
        <div className="rounded-2xl border border-primary/25 bg-surface/90 p-5 shadow-glow backdrop-blur">
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
