"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { createSearchEngine, type SearchItem } from "@/lib/content/search";

type Props = {
  trigger: ReactNode;
  items?: SearchItem[];
};

export function SearchDialog({ trigger, items = [] }: Props) {
  const [query, setQuery] = useState("");
  const engine = useMemo(() => createSearchEngine(items), [items]);
  const results = query.trim() ? engine.search(query).slice(0, 8).map((result) => result.item) : [];

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Search Astra Parallax</DialogTitle>
        <DialogDescription>Find articles, categories, tags, and resources.</DialogDescription>
        <div className="relative mt-4">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-alt" />
          <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the archives..." className="pl-9" autoFocus />
        </div>
        <div className="mt-4 grid gap-2">
          {results.map((item) => (
            <Link key={item.url} href={item.url} className="rounded-md border border-border p-3 hover:bg-surface-alt">
              <div className="mb-2 flex gap-2">
                <Badge>{item.type}</Badge>
                <Badge>{item.category}</Badge>
              </div>
              <div className="font-medium">{item.title}</div>
              <p className="mt-1 text-sm text-muted">{item.excerpt}</p>
            </Link>
          ))}
          {query && results.length === 0 ? <p className="text-sm text-muted">No results found.</p> : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
