import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, MessageCircle, Pin } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { NewsletterForm } from "@/components/newsletter/newsletter-form";

const socialLinks = [
  { key: "pinterest", label: "Pinterest", icon: Pin },
  { key: "instagram", label: "Instagram", icon: Instagram },
  { key: "x", label: "X", icon: MessageCircle },
  { key: "email", label: "Email", icon: Mail }
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background-soft">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3 font-display text-xl font-semibold">
            <span className="relative h-10 w-10 overflow-hidden rounded-full border border-primary/35 bg-background shadow-glow">
              <Image src="/logo-mark.svg" alt="" fill sizes="40px" className="object-cover" />
            </span>
            <span className="text-metallic">{siteConfig.name}</span>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-6 text-muted">{siteConfig.tagline}</p>
          <p className="mt-5 text-xs leading-5 text-muted-alt">{siteConfig.shops.affiliateDisclosure}</p>
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
            <ul className="mt-3 grid gap-2">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                const value = siteConfig.socials[item.key];
                return (
                <li key={item.key}>
                  <a
                    href={value.startsWith("http") ? value : `mailto:${value}`}
                    className="group flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-2 text-muted transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface hover:text-primary hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    target={value.startsWith("http") ? "_blank" : undefined}
                    rel={value.startsWith("http") ? "noreferrer" : undefined}
                  >
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-background">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </a>
                </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div>
          <h2 className="font-medium text-foreground">Join the Dispatch</h2>
          <p className="mt-2 text-sm text-muted">Story drops, design releases, and product notes.</p>
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
