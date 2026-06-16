"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SearchDialog } from "@/components/search/search-dialog";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import type { SearchItem } from "@/lib/content/search";

export function SiteHeader({ searchItems }: { searchItems: SearchItem[] }) {
  return (
    <header className="sticky top-0 z-40 border-b border-primary/20 bg-background/82 shadow-[0_1px_28px_rgba(0,0,0,0.42)] backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 font-display text-lg font-extrabold tracking-tight sm:text-xl">
          <span className="relative h-11 w-11 overflow-hidden rounded-full border border-primary/40 bg-background shadow-glow">
            <Image src="/logo-mark.svg" alt="" fill sizes="44px" className="object-cover" priority />
          </span>
          <span className="text-metallic">Astra Parallax</span>
        </Link>
        <nav className="ml-auto hidden items-center gap-2 rounded-full border border-primary/20 bg-surface/70 p-1 lg:flex" aria-label="Primary navigation">
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
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
