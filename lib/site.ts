export const siteConfig = {
  name: "Astra Parallax",
  tagline: "Stories, Redbubble products, and curated affiliate picks from Astra Parallax.",
  description:
    "Astra Parallax is an independent creative hub for Instagram stories, Redbubble collections, and curated affiliate product links.",
  defaultTitle: "Astra Parallax - Content, Redbubble, and Affiliate Picks",
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
      description: "Repeatable workflows for content planning, publishing, research, and audience growth."
    },
    {
      slug: "ai",
      name: "AI",
      description: "AI workflows, automation ideas, creative methods, and tools for building useful digital work."
    }
  ],
  nav: [
    { href: "/content", label: "Content" },
    { href: "/studio", label: "Studio" },
    { href: "/affiliate", label: "Affiliate" }
  ],
  shops: {
    redbubble: "https://Astra-Parallax.redbubble.com",
    affiliateDisclosure: "Affiliate links may earn a commission while keeping selection and presentation independent."
  },
  socials: {
    pinterest: "https://in.pinterest.com/aashinap/",
    instagram: "https://www.instagram.com/astraparallax._.21/",
    x: "https://x.com/astraparallax",
    email: "aarushdestroyer@gmail.com"
  }
} as const;

export type SiteCategory = (typeof siteConfig.categories)[number];
