import { notFound } from 'next/navigation';
import {
  isLegalLocale,
  legalHubCopy,
  localeNames,
  localeOrder,
  rtlLocales,
} from '../legal-locales';

const localizedDocuments: Record<string, Set<string>> = {
  tr: new Set(['terms', 'purchases', 'privacy', 'community']),
  de: new Set(['terms', 'purchases', 'privacy', 'community']),
  es: new Set(['terms', 'purchases', 'privacy', 'community']),
  es_MX: new Set(['terms', 'purchases', 'privacy', 'community']),
  fr: new Set(['terms', 'purchases', 'privacy', 'community']),
  fr_CA: new Set(['terms', 'purchases', 'privacy', 'community']),
  it: new Set(['terms', 'purchases', 'privacy', 'community']),
  pt: new Set(['terms', 'purchases', 'privacy', 'community']),
  pt_BR: new Set(['terms', 'purchases', 'privacy', 'community']),
  ru: new Set(['terms', 'purchases', 'privacy', 'community']),
  ja: new Set(['terms', 'purchases', 'privacy', 'community']),
  ko: new Set(['terms', 'purchases', 'privacy', 'community']),
  zh: new Set(['terms', 'purchases', 'privacy', 'community']),
  zh_Hans: new Set(['terms', 'purchases', 'privacy', 'community']),
  zh_Hant: new Set(['terms', 'purchases', 'privacy', 'community']),
  ar: new Set(['terms', 'purchases', 'privacy']),
};

const localizedOpenLabels: Record<string, string> = {
  tr: 'Türkçe metni aç',
  de: 'Deutschen Text öffnen',
  es: 'Abrir texto en español',
  es_MX: 'Abrir texto en español (México)',
  fr: 'Ouvrir le texte français',
  fr_CA: 'Ouvrir le texte en français (Canada)',
  it: 'Apri il testo in italiano',
  pt: 'Abrir texto em português',
  pt_BR: 'Abrir texto em português (Brasil)',
  ru: 'Открыть текст на русском',
  ja: '日本語版を開く',
  ko: '한국어 전문 열기',
  zh: '打开中文全文',
  zh_Hans: '打开简体中文全文',
  zh_Hant: '開啟繁體中文全文',
  ar: 'فتح النص العربي الكامل',
};

function documentHref(locale: string, document: string, fallback: string) {
  return localizedDocuments[locale]?.has(document)
    ? `/tycoonx-legal/${locale}/${document}`
    : fallback;
}

export function generateStaticParams() {
  return localeOrder.map((locale) => ({ locale }));
}

export default async function LocalizedTycoonXLegalHub({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLegalLocale(locale)) notFound();

  const copy = legalHubCopy[locale];
  const dir = rtlLocales.has(locale) ? 'rtl' : 'ltr';

  const cards = [
    {
      document: 'terms',
      title: copy.termsTitle,
      summary: copy.termsSummary,
      href: documentHref(locale, 'terms', '/tyconx-terms-of-service'),
    },
    {
      document: 'purchases',
      title: copy.purchasesTitle,
      summary: copy.purchasesSummary,
      href: documentHref(locale, 'purchases', '/tyconx-purchase-refund-policy'),
    },
    {
      document: 'privacy',
      title: copy.privacyTitle,
      summary: copy.privacySummary,
      href: documentHref(locale, 'privacy', '/tyconx-privacy-policy'),
    },
    {
      document: 'community',
      title: copy.communityTitle,
      summary: copy.communitySummary,
      href: documentHref(locale, 'community', '/tycoonx-community-standards'),
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white" dir={dir} lang={locale.replace('_', '-')}>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
          <span className="text-indigo-400 text-xs font-medium tracking-wide">TycoonX · CK-Labs · {localeNames[locale]}</span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight mb-3">{copy.title}</h1>
        <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl mb-8">{copy.intro}</p>

        <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.06] p-5 mb-8">
          <p className="text-amber-100/80 text-sm leading-relaxed">{copy.canonicalNote}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {cards.map((card) => {
            const localized = localizedDocuments[locale]?.has(card.document) ?? false;
            return (
              <section key={card.href} className="rounded-xl border border-white/10 bg-[#111111] p-6">
                <h2 className="text-white font-semibold text-lg mb-3">{card.title}</h2>
                <p className="text-zinc-400 text-sm leading-relaxed mb-5">{card.summary}</p>
                <a
                  href={card.href}
                  className="inline-flex border border-white/10 hover:bg-white/5 transition text-indigo-300 text-sm font-medium px-4 py-2 rounded-lg"
                >
                  {localized ? localizedOpenLabels[locale] ?? copy.openEnglish : copy.openEnglish}
                </a>
              </section>
            );
          })}
        </div>

        <div className="mt-10 rounded-xl border border-white/10 p-5">
          <div className="text-xs uppercase tracking-widest text-zinc-500 mb-3">{copy.chooseLanguage}</div>
          <div className="flex flex-wrap gap-2">
            {localeOrder.map((otherLocale) => (
              <a
                key={otherLocale}
                href={`/tycoonx-legal/${otherLocale}`}
                className={`text-xs px-3 py-2 rounded-lg border transition ${
                  otherLocale === locale
                    ? 'border-indigo-500/40 bg-indigo-500/10 text-indigo-300'
                    : 'border-white/10 text-zinc-400 hover:bg-white/5'
                }`}
              >
                {localeNames[otherLocale]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
