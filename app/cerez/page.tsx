import type { Metadata } from "next";
import LegalLayout from "@/components/ui/LegalLayout";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Çerez Politikası | Yusuf İnşaat",
  description:
    "Yusuf İnşaat web sitesi çerez (cookie) kullanımı politikası ve tercihler.",
};

export default function Page() {
  return (
    <LegalLayout
      title="Çerez Politikası"
      updated="2026"
      intro={`Bu politika, ${SITE.name} web sitesini ziyaret ettiğinizde tarayıcınıza yerleştirilen çerezler hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.`}
    >
      <h2>1. Çerez Nedir?</h2>
      <p>
        Çerezler (cookies), ziyaret ettiğiniz web siteleri tarafından
        tarayıcınıza gönderilen ve cihazınızda saklanan küçük metin
        dosyalarıdır. Çerezler, sitelerin sizi tanıması, tercihlerinizi
        hatırlaması ve kullanıcı deneyiminin iyileştirilmesi için kullanılır.
      </p>

      <h2>2. Kullandığımız Çerez Türleri</h2>

      <h3>Zorunlu Çerezler</h3>
      <p>
        Web sitesinin temel işlevlerinin çalışabilmesi için gereklidir. Bu
        çerezler kapatılamaz; site güvenliği, form gönderimi ve oturum
        yönetimi gibi temel ihtiyaçları karşılar.
      </p>

      <h3>Performans ve Analiz Çerezleri</h3>
      <p>
        Ziyaretçilerin siteyi nasıl kullandığını anlamamıza yardımcı olur.
        Hangi sayfaların görüntülendiği, sitede ne kadar zaman geçirildiği
        gibi anonim istatistikler toplar. Toplanan veriler kişiyi
        tanımlamamızı sağlamaz.
      </p>

      <h3>İşlevsellik Çerezleri</h3>
      <p>
        Tercihlerinizi (örneğin görüntüleme ayarları) hatırlayarak daha kişisel
        bir deneyim sunar.
      </p>

      <h2>3. Çerezlerin Kontrolü</h2>
      <p>
        Çerez tercihlerinizi tarayıcınızın ayarları aracılığıyla yönetebilir,
        mevcut çerezleri silebilir veya yeni çerezlerin yerleştirilmesini
        engelleyebilirsiniz. Tarayıcı ayarlarınızı nasıl değiştireceğinizi
        ilgili tarayıcının yardım sayfasından öğrenebilirsiniz:
      </p>
      <ul>
        <li>
          <strong>Google Chrome:</strong> Ayarlar → Gizlilik ve güvenlik → Çerezler
        </li>
        <li>
          <strong>Mozilla Firefox:</strong> Tercihler → Gizlilik ve Güvenlik
        </li>
        <li>
          <strong>Safari:</strong> Tercihler → Gizlilik
        </li>
        <li>
          <strong>Microsoft Edge:</strong> Ayarlar → Çerezler ve site izinleri
        </li>
      </ul>

      <h2>4. Çerezlerin Reddedilmesi</h2>
      <p>
        Çerezleri reddetmeniz halinde web sitemizin bazı bölümleri
        beklediğiniz şekilde çalışmayabilir. Zorunlu çerezler dışındaki
        çerezleri istediğiniz zaman tarayıcı ayarlarından kapatabilirsiniz.
      </p>

      <h2>5. Politika Güncellemeleri</h2>
      <p>
        Bu çerez politikası, mevzuat değişiklikleri veya sitenin işleyişinde
        yapılan güncellemeler doğrultusunda zaman zaman güncellenebilir.
        Güncellemeler bu sayfada yayımlandığı anda yürürlüğe girer.
      </p>

      <h2>6. İletişim</h2>
      <p>
        Çerez politikamız hakkında sorularınız için{" "}
        <a
          href={`tel:${SITE.phone}`}
          className="text-[var(--color-accent)] hover:underline"
        >
          {SITE.phoneDisplay}
        </a>{" "}
        üzerinden bizimle iletişime geçebilirsiniz.
      </p>
    </LegalLayout>
  );
}
