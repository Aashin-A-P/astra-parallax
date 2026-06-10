"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(199,168,109,0.16),transparent_32rem)]" />
      <motion.div
        className="mx-auto grid min-h-[650px] max-w-7xl content-center px-4 py-24 sm:px-6 lg:px-8"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary-soft">
            <Sparkles className="h-4 w-4" />
            Astra Parallax
          </div>
          <h1 className="font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
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
        </div>
      </motion.div>
    </section>
  );
}
