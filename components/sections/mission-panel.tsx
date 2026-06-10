import { Brain, Cpu, Rocket, Zap } from "lucide-react";

const items = [
  { icon: Rocket, label: "Build", text: "Turn curiosity into public work, systems, and products." },
  { icon: Brain, label: "Think", text: "Study mystery, technology, and human potential with discipline." },
  { icon: Cpu, label: "Automate", text: "Use AI and tools to compound creative output." },
  { icon: Zap, label: "Move", text: "Stay motivated by designing repeatable momentum." }
];

export function MissionPanel() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.label} className="rounded-lg border border-border bg-background/60 p-5 backdrop-blur transition-colors hover:bg-surface">
            <div className="mb-4 grid h-10 w-10 place-items-center rounded-md bg-accent/15 text-primary-soft">
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
