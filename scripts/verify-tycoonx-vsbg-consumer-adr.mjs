#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gate = await readFile(path.join(root, 'TYCOONX_VSBG_CONSUMER_ADR_RELEASE_GATE.md'), 'utf8');
const terms = await readFile(path.join(root, 'tyconx-terms-of-service.md'), 'utf8');
const impressum = await readFile(path.join(root, 'app/tycoonx-impressum/page.tsx'), 'utf8');
const progress = await readFile(path.join(root, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md'), 'utf8');

const failures = [];

function requireText(text, token, message) {
  if (!text.includes(token)) failures.push(message ?? `Missing required safeguard: ${token}`);
}

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) failures.push(message);
}

for (const token of [
  '§ 36 VSBG',
  '§ 37 VSBG',
  'ten or fewer persons on December 31 of the previous year',
  '§ 36(1) no. 1',
  '§ 36(1) no. 2',
  'text form',
  'July 20, 2025',
  'Directive (EU) **2025/2647**',
  'March 20, 2028',
  'September 20, 2028',
  'DSA Article 21',
  'Apple App Store',
  'Google Play',
  'Xsolla',
  'purchased **Diamonds**',
  'one-time **30-Day VIP**',
  '**Lifetime VIP**',
  'Open operational item',
]) requireText(gate, token);

requireMatch(
  gate,
  /Do not infer the employee-count exemption from the words .*indie.*small.*solo.*individual/i,
  'Missing safeguard against assuming the § 36(3) employee-count exemption from business labels.',
);

requireMatch(
  gate,
  /A generic footer link to the Impressum is not a substitute for the transaction-specific text-form § 37 notice/i,
  'Missing § 37 transaction-specific text-form safeguard.',
);

requireMatch(
  gate,
  /do not name a conciliation body merely because it appears on a general list/i,
  'Missing competent-body verification safeguard.',
);

requireMatch(
  gate,
  /must never by itself:[\s\S]*grant, replay, remove or duplicate purchased \*\*Diamonds\*\*/i,
  'Missing Diamonds isolation from VSBG complaints.',
);

requireMatch(
  gate,
  /restart, shorten, extend or duplicate a one-time \*\*30-Day VIP\*\*/i,
  'Missing 30-Day VIP isolation from VSBG complaints.',
);

requireMatch(
  gate,
  /revoke, duplicate, convert or recreate \*\*Lifetime VIP\*\*/i,
  'Missing Lifetime VIP isolation from VSBG complaints.',
);

requireText(
  terms,
  'To the extent German consumer-dispute law requires a general statement about participation in consumer conciliation, the applicable website and Terms will state whether CK-Labs is willing or legally obliged to participate in proceedings before a Verbraucherschlichtungsstelle.',
  'Canonical Terms lost the conditional German consumer-conciliation participation baseline.',
);

requireText(
  terms,
  'If a dispute concerning a consumer contract cannot be resolved directly and German § 37 VSBG or another mandatory rule applies, CK-Labs will provide the legally required information in text form about the competent consumer conciliation body and state whether CK-Labs is willing or obliged to participate.',
  'Canonical Terms lost the § 37 VSBG post-dispute safeguard.',
);

requireText(
  terms,
  'The former European Commission Online Dispute Resolution platform was discontinued in 2025.',
  'Canonical Terms lost the discontinued EU ODR platform safeguard.',
);

requireText(impressum, 'Angaben gemäß § 5 DDG', 'TycoonX Impressum lost the § 5 DDG provider-information heading.');
requireText(impressum, 'Kontaktstelle nach dem Digital Services Act', 'TycoonX Impressum lost the DSA contact-point section.');
requireText(impressum, '§ 37 VSBG', 'TycoonX Impressum lost the conditional § 37 VSBG notice.');
requireText(impressum, 'Die frühere EU-Plattform für Online-Streitbeilegung (ODR) wurde eingestellt.', 'TycoonX Impressum lost the discontinued ODR-platform statement.');

if (/ec\.europa\.eu\/consumers\/odr|consumer-redress\.ec\.europa\.eu\/site-relocation/i.test(impressum)) {
  failures.push('TycoonX Impressum appears to contain a live or legacy EU ODR route.');
}

requireText(
  progress,
  '100/100 localized full documents are currently confirmed current',
  'Localization progress no longer confirms all 100 localized full documents as current.',
);

requireText(
  progress,
  'Exact next unfinished locale/document: None',
  'Localization queue is no longer closed; localization must resume before incremental hardening.',
);

requireText(progress, 'September 1, 2026', 'Full-release date invariant is missing from localization progress.');

for (const [label, text] of [
  ['VSBG release gate', gate],
  ['canonical Terms', terms],
  ['TycoonX Impressum', impressum],
]) {
  if (/\bTyconX\b/.test(text)) failures.push(`Displayed legacy brand spelling found in ${label}.`);
}

if (/\bbeta\b/i.test(gate)) failures.push('Stale live-service beta wording found in VSBG release gate.');
if (/\bbeta\b/i.test(terms)) failures.push('Stale live-service beta wording found in canonical Terms.');
if (/\bbeta\b/i.test(impressum)) failures.push('Stale live-service beta wording found in TycoonX Impressum.');

console.log('TycoonX German VSBG consumer ADR QA');

if (failures.length > 0) {
  console.error('\nFAILED:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('PASS: German VSBG § 36/§ 37 classification, ODR retirement, future ADR-directive watch, DSA/payment separation, entitlement isolation, localization, brand and release invariants are present.');
