"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { PROCESS } from "@/lib/constants";

export function Process() {
  return (
    <section id="surec" className="relative bg-[var(--color-bg)] section-py overflow-hidden">
      <div
        aria-hidden
        className="absolute top-1/4 right-0 w-[400px] h-[400px] glow-accent blur-3xl opacity-30 pointer-events-none"
      />
      <div className="container-x">
        <SectionTitle
          eyebrow="Çalışma Süreci"
          title="Şeffaf, planlı ve raporlu — söz verdiğimiz takvimde teslim."
          subtitle="Sizi sürprizlerle değil, raporlarla karşılarız. Her aşama öncesinde plan, sonrasında rapor."
        />

        <div className="relative">
          {/* connecting line */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/40 to-transparent"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {PROCESS.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="relative flex flex-col gap-4"
              >
                <div className="relative grid place-items-center w-16 h-16 rounded-full bg-[var(--color-bg-2)] border border-[var(--color-border)] mx-auto lg:mx-0">
                  <span className="font-display text-[var(--color-accent)] text-lg">
                    {p.step}
                  </span>
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-full ring-1 ring-[var(--color-accent)]/30 animate-pulse"
                  />
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="font-display text-[var(--color-text)] mb-2" style={{ fontSize: "1.15rem" }}>
                    {p.title}
                  </h3>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
