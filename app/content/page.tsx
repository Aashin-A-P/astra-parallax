import { CalendarDays, Instagram, NotebookPen, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Content",
  description: "Astra Parallax content archive for Instagram stories, posts, captions, and visual notes.",
  path: "/content"
});

const contentTypes = [
  {
    icon: Instagram,
    title: "Story Drops",
    description: "Instagram story sequences, announcement frames, mood-led updates, and short visual narratives."
  },
  {
    icon: NotebookPen,
    title: "Post Notes",
    description: "Caption ideas, post themes, carousel concepts, and behind-the-scenes notes for each release."
  },
  {
    icon: CalendarDays,
    title: "Release Log",
    description: "A simple record of what was published, what collection it supports, and where visitors can find it."
  }
];

const plannedPosts = ["Gold ink launch story", "Brush texture process reel", "Quote poster carousel", "Redbubble collection teaser"];

export default function ContentPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-background-soft/65 px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,hsl(var(--primary)/0.18),transparent_22rem),radial-gradient(circle_at_88%_14%,hsl(var(--accent)/0.12),transparent_20rem)]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-soft">Content</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-tight text-metallic sm:text-6xl">
            Stories, captions, and Instagram-first ideas.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            This tab is for the content you publish around Astra Parallax: story sequences, post concepts, captions, launch notes, and the small creative fragments that support product releases.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {contentTypes.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-md border border-border bg-surface p-6 shadow-[0_18px_55px_hsl(var(--foreground)_/_0.08)]">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-primary/12 text-primary-soft">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-5 font-display text-xl font-bold text-foreground">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-soft">Archive Format</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground">Built for quick posting and clean browsing.</h2>
            <p className="mt-4 text-muted">
              Each entry can hold the story title, visual theme, caption draft, Instagram link, product tie-in, and notes for turning a post into a future release.
            </p>
          </div>
          <div className="grid gap-3">
            {plannedPosts.map((post) => (
              <div key={post} className="flex items-center gap-3 rounded-md border border-border bg-background-soft/70 p-4">
                <Sparkles className="h-4 w-4 shrink-0 text-primary-soft" />
                <span className="font-medium text-foreground">{post}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
