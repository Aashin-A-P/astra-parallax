export function gaScriptSrc() {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  return id ? `https://www.googletagmanager.com/gtag/js?id=${id}` : null;
}

export function trackWebVital(metric: { name: string; value: number; id: string }) {
  if (!process.env.NEXT_PUBLIC_GA_ID) return;
  window.gtag?.("event", metric.name, {
    value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
    event_label: metric.id,
    non_interaction: true
  });
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
