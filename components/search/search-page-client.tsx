"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { createSearchEngine, type SearchItem } from "@/lib/content/search";

export function SearchPageClient({ items }: { items: SearchItem[] }) {
  const [query, setQuery] = useState("");
  const engine = useMemo(() => createSearchEngine(items), [items]);
  const results = query.trim() ? engine.search(query).map((result) => result.item) : items;

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl font-semibold">Search</h1>
      <p className="mt-4 text-muted">Search articles, resource listings, tags, and categories. Press the search icon in the header for quick access.</p>
      <div className="mt-8">
        <label htmlFor="search" className="sr-only">
          Search query
        </label>
        <Input id="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try AI, mysteries, workflow..." />
      </div>
      <div className="mt-8 grid gap-3">
        {results.map((item) => (
          <Link key={item.url} href={item.url} className="rounded-lg border border-border bg-surface p-4 hover:bg-surface-alt">
            <div className="mb-2 flex flex-wrap gap-2">
              <Badge>{item.type}</Badge>
              <Badge>{item.category}</Badge>
            </div>
            <h2 className="font-display text-xl font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{item.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
