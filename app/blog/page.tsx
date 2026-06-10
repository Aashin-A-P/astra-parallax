import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/cards/article-card";
import { SectionHeader } from "@/components/sections/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StarfieldBackground } from "@/components/visual/starfield-background";
import { getAllCategories, getAllPosts } from "@/lib/content";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description: "Read Astra Parallax blog posts across curiosity, technology, AI, design, content creation, and digital growth.",
  path: "/blog"
});

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const featured = posts.filter((post) => post.featured);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-background-soft/50">
        <StarfieldBackground className="opacity-80" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Badge>Blog</Badge>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-tight text-cosmic sm:text-6xl">
            Essays, notes, experiences, and field reports from Astra Parallax.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            The blog is reserved for written reflections, practical lessons, creative decisions, and deeper notes behind the work.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button key={category.slug} asChild variant="secondary" size="sm">
                <Link href={`/${category.slug}`}>{category.name}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {posts.length ? (
          <>
            <SectionHeader eyebrow="Featured" title="Start with the strongest posts." />
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {(featured.length ? featured : posts).slice(0, 3).map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
          </>
        ) : (
          <div className="rounded-2xl border border-border bg-surface p-8 shadow-[0_16px_48px_hsl(var(--foreground)_/_0.08)]">
            <Badge>Writing archive</Badge>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight">The first articles are being prepared.</h2>
            <p className="mt-3 max-w-2xl text-muted">
              Published essays and notes will appear here once they are ready to represent Astra Parallax clearly.
            </p>
          </div>
        )}
        <div className="mt-16">
          <SectionHeader eyebrow="Archive" title="All published blog posts." />
        </div>
        {posts.length ? (
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="mt-6 text-muted">The archive will open with the first published article.</p>
        )}
      </section>
    </>
  );
}
