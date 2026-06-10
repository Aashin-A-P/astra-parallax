import { getAllCategories, getAllPosts, getAllResources } from "@/lib/content";

describe("content adapter", () => {
  it("loads posts collection without requiring seed content", () => {
    const posts = getAllPosts();
    expect(Array.isArray(posts)).toBe(true);
    expect(posts.every((post) => post.url.startsWith("/articles/"))).toBe(true);
  });

  it("returns configured categories and an optional resources collection", () => {
    expect(getAllCategories()).toHaveLength(4);
    expect(Array.isArray(getAllResources())).toBe(true);
  });
});
