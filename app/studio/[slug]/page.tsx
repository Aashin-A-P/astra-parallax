import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Heart, PackageOpen, Sparkles, Tag } from "lucide-react";
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
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-soft">Redbubble Design</p>
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
                    Shop this design <ArrowUpRight className="h-4 w-4" />
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

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-soft">Pinterest Landing Page</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground">Use this page as the clean link behind pins.</h2>
          <p className="mt-4 text-muted">{product.description}</p>
          <div className="mt-7 grid gap-3">
            {product.tags.map((tag) => (
              <div key={tag} className="flex items-center gap-3 rounded-md border border-border bg-surface p-3 text-sm font-medium text-foreground">
                <Tag className="h-4 w-4 text-primary-soft" />
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="grid gap-5 md:grid-cols-2">
            {product.mockups.map((mockup) => (
              <figure key={mockup.title} className="overflow-hidden rounded-md border border-border bg-surface shadow-[0_18px_55px_hsl(var(--foreground)_/_0.08)]">
                <div className="relative aspect-square bg-background-soft">
                  <Image src={mockup.url} alt={mockup.alt} fill sizes="(min-width: 768px) 34vw, 100vw" className="object-cover" />
                </div>
                <figcaption className="border-t border-border p-4 text-sm font-semibold text-foreground">{mockup.title}</figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-6 rounded-md border border-border bg-background-soft/72 p-6">
            <div className="flex items-center gap-3">
              <PackageOpen className="h-5 w-5 text-primary-soft" />
              <h2 className="font-display text-xl font-bold text-foreground">Available Product Types</h2>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {product.availableOn.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted">
                  <CheckCircle2 className="h-4 w-4 text-primary-soft" />
                  {item}
                </div>
              ))}
            </div>
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
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground">A product landing page made for social traffic.</h2>
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
