export default function KesanPrivacyPolicy() {
  const sections = [
    {
      title: "1. Veri sorumlusu",
      content: (
        <p>
          Keşan uygulamasının veri sorumlusu CK-Labs&apos;tır. Soruların, taleplerin ve veri hakların için <a href="mailto:info@ck-labs.de" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition">info@ck-labs.de</a> adresinden bize ulaşabilirsin.
        </p>
      ),
    },
    {
      title: "2. Hangi verileri işleriz?",
      content: (
        <p>
          Hesap oluştururken verdiğin görünen ad, kullanıcı adı, biyografi ve profil fotoğrafı; Keşan&apos;da oluşturduğun paylaşım, yorum, anket, etkinlik ve işletme katkıları; oy, takip, rapor ve uygulama tercihleri işlenebilir. Uygulama izin verdiğinde konum bilgisi yalnızca sana yakın mahalle veya köy kanalını önermek için kullanılabilir; sürekli konum takibi yapmayız.
        </p>
      ),
    },
    {
      title: "3. Yapay zekâ destekli özellikler",
      content: (
        <p>
          Keşan&apos;da yapay zekâ; paylaşım, yorum ve etkinliklerde güvenlik ve moderasyon ön kontrolü, konu etiketleri, benzer içerik veya etkinlik tespiti ve daha ilgili akış önerileri için kullanılabilir. AI çıktıları yardımcı niteliktedir; nihai moderasyon ve hizmet kararları CK-Labs&apos;ın kuralları ve insan incelemesiyle değerlendirilebilir. Yapay zekâ senin adına otomatik paylaşım yapmaz.
        </p>
      ),
    },
    {
      title: "4. Verileri neden kullanırız?",
      content: (
        <p>
          Hesabını ve topluluk özelliklerini çalıştırmak, içerikleri göstermek, kötüye kullanımı önlemek, güvenliği sağlamak, uygulamayı iyileştirmek ve destek taleplerini yanıtlamak için kullanırız. İçeriklerin, hizmetin çalışması ve güvenlik kontrolleri için gerekli olduğu ölçüde yapay zekâ destekli işleme tabi tutulabilir.
        </p>
      ),
    },
    {
      title: "5. Paylaşımlar ve görünürlük",
      content: (
        <p>
          Keşan&apos;da yayınladığın içerikler, seçtiğin kanal ve uygulamanın sosyal özellikleri kapsamında diğer kullanıcılar tarafından görülebilir. Anonim paylaşım seçeneği, içeriğin sahibini toplulukta gizler; CK-Labs açısından içeriğin hesabınla ilişkilendirilebilmesi mümkündür.
        </p>
      ),
    },
    {
      title: "6. Hizmet sağlayıcılar ve saklama",
      content: (
        <p>
          Uygulamanın çalışması için barındırma, kimlik doğrulama, dosya depolama, harita ve işletme verisi ve yapay zekâ hizmet sağlayıcılarından yararlanabiliriz. Veriler, amaç için gerekli süre boyunca veya yasal yükümlülükler devam ettiği sürece saklanır. Artık gerekli olmayan verileri siler ya da anonimleştiririz.
        </p>
      ),
    },
    {
      title: "7. Hakların ve hesap silme",
      content: (
        <p>
          Verilerine erişme, düzeltme, silme, işlenmesine itiraz etme ve uygun durumlarda kısıtlama talep etme hakların vardır. Profil bölümündeki “Profilimi sil” seçeneğiyle hesabını ve hesabına bağlı içerikleri kalıcı olarak silebilirsin. Silme işlemi öncesinde nedenini paylaşman isteğe bağlıdır; bu cevaplar hesabın silinmesini engellemez.
        </p>
      ),
    },
    {
      title: "8. Güvenlik ve değişiklikler",
      content: (
        <p>
          Makul teknik ve idari güvenlik önlemleri uygularız. İnternet üzerindeki hiçbir aktarımın tamamen risksiz olmadığını hatırlatırız. Bu metni hizmet veya mevzuat değiştikçe güncelleyebilir, önemli değişiklikleri uygulama içinde duyurabiliriz.
        </p>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="border-b border-white/5 px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium tracking-wide">CK-Labs · Keşan</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Gizlilik sözleşmesi</h1>
          <p className="text-zinc-500 text-sm">Son güncelleme: 19 Temmuz 2026</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-12 space-y-1">
        <h2 className="text-2xl font-black text-white px-6 mb-2">Verilerini nasıl kullandığımızı açıkça anlatalım.</h2>
        <p className="text-zinc-400 text-sm leading-relaxed px-6 mb-6">
          Bu metin, Keşan uygulamasını kullanırken işlenen veriler ve yapay zekâ destekli özellikler hakkında bilgilendirme sağlar.
        </p>

        {sections.map((section) => (
          <div key={section.title} className="group rounded-xl p-6 hover:bg-white/[0.03] transition">
            <div className="flex gap-4">
              <div>
                <h2 className="text-white font-semibold mb-3">{section.title}</h2>
                <div className="text-zinc-400 text-sm leading-relaxed">{section.content}</div>
              </div>
            </div>
          </div>
        ))}

        <div className="rounded-xl border border-white/10 bg-[#111111] p-6 mt-8">
          <h2 className="text-white font-semibold mb-3">İletişim</h2>
          <p className="text-zinc-400 text-sm mb-4">Soruların, taleplerin veya veri hakların için bize ulaşabilirsin.</p>
          <a
            href="mailto:info@ck-labs.de"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 transition text-white text-sm font-medium px-4 py-2 rounded-lg"
          >
            info@ck-labs.de
          </a>
        </div>
      </div>
    </main>
  );
}
