#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gate = await readFile(path.join(root, 'TYCOONX_DSA_ARTICLE_20_21_REDRESS_RELEASE_GATE.md'), 'utf8');
const community = await readFile(path.join(root, 'tycoonx-community-standards.md'), 'utf8');
const adr = await readFile(path.join(root, 'TYCOONX_GERMAN_ADR_ODR_RELEASE_GATE.md'), 'utf8');
const progress = await readFile(path.join(root, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md'), 'utf8');

const failures = [];

function requireText(text, token, message) {
  if (!text.includes(token)) failures.push(message ?? `Missing required safeguard: ${token}`);
}

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) failures.push(message);
}

for (const token of [
  'Article 19(1) DSA',
  '12 months after loss of micro/small status',
  'at least **six months**',
  'free of charge to the complainant',
  'not be taken solely on the basis of automated means',
  'Article 21',
  'easily accessible on the online interface, clear, and user-friendly',
  'engage with that body **in good faith**',
  'not a mandatory arbitration',
  '90 calendar days',
  'maximum total of **180 days**',
  'free of charge or at a nominal fee',
  'manifestly acted in bad faith',
  'ADROIT',
  'July 2, 2026',
  'July 20, 2025',
  'Purchased Diamonds',
  '30-Day VIP',
  'Lifetime VIP',
  'Apple, Google Play, or Xsolla',
  'does **not** by itself materially change',
]) requireText(gate, token);

requireMatch(
  gate,
  /same dispute has already been resolved or is already subject to an ongoing procedure before the competent court or another competent certified out-of-court dispute-settlement body/i,
  'Missing the limited Article 21 duplicate-proceeding refusal safeguard.',
);

requireMatch(
  gate,
  /does not have power under Article 21 to impose a binding settlement/i,
  'Missing Article 21 non-binding outcome safeguard.',
);

requireMatch(
  gate,
  /do not remove purchased Diamonds because a user filed or won\/lost a DSA moderation dispute/i,
  'Missing purchased-Diamond isolation from DSA redress.',
);

requireMatch(
  gate,
  /do not restart, shorten, or duplicate a valid one-time \*\*30-Day VIP\*\*/i,
  'Missing 30-Day VIP isolation from DSA redress.',
);

requireMatch(
  gate,
  /do not revoke, duplicate, convert, or migrate \*\*Lifetime VIP\*\*/i,
  'Missing Lifetime VIP isolation from DSA redress.',
);

requireMatch(
  community,
  /Where law requires an internal complaint-handling system, out-of-court redress information, or another formal review mechanism/i,
  'Canonical Community Standards lost conditional formal-redress wording.',
);

requireMatch(
  community,
  /A voluntary Support review does not waive any mandatory legal redress route/i,
  'Canonical Community Standards lost mandatory-redress preservation.',
);

requireText(
  adr,
  'Regulation (EU) No 524/2013 was repealed with effect from **July 20, 2025**',
  'German ADR/ODR gate lost the discontinued ODR-platform checkpoint.',
);

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

requireText(
  progress,
  'September 1, 2026',
  'Full-release date invariant is missing from localization progress.',
);

for (const [label, text] of [
  ['DSA Article 20/21 redress gate', gate],
  ['canonical Community Standards', community],
  ['German ADR/ODR gate', adr],
]) {
  if (/\bTyconX\b/.test(text)) failures.push(`Displayed legacy brand spelling found in ${label}.`);
  if (/\bbeta\b/i.test(text)) failures.push(`Stale live-service beta wording found in ${label}.`);
}

console.log('TycoonX DSA Article 20/21 redress QA');

if (failures.length > 0) {
  console.error('\nFAILED:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('PASS: Article 19 classification, Article 20 internal complaints, Article 21 certified redress, ODR separation, entitlement isolation, localization, brand and release safeguards are present.');
