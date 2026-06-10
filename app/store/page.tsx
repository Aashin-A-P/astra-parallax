import type { Metadata } from "next";
import { ResourceCard } from "@/components/cards/resource-card";
import { NewsletterCta } from "@/components/sections/newsletter-cta";
import { Badge } from "@/components/ui/badge";
import { StarfieldBackground } from "@/components/visual/starfield-background";
import { getAllResources } from "@/lib/content";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Store",
  description: "Affiliate resources, recommended tools, digital products, and future offers from Astra Parallax.",
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
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold text-cosmic">Tools, affiliate resources, and future products in one place.</h1>
          <p className="mt-4 max-w-2xl text-muted">
            The Astra Parallax store brings together recommended tools, affiliate picks, templates, guides, and future offers connected to the creator hub.
          </p>
          <div className="mt-16">
            <Badge>Affiliate toolkit</Badge>
            <h2 className="mt-4 font-display text-4xl font-bold text-cosmic">Recommended tools and resources.</h2>
            <p className="mt-3 max-w-2xl text-muted">
              Store also houses affiliate-ready resources, software recommendations, and creator tools.
            </p>
            {resources.length ? (
              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {resources.map((resource) => (
                  <ResourceCard key={resource.slug} resource={resource} />
                ))}
              </div>
            ) : (
              <div className="mt-8 rounded-2xl border border-border bg-surface p-8 shadow-[0_16px_48px_rgba(15,23,42,0.07)]">
                <Badge>No store items yet</Badge>
                <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">Your store is ready for real resources.</h3>
                <p className="mt-3 max-w-2xl text-muted">
                  Add real affiliate listings or product pages in <code className="rounded bg-background-soft px-1.5 py-0.5">content/resources</code>.
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
