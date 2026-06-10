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
  description: "Read Astra Parallax blog posts across ideas, technology, systems, AI, and side-hustle growth.",
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
            Blog posts for projects, tools, systems, and online growth.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            Written posts, notes, guides, and long-form thoughts will live here.
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
            <Badge>No posts yet</Badge>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight">Your blog is ready for real writing.</h2>
            <p className="mt-3 max-w-2xl text-muted">
              Add MDX files to <code className="rounded bg-background-soft px-1.5 py-0.5">content/posts</code> when you are ready to publish text posts.
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
          <p className="mt-6 text-muted">No published blog posts yet.</p>
        )}
      </section>
    </>
  );
}
