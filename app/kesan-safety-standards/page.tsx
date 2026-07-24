import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Çocuk Güvenliği ve Güvenlik Standartları | Keşan",
  description:
    "Keşan'ın çocukların cinsel istismarı ve cinsel sömürüsünü önlemeye yönelik güvenlik standartları.",
};

const sections = [
  {
    title: "1. Sıfır tolerans",
    content: (
      <p>
        Keşan, çocukların cinsel istismarı ve cinsel sömürüsü (CSAM), çocukları
        cinsel amaçlarla kandırma veya hazırlama (grooming), cinsel içerikli
        iletişim, cinsel hizmet teklifleri ve çocuklara yönelik diğer her türlü
        cinsel zararlı davranış için sıfır tolerans uygular. Bu tür içeriklerin
        paylaşılması, talep edilmesi, teşvik edilmesi veya bu amaçla kullanıcı
        aranması yasaktır.
      </p>
    ),
  },
  {
    title: "2. Önleme ve moderasyon",
    content: (
      <p>
        Kullanıcılar, içerikler ve hesaplar topluluk güvenliği kurallarımıza
        uygunluk açısından incelenebilir. Şüpheli veya ihlal teşkil eden
        içerikler kaldırılabilir; ilgili hesaplar kısıtlanabilir, askıya
        alınabilir ya da kalıcı olarak kapatılabilir. Gerekli durumlarda
        ihlalle ilgili bilgi ve kayıtlar, yasal yükümlülüklere uygun olarak
        yetkili makamlara bildirilebilir.
      </p>
    ),
  },
  {
    title: "3. Nasıl bildirim yapılır?",
    content: (
      <div className="space-y-3">
        <p>
          Şüpheli bir içerik, profil veya mesaj görürsen uygulama içindeki
          <strong className="text-zinc-300"> Bildir</strong> seçeneğini kullan.
          Bildirimine mümkünse kullanıcı adını, içeriğin bağlantısını ve neden
          şüpheli olduğunu ekle.
        </p>
        <p>
          Uygulama içi bildirimi kullanamıyorsan doğrudan
          <a
            href="mailto:info@ck-labs.de?subject=Ke%C5%9Fan%20%C3%A7ocuk%20g%C3%BCvenli%C4%9Fi%20bildirimi"
            className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition"
          >
            info@ck-labs.de
          </a>{" "}
          adresine ulaşabilirsin. Çocuk güvenliğiyle ilgili bildirimleri konu
          satırında belirterek gönder. Acil ve yakın bir tehlike varsa önce
          yerel kolluk kuvvetlerine veya acil yardım hizmetlerine başvur.
        </p>
      </div>
    ),
  },
  {
    title: "4. Bildirimlerin incelenmesi",
    content: (
      <p>
        Bildirimleri mümkün olan en kısa sürede inceler, güvenliği korumak için
        gerekli işlemleri uygularız. Bildirim yapan kişinin kimliğini mümkün
        olduğunca gizli tutarız; ancak güvenlik, soruşturma veya yasal
        yükümlülükler nedeniyle yetkili makamlarla bilgi paylaşmamız
        gerekebilir. Kötü niyetli, tehdit içeren veya asılsız toplu bildirimler
        de hizmetin kötüye kullanılması olarak değerlendirilebilir.
      </p>
    ),
  },
  {
    title: "5. İletişim ve sorumlu ekip",
    content: (
      <p>
        Keşan&apos;ın güvenlik ve çocuk güvenliği konularındaki iletişim noktası
        CK-Labs&apos;tır. Güvenlik bildirimleri, politika soruları veya yetkili
        makamların talepleri için:
      </p>
    ),
  },
  {
    title: "6. Kapsam ve güncellemeler",
    content: (
      <p>
        Bu standartlar Keşan uygulamasındaki profil, paylaşım, yorum, anket,
        etkinlik, işletme katkısı, mesajlaşma ve diğer topluluk özelliklerini
        kapsar. Güvenlik uygulamalarımız veya yasal gereklilikler değiştikçe
        bu sayfayı güncelleyebiliriz.
      </p>
    ),
  },
];

export default function KesanSafetyStandards() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="border-b border-white/5 px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium tracking-wide">
              CK-Labs · Keşan
            </span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">
            Çocuk güvenliği ve güvenlik standartları
          </h1>
          <p className="text-zinc-500 text-sm">Son güncelleme: 25 Temmuz 2026</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-12 space-y-1">
        <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-6 mb-6">
          <p className="text-zinc-300 text-sm leading-relaxed">
            Bu sayfa, Keşan&apos;ın çocukların cinsel istismarı ve cinsel
            sömürüsünü önlemeye yönelik yayımlanmış güvenlik standartlarıdır.
            Keşan&apos;da çocukların güvenliği ve her türlü cinsel istismar veya
            sömürüye karşı hızlı bildirim ve müdahale esastır.
          </p>
        </div>

        {sections.map((section) => (
          <section key={section.title} className="group rounded-xl p-6 hover:bg-white/[0.03] transition">
            <h2 className="text-white font-semibold mb-3">{section.title}</h2>
            <div className="text-zinc-400 text-sm leading-relaxed">{section.content}</div>
            {section.title === "5. İletişim ve sorumlu ekip" && (
              <a
                href="mailto:info@ck-labs.de"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 transition text-white text-sm font-medium px-4 py-2 rounded-lg mt-4"
              >
                info@ck-labs.de
              </a>
            )}
          </section>
        ))}

        <div className="border-t border-white/5 mt-8 pt-8 px-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <a href="/kesan-privacy-policy" className="text-zinc-500 hover:text-zinc-300 underline underline-offset-4 transition">
            Gizlilik sözleşmesi
          </a>
          <a href="/kesan-support" className="text-zinc-500 hover:text-zinc-300 underline underline-offset-4 transition">
            Destek ve iletişim
          </a>
        </div>
      </div>
    </main>
  );
}
