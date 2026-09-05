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
const transferLocalized = read('app/tycoonx-legal/TransferRuleNotice.tsx');
const rmtLocalized = read('app/tycoonx-legal/RealMoneyTradingNotice.tsx');
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
requireText(terms, '**Real-money trading and off-platform exchange.**', 'canonical RMT rule');
requireText(terms, 'real money, cryptocurrency, gift cards, physical goods, outside services', 'canonical real-world consideration scope');
requireText(terms, 'direct deals and indirect, staged, or middleman arrangements', 'canonical indirect RMT scope');
requireText(terms, 'official TycoonX web shop using Xsolla', 'canonical official-channel exception');
requireText(terms, 'Begging allows only the in-game assistance permitted by that feature', 'canonical Begging RMT boundary');
requireText(terms, 'does not guarantee, escrow, enforce, refund, or mediate unauthorized off-platform deals', 'canonical unauthorized-deal boundary');

for (const locale of locales) {
  const pattern = new RegExp(`\\n  ${locale}: \\{`);
  if (!pattern.test(transferLocalized)) fail(`localized transfer rule missing locale ${locale}`);
  if (!pattern.test(rmtLocalized)) fail(`localized RMT rule missing locale ${locale}`);
}
requireText(transferLocalized, "en: {", 'English rendered transfer rule');
requireText(transferLocalized, "locale === 'ar'", 'transfer-rule Arabic RTL handling');
requireText(transferLocalized, 'Begging', 'localized Begging feature reference');
requireText(transferLocalized, 'not automatically a violation', 'English proportional-enforcement safeguard');
requireText(rmtLocalized, "en: {", 'English rendered RMT rule');
requireText(rmtLocalized, "locale === 'ar'", 'RMT Arabic RTL handling');
requireText(rmtLocalized, 'Apple App Store', 'localized official Apple channel');
requireText(rmtLocalized, 'Google Play', 'localized official Google channel');
requireText(rmtLocalized, 'Xsolla', 'localized official Xsolla channel');
requireText(rmtLocalized, 'Begging', 'localized RMT Begging boundary');

requireText(legalLayout, '<TransferRuleNotice />', 'localized transfer-rule layout integration');
requireText(legalLayout, '<RealMoneyTradingNotice />', 'localized RMT layout integration');
requireText(canonicalLayout, '<TransferRuleNotice />', 'canonical transfer-rule layout integration');
requireText(canonicalLayout, '<RealMoneyTradingNotice />', 'canonical RMT layout integration');
requireText(progress, 'September 5, 2026 genuine-transaction and money-transfer invariant', 'progress transfer checkpoint');
requireText(progress, 'September 5, 2026 real-money trading and off-platform exchange invariant', 'progress RMT checkpoint');
requireText(progress, '100/100, **100%**', 'localized full-document completion');
requireText(progress, '25/25, **100%**', 'localized hub completion');
requireText(progress, '**Exact next unfinished locale/document: None.', 'closed localization queue');

if (!process.exitCode) {
  console.log(`PASS: transfer and RMT rules are canonical and rendered for English + ${locales.length} localized Terms routes.`);
}
