import { Brain, Cpu, Rocket, Zap } from "lucide-react";

const items = [
  { icon: Rocket, label: "Projects", text: "Showcase active side hustles, experiments, and future launches." },
  { icon: Brain, label: "Content", text: "Publish useful articles that bring people back to the hub." },
  { icon: Cpu, label: "Tools", text: "Recommend software, resources, and affiliate products clearly." },
  { icon: Zap, label: "Growth", text: "Turn attention from social platforms into owned audience momentum." }
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
