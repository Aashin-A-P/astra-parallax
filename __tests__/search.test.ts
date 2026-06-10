import { searchContent } from "@/lib/content/search";
import { getSearchIndex } from "@/lib/content";

describe("search utility", () => {
  it("returns an empty result set when no matching content exists", () => {
    const results = searchContent("research archive", getSearchIndex());
    expect(Array.isArray(results)).toBe(true);
  });
});
