"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OrbitalGlow } from "@/components/visual/orbital-glow";
import { StarfieldBackground } from "@/components/visual/starfield-background";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="relative overflow-hidden border-b border-border">
      <StarfieldBackground />
      <motion.div
        className="relative mx-auto grid min-h-[720px] max-w-7xl content-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Sparkles className="h-4 w-4" />
            Creator hub for side hustles
          </div>
          <h1 className="max-w-4xl font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-foreground sm:text-5xl lg:text-7xl">
            One clean hub for content, projects, tools, and digital income streams.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            Explore the articles, affiliate resources, experiments, and future products behind Astra Parallax. Built to make every side hustle easier to find, trust, and grow.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/content">
                Explore Content <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/blog">Read Blog</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-3 text-sm font-medium text-muted sm:grid-cols-3">
            {["Videos and reels", "Blog posts", "Affiliate tools"].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-xl border border-border bg-surface/85 px-4 py-3 shadow-sm backdrop-blur">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:block">
          <OrbitalGlow />
        </div>
      </motion.div>
    </section>
  );
}
