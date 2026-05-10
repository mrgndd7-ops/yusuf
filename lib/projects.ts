export type Project = {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  description: string;
  images: string[];
};

export const PROJECTS: Project[] = [
  {
    id: "ruhsatli-hisseli",
    title: "Ruhsat ve Hisse Sahibi Olduğumuz Projeler",
    badge: "Ruhsatlı",
    subtitle: "Yapı Ruhsatlı · Müteahhit & Hissedar",
    description:
      "Yapı ruhsatı alınmış ve Yusuf İnşaat'ın hem müteahhit hem hissedar olarak yer aldığı, kat irtifakı süreçleri yürütülen konut projeleri. Eyüpsultan, Sultangazi ve İstanbul'un kuzey aksında; imar ve yapı denetim mevzuatına tam uyumlu, şeffaf hak ediş ve teslim süreciyle ilerletiyoruz.",
    images: [
      "/images/projects/ruhsatli-1.jpg",
      "/images/projects/ruhsatli-2.jpg",
      "/images/projects/ruhsatli-3.jpg",
      "/images/projects/ruhsatli-4.jpg",
      "/images/projects/ruhsatli-5.jpg",
    ],
  },
  {
    id: "iskan-asamasinda",
    title: "İskan Aşamasında Olan Projeler",
    badge: "İskan Sürecinde",
    subtitle: "Yapı Kullanma İzni · Belediye Süreci",
    description:
      "2021 ve sonrasında inşa ettiğimiz, kaba inşaatı ve ince yapı işleri tamamlanmış; yapı kullanma izin belgesi (iskan) için belediye başvurusu yürüyen projeler. Mekanik tesisat, elektrik ve doğal gaz uygunluk işlemleri eksiksiz yapılır; daire teslimleri iskanın onayı ile birlikte gerçekleşir.",
    images: [
      "/images/projects/iskan-1.jpg",
      "/images/projects/iskan-2.jpg",
    ],
  },
  {
    id: "tamamlanmis",
    title: "Tamamlanmış Projeler",
    badge: "Anahtar Teslim",
    subtitle: "İskanlı · Anahtar Teslim",
    description:
      "Yapı kullanma izni alınmış, anahtar teslim edilmiş ve teslim sonrası iki yıllık ücretsiz bakım güvencesi devam eden projeler. Sözleşmeden teslime kadar her aşaması belgeli, raporlu ve denetlenebilir; sahibine ailesinin onurunu taşıyan, uzun ömürlü yapılar.",
    images: [
      "/images/projects/tamamlanmis-1.jpg",
      "/images/projects/tamamlanmis-2.jpg",
      "/images/projects/tamamlanmis-3.jpg",
      "/images/projects/tamamlanmis-4.jpg",
      "/images/projects/tamamlanmis-5.jpg",
    ],
  },
  {
    id: "yeni-projeler",
    title: "Yeni Projeler",
    badge: "Yakında",
    subtitle: "Ön Satış · Yatırım Fırsatı",
    description:
      "Avan ve uygulama projeleri tamamlanmış, ruhsat ve ön satış sürecine giren yeni konut projeleri. Kentsel dönüşüm kapsamında mal sahibi yanlısı pay modelleri, şeffaf sözleşme yapısı ve İstanbul'un gelişen aksında yatırım değeri yüksek lokasyonlar.",
    images: [
      "/images/projects/yeni-1.jpg",
      "/images/projects/yeni-2.jpg",
      "/images/projects/yeni-3.jpg",
      "/images/projects/yeni-4.jpg",
      "/images/projects/yeni-5.jpg",
      "/images/projects/yeni-6.jpg",
      "/images/projects/yeni-7.jpg",
    ],
  },
  {
    id: "ic-mekan",
    title: "İç Mekan & İnce İşler",
    badge: "İnce Yapı",
    subtitle: "İç Tasarım · İnce Yapı İşleri",
    description:
      "Anahtar teslim ve renovasyon projelerinde iç mekan ince işleri: alçı ve sıva, parke, ıslak hacim seramik uygulamaları, mutfak ve banyo, boya ile dekoratif son kat işleri. Yaşam alanını kullanışlı ve uzun ömürlü kılan, detayları kaçırmayan bir işçilik anlayışı.",
    images: [
      "/images/projects/ic-mekan-1.jpg",
      "/images/projects/ic-mekan-2.jpg",
      "/images/projects/ic-mekan-3.jpg",
    ],
  },
];
