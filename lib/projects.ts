export type Project = {
  id: string;
  title: string;
  location: string;
  scope: string;
  year: string;
  description: string;
  images: string[];
};

export const PROJECTS: Project[] = [
  {
    id: "eyupsultan-konut",
    title: "Eyüpsultan Konutları",
    location: "Eyüpsultan, İstanbul",
    scope: "Anahtar Teslim · 12 Daire",
    year: "2023",
    description:
      "12 daireli butik konut projesi — modern doğal taş cephe, geniş yaşam alanları ve akıllı ev altyapısı.",
    images: [
      "/images/projects/eyupsultan-1.jpg",
      "/images/projects/eyupsultan-2.jpg",
      "/images/projects/eyupsultan-3.jpg",
    ],
  },
  {
    id: "sultangazi-villa",
    title: "Sultangazi Villa",
    location: "Sultangazi, İstanbul",
    scope: "Müstakil Villa",
    year: "2024",
    description:
      "Bahçeli müstakil villa — doğal taş cephe, panoramik camekan ve özel iç mimari paket.",
    images: [
      "/images/projects/sultangazi-1.jpg",
      "/images/projects/sultangazi-2.jpg",
      "/images/projects/sultangazi-3.jpg",
    ],
  },
  {
    id: "yesilpinar-renovasyon",
    title: "Yeşilpınar Renovasyon",
    location: "Yeşilpınar, İstanbul",
    scope: "Komple Yenileme",
    year: "2024",
    description:
      "5 katlı binanın komple yenilenmesi — cephe, ıslak hacim, tesisat ve iç mekan dönüşümü.",
    images: [
      "/images/projects/yesilpinar-1.jpg",
      "/images/projects/yesilpinar-2.jpg",
      "/images/projects/yesilpinar-3.jpg",
    ],
  },
  {
    id: "sultanbeyli-rezidans",
    title: "Sultanbeyli Rezidans",
    location: "Sultanbeyli, İstanbul",
    scope: "Anahtar Teslim · 24 Daire",
    year: "2025",
    description:
      "İki blok, 24 daire ve sosyal alanlardan oluşan butik rezidans — peyzajlı bahçe ve kapalı otopark.",
    images: [
      "/images/projects/sultanbeyli-1.jpg",
      "/images/projects/sultanbeyli-2.jpg",
      "/images/projects/sultanbeyli-3.jpg",
    ],
  },
];
