"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { FAQ } from "@/lib/constants";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="sss" className="relative bg-[var(--color-bg)] section-py">
      <div className="container-x max-w-3xl">
        <SectionTitle
          eyebrow="Sıkça Sorulan Sorular"
          title="Aklınızdaki ilk soruların cevabı."
          subtitle="Bulamadığınız bir cevap varsa bize doğrudan ulaşın. Telefon ucunda bir usta cevap verir."
        />

        <div className="flex flex-col">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="border-b border-[var(--color-border)] first:border-t"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-5 md:py-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-display text-[var(--color-text)] transition-colors ${
                      isOpen ? "text-[var(--color-accent)]" : "group-hover:text-[var(--color-accent)]"
                    }`}
                    style={{ fontSize: "1.1rem" }}
                  >
                    {item.q}
                  </span>
                  <span
                    className={`grid place-items-center w-9 h-9 rounded-full border border-[var(--color-border)] text-[var(--color-accent)] transition-all duration-300 shrink-0 ${
                      isOpen ? "rotate-45 bg-[var(--color-accent)] !text-[var(--color-dark)] border-[var(--color-accent)]" : ""
                    }`}
                  >
                    <Plus size={16} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-[var(--color-text-soft)] leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faq;
