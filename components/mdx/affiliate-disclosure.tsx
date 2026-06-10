import { ShieldCheck } from "lucide-react";

export function AffiliateDisclosure() {
  return (
    <aside className="my-6 rounded-lg border border-primary/30 bg-primary/10 p-4 text-sm text-muted">
      <div className="mb-2 flex items-center gap-2 font-medium text-primary-soft">
        <ShieldCheck className="h-4 w-4" />
        Affiliate disclosure
      </div>
      Some links may be affiliate links. If you buy through them, Astra Parallax may earn a commission at no extra cost to you.
    </aside>
  );
}
