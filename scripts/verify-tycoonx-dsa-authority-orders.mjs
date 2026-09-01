#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gate = await readFile(path.join(root, 'TYCOONX_DSA_INTERMEDIARY_LIABILITY_AUTHORITY_ORDERS_RELEASE_GATE.md'), 'utf8');
const contact = await readFile(path.join(root, 'TYCOONX_DSA_ARTICLES_11_12_CONTACT_POINTS_RELEASE_GATE.md'), 'utf8');
const moderation = await readFile(path.join(root, 'TYCOONX_COMMUNITY_MODERATION_RELEASE_CHECKLIST.md'), 'utf8');
const terms = await readFile(path.join(root, 'tyconx-terms-of-service.md'), 'utf8');
const progress = await readFile(path.join(root, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md'), 'utf8');

const failures = [];

function requireText(text, token, message) {
  if (!text.includes(token)) failures.push(message ?? `Missing required safeguard: ${token}`);
}

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) failures.push(message);
}

for (const token of [
  'DSA Article 6: hosting liability exemption',
  'DSA Article 7: voluntary moderation does not destroy the safe harbour by itself',
  'DSA Article 8: no general monitoring or active fact-finding obligation',
  'DSA Article 9 orders to act against illegal content',
  'DSA Article 10 orders to provide information',
  'Article 16(3): when a notice can create Article 6 knowledge',
  'without a detailed legal examination',
  'without undue delay',
  'territorial scope',
  'already collected for providing the service and lies within CK-Labs\' control',
  'Fake authority orders and phishing',
  'Bundesnetzagentur',
  'does not itself decide whether individual content is illegal',
  'purchased Diamonds',
  '30-Day VIP',
  'Lifetime VIP',
]) requireText(gate, token);

requireMatch(
  gate,
  /Article 6[\s\S]*actual knowledge[\s\S]*acts expeditiously to remove or disable access/i,
  'Missing Article 6 actual-knowledge/expeditious-action safeguard.',
);

requireMatch(
  gate,
  /Article 7[\s\S]*good-faith[\s\S]*voluntary own-initiative/i,
  'Missing Article 7 good-faith voluntary-moderation safeguard.',
);

requireMatch(
  gate,
  /Article 8[\s\S]*general obligation to monitor/i,
  'Missing Article 8 no-general-monitoring safeguard.',
);

requireMatch(
  gate,
  /Article 9[\s\S]*issuing judicial or administrative authority[\s\S]*legal basis[\s\S]*specific illegal content/i,
  'Missing Article 9 authority/legal-basis/specific-content intake safeguard.',
);

requireMatch(
  gate,
  /Article 9[\s\S]*territorial scope[\s\S]*strictly necessary/i,
  'Missing Article 9 territorial-scope safeguard.',
);

requireMatch(
  gate,
  /Article 10[\s\S]*specific information about one or more specific individual recipients/i,
  'Missing Article 10 specific-recipient limitation.',
);

requireMatch(
  gate,
  /Article 10[\s\S]*already collected[\s\S]*within CK-Labs' control/i,
  'Missing Article 10 existing-data/control limitation.',
);

requireMatch(
  gate,
  /Article 9[\s\S]*must not wipe unrelated purchased Diamonds/i,
  'Missing Article 9 purchased-Diamond isolation.',
);

requireMatch(
  gate,
  /Article 10[\s\S]*must not restart, shorten or duplicate the original one-time 30-Day VIP period/i,
  'Missing Article 10 30-Day VIP isolation.',
);

requireMatch(
  gate,
  /hidden expiry for valid Lifetime VIP|Lifetime VIP expiry/i,
  'Missing Lifetime VIP isolation from authority-order handling.',
);

for (const token of [
  'DSA Article 11 authority contact point',
  'German and English',
  'Escalate orders or requests under DSA Articles 9 or 10',
]) requireText(contact, token, 'Existing Article 11 authority-contact gate lost a required authority-order safeguard.');

for (const token of [
  'DSA Article 16 notice-and-action mechanism',
  'DSA Article 17 statement of reasons',
  'DSA Article 18 serious-criminal-offence escalation gate',
]) requireText(moderation, token, `Community moderation checklist lost required workflow: ${token}`);

for (const token of [
  'Purchased Diamonds do not expire solely because time passes.',
  'One-time 30-Day VIP',
  'Limited-time Lifetime VIP',
  'authoritative records',
]) requireText(terms, token, `Canonical Terms lost required entitlement/record concept: ${token}`);

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
  ['DSA authority-order gate', gate],
  ['canonical Terms', terms],
]) {
  if (/\bTyconX\b/.test(text)) failures.push(`Displayed legacy brand spelling found in ${label}.`);
  if (/\bTycoonX\s+(?:is|remains|service is)\s+(?:a\s+)?beta\b/i.test(text)) failures.push(`Stale live-service beta wording found in ${label}.`);
}

console.log('TycoonX DSA Articles 6-10 authority-order QA');

if (failures.length > 0) {
  console.error('\nFAILED:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('PASS: Article 6 hosting liability, Article 7 voluntary moderation, Article 8 no-general-monitoring, Articles 9/10 authority-order safeguards, Article 16(3) knowledge threshold, entitlement isolation, localization, brand and release safeguards are present.');
