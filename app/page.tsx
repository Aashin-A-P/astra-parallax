import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgePercent, Instagram, PackageOpen, PenLine, Sparkles, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const pillars = [
  {
    href: "/content",
    title: "Content",
    eyebrow: "Instagram stories",
    description: "A clean archive for story drops, post themes, captions, visual notes, and the short pieces you publish on Instagram.",
    icon: Instagram
  },
  {
    href: "/studio",
    title: "Studio",
    eyebrow: "Redbubble shop",
    description: "Product showcases for Redbubble, print-on-demand collections, mockups, and shop-ready releases.",
    icon: Store
  },
  {
    href: "/affiliate",
    title: "Affiliate",
    eyebrow: "Curated picks",
    description: "Recommended creator tools, supplies, and resources collected separately from the Redbubble shop.",
    icon: BadgePercent
  }
];

const studioNotes = [
  { icon: PenLine, label: "Story-first content" },
  { icon: PackageOpen, label: "Redbubble products" },
  { icon: BadgePercent, label: "Affiliate picks" }
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="relative h-[42vh] min-h-[320px] overflow-hidden sm:h-[52vh] lg:h-[620px]">
          <Image src="/images/astra-cover.png" alt="Astra Parallax banner with ink pens, brushes, gold accents, and AP monogram" fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background" />
        </div>
        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-surface/80 px-4 py-2 text-sm font-semibold text-primary-soft shadow-sm">
              <Sparkles className="h-4 w-4" />
              Create - Inspire - Shop
            </div>
            <h1 className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.04] text-metallic sm:text-5xl lg:text-7xl">
              Astra Parallax is now a content and Redbubble studio.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              A focused home for Instagram stories, Redbubble products, and curated affiliate links. Three sections keep the experience simple: Content, Studio, and Affiliate.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/studio">
                  View Studio <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/affiliate">Affiliate Picks</Link>
              </Button>
            </div>
          </div>
          <div className="grid content-start gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {studioNotes.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex min-h-[88px] items-center gap-4 rounded-md border border-border bg-surface/82 p-4 shadow-[0_18px_50px_hsl(var(--foreground)_/_0.08)]">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/12 text-primary-soft">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-base font-semibold text-foreground">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-soft">Three tabs</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">Everything points to publishing, Redbubble products, and curated links.</h2>
        </div>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Link
                key={pillar.href}
                href={pillar.href}
                className="group rounded-md border border-border bg-surface p-6 shadow-[0_18px_55px_hsl(var(--foreground)_/_0.08)] transition hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_24px_70px_hsl(var(--foreground)_/_0.12)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-soft">{pillar.eyebrow}</span>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/12 text-primary-soft transition group-hover:bg-primary group-hover:text-background">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="mt-7 font-display text-2xl font-bold text-foreground">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{pillar.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-soft">
                  Open {pillar.title} <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border bg-background-soft/65 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-soft">Sales path</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">From story idea to product page.</h2>
            <p className="mt-4 max-w-xl text-muted">
              The site is shaped for a practical creative loop: publish visual stories, send product-ready releases to Redbubble, and keep affiliate recommendations in their own space.
            </p>
          </div>
          <div className="grid gap-3">
            {["Post stories and visual notes on Instagram", "Showcase Redbubble products in Studio", "Collect affiliate recommendations separately"].map((step, index) => (
              <div key={step} className="flex items-center gap-4 rounded-md border border-border bg-surface/86 p-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-foreground text-sm font-bold text-background">{index + 1}</span>
                <span className="font-medium text-foreground">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-soft">{siteConfig.name}</p>
        <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-bold text-foreground sm:text-4xl">A warmer, simpler website for content and product discovery.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted">{siteConfig.tagline}</p>
      </section>
    </>
  );
}
