import fs from 'node:fs';

const read = (path) => fs.readFileSync(path, 'utf8');
const fail = (message) => {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
};
const requireText = (text, needle, label) => {
  if (!text.includes(needle)) fail(`${label}: missing ${needle}`);
};

const privacy = read('tyconx-privacy-policy.md');
const notice = read('app/tycoonx-legal/TransferRiskPrivacyNotice.tsx');
const localizedLayout = read('app/tycoonx-legal/layout.tsx');
const canonicalLayout = read('app/tyconx-privacy-policy/layout.tsx');
const canonicalPage = read('app/tyconx-privacy-policy/page.tsx');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const locales = [
  'tr', 'de', 'es', 'es_MX', 'fr', 'fr_CA', 'it', 'pt', 'pt_BR', 'ru',
  'ja', 'ko', 'zh', 'zh_Hans', 'zh_Hant', 'ar', 'nl', 'sv', 'nb', 'pl',
  'th', 'vi', 'uk', 'hi', 'id',
];

requireText(privacy, '**Last updated: September 5, 2026**', 'canonical Privacy date');
requireText(privacy, 'counterparties, transaction chains, repeated transfers, pricing patterns', 'economy investigation data');
requireText(privacy, 'unauthorized real-money trading', 'RMT investigation purpose');
requireText(privacy, 'account relationships that are directly observed or reasonably inferred', 'account-relationship disclosure');
requireText(privacy, 'Reliance on legitimate interests is not automatic merely because an activity is described as fraud prevention', 'legitimate-interest safeguards');
requireText(privacy, 'less intrusive approach', 'necessity safeguard');
requireText(privacy, 'A high-value transaction, unusual price, friendship, company membership, shared household or network signal', 'single-signal safeguard');
requireText(privacy, 'Private communications are not reviewed merely because they exist', 'private-communications safeguard');
requireText(privacy, 'object to processing based on legitimate interests', 'GDPR objection right');
requireText(privacy, 'the ability to express your point of view', 'automated-decision safeguard');

for (const locale of locales) {
  const pattern = new RegExp(`\\n  ${locale}: \\{`);
  if (!pattern.test(notice)) fail(`localized privacy disclosure missing locale ${locale}`);
}
requireText(notice, "en: {", 'English rendered privacy disclosure');
requireText(notice, "locale === 'ar'", 'Arabic RTL handling');
requireText(notice, '/privacy', 'privacy-route gating');
requireText(notice, 'A high-value transaction', 'English proportionality safeguard');
requireText(notice, 'object to processing based on legitimate interests', 'English objection-right disclosure');

requireText(localizedLayout, '<TransferRiskPrivacyNotice />', 'localized Privacy layout integration');
requireText(canonicalLayout, '<TransferRiskPrivacyNotice />', 'canonical Privacy layout integration');
requireText(canonicalPage, 'Last updated September 5, 2026', 'canonical rendered Privacy date');
requireText(progress, 'September 5, 2026 transfer/RMT privacy transparency checkpoint', 'progress checkpoint');
requireText(progress, 'Localized full documents:** 100/100', 'localized full-document completion');
requireText(progress, 'Localized hubs:** 25/25', 'localized hub completion');
requireText(progress, 'Exact next unfinished locale/document: None', 'closed localization queue');

if (!process.exitCode) {
  console.log(`PASS: transfer/RMT privacy disclosure is canonical and rendered for English + ${locales.length} localized Privacy routes.`);
}
