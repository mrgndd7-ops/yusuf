import { MapPin, Phone, Instagram, Facebook } from "lucide-react";
import { SITE, NAV } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative bg-[var(--color-bg-2)] border-t border-[var(--color-border)] pt-20 pb-10">
      <div className="container-x grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5 flex flex-col gap-5">
          <div>
            <span className="font-display text-[var(--color-text)] text-xl">
              Yusuf <span className="text-[var(--color-accent)]">İnşaat</span>
            </span>
          </div>
          <p className="text-[var(--color-muted)] max-w-md leading-relaxed text-sm">
            {SITE.founded}'den beri İstanbul'da; sağlam temel, dürüst söz ve
            babadan oğula süregelen ustalıkla yapı inşa ediyoruz.
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

      <div className="container-x mt-14 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--color-muted-2)]">
        <span>© {new Date().getFullYear()} {SITE.name}. Tüm hakları saklıdır.</span>
        <span>Babadan oğula, sağlam yapı.</span>
      </div>
    </footer>
  );
}

export default Footer;
