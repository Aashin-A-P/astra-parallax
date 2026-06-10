import Link from "next/link";
import Image from "next/image";
import { ExternalLink, PackageCheck } from "lucide-react";
import type { Resource } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <Card className="group h-full overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-glow">
      {resource.coverImage ? (
        <Link href={resource.url} className="block overflow-hidden border-b border-border">
          <Image src={resource.coverImage} alt="" width={900} height={506} className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-105" />
        </Link>
      ) : null}
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
        {resource.priceNote ? (
          <div className="mb-4 flex items-start gap-2 rounded-md border border-border bg-background-soft p-3 text-xs leading-5 text-muted">
            <PackageCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary-soft" />
            {resource.priceNote}
          </div>
        ) : null}
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
