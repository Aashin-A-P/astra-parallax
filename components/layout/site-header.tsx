"use client";

import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SearchDialog } from "@/components/search/search-dialog";
import type { SearchItem } from "@/lib/content/search";

export function SiteHeader({ searchItems }: { searchItems: SearchItem[] }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/90 shadow-[0_1px_24px_rgba(15,23,42,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 font-display text-lg font-extrabold tracking-tight sm:text-xl">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-sm font-extrabold text-white shadow-[0_14px_34px_rgba(37,99,235,0.22)]">AP</span>
          <span className="text-cosmic">Astra Parallax</span>
        </Link>
        <nav className="ml-auto hidden items-center gap-2 rounded-full border border-border bg-background/80 p-1 lg:flex" aria-label="Primary navigation">
          {siteConfig.nav.map((item) => (
            <Button key={item.href} asChild variant="ghost" size="sm">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-1 lg:ml-2">
          <SearchDialog
            items={searchItems}
            trigger={
              <Button variant="ghost" size="icon" aria-label="Search">
                <Search className="h-4 w-4" />
              </Button>
            }
          />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open navigation">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="mt-10 grid gap-2" aria-label="Mobile navigation">
                {siteConfig.nav.map((item) => (
                  <Link key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm font-medium hover:bg-surface-alt">
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
