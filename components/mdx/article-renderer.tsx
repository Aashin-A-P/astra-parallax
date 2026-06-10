import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/mdx-components";

export function ArticleRenderer({ source }: { source: string }) {
  return (
    <div className="prose-astra mx-auto max-w-3xl">
      <MDXRemote source={source} components={mdxComponents} />
    </div>
  );
}
