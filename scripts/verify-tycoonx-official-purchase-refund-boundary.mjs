import fs from 'node:fs';

const read = (path) => fs.readFileSync(path, 'utf8');
const fail = (message) => {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
};
const requireText = (text, needle, label) => {
  if (!text.includes(needle)) fail(`${label}: missing ${needle}`);
};

const purchases = read('tyconx-purchase-refund-policy.md');
const rendered = read('app/tyconx-purchase-refund-policy/page.tsx');
const localized = read('app/tycoonx-legal/OfficialPurchaseRefundNotice.tsx');
const legalLayout = read('app/tycoonx-legal/layout.tsx');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const locales = [
  'tr', 'de', 'es', 'es_MX', 'fr', 'fr_CA', 'it', 'pt', 'pt_BR', 'ru',
  'ja', 'ko', 'zh', 'zh_Hans', 'zh_Hant', 'ar', 'nl', 'sv', 'nb', 'pl',
  'th', 'vi', 'uk', 'hi', 'id',
];

requireText(purchases, '**Last updated: September 5, 2026**', 'canonical Purchases date');
requireText(purchases, '## 4A. Official purchases, player-to-player transfers, and off-platform deals', 'canonical boundary section');
requireText(purchases, 'does **not** become an official purchase from CK-Labs', 'player-to-player purchase boundary');
requireText(purchases, 'Unauthorized real-money trading or another off-platform deal between users is not an official TycoonX purchase', 'RMT purchase boundary');
requireText(purchases, 'not the seller, payment processor, escrow service, guarantor, debt collector, or refund provider', 'CK-Labs role boundary');
requireText(purchases, 'does not become an Apple App Store, Google Play, Xsolla, or CK-Labs purchase-refund claim', 'off-platform dispute boundary');
requireText(purchases, 'The Begging feature', 'Begging boundary');
requireText(purchases, 'unrelated gameplay violation, transfer violation, or real-money-trading violation does not by itself erase those rights', 'unrelated official purchase safeguard');
requireText(purchases, 'Nothing in this section limits rights that cannot legally be waived', 'mandatory-rights safeguard');
requireText(purchases, 'Apple-supported gifting', 'Apple gift distinction');
requireText(purchases, 'peer-to-peer payments', 'Google peer-to-peer distinction');
requireText(purchases, 'used within the app or game title for which it was purchased', 'Google virtual-currency scope');

requireText(rendered, 'Last updated September 5, 2026', 'rendered canonical date');
requireText(rendered, "title: 'Official purchases, player-to-player transfers, and off-platform deals'", 'rendered canonical section');
requireText(rendered, 'does not become an official purchase from CK-Labs', 'rendered player-to-player boundary');
requireText(rendered, 'does not by itself erase those rights', 'rendered consumer-rights safeguard');

for (const locale of locales) {
  const pattern = new RegExp(`\\n  ${locale}: \\{`);
  if (!pattern.test(localized)) fail(`localized purchase boundary missing locale ${locale}`);
}
requireText(localized, "en: {", 'English localized component copy');
requireText(localized, "locale === 'ar'", 'Arabic RTL handling');
requireText(localized, 'Begging', 'localized Begging reference');
requireText(localized, 'Apple, Google Play, or Xsolla', 'localized official-channel distinction');
requireText(localized, 'not an official TycoonX purchase', 'English localized RMT boundary');
requireText(legalLayout, '<OfficialPurchaseRefundNotice />', 'localized purchase-route integration');

requireText(progress, '100/100, **100%**', 'localized full-document completion');
requireText(progress, '25/25, **100%**', 'localized hub completion');
requireText(progress, 'Exact next unfinished locale/document: None', 'closed localization queue');

if (!process.exitCode) {
  console.log(`PASS: official purchase/refund boundary is canonical and localized across ${locales.length} purchase routes.`);
}
