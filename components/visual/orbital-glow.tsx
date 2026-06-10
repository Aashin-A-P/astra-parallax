"use client";

import { motion, useReducedMotion } from "motion/react";
import { Orbit, Sparkles } from "lucide-react";

export function OrbitalGlow() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      <div className="absolute inset-10 rounded-full bg-primary/10 blur-3xl" />
      <motion.div
        className="absolute inset-8 rounded-full border border-primary/30"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-16 rounded-full border border-accent/35"
        animate={reduceMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 52, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute left-1/2 top-1/2 grid h-44 w-44 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[2rem] border border-primary/40 bg-background/70 shadow-glow backdrop-blur">
        <div className="text-center">
          <Sparkles className="mx-auto h-8 w-8 text-primary-soft" />
          <div className="mt-3 font-display text-3xl font-semibold">AP</div>
          <div className="mt-1 text-xs uppercase tracking-[0.28em] text-muted">Astra</div>
        </div>
      </div>
      <div className="absolute left-8 top-16 rounded-full border border-border bg-surface/80 p-3 text-primary-soft">
        <Orbit className="h-5 w-5" />
      </div>
      <div className="absolute bottom-16 right-8 h-3 w-3 rounded-full bg-primary shadow-[0_0_28px_rgba(199,168,109,0.75)]" />
    </div>
  );
}
