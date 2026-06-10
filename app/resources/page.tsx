import type { Metadata } from "next";
import { ResourceCard } from "@/components/cards/resource-card";
import { AffiliateDisclosure } from "@/components/mdx/affiliate-disclosure";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionHeader } from "@/components/sections/section-header";
import { Badge } from "@/components/ui/badge";
import { StarfieldBackground } from "@/components/visual/starfield-background";
import { getAllResources } from "@/lib/content";
import { buildMetadata } from "@/lib/seo/metadata";
import { collectionPageSchema, itemListSchema } from "@/lib/seo/schema";

export const metadata: Metadata = buildMetadata({
  title: "Resources",
  description: "Curated tools, platforms, systems, and recommended resources from Astra Parallax.",
  path: "/resources"
});

export default function ResourcesPage() {
  const resources = getAllResources();
  const categories = Array.from(new Set(resources.map((resource) => resource.category)));
  return (
    <>
      <section className="relative overflow-hidden">
        <StarfieldBackground className="opacity-75" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Badge>Resources</Badge>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold text-cosmic">Curated resources for creative digital work.</h1>
          <p className="mt-4 max-w-2xl text-muted">
            A selected library for software, research tools, design resources, publishing systems, and digital infrastructure.
          </p>
          <div className="max-w-3xl">
            <AffiliateDisclosure />
          </div>
          {categories.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge key={category}>{category}</Badge>
              ))}
            </div>
          ) : null}
          <div className="mt-12">
            <SectionHeader eyebrow="Toolkit" title="Choose the next instrument." />
          </div>
          {resources.length ? (
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {resources.map((resource) => (
                <ResourceCard key={resource.slug} resource={resource} />
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-border bg-surface p-8 text-muted shadow-[0_16px_48px_hsl(var(--foreground)_/_0.08)]">
              The resource library will open with reviewed tools and recommendations.
            </div>
          )}
        </div>
      </section>
      <JsonLd data={collectionPageSchema("Resources", "Curated tools and affiliate resources from Astra Parallax.", "/resources")} />
      <JsonLd data={itemListSchema(resources)} />
    </>
  );
}
