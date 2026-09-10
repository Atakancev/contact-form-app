import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const fail = (message) => {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
};
const requireText = (text, needle, label) => {
  if (!text.includes(needle)) fail(`${label} is missing: ${needle}`);
};

const gate = read('TYCOONX_SOCIAL_UGC_RELEASE_GATE.md');
const notice = read('app/tycoonx-legal/SocialUgcRuleNotice.tsx');
const layout = read('app/layout.tsx');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const locales = [
  'tr', 'de', 'es', 'es_MX', 'fr', 'fr_CA', 'it', 'pt', 'pt_BR', 'ru',
  'ja', 'ko', 'zh', 'zh_Hans', 'zh_Hant', 'ar', 'nl', 'sv', 'nb', 'pl',
  'th', 'vi', 'uk', 'hi', 'id',
];

for (const phrase of [
  'ordinary Company and Union chat are not currently server-confidential',
  'Executive Company Chat content can leak through push notifications',
  'social Music auction state can be fabricated and converted into wallet value',
  'anonymous Post Office sender identity is visible in the raw authorized row',
  'poll authorization is not bound to the parent channel',
  'Home Room collection data bypasses the intended entrance boundary',
  'callable moderation notification can impersonate an official moderation event',
  'TyconX Community Global Chat Channel',
  'reports, model scores, anomaly flags and notifications are signals rather than infallible proof',
  'Diamonds, one-time 30-Day VIP and Lifetime VIP',
]) requireText(gate, phrase, 'Social/UGC release gate');

requireText(notice, "title: 'Social, chat and creator-content rules'", 'English Social/UGC notice');
requireText(notice, "pathname === '/tyconx-terms-of-service'", 'canonical Terms route gate');
requireText(notice, "/^\\/tycoonx-legal\\/([^/]+)\\/terms\\/?$/", 'localized Terms route gate');
requireText(notice, "const rtl = locale === 'ar'", 'Arabic RTL handling');
requireText(notice, "dir={rtl ? 'rtl' : 'ltr'}", 'RTL rendering');
requireText(notice, "es: 'es-ES'", 'Spain language tag');
requireText(notice, "es_MX: 'es-MX'", 'Mexico language tag');
requireText(notice, "fr: 'fr-FR'", 'France language tag');
requireText(notice, "fr_CA: 'fr-CA'", 'Canada French language tag');
requireText(notice, "pt: 'pt-PT'", 'Portugal language tag');
requireText(notice, "pt_BR: 'pt-BR'", 'Brazil language tag');
requireText(notice, "zh_Hans: 'zh-Hans'", 'Simplified Chinese language tag');
requireText(notice, "zh_Hant: 'zh-Hant'", 'Traditional Chinese language tag');

for (const locale of locales) {
  const marker = `  ${locale}: {`;
  if (!notice.includes(marker)) fail(`Social/UGC notice is missing locale ${locale}`);
}

let cursor = -1;
for (const locale of locales) {
  const next = notice.indexOf(`  ${locale}: {`);
  if (next <= cursor) fail(`Locale ${locale} is missing or out of required order`);
  cursor = next;
}

for (const phrase of [
  'restricted community spaces',
  'altered clients',
  'impersonation',
  'phishing',
  'doxxing',
  'visible content is not necessarily pre-approved',
  'Reports, AI flags and notifications are signals',
  'Diamonds, one-time 30-Day VIP or Lifetime VIP',
]) requireText(notice, phrase, 'English Social/UGC notice');

const importCount = (layout.match(/import SocialUgcRuleNotice/g) || []).length;
const mountCount = (layout.match(/<SocialUgcRuleNotice \/>/g) || []).length;
if (importCount !== 1) fail(`SocialUgcRuleNotice import count is ${importCount}, expected 1`);
if (mountCount !== 1) fail(`SocialUgcRuleNotice mount count is ${mountCount}, expected 1`);

for (const phrase of [
  'Eight September 10 code-derived Terms clarifications',
  'SocialUgcRuleNotice.tsx',
  'Localized full documents:** 100/100, **100%**',
  'Localized hubs:** 25/25, **100%**',
  'Exact next unfinished locale/document: None',
  'Cross-cutting server-authority/privacy remediation',
]) requireText(progress, phrase, 'localization progress tracker');

const playerFacing = `${notice}\n${progress}`;
if (/\bTyconX\b/.test(notice)) fail('Social/UGC player-facing notice contains legacy TyconX spelling');
if (/TycoonX.{0,40}\bbeta\b/i.test(notice)) fail('Social/UGC notice describes current TycoonX as beta');

if (!process.exitCode) {
  console.log('PASS: TycoonX Social/UGC legal synchronization checks passed.');
}
