export default function TycoonXImpressum() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
          <span className="text-indigo-400 text-xs font-medium tracking-wide">TycoonX · CK-Labs</span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight mb-3">Impressum / Legal Notice</h1>
        <p className="text-zinc-400 text-sm leading-relaxed mb-10">
          Anbieterinformationen für TycoonX und die zugehörigen öffentlichen TycoonX-Webseiten und Support-Angebote.
        </p>

        <div className="space-y-6">
          <section className="rounded-xl border border-white/10 bg-[#111111] p-6">
            <h2 className="text-xl font-semibold mb-4">Angaben gemäß § 5 DDG</h2>
            <p className="text-zinc-300 leading-relaxed">
              Atakan Cevik<br />
              handelnd unter <strong className="text-white">CK-Labs</strong><br />
              Prämonstratenserstraße 80<br />
              51069 Köln<br />
              Deutschland
            </p>
          </section>

          <section className="rounded-xl border border-white/10 bg-[#111111] p-6">
            <h2 className="text-xl font-semibold mb-4">Kontakt</h2>
            <div className="space-y-2 text-zinc-300">
              <p>
                Telefon:{' '}
                <a href="tel:+4915750464587" className="text-indigo-400 hover:text-indigo-300 transition">
                  +49 15750464587
                </a>
              </p>
              <p>
                E-Mail:{' '}
                <a href="mailto:cevikdev@gmail.com" className="text-indigo-400 hover:text-indigo-300 transition">
                  cevikdev@gmail.com
                </a>
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed pt-2">
                Für Konten, Käufe, Sicherheit, Datenschutz, Moderation, Community-Sicherheit oder allgemeine TycoonX-Anfragen kann zusätzlich der öffentliche TycoonX-Support genutzt werden.
              </p>
            </div>
          </section>

          <section className="rounded-xl border border-white/10 bg-[#111111] p-6">
            <h2 className="text-xl font-semibold mb-4">Kontaktstelle nach dem Digital Services Act</h2>
            <p className="text-zinc-300 leading-relaxed mb-3">
              Soweit die Kontaktstellenpflichten nach Artikel 11 oder Artikel 12 der Verordnung (EU) 2022/2065 (Digital Services Act, DSA) auf die jeweilige TycoonX-Funktion anwendbar sind, ist die elektronische Kontaktstelle von CK-Labs:
            </p>
            <p className="text-zinc-300 mb-2">
              E-Mail:{' '}
              <a href="mailto:cevikdev@gmail.com" className="text-indigo-400 hover:text-indigo-300 transition">
                cevikdev@gmail.com
              </a>
            </p>
            <p className="text-zinc-300">Kommunikationssprachen: Deutsch und Englisch.</p>
            <p className="text-zinc-400 text-sm leading-relaxed mt-3">
              Nutzer können außerdem das TycoonX-Supportformular verwenden. Die Kommunikation mit CK-Labs beruht nicht ausschließlich auf automatisierten Werkzeugen.
            </p>
          </section>

          <section className="rounded-xl border border-white/10 bg-[#111111] p-6">
            <h2 className="text-xl font-semibold mb-4">Verbraucherstreitigkeiten</h2>
            <p className="text-zinc-300 leading-relaxed">
              Wenn eine Streitigkeit über einen Verbrauchervertrag nach direkter Kontaktaufnahme nicht beigelegt werden konnte, stellt CK-Labs die gesetzlich erforderlichen Informationen zur Verbraucherschlichtung im konkreten Fall in Textform bereit, soweit § 37 VSBG anwendbar ist.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mt-3">
              Die frühere EU-Plattform für Online-Streitbeilegung (ODR) wurde eingestellt. Deshalb wird hier kein veralteter Link zu dieser Plattform bereitgestellt.
            </p>
          </section>

          <section className="rounded-xl border border-white/10 bg-[#111111] p-6">
            <h2 className="text-xl font-semibold mb-4">TycoonX Rechtliches</h2>
            <div className="flex flex-wrap gap-3 text-sm">
              <a href="/tyconx-terms-of-service" className="text-indigo-400 hover:text-indigo-300 transition">Terms of Service</a>
              <a href="/tyconx-purchase-refund-policy" className="text-indigo-400 hover:text-indigo-300 transition">Purchases & Refunds</a>
              <a href="/tyconx-privacy-policy" className="text-indigo-400 hover:text-indigo-300 transition">Privacy Policy</a>
              <a href="/tycoonx-community-standards" className="text-indigo-400 hover:text-indigo-300 transition">Community Standards</a>
              <a href="/tycoonx-eula" className="text-indigo-400 hover:text-indigo-300 transition">Apple Custom EULA</a>
              <a href="/tycoonx-security" className="text-indigo-400 hover:text-indigo-300 transition">Security & Vulnerability Reporting</a>
              <a href="/tyconx-support" className="text-indigo-400 hover:text-indigo-300 transition">Support</a>
              <a href="/tycoonx-legal" className="text-indigo-400 hover:text-indigo-300 transition">Legal Languages</a>
            </div>
          </section>
        </div>

        <p className="text-zinc-600 text-xs mt-8">Stand: 28. August 2026</p>
      </div>
    </main>
  );
}
