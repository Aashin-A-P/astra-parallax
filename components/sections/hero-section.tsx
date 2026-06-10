"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OrbitalGlow } from "@/components/visual/orbital-glow";
import { StarfieldBackground } from "@/components/visual/starfield-background";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="relative min-h-[360px] overflow-hidden border-b border-primary/20 sm:min-h-[460px] lg:min-h-[620px]">
        <Image src="/images/astra-cover.png" alt="" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/10" />
      </div>
      <motion.div
        className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <StarfieldBackground className="opacity-40" />
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/55 px-4 py-2 text-sm font-semibold text-primary-soft backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Explore - Question - Elevate
          </div>
          <h1 className="max-w-4xl font-display text-4xl font-extrabold leading-[1.04] tracking-[0.02em] text-metallic sm:text-5xl lg:text-7xl">
            Explore curious content, digital design, AI workflows, and curated resources.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl dark:text-primary-soft/90">
            Astra Parallax connects videos, articles, design work, websites, print-on-demand concepts, and recommended tools into one professional home.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/content">
                Explore Content <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/studio">View Studio</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-3 text-sm font-medium text-muted sm:grid-cols-3">
            {["Mystery and tech content", "Design and websites", "Store and resources"].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-xl border border-primary/25 bg-background/58 px-4 py-3 text-primary-soft shadow-sm backdrop-blur">
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
