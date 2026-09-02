import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (relative) => fs.readFileSync(path.join(root, relative), 'utf8');

const files = {
  gate: read('TYCOONX_APPLE_EU_DSA_TRADER_STATUS_RELEASE_GATE.md'),
  noticeGate: read('TYCOONX_GERMAN_LEGAL_NOTICE_RELEASE_CHECKLIST.md'),
  notice: read('TYCOONX_GERMAN_LEGAL_NOTICE.md'),
  noticePage: read('app/tycoonx-impressum/page.tsx'),
  supportPage: read('app/tyconx-support/page.tsx'),
  legalHub: read('app/tycoonx-legal/page.tsx'),
  progress: read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md'),
};

const failures = [];
const requireText = (name, text, needle) => {
  if (!text.includes(needle)) failures.push(`${name}: missing ${JSON.stringify(needle)}`);
};
const reject = (name, text, pattern, reason) => {
  if (pattern.test(text)) failures.push(`${name}: ${reason}`);
};

for (const needle of [
  'Apple EU DSA Trader-Status Release Gate',
  'address or P.O. Box',
  'phone number',
  'email address',
  'February 18, 2025',
  'app-specific trader status',
  'German Impressum is separate',
  'Paid-entitlement isolation',
  'Diamonds',
  '30-Day VIP',
  'Lifetime VIP',
  'Google Play',
  'Xsolla',
  'business sale',
  'successor operator',
]) requireText('Apple trader gate', files.gate, needle);

for (const needle of [
  'Apple EU App Store trader-status parity',
  'DDG § 5 gate',
  'serviceable street address',
  'Placement and reachability gate',
  'Consumer dispute-resolution gate',
  'EU ODR platform',
  'TycoonX has been in full release since September 1, 2026',
]) requireText('German notice checklist', files.noticeGate, needle);

for (const [name, text] of [
  ['German legal notice Markdown', files.notice],
  ['German legal notice page', files.noticePage],
]) {
  for (const needle of [
    'TycoonX',
    'CK-Labs',
    'Prämonstratenserstraße 80',
    '51069 Köln',
    'cevikdev@gmail.com',
    '§ 5 DDG',
  ]) requireText(name, text, needle);

  reject(name, text, /\bTyconX\b/, 'displayed brand typo TyconX');
  reject(name, text, /§\s*5\s*TMG/i, 'stale § 5 TMG reference');
  reject(name, text, /ec\.europa\.eu\/consumers\/odr/i, 'obsolete EU ODR platform URL');
  reject(name, text, /\bbeta\b/i, 'stale live-service beta wording');
}

requireText('Support page', files.supportPage, 'href="/tycoonx-impressum"');
requireText('Legal hub', files.legalHub, 'href="/tycoonx-impressum"');

requireText('Localization progress', files.progress, '25/25');
requireText('Localization progress', files.progress, '100/100 localized full documents are currently confirmed current');
requireText('Localization progress', files.progress, 'Exact next unfinished locale/document: None');
requireText('Localization progress', files.progress, 'September 1, 2026');

for (const [name, text] of [
  ['Apple trader gate', files.gate],
  ['German notice checklist', files.noticeGate],
  ['Support page', files.supportPage],
  ['Legal hub', files.legalHub],
]) reject(name, text, /\bTyconX\b/, 'displayed brand typo TyconX');

if (failures.length) {
  console.error('TycoonX Apple EU DSA trader-status verification FAILED');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX Apple EU DSA trader-status verification PASSED');
console.log('Checked: Apple trader gate, German legal notice parity, public Impressum links, paid-product isolation, localization/full-release invariants.');
