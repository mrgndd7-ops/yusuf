import Hero from "@/components/sections/Hero";
import Heritage from "@/components/sections/Heritage";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Yusuf İnşaat",
  address: {
    "@type": "PostalAddress",
    addressLocality: "İstanbul",
    addressCountry: "TR",
  },
  areaServed: [
    "Eyüpsultan",
    "Sultangazi",
    "Sultanbeyli",
    "Yeşilpınar",
    "İstanbul",
  ],
  telephone: "+905555555555",
  description:
    "Babadan oğula İstanbul'da konut inşaat ve tadilat hizmetleri.",
};

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Heritage />
      <Services />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
