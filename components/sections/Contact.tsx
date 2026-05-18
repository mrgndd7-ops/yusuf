"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, MessageCircle, Send, Check, Loader2 } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { CONTACT, SITE } from "@/lib/constants";

type Status = "idle" | "sending" | "sent" | "error";

const TALEP_TURLERI = [
  "İnşaat Taahhüt (Ücret Mukabili Yenileme)",
  "Kat Karşılığı İnşaat",
  "Kentsel Dönüşüm Danışmanlık",
  "Diğer",
];

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const buildWhatsAppText = (data: FormData) => {
    const get = (k: string) => (data.get(k) || "").toString().trim();
    const lines = [
      "Merhaba Yusuf İnşaat, keşif talebim:",
      "",
      "İLETİŞİM",
      `Ad Soyad: ${get("name")}`,
      `Telefon: ${get("phone")}`,
      get("email") ? `E-Posta: ${get("email")}` : "",
      "",
      "ARSA / ARAZİ BİLGİLERİ",
      `İl: ${get("il")}`,
      `İlçe: ${get("ilce")}`,
      get("mahalle") ? `Mahalle: ${get("mahalle")}` : "",
      get("ada_parsel") ? `Ada / Parsel: ${get("ada_parsel")}` : "",
      get("arsa_m2") ? `Arsa m²: ${get("arsa_m2")}` : "",
      get("imar") ? `İmar Durumu (Emsal): ${get("imar")}` : "",
      "",
      `TALEP TÜRÜ: ${get("talep_turu") || "-"}`,
      "",
      "MESAJ:",
      get("message") || "-",
    ].filter(Boolean);
    return lines.join("\n");
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setErrorMsg("");

    try {
      const payload = Object.fromEntries(data.entries());
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || "Gönderim başarısız oldu.");
      }

      setStatus("sent");
      form.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Bilinmeyen hata");
    }
  };

  const onWhatsApp = (e: React.MouseEvent<HTMLButtonElement>) => {
    const form = e.currentTarget.closest("form") as HTMLFormElement | null;
    if (!form) return;
    const data = new FormData(form);
    const text = buildWhatsAppText(data);
    const url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
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
            className="lg:col-span-4 flex flex-col gap-5"
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
            className="lg:col-span-8 card-surface p-7 md:p-9 flex flex-col gap-6"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h3 className="font-display text-[var(--color-text)]" style={{ fontSize: "1.5rem" }}>
                {CONTACT.formTitle}
              </h3>
              <span className="text-xs text-[var(--color-muted)]">{CONTACT.formNote}</span>
            </div>

            {/* İletişim Bilgileri */}
            <fieldset className="flex flex-col gap-3">
              <legend className="text-xs uppercase tracking-widest text-[var(--color-muted)] font-bold mb-1">
                İletişim Bilgileriniz <span className="text-[var(--color-accent)]">*</span>
              </legend>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <Field name="name" placeholder="İsim" required />
                <Field name="phone" type="tel" placeholder="Telefon" required />
                <Field name="email" type="email" placeholder="E-Posta" />
              </div>
            </fieldset>

            {/* Arsa Bilgileri */}
            <fieldset className="flex flex-col gap-3">
              <legend className="text-xs uppercase tracking-widest text-[var(--color-muted)] font-bold mb-1">
                Arazi Özellikleri – Arsa Konum Bilgileri <span className="text-[var(--color-accent)]">*</span>
              </legend>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <Field name="il" placeholder="İl" required />
                <Field name="ilce" placeholder="İlçe" required />
                <Field name="mahalle" placeholder="Mahalle" />
                <Field name="ada_parsel" placeholder="Ada / Parsel" />
                <Field name="arsa_m2" placeholder="Arsa m²" />
                <Field name="imar" placeholder="İmar Durumu (Emsal)" />
              </div>
            </fieldset>

            {/* Talep Türü */}
            <fieldset className="flex flex-col gap-3">
              <legend className="text-sm text-[var(--color-text)] font-bold mb-1">
                Arsa veya Binanızı nasıl değerlendirmek istersiniz?
              </legend>
              <div className="flex flex-col gap-2">
                {TALEP_TURLERI.map((t) => (
                  <label
                    key={t}
                    className="flex items-center gap-3 cursor-pointer group text-[var(--color-text-soft)] hover:text-[var(--color-text)] transition-colors"
                  >
                    <input
                      type="radio"
                      name="talep_turu"
                      value={t}
                      className="peer sr-only"
                    />
                    <span className="grid place-items-center w-5 h-5 rounded-full border-2 border-[var(--color-border)] peer-checked:border-[var(--color-accent)] transition-colors">
                      <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)] scale-0 peer-checked:scale-100 transition-transform" />
                    </span>
                    <span className="text-sm">{t}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <FieldArea name="message" placeholder="Yorum veya Mesaj" />

            {/* Status */}
            {status === "sent" && (
              <div className="rounded-md border border-[var(--color-accent)] bg-[var(--color-accent-soft)] text-[var(--color-text)] px-4 py-3 text-sm">
                Teşekkürler! Talebiniz tarafımıza ulaştı. En kısa sürede dönüş yapacağız.
              </div>
            )}
            {status === "error" && (
              <div className="rounded-md border border-red-500/40 bg-red-500/10 text-red-300 px-4 py-3 text-sm">
                Mail gönderilemedi: {errorMsg}. Lütfen WhatsApp seçeneğini kullanın veya bizi arayın.
              </div>
            )}

            <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
              <button
                type="button"
                onClick={onWhatsApp}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border)] text-[var(--color-text-soft)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors text-sm"
              >
                <MessageCircle size={16} /> WhatsApp&apos;tan Yaz
              </button>
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-accent)] text-[var(--color-dark)] font-medium hover:bg-[var(--color-accent-2)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Gönderiliyor…
                  </>
                ) : status === "sent" ? (
                  <>
                    <Check size={18} /> Gönderildi
                  </>
                ) : (
                  <>
                    Gönder <Send size={16} />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  type = "text",
  required,
  placeholder,
}: {
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <input
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-md px-4 py-3 text-[var(--color-text)] placeholder:text-[var(--color-muted-2)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent-soft)] transition-all"
    />
  );
}

function FieldArea({
  name,
  required,
  placeholder,
}: {
  name: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <textarea
      name={name}
      required={required}
      placeholder={placeholder}
      rows={5}
      className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-md px-4 py-3 text-[var(--color-text)] placeholder:text-[var(--color-muted-2)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent-soft)] transition-all resize-none"
    />
  );
}

export default Contact;
