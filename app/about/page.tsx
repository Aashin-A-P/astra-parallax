import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({ title: "About", description: "About Astra Parallax.", path: "/about" });

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl font-semibold">About Astra Parallax</h1>
      <p className="mt-6 text-lg leading-8 text-muted">
        Astra Parallax is a publishing and discovery hub for mysteries, technology, productivity, AI, and human potential. It is designed to connect social traffic
        with durable editorial content, useful tools, and future products.
      </p>
    </section>
  );
}
