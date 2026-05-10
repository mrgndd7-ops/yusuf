import Link from "next/link";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";

const LEGAL: { label: string; href: string; external?: boolean }[] = [
  { label: "Vergi Levhası", href: "/docs/vergi-levhasi.pdf", external: true },
  { label: "Faaliyet Belgesi", href: "/docs/faaliyet-belgesi.pdf", external: true },
  { label: "Ticaret Sicil Gazetesi", href: "/docs/ticaret-sicil-gazetesi.pdf", external: true },
  { label: "KVKK Aydınlatma Metni", href: "/kvkk" },
  { label: "Gizlilik Politikası", href: "/gizlilik" },
  { label: "Çerez Politikası", href: "/cerez" },
];

export function Footer() {
  return (
    <footer className="relative bg-[var(--color-bg-2)] border-t border-[var(--color-border)] overflow-hidden">
      {/* CTA top section */}
      <div className="relative section-py">
        <div
          aria-hidden
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[500px] glow-accent blur-3xl opacity-40 pointer-events-none"
        />

        <div className="container-x flex flex-col items-center text-center gap-8 max-w-3xl">
          <span className="eyebrow">Bir Çay, Bir Plan</span>

          <h2
            className="font-display text-balance leading-[1.05]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            <span className="block text-[var(--color-text)]">Projenizi</span>
            <span className="block gradient-text">konuşalım.</span>
          </h2>

          <p className="text-[var(--color-text-soft)] max-w-xl leading-relaxed">
            Düşündüğünüz proje için sahaya gelir, dinleriz; size en uygun
            çözümü ve şeffaf teklifi sunarız.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2">
            <a
              href={`tel:${SITE.phone}`}
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[var(--color-accent)] text-[var(--color-dark)] font-medium transition-all duration-200 hover:bg-[var(--color-accent-2)] hover:-translate-y-0.5 shadow-[0_10px_30px_-10px_rgba(200,169,110,0.6)]"
            >
              <Phone size={18} />
              Hemen Ara
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-[var(--color-accent)] text-[var(--color-accent)] font-medium hover:bg-[var(--color-accent)] hover:text-[var(--color-dark)] transition-all duration-200"
            >
              <MessageCircle size={18} />
              WhatsApp'tan Yaz
            </a>
          </div>
        </div>
      </div>

      <div className="container-x relative">
        <div className="divider-gold" />
      </div>

      {/* Watermark */}
      <div
        aria-hidden
        className="relative overflow-hidden flex items-center justify-center pointer-events-none py-10 md:py-14"
      >
        <span
          className="font-display font-semibold tracking-[-0.04em] whitespace-nowrap select-none leading-none"
          style={{
            fontSize: "clamp(7rem, 22vw, 26rem)",
            background:
              "linear-gradient(180deg, rgba(200,169,110,0.18) 0%, rgba(200,169,110,0.03) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextStroke: "1px rgba(200,169,110,0.22)",
          }}
        >
          YUSUF
        </span>
      </div>

      {/* Legal row */}
      <div className="container-x py-6 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-xs text-[var(--color-muted-2)] order-2 md:order-1">
          © {new Date().getFullYear()} {SITE.name}. Tüm hakları saklıdır.
        </span>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 order-1 md:order-2">
          {LEGAL.map((l) => (
            <li key={l.href}>
              {l.external ? (
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  href={l.href}
                  className="text-xs text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
                >
                  {l.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
