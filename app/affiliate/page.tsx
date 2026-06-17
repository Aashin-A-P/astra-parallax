import Link from "next/link";
import { ArrowUpRight, BadgePercent, Brush, PackageCheck, Sparkles, Store } from "lucide-react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Affiliate",
  description: "Curated affiliate tools, creator supplies, and useful resources from Astra Parallax.",
  path: "/affiliate"
});

const affiliateGroups = [
  {
    icon: Brush,
    title: "Creative Tools",
    description: "Art apps, mockup resources, creative assets, and production tools that fit the Astra Parallax workflow."
  },
  {
    icon: PackageCheck,
    title: "Creator Supplies",
    description: "Helpful gear, planning resources, workspace items, and product-prep tools for online creators."
  },
  {
    icon: Store,
    title: "Platforms",
    description: "Useful services for publishing, selling, organizing, and growing a small creative brand."
  }
];

export default function AffiliatePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-background-soft/65 px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,hsl(var(--primary)/0.18),transparent_23rem),radial-gradient(circle_at_82%_40%,hsl(var(--accent)/0.12),transparent_24rem)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-soft">Affiliate</p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-tight text-metallic sm:text-6xl">Curated tools and creator picks.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              This tab keeps affiliate recommendations separate from the Redbubble Studio, with room for useful tools, supplies, platforms, and creator resources.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/resources">
                  Browse Resources <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/studio">Redbubble Studio</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-md border border-border bg-surface/86 p-6 shadow-[0_18px_55px_hsl(var(--foreground)_/_0.08)]">
            <BadgePercent className="h-8 w-8 text-primary-soft" />
            <h2 className="mt-5 font-display text-2xl font-bold text-foreground">Disclosure</h2>
            <p className="mt-3 text-sm leading-6 text-muted">{siteConfig.shops.affiliateDisclosure}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-soft">Affiliate Categories</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">A separate space for useful recommendations.</h2>
          <p className="mt-4 text-muted">
            Add affiliate products here when they are ready. Studio stays focused on Redbubble, while this page handles tools and recommendations.
          </p>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {affiliateGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div key={group.title} className="rounded-md border border-border bg-surface p-6 shadow-[0_18px_55px_hsl(var(--foreground)_/_0.08)]">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-primary/12 text-primary-soft">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-foreground">{group.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{group.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-md border border-border bg-background-soft/72 p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Sparkles className="h-6 w-6 text-primary-soft" />
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground">Affiliate links can be added here next.</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
                This page is ready for product cards, comparison tables, or curated lists once the affiliate links are selected.
              </p>
            </div>
            <Button asChild variant="secondary">
              <Link href="/content">See Content</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
