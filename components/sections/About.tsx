"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { ABOUT } from "@/lib/constants";

export function About() {
  return (
    <section id="hakkimizda" className="bg-[var(--color-surface)] section-py">
      <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <SectionTitle title={ABOUT.title} subtitle={ABOUT.subtitle} align="left" />
          <div className="flex flex-col gap-4 text-[var(--color-text)] leading-relaxed">
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
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative w-full rounded-xl overflow-hidden bg-[var(--color-dark)]"
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
        </motion.div>
      </div>
    </section>
  );
}

export default About;
