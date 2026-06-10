import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/cards/article-card";
import { ResourceCard } from "@/components/cards/resource-card";
import { JsonLd } from "@/components/seo/json-ld";
import { Badge } from "@/components/ui/badge";
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
      <section className="border-b border-border bg-background-soft/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Badge>Category</Badge>
          <h1 className="mt-4 font-display text-4xl font-semibold">{category.name}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">{category.description}</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-semibold">Featured posts</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {(posts.filter((post) => post.featured).length ? posts.filter((post) => post.featured) : posts).slice(0, 3).map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
        <h2 className="mt-14 font-display text-2xl font-semibold">All posts</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
        {resources.length ? (
          <>
            <h2 className="mt-14 font-display text-2xl font-semibold">Featured resources</h2>
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
