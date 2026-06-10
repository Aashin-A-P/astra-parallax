import { articleSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { getPostBySlug } from "@/lib/content";

describe("schema helpers", () => {
  it("builds article JSON-LD", () => {
    const post = getPostBySlug("creator-operating-system");
    expect(post).toBeDefined();
    expect(articleSchema(post!)["@type"]).toBe("Article");
  });

  it("builds breadcrumb positions", () => {
    const schema = breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Resources", url: "/resources" }
    ]);
    expect(schema.itemListElement[1].position).toBe(2);
  });
});
