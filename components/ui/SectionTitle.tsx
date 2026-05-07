"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  invert?: boolean;
};

export function SectionTitle({
  title,
  subtitle,
  align = "center",
  invert = false,
}: Props) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-left";
  const titleColor = invert ? "text-[var(--color-text-inv)]" : "text-[var(--color-text)]";

  return (
    <div className={`flex flex-col gap-4 ${alignCls} mb-12`}>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`font-display ${titleColor}`}
        style={{ fontSize: "var(--text-h2)" }}
      >
        {title}
      </motion.h2>

      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="block bg-[var(--color-accent)]"
        style={{ width: 40, height: 2, transformOrigin: align === "center" ? "center" : "left" }}
      />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="text-[var(--color-muted)] max-w-2xl"
          style={{ fontSize: "var(--text-sm)" }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

export default SectionTitle;
