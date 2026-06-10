import type { Metadata } from "next";
import { ResourceCard } from "@/components/cards/resource-card";
import { AffiliateDisclosure } from "@/components/mdx/affiliate-disclosure";
import { JsonLd } from "@/components/seo/json-ld";
import { Badge } from "@/components/ui/badge";
import { getAllResources } from "@/lib/content";
import { buildMetadata } from "@/lib/seo/metadata";
import { collectionPageSchema, itemListSchema } from "@/lib/seo/schema";

export const metadata: Metadata = buildMetadata({
  title: "Resources",
  description: "Curated tools, platforms, systems, and affiliate-ready recommendations from Astra Parallax.",
  path: "/resources"
});

export default function ResourcesPage() {
  const resources = getAllResources();
  const categories = Array.from(new Set(resources.map((resource) => resource.category)));
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Badge>Resources</Badge>
        <h1 className="mt-4 font-display text-4xl font-semibold">Curated tools for curious builders.</h1>
        <p className="mt-4 max-w-2xl text-muted">
          Affiliate-ready listings for software, research tools, creator systems, and digital infrastructure.
        </p>
        <div className="max-w-3xl">
          <AffiliateDisclosure />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge key={category}>{category}</Badge>
          ))}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <ResourceCard key={resource.slug} resource={resource} />
          ))}
        </div>
      </section>
      <JsonLd data={collectionPageSchema("Resources", "Curated tools and affiliate resources from Astra Parallax.", "/resources")} />
      <JsonLd data={itemListSchema(resources)} />
    </>
  );
}
