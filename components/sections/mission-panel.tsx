import { Brain, Cpu, Palette, Zap } from "lucide-react";

const items = [
  { icon: Brain, label: "Content", text: "Organize videos, reels, facts, notes, and articles around clear topics visitors can follow." },
  { icon: Palette, label: "Design", text: "Create a professional place for visual design, websites, product concepts, and brand assets." },
  { icon: Cpu, label: "AI Systems", text: "Document practical AI workflows that support research, creation, publishing, and digital products." },
  { icon: Zap, label: "Commerce", text: "Connect curated tools, affiliate resources, and print-on-demand collections through one trusted store." }
];

export function MissionPanel() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.label} className="rounded-lg border border-border bg-surface p-5 shadow-sm transition-colors hover:bg-surface-alt">
            <div className="mb-4 grid h-10 w-10 place-items-center rounded-md bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-semibold">{item.label}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
          </div>
        );
      })}
    </div>
  );
}
