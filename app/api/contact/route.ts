import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "Evliyasabocan8@gmail.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Yusuf İnşaat <onboarding@resend.dev>";

function esc(s: string) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name = "",
      phone = "",
      email = "",
      il = "",
      ilce = "",
      mahalle = "",
      ada_parsel = "",
      arsa_m2 = "",
      imar = "",
      talep_turu = "",
      message = "",
    } = body || {};

    if (!name || !phone || !il || !ilce) {
      return NextResponse.json(
        { error: "Zorunlu alanlar eksik (isim, telefon, il, ilçe)." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY tanımlı değil");
      return NextResponse.json(
        { error: "Mail servisi yapılandırılmamış." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const html = `
<!doctype html>
<html><body style="font-family:system-ui,Arial,sans-serif;line-height:1.5;color:#111">
  <h2 style="margin:0 0 12px">Yeni Keşif Talebi</h2>
  <h3 style="margin:18px 0 6px">İletişim</h3>
  <table cellpadding="4" style="border-collapse:collapse">
    <tr><td><b>Ad Soyad</b></td><td>${esc(name)}</td></tr>
    <tr><td><b>Telefon</b></td><td>${esc(phone)}</td></tr>
    <tr><td><b>E-Posta</b></td><td>${esc(email) || "-"}</td></tr>
  </table>
  <h3 style="margin:18px 0 6px">Arsa / Arazi</h3>
  <table cellpadding="4" style="border-collapse:collapse">
    <tr><td><b>İl</b></td><td>${esc(il)}</td></tr>
    <tr><td><b>İlçe</b></td><td>${esc(ilce)}</td></tr>
    <tr><td><b>Mahalle</b></td><td>${esc(mahalle) || "-"}</td></tr>
    <tr><td><b>Ada / Parsel</b></td><td>${esc(ada_parsel) || "-"}</td></tr>
    <tr><td><b>Arsa m²</b></td><td>${esc(arsa_m2) || "-"}</td></tr>
    <tr><td><b>İmar (Emsal)</b></td><td>${esc(imar) || "-"}</td></tr>
  </table>
  <h3 style="margin:18px 0 6px">Talep Türü</h3>
  <p>${esc(talep_turu) || "-"}</p>
  <h3 style="margin:18px 0 6px">Mesaj</h3>
  <p style="white-space:pre-wrap">${esc(message) || "-"}</p>
</body></html>`;

    const text = [
      "Yeni Keşif Talebi",
      "",
      `Ad Soyad: ${name}`,
      `Telefon: ${phone}`,
      `E-Posta: ${email || "-"}`,
      "",
      `İl: ${il}`,
      `İlçe: ${ilce}`,
      `Mahalle: ${mahalle || "-"}`,
      `Ada/Parsel: ${ada_parsel || "-"}`,
      `Arsa m²: ${arsa_m2 || "-"}`,
      `İmar: ${imar || "-"}`,
      "",
      `Talep Türü: ${talep_turu || "-"}`,
      "",
      `Mesaj: ${message || "-"}`,
    ].join("\n");

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email || undefined,
      subject: `Keşif Talebi · ${name} · ${il}/${ilce}`,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Mail gönderilemedi." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Sunucu hatası." }, { status: 500 });
  }
}
