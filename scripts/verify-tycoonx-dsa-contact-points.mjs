#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gate = await readFile(path.join(root, 'TYCOONX_DSA_ARTICLES_11_12_CONTACT_POINTS_RELEASE_GATE.md'), 'utf8');
const support = await readFile(path.join(root, 'app/tyconx-support/page.tsx'), 'utf8');
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
  'DSA Article 11 authority contact point',
  'DSA Article 12 recipient contact point',
  'cevikdev@gmail.com',
  'German and English',
  'public, easily accessible and kept current',
  'not rely solely on automated tools',
  'Article 12 is not the Article 16 illegal-content mechanism',
  'Micro/small-enterprise status does not erase Articles 11 and 12',
  'purchased Diamonds',
  '30-Day VIP',
  'Lifetime VIP',
]) requireText(gate, token);

requireMatch(
  gate,
  /Article 11\(3\).*at least one official language of the Member State/i,
  'Missing Article 11 authority-contact language safeguard.',
);

requireMatch(
  gate,
  /web form.*direct email/si,
  'Missing recipient choice between form and direct email.',
);

for (const token of [
  'EU Digital Services Act contact points',
  'Support form below or directly by email at cevikdev@gmail.com',
  'human review',
  'do not rely solely on automated tools',
  'Member State authorities, the European Commission, and the European Board for Digital Services',
  'Authority communications are accepted in German and English',
  'does not replace any specific illegal-content notice',
]) requireText(support, token);

requireText(
  moderation,
  'DSA Article 16 notice-and-action mechanism',
  'Community moderation checklist lost the Article 16 mechanism.',
);

requireText(
  moderation,
  'DSA Article 17 statement of reasons',
  'Community moderation checklist lost the Article 17 reason workflow.',
);

requireText(
  moderation,
  'DSA Article 18 serious-criminal-offence escalation gate',
  'Community moderation checklist lost the Article 18 emergency workflow.',
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
  ['DSA contact-point gate', gate],
  ['TycoonX Support page', support],
]) {
  if (/\bTyconX\b/.test(text)) failures.push(`Displayed legacy brand spelling found in ${label}.`);
  if (/\bTycoonX\s+(?:is|remains|service is)\s+(?:a\s+)?beta\b/i.test(text)) failures.push(`Stale live-service beta wording found in ${label}.`);
}

console.log('TycoonX DSA Articles 11/12 contact-point QA');

if (failures.length > 0) {
  console.error('\nFAILED:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('PASS: authority and recipient contact points, language disclosure, human-accessible communication, Article 16 separation, entitlement isolation, localization, brand and release safeguards are present.');
