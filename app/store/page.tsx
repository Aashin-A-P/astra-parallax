import type { Metadata } from "next";
import { ResourceCard } from "@/components/cards/resource-card";
import { NewsletterCta } from "@/components/sections/newsletter-cta";
import { Badge } from "@/components/ui/badge";
import { StarfieldBackground } from "@/components/visual/starfield-background";
import { getAllResources } from "@/lib/content";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Store",
  description: "Curated tools, affiliate resources, print-on-demand links, and digital product collections from Astra Parallax.",
  path: "/store"
});

export default function StorePage() {
  const resources = getAllResources();
  return (
    <>
      <section className="relative overflow-hidden">
        <StarfieldBackground className="opacity-80" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Badge>Store</Badge>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold text-cosmic">Curated tools, product links, and store collections.</h1>
          <p className="mt-4 max-w-2xl text-muted">
            The Astra Parallax store brings together recommended tools, affiliate picks, print-on-demand collections, templates, and digital resources selected with care.
          </p>
          <div className="mt-16">
            <Badge>Storefront</Badge>
            <h2 className="mt-4 font-display text-4xl font-bold text-cosmic">Recommended tools and product showcases.</h2>
            <p className="mt-3 max-w-2xl text-muted">
              Store listings will focus on useful software, creative resources, affiliate recommendations, and print-on-demand product directions.
            </p>
            {resources.length ? (
              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {resources.map((resource) => (
                  <ResourceCard key={resource.slug} resource={resource} />
                ))}
              </div>
            ) : (
              <div className="mt-8 rounded-2xl border border-border bg-surface p-8 shadow-[0_16px_48px_hsl(var(--foreground)_/_0.08)]">
                <Badge>Store opening soon</Badge>
                <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">The store will feature reviewed items only.</h3>
                <p className="mt-3 max-w-2xl text-muted">
                  Product links, affiliate recommendations, and print-on-demand collections will appear here after they are selected and prepared.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      <NewsletterCta />
    </>
  );
}
