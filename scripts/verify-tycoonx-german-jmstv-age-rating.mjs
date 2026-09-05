import fs from 'node:fs';

const gate = fs.readFileSync('TYCOONX_GERMAN_JMSTV_GAME_AGE_RATING_RELEASE_GATE.md', 'utf8');
const tracker = fs.readFileSync('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md', 'utf8');
const required = [
  'Last reviewed: **2026-09-05**',
  'TycoonX went to full release on **September 1, 2026**',
  'June 1, 2026',
  '§ 5c(3)',
  'personal integrity',
  'Google Play / IARC',
  'Jugendschutzbeauftragter under § 7 JMStV',
  'EUR 500,000',
  'Official references checked 2026-09-05',
];

const errors = required.filter((value) => !gate.includes(value));
if (!/25\s*\/\s*25|25\/25/.test(tracker)) errors.push('25/25 localized hubs');
if (!/100\s*\/\s*100|100\/100/.test(tracker)) errors.push('100/100 localized documents');
if (!/Exact next unfinished locale\/document:\s*`?None/i.test(tracker)) errors.push('next localization item must be None');
if (/TyconX/.test(gate)) errors.push('legacy displayed brand');

if (errors.length) {
  console.error('TycoonX German JMStV verification FAILED');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('TycoonX German JMStV verification PASS');