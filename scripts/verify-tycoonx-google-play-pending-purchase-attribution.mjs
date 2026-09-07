#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_GOOGLE_PLAY_PENDING_PURCHASE_ATTRIBUTION_RELEASE_GATE.md');
const trackerPath = path.join(ROOT, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const [gate, tracker] = await Promise.all([
  readFile(gatePath, 'utf8'),
  readFile(trackerPath, 'utf8'),
]);

const errors = [];

function requireText(text, needle, label) {
  if (!text.includes(needle)) errors.push(`${label}: missing "${needle}"`);
}

function requireMatch(text, pattern, label) {
  if (!pattern.test(text)) errors.push(label);
}

function forbid(text, needle, label) {
  if (text.includes(needle)) errors.push(`${label}: forbidden wording "${needle}"`);
}

const requiredGate = [
  'Last reviewed: September 7, 2026',
  'TycoonX is in full release.',
  'purchased Diamonds, one-time non-renewing 30-Day VIP, and Lifetime VIP',
  'entitlement must be granted only after the verified purchase state becomes `PURCHASED`',
  '`queryPurchasesAsync()` should be used',
  'pending purchase can be approved on another device',
  'out-of-app purchases such as promotion redemptions',
  'might not contain `obfuscatedAccountId` or `obfuscatedProfileId`',
  '**not to use `orderId` to detect duplicate purchases or as a database primary key**',
  'do not grant purchased Diamonds, start one-time 30-Day VIP, or grant Lifetime VIP while the purchase is still `PENDING`',
  'call `queryPurchasesAsync()` after a successful Billing Library connection and when the app returns to the foreground',
  'same purchase discovered through listener, foreground query, RTDN, retry, or support reconciliation is granted exactly once',
  'grants the 200 Diamonds exactly once',
  'do not reinterpret parental/family approval as consent to unrelated TycoonX features',
  'do not use another-device approval itself as evidence of account sharing, account compromise, or entitlement abuse',
  'absence of an obfuscated identifier is not automatic proof of fraud',
  'place the entitlement into an unclaimed/reconciliation state',
  'do not let another account claim the same purchase merely by presenting the same receipt/order ID',
  'Purchase token is the transaction-deduplication anchor; `orderId` is not a safe primary key',
  'do not reject a legitimate purchase solely because `orderId` is absent',
  'do not synthesize or guess an `orderId`',
  'not as the sole entitlement identity',
  'acknowledgement deadline from the moment the user first opens the payment flow',
  'when Google reports `PURCHASED`',
  'automatic refund/revocation as player fraud or chargeback abuse',
  '`ONE_TIME_PRODUCT_CANCELED` notification is a state transition to reconcile, not evidence that the user performed a chargeback',
  'Do not turn CK-Labs\' premature-fulfillment bug into an accusation against the player.',
  'Start the original 30-day period only after the completed purchase is verified and safely attributed.',
  'Lifetime VIP remains a one-time promotional offering available only during selected genuine sales windows',
  'may be withdrawn from future sale, may never return, and creates no expectation of continuous availability',
  'completion timestamp is later than the sales-window closing timestamp',
  'CK-Labs must not keep a completed payment while refusing the paid Lifetime VIP entitlement',
  'Mandatory German/EU consumer rights remain intact',
  'An attribution problem must not be used to run down a legal remedy period unfairly.',
  'Legitimate promo purchase has no `orderId`',
  'same purchase token can grant paid entitlement to more than one TycoonX account',
  'the acknowledgement clock is measured from `PENDING` initiation instead of the transition to `PURCHASED`',
  'Google Play Billing integration guidance, last updated September 1, 2026',
  'node scripts/verify-tycoonx-google-play-pending-purchase-attribution.mjs',
];

for (const needle of requiredGate) {
  requireText(gate, needle, 'Google Play pending purchase attribution gate');
}

requireText(tracker, 'All 25 target locales and all 100 localized full documents are current.', 'localization tracker');
requireText(tracker, 'Exact next unfinished locale/document: None.', 'localization tracker');
requireText(tracker, 'September 1, 2026', 'localization tracker');

requireMatch(
  gate,
  /`PENDING`[\s\S]{0,1200}`PURCHASED`[\s\S]{0,2400}queryPurchasesAsync\(\)[\s\S]{0,1800}exactly once/i,
  'Google Play pending purchase attribution gate: pending-to-purchased recovery/idempotency controls are incomplete.',
);

requireMatch(
  gate,
  /approved on another device[\s\S]{0,1800}not evidence of account sharing[\s\S]{0,1400}Purchased Diamonds[\s\S]{0,1200}30-Day VIP[\s\S]{0,1200}Lifetime VIP/i,
  'Google Play pending purchase attribution gate: another-device approval is not safely separated from entitlement/abuse decisions.',
);

requireMatch(
  gate,
  /obfuscatedAccountId[\s\S]{0,2600}absence[\s\S]{0,1600}unclaimed\/reconciliation state[\s\S]{0,1800}same purchase/i,
  'Google Play pending purchase attribution gate: missing-obfuscated-ID attribution controls are incomplete.',
);

requireMatch(
  gate,
  /orderId[\s\S]{0,1000}database primary key[\s\S]{0,1800}purchase token[\s\S]{0,1600}do not reject a legitimate purchase/i,
  'Google Play pending purchase attribution gate: orderId/purchase-token authority boundary is incomplete.',
);

requireMatch(
  gate,
  /acknowledgement[\s\S]{0,1800}PENDING[\s\S]{0,1400}PURCHASED[\s\S]{0,1800}automatic refund\/revocation[\s\S]{0,1000}not classify/i,
  'Google Play pending purchase attribution gate: acknowledgement timing and automatic-refund boundary are incomplete.',
);

requireMatch(
  gate,
  /ONE_TIME_PRODUCT_CANCELED[\s\S]{0,1400}not evidence[\s\S]{0,1600}unrelated[\s\S]{0,2000}premature-fulfillment bug/i,
  'Google Play pending purchase attribution gate: canceled-pending-purchase correction is not separated from enforcement.',
);

requireMatch(
  gate,
  /30-Day VIP[\s\S]{0,1400}original 30-day period[\s\S]{0,1800}Lifetime VIP[\s\S]{0,1600}selected genuine sales windows[\s\S]{0,2200}completion timestamp/i,
  'Google Play pending purchase attribution gate: 30-Day and Lifetime VIP timing/window invariants are incomplete.',
);

requireMatch(
  gate,
  /Mandatory German\/EU consumer rights[\s\S]{0,2200}withdrawal[\s\S]{0,1200}conformity[\s\S]{0,1400}remedy period/i,
  'Google Play pending purchase attribution gate: mandatory consumer-rights preservation is incomplete.',
);

forbid(gate, 'TyconX', 'Google Play pending purchase attribution gate');
forbid(gate, 'TycoonX beta', 'Google Play pending purchase attribution gate');
forbid(gate, 'TycoonX is in beta', 'Google Play pending purchase attribution gate');

if (errors.length) {
  console.error('TycoonX Google Play pending purchase attribution verification FAILED:\n');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('TycoonX Google Play pending purchase attribution verification PASSED.');
