export const siteConfig = {
  name: "Astra Parallax",
  tagline: "Content, design, AI, and curated digital resources from one independent studio.",
  description:
    "Astra Parallax is an independent digital studio and publishing hub for curiosity-driven content, practical AI workflows, design work, websites, print-on-demand concepts, and curated resources.",
  defaultTitle: "Astra Parallax - Content, Design, AI, Store, and Digital Resources",
  url: process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "http://localhost:3000",
  ogImage: "/og/default-og.svg",
  categories: [
    {
      slug: "mysteries",
      name: "Mysteries",
      description: "Curiosity-led stories, strange questions, daily facts, and research notes for curious minds."
    },
    {
      slug: "technology",
      name: "Technology",
      description: "Useful tools, platforms, digital systems, and practical technology for modern online work."
    },
    {
      slug: "productivity",
      name: "Creative Systems",
      description: "Repeatable workflows for content planning, publishing, research, design, and audience growth."
    },
    {
      slug: "ai",
      name: "AI",
      description: "AI workflows, automation ideas, creative methods, and tools for building useful digital work."
    }
  ],
  nav: [
    { href: "/content", label: "Content" },
    { href: "/blog", label: "Blog" },
    { href: "/studio", label: "Studio" },
    { href: "/store", label: "Store" },
    { href: "/about", label: "About Us" }
  ],
  socials: {
    youtube: "https://youtube.com/@astraparallax",
    pinterest: "https://www.pinterest.com/astraparallax21/",
    instagram: "https://instagram.com/astraparallax",
    x: "https://x.com/astraparallax",
    email: "aarushdestroyer@gmail.com"
  }
} as const;

export type SiteCategory = (typeof siteConfig.categories)[number];
