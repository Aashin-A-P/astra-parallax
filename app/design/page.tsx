import { Brush, Frame, Layers3, Palette, PenTool, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Design",
  description: "Astra Parallax design portfolio for artwork, visual experiments, patterns, and product-ready art.",
  path: "/design"
});

const designAreas = [
  {
    icon: Brush,
    title: "Artwork",
    description: "Finished art pieces, illustration directions, quote posters, and visual compositions ready for portfolio display."
  },
  {
    icon: Layers3,
    title: "Patterns",
    description: "Repeatable motifs, surface design tests, decorative systems, and texture libraries for products."
  },
  {
    icon: PenTool,
    title: "Typography",
    description: "Lettering, monogram studies, logo-style marks, and text-based designs for apparel and prints."
  },
  {
    icon: Frame,
    title: "Mockups",
    description: "Product previews, framed art views, apparel mockups, and release images for shop listings."
  }
];

const collections = ["Gold Ink Botanicals", "Celestial Minimal Marks", "Brush Stroke Quotes", "Vintage Studio Monograms"];

export default function DesignPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-background px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,hsl(var(--background))_0%,hsl(var(--background-soft)/0.84)_48%,hsl(var(--surface))_100%)]" />
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_70%_22%,hsl(var(--primary)/0.22),transparent_22rem)]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-soft">Design</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-tight text-metallic sm:text-6xl">
            Artwork, patterns, and product-ready visual systems.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            This tab is for pure design work: original art, surface patterns, typography, mockups, and visual experiments that can grow into print-on-demand collections.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {designAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div key={area.title} className="rounded-md border border-border bg-surface p-6 shadow-[0_18px_55px_hsl(var(--foreground)_/_0.08)]">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-primary/12 text-primary-soft">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-5 font-display text-xl font-bold text-foreground">{area.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{area.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-md border border-border bg-background-soft/72 p-7">
            <Palette className="h-6 w-6 text-primary-soft" />
            <h2 className="mt-5 font-display text-3xl font-bold text-foreground">Collection board</h2>
            <p className="mt-3 text-muted">
              Use this area to group artwork by product direction, mood, audience, color language, and release status.
            </p>
          </div>
          <div className="grid gap-3">
            {collections.map((collection) => (
              <div key={collection} className="flex items-center justify-between gap-4 rounded-md border border-border bg-surface p-4">
                <span className="font-medium text-foreground">{collection}</span>
                <Sparkles className="h-4 w-4 shrink-0 text-primary-soft" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
