"use client";

import { motion } from "framer-motion";
import { HERITAGE } from "@/lib/constants";

export function Heritage() {
  return (
    <section id="miras" className="relative bg-[var(--color-bg)] section-py overflow-hidden">
      <div
        aria-hidden
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[400px] glow-accent blur-3xl opacity-30 pointer-events-none"
      />

      <div className="container-x flex flex-col items-center text-center gap-10 max-w-4xl">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="eyebrow"
        >
          {HERITAGE.eyebrow}
        </motion.span>

        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-display text-balance leading-[1.1]"
          style={{ fontSize: "var(--text-display)" }}
        >
          <span className="text-[var(--color-accent)]">“</span>
          <span className="gradient-text">{HERITAGE.quote}</span>
          <span className="text-[var(--color-accent)]">”</span>
        </motion.blockquote>

        <div className="divider-gold w-32" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="flex flex-col gap-5 text-[var(--color-text-soft)] leading-relaxed max-w-2xl text-base md:text-lg"
        >
          {HERITAGE.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Heritage;
