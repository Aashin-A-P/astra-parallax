import { cn } from "@/lib/utils";

export function StarfieldBackground({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(37,99,235,0.12),transparent_18rem),radial-gradient(circle_at_78%_8%,rgba(249,115,22,0.12),transparent_22rem),radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.1),transparent_28rem)]" />
      <div className="stars-layer absolute inset-0 opacity-45" />
      <div className="cosmic-grid absolute inset-0 opacity-40" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
