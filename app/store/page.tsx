import { Rocket, Sparkles, Telescope } from "lucide-react";
import type { Metadata } from "next";
import { NewsletterCta } from "@/components/sections/newsletter-cta";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StarfieldBackground } from "@/components/visual/starfield-background";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Store",
  description: "Future digital products, guides, and field systems from Astra Parallax.",
  path: "/store"
});

const products = ["Field Notes System", "Creator Research OS", "Mystery Archive Guide"];
const icons = [Telescope, Rocket, Sparkles];

export default function StorePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <StarfieldBackground className="opacity-80" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Badge>Coming soon</Badge>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold text-cosmic">Digital products for research, creation, and disciplined curiosity.</h1>
          <p className="mt-4 max-w-2xl text-muted">
            The Astra Parallax store will launch with practical guides, templates, and systems for creators who want better signal, sharper workflows, and deeper archives.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {products.map((product, index) => {
              const Icon = icons[index] || Sparkles;
              return (
            <Card key={product} className="bg-background/70 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-glow">
              <CardHeader>
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary-soft">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle>{product}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted">A premium digital product concept reserved for the first store release, built for creators who want sharper signal and stronger systems.</p>
              </CardContent>
            </Card>
              );
            })}
          </div>
        </div>
      </section>
      <NewsletterCta />
    </>
  );
}
