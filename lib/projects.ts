export type Project = {
  id: string;
  title: string;
  description: string;
  images: string[];
};

export const PROJECTS: Project[] = [
  {
    id: "eyupsultan-konut",
    title: "Eyüpsultan Konutları",
    description:
      "12 daireli butik konut projesi — modern cephe, geniş yaşam alanları.",
    images: [
      "/images/projects/eyupsultan-1.jpg",
      "/images/projects/eyupsultan-2.jpg",
      "/images/projects/eyupsultan-3.jpg",
    ],
  },
  {
    id: "sultangazi-villa",
    title: "Sultangazi Villa Projesi",
    description:
      "Bahçeli müstakil villa — doğal taş cephe, akıllı ev sistemleri.",
    images: [
      "/images/projects/sultangazi-1.jpg",
      "/images/projects/sultangazi-2.jpg",
      "/images/projects/sultangazi-3.jpg",
    ],
  },
  {
    id: "yesilpinar-renovasyon",
    title: "Yeşilpınar Tadilat",
    description:
      "5 katlı binanın komple yenilenmesi — cephe, ıslak hacim, tesisat.",
    images: [
      "/images/projects/yesilpinar-1.jpg",
      "/images/projects/yesilpinar-2.jpg",
      "/images/projects/yesilpinar-3.jpg",
    ],
  },
];
