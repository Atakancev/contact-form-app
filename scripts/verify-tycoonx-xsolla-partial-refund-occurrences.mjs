#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const files = {
  occurrenceGate: 'TYCOONX_XSOLLA_PARTIAL_REFUND_OCCURRENCE_RECONCILIATION_GATE.md',
  xsollaGate: 'TYCOONX_XSOLLA_REFUND_CHARGEBACK_RELEASE_GATE.md',
  purchases: path.join('app', 'tyconx-purchase-refund-policy', 'page.tsx'),
  progress: 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md',
};

const errors = [];

async function load(key) {
  try {
    return await readFile(path.join(ROOT, files[key]), 'utf8');
  } catch {
    errors.push(`Missing ${files[key]}`);
    return '';
  }
}

const text = Object.fromEntries(
  await Promise.all(Object.keys(files).map(async (key) => [key, await load(key)])),
);

function requireMatch(key, pattern, message) {
  if (!pattern.test(text[key])) errors.push(`${files[key]}: ${message}`);
}

function forbidMatch(key, pattern, message) {
  if (pattern.test(text[key])) errors.push(`${files[key]}: ${message}`);
}

// Current provider-fact checkpoint.
requireMatch('occurrenceGate', /September 8, 2026/, 'missing current review date');
requireMatch('occurrenceGate', /more than one partial refund can be issued for one charge/i, 'missing multiple-partial-refund provider rule');
requireMatch('occurrenceGate', /new transaction with the same number as the original payment/i, 'missing same-number financial-report behavior');
requireMatch('occurrenceGate', /partial_refund.*when the user receives the funds/is, 'missing completed partial-refund webhook timing');
requireMatch('occurrenceGate', /purchase\.total\.amount/i, 'missing provider partial-refund amount field');
requireMatch('occurrenceGate', /refund_details\.date/i, 'missing refund metadata provenance field');
requireMatch('occurrenceGate', /fixed fees.*only when the full payment is canceled/is, 'missing current merchant fixed-fee treatment');

// Occurrence-level idempotency and evidence boundaries.
requireMatch('occurrenceGate', /transaction number alone as the unique identity of a refund occurrence/i, 'must reject parent transaction number as sole refund-occurrence identity');
requireMatch('occurrenceGate', /separate durable \*\*refund-occurrence record\*\*/i, 'missing separate refund-occurrence ledger');
requireMatch('occurrenceGate', /do not use `transaction\.id` alone as the entitlement-correction idempotency key/i, 'missing transaction-id-only idempotency prohibition');
requireMatch('occurrenceGate', /do not use a refund amount alone as the occurrence identity/i, 'missing amount-only idempotency prohibition');
requireMatch('occurrenceGate', /cryptographic fingerprint of the verified provider event/i, 'missing durable internal event fingerprint option');
requireMatch('occurrenceGate', /Do not assume `refund_details\.date` by itself is globally unique/i, 'must not invent uniqueness for refund timestamp');
requireMatch('occurrenceGate', /Duplicate delivery.*Separate legitimate partial refund/is, 'missing duplicate-versus-new-refund distinction');
requireMatch('occurrenceGate', /do not guess in the direction of a larger clawback/i, 'ambiguous events must fail safely');

// Cumulative and partial-to-full reconciliation.
requireMatch('occurrenceGate', /authoritative cumulative refunded amount <= authoritative original paid amount/i, 'missing cumulative provider-refund cap');
requireMatch('occurrenceGate', /cumulative TycoonX correction for that payment <= value attributable to that original purchase/i, 'missing transaction-attributable correction cap');
requireMatch('occurrenceGate', /Apply only the \*\*remaining delta\*\*/i, 'missing delta-only final refund reconciliation');
requireMatch('occurrenceGate', /must \*\*not\*\* apply the earlier 50% of corrections and then subtract another full 100%/i, 'missing explicit partial-then-full double-clawback safeguard');
requireMatch('occurrenceGate', /maximum correction attributable to that transaction is 2,000 Diamonds, not 3,000 or 4,000/i, 'missing concrete cumulative Diamond example');
requireMatch('occurrenceGate', /conflict.*freeze irreversible extra correction|conflict.*reconcile/is, 'conflicting provider state must not maximize clawback automatically');

// Product isolation and Lifetime VIP sales-window integrity.
requireMatch('occurrenceGate', /Purchased Diamonds do not expire solely because time passes/i, 'missing purchased-Diamond non-expiry invariant');
requireMatch('occurrenceGate', /30-Day VIP remains a one-time, non-renewing entitlement for \*\*30 consecutive days\*\*/i, 'missing exact 30-Day VIP model');
requireMatch('occurrenceGate', /Lifetime VIP remains a one-time promotional entitlement offered only during selected genuine sales windows/i, 'missing Lifetime VIP limited-window model');
requireMatch('occurrenceGate', /may be withdrawn from future sale, may never return/i, 'missing Lifetime VIP future-availability boundary');
requireMatch('occurrenceGate', /do not create a `25% Lifetime VIP`/i, 'must block invented fractional Lifetime VIP');
requireMatch('occurrenceGate', /do not reopen a closed Lifetime VIP sales window/i, 'refund reconciliation must not reopen Lifetime VIP');
requireMatch('occurrenceGate', /unrelated purchased Diamonds\/VIP remain untouched/i, 'missing unrelated-entitlement isolation QA');

// Merchant fee, FX, abuse, outage, and migration boundaries.
requireMatch('occurrenceGate', /Merchant fee accounting is not player entitlement authority/i, 'missing merchant-fee separation');
requireMatch('occurrenceGate', /deduct extra Diamonds to recover an Xsolla fixed fee/i, 'missing no-player-fee-clawback rule');
requireMatch('occurrenceGate', /current exchange rate.*later regional price.*current Lifetime VIP sale price/is, 'missing historical-price/FX reconciliation boundary');
requireMatch('occurrenceGate', /Multiple partial refunds for one charge are not automatically proof of fraud/i, 'missing fraud-inference safeguard');
requireMatch('occurrenceGate', /internal idempotency bug is not proof of entitlement abuse/i, 'missing developer-bug/player-abuse separation');
requireMatch('occurrenceGate', /never re-run all historic refund rows as fresh corrections/i, 'missing migration replay protection');
requireMatch('occurrenceGate', /old unsupported app version cannot bypass server-side refund reconciliation/i, 'missing unsupported-client safeguard');
requireMatch('occurrenceGate', /mandatory German\/EU consumer remedies/i, 'missing mandatory-rights preservation');

// Existing Xsolla doctrine must still provide the broader payment/refund rules.
requireMatch('xsollaGate', /Partial refunds are payment-method and transaction specific/i, 'broader Xsolla gate lost partial-refund doctrine');
requireMatch('xsollaGate', /more than one partial refund|multiple partial refunds/i, 'broader Xsolla gate lost multiple-partial-refund awareness');
requireMatch('xsollaGate', /idempotency keyed only by the original transaction ID/i, 'broader Xsolla gate lost parent-ID idempotency warning');
requireMatch('xsollaGate', /partial-refund webhook is sent when the user receives the funds/i, 'broader Xsolla gate lost completion-state distinction');
requireMatch('xsollaGate', /Do not confiscate unrelated legitimate purchases/i, 'broader Xsolla gate lost unrelated-purchase protection');

// Canonical player-facing purchase invariants remain unchanged.
requireMatch('purchases', /TycoonX web shop powered by Xsolla/i, 'canonical Xsolla purchase channel missing');
requireMatch('purchases', /refunds, reversals, and chargebacks/i, 'canonical refund/reversal framework missing');
requireMatch('purchases', /unrelated legitimately purchased value/i, 'canonical unrelated-value protection missing');
requireMatch('purchases', /30-Day VIP is a one-time, non-renewing entitlement lasting 30 consecutive days/i, 'canonical 30-Day VIP model changed');
requireMatch('purchases', /selected limited promotional sales windows/i, 'canonical Lifetime VIP sales-window rule changed');
requireMatch('purchases', /does not reduce any rights that cannot legally be waived/i, 'canonical mandatory-rights caveat missing');

// Localization and release invariants.
requireMatch('progress', /25\/25/, 'localized hubs are no longer complete');
requireMatch('progress', /100\/100/, 'localized full documents are no longer complete');
requireMatch('progress', /Exact next unfinished locale\/document[^\n]*\*\*None\*\*|Exact next unfinished locale\/document[^\n]*None/i, 'tracker no longer says there is no unfinished locale/document');
requireMatch('progress', /September 1, 2026/, 'full-release date invariant missing');

// Exact displayed brand and no stale live-service beta wording.
const forbiddenBrand = ['Ty', 'conX'].join('');
for (const key of ['occurrenceGate', 'xsollaGate', 'purchases']) {
  if (text[key].includes(forbiddenBrand)) errors.push(`${files[key]} contains forbidden displayed-brand spelling`);
  forbidMatch(key, /\bTycoonX\s+(?:is\s+)?(?:a\s+)?beta\b/i, 'contains stale live-service beta wording');
}

console.log('TycoonX Xsolla partial-refund occurrence QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: Xsolla multi-partial-refund occurrence identity, cumulative reconciliation, partial-to-full delta handling, product isolation, fee separation, mandatory rights, and release/localization invariants are present.');
}
