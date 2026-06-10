import { cn } from "@/lib/utils";

export function StarfieldBackground({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(199,168,109,0.18),transparent_18rem),radial-gradient(circle_at_78%_8%,rgba(124,58,237,0.2),transparent_22rem),radial-gradient(circle_at_50%_80%,rgba(79,70,229,0.16),transparent_28rem)]" />
      <div className="stars-layer absolute inset-0 opacity-70" />
      <div className="cosmic-grid absolute inset-0 opacity-35" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
