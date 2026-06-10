export const siteConfig = {
  name: "Astra Parallax",
  tagline: "Exploring mysteries, technology, and human potential.",
  description:
    "Astra Parallax explores mysteries, technology, productivity, AI, and human potential through articles, videos, curated resources, and future products.",
  defaultTitle: "Astra Parallax - Mysteries, Technology, Productivity, and Digital Discovery",
  url: process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "http://localhost:3000",
  ogImage: "/og/default-og.svg",
  categories: [
    {
      slug: "mysteries",
      name: "Mysteries",
      description: "Deep dives into unexplained patterns, ancient questions, strange signals, and the edges of human understanding."
    },
    {
      slug: "technology",
      name: "Technology",
      description: "Practical and speculative technology coverage for creators, builders, and digitally curious readers."
    },
    {
      slug: "productivity",
      name: "Productivity",
      description: "Systems, workflows, and operating principles for doing meaningful work without losing the bigger picture."
    },
    {
      slug: "ai",
      name: "AI",
      description: "Applied artificial intelligence, model workflows, creative automation, and the changing interface between people and machines."
    }
  ],
  nav: [
    { href: "/mysteries", label: "Mysteries" },
    { href: "/technology", label: "Technology" },
    { href: "/productivity", label: "Productivity" },
    { href: "/ai", label: "AI" },
    { href: "/resources", label: "Resources" },
    { href: "/store", label: "Store" }
  ],
  socials: {
    youtube: "https://youtube.com/@astraparallax",
    pinterest: "https://pinterest.com/astraparallax",
    instagram: "https://instagram.com/astraparallax",
    x: "https://x.com/astraparallax",
    email: "hello@astraparallax.example"
  }
} as const;

export type SiteCategory = (typeof siteConfig.categories)[number];
