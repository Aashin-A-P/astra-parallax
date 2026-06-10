import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { NewsletterForm } from "@/components/newsletter/newsletter-form";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background-soft">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3 font-display text-xl font-semibold">
            <span className="relative h-10 w-10 overflow-hidden rounded-full border border-primary/35 bg-background shadow-glow">
              <Image src="/icons/astra-icon.png" alt="" fill sizes="40px" className="object-cover" />
            </span>
            <span className="text-metallic">{siteConfig.name}</span>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-6 text-muted">{siteConfig.tagline}</p>
          <p className="mt-5 text-xs leading-5 text-muted-alt">
            Affiliate note: some resource links may earn a commission while keeping recommendations editorially independent.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm">
          <div>
            <h2 className="font-medium text-foreground">Explore</h2>
            <ul className="mt-3 space-y-2 text-muted">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-medium text-foreground">Social</h2>
            <ul className="mt-3 space-y-2 text-muted">
              {Object.entries(siteConfig.socials).map(([key, value]) => (
                <li key={key}>
                  <a href={value.startsWith("http") ? value : `mailto:${value}`}>{key}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h2 className="font-medium text-foreground">Join the Dispatch</h2>
          <p className="mt-2 text-sm text-muted">Essays, resources, and product notes.</p>
          <div className="mt-4">
            <NewsletterForm compact />
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-border px-4 py-5 text-xs text-muted-alt sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>Copyright {new Date().getFullYear()} Astra Parallax. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
