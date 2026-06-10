import Image from "next/image";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import { AffiliateDisclosure } from "@/components/mdx/affiliate-disclosure";
import { Callout } from "@/components/mdx/callout";
import { YouTubeEmbed } from "@/components/media/youtube-embed";

export const mdxComponents: MDXComponents = {
  a: ({ href = "", children }) => {
    const external = href.startsWith("http");
    if (external) {
      return (
        <a href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      );
    }
    return <Link href={href}>{children}</Link>;
  },
  img: ({ src = "", alt = "" }) => (
    <span className="my-8 block overflow-hidden rounded-lg border border-border">
      <Image src={src} alt={alt} width={1200} height={675} className="h-auto w-full object-cover" />
    </span>
  ),
  Callout,
  YouTubeEmbed,
  AffiliateDisclosure
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...mdxComponents,
    ...components
  };
}
