import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import type { Post } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ArticleCard({ post }: { post: Post }) {
  return (
    <Card className="h-full transition-colors hover:bg-surface-alt">
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
