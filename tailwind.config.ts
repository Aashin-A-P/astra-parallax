import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}", "./content/**/*.{md,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        "background-soft": "hsl(var(--background-soft))",
        surface: "hsl(var(--surface))",
        "surface-alt": "hsl(var(--surface-alt))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        "muted-alt": "hsl(var(--muted-alt))",
        border: "hsl(var(--border))",
        primary: "hsl(var(--primary))",
        "primary-soft": "hsl(var(--primary-soft))",
        accent: "hsl(var(--accent))",
        "accent-soft": "hsl(var(--accent-soft))",
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
        danger: "hsl(var(--danger))"
      },
      fontFamily: {
        sans: ["var(--font-body)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-display)", ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        glow: "0 22px 70px rgba(238, 164, 92, 0.2), 0 10px 48px rgba(79, 115, 255, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
