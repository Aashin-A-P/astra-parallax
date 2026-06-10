import Link from "next/link";
import { Brain, Compass, Cpu, Telescope, type LucideIcon } from "lucide-react";
import type { SiteCategory } from "@/lib/site";

const categoryIcons: Record<string, LucideIcon> = {
  mysteries: Telescope,
  technology: Cpu,
  productivity: Compass,
  ai: Brain
};

const categoryCopy: Record<string, string> = {
  mysteries: "Unknown signals, ancient questions, and pattern-rich stories.",
  technology: "Modern tools, digital leverage, and builder-grade systems.",
  productivity: "Discipline, workflow design, and focused creator momentum.",
  ai: "Machine intelligence, automation, and human-machine collaboration."
};

export function SignalPathCard({ category, index }: { category: SiteCategory; index: number }) {
  const Icon = categoryIcons[category.slug] || Compass;
  return (
    <Link
      href={`/${category.slug}`}
      className="group relative min-h-64 overflow-hidden rounded-lg border border-border bg-surface p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(199,168,109,0.16),transparent_12rem)] opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative">
        <div className="mb-8 flex items-center justify-between">
          <div className="grid h-12 w-12 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary-soft">
            <Icon className="h-5 w-5" />
          </div>
          <span className="font-display text-sm text-muted-alt">0{index + 1}</span>
        </div>
        <h3 className="font-display text-2xl font-semibold">{category.name}</h3>
        <p className="mt-4 text-sm leading-6 text-muted">{categoryCopy[category.slug] || category.description}</p>
        <div className="mt-8 h-px w-full bg-gradient-to-r from-primary/60 via-border to-transparent" />
      </div>
    </Link>
  );
}
