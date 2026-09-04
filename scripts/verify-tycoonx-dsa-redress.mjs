#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gate = await readFile(path.join(root, 'TYCOONX_DSA_ARTICLE_20_21_REDRESS_RELEASE_GATE.md'), 'utf8');
const community = await readFile(path.join(root, 'tycoonx-community-standards.md'), 'utf8');
const adr = await readFile(path.join(root, 'TYCOONX_GERMAN_CONSUMER_ADR_ODR_RETIREMENT_RELEASE_GATE.md'), 'utf8');
const progress = await readFile(path.join(root, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md'), 'utf8');

const failures = [];

function requireText(text, token, message) {
  if (!text.includes(token)) failures.push(message ?? `Missing required safeguard: ${token}`);
}

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) failures.push(message);
}

function forbidMatch(text, pattern, message) {
  if (pattern.test(text)) failures.push(message);
}

for (const token of [
  '**Last reviewed: September 4, 2026**',
  'Article 19(1) DSA',
  '12 months after loss of micro/small status',
  'at least six months',
  'free of charge',
  'decision not to act upon the notice',
  'Article 16(5)',
  'Recital 58',
  'specific legal provision',
  'elaborate legal explanation',
  'not be taken solely on the basis of automated means',
  'qualified human supervision actually occurred',
  'Article 21',
  'at any stage',
  'easily accessible on the online interface, clear, and user-friendly',
  'engage with that body **in good faith**',
  'same information and the same grounds',
  'merely pending',
  'mandatory arbitration;',
  '90 calendar days',
  'maximum total of **180 days**',
  'free of charge or at a nominal fee',
  'manifestly acted in bad faith',
  'ADROIT',
  'Gaming, gambling and betting platforms',
  'Dutch, English, French, German, Italian, Maltese, Portuguese, and Spanish',
  'July 2, 2026',
  'July 20, 2025',
  'Purchased Diamonds',
  '30-Day VIP',
  'Lifetime VIP',
  'one-time, non-renewing 30-day entitlement',
  'selected genuine sales windows',
  'Apple, Google Play, or Xsolla',
  'does **not** by itself materially change',
]) requireText(gate, token);

requireMatch(
  gate,
  /has already been resolved concerning the same information and the same grounds of alleged illegality or incompatibility of content/i,
  'Missing the exact narrow Article 21(2) already-resolved refusal safeguard.',
);

forbidMatch(
  gate,
  /same dispute has already been resolved or is already subject to an ongoing procedure before the competent court or another competent certified out-of-court dispute-settlement body/i,
  'Gate still overstates Article 21(2) by treating merely pending court/body proceedings as the statutory provider-refusal exception.',
);

requireMatch(
  gate,
  /do \*\*not\*\* broaden that exception merely because:[\s\S]*a court case is merely pending;[\s\S]*another certified-body procedure is merely pending;/i,
  'Missing safeguard against broadening Article 21(2) to merely pending proceedings.',
);

requireMatch(
  gate,
  /complaint system should not impose formal requirements[\s\S]*specific legal provision[\s\S]*elaborate legal explanation/i,
  'Missing Recital 58 anti-formalism safeguard for Article 20 complaints.',
);

requireMatch(
  gate,
  /eligible notice submitter must also be able to challenge a \*\*decision not to act upon the notice\*\*/i,
  'Missing Article 20 notice-submitter appeal safeguard.',
);

requireMatch(
  gate,
  /six-month period starts on the day the recipient is informed[\s\S]*Article 16\(5\) or Article 17/i,
  'Missing recipient-notification anchor for the Article 20 six-month window.',
);

requireMatch(
  gate,
  /certification[\s\S]*can also revoke a certification/i,
  'Missing certified-body revocation/change safeguard.',
);

requireMatch(
  gate,
  /ADROIT[\s\S]*Malta Communications Authority[\s\S]*Gaming, gambling and betting platforms/i,
  'Missing current Commission ADROIT gaming-scope discovery checkpoint.',
);

requireMatch(
  gate,
  /does \*\*not\*\* have power under Article 21 to impose a binding settlement/i,
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
  'Regulation (EU) 2024/3228 repealed Regulation (EU) No 524/2013 with effect from **July 20, 2025**',
  'German ADR/ODR retirement gate lost the discontinued ODR-platform checkpoint.',
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
  ['German ADR/ODR retirement gate', adr],
]) {
  if (/\bTyconX\b/.test(text)) failures.push(`Displayed legacy brand spelling found in ${label}.`);

  const staleBetaPatterns = [
    /TycoonX\s+(?:is|remains|currently is)\s+(?:a\s+)?beta\b/i,
    /\bTycoonX beta\b/i,
    /\bbeta\s+(?:TycoonX|service|purchases?|Diamonds?|VIP|users?|rewards?)\b/i,
  ];
  if (staleBetaPatterns.some((pattern) => pattern.test(text))) {
    failures.push(`Stale live-service beta description found in ${label}.`);
  }
}

console.log('TycoonX DSA Article 20/21 redress QA');

if (failures.length > 0) {
  console.error('\nFAILED:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('PASS: Article 19 classification, Article 20 anti-formalism and notice-submitter complaints, human supervision, Article 21 certified-body/current-scope checks, narrow already-resolved refusal rule, ODR separation, entitlement isolation, localization, brand and release safeguards are present.');
