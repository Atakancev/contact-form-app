import fs from 'node:fs';

const read = (path) => fs.readFileSync(path, 'utf8');
const fail = (message) => {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
};
const requireText = (text, needle, label) => {
  if (!text.includes(needle)) fail(`${label}: missing ${needle}`);
};
const rejectText = (text, needle, label) => {
  if (text.includes(needle)) fail(`${label}: contains forbidden ${needle}`);
};

const markdown = read('tyconx-privacy-policy.md');
const canonicalPage = read('app/tyconx-privacy-policy/page.tsx');
const localizedNotice = read('app/tycoonx-legal/ControllerIdentityPrivacyNotice.tsx');
const localizedLayout = read('app/tycoonx-legal/layout.tsx');
const legalNotice = read('TYCOONX_GERMAN_LEGAL_NOTICE.md');
const impressumPage = read('app/tycoonx-impressum/page.tsx');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const controllerName = 'Atakan Cevik';
const street = 'Prämonstratenserstraße 80';
const city = '51069 Köln';
const email = 'cevikdev@gmail.com';

requireText(markdown, '**Last updated: September 6, 2026**', 'canonical Privacy date');
requireText(markdown, '**Atakan Cevik, trading as CK-Labs**', 'canonical controller identity');
requireText(markdown, street, 'canonical controller street');
requireText(markdown, city, 'canonical controller city');
requireText(markdown, email, 'canonical controller email');
requireText(markdown, 'Apple, Google, Xsolla, and other providers may separately act as independent controllers', 'provider controller boundary');

requireText(canonicalPage, 'Last updated September 6, 2026', 'rendered Privacy date');
requireText(canonicalPage, controllerName, 'rendered controller identity');
requireText(canonicalPage, street, 'rendered controller street');
requireText(canonicalPage, city, 'rendered controller city');
requireText(canonicalPage, '/tycoonx-impressum', 'rendered Impressum link');

const locales = [
  'tr', 'de', 'es', 'es_MX', 'fr', 'fr_CA', 'it', 'pt', 'pt_BR', 'ru',
  'ja', 'ko', 'zh', 'zh_Hans', 'zh_Hant', 'ar', 'nl', 'sv', 'nb', 'pl',
  'th', 'vi', 'uk', 'hi', 'id',
];
for (const locale of locales) {
  const pattern = new RegExp(`\\n  ${locale}: \\{`);
  if (!pattern.test(localizedNotice)) fail(`localized controller identity missing locale ${locale}`);
}
requireText(localizedNotice, controllerName, 'localized controller identity');
requireText(localizedNotice, street, 'localized controller street');
requireText(localizedNotice, email, 'localized controller email');
requireText(localizedNotice, "locale === 'ar'", 'Arabic RTL handling');
requireText(localizedNotice, "zh_Hans: 'zh-Hans'", 'Simplified Chinese lang tag');
requireText(localizedNotice, "zh_Hant: 'zh-Hant'", 'Traditional Chinese lang tag');
requireText(localizedLayout, '<ControllerIdentityPrivacyNotice />', 'localized Privacy integration');

requireText(legalNotice, controllerName, 'Impressum identity parity');
requireText(legalNotice, street, 'Impressum street parity');
requireText(impressumPage, controllerName, 'public Impressum identity parity');
requireText(impressumPage, street, 'public Impressum street parity');

requireText(progress, '100/100 localized full documents', 'localization completion');
requireText(progress, '25/25', 'localized hub completion');
requireText(progress, 'Exact next unfinished locale/document: None', 'closed localization queue');

for (const [label, text] of [
  ['canonical Privacy', markdown],
  ['rendered Privacy', canonicalPage],
  ['localized notice', localizedNotice],
]) {
  rejectText(text, 'TyconX', label);
  rejectText(text, 'TycoonX beta', label);
}

if (!process.exitCode) {
  console.log(`PASS: TycoonX Privacy identifies the legal controller and renders the same controller identity across all ${locales.length} localized Privacy routes.`);
}
