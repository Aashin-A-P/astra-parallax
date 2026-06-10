import type { Metadata } from "next";
import { NewsletterCta } from "@/components/sections/newsletter-cta";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Store",
  description: "Future digital products, guides, and field systems from Astra Parallax.",
  path: "/store"
});

const products = ["Field Notes System", "Creator Research OS", "Mystery Archive Guide"];

export default function StorePage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Badge>Coming soon</Badge>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold">Digital products for research, creation, and disciplined curiosity.</h1>
        <p className="mt-4 max-w-2xl text-muted">
          The Astra Parallax store will launch with practical guides, templates, and systems for creators who want better signal, sharper workflows, and deeper archives.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {products.map((product) => (
            <Card key={product}>
              <CardHeader>
                <CardTitle>{product}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted">A premium digital product concept reserved for the first store release.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <NewsletterCta />
    </>
  );
}
