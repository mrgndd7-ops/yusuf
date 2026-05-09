export const SITE = {
  name: "Yusuf İnşaat",
  tagline: "Babadan oğula, sağlam yapı.",
  phone: "+90533554",
  phoneDisplay: "+90 533 554",
  whatsapp: "90533554",
  city: "İstanbul",
  address: "Eyüpsultan, İstanbul",
  founded: 1972,
} as const;

export const NAV = [
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Süreç", href: "#surec" },
  { label: "Projeler", href: "#projeler" },
  { label: "Yorumlar", href: "#yorumlar" },
  { label: "İletişim", href: "#iletisim" },
] as const;

export const HERO = {
  badge: "İstanbul · 1972'den beri",
  title: "Sağlam temel,\nzamana meydan okuyan yapı.",
  subtitle:
    "Eyüpsultan, Sultangazi, Sultanbeyli ve Yeşilpınar'da; arsa fizibilitesinden anahtar teslimine kadar tek elden, üç kuşak ustalıkla inşa ediyoruz.",
  beforeLabel: "ÖNCE",
  afterLabel: "SONRA",
};

export const STATS = [
  { value: 52, suffix: "+", label: "Yıllık Tecrübe" },
  { value: 380, suffix: "+", label: "Tamamlanan Daire" },
  { value: 64, suffix: "", label: "Teslim Edilen Proje" },
  { value: 12, suffix: "", label: "Hizmet Verilen İlçe" },
];

export const HERITAGE = {
  eyebrow: "Mirasımız",
  quote: "Her tuğla bir söz, her kiriş bir imzadır.",
  body: [
    "Yusuf İnşaat, üç kuşaktır İstanbul'un sokaklarında yükselen yapıların arkasındaki sessiz imzadır. 1972'de bir baba ve oğulla kurulan bu işin içinde; harç da, alın teri de, namus da vardır.",
    "Bizim için inşaat sadece beton ve demir değildir. İnsanların yıllarca yaşayacağı, çocukların büyüyeceği yuvalar inşa ediyoruz. Bu yüzden işimizi sabırla, ustalıkla ve titizlikle yapıyoruz.",
  ],
};

export const SERVICES = [
  {
    icon: "Building2",
    title: "Anahtar Teslim Konut",
    description:
      "Arsa değerlendirmesinden ince işçiliğe; mimari, statik, mekanik ve iç mimari tek elden yönetilen butik konut projeleri.",
    bullets: ["Mimari & statik proje", "Ruhsat & iskan takibi", "Anahtar teslim teslimat"],
  },
  {
    icon: "Hammer",
    title: "Tadilat & Renovasyon",
    description:
      "Daire, villa ve bina yenileme; ıslak hacim, tesisat, elektrik, cephe ve iç mekan dönüşümü ile yaşam alanınızı baştan kurar.",
    bullets: ["Komple iç tadilat", "Cephe & ısı yalıtım", "Mutfak & banyo yenileme"],
  },
  {
    icon: "ClipboardList",
    title: "Proje Danışmanlığı",
    description:
      "Yatırımcılar ve mülk sahipleri için fizibilite, maliyet kontrolü, hak ediş ve süreç yönetimi. Doğru karar sağlam temelle başlar.",
    bullets: ["Fizibilite & maliyet", "Süreç & şantiye yönetimi", "Hak ediş & raporlama"],
  },
  {
    icon: "ShieldCheck",
    title: "Kentsel Dönüşüm",
    description:
      "Riskli yapı tespitinden yeni yapıya kadar; mal sahibi haklarını koruyan şeffaf ve adil dönüşüm modelleri.",
    bullets: ["Risk analizi", "Hak sahipliği & sözleşme", "Yeni yapı teslimat"],
  },
  {
    icon: "Ruler",
    title: "Mimari & Tasarım",
    description:
      "Modern, fonksiyonel ve estetik konut tasarımı. 3D görselleştirme ile projenizi inşa etmeden önce görün.",
    bullets: ["Konsept & avan proje", "3D görselleştirme", "İç mimari paket"],
  },
  {
    icon: "Wrench",
    title: "Bakım & Servis",
    description:
      "Teslimat sonrası yapısal güvence. Biz teslim eder, biz arkasında dururuz.",
    bullets: ["Yapısal güvence", "Teknik bakım desteği", "Acil müdahale hattı"],
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Keşif & Dinleme",
    description: "Sahaya gelir, ihtiyacınızı dinler, ücretsiz fizibilite raporunu sunarız.",
  },
  {
    step: "02",
    title: "Proje & Sözleşme",
    description: "Mimari, maliyet ve takvim üzerinde anlaşırız; her detay sözleşmede yazılıdır.",
  },
  {
    step: "03",
    title: "Ruhsat & Hazırlık",
    description: "Belediye süreci, statik ve mekanik onaylar; siz uğraşmadan biz yürütürüz.",
  },
  {
    step: "04",
    title: "İnşaat & Kontrol",
    description: "Şantiye günlük raporlanır; her hak edişte mal sahibi sahaya davetlidir.",
  },
  {
    step: "05",
    title: "Teslim & Güvence",
    description: "Anahtar teslimden sonra yapısal güvence ve teknik bakım desteğiyle yanınızdayız.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Eyüpsultan'daki binamızı Yusuf İnşaat yaptı. Söz verdikleri tarihte, söz verdikleri kalitede teslim ettiler. Bir daha proje yapsam yine onlara giderim.",
    name: "Mehmet Yıldız",
    role: "Mal Sahibi · Eyüpsultan",
  },
  {
    quote:
      "Tadilat yaptırırken iki firmayla görüşmüştüm. Yusuf usta sahaya geldi, dinledi, çözüm önerdi. Diğerleri sadece fiyat verdi. Fark buradaydı.",
    name: "Ayşe Demir",
    role: "Daire Sahibi · Sultangazi",
  },
  {
    quote:
      "Yatırım amacıyla aldığımız arsayı projelendirdiler ve inşa ettiler. Hak ediş raporları gün gün geldi; şeffaflık tam puan.",
    name: "Burak Aksoy",
    role: "Yatırımcı · Yeşilpınar",
  },
];

export const FAQ = [
  {
    q: "Anahtar teslim bir proje ne kadar sürer?",
    a: "Arsa büyüklüğü ve daire sayısına göre değişmekle birlikte; ortalama bir butik bina projesi ruhsattan teslime 14–18 ay arasında tamamlanır. Tadilat projeleri 4–10 hafta sürebilir.",
  },
  {
    q: "Hak ediş ve ödeme nasıl planlanır?",
    a: "Sözleşmede ödeme planı; iş ilerleme yüzdesine bağlı 6–10 hak ediş olarak yazılır. Her hak edişte mal sahibi sahayı denetler ve fotoğraflı rapor teslim alır.",
  },
  {
    q: "Garanti süresi ne kadar?",
    a: "Tüm teslim ettiğimiz yapılarda 2 yıl ücretsiz teknik bakım, 10 yıla kadar yapısal güvence sunarız. Bakım talepleri 24 saat içinde yanıtlanır.",
  },
  {
    q: "Hangi bölgelerde çalışıyorsunuz?",
    a: "Ağırlıklı olarak Eyüpsultan, Sultangazi, Sultanbeyli, Yeşilpınar ve çevre ilçelerde. İstanbul içi tüm projeler değerlendirmeye açıktır.",
  },
  {
    q: "Ücretsiz keşif ve teklif veriyor musunuz?",
    a: "Evet. İstanbul içi tüm keşifler ücretsizdir. Görüşme sonrası 5 iş günü içinde detaylı teklif ve örnek sözleşme paylaşılır.",
  },
];

export const ABOUT = {
  title: "Hakkımızda",
  eyebrow: "Üç Kuşak, Tek Söz",
  subtitle: "Sağlam yapı, sağlam imza.",
  paragraphs: [
    "Yusuf İnşaat, Eyüpsultan'da kurulmuş bir aile firmasıdır. Dede yadigarı bir mesleği bugüne taşıyor; her projede aynı titizlikle, aynı sözle çalışıyoruz.",
    "Çalışma prensibimiz nettir: Sözünde durmak, kaliteden ödün vermemek ve her projeye kendi evimizmiş gibi yaklaşmak. Mimar, mühendis ve usta kadromuzla, projenin her aşamasında yanınızdayız.",
    "Eyüpsultan, Sultangazi, Sultanbeyli ve Yeşilpınar başta olmak üzere İstanbul'un her semtinde imzamızı görebilirsiniz; teslim ettiğimiz her yapı, ailemizin onurunu taşır.",
  ],
};

export const CONTACT = {
  title: "İletişime Geçin",
  eyebrow: "Bir Çay, Bir Plan",
  subtitle:
    "Projeniz için ücretsiz keşif ve detaylı teklif. Sahaya gelir, dinleriz; teklif 5 iş günü içinde elinize ulaşır.",
  callLabel: "Hemen Ara",
  whatsappLabel: "WhatsApp'tan Yaz",
  formTitle: "Bize Yazın",
  formNote: "* zorunlu alanlar. Verileriniz yalnızca size dönüş için kullanılır.",
};
