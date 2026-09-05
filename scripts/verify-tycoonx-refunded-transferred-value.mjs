import fs from 'node:fs';

const read = (path) => fs.readFileSync(path, 'utf8');
const fail = (message) => {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
};
const requireText = (text, needle, label) => {
  if (!text.includes(needle)) fail(`${label}: missing ${needle}`);
};
const forbidText = (text, needle, label) => {
  if (text.includes(needle)) fail(`${label}: forbidden ${needle}`);
};

const gate = read('TYCOONX_REFUNDED_TRANSFERRED_VALUE_RECONCILIATION_RELEASE_GATE.md');
const terms = read('tyconx-terms-of-service.md');
const economy = read('TYCOONX_GAME_ECONOMY_RESET_CORRECTION_RELEASE_GATE.md');
const apple = read('TYCOONX_APPLE_REFUND_ENTITLEMENT_RELEASE_GATE.md');
const google = read('TYCOONX_GOOGLE_PLAY_CHARGEBACK_REVIEW_RELEASE_GATE.md');
const xsolla = read('TYCOONX_XSOLLA_REFUND_CHARGEBACK_RELEASE_GATE.md');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

requireText(gate, '**Last reviewed:** September 5, 2026', 'gate review date');
requireText(gate, 'Final payment state first, economy correction second', 'authoritative-state ordering');
requireText(gate, 'One invalid source transaction creates one correction budget', 'single correction budget');
requireText(gate, 'remaining_correction_budget = attributable_invalid_value - value_already_recovered_for_this_case', 'anti-double-recovery invariant');
requireText(gate, 'Source-first correction is the default', 'source-first correction');
requireText(gate, 'Downstream tracing must preserve transaction context', 'downstream graph context');
requireText(gate, 'A downstream recipient can be corrected without automatically being punished', 'correction/fault separation');
requireText(gate, 'Avoid double loss where genuine consideration can be reconstructed', 'two-sided unwind safeguard');
requireText(gate, 'Any negative in-game balance is an internal game-state correction only', 'no real-world debt safeguard');
requireText(gate, 'Lawful refund, withdrawal, or chargeback activity is not automatically fraud', 'lawful-remedy safeguard');
requireText(gate, 'If the authoritative payment state later changes, reconcile the correction too', 'stale dispute reversal');
requireText(gate, 'Purchased Diamonds do not expire solely because time passes', 'Diamond invariant');
requireText(gate, '30-Day VIP remains a one-time, non-renewing 30-day entitlement', '30-Day VIP invariant');
requireText(gate, 'Lifetime VIP remains a one-time promotional entitlement offered only during selected genuine sales windows', 'Lifetime VIP invariant');
requireText(gate, 'Provider webhook/event IDs can be useful for delivery deduplication but should not replace the underlying business transaction identity', 'provider identity safeguard');
requireText(gate, 'multi-product one-time purchase can contain several product IDs under one purchase token', 'Google multi-product scope');
requireText(gate, 'contract termination can require repayment of payments under BGB § 327o', 'German digital-product remedy');
requireText(gate, 'Do not inspect private communications merely because a refund occurred', 'privacy minimization');
requireText(gate, 'Minimum regression matrix', 'regression coverage');
requireText(gate, 'there is no remaining-correction-budget / anti-double-recovery control', 'release blocker');

requireText(terms, 'apply an equivalent correction where refunded value was already consumed or transferred', 'canonical Terms correction authority');
requireText(terms, 'CK-Labs will not use these corrections to remove unrelated legitimately purchased value', 'canonical Terms unrelated-value safeguard');
requireText(terms, 'consequences of withdrawal are determined by mandatory law and the specific transaction rather than by a blanket no-refunds rule', 'canonical withdrawal safeguard');

requireText(economy, 'Downstream tainted-state unwind', 'general economy downstream category');
requireText(economy, 'Correction and punishment are separate decisions', 'general economy enforcement separation');
requireText(economy, 'Do not turn an in-game correction into an unauthorized real-money debt', 'general economy debt boundary');

requireText(apple, '`CONSUMPTION_REQUEST`: Apple is asking for information that may inform a refund decision. It is not itself proof that a refund has been granted.', 'Apple pending/final distinction');
requireText(google, 'The review response must not itself grant or revoke TycoonX value', 'Google review/final distinction');
requireText(xsolla, 'A chargeback request alone is not proof of fraud.', 'Xsolla dispute/fraud distinction');

requireText(progress, '100/100 localized full documents are currently confirmed current', 'localized full-document completion');
requireText(progress, '25/25', 'localized hub completion');
requireText(progress, 'Exact next unfinished locale/document: None', 'closed localization queue');

forbidText(gate, 'TyconX', 'player-facing brand typo');
forbidText(gate, 'TycoonX beta', 'stale live-service beta wording');

if (!process.exitCode) {
  console.log('PASS: refunded/transferred paid-value reconciliation has provider authority, anti-double-clawback, downstream-context, mandatory-rights, and product-invariant safeguards.');
}
