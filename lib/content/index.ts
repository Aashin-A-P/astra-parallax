import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { cache } from "react";
import { siteConfig } from "@/lib/site";
import { normalizeCategory } from "@/lib/utils";

const contentRoot = path.join(process.cwd(), "content");

export type AffiliateLink = {
  label: string;
  url: string;
  merchant: string;
  description: string;
};

export type Post = {
  type: "post";
  title: string;
  slug: string;
  url: string;
  date: string;
  updated?: string;
  category: string;
  normalizedCategory: string;
  tags: string[];
  readingTime: string;
  ogImage?: string;
  excerpt: string;
  coverImage?: string;
  featured: boolean;
  draft: boolean;
  affiliateLinks: AffiliateLink[];
  body: string;
};

export type Resource = {
  type: "resource";
  title: string;
  slug: string;
  url: string;
  date: string;
  category: string;
  normalizedCategory: string;
  tags: string[];
  excerpt: string;
  coverImage?: string;
  ogImage?: string;
  affiliate: boolean;
  affiliateUrl?: string;
  officialUrl?: string;
  priceNote?: string;
  featured: boolean;
  draft: boolean;
  body: string;
};

type RawFrontmatter = Record<string, unknown>;

function getMdxFiles(folder: "posts" | "resources") {
  const dir = path.join(contentRoot, folder);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((file) => file.endsWith(".mdx"));
}

function readMdx(folder: "posts" | "resources", file: string) {
  const raw = fs.readFileSync(path.join(contentRoot, folder, file), "utf8");
  return matter(raw);
}

function asString(value: unknown, fallback = "") {
  return typeof value === "string" ? value : fallback;
}

function asBoolean(value: unknown, fallback = false) {
  return typeof value === "boolean" ? value : fallback;
}

function asStringArray(value: unknown) {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
}

function asAffiliateLinks(value: unknown): AffiliateLink[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      if (!item || typeof item !== "object") return null;
      const link = item as Record<string, unknown>;
      return {
        label: asString(link.label),
        url: asString(link.url),
        merchant: asString(link.merchant),
        description: asString(link.description)
      };
    })
    .filter((item): item is AffiliateLink => Boolean(item?.label && item.url));
}

function slugFromFile(file: string) {
  return file.replace(/\.mdx$/, "");
}

function sortByDateDesc<T extends { date: string }>(items: T[]) {
  return items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function toPost(file: string): Post {
  const { data, content } = readMdx("posts", file);
  const frontmatter = data as RawFrontmatter;
  const category = asString(frontmatter.category, "technology");
  const slug = slugFromFile(file);
  return {
    type: "post",
    title: asString(frontmatter.title, slug),
    slug,
    url: `/articles/${slug}`,
    date: asString(frontmatter.date),
    updated: asString(frontmatter.updated),
    category,
    normalizedCategory: normalizeCategory(category),
    tags: asStringArray(frontmatter.tags),
    readingTime: asString(frontmatter.readingTime, readingTime(content).text),
    ogImage: asString(frontmatter.ogImage),
    excerpt: asString(frontmatter.excerpt),
    coverImage: asString(frontmatter.coverImage),
    featured: asBoolean(frontmatter.featured),
    draft: asBoolean(frontmatter.draft),
    affiliateLinks: asAffiliateLinks(frontmatter.affiliateLinks),
    body: content
  };
}

function toResource(file: string): Resource {
  const { data, content } = readMdx("resources", file);
  const frontmatter = data as RawFrontmatter;
  const category = asString(frontmatter.category, "technology");
  const slug = asString(frontmatter.slug, slugFromFile(file));
  return {
    type: "resource",
    title: asString(frontmatter.title, slug),
    slug,
    url: `/resources/${slug}`,
    date: asString(frontmatter.date),
    category,
    normalizedCategory: normalizeCategory(category),
    tags: asStringArray(frontmatter.tags),
    excerpt: asString(frontmatter.excerpt),
    coverImage: asString(frontmatter.coverImage),
    ogImage: asString(frontmatter.ogImage),
    affiliate: asBoolean(frontmatter.affiliate),
    affiliateUrl: asString(frontmatter.affiliateUrl),
    officialUrl: asString(frontmatter.officialUrl),
    priceNote: asString(frontmatter.priceNote),
    featured: asBoolean(frontmatter.featured),
    draft: asBoolean(frontmatter.draft),
    body: content
  };
}

export const getAllPosts = cache(() => sortByDateDesc(getMdxFiles("posts").map(toPost).filter((post) => !post.draft)));

export const getFeaturedPosts = cache(() => getAllPosts().filter((post) => post.featured));

export const getPostsByCategory = cache((category: string) =>
  getAllPosts().filter((post) => post.normalizedCategory === normalizeCategory(category))
);

export const getPostBySlug = cache((slug: string) => getAllPosts().find((post) => post.slug === slug));

export const getAllResources = cache(() => sortByDateDesc(getMdxFiles("resources").map(toResource).filter((resource) => !resource.draft)));

export const getResourceBySlug = cache((slug: string) => getAllResources().find((resource) => resource.slug === slug));

export const getAllCategories = cache(() => siteConfig.categories);

export const getSearchIndex = cache(() => [
  ...getAllPosts().map((post) => ({
    type: post.type,
    title: post.title,
    excerpt: post.excerpt,
    category: post.normalizedCategory,
    tags: post.tags,
    url: post.url
  })),
  ...getAllResources().map((resource) => ({
    type: resource.type,
    title: resource.title,
    excerpt: resource.excerpt,
    category: resource.normalizedCategory,
    tags: resource.tags,
    url: resource.url
  }))
]);
