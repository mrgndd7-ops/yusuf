import type { Metadata } from "next";
import LegalLayout from "@/components/ui/LegalLayout";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Yusuf İnşaat",
  description:
    "Yusuf İnşaat web sitesi gizlilik politikası ve kişisel veri işleme prensipleri.",
};

export default function Page() {
  return (
    <LegalLayout
      title="Gizlilik Politikası"
      updated="2026"
      intro={`${SITE.name} olarak müşterilerimizin ve web sitemizi ziyaret eden kullanıcılarımızın gizliliğine saygı duyuyoruz. Bu politika, sizlerle ilgili topladığımız bilgilerin ne şekilde toplandığını, kullanıldığını ve korunduğunu açıklar.`}
    >
      <h2>1. Toplanan Bilgiler</h2>
      <p>
        Web sitemizi ziyaret etmeniz veya bizimle iletişime geçmeniz halinde
        aşağıdaki bilgiler toplanabilir:
      </p>
      <ul>
        <li>İletişim formu üzerinden tarafınızca paylaşılan ad, soyad, telefon numarası ve mesaj içerikleri</li>
        <li>Web sitesi ziyaretinize ilişkin teknik veriler (IP adresi, tarayıcı türü, ziyaret tarihi)</li>
        <li>Çerezler aracılığıyla toplanan kullanım verileri (detaylar için Çerez Politikası'na bakınız)</li>
      </ul>

      <h2>2. Bilgilerin Kullanım Amaçları</h2>
      <p>Toplanan bilgiler şu amaçlarla kullanılır:</p>
      <ul>
        <li>Talep ettiğiniz hizmetler hakkında size dönüş yapmak</li>
        <li>Keşif, teklif ve sözleşme süreçlerinizi yönetmek</li>
        <li>Yasal yükümlülüklerimizi yerine getirmek</li>
        <li>Web sitemizin performansını ve kullanıcı deneyimini iyileştirmek</li>
      </ul>

      <h2>3. Bilgi Paylaşımı</h2>
      <p>
        Kişisel bilgileriniz; yalnızca açık rızanızla, yasal zorunluluklar
        çerçevesinde veya hizmet sunumumuz için zorunlu olduğu ölçüde
        paylaşılır. Bilgileriniz hiçbir koşulda üçüncü taraflara satılmaz veya
        pazarlama amacıyla kiralanmaz.
      </p>

      <h2>4. Veri Güvenliği</h2>
      <p>
        Kişisel verilerinizin güvenliğini sağlamak amacıyla teknik ve idari
        önlemler alınmaktadır. Verilere erişim, yetkili personel ile sınırlıdır
        ve aktarımlar mümkün olduğunca şifreli kanallar üzerinden yapılır.
      </p>

      <h2>5. Saklama Süresi</h2>
      <p>
        Kişisel verileriniz, ilgili mevzuatta belirtilen veya işleme amacının
        gerektirdiği süre boyunca saklanır. Yasal saklama süresinin
        tamamlanmasının ardından veriler güvenli şekilde silinir, yok edilir
        veya anonim hale getirilir.
      </p>

      <h2>6. Üçüncü Taraf Bağlantıları</h2>
      <p>
        Web sitemiz, üçüncü taraflara ait sitelere bağlantılar içerebilir. Bu
        sitelerin gizlilik uygulamalarından {SITE.name} sorumlu değildir;
        ziyaret etmeden önce ilgili sitenin gizlilik politikasını incelemenizi
        tavsiye ederiz.
      </p>

      <h2>7. İletişim</h2>
      <p>
        Bu gizlilik politikası ve veri işleme uygulamalarımıza ilişkin
        sorularınız için bizimle{" "}
        <a
          href={`tel:${SITE.phone}`}
          className="text-[var(--color-accent)] hover:underline"
        >
          {SITE.phoneDisplay}
        </a>{" "}
        üzerinden iletişime geçebilirsiniz.
      </p>
    </LegalLayout>
  );
}
