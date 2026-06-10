import type { Metadata } from "next";
import { SearchPageClient } from "@/components/search/search-page-client";
import { getSearchIndex } from "@/lib/content";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({ title: "Search", description: "Search Astra Parallax content.", path: "/search", noIndex: true });

export default function SearchPage() {
  return <SearchPageClient items={getSearchIndex()} />;
}
