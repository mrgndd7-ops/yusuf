"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section id="yorumlar" className="relative bg-[var(--color-bg-2)] section-py">
      <div className="container-x">
        <SectionTitle
          eyebrow="Mal Sahiplerimiz"
          title="Bizden bahsetmek yerine, onların sözünü bırakalım."
          subtitle="Teslim ettiğimiz her yapı, arkasında bir referans bırakır."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="card-surface p-7 flex flex-col gap-5 hover:border-[var(--color-accent)] transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <Quote size={28} className="text-[var(--color-accent)]" />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="text-[var(--color-accent)]"
                      fill="currentColor"
                    />
                  ))}
                </div>
              </div>
              <blockquote className="text-[var(--color-text-soft)] leading-relaxed text-[15px]">
                {t.quote}
              </blockquote>
              <figcaption className="mt-auto pt-4 border-t border-[var(--color-border)] flex items-center gap-3">
                <div className="grid place-items-center w-10 h-10 rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)] font-display font-semibold">
                  {t.name.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-[var(--color-text)] font-medium">{t.name}</span>
                  <span className="text-xs text-[var(--color-muted)]">{t.role}</span>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
