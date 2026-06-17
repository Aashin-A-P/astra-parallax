import type { MetadataRoute } from "next";
import { getAllCategories, getAllPosts, getAllResources } from "@/lib/content";
import { studioProducts } from "@/lib/studio-products";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/content", "/studio", "/affiliate", "/search"];
  return [
    ...staticRoutes.map((route) => ({ url: absoluteUrl(route), lastModified: new Date() })),
    ...studioProducts.map((product) => ({ url: absoluteUrl(`/studio/${product.slug}`), lastModified: new Date() })),
    ...getAllCategories().map((category) => ({ url: absoluteUrl(`/${category.slug}`), lastModified: new Date() })),
    ...getAllPosts().map((post) => ({ url: absoluteUrl(post.url), lastModified: new Date(post.updated || post.date) })),
    ...getAllResources().map((resource) => ({ url: absoluteUrl(resource.url), lastModified: new Date(resource.date) }))
  ];
}
