"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Award, ShieldCheck, Hammer } from "lucide-react";
import CTAGroup from "@/components/ui/CTAGroup";
import { HERO } from "@/lib/constants";

export function Hero() {
  useEffect(() => {
    import("img-comparison-slider");
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-[var(--color-bg)] overflow-hidden flex items-center pt-24"
    >
      {/* Ambient glows */}
      <div
        aria-hidden
        className="absolute -top-32 -left-24 w-[480px] h-[480px] glow-accent blur-3xl opacity-60 pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 right-0 w-[520px] h-[520px] glow-accent blur-3xl opacity-40 pointer-events-none"
      />
      {/* Blueprint grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full pb-16">
        {/* Left */}
        <div className="order-2 lg:order-1 flex flex-col gap-7">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="eyebrow"
          >
            {HERO.badge}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="font-display text-balance leading-[1.02]"
            style={{ fontSize: "var(--text-display)" }}
          >
            <span className="block text-[var(--color-text)]">Sağlam temel,</span>
            <span className="block gradient-text">zamana meydan</span>
            <span className="block text-[var(--color-text)]">okuyan yapı.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="text-[var(--color-text-soft)] max-w-xl leading-relaxed text-base md:text-lg"
          >
            {HERO.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="mt-1"
          >
            <CTAGroup />
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
            className="grid grid-cols-3 gap-4 pt-6 mt-4 border-t border-[var(--color-border)]"
          >
            {[
              { icon: Award, label: "1972'den beri" },
              { icon: ShieldCheck, label: "10 yıl güvence" },
              { icon: Hammer, label: "Anahtar teslim" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-2.5">
                  <Icon size={18} className="text-[var(--color-accent)] shrink-0" />
                  <span className="text-xs md:text-sm text-[var(--color-text-soft)]">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Right - before/after */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="order-1 lg:order-2 relative w-full"
        >
          {/* Decorative frame */}
          <div
            aria-hidden
            className="absolute -inset-3 rounded-lg border border-[var(--color-accent)]/30 pointer-events-none"
          />
          <div
            aria-hidden
            className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-[var(--color-accent)] pointer-events-none"
          />
          <div
            aria-hidden
            className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-[var(--color-accent)] pointer-events-none"
          />

          <div
            className="relative w-full rounded-lg overflow-hidden border border-[var(--color-border)] shadow-glow"
            style={{ aspectRatio: "4 / 5" }}
          >
            <img-comparison-slider class="w-full h-full">
              <img
                slot="first"
                src="/images/before-after/before.jpg"
                alt={HERO.beforeLabel}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const t = e.currentTarget as HTMLImageElement;
                  t.style.background =
                    "linear-gradient(135deg,#2a2418 0%,#1b1812 100%)";
                  t.removeAttribute("src");
                }}
              />
              <img
                slot="second"
                src="/images/before-after/after.jpg"
                alt={HERO.afterLabel}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const t = e.currentTarget as HTMLImageElement;
                  t.style.background =
                    "linear-gradient(135deg,#6b5e3d 0%,#c8a96e 100%)";
                  t.removeAttribute("src");
                }}
              />
            </img-comparison-slider>

            <span className="pointer-events-none absolute top-4 left-4 px-2.5 py-1 rounded bg-[var(--color-dark)]/80 backdrop-blur text-[var(--color-text-inv)] tracking-widest text-xs font-semibold">
              {HERO.beforeLabel}
            </span>
            <span className="pointer-events-none absolute top-4 right-4 px-2.5 py-1 rounded bg-[var(--color-accent)] text-[var(--color-dark)] tracking-widest text-xs font-semibold">
              {HERO.afterLabel}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.6 },
          y: { repeat: Infinity, duration: 1.8, ease: "easeInOut", delay: 1 },
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[var(--color-muted)] hidden md:block"
        aria-hidden
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}

export default Hero;
