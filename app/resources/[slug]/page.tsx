import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { ArticleRenderer } from "@/components/mdx/article-renderer";
import { AffiliateDisclosure } from "@/components/mdx/affiliate-disclosure";
import { NewsletterCta } from "@/components/sections/newsletter-cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllResources, getResourceBySlug } from "@/lib/content";
import { buildMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllResources().map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) return {};
  return buildMetadata({ title: resource.title, description: resource.excerpt, path: resource.url, image: resource.ogImage || resource.coverImage });
}

export default async function ResourcePage({ params }: Props) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) notFound();

  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
        <article>
          <div className="mb-5 flex flex-wrap gap-2">
            <Badge>{resource.category}</Badge>
            {resource.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <h1 className="font-display text-4xl font-semibold">{resource.title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">{resource.excerpt}</p>
          {resource.coverImage ? (
            <div className="mt-8 overflow-hidden rounded-lg border border-border">
              <Image src={resource.coverImage} alt="" width={1200} height={675} className="h-auto w-full object-cover" />
            </div>
          ) : null}
          {resource.affiliate ? <AffiliateDisclosure /> : null}
          <ArticleRenderer source={resource.body} />
        </article>
        <aside>
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Resource access</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {resource.priceNote ? <p className="rounded-md bg-surface-alt p-3 text-sm text-muted">{resource.priceNote}</p> : null}
              {resource.affiliateUrl ? (
                <Button asChild className="w-full">
                  <a href={resource.affiliateUrl} target="_blank" rel="noreferrer">
                    Affiliate link <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              ) : null}
              {resource.officialUrl ? (
                <Button asChild variant="secondary" className="w-full">
                  <a href={resource.officialUrl} target="_blank" rel="noreferrer">
                    Official site <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              ) : null}
            </CardContent>
          </Card>
        </aside>
      </section>
      <NewsletterCta />
    </>
  );
}
