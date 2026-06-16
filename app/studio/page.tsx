import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BadgePercent, ExternalLink, PackageOpen, Shirt, ShoppingBag, Store, Tag } from "lucide-react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site";
import { studioProducts } from "@/lib/studio-products";

export const metadata: Metadata = buildMetadata({
  title: "Studio",
  description: "Astra Parallax studio for Redbubble print-on-demand products, product showcases, and affiliate links.",
  path: "/studio"
});

const productGroups = [
  {
    icon: Shirt,
    title: "Apparel",
    description: "Graphic tees, hoodies, and wearable designs built from Astra Parallax artwork."
  },
  {
    icon: PackageOpen,
    title: "Home Goods",
    description: "Prints, decor, stationery, stickers, and lifestyle products for design-led collections."
  },
  {
    icon: ShoppingBag,
    title: "Featured Picks",
    description: "A curated area for best sellers, seasonal drops, and affiliate products that fit the studio mood."
  }
];

export default function StudioPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-background-soft/65 px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,hsl(var(--primary)/0.18),transparent_23rem),radial-gradient(circle_at_82%_40%,hsl(var(--accent)/0.12),transparent_24rem)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-soft">Studio</p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-tight text-metallic sm:text-6xl">
              Product showcases for Redbubble and affiliate links.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              Studio is the shop-facing tab. Use it to feature print-on-demand products, Redbubble collections, product mockups, affiliate recommendations, and clear calls to buy.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={siteConfig.shops.redbubble} target="_blank" rel="noreferrer">
                  Redbubble Store <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/design">View Designs</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-md border border-border bg-surface/86 p-6 shadow-[0_18px_55px_hsl(var(--foreground)_/_0.08)]">
            <Store className="h-8 w-8 text-primary-soft" />
            <h2 className="mt-5 font-display text-2xl font-bold text-foreground">Shop notes</h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              The main Studio button opens your Redbubble shop. Each design below has its own Astra Parallax landing page that you can attach to Pinterest pins before sending visitors to the exact Redbubble product.
            </p>
            <p className="mt-5 rounded-md border border-border bg-background-soft/70 p-4 text-sm text-muted">{siteConfig.shops.affiliateDisclosure}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-14">
          <div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-soft">New Design</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-foreground">Featured Redbubble product page.</h2>
            </div>
          </div>
          <div className="mt-7 grid overflow-hidden rounded-md border border-border bg-surface shadow-[0_18px_55px_hsl(var(--foreground)_/_0.08)] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[320px] bg-background-soft">
              <Image src={studioProducts[0].mockups[1].url} alt={studioProducts[0].mockups[1].alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
            <div className="p-7 lg:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-soft">{studioProducts[0].category}</p>
              <h3 className="mt-3 font-display text-3xl font-bold text-foreground">{studioProducts[0].title}</h3>
              <p className="mt-4 text-muted">{studioProducts[0].description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {studioProducts[0].tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="rounded-full border border-border bg-background-soft px-3 py-1 text-xs font-semibold text-muted">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <Link href={`/studio/${studioProducts[0].slug}`}>Open product page</Link>
                </Button>
                <Button asChild variant="secondary">
                  <a href={studioProducts[0].sourceUrl} target="_blank" rel="noreferrer">
                    Buy on Redbubble <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {productGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div key={group.title} className="rounded-md border border-border bg-surface p-6 shadow-[0_18px_55px_hsl(var(--foreground)_/_0.08)]">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-primary/12 text-primary-soft">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-5 font-display text-xl font-bold text-foreground">{group.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{group.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-soft">Product Links</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground">Shareable landing pages for every design.</h2>
            <p className="mt-4 text-muted">
              Add new designs to the Studio product list, and each one can get a clean URL in the same pattern: `/studio/product-name`.
            </p>
          </div>
          <div className="grid gap-3">
            {studioProducts.map((product) => (
              <Link key={product.slug} href={`/studio/${product.slug}`} className="flex items-center justify-between gap-4 rounded-md border border-border bg-surface p-4 transition hover:-translate-y-0.5 hover:border-primary/45 hover:bg-surface-alt">
                <span className="flex items-center gap-3 font-medium text-foreground">
                  <Tag className="h-4 w-4 text-primary-soft" />
                  {product.title}
                </span>
                <ExternalLink className="h-4 w-4 shrink-0 text-muted-alt" />
              </Link>
            ))}
            <div className="flex items-center justify-between gap-4 rounded-md border border-border bg-surface p-4">
              <span className="flex items-center gap-3 font-medium text-foreground">
                <Tag className="h-4 w-4 text-primary-soft" />
                Affiliate tools and supplies for creators
              </span>
              <ExternalLink className="h-4 w-4 shrink-0 text-muted-alt" />
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-md border border-border bg-background-soft/72 p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <BadgePercent className="h-6 w-6 text-primary-soft" />
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground">Affiliate area</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
                Add art tools, mockup resources, creator supplies, POD platforms, and design products here with clear disclosure.
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
