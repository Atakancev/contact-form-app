const sections = [
  {
    title: "Jenis produk",
    body: [
      "Diamonds adalah mata uang virtual dalam game. Diamonds yang dibeli tidak kedaluwarsa hanya karena berlalunya waktu, hanya dapat digunakan di TycoonX, dan tidak dapat ditukarkan kepada CK-Labs menjadi uang tunai kecuali hukum wajib mengharuskan lain.",
      "30-Day VIP adalah hak digital sekali beli yang tidak diperpanjang otomatis dan berlangsung selama 30 hari berturut-turut sejak diaktifkan atau tersedia pada akun, kecuali layar pembelian secara tegas menyatakan lain.",
      "Lifetime VIP adalah hak digital sekali beli yang hanya dapat ditawarkan dalam periode penjualan promosi terbatas yang dipilih CK-Labs. Produk ini tidak tersedia secara permanen. CK-Labs dapat mengakhiri atau menghentikan periode penjualan dan dapat memutuskan untuk tidak pernah menawarkannya lagi, dengan tetap tunduk pada hukum yang berlaku dan penawaran tertentu yang sudah dibuat kepada konsumen.",
      "Berakhirnya periode penjualan Lifetime VIP hanya memengaruhi ketersediaan di masa depan dan tidak dengan sendirinya membatalkan atau memperpendek pembelian yang sudah sah. Membuka layar pembelian, menambahkan produk ke keranjang, memulai checkout, atau berada dalam status pembayaran pending sebelum periode penjualan berakhir tidak dengan sendirinya memesan Lifetime VIP atau mengunci harga lama. Jika provider resmi kemudian mengonfirmasi transaksi sah menurut aturannya, CK-Labs akan memenuhi transaksi yang dikonfirmasi tersebut sesuai penawaran yang berlaku dan hukum wajib.",
      "Lifetime VIP dimaksudkan untuk masa operasi komersial Layanan TycoonX bagi akun pembeli dan bukan janji bahwa TycoonX akan beroperasi selamanya. Makna masa operasi komersial dan sifat penawaran yang terbatas harus ditampilkan dengan jelas pada atau segera sebelum checkout.",
    ],
  },
  {
    title: "Pembelian melalui Apple App Store",
    body: [
      "Apple memproses pembelian melalui Apple In-App Purchase dan mengoperasikan proses permintaan refund App Store. CK-Labs dapat menyelidiki masalah delivery dan entitlement, tetapi tidak mengendalikan keputusan refund Apple.",
      "Diamonds yang dibeli dimaksudkan sebagai in-app purchase consumable. Lifetime VIP dimaksudkan sebagai pembelian non-consumable dan dapat direstore selama masih sah. 30-Day VIP sekali beli dimaksudkan sebagai hak non-renewing dengan CK-Labs mempertahankan status entitlement resmi akun jika diperlukan.",
      "Pembelian yang masih dilaporkan Apple sebagai pending tidak menciptakan paid entitlement TycoonX sampai Apple melaporkan transaksi valid yang telah selesai. Jika Apple kemudian menyelesaikan transaksi pending yang disetujui provider, TycoonX dapat memberikan entitlement terkait pada saat itu meskipun promosi telah berakhir, apabila transaksi Apple secara sah terkait dengan penawaran tersebut.",
      "Jika Apple merefund, mencabut, membalikkan, atau menyatakan transaksi tidak sah, CK-Labs dapat mencabut atau mengoreksi entitlement TycoonX atau nilai virtual terkait agar pembelian yang telah direfund tidak dipertahankan dua kali.",
    ],
  },
  {
    title: "Pembelian melalui Google Play",
    body: [
      "Google memproses transaksi melalui pengaturan billing Google Play yang berlaku dan menyediakan informasi transaksi atau order untuk memvalidasi pembelian.",
      "Jika kebijakan Google Play mewajibkan Google Play Billing untuk barang atau layanan digital dalam aplikasi, TycoonX akan menggunakan sistem tersebut kecuali program regional, aturan platform, atau hukum yang berlaku mengizinkan metode lain.",
      "Lifetime VIP dimaksudkan menggunakan produk Google Play non-consumable sekali beli agar pembelian sah tetap terkait dengan Google Account pembeli. 30-Day VIP sekali beli harus dikonfigurasi agar tidak diam-diam membuat tagihan berulang dan, jika pembelian ulang dimaksudkan, agar konfigurasi produk tidak secara permanen menghalangi pembelian 30-Day VIP yang sah di kemudian hari.",
      "Pembelian Google Play dalam status PENDING tidak menciptakan paid entitlement TycoonX. Entitlement hanya diberikan setelah Google melaporkan status PURCHASED yang valid dan selesai serta verifikasi yang diwajibkan berhasil. Jika pembelian pending kemudian menjadi pembelian valid yang selesai, TycoonX dapat memberikan entitlement terkait pada saat itu, termasuk apabila penyelesaian terjadi setelah promosi terbatas ditutup tetapi transaksi yang dikonfirmasi provider secara sah termasuk dalam penawaran tersebut.",
      "Google dapat memproses permintaan refund yang memenuhi syarat secara langsung. CK-Labs juga mungkin dapat memproses refund Google Play yang memenuhi syarat melalui developer tools Google, tunduk pada aturan Google, kebijakan CK-Labs, dan hukum yang berlaku.",
      "Jika Google merefund, membalikkan, mengenakan chargeback, membatalkan, atau menyatakan transaksi tidak sah, CK-Labs dapat mencabut atau mengoreksi entitlement atau nilai virtual terkait.",
    ],
  },
  {
    title: "Web shop TycoonX yang didukung Xsolla",
    body: [
      "Pembelian melalui web shop resmi TycoonX dapat diproses oleh Xsolla. Bergantung pada pengaturan checkout, suatu perusahaan dalam grup Xsolla dapat bertindak sebagai merchant of record.",
      "Jika Xsolla bertindak sebagai merchant of record, entitas Xsolla yang ditampilkan pada checkout atau receipt dapat bertanggung jawab berdasarkan ketentuannya atas payment processing, transaction taxes atau VAT, fraud screening, refund, payment dispute, dan chargeback.",
      "Entitas Xsolla yang tepat, metode pembayaran, harga, pajak, kebijakan refund, dan informasi pembelian yang diwajibkan hukum ditentukan oleh checkout dan receipt transaksi. Ketentuan dan kebijakan refund Xsolla yang khusus untuk transaksi tersebut berlaku bersama hukum konsumen wajib.",
      "CK-Labs tetap bertanggung jawab memberikan entitlement TycoonX terkait setelah menerima konfirmasi pembayaran berhasil yang sah. Kembali dari checkout, munculnya pesan sukses di sisi client, atau terbentuknya order tidak dengan sendirinya mewajibkan CK-Labs memberikan nilai berbayar sebelum konfirmasi provider yang sah diterima.",
      "Jika transaksi Xsolla yang sah baru dikonfirmasi setelah keterlambatan processing, CK-Labs dapat memberikan entitlement terkait pada waktu konfirmasi sesuai transaksi yang dikonfirmasi provider dan penawaran yang berlaku. Jika Xsolla merefund, membalikkan, membatalkan, mengenakan chargeback, atau menyatakan transaksi tidak sah, CK-Labs dapat mencabut atau mengoreksi entitlement TycoonX atau nilai virtual terkait.",
    ],
  },
  {
    title: "Harga, harga regional, dan perubahan harga di masa depan",
    body: [
      "CK-Labs dapat mengubah harga, ukuran bundle, jumlah Diamonds, harga VIP, harga regional, mata uang, ketersediaan, dan penawaran promosi untuk pembelian di masa depan. Harga saat ini bukan janji bahwa produk, jumlah, diskon, atau harga yang sama akan tersedia nanti.",
      "Harga dapat berbeda antara Apple App Store, Google Play, web shop resmi TycoonX, negara, wilayah, mata uang, dan periode penjualan promosi yang berbeda. Sistem harga platform, pajak, VAT, konversi mata uang, pergerakan nilai tukar, kebiasaan harga lokal, atau aturan payment provider juga dapat mengubah harga lokal.",
      "Total harga akhir dan mata uang yang ditampilkan checkout sebelum pengguna mengonfirmasi pembelian mengatur transaksi tersebut, dengan kemungkinan koreksi atas kesalahan harga yang jelas apabila diizinkan hukum. Membuka halaman produk, memasuki checkout, atau melihat harga cache/lama sebelum konfirmasi tidak dengan sendirinya mengunci harga tersebut untuk transaksi di masa depan. Catatan transaksi yang dikonfirmasi provider dan informasi checkout yang mengikat secara hukum untuk order yang selesai menjadi acuan, tunduk pada hukum wajib.",
      "Untuk konsumen di Jerman dan di tempat lain jika diwajibkan, pajak wajib dan komponen harga yang tidak dapat dihindari harus dimasukkan atau ditampilkan sesuai hukum display harga yang berlaku.",
      "Pembelian sekali bayar yang telah selesai tidak dihargai ulang secara retroaktif hanya karena CK-Labs kemudian mengubah harga. Penurunan harga kemudian tidak otomatis menciptakan hak atas refund, kredit, refund sebagian, price match, Diamonds tambahan, atau waktu VIP tambahan, dan kenaikan harga kemudian tidak menimbulkan biaya tambahan atas pembelian sekali bayar yang telah selesai, kecuali hukum wajib mengharuskan lain.",
      "Lifetime VIP dapat dijual dengan harga berbeda dalam periode promosi yang benar-benar berbeda. Pembelian pada satu periode tidak menciptakan hak atas harga promosi yang lebih rendah di kemudian hari, dan periode penjualan mendatang tidak mewajibkan CK-Labs menyamakan harga sebelumnya.",
      "Klaim promosi, countdown, harga dicoret, penghematan yang dinyatakan, pernyataan waktu terbatas, dan klaim keuntungan harga lainnya harus mencerminkan penawaran nyata dan tidak boleh menyesatkan. Jika suatu yurisdiksi mewajibkan aturan harga referensi, disclosure diskon, atau riwayat harga tertentu untuk produk atau penawaran tersebut, marketing dan checkout yang berlaku harus mengikuti aturan itu.",
      "Jika CK-Labs kelak memperkenalkan subscription berulang atau produk lain dengan tagihan berulang, aturan perubahan harga, pemberitahuan, persetujuan, pembatalan, atau perpanjangan yang diwajibkan untuk produk tersebut akan berlaku secara terpisah. Aturan perubahan harga untuk pembelian sekali bayar di atas tidak mengizinkan tagihan berulang yang tidak diungkapkan.",
    ],
  },
  {
    title: "Informasi checkout dan konfirmasi pembayaran",
    body: [
      "Sebelum konsumen melakukan order berbayar, checkout yang berlaku harus menampilkan informasi pra-kontrak yang diwajibkan hukum secara jelas dan pada tempat yang diwajibkan. Tergantung transaksi, hal ini dapat mencakup karakteristik utama produk, total harga termasuk pajak dan biaya wajib, durasi atau ketentuan terminasi, informasi delivery, functionality yang material, compatibility atau interoperability, serta identitas contracting trader.",
      "Jika hukum Jerman berlaku pada checkout online yang menciptakan kewajiban pembayaran, langkah order harus membuat kewajiban pembayaran tersebut jelas sebagaimana diwajibkan hukum. CK-Labs tidak akan mengandalkan wording tersembunyi, paid extras yang dipilih sebelumnya, atau tombol order akhir yang ambigu untuk menciptakan kewajiban pembayaran.",
      "Jika harga dipersonalisasi berdasarkan automated decision-making dan hukum mengharuskan disclosure mengenai hal tersebut, checkout atau penawaran akan mengungkapkannya sebelum order dilakukan. Harga berdasarkan negara, storefront, mata uang, pajak, atau harga regional yang tersedia secara umum tidak dianggap personalized pricing hanya karena harga berbeda antarwilayah.",
    ],
  },
  {
    title: "Fungsi withdrawal elektronik Jerman",
    body: [
      "Sejak 19 Juni 2026, hukum Jerman mewajibkan fungsi withdrawal elektronik untuk distance contract tertentu yang dibuat melalui online user interface selama periode statutory withdrawal masih berjalan. Jika persyaratan ini berlaku pada transaksi TycoonX dan CK-Labs adalah contracting trader yang bertanggung jawab atas interface tersebut, CK-Labs harus menyediakan fungsi withdrawal yang diberi label jelas, tersedia terus-menerus, ditempatkan secara menonjol, mudah diakses, beserta proses konfirmasi yang diwajibkan.",
      "Jika Apple, Google, Xsolla, atau provider lain adalah contracting merchant atau mengendalikan purchase interface dan withdrawal process yang relevan, alur withdrawal atau refund provider yang compliant dapat menjadi jalur yang berlaku. CK-Labs tidak akan menggunakan pembagian peran ini untuk menghilangkan mandatory withdrawal right.",
      "Pengiriman withdrawal melalui electronic withdrawal function yang diwajibkan harus dikonfirmasi pada media tahan lama jika hukum mengharuskannya. Jalur elektronik ini tidak menghapus cara sah lain yang dapat dipakai konsumen untuk menggunakan withdrawal right.",
    ],
  },
  {
    title: "Restore dan pemulihan lintas perangkat",
    body: [
      "Lifetime VIP seharusnya dapat direstore atau dipulihkan setelah verifikasi selama entitlement masih sah. 30-Day VIP yang sah seharusnya direstore dari catatan account/server resmi jika diperlukan.",
      "Diamonds adalah pembelian consumable dan tidak direstore sebagai pembelian kedua setelah digunakan. Balance akun TycoonX saat ini dipertahankan melalui state akun/server TycoonX jika berlaku. Restore tidak pernah menciptakan nilai berbayar ganda.",
      "Menghapus akun TycoonX dapat menghapus profile dan gameplay state secara permanen, tetapi tidak selalu membatalkan atau menghapus transaksi Apple, Google, Xsolla, atau provider pembayaran lain yang sah. Jika Lifetime VIP yang sah atau entitlement lain yang dapat direstore tetap terkait dengan pembeli, CK-Labs dapat meminta bukti wajar bahwa pembeli yang sama menguasai platform atau payment account terkait sebelum menghubungkannya ke akun TycoonX yang memenuhi syarat.",
      "Restore paid entitlement setelah penghapusan akun tidak membuat kembali gameplay progress, Diamonds yang telah digunakan, inventory, social history, atau transferred assets kecuali hukum yang berlaku mengharuskan lain.",
    ],
  },
  {
    title: "Masalah delivery",
    body: [
      "Jika Anda dikenai biaya tetapi konten yang dibeli tidak muncul, pastikan Anda menggunakan akun TycoonX yang benar, gunakan Restore Purchases jika berlaku, beri waktu wajar agar transaksi provider yang pending selesai, dan hubungi TycoonX Support dengan detail order atau transaksi jika masalah tetap terjadi.",
      "CK-Labs dapat memvalidasi transaksi dengan Apple, Google, Xsolla, atau provider yang berlaku sebelum memberikan, merestore, mengubah, atau merefund entitlement.",
      "Pembelian pending tidak memesan entitlement kedua atau menciptakan grant ganda. Jika provider kemudian mengonfirmasi bahwa transaksi pending menjadi valid completed purchase, CK-Labs akan merekonsiliasikannya dengan transaksi resmi dan status entitlement yang sudah ada.",
    ],
  },
  {
    title: "Kesalahan jelas, pembayaran gagal, dan pemberian ganda",
    body: [
      "Jika checkout, katalog, mata uang, pajak, produk, jumlah, atau konfigurasi entitlement mengandung kesalahan jelas, CK-Labs atau payment provider yang berlaku dapat memperbaikinya untuk transaksi di masa depan dan, jika diizinkan hukum, membatalkan transaksi keliru yang belum dipenuhi lalu merefund jumlah yang benar-benar dibayar daripada memberikan nilai yang tidak dimaksudkan. Mandatory rights dan kontrak yang sudah mengikat tetap diatur oleh hukum yang berlaku.",
      "Screenshot, tampilan cache lama, client yang dimanipulasi, app version usang, sumber tidak resmi, atau client-side display error tidak mengesampingkan final checkout record yang sah atau authoritative server/payment-provider records yang andal.",
      "Duplicate entitlement atau virtual value yang tercipta karena retry, replay webhook, store-notification duplication, race condition, bug, restore error, kredensial yang disusupi, atau kegagalan teknis lainnya dapat dihapus atau dikonsolidasikan agar pengguna menerima nilai sah yang benar-benar dibeli.",
      "Jika pembayaran pending, ditolak, dibalikkan, dibatalkan, gagal fraud review, atau tidak pernah dikonfirmasi, CK-Labs dapat menunda atau menahan entitlement terkait sampai valid successful transaction dikonfirmasi.",
    ],
  },
  {
    title: "Promosi, kupon, dan penyalahgunaan penawaran",
    body: [
      "Promosi dapat dibatasi berdasarkan waktu, negara, platform, akun, riwayat pembelian, kelayakan, jumlah, jumlah penukaran, atau syarat lain yang dinyatakan jelas. Kecuali penawaran menyatakan lain, promosi tidak dapat digabungkan dan tidak menciptakan hak atas promosi di masa depan.",
      "Pengguna tidak boleh mengeksploitasi technical error, duplicate coupon redemption, informasi region/identity yang dimanipulasi, automated purchase abuse, refund cycling, account farming, atau metode lain untuk mendapatkan promotional value di luar penawaran yang sebenarnya.",
      "Jika promotion atau discount diperoleh melalui fraud, technical abuse, duplicate redemption, atau metode tidak sah lain, CK-Labs dapat menolak purchase, mencabut hanya invalid promotional value, atau merefund dan membatalkan affected transaction jika diizinkan hukum. Unrelated legitimately purchased value tidak akan dihapus hanya karena promosi lain tidak sah.",
      "Voluntary goodwill credit, free extension, discretionary refund, bonus, atau compensation yang diberikan di luar mandatory legal obligation tidak dengan sendirinya mengakui liability atau menjanjikan remedy yang sama pada kasus lain.",
    ],
  },
  {
    title: "Refund, reversal, dan chargeback",
    body: [
      "Refund atau payment reversal tidak memberi pengguna hak untuk menyimpan uang yang dikembalikan sekaligus paid digital value yang terkait.",
      "Jika payment direfund, dibalikkan, terkena chargeback, dibatalkan, atau dinyatakan invalid setelah value dikreditkan, CK-Labs dapat, tunduk pada applicable law, mencabut related entitlement, menghapus unused Diamonds atau virtual value, membalikkan directly related invalid game transactions, menerapkan equivalent balance correction jika refunded value sudah digunakan atau ditransfer, atau sementara membatasi purchase/economy functions selama payment dispute diselidiki.",
      "CK-Labs tidak akan memakai koreksi tersebut untuk menghapus unrelated legitimately purchased value kecuali reasonably necessary untuk membalikkan specific invalid transaction atau sebagaimana diizinkan hukum.",
      "Refund biasanya diproses melalui payment channel yang menangani purchase dan, jika provider mengharuskan, ke original payment method. Refund approval dan waktu ketika funds benar-benar muncul dapat berbeda. CK-Labs tidak mengendalikan third-party settlement timing, currency-conversion differences, bank fees, card-issuer fees, atau exchange-rate movements, tunduk pada provider rules dan mandatory law.",
      "Jika Apple, Google, Xsolla, atau provider lain adalah contracting merchant atau issuer dari transaction receipt/tax document, provider tersebut mengendalikan form dan correction process atas receipt atau invoice. CK-Labs dapat memberikan TycoonX entitlement support dan transaction-identification assistance tetapi tidak dapat menjanjikan perubahan atau penerbitan ulang billing/tax document milik third-party merchant. Jika CK-Labs sendiri legally required menerbitkan receipt, invoice, credit note, atau document lain, applicable law tetap mengendalikan.",
    ],
  },
  {
    title: "Pembelian tanpa izin atau curang",
    body: [
      "Pengguna harus segera melaporkan dugaan unauthorized purchase kepada payment provider terkait dan TycoonX Support.",
      "CK-Labs dapat menyelidiki receipt, transaction identifier, entitlement record, server log, account activity, device/session information, payment-provider event, dan security record terkait untuk mencegah fraud dan duplicate delivery.",
      "Fraudulent receipt, manipulated client, payment abuse, deliberate false fraud report, abusive chargeback, atau upaya mempertahankan refunded digital value dapat menyebabkan entitlement correction, purchase restriction, account suspension, atau termination sesuai TycoonX Terms dan applicable law.",
    ],
  },
  {
    title: "Hak withdrawal EU dan Jerman",
    body: [
      "Tidak ada bagian Policy ini yang mengecualikan statutory rights yang tidak dapat diwaive secara hukum. Untuk konsumen Jerman, Sections 327 et seq. BGB dapat berlaku pada paid digital content dan digital services.",
      "Untuk digital content yang diberikan segera seperti bundle Diamonds, statutory withdrawal right hanya dapat berakhir setelah supply dimulai jika seluruh legal requirements terpenuhi, termasuk jika required, transaction-specific express consent untuk early performance, acknowledgment atas hilangnya withdrawal right, dan contractual confirmation. Menerima general Terms tidak dimaksudkan menggantikan separate consent jika law mengharuskannya.",
      "30-Day VIP disediakan selama suatu periode. Immediate activation tidak otomatis menghilangkan semua statutory withdrawal right hanya karena access telah dimulai. Jika applicable law mengizinkan early performance, checkout dapat meminta express request consumer, dan amount yang mungkin due setelah valid withdrawal ditentukan hanya sejauh permitted by law.",
      "Lifetime VIP juga entitlement yang disediakan over time. One-time purchase price dan non-renewing nature tidak dengan sendirinya menghilangkan statutory withdrawal rights atau mandatory digital-service remedies. Early-performance request, expiry of withdrawal right, proportional payment following withdrawal, atau consequence lain berlaku hanya jika legal requirements untuk transaction tersebut terpenuhi.",
      "CK-Labs tidak akan menggunakan satu blanket no-refunds atau waive-all-withdrawal-rights clause untuk Diamonds, 30-Day VIP, dan Lifetime VIP karena legal treatment mereka dapat berbeda.",
    ],
  },
  {
    title: "Update wajib dan versi yang didukung",
    body: [
      "Paid TycoonX content tidak mencakup janji bahwa setiap historical app version, device, operating system, API, atau platform integration akan didukung selamanya.",
      "Jika German digital-product law berlaku, CK-Labs akan menyediakan dan memberi tahu consumer tentang updates yang diperlukan untuk menjaga relevant paid digital product tetap conforming selama legally relevant period, termasuk required security updates.",
      "Jika required update telah disediakan dan user telah diberi informasi jelas bahwa update tersedia serta consequence jika tidak menginstalnya, kegagalan menginstal dalam reasonable time dapat memengaruhi claims atas lack of conformity yang disebabkan semata-mata oleh missing update sejauh applicable law mengatur demikian. Hal ini hanya berlaku jika CK-Labs memberikan adequate installation instructions dan tidak menghilangkan rights terkait unrelated defect, non-supply, atau invalid entitlement.",
      "Valid paid entitlement seharusnya tetap terkait dengan purchaser dan diakui pada supported versions jika product terms, platform rules, atau mandatory law mengharuskannya. Kewajiban update bukan dasar untuk duplicate purchase, menghapus valid restorable Lifetime VIP, atau menghindari remedy yang masih legally due.",
    ],
  },
  {
    title: "Akses lintas platform, Family Sharing, dan catatan entitlement ganda",
    body: [
      "Valid purchase dapat diakui pada TycoonX device/platform supported lain hanya jika TycoonX mendukung access tersebut dan applicable store, payment-provider, country, dan platform rules mengizinkannya. Cross-platform recognition tidak dengan sendirinya membuat new transaction atau additional paid grant.",
      "Underlying purchase yang sama tidak boleh digandakan melalui restore, account migration, cross-device use, cross-platform linking, webhook retry, atau duplicate provider records. Kecuali specific offer secara tegas mengatakan lain, recognition Lifetime VIP yang sama lebih dari sekali tidak menciptakan multiple Lifetime VIP benefits, dan recognition 30-Day VIP yang sama lebih dari sekali tidak memperpanjang original valid period.",
      "Separately completed valid purchases yang bukan duplicate tetap menjadi separate transactions. CK-Labs dapat consolidate technical entitlement records tanpa cancel distinct valid purchase atau remove mandatory refund, warranty, atau consumer remedy lain.",
      "Apple Family Sharing hanya berlaku jika CK-Labs enable untuk relevant eligible In-App Purchase dan Apple melaporkan purchase sebagai shareable. Jika Family Sharing ditawarkan, family member access bergantung pada valid shared entitlement milik original purchaser dan dapat berakhir jika Apple melaporkan sharing atau underlying entitlement telah berakhir, revoked, atau refunded. Shared access tidak menciptakan separate purchase atau refund right untuk setiap family member di luar Apple rules dan mandatory law.",
      "Jika TycoonX tidak secara tegas menampilkan Apple product sebagai Family Shareable, purchase tidak mencakup janji Family Sharing.",
    ],
  },
  {
    title: "Penghentian layanan",
    body: [
      "Jika TycoonX dihentikan secara permanen, online access ke account, Diamonds, VIP, virtual items, dan game data juga dapat berakhir. Virtual items tidak otomatis menjadi redeemable for cash hanya karena Service ditutup.",
      "Lifetime VIP terkait dengan commercial operating lifetime TycoonX untuk purchasing account, bukan biological lifetime user dan bukan unlimited promise bahwa Service akan exist forever. Mandatory refund, price-reduction, termination, warranty, atau consumer remedies lain tetap tidak terpengaruh.",
    ],
  },
];

export default function IndonesianTycoonXPurchaseRefundPolicy() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white" lang="id">
      <div className="border-b border-white/5 px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium tracking-wide">TycoonX · CK-Labs</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Kebijakan Pembelian & Refund</h1>
          <p className="text-zinc-500 text-sm">Terakhir diperbarui 27 Agustus 2026</p>
          <p className="text-zinc-400 text-sm leading-relaxed mt-6">Kebijakan ini menjelaskan cara pembelian Diamonds, 30-Day VIP sekali beli, Lifetime VIP dalam periode terbatas, serta produk digital TycoonX lain ditangani melalui Apple App Store, Google Play, dan web shop resmi TycoonX yang menggunakan Xsolla.</p>
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
          <h2 className="text-white font-semibold mb-3">Legal dan dukungan</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">TycoonX dioperasikan oleh CK-Labs. Untuk masalah entitlement, pertanyaan transaksi, dugaan fraud, atau sengketa hak digital, gunakan TycoonX Support atau email kami.</p>
          <div className="flex flex-wrap gap-3">
            <a href="/tycoonx-legal/id/terms" className="inline-flex bg-indigo-600 hover:bg-indigo-500 transition text-white text-sm font-medium px-4 py-2 rounded-lg">Ketentuan Layanan</a>
            <a href="/tycoonx-legal/id/privacy" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Kebijakan Privasi</a>
            <a href="/tyconx-support" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">TycoonX Support</a>
            <a href="mailto:cevikdev@gmail.com" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">cevikdev@gmail.com</a>
          </div>
        </section>
      </div>
    </main>
  );
}
