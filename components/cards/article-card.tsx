import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import type { Post } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ArticleCard({ post }: { post: Post }) {
  return (
    <Card className="group h-full overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-surface hover:shadow-glow">
      {post.coverImage ? (
        <Link href={post.url} className="block overflow-hidden border-b border-border">
          <Image src={post.coverImage} alt="" width={900} height={506} className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-105" />
        </Link>
      ) : null}
      <CardHeader>
        <div className="mb-3 flex flex-wrap gap-2">
          <Badge>{post.category}</Badge>
          {post.featured ? <Badge>Featured</Badge> : null}
        </div>
        <CardTitle>
          <Link href={post.url} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
            {post.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-sm leading-6 text-muted">{post.excerpt}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full bg-background-soft px-2.5 py-1 text-[11px] font-semibold text-muted-alt">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 text-xs text-muted-alt">
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {post.date}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {post.readingTime}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
