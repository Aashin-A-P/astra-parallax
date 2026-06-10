import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { ArticleRenderer } from "@/components/mdx/article-renderer";
import { AffiliateDisclosure } from "@/components/mdx/affiliate-disclosure";
import { NewsletterCta } from "@/components/sections/newsletter-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { Badge } from "@/components/ui/badge";
import { StarfieldBackground } from "@/components/visual/starfield-background";
import { getAllPosts, getPostBySlug } from "@/lib/content";
import { buildMetadata } from "@/lib/seo/metadata";
import { articleSchema, breadcrumbSchema } from "@/lib/seo/schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({ title: post.title, description: post.excerpt, path: post.url, image: post.ogImage || post.coverImage });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <article>
        <header className="relative overflow-hidden border-b border-border bg-background-soft/50">
          <StarfieldBackground className="opacity-70" />
          <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mb-5 flex flex-wrap gap-2">
              <Badge>{post.category}</Badge>
              {post.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <h1 className="font-display text-4xl font-semibold leading-tight sm:text-6xl">{post.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">{post.excerpt}</p>
            <div className="mt-5 text-sm text-muted-alt">
              {format(new Date(post.date), "MMM d, yyyy")} - {post.readingTime}
            </div>
            {post.coverImage ? (
              <div className="mt-10 overflow-hidden rounded-lg border border-border shadow-glow">
                <Image src={post.coverImage} alt="" width={1400} height={788} priority className="h-auto w-full object-cover" />
              </div>
            ) : null}
          </div>
        </header>
        <div className="px-4 py-14 sm:px-6 lg:px-8">
          {post.affiliateLinks.length ? (
            <div className="mx-auto max-w-3xl">
              <AffiliateDisclosure />
            </div>
          ) : null}
          <ArticleRenderer source={post.body} />
        </div>
      </article>
      <NewsletterCta />
      <JsonLd data={articleSchema(post)} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: post.category, url: `/${post.normalizedCategory}` }, { name: post.title, url: post.url }])} />
    </>
  );
}
