import { articleSchema, breadcrumbSchema } from "@/lib/seo/schema";
import type { Post } from "@/lib/content";

describe("schema helpers", () => {
  it("builds article JSON-LD", () => {
    const post: Post = {
      type: "post",
      title: "Real Post",
      slug: "real-post",
      url: "/articles/real-post",
      date: "2026-01-01",
      updated: "2026-01-02",
      category: "Ideas",
      normalizedCategory: "mysteries",
      tags: ["ideas"],
      readingTime: "3 min read",
      excerpt: "A real post summary.",
      featured: false,
      draft: false,
      affiliateLinks: [],
      body: ""
    };
    expect(articleSchema(post)["@type"]).toBe("Article");
  });

  it("builds breadcrumb positions", () => {
    const schema = breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Resources", url: "/resources" }
    ]);
    expect(schema.itemListElement[1].position).toBe(2);
  });
});
