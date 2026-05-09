import type { Metadata } from "next";
import LegalLayout from "@/components/ui/LegalLayout";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Yusuf İnşaat",
  description:
    "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında Yusuf İnşaat aydınlatma metni.",
};

export default function Page() {
  return (
    <LegalLayout
      title="Kişisel Verilerin Korunması Aydınlatma Metni"
      updated="2026"
      intro={`${SITE.name} olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında Veri Sorumlusu sıfatıyla; web sitemiz, iletişim formlarımız ve fiziksel ofislerimiz aracılığıyla bizimle paylaştığınız kişisel verilerinizin işlenmesine ilişkin sizleri bilgilendirmek isteriz.`}
    >
      <h2>1. Veri Sorumlusu</h2>
      <p>
        Bu aydınlatma metni kapsamında veri sorumlusu, {SITE.address} adresinde
        faaliyet gösteren {SITE.name}'tır.
      </p>

      <h2>2. İşlenen Kişisel Veriler</h2>
      <p>
        Sizlerle olan iş ve hizmet ilişkimiz çerçevesinde aşağıdaki kişisel
        verileriniz işlenebilir:
      </p>
      <ul>
        <li>Kimlik bilgileri (ad, soyad)</li>
        <li>İletişim bilgileri (telefon numarası, e-posta adresi, adres)</li>
        <li>Talep ve şikayet içerikleri (form üzerinden iletilen mesajlar)</li>
        <li>İşlem güvenliği bilgileri (IP adresi, çerez verileri)</li>
      </ul>

      <h2>3. Kişisel Verilerin İşlenme Amaçları</h2>
      <p>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
      <ul>
        <li>Talep ettiğiniz keşif, fiyat teklifi ve danışmanlık hizmetlerinin sunulması</li>
        <li>Sözleşme süreçlerinin yürütülmesi ve hukuki yükümlülüklerin yerine getirilmesi</li>
        <li>Müşteri ilişkileri yönetimi, talep ve şikayetlerin değerlendirilmesi</li>
        <li>İletişim faaliyetlerinin yürütülmesi</li>
        <li>Yasal mevzuatın gerektirdiği saklama yükümlülüklerinin yerine getirilmesi</li>
      </ul>

      <h2>4. Verilerin Aktarılması</h2>
      <p>
        Kişisel verileriniz; yalnızca yukarıda belirtilen amaçların yerine
        getirilmesi için gerekli olduğu ölçüde, yasal yükümlülüklerimiz
        çerçevesinde yetkili kamu kurum ve kuruluşlarına, anlaşmalı
        tedarikçilerimize ve hukuki danışmanlarımıza aktarılabilir. Yurt dışına
        veri aktarımı yapılmamaktadır.
      </p>

      <h2>5. Veri Toplama Yöntemleri ve Hukuki Sebepler</h2>
      <p>
        Kişisel verileriniz; web sitemiz üzerindeki iletişim formları, telefon
        görüşmeleri, e-posta yazışmaları ve fiziksel ofis ziyaretleri yoluyla
        toplanmaktadır. Veriler; KVKK madde 5/2 uyarınca sözleşmenin kurulması
        ve ifası, hukuki yükümlülüğün yerine getirilmesi ve meşru menfaat
        hukuki sebeplerine dayanılarak işlenir.
      </p>

      <h2>6. KVKK Madde 11 Kapsamındaki Haklarınız</h2>
      <p>Veri sahibi olarak aşağıdaki haklara sahipsiniz:</p>
      <ul>
        <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
        <li>İşlenmişse buna ilişkin bilgi talep etme</li>
        <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
        <li>Yurt içinde aktarıldığı üçüncü kişileri bilme</li>
        <li>Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme</li>
        <li>Kanun'un öngördüğü şartlar çerçevesinde silinmesini veya yok edilmesini isteme</li>
        <li>Otomatik sistemler vasıtasıyla analiz edilmesi sonucunda aleyhinize doğan sonuca itiraz etme</li>
        <li>Kanuna aykırı işleme sebebiyle uğradığınız zararın giderilmesini talep etme</li>
      </ul>

      <h2>7. Başvuru Yöntemi</h2>
      <p>
        Yukarıda belirtilen haklarınızı kullanmak için tarafımıza yazılı
        olarak {SITE.address} adresinden veya{" "}
        <a
          href={`tel:${SITE.phone}`}
          className="text-[var(--color-accent)] hover:underline"
        >
          {SITE.phoneDisplay}
        </a>{" "}
        numarası üzerinden ulaşabilirsiniz. Başvurunuz, KVKK ve ilgili mevzuat
        hükümleri uyarınca en geç otuz gün içinde yanıtlanacaktır.
      </p>
    </LegalLayout>
  );
}
