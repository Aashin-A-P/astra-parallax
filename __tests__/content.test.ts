import { getAllCategories, getAllPosts, getAllResources, getPostBySlug } from "@/lib/content";

describe("content adapter", () => {
  it("loads published posts with computed URLs and categories", () => {
    const posts = getAllPosts();
    expect(posts.length).toBeGreaterThanOrEqual(2);
    expect(posts[0]).toHaveProperty("url");
    expect(posts.map((post) => post.normalizedCategory)).toEqual(expect.arrayContaining(["mysteries", "productivity"]));
  });

  it("finds posts by slug", () => {
    expect(getPostBySlug("mystery-signal-archive")?.title).toContain("Mystery Signal");
  });

  it("returns configured categories and resources", () => {
    expect(getAllCategories()).toHaveLength(4);
    expect(getAllResources().length).toBeGreaterThanOrEqual(2);
  });
});
