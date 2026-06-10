import { BadgeInfo } from "lucide-react";
import { cn } from "@/lib/utils";

export function Callout({ children, tone = "default" }: { children: React.ReactNode; tone?: "default" | "warning" }) {
  return (
    <aside
      className={cn(
        "my-6 rounded-lg border p-4 text-sm",
        tone === "warning" ? "border-warning/40 bg-warning/10 text-primary-soft" : "border-primary/30 bg-primary/10 text-primary-soft"
      )}
    >
      <div className="mb-2 flex items-center gap-2 font-medium">
        <BadgeInfo className="h-4 w-4" />
        Field note
      </div>
      <div className="text-muted">{children}</div>
    </aside>
  );
}
