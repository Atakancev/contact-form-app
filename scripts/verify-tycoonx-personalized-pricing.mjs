#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gate = await readFile(path.join(root, 'TYCOONX_EU_PERSONALIZED_PRICING_AUTOMATED_OFFERS_RELEASE_GATE.md'), 'utf8');
const purchases = await readFile(path.join(root, 'tyconx-purchase-refund-policy.md'), 'utf8');
const regional = await readFile(path.join(root, 'TYCOONX_EU_GEO_BLOCKING_REGIONAL_PRICING_RELEASE_GATE.md'), 'utf8');
const automated = await readFile(path.join(root, 'TYCOONX_GDPR_AUTOMATED_DECISION_RELEASE_GATE.md'), 'utf8');
const progress = await readFile(path.join(root, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md'), 'utf8');

const failures = [];

function requireText(text, token, message) {
  if (!text.includes(token)) failures.push(message ?? `Missing required safeguard: ${token}`);
}

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) failures.push(message);
}

for (const token of [
  'Article 6(1)(ea)',
  'Article 246a § 1(1) sentence 1 no. 6 EGBGB',
  'BGB § 312d(1)',
  'BGB § 312j(2)',
  'immediately before the consumer submits a payment-obligating order',
  'Privacy Policy disclosure alone is insufficient',
  'dynamic or regional pricing',
  'personalized automated **discount**',
  'Tinder',
  'GDPR Article 22',
  'do not use health, religion, political views, ethnicity, sexual orientation, biometric data',
  'Children and vulnerable consumers',
  'No retaliation pricing',
  'Apple App Store',
  'Google Play',
  'Xsolla',
  'purchased **Diamonds**',
  'one-time **30-Day VIP**',
  '**Lifetime VIP**',
  'completed purchases are not retroactively repriced',
  'do not enable automated personalized pricing',
]) requireText(gate, token);

requireMatch(
  gate,
  /generic statement that .prices may vary. is not a substitute for the required personalized-price disclosure/i,
  'Missing safeguard against generic price-variation language replacing the personalized-price disclosure.',
);

requireMatch(
  gate,
  /A\/B testing or randomized price assignment is not automatically safe/i,
  'Missing A/B or randomized price-experiment classification safeguard.',
);

requireMatch(
  gate,
  /do not call an automated behavior-based discount .just a coupon. to avoid the personalized-price disclosure/i,
  'Missing behavior-based coupon/discount anti-evasion safeguard.',
);

requireMatch(
  gate,
  /raising a price because a user exercised a GDPR right/i,
  'Missing anti-retaliation pricing safeguard for GDPR rights.',
);

requireMatch(
  gate,
  /denying a generally applicable price because a user refused optional tracking consent/i,
  'Missing anti-retaliation safeguard for optional tracking refusal.',
);

requireMatch(
  gate,
  /must never by itself:[\s\S]*grant or replay purchased \*\*Diamonds\*\*/i,
  'Missing Diamond isolation from personalized-pricing investigations.',
);

requireMatch(
  gate,
  /restart, shorten, extend, or duplicate a one-time \*\*30-Day VIP\*\*/i,
  'Missing 30-Day VIP isolation from personalized-pricing investigations.',
);

requireMatch(
  gate,
  /revoke, duplicate, convert, or recreate \*\*Lifetime VIP\*\*/i,
  'Missing Lifetime VIP isolation from personalized-pricing investigations.',
);

requireText(
  purchases,
  'If a price is personalized on the basis of automated decision-making and applicable law requires disclosure of that fact, the applicable offer or checkout must disclose it before the order is placed.',
  'Canonical Purchases policy lost its personalized-price pre-order disclosure baseline.',
);

requireText(
  purchases,
  'Ordinary country-based, storefront-based, currency-based, tax-based, or generally available regional pricing is not described as personalized pricing merely because prices differ between regions.',
  'Canonical Purchases policy lost the regional-versus-personalized pricing distinction.',
);

requireText(
  regional,
  'If CK-Labs ever prices a user individually based on that person\'s behavior, profile, purchase history, inferred willingness to pay, or other user-specific automated signals, use the separate personalized-pricing and automated-decision compliance path.',
  'Regional-pricing gate lost its escalation path for individualized automated pricing.',
);

requireText(
  automated,
  'personalised pricing, if ever introduced;',
  'GDPR automated-decision inventory no longer flags personalized pricing for review.',
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
  ['personalized-pricing gate', gate],
  ['canonical Purchases policy', purchases],
  ['regional-pricing gate', regional],
  ['GDPR automated-decision gate', automated],
]) {
  if (/\bTyconX\b/.test(text)) failures.push(`Displayed legacy brand spelling found in ${label}.`);
}

if (/\bbeta\b/i.test(gate)) failures.push('Stale live-service beta wording found in personalized-pricing gate.');
if (/\bbeta\b/i.test(purchases)) failures.push('Stale live-service beta wording found in canonical Purchases policy.');

console.log('TycoonX EU personalized pricing QA');

if (failures.length > 0) {
  console.error('\nFAILED:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('PASS: EU/German personalized-price disclosure, regional/dynamic distinction, GDPR Article 22 escalation, vulnerability/retaliation safeguards, provider separation, entitlement isolation, localization, brand and release invariants are present.');
