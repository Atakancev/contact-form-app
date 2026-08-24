import { localeNames, localeOrder } from './legal-locales';

export default function TycoonXLegalLanguages() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
          <span className="text-indigo-400 text-xs font-medium tracking-wide">TycoonX · CK-Labs</span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight mb-3">TycoonX Legal Languages</h1>
        <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl mb-10">
          Choose your language for a clear localized overview of the TycoonX Terms, purchases and refunds, privacy, and community rules.
        </p>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {localeOrder.map((locale) => (
            <a
              key={locale}
              href={`/tycoonx-legal/${locale}`}
              className="rounded-xl border border-white/10 bg-[#111111] px-5 py-4 hover:bg-white/[0.04] hover:border-indigo-500/30 transition"
            >
              <div className="text-white font-medium">{localeNames[locale]}</div>
              <div className="text-zinc-600 text-xs font-mono mt-1">{locale}</div>
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3 text-sm">
          <a href="/tyconx-terms-of-service" className="text-indigo-400 hover:text-indigo-300 transition">English Terms</a>
          <a href="/tyconx-purchase-refund-policy" className="text-indigo-400 hover:text-indigo-300 transition">English Purchases & Refunds</a>
          <a href="/tyconx-privacy-policy" className="text-indigo-400 hover:text-indigo-300 transition">English Privacy</a>
          <a href="/tycoonx-community-standards" className="text-indigo-400 hover:text-indigo-300 transition">English Community Standards</a>
        </div>
      </div>
    </main>
  );
}
