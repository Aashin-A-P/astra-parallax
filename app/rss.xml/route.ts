import { getAllPosts } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";

export const dynamic = "force-static";
export const revalidate = 3600;

function escapeXml(value: string) {
  return value.replace(/[<>&'"]/g, (char) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[char] || char);
}

export function GET() {
  const items = getAllPosts()
    .map(
      (post) => `<item>
  <title>${escapeXml(post.title)}</title>
  <link>${absoluteUrl(post.url)}</link>
  <guid>${absoluteUrl(post.url)}</guid>
  <pubDate>${new Date(post.date).toUTCString()}</pubDate>
  <description>${escapeXml(post.excerpt)}</description>
</item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>${escapeXml(siteConfig.name)}</title>
  <link>${siteConfig.url}</link>
  <description>${escapeXml(siteConfig.description)}</description>
  ${items}
</channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
