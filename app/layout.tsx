import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yusuf İnşaat | İstanbul Konut İnşaat Firması",
  description:
    "İstanbul Eyüpsultan, Sultangazi, Sultanbeyli ve Yeşilpınar'da anahtar teslim konut yapım ve tadilat hizmetleri. Babadan oğula süregelen inşaat ustalığı.",
  keywords: [
    "istanbul inşaat firması",
    "eyüpsultan müteahhit",
    "sultangazi inşaat",
    "sultanbeyli konut",
    "yeşilpınar inşaat",
    "anahtar teslim konut istanbul",
  ],
  authors: [{ name: "Yusuf İnşaat" }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    title: "Yusuf İnşaat | İstanbul Konut İnşaat Firması",
    description:
      "İstanbul'da anahtar teslim konut yapım ve tadilat hizmetleri. Babadan oğula süregelen inşaat ustalığı.",
    siteName: "Yusuf İnşaat",
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Yusuf İnşaat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yusuf İnşaat | İstanbul Konut İnşaat Firması",
    description:
      "İstanbul'da anahtar teslim konut yapım ve tadilat hizmetleri.",
    images: ["/images/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1C1A14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
