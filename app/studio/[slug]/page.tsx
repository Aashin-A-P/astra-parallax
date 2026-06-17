import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Heart, Sparkles, Tag } from "lucide-react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo/metadata";
import { getStudioProduct, studioProducts } from "@/lib/studio-products";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return studioProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getStudioProduct(slug);

  if (!product) {
    return buildMetadata({
      title: "Studio Product",
      path: `/studio/${slug}`,
      noIndex: true
    });
  }

  return buildMetadata({
    title: product.title,
    description: product.description,
    path: `/studio/${product.slug}`,
    image: product.mockups[1].url
  });
}

export default async function StudioProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getStudioProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-background-soft/70 px-4 py-16 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,hsl(var(--primary)/0.2),transparent_24rem),radial-gradient(circle_at_86%_34%,hsl(var(--accent)/0.12),transparent_25rem)]" />
        <div className="relative mx-auto max-w-7xl">
          <Button asChild variant="link">
            <Link href="/studio">
              <ArrowLeft className="h-4 w-4" />
              Studio
            </Link>
          </Button>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-soft">Redbubble Product</p>
              <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-tight text-metallic sm:text-6xl">{product.title}</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{product.summary}</p>
              <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold text-muted">
                <span className="rounded-full border border-border bg-surface px-4 py-2">{product.productCount}</span>
                <span className="rounded-full border border-border bg-surface px-4 py-2">{product.priceNote}</span>
                <span className="rounded-full border border-border bg-surface px-4 py-2">By {product.artist}</span>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href={product.sourceUrl} target="_blank" rel="noreferrer">
                    Shop this product <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/studio">All Studio Products</Link>
                </Button>
              </div>
            </div>
            <div className="overflow-hidden rounded-md border border-border bg-surface shadow-[0_18px_55px_hsl(var(--foreground)_/_0.08)]">
              <div className="relative aspect-square">
                <Image src={product.mockups[1].url} alt={product.mockups[1].alt} fill priority sizes="(min-width: 1024px) 44vw, 100vw" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-soft">Product Details</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground">A closer look at the artwork and product range.</h2>
          <p className="mt-4 text-muted">{product.description}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            {product.tags.map((tag) => (
              <div key={tag} className="flex items-center gap-3 rounded-md border border-border bg-surface px-4 py-3 text-sm font-medium text-foreground">
                <Tag className="h-4 w-4 text-primary-soft" />
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-soft">Shop The Product</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-foreground">Available product formats.</h2>
            </div>
            <p className="text-sm font-semibold text-muted">{product.productCount}</p>
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {product.mockups.map((mockup) => (
              <article key={mockup.title} className="group overflow-hidden rounded-md border border-border bg-surface shadow-[0_18px_55px_hsl(var(--foreground)_/_0.08)] transition hover:-translate-y-0.5 hover:border-primary/45 hover:bg-surface-alt">
                <div className="relative aspect-square bg-background-soft">
                  <Image src={mockup.url} alt={mockup.alt} fill sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 100vw" className="object-cover transition duration-300 group-hover:scale-[1.03]" />
                </div>
                <div className="border-t border-border p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">{mockup.title}</h3>
                      <p className="mt-1 text-sm text-muted">{product.priceNote}</p>
                    </div>
                    <Tag className="mt-1 h-4 w-4 shrink-0 text-primary-soft" />
                  </div>
                  <Button asChild className="mt-4 w-full" variant="secondary">
                    <a href={product.sourceUrl} target="_blank" rel="noreferrer">
                      View on Redbubble <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-background-soft/65 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-primary-soft">
              <Heart className="h-4 w-4" />
              Cozy Gift Pick
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground">Pick the format that fits your space, style, or gift list.</h2>
          </div>
          <Button asChild size="lg">
            <a href={product.sourceUrl} target="_blank" rel="noreferrer">
              Buy on Redbubble <Sparkles className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
