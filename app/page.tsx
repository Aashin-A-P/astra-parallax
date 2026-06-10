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
import { YouTubeEmbed } from "@/components/media/youtube-embed";
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
            eyebrow="Signal paths"
            title="Four doors into the same unknown."
            description="Astra Parallax is built around the ideas that pull creators forward: strange questions, useful technology, disciplined systems, and the intelligence revolution."
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
              eyebrow="Mission control"
              title="A creator hub for ideas that deserve gravity."
              description="The site is designed to turn curiosity into momentum: research, publish, distribute, capture the audience, then build the next product."
            />
            <Button asChild className="mt-7" variant="secondary">
              <Link href="/productivity">
                Study the system <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <MissionPanel />
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <div className="mb-8 flex items-end justify-between gap-4">
            <SectionHeader eyebrow="The archive" title="Latest field notes." />
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
          <SectionHeader eyebrow="Toolkit" title="Featured resources." />
          <div className="grid gap-4">
            {resources.map((resource) => (
              <ResourceCard key={resource.slug} resource={resource} />
            ))}
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden border-y border-border bg-background-soft/70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.18),transparent_20rem),radial-gradient(circle_at_80%_70%,rgba(199,168,109,0.16),transparent_24rem)]" />
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative">
            <Badge>Video and social</Badge>
            <h2 className="mt-3 font-display text-3xl font-semibold">Built to connect every channel back to the hub.</h2>
            <p className="mt-4 text-muted">
              Publish essays, attach video context, pin visual research, and convert social attention into owned audience growth.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { icon: Telescope, text: "Mystery-led research hooks" },
                { icon: Shield, text: "Owned audience capture" },
                { icon: Flame, text: "Motivation into systems" },
                { icon: PlayCircle, text: "YouTube-first distribution" }
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
              <Link href="/resources">
                Explore resources <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <Card className="relative overflow-hidden bg-background/70 backdrop-blur">
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
      <section className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <Badge>Creator fuel</Badge>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold text-cosmic">The archive is the beginning. The mission is momentum.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          Explore the strange, learn the tools, build the system, and turn disciplined curiosity into something real.
        </p>
      </section>
    </>
  );
}
