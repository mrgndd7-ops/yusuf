"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  invert?: boolean;
};

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  invert = true,
}: Props) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-left";
  const titleColor = invert ? "text-[var(--color-text)]" : "text-[var(--color-dark)]";
  const subColor = invert ? "text-[var(--color-text-soft)]" : "text-[var(--color-muted-2)]";

  return (
    <div className={`flex flex-col gap-5 ${alignCls} mb-14 md:mb-16`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="eyebrow"
        >
          {eyebrow}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`font-display text-balance ${titleColor} max-w-3xl`}
        style={{ fontSize: "var(--text-h2)", lineHeight: 1.1 }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className={`${subColor} max-w-2xl text-balance leading-relaxed`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

export default SectionTitle;
