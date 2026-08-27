const sections = [
  {
    title: "Informasi yang kami proses",
    body: [
      "Data akun dan profil seperti identifier login yang didukung, alamat email, nama tampilan, avatar, bahasa, zona waktu, pengaturan, dan peristiwa siklus hidup akun.",
      "Data gameplay dan ekonomi yang diperlukan untuk mengoperasikan dunia TycoonX yang persisten, termasuk progression, inventory, mata uang virtual dan saldo Diamonds, perusahaan, produksi, aktivitas pasar, housing, pekerjaan, kontrak, pinjaman, saham, transaksi, dan status entitlement VIP.",
      "Data pembelian dan entitlement seperti platform pembayaran, product identifier, transaction identifier, signed transaction atau receipt information, status purchase/activation/expiry, status refund/revocation/chargeback, dan riwayat delivery, restore, migration, atau correction. Kami umumnya tidak menerima nomor kartu pembayaran lengkap Anda dari platform store atau payment processor.",
      "Data keamanan dan fraud seperti catatan login/session, alamat IP, informasi perangkat/platform yang tersedia bagi Layanan, versi aplikasi, diagnostics, pola akses mencurigakan, validasi pembelian tidak sah, indikator exploit, anti-abuse signals, serta moderation/security logs.",
      "Komunikasi dan konten komunitas seperti public/private chat, report, profile/company content, support ticket, contact-form submission, bug report, appeal, attachment, timestamp, sender/recipient identifier, dan moderation status.",
      "Informasi penggunaan dan analytics seperti feature usage, session, retention, performance, interaction event, dan metrik agregat untuk ekonomi/balancing.",
    ],
  },
  {
    title: "Sumber data",
    body: [
      "Kami menerima data langsung dari Anda saat Anda membuat atau menggunakan akun, bermain TycoonX, menghubungi TycoonX Support, mengirim konten komunitas, atau mengubah pengaturan. Kami juga menerima informasi terbatas dari layanan yang Anda pilih atau gunakan bersama TycoonX, termasuk authentication provider yang didukung serta Apple, Google, Xsolla, atau authorized payment provider lain ketika mereka mengirim informasi mengenai purchase, entitlement, refund, revocation, fraud, atau transaction status.",
      "Payment provider dapat memproses detail kartu pembayaran, bank, billing address, tax location, atau payment detail lain secara independen berdasarkan privacy notice mereka sendiri. CK-Labs umumnya menerima informasi transaksi dan entitlement yang diperlukan untuk memberikan dan merekonsiliasi pembelian TycoonX, bukan detail lengkap instrumen pembayaran.",
    ],
  },
  {
    title: "Mengapa kami memproses informasi",
    body: [
      "Kami memproses informasi untuk membuat dan mengamankan akun, mengoperasikan dan menyinkronkan TycoonX, memberikan dan merestore pembelian sah, mencegah duplicate delivery dan fraud, mendeteksi cheating atau exploit, menyelidiki insiden, memperbaiki game state yang tidak sah, memberi support, memoderasi community feature, menegakkan Terms dan Community Standards, mendiagnosis masalah teknis, meningkatkan Layanan, mengirim pemberitahuan operasional/legal, dan memenuhi kewajiban hukum.",
    ],
  },
  {
    title: "Dasar hukum",
    body: [
      "Jika GDPR atau hukum serupa berlaku, kami mengandalkan dasar hukum yang sesuai untuk processing tertentu: pelaksanaan kontrak untuk gameplay, account access, purchase delivery, dan support; legitimate interests untuk security, anti-fraud, game integrity, diagnostics, proportionate community moderation, dan legal defense sepanjang tidak dikalahkan oleh hak atau kepentingan Anda; legal obligations untuk required recordkeeping dan permintaan otoritas; serta consent apabila hukum mewajibkannya untuk optional processing.",
      "Sekadar menggunakan TycoonX tidak dianggap sebagai consent untuk processing yang secara hukum memerlukan consent. Jika consent diperlukan, kami memintanya secara terpisah dan consent dapat ditarik untuk processing di masa depan.",
    ],
  },
  {
    title: "Data yang diperlukan untuk menyediakan TycoonX",
    body: [
      "Sebagian informasi diperlukan untuk menjalankan kontrak TycoonX atau memproses pembelian. Misalnya, account identifier diperlukan untuk mempertahankan persistent game state, sedangkan transaction/entitlement information yang sah diperlukan untuk memberikan, merestore, merefund, mencabut, atau merekonsiliasi paid content dengan benar. Jika informasi wajib tidak diberikan atau tidak dapat diverifikasi, kami mungkin tidak dapat membuat atau mengautentikasi akun, memberikan pembelian, merestore entitlement, atau menyediakan feature yang terdampak.",
      "Optional information atau processing yang tidak diperlukan untuk core Service ditangani secara terpisah jika diwajibkan, termasuk consent controls apabila berlaku.",
    ],
  },
  {
    title: "Bagaimana kami membagikan informasi",
    body: [
      "Kami tidak menjual personal data. Kami hanya dapat membagikan apa yang secara wajar diperlukan kepada service provider yang mendukung hosting, database, authentication, storage, analytics, diagnostics, moderation, communications, notification, atau security; kepada platform/payment partner seperti Apple, Google, Xsolla, atau authorized provider lain untuk purchase validation, restoration, refund, revocation, fraud, dan dispute; kepada player lain ketika Anda sengaja menggunakan public/social features; kepada otoritas jika diwajibkan hukum; serta kepada pihak dalam lawful business transfer.",
      "Apple, Google, Xsolla, bank, card network, atau payment participant lain dapat bertindak sebagai independent controller untuk bagian tertentu dari processing pembayaran, fraud, tax, account, atau platform mereka sendiri. Privacy notice dan legal obligations mereka sendiri berlaku pada independent processing tersebut. TycoonX saat ini menggunakan infrastruktur seperti Supabase untuk sebagian backend, dan service provider tunduk pada applicable contractual dan legal safeguards.",
      "Jika platform rules mengharuskannya, third party yang menerima user data dari CK-Labs harus memberikan tingkat perlindungan yang sama atau setara untuk data tersebut sebagaimana dijelaskan dalam Policy ini dan diwajibkan oleh platform rules yang berlaku.",
      "Third-party AI services tidak dikecualikan dari aturan ini. Jika TycoonX menggunakan third-party AI service dengan cara yang melibatkan sharing personal data, CK-Labs akan mengungkapkan sharing tersebut dan memperoleh explicit permission sebelum mengirim atau membagikan data jika platform rules atau hukum yang berlaku mengharuskannya. Provider tersebut harus dibatasi pada authorized purposes dan tunduk pada privacy serta security safeguards yang sesuai.",
    ],
  },
  {
    title: "Konten komunitas publik dan komunikasi privat",
    body: [
      "Konten yang sengaja Anda jadikan public di TycoonX dapat ditampilkan kepada user lain sebagai bagian dari Layanan. Jika TycoonX Terms dan Community Standards mengizinkan public user-generated content ditampilkan untuk TycoonX community atau promotional purposes, CK-Labs akan menggunakan legal basis yang sesuai dan menghormati context saat content dibagikan, settings yang berlaku, third-party rights, dan mandatory law. Jika consent diperlukan untuk promotional use tertentu, CK-Labs akan memintanya secara terpisah.",
      "Private direct messages, private support communications, dan non-public reports diproses sejauh diperlukan untuk menyediakan, mengamankan, memoderasi, mendukung, menyelidiki, atau melindungi Layanan secara hukum. Konten tersebut tidak dibuat public atau digunakan untuk public promotional purposes hanya karena CK-Labs perlu memprosesnya untuk tujuan operasional tersebut.",
      "Moderation atau legal-review access ke private communications dibatasi pada keadaan ketika processing secara wajar diperlukan dan lawful, misalnya untuk merespons report, melindungi users, menyelidiki abuse/fraud, memenuhi hukum, atau menetapkan/membela legal claims.",
    ],
  },
  {
    title: "Transfer internasional",
    body: [
      "TycoonX dan sebagian provider dapat memproses informasi di luar negara tempat tinggal Anda. Jika GDPR atau pembatasan transfer serupa berlaku, kami menggunakan legal transfer mechanism yang sesuai jika diperlukan, seperti adequacy decision, Standard Contractual Clauses, atau recognized safeguard lain. International transfer tidak semata-mata didasarkan pada pernyataan bahwa penggunaan TycoonX berarti consent.",
      "Jika hukum yang berlaku memberi Anda hak atas informasi mengenai safeguards untuk international transfer, Anda dapat menghubungi TycoonX Support untuk meminta informasi lebih lanjut atau salinan safeguards yang tersedia, tunduk pada lawful redactions dan third-party confidentiality requirements.",
    ],
  },
  {
    title: "Retensi data",
    body: [
      "Kami menyimpan personal data hanya selama secara wajar diperlukan untuk tujuannya dan untuk periode tambahan yang diwajibkan atau diizinkan hukum. Active account/game data dapat disimpan selama account aktif; support records selama reasonable follow-up dan dispute period; purchase, refund, entitlement, restore, accounting, dan tax records selama legally required, contract-performance, fraud-prevention, atau dispute-related period; serta security, anti-fraud, exploit, moderation, dan audit records selama reasonable period yang diperlukan untuk melindungi Layanan, menyelidiki insiden, atau membela klaim.",
      "Private communications tidak disimpan tanpa batas hanya karena pernah ditinjau untuk moderation. Retention lebih lama harus memiliki lawful need tersendiri seperti active dispute, safety investigation, legal claim, atau legal obligation. Backup dapat tetap ada selama limited backup lifecycle sebelum dihapus atau ditimpa. Anonymized atau genuinely aggregated data dapat disimpan jika tidak lagi mengidentifikasi seseorang.",
    ],
  },
  {
    title: "Hak privasi Anda",
    body: [
      "Bergantung pada hukum yang berlaku, Anda mungkin memiliki hak untuk access, correct, delete, restrict, object, menerima data tertentu dalam portable format, withdraw consent jika processing berbasis consent, serta mengajukan complaint kepada competent data-protection authority.",
      "Anda dapat meminta account deletion melalui TycoonX jika tersedia atau menghubungi TycoonX Support. Kami mungkin perlu memverifikasi identitas Anda. Catatan tertentu masih dapat disimpan jika diwajibkan atau diizinkan untuk legal, tax, accounting, contract-performance, fraud-prevention, security, dispute-resolution, entitlement-restoration, atau legal-claims purposes.",
    ],
  },
  {
    title: "Penghapusan akun dan entitlement berbayar",
    body: [
      "Menghapus akun TycoonX berbeda dari meminta payment refund. Account deletion dapat secara permanen menghapus gameplay progress, Diamonds, consumable value, inventory, social data, dan profile state lain yang terkait akun. Penghapusan tidak otomatis menciptakan hak atas cash redemption atau refund.",
      "Menghapus akun TycoonX tidak selalu menghapus atau membatalkan transaction record terpisah milik Apple, Google, Xsolla, atau payment provider lain. Jika valid Lifetime VIP atau non-consumable/restorable entitlement lain tetap terkait dengan purchaser berdasarkan platform rules, provider records, contract, atau mandatory law, CK-Labs dapat mempertahankan minimum transaction dan entitlement evidence yang secara wajar diperlukan untuk memverifikasi dan merestore entitlement tersebut.",
      "Restore di kemudian hari dapat memerlukan reasonable proof bahwa purchaser yang sama menguasai relevant platform/payment account. Restore paid entitlement tidak membuat kembali deleted gameplay progress, consumed Diamonds, inventory, history, atau transferred assets kecuali applicable law mengharuskan lain. Refund rights tetap diatur oleh payment-provider process dan mandatory law.",
    ],
  },
  {
    title: "Anak-anak dan kontrol terkait usia",
    body: [
      "TycoonX tidak ditujukan kepada anak di bawah usia minimum yang diizinkan untuk penggunaan mandiri di yurisdiksi user. Jika parental consent diwajibkan hukum, Layanan tidak boleh digunakan tanpa authorization yang diperlukan. Jika kami mengetahui personal data dikumpulkan dari anak dalam keadaan yang tidak memenuhi applicable law, kami dapat membatasi account dan menghapus information sebagaimana diwajibkan.",
      "CK-Labs dapat memproses age, age range, parental authorization, atau platform age-control information secara terbatas jika secara wajar diperlukan untuk mematuhi hukum, menerapkan age-appropriate social restrictions, memenuhi App Store/Google Play requirements, atau melindungi minors. TycoonX dapat restrict atau disable community features untuk age group tertentu meskipun underlying game tetap tersedia.",
    ],
  },
  {
    title: "Keamanan",
    body: [
      "Kami menggunakan technical dan organizational measures yang dirancang untuk melindungi data TycoonX, seperti access controls, authentication controls, encrypted network transport jika berlaku, monitoring, rate limiting, purchase validation, audit logging, backups, dan safeguards lain yang sesuai dengan Layanan.",
      "Tidak ada online service yang dapat menjamin keamanan absolut. Jika Anda yakin account telah disusupi atau menemukan security vulnerability, segera hubungi TycoonX Support. Hal ini tidak mengurangi kewajiban CK-Labs atas security measures yang diwajibkan hukum.",
    ],
  },
  {
    title: "Keamanan dan moderasi otomatis",
    body: [
      "TycoonX dapat menggunakan automated rules, signals, atau systems untuk mengidentifikasi suspicious activity, spam, fraud, abusive content, exploit patterns, invalid purchases, atau conduct lain yang dapat mengancam users atau Service. Automated signals dapat memicu review, temporary restriction, moderation, atau investigation.",
      "Jika applicable law membatasi solely automated decisions yang menghasilkan legal atau similarly significant effects, CK-Labs akan menerapkan safeguards yang diwajibkan, termasuk human involvement atau review jika hukum mengharuskannya. Rights terkait decisions tersebut tetap tidak terpengaruh.",
    ],
  },
  {
    title: "Tautan dan layanan pihak ketiga",
    body: [
      "TycoonX dapat menautkan ke atau beroperasi bersama third-party services. Third party tersebut dapat memproses information berdasarkan privacy policy mereka sendiri. CK-Labs tidak bertanggung jawab atas independent third-party privacy practices kecuali sejauh applicable law membuat CK-Labs bertanggung jawab.",
    ],
  },
  {
    title: "Perubahan pada Kebijakan ini",
    body: [
      "Kami dapat memperbarui Policy ini untuk mencerminkan perubahan TycoonX, data practices, providers, security measures, community features, atau legal requirements. Kami akan memperbarui tanggal Terakhir diperbarui dan memberi additional notice jika diwajibkan. Jika perubahan memerlukan consent, kami akan meminta consent tersebut dan tidak menganggap continued use saja sebagai consent.",
    ],
  },
];

export default function IndonesianTycoonXPrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white" lang="id">
      <div className="border-b border-white/5 px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium tracking-wide">TycoonX · CK-Labs</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Kebijakan Privasi</h1>
          <p className="text-zinc-500 text-sm">Terakhir diperbarui 27 Agustus 2026</p>
          <p className="text-zinc-400 text-sm leading-relaxed mt-6">Kebijakan Privasi ini menjelaskan cara CK-Labs, operator TycoonX, memproses personal data saat Anda menggunakan aplikasi mobile atau web TycoonX, situs web, layanan dukungan, fitur komunitas, dan layanan online terkait.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-2">
        {sections.map((section, i) => (
          <section key={section.title} className="rounded-xl p-6 hover:bg-white/[0.03] transition">
            <div className="flex gap-4">
              <span className="text-xs text-zinc-600 font-mono mt-1 w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h2 className="text-white font-semibold mb-3">{section.title}</h2>
                <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
                  {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="rounded-xl border border-white/10 bg-[#111111] p-6 mt-8">
          <h2 className="text-white font-semibold mb-3">Pengendali data dan kontak</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">CK-Labs adalah controller untuk processing TycoonX yang dijelaskan dalam Policy ini. Untuk privacy request, account deletion, security report, purchase-related privacy question, moderation-data question, atau data-protection concern lain, gunakan TycoonX Support atau email kami.</p>
          <div className="flex flex-wrap gap-3">
            <a href="/tyconx-support" className="inline-flex bg-indigo-600 hover:bg-indigo-500 transition text-white text-sm font-medium px-4 py-2 rounded-lg">TycoonX Support</a>
            <a href="mailto:cevikdev@gmail.com" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">cevikdev@gmail.com</a>
            <a href="/tycoonx-legal/id/terms" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Ketentuan Layanan</a>
            <a href="/tycoonx-legal/id/community" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Standar Komunitas</a>
          </div>
          <p className="text-zinc-600 text-xs leading-relaxed mt-4">Informasi identitas operator dan alamat tambahan yang diwajibkan hukum akan disediakan melalui legal notice atau imprint TycoonX yang berlaku.</p>
        </section>
      </div>
    </main>
  );
}
