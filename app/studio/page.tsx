import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, PackageOpen, Shirt, Store, Tag } from "lucide-react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site";
import { studioProducts } from "@/lib/studio-products";

export const metadata: Metadata = buildMetadata({
  title: "Studio",
  description: "Astra Parallax studio for Redbubble print-on-demand products and product showcases.",
  path: "/studio"
});

const productGroups = [
  {
    icon: Shirt,
    title: "Apparel",
    description: "Graphic tees, hoodies, and wearable products built from Astra Parallax artwork."
  },
  {
    icon: PackageOpen,
    title: "Home Goods",
    description: "Prints, decor, stationery, stickers, and lifestyle products from Redbubble collections."
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
              Product showcases for Redbubble.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              Studio is the shop-facing tab for Redbubble products, print-on-demand collections, product mockups, and clear calls to buy.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={siteConfig.shops.redbubble} target="_blank" rel="noreferrer">
                  Redbubble Store <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="rounded-md border border-border bg-surface/86 p-6 shadow-[0_18px_55px_hsl(var(--foreground)_/_0.08)]">
            <Store className="h-8 w-8 text-primary-soft" />
            <h2 className="mt-5 font-display text-2xl font-bold text-foreground">Studio Picks</h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              Explore featured Redbubble artwork across apparel, decor, stationery, stickers, and everyday products.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-14">
          <div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-soft">New Product</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-foreground">Featured Redbubble product pages.</h2>
            </div>
          </div>
          <div className="mt-7 grid gap-6">
            {studioProducts.map((product) => (
              <div key={product.slug} className="grid overflow-hidden rounded-md border border-border bg-surface shadow-[0_18px_55px_hsl(var(--foreground)_/_0.08)] lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[320px] bg-background-soft">
                  <Image src={product.mockups[1].url} alt={product.mockups[1].alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                </div>
                <div className="p-7 lg:p-9">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-soft">{product.category}</p>
                  <h3 className="mt-3 font-display text-3xl font-bold text-foreground">{product.title}</h3>
                  <p className="mt-4 text-muted">{product.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {product.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="rounded-full border border-border bg-background-soft px-3 py-1 text-xs font-semibold text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Button asChild>
                      <Link href={`/studio/${product.slug}`}>Open product page</Link>
                    </Button>
                    <Button asChild variant="secondary">
                      <a href={product.sourceUrl} target="_blank" rel="noreferrer">
                        Buy on Redbubble <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
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
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-soft">Product Pages</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground">Browse each featured product in detail.</h2>
            <p className="mt-4 text-muted">
              Open a product page to view mockups, product types, artwork notes, and the direct Redbubble listing.
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
          </div>
        </div>
      </section>
    </>
  );
}
