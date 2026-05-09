"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send, Check } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { CONTACT, SITE } from "@/lib/constants";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") || "").toString();
    const phone = (data.get("phone") || "").toString();
    const message = (data.get("message") || "").toString();
    const text = `Merhaba, ben ${name}. Telefon: ${phone}\n\n${message}`;
    const url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="iletisim" className="relative bg-[var(--color-bg-2)] section-py overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] glow-accent blur-3xl opacity-30 pointer-events-none"
      />

      <div className="container-x">
        <SectionTitle eyebrow={CONTACT.eyebrow} title={CONTACT.title} subtitle={CONTACT.subtitle} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            <a
              href={`tel:${SITE.phone}`}
              className="card-surface p-6 flex items-center gap-4 hover:border-[var(--color-accent)] transition-colors group"
            >
              <span className="grid place-items-center w-12 h-12 rounded-md bg-[var(--color-accent-soft)] text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-dark)] transition-colors">
                <Phone size={20} />
              </span>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-[var(--color-muted)]">Telefon</span>
                <span className="text-[var(--color-text)] font-medium">{SITE.phoneDisplay}</span>
              </div>
            </a>

            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card-surface p-6 flex items-center gap-4 hover:border-[var(--color-accent)] transition-colors group"
            >
              <span className="grid place-items-center w-12 h-12 rounded-md bg-[var(--color-accent-soft)] text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-dark)] transition-colors">
                <MessageCircle size={20} />
              </span>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-[var(--color-muted)]">WhatsApp</span>
                <span className="text-[var(--color-text)] font-medium">7/24 yanıt</span>
              </div>
            </a>

            <a
              href={`mailto:${SITE.email}`}
              className="card-surface p-6 flex items-center gap-4 hover:border-[var(--color-accent)] transition-colors group"
            >
              <span className="grid place-items-center w-12 h-12 rounded-md bg-[var(--color-accent-soft)] text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-dark)] transition-colors">
                <Mail size={20} />
              </span>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-[var(--color-muted)]">E-posta</span>
                <span className="text-[var(--color-text)] font-medium">{SITE.email}</span>
              </div>
            </a>

            <div className="card-surface p-6 flex items-center gap-4">
              <span className="grid place-items-center w-12 h-12 rounded-md bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                <MapPin size={20} />
              </span>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-[var(--color-muted)]">Ofis</span>
                <span className="text-[var(--color-text)] font-medium">{SITE.address}</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-7 card-surface p-7 md:p-9 flex flex-col gap-5"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-[var(--color-text)]" style={{ fontSize: "1.5rem" }}>
                {CONTACT.formTitle}
              </h3>
              <span className="text-xs text-[var(--color-muted)]">{CONTACT.formNote}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field name="name" label="Ad Soyad *" required />
              <Field name="phone" label="Telefon *" type="tel" required />
            </div>
            <Field name="email" label="E-posta" type="email" />
            <Field name="subject" label="Proje Türü" placeholder="Konut / Tadilat / Danışmanlık" />
            <FieldArea name="message" label="Mesajınız *" required />

            <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
              <span className="text-xs text-[var(--color-muted)]">
                Form, WhatsApp üzerinden tarafımıza iletilir.
              </span>
              <Button type="submit" variant="primary" size="lg">
                {sent ? (
                  <>
                    <Check size={18} /> Gönderildi
                  </>
                ) : (
                  <>
                    Gönder <Send size={16} />
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs uppercase tracking-widest text-[var(--color-muted)]">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-md px-4 py-3 text-[var(--color-text)] placeholder:text-[var(--color-muted-2)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent-soft)] transition-all"
      />
    </label>
  );
}

function FieldArea({
  name,
  label,
  required,
}: {
  name: string;
  label: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs uppercase tracking-widest text-[var(--color-muted)]">{label}</span>
      <textarea
        name={name}
        required={required}
        rows={5}
        className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-md px-4 py-3 text-[var(--color-text)] placeholder:text-[var(--color-muted-2)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent-soft)] transition-all resize-none"
      />
    </label>
  );
}

export default Contact;
