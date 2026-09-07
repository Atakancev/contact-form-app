#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gate = await readFile(path.join(root, 'TYCOONX_GOOGLE_PLAY_PERSONALIZED_PRICE_DISCLOSURE_RELEASE_GATE.md'), 'utf8');
const personalized = await readFile(path.join(root, 'TYCOONX_EU_PERSONALIZED_PRICING_AUTOMATED_OFFERS_RELEASE_GATE.md'), 'utf8');
const providerEvidence = await readFile(path.join(root, 'TYCOONX_EU_GERMAN_PRICE_PROMOTION_PERSONALIZATION_RELEASE_GATE.md'), 'utf8');
const purchases = await readFile(path.join(root, 'tyconx-purchase-refund-policy.md'), 'utf8');
const progress = await readFile(path.join(root, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md'), 'utf8');

const failures = [];

function requireText(text, token, message) {
  if (!text.includes(token)) failures.push(message ?? `Missing required safeguard: ${token}`);
}

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) failures.push(message);
}

for (const token of [
  'setIsOfferPersonalized(true)',
  'setIsOfferPersonalized(false)',
  'the default value is `false`',
  'launchBillingFlow()',
  'Article 6(1)(ea)',
  'Article 246a § 1(1) sentence 1 no. 6 EGBGB',
  'stale `ProductDetails`',
  'current eligible product/offer details',
  'Lifetime VIP remains a limited-time promotional offering',
  'one-time, non-renewing entitlement for exactly 30 consecutive days',
  'Purchased Diamonds do not expire solely because time passes',
  'not automatically evidence that the player committed fraud',
  'privacy minimization',
  'completed one-time purchases are not retroactively repriced',
  'recurring paid TycoonX product',
  'September 8, 2026',
]) requireText(gate, token);

requireMatch(
  gate,
  /do not use `setIsOfferPersonalized\(false\)` as a legal conclusion merely because it is the SDK default/i,
  'Missing safeguard against treating the Google Play default false value as a legal classification.',
);

requireMatch(
  gate,
  /where the actual Google Play price offered to an EU consumer is personalized[\s\S]*must set `setIsOfferPersonalized\(true\)` before `launchBillingFlow\(\)`/i,
  'Missing EU personalized-price Google Play launch-flow requirement.',
);

requireMatch(
  gate,
  /automated pricing cannot reopen, extend, or create a hidden purchase route after the genuine sales window closes/i,
  'Missing Lifetime VIP closed-window protection for personalized Google Play offers.',
);

requireMatch(
  gate,
  /The personalization flag is disclosure metadata for the purchase flow\. It is not an entitlement identifier\./i,
  'Missing separation between Google personalization disclosure and entitlement identity.',
);

requireMatch(
  gate,
  /do not respond to a disclosure\/configuration error by confiscating unrelated paid value or inventing a real-world debt/i,
  'Missing protection against overbroad entitlement correction after personalization-disclosure errors.',
);

requireText(
  personalized,
  'do not enable automated personalized pricing or personalized automated discounts for TycoonX paid products',
  'Substantive personalized-pricing gate lost its default-off safeguard.',
);

requireText(
  personalized,
  'a generic statement that “prices may vary” is not a substitute for the required personalized-price disclosure',
  'Substantive personalized-pricing gate lost the explicit disclosure safeguard.',
);

requireText(
  providerEvidence,
  'retrieve fresh eligible `OneTimePurchaseOfferDetails` close enough to purchase that a stale cache does not become the marketing source of truth',
  'Provider-evidence gate lost fresh Google Play offer retrieval.',
);

requireText(
  purchases,
  'If a price is personalized on the basis of automated decision-making and applicable law requires disclosure of that fact, the applicable offer or checkout must disclose it before the order is placed.',
  'Canonical Purchases policy lost personalized-price disclosure baseline.',
);

requireText(
  purchases,
  'Ordinary country-based, storefront-based, currency-based, tax-based, or generally available regional pricing is not described as personalized pricing merely because prices differ between regions.',
  'Canonical Purchases policy lost regional-versus-personalized pricing distinction.',
);

requireText(
  progress,
  'All 25 target locales and all 100 localized full documents are current.',
  'Localization progress no longer confirms all 25 hubs and 100 localized full documents current.',
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
  ['Google Play personalized-price gate', gate],
  ['substantive personalized-pricing gate', personalized],
  ['provider-evidence gate', providerEvidence],
  ['canonical Purchases policy', purchases],
]) {
  if (/\bTyconX\b/.test(text)) failures.push(`Displayed legacy brand spelling found in ${label}.`);
}

if (/\bTycoonX\b.{0,50}\bis (?:a |currently )?beta\b/i.test(gate)) {
  failures.push('Stale live-service beta wording found in Google Play personalized-price gate.');
}

console.log('TycoonX Google Play personalized price QA');

if (failures.length > 0) {
  console.error('\nFAILED:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('PASS: Google Play personalized-price flag handling, fresh-offer parity, EU/German disclosure, product isolation, Lifetime VIP sale-window integrity, consumer-rights, localization, brand and release invariants are present.');
