import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  title: string;
  updated: string;
  intro?: string;
  children: ReactNode;
};

export function LegalLayout({ title, updated, intro, children }: Props) {
  return (
    <main className="relative bg-[var(--color-bg)] pt-32 pb-24 md:pt-40 md:pb-32 min-h-screen">
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] glow-accent blur-3xl opacity-20 pointer-events-none"
      />

      <article className="container-x max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          Anasayfaya dön
        </Link>

        <span className="eyebrow">Yasal Metin</span>

        <h1
          className="font-display text-[var(--color-text)] mt-5 mb-4 leading-[1.1]"
          style={{ fontSize: "var(--text-h1)" }}
        >
          {title}
        </h1>

        <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-10">
          Son güncelleme: {updated}
        </div>

        {intro && (
          <p className="text-[var(--color-text-soft)] text-lg leading-relaxed mb-10">
            {intro}
          </p>
        )}

        <div className="legal-content flex flex-col gap-6 text-[var(--color-text-soft)] leading-relaxed">
          {children}
        </div>
      </article>
    </main>
  );
}

export default LegalLayout;
