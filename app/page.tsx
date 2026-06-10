import Link from "next/link";
import { ArrowRight, Flame, PlayCircle, Shield, Telescope } from "lucide-react";
import { ArticleCard } from "@/components/cards/article-card";
import { ResourceCard } from "@/components/cards/resource-card";
import { HeroSection } from "@/components/sections/hero-section";
import { MissionPanel } from "@/components/sections/mission-panel";
import { NewsletterCta } from "@/components/sections/newsletter-cta";
import { SectionHeader } from "@/components/sections/section-header";
import { SignalPathCard } from "@/components/sections/signal-path-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedReveal } from "@/components/visual/animated-reveal";
import { StarfieldBackground } from "@/components/visual/starfield-background";
import { getAllCategories, getAllPosts, getAllResources, getFeaturedPosts } from "@/lib/content";

export default function HomePage() {
  const categories = getAllCategories();
  const featuredPosts = getFeaturedPosts();
  const latestPosts = getAllPosts().slice(0, 3);
  const resources = getAllResources().filter((resource) => resource.featured).slice(0, 3);

  return (
    <>
      <HeroSection />
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="noise-overlay absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Hub sections"
            title="Everything important, organized in one place."
            description="Astra Parallax brings together content, tools, AI workflows, systems, and store resources so each side hustle has a clear home."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <AnimatedReveal key={category.slug}>
                <SignalPathCard category={category} index={index} />
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden border-y border-border bg-background-soft/60 px-4 py-20 sm:px-6 lg:px-8">
        <StarfieldBackground className="opacity-70" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeader
              eyebrow="Creator dashboard"
              title="A central base for building multiple income streams."
              description="Use the site as a public home for articles, affiliate resources, digital products, experiments, and future services."
            />
            <Button asChild className="mt-7" variant="secondary">
              <Link href="/blog">
                Read the blog <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <MissionPanel />
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <div className="mb-8 flex items-end justify-between gap-4">
            <SectionHeader eyebrow="Blog" title="Latest writing and articles." />
            <Button asChild variant="link">
              <Link href="/blog">View blog</Link>
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {(featuredPosts.length ? featuredPosts : latestPosts).length ? (
              (featuredPosts.length ? featuredPosts : latestPosts).slice(0, 4).map((post) => <ArticleCard key={post.slug} post={post} />)
            ) : (
              <div className="rounded-2xl border border-border bg-surface p-6 text-muted shadow-[0_16px_48px_hsl(var(--foreground)_/_0.08)] md:col-span-2">
                No blog posts yet. Add real articles in <code className="rounded bg-background-soft px-1.5 py-0.5">content/posts</code>.
              </div>
            )}
          </div>
        </div>
        <div>
          <SectionHeader eyebrow="Store picks" title="Featured resources." />
          <div className="grid gap-4">
            {resources.length ? (
              resources.map((resource) => <ResourceCard key={resource.slug} resource={resource} />)
            ) : (
              <div className="rounded-2xl border border-border bg-surface p-6 text-muted shadow-[0_16px_48px_hsl(var(--foreground)_/_0.08)]">
                No resources yet. Add real store resources in <code className="rounded bg-background-soft px-1.5 py-0.5">content/resources</code>.
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden border-y border-border bg-background-soft/70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(103,232,249,0.16),transparent_20rem),radial-gradient(circle_at_80%_70%,rgba(167,139,250,0.18),transparent_24rem)]" />
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative">
            <Badge>Social to website</Badge>
            <h2 className="mt-3 font-display text-3xl font-semibold">Turn scattered attention into one clear destination.</h2>
            <p className="mt-4 text-muted">
              Connect YouTube, Instagram, Pinterest, resources, content, and future products into a single website people can understand quickly.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { icon: Telescope, text: "Content that brings people in" },
                { icon: Shield, text: "Owned audience capture" },
                { icon: Flame, text: "Side-hustle momentum" },
                { icon: PlayCircle, text: "Social-first distribution" }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="flex items-center gap-3 rounded-md border border-border bg-background/55 p-3 text-sm text-muted backdrop-blur">
                    <Icon className="h-4 w-4 text-primary-soft" />
                    {item.text}
                  </div>
                );
              })}
            </div>
            <Button asChild className="mt-6" variant="secondary">
              <Link href="/content">
                Explore content <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <Card className="relative overflow-hidden bg-background/70 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PlayCircle className="h-5 w-5 text-primary-soft" />
                Channel hub
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {["YouTube", "Instagram", "Pinterest", "Newsletter"].map((channel) => (
                  <div key={channel} className="flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3 text-sm font-semibold">
                    <span>{channel}</span>
                    <span className="text-muted-alt">Ready to connect</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <NewsletterCta />
      <section className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <Badge>Creator hub</Badge>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold text-cosmic">One website for everything you are building next.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          Keep your content, store, resources, and experiments connected so every visitor knows where to go next.
        </p>
      </section>
    </>
  );
}
