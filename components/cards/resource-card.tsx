import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { Resource } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="mb-3 flex flex-wrap gap-2">
          <Badge>{resource.category}</Badge>
          {resource.affiliate ? <Badge>Affiliate-ready</Badge> : null}
        </div>
        <CardTitle>
          <Link href={resource.url}>{resource.title}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-sm leading-6 text-muted">{resource.excerpt}</p>
        <div className="flex flex-wrap gap-2">
          <Button asChild size="sm" variant="secondary">
            <Link href={resource.url}>Details</Link>
          </Button>
          {resource.officialUrl ? (
            <Button asChild size="sm" variant="ghost">
              <a href={resource.officialUrl} target="_blank" rel="noreferrer">
                Visit <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Button>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
