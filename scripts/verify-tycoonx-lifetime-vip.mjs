#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_LIFETIME_VIP_LIMITED_PROMOTIONAL_ENTITLEMENT_RELEASE_GATE.md');
const termsPath = path.join(ROOT, 'tyconx-terms-of-service.md');
const purchasesPath = path.join(ROOT, 'tyconx-purchase-refund-policy.md');
const crossPlatformPath = path.join(ROOT, 'TYCOONX_CROSS_PLATFORM_ENTITLEMENT_PARITY_RELEASE_GATE.md');
const shutdownPath = path.join(ROOT, 'TYCOONX_PERMANENT_SHUTDOWN_END_OF_SERVICE_RELEASE_GATE.md');
const promotionsPath = path.join(ROOT, 'TYCOONX_EU_PROMOTION_DARK_PATTERN_RELEASE_GATE.md');
const conformityPath = path.join(ROOT, 'TYCOONX_EU_DIGITAL_PRODUCT_CONFORMITY_REMEDIES_RELEASE_GATE.md');
const accountPath = path.join(ROOT, 'TYCOONX_ACCOUNT_SUSPENSION_COMPROMISE_TERMINATION_RELEASE_GATE.md');
const progressPath = path.join(ROOT, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');
const renderedTermsPath = path.join(ROOT, 'app', 'tyconx-terms-of-service', 'page.tsx');
const renderedPurchasesPath = path.join(ROOT, 'app', 'tyconx-purchase-refund-policy', 'page.tsx');

const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

const [
  gate,
  terms,
  purchases,
  crossPlatform,
  shutdown,
  promotions,
  conformity,
  account,
  progress,
  renderedTerms,
  renderedPurchases,
] = await Promise.all([
  readFile(gatePath, 'utf8'),
  readFile(termsPath, 'utf8'),
  readFile(purchasesPath, 'utf8'),
  readFile(crossPlatformPath, 'utf8'),
  readFile(shutdownPath, 'utf8'),
  readFile(promotionsPath, 'utf8'),
  readFile(conformityPath, 'utf8'),
  readFile(accountPath, 'utf8'),
  readFile(progressPath, 'utf8'),
  readFile(renderedTermsPath, 'utf8'),
  readFile(renderedPurchasesPath, 'utf8'),
]);

// Core product and sales-window invariants.
requireMatch(gate, /one-time premium entitlement offered only during selected limited promotional sales windows/i, 'Lifetime VIP gate lost the limited promotional one-time product invariant.');
requireMatch(gate, /not a permanently available catalog promise/i, 'Lifetime VIP gate lost the no-continuous-availability rule.');
requireMatch(gate, /does not automatically renew/i, 'Lifetime VIP gate lost the no-auto-renewal rule.');
requireMatch(gate, /does not create a recurring payment obligation/i, 'Lifetime VIP gate lost the no-recurring-billing rule.');
requireMatch(gate, /may withdraw it from future sale.*may choose never to offer it again/is, 'Lifetime VIP gate lost future withdrawal/non-return protection.');
requireMatch(gate, /closing a sales window affects future availability only.*does not by itself cancel, shorten, or convert/is, 'Lifetime VIP gate lost already-purchased entitlement protection.');
requireMatch(gate, /distinct from purchased Diamonds, one-time 30-Day VIP, free or promotional grants, and any future recurring subscription/i, 'Lifetime VIP gate lost product isolation.');

// Commercial-lifetime meaning and anti-arbitrary-expiry safeguards.
requireMatch(gate, /commercial operating lifetime of the TycoonX Service for the purchasing account/i, 'Lifetime VIP gate lost the commercial-lifetime definition.');
requireMatch(gate, /must not have an arbitrary hidden calendar expiry/i, 'Lifetime VIP gate lost the anti-hidden-expiry safeguard.');
requireMatch(gate, /does not mean the biological lifetime/i, 'Lifetime VIP gate lost the biological-lifetime clarification.');
requireMatch(gate, /commercial-lifetime meaning must be disclosed clearly at or immediately before checkout/i, 'Lifetime VIP gate lost checkout disclosure requirement.');
requireMatch(gate, /cannot be used as a pretext for arbitrary early expiry/i, 'Lifetime VIP gate lost anti-forfeiture protection.');

// Genuine promotion and anti-dark-pattern safeguards.
requireMatch(gate, /sales window must be a real commercial event, not manufactured urgency/i, 'Lifetime VIP gate lost genuine-window requirement.');
requireMatch(gate, /countdown that reaches zero and immediately resets/i, 'Lifetime VIP gate lost fake-countdown protection.');
requireMatch(gate, /"last chance".*unless that statement is genuinely supportable/is, 'Lifetime VIP gate lost truthful final-sale wording rule.');
requireMatch(gate, /fake stock quantities/i, 'Lifetime VIP gate lost fake digital scarcity safeguard.');
requireMatch(gate, /campaign record/i, 'Lifetime VIP gate lost campaign evidence requirement.');

// Authoritative entitlement and idempotency.
requireMatch(gate, /authoritative server\/provider evidence/i, 'Lifetime VIP gate lost authoritative entitlement evidence rule.');
requireMatch(gate, /original sales-window\/campaign identifier/i, 'Lifetime VIP gate lost campaign-to-transaction provenance.');
requireMatch(gate, /Fulfillment must be \*\*idempotent\*\*/i, 'Lifetime VIP gate lost idempotent fulfillment rule.');
requireMatch(gate, /must not create another Lifetime VIP from the same purchase/i, 'Lifetime VIP gate lost duplicate-restore prevention.');

// Apple mapping.
requireMatch(gate, /Non-Consumable.*purchased once.*does not expire or decrease with use/is, 'Lifetime VIP gate lost Apple non-consumable mapping.');
requireMatch(gate, /dedicated Lifetime VIP non-consumable product ID/i, 'Lifetime VIP gate lost dedicated Apple SKU requirement.');
requireMatch(gate, /do not configure Lifetime VIP as a consumable/i, 'Lifetime VIP gate lost Apple anti-consumable rule.');
requireMatch(gate, /do not configure it as an Auto-Renewable Subscription/i, 'Lifetime VIP gate lost Apple anti-recurring rule.');
requireMatch(gate, /Developer Removed from Sale.*refund or revocation/is, 'Lifetime VIP gate lost Apple removed-from-sale ownership safeguard.');

// Google Play mapping.
requireMatch(gate, /Google Play \*\*one-time product\*\* path/i, 'Lifetime VIP gate lost Google one-time product classification.');
requireMatch(gate, /`PURCHASED`, not while it remains `PENDING`/i, 'Lifetime VIP gate lost Google PURCHASED-vs-PENDING rule.');
requireMatch(gate, /acknowledge a valid non-consumable purchase/i, 'Lifetime VIP gate lost Google acknowledgement rule.');
requireMatch(gate, /do not consume a Lifetime VIP purchase/i, 'Lifetime VIP gate lost Google non-consumable protection.');
requireMatch(gate, /purchase token.*verified current provider state/is, 'Lifetime VIP gate lost Google purchase-token authority rule.');

// Xsolla mapping.
requireMatch(gate, /one-time digital entitlement/i, 'Lifetime VIP gate lost Xsolla one-time classification.');
requireMatch(gate, /not as an automatically renewing Xsolla subscription plan/i, 'Lifetime VIP gate lost Xsolla recurring separation.');
requireMatch(gate, /successful-payment\/order handling idempotent/i, 'Lifetime VIP gate lost Xsolla idempotency.');
requireMatch(gate, /cancellation\/refund handling transaction-specific/i, 'Lifetime VIP gate lost Xsolla cancellation isolation.');
requireMatch(gate, /combined or separate webhook model actually configured/i, 'Lifetime VIP gate lost Xsolla webhook-model checkpoint.');

// Duplicate ownership, account recovery, and enforcement isolation.
requireMatch(gate, /already knows the account has a valid Lifetime VIP.*suppress or disable another Lifetime VIP purchase path/is, 'Lifetime VIP gate lost already-owned prevention.');
requireMatch(gate, /do not silently keep a redundant duplicate payment/i, 'Lifetime VIP gate lost duplicate-payment review.');
requireMatch(gate, /same valid entitlement rather than create another purchase/i, 'Lifetime VIP gate lost restore non-duplication.');
requireMatch(gate, /does not necessarily erase a separate valid non-consumable platform entitlement/i, 'Lifetime VIP gate lost account-deletion restoration safeguard.');
requireMatch(gate, /must not become a tradable account asset/i, 'Lifetime VIP gate lost anti-transfer safeguard.');
requireMatch(gate, /do not automatically classify the account owner as fraudulent/i, 'Lifetime VIP gate lost compromise/chargeback separation.');

// Paid-product isolation and correction.
requireMatch(gate, /do not remove unrelated purchased Diamonds/i, 'Lifetime VIP gate lost unrelated Diamonds isolation.');
requireMatch(gate, /another valid 30-Day VIP/i, 'Lifetime VIP gate lost 30-Day VIP isolation.');
requireMatch(gate, /Lifetime VIP purchase activates only 30-Day VIP.*cure the missing Lifetime VIP/is, 'Lifetime VIP gate lost wrong-SKU cure scenario.');
requireMatch(gate, /30-Day VIP purchase accidentally activates Lifetime VIP.*correct the unsupported excess entitlement/is, 'Lifetime VIP gate lost excess-entitlement correction scenario.');
requireMatch(gate, /configuration mistake is not automatically a hack or exploit/i, 'Lifetime VIP gate lost error-vs-exploit distinction.');

// Feature changes, shutdown, successor, and consumer remedies.
requireMatch(gate, /does not freeze every individual gameplay parameter/i, 'Lifetime VIP gate lost reasonable feature-evolution protection.');
requireMatch(gate, /do not use the feature-change clause to convert Lifetime VIP into 30-Day VIP/i, 'Lifetime VIP gate lost anti-downgrade protection.');
requireMatch(gate, /§ 327r/i, 'Lifetime VIP gate lost German digital-product modification checkpoint.');
requireMatch(gate, /stop opening new Lifetime VIP sales windows once a shutdown decision has become sufficiently concrete/i, 'Lifetime VIP gate lost shutdown-sales protection.');
requireMatch(gate, /business transfer does not automatically terminate Lifetime VIP/i, 'Lifetime VIP gate lost successor-continuity safeguard.');
requireMatch(gate, /price-reduction, termination, refund, or other mandatory remedies/i, 'Lifetime VIP gate lost mandatory-remedy preservation.');

// Free/promotional grants must not contaminate purchased Lifetime VIP.
requireMatch(gate, /free or promotional long-term VIP grant must be classified separately from purchased Lifetime VIP/i, 'Lifetime VIP gate lost free-vs-paid classification.');
requireMatch(gate, /must not overwrite or shorten an independently purchased Lifetime VIP/i, 'Lifetime VIP gate lost free-grant isolation.');
requireMatch(gate, /does not imply that the live TycoonX Service is a beta/i, 'Lifetime VIP gate lost full-release beta guard.');

// Canonical English wording must remain aligned.
requireMatch(terms, /\*\*Lifetime VIP\*\* is a one-time digital entitlement.*limited promotional sales windows/is, 'Canonical Terms lost Lifetime VIP limited-window classification.');
requireMatch(terms, /may choose never to offer Lifetime VIP again/i, 'Canonical Terms lost Lifetime VIP non-return rule.');
requireMatch(terms, /commercial operating lifetime of the TycoonX Service for the purchasing account/i, 'Canonical Terms lost commercial-lifetime definition.');
requireMatch(terms, /does not mean the biological lifetime/i, 'Canonical Terms lost lifetime clarification.');
requireMatch(terms, /commercial-lifetime meaning and the limited-time nature.*disclosed clearly at or immediately before/is, 'Canonical Terms lost Lifetime checkout disclosure.');

requireMatch(purchases, /Limited-time Lifetime VIP/i, 'Canonical Purchases policy lost Lifetime VIP product section.');
requireMatch(purchases, /selected limited promotional sales windows/i, 'Canonical Purchases policy lost limited-window rule.');
requireMatch(purchases, /may choose never to offer Lifetime VIP again/i, 'Canonical Purchases policy lost no-return rule.');
requireMatch(purchases, /commercial operating lifetime of the TycoonX Service for the purchasing account/i, 'Canonical Purchases policy lost commercial-lifetime definition.');
requireMatch(purchases, /different price.*does not create a price-match right/is, 'Canonical Purchases policy lost later-window price protection.');
requireMatch(purchases, /restorable or re-linked after verification/i, 'Canonical Purchases policy lost Lifetime restoration rule.');

// Existing operational gates must still cover related risks.
requireMatch(crossPlatform, /Lifetime VIP/i, 'Cross-platform entitlement gate no longer covers Lifetime VIP.');
requireMatch(shutdown, /Lifetime VIP/i, 'Permanent shutdown gate no longer covers Lifetime VIP.');
requireMatch(shutdown, /at least 31 days before removal/i, 'Permanent shutdown gate lost Apple IAP removal notice guidance.');
requireMatch(shutdown, /Developer Removed from Sale.*customers who already purchased it retain access.*StoreKit\/App Store Server API/is, 'Permanent shutdown gate lost Apple removed-from-sale retention/transaction-access safeguard.');
requireMatch(promotions, /Lifetime VIP/i, 'Promotions/dark-pattern gate no longer covers Lifetime VIP.');
requireMatch(conformity, /Lifetime VIP/i, 'Digital conformity gate no longer covers Lifetime VIP.');
requireMatch(account, /Lifetime VIP/i, 'Account enforcement gate no longer covers Lifetime VIP.');

// Localization and release invariants.
requireMatch(progress, /25\/25.*target locales/is, 'Localization tracker no longer confirms all 25 target locales/hubs.');
requireMatch(progress, /100\/100 localized full documents/i, 'Localization tracker no longer confirms all 100 localized full documents.');
requireMatch(progress, /Exact next unfinished locale\/document: None/i, 'Localization tracker unexpectedly shows unfinished locale/document work.');
requireMatch(progress, /September 1, 2026/i, 'Localization tracker lost the September 1, 2026 full-release invariant.');
requireMatch(gate, /Last reviewed:\*\* September 1, 2026/i, 'Lifetime VIP gate review date is missing or stale.');

// Rendered canonical pages must expose current Lifetime meaning.
requireMatch(renderedTerms, /Lifetime VIP/i, 'Rendered Terms lost Lifetime VIP wording.');
requireMatch(renderedPurchases, /Lifetime VIP/i, 'Rendered Purchases page lost Lifetime VIP wording.');
requireMatch(renderedPurchases, /limited promotional sales windows/i, 'Rendered Purchases page lost limited-window Lifetime wording.');

// Display-brand guard. Technical lowercase route/file names are intentionally not treated as player-facing prose.
for (const [name, text] of [
  ['Lifetime VIP gate', gate],
  ['canonical Terms', terms],
  ['canonical Purchases policy', purchases],
  ['rendered Terms', renderedTerms],
  ['rendered Purchases policy', renderedPurchases],
]) {
  if (/TyconX/.test(text)) errors.push(`Displayed brand typo found in ${name}.`);
}

console.log('TycoonX Lifetime VIP legal, promotion, payment, and entitlement QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: limited-window marketing, commercial-lifetime meaning, provider mapping, restoration, idempotency, duplicate ownership, shutdown, and consumer-remedy safeguards are present.');
}
