"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { ABOUT, SITE } from "@/lib/constants";

const HIGHLIGHTS = [
  "Sözleşmeli, raporlu, şeffaf süreç",
  "Mimar, mühendis ve usta — tek ekip",
  "Kentsel dönüşümde mal sahibi yanlısı model",
  "Teslimat sonrası 2 yıl ücretsiz bakım",
];

export function About() {
  return (
    <section id="hakkimizda" className="relative bg-[var(--color-bg)] section-py overflow-hidden">
      <div
        aria-hidden
        className="absolute -bottom-32 -right-32 w-[600px] h-[600px] glow-accent blur-3xl opacity-25 pointer-events-none"
      />

      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 order-2 lg:order-1">
          <SectionTitle
            eyebrow={ABOUT.eyebrow}
            title={ABOUT.subtitle}
            align="left"
          />
          <div className="flex flex-col gap-5 text-[var(--color-text-soft)] leading-relaxed">
            {ABOUT.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
            {HIGHLIGHTS.map((h, i) => (
              <motion.li
                key={h}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-3 text-sm text-[var(--color-text)]"
              >
                <CheckCircle2 size={18} className="text-[var(--color-accent)] mt-0.5 shrink-0" />
                {h}
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-5 order-1 lg:order-2 relative"
        >
          <div
            aria-hidden
            className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-[var(--color-accent)] pointer-events-none"
          />
          <div
            aria-hidden
            className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-[var(--color-accent)] pointer-events-none"
          />

          <div
            className="relative w-full rounded-lg overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)] shadow-card"
            style={{ aspectRatio: "4 / 5" }}
          >
            <img
              src="/images/about.jpg"
              alt="Yusuf İnşaat ekibi"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.opacity = "0";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)] via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <div>
                <div className="font-display text-[var(--color-accent)] text-3xl">
                  {new Date().getFullYear() - SITE.founded}+
                </div>
                <div className="text-xs uppercase tracking-widest text-[var(--color-text-soft)]">
                  Yıllık Tecrübe
                </div>
              </div>
              <div className="text-right">
                <div className="font-display text-[var(--color-accent)] text-3xl">III</div>
                <div className="text-xs uppercase tracking-widest text-[var(--color-text-soft)]">
                  Kuşak Ustalık
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
