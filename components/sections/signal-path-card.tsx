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
  mysteries: "Ideas, essays, observations, and research that feed new projects.",
  technology: "Tools, software, and digital systems for practical online work.",
  productivity: "Processes and operating systems for managing multiple hustles.",
  ai: "Automation and AI workflows that help a solo creator move faster."
};

export function SignalPathCard({ category, index }: { category: SiteCategory; index: number }) {
  const Icon = categoryIcons[category.slug] || Compass;
  return (
    <Link
      href={`/${category.slug}`}
      className="group relative min-h-64 overflow-hidden rounded-lg border border-border bg-surface p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(37,99,235,0.1),transparent_12rem)] opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative">
        <div className="mb-8 flex items-center justify-between">
          <div className="grid h-12 w-12 place-items-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
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
