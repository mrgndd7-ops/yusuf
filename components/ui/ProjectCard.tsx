"use client";

import { useState, useRef, TouchEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

type Props = { project: Project };

export function ProjectCard({ project }: Props) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const total = project.images.length;

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + total) % total);

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group card-surface overflow-hidden flex flex-col hover:border-[var(--color-accent)] transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
    >
      <div
        className="relative w-full bg-[var(--color-surface-2)] overflow-hidden select-none"
        style={{ aspectRatio: "4 / 3" }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={project.images[index]}
            src={project.images[index]}
            alt={`${project.title} - ${index + 1}`}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.opacity = "0";
            }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)] via-[var(--color-dark)]/30 to-transparent opacity-90" />

        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[var(--color-accent)] text-[var(--color-dark)] text-xs font-semibold tracking-wide">
          {project.badge}
        </div>

        {total > 1 && (
          <>
            <button
              type="button"
              aria-label="Önceki görsel"
              onClick={() => go(-1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 grid place-items-center w-9 h-9 rounded-full bg-[var(--color-dark)]/60 text-[var(--color-text)] hover:bg-[var(--color-accent)] hover:text-[var(--color-dark)] transition-all duration-200 backdrop-blur-sm opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Sonraki görsel"
              onClick={() => go(1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 grid place-items-center w-9 h-9 rounded-full bg-[var(--color-dark)]/60 text-[var(--color-text)] hover:bg-[var(--color-accent)] hover:text-[var(--color-dark)] transition-all duration-200 backdrop-blur-sm opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={18} />
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Görsel ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-200 ${
                    i === index ? "w-6 bg-[var(--color-accent)]" : "w-1.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-[var(--color-text)]" style={{ fontSize: "var(--text-h3)" }}>
            {project.title}
          </h3>
          <ArrowUpRight
            size={18}
            className="text-[var(--color-muted)] group-hover:text-[var(--color-accent)] group-hover:rotate-45 transition-all duration-300 mt-1 shrink-0"
          />
        </div>
        <span className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-medium">
          {project.subtitle}
        </span>
        <p className="text-[var(--color-muted)] text-sm leading-relaxed">
          {project.description}
        </p>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
