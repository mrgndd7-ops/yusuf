"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV, SITE } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-bg)]/80 backdrop-blur-md border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <a href="#hero" className="flex items-center gap-2.5 group">
          <span className="grid place-items-center w-9 h-9 rounded-md bg-[var(--color-accent)] text-[var(--color-dark)] font-display font-bold text-lg">
            Y
          </span>
          <span className="font-display text-[var(--color-text)] text-lg tracking-tight">
            Yusuf <span className="text-[var(--color-accent)]">İnşaat</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-[var(--color-text-soft)] hover:text-[var(--color-accent)] transition-colors duration-200"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${SITE.phone}`}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--color-accent)] text-[var(--color-dark)] text-sm font-medium hover:bg-[var(--color-accent-2)] transition-colors"
          >
            <Phone size={15} />
            {SITE.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid place-items-center w-10 h-10 rounded-md border border-[var(--color-border)] text-[var(--color-text)]"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur-md">
          <nav className="container-x flex flex-col py-4 gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-[var(--color-text-soft)] hover:bg-[var(--color-surface)] hover:text-[var(--color-accent)] transition-colors"
              >
                {n.label}
              </a>
            ))}
            <a
              href={`tel:${SITE.phone}`}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-[var(--color-accent)] text-[var(--color-dark)] font-medium"
            >
              <Phone size={16} />
              {SITE.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
