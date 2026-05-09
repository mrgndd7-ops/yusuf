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
    q: "Anahtar teslim inşaat ne demektir, neleri kapsar?",
    a: "Anahtar teslim; hafriyat ve temelden başlayarak kaba inşaat, kalıp, demir, beton, tesisat (su, elektrik, doğalgaz, kanalizasyon), iç ve dış mekan ince işçiliği, mutfak ve ıslak hacim uygulamaları, cephe kaplaması ve son temizlik aşamalarının tamamlanarak yapının oturuma hazır halde sahibine teslim edilmesi sürecidir. Mal sahibi yalnızca eşyalarını taşıyıp yerleşir.",
  },
  {
    q: "Sözleşme süreci nasıl ilerler, fiyat ne zaman netleşir?",
    a: "Saha keşfi ve ihtiyaç analizinden sonra mimari avan proje, malzeme seçenekleri ve detaylı maliyet kalemleri tarafınızla netleştirilir. Tüm kalemler üzerinde mutabık kalındığında sabit fiyatlı sözleşme imzalanır; sözleşme süresi boyunca fiyat değişmez. Proje sonrası talep edeceğiniz ek işler ayrıca fiyatlandırılır.",
  },
  {
    q: "Hak ediş ve ödeme planı nasıl işler?",
    a: "Ödemeler, sözleşmede belirlenen iş ilerleme aşamalarına (kaba inşaat, çatı, kapı pencere, ince işçilik, teslim) bağlı hak edişler şeklinde yapılır. Her hak ediş öncesi şantiye yerinde mal sahibiyle birlikte denetim yapılır; fotoğraflı ilerleme raporu sunulur, ardından ödeme alınır.",
  },
  {
    q: "İşçilik ve yapı garantisi sunuyor musunuz?",
    a: "Evet. Teslim ettiğimiz tüm yapılar yasal mevzuata uygun yapısal güvence kapsamındadır. İnce işçilik kaynaklı ortaya çıkabilecek sorunlar için işçilik garantimiz mevcuttur ve bakım talepleriniz hızla yanıtlanır. Biz teslim eder, biz arkasında dururuz.",
  },
  {
    q: "Tadilat sırasında evden çıkmamız gerekir mi?",
    a: "Komple ıslak hacim, elektrik ve tesisat yenilemesi gibi kapsamlı dönüşümlerde toz, gürültü ve su kesintisi nedeniyle evin boşaltılması önerilir. Bölgesel veya odalık yenilemelerde ise gün sonu temizliği yapılır, yaşam alanınız mümkün olduğunca korunarak çalışılır.",
  },
  {
    q: "Malzeme seçimini kim yapar, kendi malzememizi getirebilir miyiz?",
    a: "Tüm malzeme tercihleri tarafınızla birlikte belirlenir. Anlaşmalı olduğumuz markalardan seçim yapabilir, kendi malzemenizi temin edebilir veya iç mimari paketimizle uyumlu çözümleri tercih edebilirsiniz. Hangi yolu seçerseniz seçin, malzeme kalitesi sözleşmede belgelenir.",
  },
  {
    q: "Ruhsat, iskan ve resmi süreçleri kim takip eder?",
    a: "Belediyeden alınacak yapı ruhsatı, statik ve mekanik proje onayları, su elektrik abonelikleri ve teslim sonrası iskan başvurusu gibi resmi süreçlerin tamamı ekibimizce yürütülür. Mal sahibi yalnızca imza aşamalarında sürece dahil olur.",
  },
  {
    q: "Ücretsiz keşif ve teklif veriyor musunuz?",
    a: "İstanbul içi tüm saha keşifleri ücretsizdir. Görüşme sonrası kısa sürede detaylı teklif ve örnek sözleşmeyi tarafınıza ileriz. Telefon veya WhatsApp üzerinden randevu oluşturabilirsiniz.",
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
