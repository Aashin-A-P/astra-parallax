"use client";

import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { SearchDialog } from "@/components/search/search-dialog";
import type { SearchItem } from "@/lib/content/search";

export function SiteHeader({ searchItems }: { searchItems: SearchItem[] }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 font-display text-lg font-semibold">
          <span className="grid h-9 w-9 place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary-soft">AP</span>
          <span>Astra Parallax</span>
        </Link>
        <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
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
          <ThemeToggle />
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
                <Link href="/about" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-surface-alt">
                  About
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
