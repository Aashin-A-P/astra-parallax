export type ContentlayerField =
  | "string"
  | "date"
  | "boolean"
  | "list"
  | "json";

export const contentCollections = {
  Post: {
    filePathPattern: "content/posts/**/*.mdx",
    fields: {
      title: "string",
      date: "date",
      updated: "date",
      category: "string",
      tags: "list",
      readingTime: "string",
      ogImage: "string",
      excerpt: "string",
      coverImage: "string",
      featured: "boolean",
      draft: "boolean",
      affiliateLinks: "json"
    } satisfies Record<string, ContentlayerField>,
    computedFields: ["slug", "url", "normalizedCategory"]
  },
  Resource: {
    filePathPattern: "content/resources/**/*.mdx",
    fields: {
      title: "string",
      slug: "string",
      date: "date",
      category: "string",
      tags: "list",
      excerpt: "string",
      coverImage: "string",
      ogImage: "string",
      affiliate: "boolean",
      affiliateUrl: "string",
      officialUrl: "string",
      priceNote: "string",
      featured: "boolean",
      draft: "boolean"
    } satisfies Record<string, ContentlayerField>,
    computedFields: ["url", "normalizedCategory"]
  }
};

export default contentCollections;
