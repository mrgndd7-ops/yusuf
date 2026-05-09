import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://yusufinsaat.com"),
  title: "Yusuf İnşaat | İstanbul Konut & Anahtar Teslim İnşaat Firması",
  description:
    "İstanbul Eyüpsultan, Sultangazi, Sultanbeyli ve Yeşilpınar'da anahtar teslim konut, tadilat ve kentsel dönüşüm. 1972'den beri babadan oğula süregelen ustalık.",
  keywords: [
    "istanbul inşaat firması",
    "eyüpsultan müteahhit",
    "sultangazi inşaat",
    "sultanbeyli konut",
    "yeşilpınar inşaat",
    "anahtar teslim konut istanbul",
    "kentsel dönüşüm istanbul",
  ],
  authors: [{ name: "Yusuf İnşaat" }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    title: "Yusuf İnşaat | İstanbul Konut İnşaat Firması",
    description:
      "İstanbul'da anahtar teslim konut, tadilat ve kentsel dönüşüm. Babadan oğula süregelen inşaat ustalığı.",
    siteName: "Yusuf İnşaat",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: "Yusuf İnşaat" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yusuf İnşaat | İstanbul Konut İnşaat Firması",
    description: "İstanbul'da anahtar teslim konut yapım ve tadilat hizmetleri.",
    images: ["/images/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0B0A07",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
