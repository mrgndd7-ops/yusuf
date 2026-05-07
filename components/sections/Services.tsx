"use client";

import { motion } from "framer-motion";
import { Building2, Hammer, ClipboardList, type LucideIcon } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { SERVICES } from "@/lib/constants";

const ICONS: Record<string, LucideIcon> = {
  Building2,
  Hammer,
  ClipboardList,
};

export function Services() {
  return (
    <section id="hizmetler" className="bg-[var(--color-bg)] section-py">
      <div className="container-x">
        <SectionTitle
          title="Hizmetlerimiz"
          subtitle="Anahtar teslim konuttan tadilata, tek elden uçtan uca yapım."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Building2;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="group p-8 rounded-lg border border-[var(--color-surface)] bg-white hover:border-[var(--color-accent)] transition-all duration-200 ease-out flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-md bg-[var(--color-bg)] grid place-items-center text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-dark)] transition-all duration-200">
                  <Icon size={24} />
                </div>
                <h3
                  className="font-display text-[var(--color-text)]"
                  style={{ fontSize: "var(--text-h3)" }}
                >
                  {s.title}
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed" style={{ fontSize: "var(--text-sm)" }}>
                  {s.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
