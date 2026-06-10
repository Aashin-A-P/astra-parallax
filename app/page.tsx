import Link from "next/link";
import { ArrowRight, Brush, Flame, PlayCircle, Shield, Telescope } from "lucide-react";
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
            eyebrow="Astra Parallax"
            title="A professional home for every creative direction."
            description="Content, blog writing, AI workflows, design work, websites, print-on-demand concepts, and curated resources are organized into a clear visitor journey."
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
              eyebrow="Operating base"
              title="Built as a long-term digital studio and publishing base."
              description="The site is structured to grow with new videos, articles, design releases, websites, store collections, affiliate resources, and audience updates."
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
                The blog archive is being prepared. New writing will appear here as soon as publication begins.
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
                Store showcases are being curated. Featured resources and product links will appear here after review.
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden border-y border-border bg-background-soft/70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(103,232,249,0.16),transparent_20rem),radial-gradient(circle_at_80%_70%,rgba(167,139,250,0.18),transparent_24rem)]" />
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative">
            <Badge>Audience path</Badge>
            <h2 className="mt-3 font-display text-3xl font-semibold">Turn platform discovery into a clear destination.</h2>
            <p className="mt-4 text-muted">
              Connect YouTube, Instagram, Pinterest, blog notes, design work, store resources, and newsletter updates through a website people can understand quickly.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { icon: Telescope, text: "Mystery, facts, and tech content" },
                { icon: Shield, text: "Owned audience capture" },
                { icon: Brush, text: "Design and website portfolio" },
                { icon: Flame, text: "Store and affiliate pathway" }
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
              <Link href="/studio">
                Explore studio <ArrowRight className="h-4 w-4" />
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
        <Badge>Starting point</Badge>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold text-cosmic">Astra Parallax is designed to grow with every release.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          Each section is prepared for real work: videos, articles, designs, websites, product collections, recommended tools, and audience updates.
        </p>
      </section>
    </>
  );
}
