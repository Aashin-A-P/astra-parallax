import { Instagram, Pin, Radio, Youtube } from "lucide-react";
import type { Metadata } from "next";
import { SectionHeader } from "@/components/sections/section-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StarfieldBackground } from "@/components/visual/starfield-background";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Content",
  description: "Astra Parallax content hub for YouTube videos, Instagram reels, Pinterest pins, and short-form media.",
  path: "/content"
});

const channels = [
  {
    icon: Youtube,
    title: "YouTube Videos",
    description: "Long-form videos, tutorials, explainers, and channel updates will be organized here."
  },
  {
    icon: Instagram,
    title: "Instagram Reels",
    description: "Short-form reels, visual hooks, creator updates, and social posts will be collected here."
  },
  {
    icon: Pin,
    title: "Pinterest Pins",
    description: "Pinterest boards, pins, idea graphics, and traffic assets will be grouped here."
  },
  {
    icon: Radio,
    title: "Other Channels",
    description: "Future content channels, clips, embeds, or campaign links can be added here later."
  }
];

export default function ContentPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-background-soft/50">
        <StarfieldBackground className="opacity-80" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Badge>Content</Badge>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-tight text-cosmic sm:text-6xl">
            Social content hub for videos, reels, pins, and channel assets.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            This section is for non-blog content: YouTube videos, Instagram reels, Pinterest pins, and other media that bring people back to Astra Parallax.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Channels"
          title="A structured home for every channel."
          description="Videos, reels, pins, and supporting notes will be organized here as official Astra Parallax content is released."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <Card key={channel.title}>
                <CardHeader>
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{channel.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted">{channel.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="mt-10 rounded-2xl border border-border bg-surface p-8 shadow-[0_16px_48px_hsl(var(--foreground)_/_0.08)]">
          <Badge>Publishing soon</Badge>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight">The content archive will feature released media only.</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Supporting notes, video links, social posts, and channel assets will be added here when they are ready for visitors.
          </p>
        </div>
      </section>
    </>
  );
}
