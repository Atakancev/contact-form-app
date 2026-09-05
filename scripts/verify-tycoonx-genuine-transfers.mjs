import fs from 'node:fs';

const read = (path) => fs.readFileSync(path, 'utf8');
const fail = (message) => {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
};
const requireText = (text, needle, label) => {
  if (!text.includes(needle)) fail(`${label}: missing ${needle}`);
};

const terms = read('tyconx-terms-of-service.md');
const localized = read('app/tycoonx-legal/TransferRuleNotice.tsx');
const legalLayout = read('app/tycoonx-legal/layout.tsx');
const canonicalLayout = read('app/tyconx-terms-of-service/layout.tsx');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const locales = [
  'tr', 'de', 'es', 'es_MX', 'fr', 'fr_CA', 'it', 'pt', 'pt_BR', 'ru',
  'ja', 'ko', 'zh', 'zh_Hans', 'zh_Hant', 'ar', 'nl', 'sv', 'nb', 'pl',
  'th', 'vi', 'uk', 'hi', 'id',
];

requireText(terms, '**Last updated: September 5, 2026**', 'canonical Terms date');
requireText(terms, '**Genuine transactions and player-to-player wealth transfers.**', 'canonical Terms transfer rule');
requireText(terms, 'art purchase must be a genuine purchase because the buyer wants the artwork', 'canonical art-purpose rule');
requireText(terms, 'use TycoonX’s designated **Begging** screen or feature', 'canonical Begging route');
requireText(terms, 'A high price, generous deal, or unusual transaction is not automatically a violation', 'canonical evidence safeguard');
requireText(terms, 'preserving unrelated legitimate paid value and mandatory rights', 'canonical paid-value safeguard');

for (const locale of locales) {
  const pattern = new RegExp(`\\n  ${locale.replace('_', '_')}: \\{`);
  if (!pattern.test(localized)) fail(`localized transfer rule missing locale ${locale}`);
}
requireText(localized, "en: {", 'English rendered transfer rule');
requireText(localized, "locale === 'ar'", 'Arabic RTL handling');
requireText(localized, 'Begging', 'localized Begging feature reference');
requireText(localized, 'not automatically a violation', 'English proportional-enforcement safeguard');

requireText(legalLayout, '<TransferRuleNotice />', 'localized Terms layout integration');
requireText(canonicalLayout, '<TransferRuleNotice />', 'canonical rendered Terms layout integration');
requireText(progress, 'September 5, 2026 genuine-transaction and money-transfer invariant', 'progress checkpoint');
requireText(progress, '100/100, **100%**', 'localized full-document completion');
requireText(progress, '25/25, **100%**', 'localized hub completion');
requireText(progress, 'Exact next unfinished locale/document:** None', 'closed localization queue');

if (!process.exitCode) {
  console.log(`PASS: genuine-transaction rule is canonical and rendered for English + ${locales.length} localized Terms routes.`);
}
