import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { ArticleCard } from "@/components/cards/article-card";
import { ResourceCard } from "@/components/cards/resource-card";
import { HeroSection } from "@/components/sections/hero-section";
import { NewsletterCta } from "@/components/sections/newsletter-cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { YouTubeEmbed } from "@/components/media/youtube-embed";
import { getAllCategories, getAllPosts, getAllResources, getFeaturedPosts } from "@/lib/content";

export default function HomePage() {
  const categories = getAllCategories();
  const featuredPosts = getFeaturedPosts();
  const latestPosts = getAllPosts().slice(0, 3);
  const resources = getAllResources().filter((resource) => resource.featured).slice(0, 3);

  return (
    <>
      <HeroSection />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <Badge>Discovery lanes</Badge>
            <h2 className="mt-3 font-display text-3xl font-semibold">Choose a signal path.</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link key={category.slug} href={`/${category.slug}`} className="rounded-lg border border-border bg-surface p-5 transition-colors hover:bg-surface-alt">
              <h3 className="font-display text-xl font-semibold">{category.name}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-display text-3xl font-semibold">Latest articles</h2>
            <Button asChild variant="link">
              <Link href="/mysteries">Archives</Link>
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {(featuredPosts.length ? featuredPosts : latestPosts).slice(0, 4).map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-6 font-display text-3xl font-semibold">Featured resources</h2>
          <div className="grid gap-4">
            {resources.map((resource) => (
              <ResourceCard key={resource.slug} resource={resource} />
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-border bg-background-soft/70">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Badge>Video and social</Badge>
            <h2 className="mt-3 font-display text-3xl font-semibold">Built to connect every channel back to the hub.</h2>
            <p className="mt-4 text-muted">
              Publish essays, attach video context, pin visual research, and convert social attention into owned audience growth.
            </p>
            <Button asChild className="mt-6" variant="secondary">
              <Link href="/resources">
                Explore resources <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PlayCircle className="h-5 w-5 text-primary-soft" />
                Sample field transmission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <YouTubeEmbed id="dQw4w9WgXcQ" title="Astra Parallax sample YouTube embed" caption="Replace this ID with the active channel trailer or latest essay companion." />
            </CardContent>
          </Card>
        </div>
      </section>
      <NewsletterCta />
      <section className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold">The archive is the beginning.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted">Astra Parallax is ready for editorial growth, affiliate resources, YouTube traffic, and future digital products.</p>
      </section>
    </>
  );
}
