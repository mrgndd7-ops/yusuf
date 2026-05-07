"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import CTAGroup from "@/components/ui/CTAGroup";
import { HERO } from "@/lib/constants";

export function Hero() {
  useEffect(() => {
    import("img-comparison-slider");
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-[var(--color-dark)] overflow-hidden flex items-center"
    >
      <div className="container-x section-py grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        {/* Left */}
        <div className="order-2 lg:order-1 flex flex-col gap-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex w-fit px-3 py-1.5 rounded-full bg-[var(--color-accent)] text-[var(--color-dark)] uppercase tracking-wider"
            style={{ fontSize: "0.75rem", fontWeight: 600 }}
          >
            {HERO.badge}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="font-display text-[var(--color-text-inv)] leading-[1.05]"
            style={{ fontSize: "var(--text-display)" }}
          >
            {HERO.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="text-[var(--color-muted)] max-w-xl leading-relaxed"
          >
            {HERO.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="mt-2"
          >
            <CTAGroup />
          </motion.div>
        </div>

        {/* Right - before/after */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="order-1 lg:order-2 relative w-full rounded-xl overflow-hidden border border-white/10"
          style={{ aspectRatio: "4 / 5" }}
        >
          <img-comparison-slider class="w-full h-full">
            <img
              slot="first"
              src="/images/before-after/before.jpg"
              alt={HERO.beforeLabel}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.background = "#3a3527";
                (e.currentTarget as HTMLImageElement).removeAttribute("src");
              }}
            />
            <img
              slot="second"
              src="/images/before-after/after.jpg"
              alt={HERO.afterLabel}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.background = "#6b5e3d";
                (e.currentTarget as HTMLImageElement).removeAttribute("src");
              }}
            />
            </img-comparison-slider>

          <span className="pointer-events-none absolute top-3 left-3 px-2.5 py-1 rounded bg-[var(--color-dark)]/80 text-[var(--color-text-inv)] tracking-widest" style={{ fontSize: "0.7rem", fontWeight: 600 }}>
            {HERO.beforeLabel}
          </span>
          <span className="pointer-events-none absolute top-3 right-3 px-2.5 py-1 rounded bg-[var(--color-accent)] text-[var(--color-dark)] tracking-widest" style={{ fontSize: "0.7rem", fontWeight: 600 }}>
            {HERO.afterLabel}
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.6 },
          y: { repeat: Infinity, duration: 1.8, ease: "easeInOut", delay: 1 },
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[var(--color-muted)]"
        aria-hidden
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}

export default Hero;
