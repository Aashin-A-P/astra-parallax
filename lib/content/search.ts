import Fuse from "fuse.js";

export type SearchItem = {
  type: "post" | "resource";
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  url: string;
};

export function createSearchEngine(items: SearchItem[]) {
  return new Fuse(items, {
    includeScore: true,
    threshold: 0.45,
    ignoreLocation: true,
    minMatchCharLength: 2,
    keys: [
      { name: "title", weight: 0.45 },
      { name: "excerpt", weight: 0.25 },
      { name: "category", weight: 0.15 },
      { name: "tags", weight: 0.15 }
    ]
  });
}

export function searchContent(query: string, items: SearchItem[]) {
  const trimmed = query.trim();
  if (!trimmed) return [];
  return createSearchEngine(items)
    .search(trimmed)
    .map((result) => result.item);
}
