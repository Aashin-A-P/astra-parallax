import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/cards/article-card";
import { ResourceCard } from "@/components/cards/resource-card";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionHeader } from "@/components/sections/section-header";
import { Badge } from "@/components/ui/badge";
import { StarfieldBackground } from "@/components/visual/starfield-background";
import { getAllCategories, getAllResources, getPostsByCategory } from "@/lib/content";
import { buildMetadata } from "@/lib/seo/metadata";
import { collectionPageSchema, itemListSchema } from "@/lib/seo/schema";

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return getAllCategories().map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getAllCategories().find((item) => item.slug === slug);
  if (!category) return {};
  return buildMetadata({ title: category.name, description: category.description, path: `/${category.slug}` });
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getAllCategories().find((item) => item.slug === slug);
  if (!category) notFound();
  const posts = getPostsByCategory(category.slug);
  const resources = getAllResources().filter((resource) => resource.normalizedCategory === category.slug && resource.featured);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-background-soft/50">
        <StarfieldBackground className="opacity-75" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Badge>Category</Badge>
          <h1 className="mt-4 font-display text-5xl font-semibold text-cosmic">{category.name}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">{category.description}</p>
          <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
            {["Explore", "Decode", "Build"].map((item) => (
              <div key={item} className="rounded-md border border-border bg-background/60 px-4 py-3 text-sm text-muted backdrop-blur">
                {item} the signal
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Featured" title="Start with the strongest signals." />
        {posts.length ? (
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {(posts.filter((post) => post.featured).length ? posts.filter((post) => post.featured) : posts).slice(0, 3).map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-border bg-surface p-6 text-muted shadow-[0_16px_48px_hsl(var(--foreground)_/_0.08)]">
            This category will open with the first published article.
          </div>
        )}
        <div className="mt-14">
          <SectionHeader eyebrow="All posts" title={`Everything in ${category.name}.`} />
        </div>
        {posts.length ? (
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="mt-6 text-muted">Articles will appear here as the publishing archive grows.</p>
        )}
        {resources.length ? (
          <>
            <div className="mt-14">
              <SectionHeader eyebrow="Tools" title="Featured resources for this path." />
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {resources.map((resource) => (
                <ResourceCard key={resource.slug} resource={resource} />
              ))}
            </div>
          </>
        ) : null}
      </section>
      <JsonLd data={collectionPageSchema(category.name, category.description, `/${category.slug}`)} />
      <JsonLd data={itemListSchema(posts)} />
    </>
  );
}
