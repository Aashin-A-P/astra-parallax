import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";

type SeoInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export function buildMetadata({ title, description, path = "/", image, noIndex }: SeoInput = {}): Metadata {
  const metaTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.defaultTitle;
  const metaDescription = description || siteConfig.description;
  const canonical = absoluteUrl(path);
  const ogImage = absoluteUrl(image || siteConfig.ogImage);

  return {
    title: metaTitle,
    description: metaDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical,
      types: {
        "application/rss+xml": absoluteUrl("/rss.xml")
      }
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonical,
      siteName: siteConfig.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: metaTitle }],
      locale: "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [ogImage]
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION
    },
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
      apple: "/logo-mark.svg"
    }
  };
}
