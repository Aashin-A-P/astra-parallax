import { Brain, Brush, Globe2, PackageOpen, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/sections/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StarfieldBackground } from "@/components/visual/starfield-background";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Studio",
  description: "Astra Parallax studio for AI workflows, digital design, websites, print-on-demand concepts, and creative services.",
  path: "/studio"
});

const studioPaths = [
  {
    icon: Brain,
    title: "AI Workflows",
    description: "Practical systems for research, ideation, content planning, automation, and useful digital creation."
  },
  {
    icon: Brush,
    title: "Design",
    description: "Visual concepts, brand assets, social graphics, product artwork, and print-on-demand design directions."
  },
  {
    icon: Globe2,
    title: "Websites",
    description: "Clean web experiences for personal brands, content hubs, stores, portfolios, and digital campaigns."
  },
  {
    icon: PackageOpen,
    title: "Print-on-Demand",
    description: "Print-on-demand collections, product artwork, product positioning, and storefront-ready concepts."
  }
];

export default function StudioPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-background-soft/50">
        <StarfieldBackground className="opacity-75" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Badge>Studio</Badge>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-tight text-cosmic sm:text-6xl">
            Design, AI workflows, websites, and digital product direction.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            The studio section is the professional home for Astra Parallax creative work. Portfolio entries, design collections, and service-ready projects will be added as they are released.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/store">Visit Store</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/content">Explore Content</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Creative directions"
          title="A structured space for future releases."
          description="Each path is prepared for professional work without showing unfinished portfolio items or placeholder projects."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {studioPaths.map((path) => {
            const Icon = path.icon;
            return (
              <Card key={path.title}>
                <CardHeader>
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{path.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted">{path.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="mt-10 rounded-2xl border border-border bg-surface p-8 shadow-[0_16px_48px_hsl(var(--foreground)_/_0.08)]">
          <Badge>Portfolio opening soon</Badge>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight">The studio archive will feature released work only.</h2>
          <p className="mt-3 max-w-2xl text-muted">
            This keeps Astra Parallax credible from the beginning: visitors see a polished structure today, and finished design, web, AI, and product work can be published here as it becomes ready.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
            <Sparkles className="h-4 w-4" />
            Explore - Question - Elevate
          </div>
        </div>
      </section>
    </>
  );
}
