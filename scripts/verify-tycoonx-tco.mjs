#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gate = await readFile(path.join(root, 'TYCOONX_EU_GERMAN_TERRORIST_CONTENT_ONLINE_RELEASE_GATE.md'), 'utf8');
const moderation = await readFile(path.join(root, 'TYCOONX_COMMUNITY_MODERATION_RELEASE_CHECKLIST.md'), 'utf8');
const dsaOrders = await readFile(path.join(root, 'TYCOONX_DSA_INTERMEDIARY_LIABILITY_AUTHORITY_ORDERS_RELEASE_GATE.md'), 'utf8');
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
  'Regulation (EU) 2021/784',
  'Terroristische-Online-Inhalte-Bekämpfungs-Gesetz',
  'one hour of receipt',
  '12 hours before issuing the first removal order',
  'Bundeskriminalamt (BKA)',
  'Bundesnetzagentur',
  '48-hour',
  '72-hour',
  'force majeure',
  'manifest errors',
  'six-month',
  'Article 10 complaints: two-week outcome clock',
  'within two weeks of receipt of the complaint',
  'Article 11 information to content providers',
  'Article 5: special duties only after a formal exposure decision',
  'two or more final removal orders in the previous 12 months',
  'within **three months**',
  'Article 15 contact point',
  'Article 7 provider transparency reporting',
  'before March 1 of the following year',
  'imminent threat to life',
  'private messaging',
  'educational, journalistic, artistic or research purposes',
  'Authority impersonation and phishing',
  'purchased Diamonds',
  'one-time 30-Day VIP',
  'Lifetime VIP',
  'Account compromise and impersonation',
  'Apple, Google Play, Xsolla',
  'Business sale, merger or successor operator',
  'September 1, 2026',
  'September 3, 2026',
]) requireText(gate, token);

requireMatch(
  gate,
  /Article 3[\s\S]*all EU Member States[\s\S]*one hour of receipt/i,
  'Missing Article 3 EU-wide one-hour execution rule.',
);

requireMatch(
  gate,
  /12 hours before issuing the first removal order[\s\S]*does \*\*not\*\* convert the one-hour execution rule/i,
  'Missing first-order advance-information/no-grace-period safeguard.',
);

requireMatch(
  gate,
  /BKA[\s\S]*issuing removal orders[\s\S]*Bundesnetzagentur[\s\S]*specific measures[\s\S]*penalties/i,
  'Missing German BKA/Bundesnetzagentur competence separation.',
);

requireMatch(
  gate,
  /cross-border[\s\S]*48-hour[\s\S]*72-hour[\s\S]*reinstate/i,
  'Missing cross-border scrutiny/reinstatement safeguard.',
);

requireMatch(
  gate,
  /force majeure[\s\S]*Annex III[\s\S]*original receipt timestamp/i,
  'Missing force-majeure/Annex III/timestamp safeguard.',
);

requireMatch(
  gate,
  /six-month[\s\S]*GDPR storage limitation/i,
  'Missing six-month preservation and GDPR storage-limitation boundary.',
);

requireMatch(
  gate,
  /Article 10[\s\S]*within two weeks of receipt of the complaint[\s\S]*reasons/i,
  'Missing Article 10 two-week complaint outcome/reason safeguard.',
);

requireMatch(
  gate,
  /Article 11[\s\S]*information about the removal\/disablement[\s\S]*non-disclosure[\s\S]*public-security/i,
  'Missing Article 11 user-information/non-disclosure safeguard.',
);

requireMatch(
  gate,
  /formal exposure decision[\s\S]*two or more final removal orders[\s\S]*three months[\s\S]*annually thereafter/i,
  'Missing Article 5 exposure-decision reporting workflow.',
);

requireMatch(
  gate,
  /Article 7[\s\S]*before March 1 of the following year[\s\S]*complaints and outcomes/i,
  'Missing Article 7 provider transparency deadline/content safeguard.',
);

requireMatch(
  gate,
  /private one-to-one|private-message classification/i,
  'Missing private-communication scope safeguard.',
);

requireMatch(
  gate,
  /Do not automatically remove[\s\S]{0,250}artwork[\s\S]{0,250}historical[\s\S]{0,250}satire/i,
  'Missing lawful artistic/historical/satire contextual safeguard.',
);

requireMatch(
  gate,
  /purchased Diamonds[\s\S]*negative Diamond balance[\s\S]*30-Day VIP[\s\S]*Lifetime VIP/i,
  'Missing paid-entitlement isolation.',
);

requireMatch(
  gate,
  /Lifetime VIP[\s\S]*selected genuine promotional sales windows[\s\S]*may never return/i,
  'Missing Lifetime VIP selected-window/no-continuous-availability rule.',
);

requireMatch(
  gate,
  /compromised[\s\S]*do not automatically accuse the legitimate account owner/i,
  'Missing compromised-account attribution safeguard.',
);

requireMatch(
  gate,
  /old unsupported client[\s\S]*CDN\/cache invalidation/i,
  'Missing old-client/cache enforcement safeguard.',
);

for (const token of [
  'DSA Article 16 notice-and-action mechanism',
  'DSA Article 17 statement of reasons',
  'DSA Article 18 serious-criminal-offence escalation gate',
]) requireText(moderation, token, `Community moderation checklist lost DSA separation safeguard: ${token}`);

for (const token of [
  'Article 16(3): when a notice can create Article 6 knowledge',
  'DSA Article 9 orders to act against illegal content',
  'DSA Article 10 orders to provide information',
]) requireText(dsaOrders, token, `DSA authority-order gate lost required separation safeguard: ${token}`);

for (const token of [
  'Purchased Diamonds do not expire solely because time passes.',
  'One-time 30-Day VIP',
  'Limited-time Lifetime VIP',
  'authoritative records',
]) requireText(terms, token, `Canonical Terms lost entitlement/record concept required by TCO isolation: ${token}`);

requireText(
  progress,
  '100/100 localized full documents are currently confirmed current',
  'Localization progress no longer confirms all 100 localized full documents as current.',
);

requireText(
  progress,
  'Exact next unfinished locale/document: None',
  'Localization queue is no longer closed; resume localization before incremental hardening.',
);

requireText(
  progress,
  'September 1, 2026',
  'Full-release date invariant is missing from localization progress.',
);

for (const [label, text] of [
  ['TCO gate', gate],
  ['canonical Terms', terms],
  ['community moderation checklist', moderation],
]) {
  if (/\bTyconX\b/.test(text)) failures.push(`Displayed legacy brand spelling found in ${label}.`);
  if (/\bTycoonX\s+(?:is|remains|service is)\s+(?:a\s+)?beta\b/i.test(text)) failures.push(`Stale live-service beta wording found in ${label}.`);
  if (/TycoonX goes to full release on September 1, 2026/i.test(text)) failures.push(`Stale future-tense release wording found in ${label}.`);
}

console.log('TycoonX EU/German Terrorist Content Online QA');

if (failures.length > 0) {
  console.error('\nFAILED:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('PASS: TCO scope, one-hour removal orders, German authority roles, cross-border review, Article 6 preservation, Articles 10/11 user safeguards, Article 5 exposure duties, Article 7 provider transparency, DSA separation, entitlement isolation, localization, brand and live-release safeguards are present.');
