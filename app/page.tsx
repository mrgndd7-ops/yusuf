import Hero from "@/components/sections/Hero";
import Heritage from "@/components/sections/Heritage";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Yusuf İnşaat",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Eyüpsultan, İstanbul",
    addressCountry: "TR",
  },
  areaServed: ["Eyüpsultan", "Sultangazi", "Sultanbeyli", "Yeşilpınar", "İstanbul"],
  telephone: "+905555555555",
  foundingDate: "1972",
  description:
    "Babadan oğula İstanbul'da anahtar teslim konut, tadilat ve kentsel dönüşüm hizmetleri.",
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
      <Process />
      <Projects />
      <About />
      <Testimonials />
      <Faq />
      <Contact />
    </main>
  );
}
