import { searchContent } from "@/lib/content/search";
import { getSearchIndex } from "@/lib/content";

describe("search utility", () => {
  it("finds content by title and tag", () => {
    const results = searchContent("research archive", getSearchIndex());
    expect(results.some((item) => item.url.includes("mystery-signal-archive"))).toBe(true);
  });
});
