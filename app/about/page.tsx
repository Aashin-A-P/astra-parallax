import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { StarfieldBackground } from "@/components/visual/starfield-background";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({ title: "About Us", description: "About Astra Parallax.", path: "/about" });

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden">
      <StarfieldBackground className="opacity-75" />
      <div className="relative mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <Badge>About Us</Badge>
        <h1 className="mt-4 font-display text-5xl font-bold text-cosmic">Astra Parallax is the central hub for everything I build online.</h1>
        <p className="mt-6 text-lg leading-8 text-muted">
          Astra Parallax brings together content, side projects, affiliate resources, tools, and future digital products. It is designed to make every project easy to
          discover and every visitor path easier to understand.
        </p>
        <p className="mt-5 text-lg leading-8 text-muted">
          The goal is simple: create useful things, organize them clearly, and turn attention from different platforms into one readable, trustworthy website.
        </p>
      </div>
    </section>
  );
}
