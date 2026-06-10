"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Compass, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OrbitalGlow } from "@/components/visual/orbital-glow";
import { StarfieldBackground } from "@/components/visual/starfield-background";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="relative overflow-hidden border-b border-border">
      <StarfieldBackground />
      <motion.div
        className="relative mx-auto grid min-h-[720px] max-w-7xl content-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary-soft">
            <Sparkles className="h-4 w-4" />
            Astra Parallax
          </div>
          <h1 className="font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-7xl">
            Exploring Mysteries, Technology, and Human Potential.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Seek the unknown. Build the extraordinary. Discover long-form ideas, practical systems, curated tools, and future products designed for curious minds.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/mysteries">
                Explore the Archives <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="#dispatch">Join the Dispatch</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-3 text-sm text-muted sm:grid-cols-3">
            {["Mystery archives", "AI systems", "Creator momentum"].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-md border border-border bg-background/55 px-3 py-2 backdrop-blur">
                <Compass className="h-4 w-4 text-primary-soft" />
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
