import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { StarfieldBackground } from "@/components/visual/starfield-background";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description: "About Astra Parallax, an independent digital studio and publishing hub for content, Redbubble products, AI workflows, and curated resources.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden">
      <StarfieldBackground className="opacity-75" />
      <div className="relative mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <Badge>About Us</Badge>
        <h1 className="mt-4 font-display text-5xl font-bold text-cosmic">Astra Parallax is an independent digital studio and curiosity-led publishing hub.</h1>
        <p className="mt-6 text-lg leading-8 text-muted">
          Astra Parallax brings together mystery and technology content, blog writing, AI-assisted workflows, Redbubble products, print-on-demand concepts, and curated resources.
          It is built to make every release easy to discover and every visitor path easier to understand.
        </p>
        <p className="mt-5 text-lg leading-8 text-muted">
          The goal is simple: publish useful work, organize it clearly, and keep the audience connected through one readable, trustworthy website.
        </p>
      </div>
    </section>
  );
}
