import Link from "next/link";
import { MapPin, Phone, MessageCircle, Instagram, Facebook, ArrowRight } from "lucide-react";
import { SITE, NAV } from "@/lib/constants";

const LEGAL = [
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
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md bg-[var(--color-accent)] text-[var(--color-dark)] font-medium transition-all duration-200 hover:bg-[var(--color-accent-2)] hover:-translate-y-0.5 shadow-[0_10px_30px_-10px_rgba(200,169,110,0.6)]"
            >
              <Phone size={18} />
              Hemen Ara
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md border border-[var(--color-accent)] text-[var(--color-accent)] font-medium hover:bg-[var(--color-accent)] hover:text-[var(--color-dark)] transition-all duration-200"
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

      {/* Info grid */}
      <div className="container-x py-14 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5 flex flex-col gap-5">
          <span className="font-display text-[var(--color-text)] text-xl">
            Yusuf <span className="text-[var(--color-accent)]">İnşaat</span>
          </span>
          <p className="text-[var(--color-muted)] max-w-md leading-relaxed text-sm">
            Üç kuşaktır İstanbul'da; sağlam temel, dürüst söz ve babadan oğula
            süregelen ustalıkla yapı inşa ediyoruz.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href="#"
              aria-label="Instagram"
              className="grid place-items-center w-10 h-10 rounded-md border border-[var(--color-border)] text-[var(--color-text-soft)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="grid place-items-center w-10 h-10 rounded-md border border-[var(--color-border)] text-[var(--color-text-soft)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-[var(--color-text)] mb-4 text-sm tracking-wider uppercase">
            Sayfa
          </h4>
          <ul className="flex flex-col gap-2.5">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-[var(--color-text)] mb-4 text-sm tracking-wider uppercase">
            İletişim
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-[var(--color-muted)]">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-[var(--color-accent)] mt-0.5 shrink-0" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-[var(--color-accent)] shrink-0" />
              <a href={`tel:${SITE.phone}`} className="hover:text-[var(--color-accent)] transition-colors">
                {SITE.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Legal row */}
      <div className="container-x py-6 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-xs text-[var(--color-muted-2)] order-2 md:order-1">
          © {new Date().getFullYear()} {SITE.name}. Tüm hakları saklıdır.
        </span>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 order-1 md:order-2">
          {LEGAL.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-xs text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Watermark */}
      <div
        aria-hidden
        className="relative overflow-hidden h-[16vw] md:h-[14vw] flex items-center justify-center pointer-events-none"
      >
        <span
          className="font-display font-semibold tracking-[-0.04em] whitespace-nowrap select-none leading-none"
          style={{
            fontSize: "clamp(8rem, 22vw, 26rem)",
            background:
              "linear-gradient(180deg, rgba(200,169,110,0.12) 0%, rgba(200,169,110,0.02) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextStroke: "1px rgba(200,169,110,0.18)",
          }}
        >
          YUSUF
        </span>
      </div>
    </footer>
  );
}

export default Footer;
