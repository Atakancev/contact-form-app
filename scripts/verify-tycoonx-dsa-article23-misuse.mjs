#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gate = await readFile(path.join(root, 'TYCOONX_DSA_ARTICLE_23_MISUSE_RELEASE_GATE.md'), 'utf8');
const community = await readFile(path.join(root, 'tycoonx-community-standards.md'), 'utf8');
const moderation = await readFile(path.join(root, 'TYCOONX_COMMUNITY_MODERATION_RELEASE_CHECKLIST.md'), 'utf8');
const progress = await readFile(path.join(root, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md'), 'utf8');

const failures = [];

function requireText(text, token, message) {
  if (!text.includes(token)) failures.push(message ?? `Missing required safeguard: ${token}`);
}

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) failures.push(message);
}

for (const token of [
  'Article 19(1) DSA micro/small-enterprise exclusion',
  '12 months after loss of micro/small status',
  'manifestly illegal content',
  'manifestly unfounded',
  'prior warning',
  'reasonable period of time',
  'case-by-case, timely, diligent, and objective',
  '**Absolute number**',
  '**Relative proportion**',
  '**Gravity, nature, and consequences**',
  '**Intention**',
  'Article 23(4)',
  'insufficient by itself',
  'Article 22(6)',
  'significant number',
  'Digital Services Coordinator',
  'Article 24(1)(b)',
  'purchased **Diamonds**',
  'one-time **30-Day VIP**',
  '**Lifetime VIP**',
  'Apple, Google Play, or Xsolla',
  'does **not by itself materially change**',
]) requireText(gate, token);

requireMatch(
  gate,
  /do not implement a rule such as `5 reports = abuse` or `3 illegal posts = automatic Article 23 ban`/i,
  'Missing protection against fixed-volume Article 23 shortcuts.',
);

requireMatch(
  gate,
  /A report or complaint is not manifestly unfounded merely because CK-Labs ultimately disagrees with it/i,
  'Missing good-faith disagreement safeguard for notices and complaints.',
);

requireMatch(
  gate,
  /do not automatically infer the account owner's malicious intention merely from activity performed through the account/i,
  'Missing compromised-account intent safeguard.',
);

requireMatch(
  gate,
  /must not silently become an indefinite or permanent punishment/i,
  'Missing temporary/proportionate Article 23 suspension safeguard.',
);

requireMatch(
  gate,
  /must \*\*not by itself\*\*:[\s\S]*remove unrelated legitimately purchased \*\*Diamonds\*\*/i,
  'Missing Diamond isolation from Article 23 decisions.',
);

requireMatch(
  gate,
  /restart, shorten, extend, or duplicate a valid one-time \*\*30-Day VIP\*\*/i,
  'Missing 30-Day VIP isolation from Article 23 decisions.',
);

requireMatch(
  gate,
  /revoke, duplicate, convert, migrate, or recreate \*\*Lifetime VIP\*\*/i,
  'Missing Lifetime VIP isolation from Article 23 decisions.',
);

requireMatch(
  gate,
  /reporter's name\/email need not be required for notices concerning information considered to involve offences referred to in Articles 3 to 7 of Directive 2011\/93\/EU/i,
  'Missing Article 16 child-sexual-offence reporter-identity exception safeguard.',
);

requireMatch(
  community,
  /Good-faith reporting is permitted\. Knowingly false, malicious, repetitive, or abusive reports/i,
  'Canonical Community Standards lost the good-faith/abusive-report baseline.',
);

requireMatch(
  community,
  /Moderation decisions should target the relevant content or conduct and should not be used to confiscate unrelated legitimate paid digital value/i,
  'Canonical Community Standards lost paid-value moderation isolation.',
);

requireText(
  moderation,
  'Treat Article 20 through most of Section 3, including Article 24(5), as conditionally exempt only after a documented Article 19 analysis',
  'Community moderation checklist lost the conditional Section 3/Article 19 classification safeguard.',
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
  ['DSA Article 23 misuse gate', gate],
  ['canonical Community Standards', community],
  ['community moderation checklist', moderation],
]) {
  if (/\bTyconX\b/.test(text)) failures.push(`Displayed legacy brand spelling found in ${label}.`);
}

if (/\bbeta\b/i.test(gate)) failures.push('Stale live-service beta wording found in DSA Article 23 misuse gate.');
if (/\bbeta\b/i.test(community)) failures.push('Stale live-service beta wording found in canonical Community Standards.');

console.log('TycoonX DSA Article 23 misuse QA');

if (failures.length > 0) {
  console.error('\nFAILED:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('PASS: Article 19 classification, Article 23 warning/assessment/duration, trusted-flagger handling, good-faith reporting, account-compromise, transparency, entitlement, localization, brand and release safeguards are present.');
