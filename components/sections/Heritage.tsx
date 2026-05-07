"use client";

import { motion } from "framer-motion";
import { HERITAGE } from "@/lib/constants";

export function Heritage() {
  return (
    <section
      id="miras"
      className="bg-[var(--color-dark)] section-py"
    >
      <div className="container-x flex flex-col items-center text-center gap-8 max-w-3xl">
        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-display text-[var(--color-accent)] leading-[1.15]"
          style={{ fontSize: "var(--text-display)" }}
        >
          “{HERITAGE.quote}”
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="flex flex-col gap-4 text-[var(--color-muted)] leading-relaxed max-w-2xl"
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
