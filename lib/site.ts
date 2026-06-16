export const siteConfig = {
  name: "Astra Parallax",
  tagline: "Create, inspire, design. Stories, artwork, and print-on-demand collections from an independent visual studio.",
  description:
    "Astra Parallax is an independent design and print-on-demand studio for Instagram stories, artwork, Redbubble collections, and curated affiliate product links.",
  defaultTitle: "Astra Parallax - Content, Design, and Print-on-Demand Studio",
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
    { href: "/design", label: "Design" },
    { href: "/studio", label: "Studio" }
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
