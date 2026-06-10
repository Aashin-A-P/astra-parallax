export const siteConfig = {
  name: "Astra Parallax",
  tagline: "Content, tools, projects, and ideas from one creator hub.",
  description:
    "Astra Parallax is a central hub for content, side projects, affiliate resources, creator tools, and future digital products.",
  defaultTitle: "Astra Parallax - Content, Store, Side Projects, and Creator Resources",
  url: process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "http://localhost:3000",
  ogImage: "/og/default-og.svg",
  categories: [
    {
      slug: "mysteries",
      name: "Ideas",
      description: "Thoughtful notes, stories, observations, and research threads that spark new projects."
    },
    {
      slug: "technology",
      name: "Tech",
      description: "Useful tools, platforms, workflows, and practical technology for building online."
    },
    {
      slug: "productivity",
      name: "Systems",
      description: "Repeatable workflows for content, side hustles, productivity, and creator momentum."
    },
    {
      slug: "ai",
      name: "AI",
      description: "AI workflows, automation ideas, and tools that make solo creation easier."
    }
  ],
  nav: [
    { href: "/content", label: "Content" },
    { href: "/blog", label: "Blog" },
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
