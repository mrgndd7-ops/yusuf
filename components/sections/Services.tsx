"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Hammer,
  ClipboardList,
  ShieldCheck,
  Ruler,
  Wrench,
  Check,
  type LucideIcon,
} from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { SERVICES } from "@/lib/constants";

const ICONS: Record<string, LucideIcon> = {
  Building2,
  Hammer,
  ClipboardList,
  ShieldCheck,
  Ruler,
  Wrench,
};

export function Services() {
  return (
    <section id="hizmetler" className="relative bg-[var(--color-bg-2)] section-py">
      <div className="container-x">
        <SectionTitle
          eyebrow="Hizmetlerimiz"
          title="Temelden anahtara, tek elden uçtan uca yapım."
          subtitle="Mimari, statik, ruhsat, şantiye ve teslimat. Her aşamada aynı ekip, aynı söz."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Building2;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: "easeOut" }}
                className="group relative p-7 md:p-8 card-surface flex flex-col gap-5 hover:border-[var(--color-accent)] hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  aria-hidden
                  className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                />

                <div className="relative w-14 h-14 rounded-md bg-[var(--color-accent-soft)] grid place-items-center text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-dark)] transition-all duration-300">
                  <Icon size={26} />
                  <span className="absolute -top-2 -right-2 text-[10px] font-semibold tracking-widest text-[var(--color-accent)] bg-[var(--color-bg)] border border-[var(--color-border)] rounded px-1.5 py-0.5">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="font-display text-[var(--color-text)]" style={{ fontSize: "var(--text-h3)" }}>
                  {s.title}
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed text-sm">
                  {s.description}
                </p>

                {s.bullets && (
                  <ul className="flex flex-col gap-2 mt-auto pt-4 border-t border-[var(--color-border)]">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2.5 text-sm text-[var(--color-text-soft)]"
                      >
                        <Check
                          size={14}
                          className="text-[var(--color-accent)] shrink-0"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
