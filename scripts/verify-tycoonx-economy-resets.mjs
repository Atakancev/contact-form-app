#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();

const files = {
  gate: path.join(ROOT, 'TYCOONX_GAME_ECONOMY_RESET_CORRECTION_RELEASE_GATE.md'),
  terms: path.join(ROOT, 'tyconx-terms-of-service.md'),
  purchases: path.join(ROOT, 'tyconx-purchase-refund-policy.md'),
  virtualCurrency: path.join(ROOT, 'TYCOONX_EU_VIRTUAL_CURRENCY_RELEASE_GATE.md'),
  digitalChanges: path.join(ROOT, 'TYCOONX_EU_DIGITAL_PRODUCT_CHANGE_SHUTDOWN_GATE.md'),
  conformity: path.join(ROOT, 'TYCOONX_EU_DIGITAL_PRODUCT_CONFORMITY_REMEDIES_RELEASE_GATE.md'),
  account: path.join(ROOT, 'TYCOONX_ACCOUNT_SUSPENSION_COMPROMISE_TERMINATION_RELEASE_GATE.md'),
  shutdown: path.join(ROOT, 'TYCOONX_PERMANENT_SHUTDOWN_END_OF_SERVICE_RELEASE_GATE.md'),
  progress: path.join(ROOT, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md'),
  renderedTerms: path.join(ROOT, 'app', 'tyconx-terms-of-service', 'page.tsx'),
  renderedPurchases: path.join(ROOT, 'app', 'tyconx-purchase-refund-policy', 'page.tsx'),
};

const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

const entries = await Promise.all(
  Object.entries(files).map(async ([key, filePath]) => [key, await readFile(filePath, 'utf8')]),
);
const text = Object.fromEntries(entries);

// Action classification and evidence provenance.
requireMatch(text.gate, /Prospective balancing change/i, 'Economy gate lost prospective balancing classification.');
requireMatch(text.gate, /Targeted invalid-state correction/i, 'Economy gate lost invalid-state correction classification.');
requireMatch(text.gate, /Downstream tainted-state unwind/i, 'Economy gate lost downstream unwind classification.');
requireMatch(text.gate, /Technical rollback or disaster recovery/i, 'Economy gate lost rollback/disaster-recovery classification.');
requireMatch(text.gate, /Broad economy reset or migration/i, 'Economy gate lost broad reset/migration classification.');
requireMatch(text.gate, /Consumer-remedy correction/i, 'Economy gate lost consumer-remedy correction classification.');
requireMatch(text.gate, /payment provenance/i, 'Economy gate lost payment-provenance requirement.');
requireMatch(text.gate, /transaction-lot, append-only finance ledger, reliable audit trail/i, 'Economy gate lost reconstructable provenance alternatives.');
requireMatch(text.gate, /prefer freezing the affected economy function and reconciling the evidence/i, 'Economy gate lost uncertainty-before-destruction safeguard.');

// Founder-protective prospective balancing without retroactive invalidation.
requireMatch(text.gate, /may prospectively rebalance production speeds/i, 'Economy gate lost prospective balancing power.');
requireMatch(text.gate, /does not promise that:/i, 'Economy gate lost no-fixed-economy-guarantee section.');
requireMatch(text.gate, /fixed in-game purchasing power/i, 'Economy gate lost no-fixed-Diamond-purchasing-power protection.');
requireMatch(text.gate, /does \*\*not\*\* by itself mean that previously legitimate gameplay was an exploit/i, 'Economy gate lost non-retroactive exploit safeguard.');
requireMatch(text.gate, /specific paid promises actually made at purchase/i, 'Economy gate lost paid-promise limitation on balancing power.');

// German digital-product safeguards.
requireMatch(text.gate, /BGB § 327r/i, 'Economy gate lost BGB § 327r modification checkpoint.');
requireMatch(text.gate, /valid reason/i, 'Economy gate lost valid-reason requirement.');
requireMatch(text.gate, /no additional cost/i, 'Economy gate lost no-additional-cost rule.');
requireMatch(text.gate, /durable-medium notice/i, 'Economy gate lost durable-medium notice checkpoint.');
requireMatch(text.gate, /30-day no-cost termination/i, 'Economy gate lost § 327r termination checkpoint.');
requireMatch(text.gate, /BGB § 327l/i, 'Economy gate lost cure remedy.');
requireMatch(text.gate, /BGB § 327m/i, 'Economy gate lost termination remedy.');
requireMatch(text.gate, /BGB § 327n/i, 'Economy gate lost price-reduction remedy.');
requireMatch(text.gate, /BGB § 327o/i, 'Economy gate lost repayment consequence.');
requireMatch(text.gate, /arbitrary in-game Diamonds unless the consumer validly agrees/i, 'Economy gate lost anti-substitution safeguard for statutory monetary remedies.');

// Narrow exploit correction and fault separation.
requireMatch(text.gate, /narrowest method that restores integrity without deleting unrelated legitimate value/i, 'Economy gate lost narrow-correction principle.');
requireMatch(text.gate, /10,000 exploit-generated Diamonds plus 500 verified purchased and unused Diamonds/i, 'Economy gate lost mixed purchased/exploit example.');
requireMatch(text.gate, /Correction and punishment are separate decisions/i, 'Economy gate lost correction-vs-punishment separation.');
requireMatch(text.gate, /receipt alone is not proof of intentional cheating/i, 'Economy gate lost innocent-recipient safeguard.');
requireMatch(text.gate, /transaction-graph review/i, 'Economy gate lost downstream transaction-graph review.');
requireMatch(text.gate, /not permission to charge the user's card/i, 'Economy gate lost anti-unauthorized-real-money-debt safeguard.');
requireMatch(text.gate, /negative in-game balance.*must not be presented as a real-world debt/is, 'Economy gate lost negative-balance limitation.');

// Refund, chargeback, compromise and provider isolation.
requireMatch(text.gate, /A payment event must not be conflated with a generic economy exploit/i, 'Economy gate lost payment-vs-exploit separation.');
requireMatch(text.gate, /identify the exact provider transaction/i, 'Economy gate lost transaction-specific correction requirement.');
requireMatch(text.gate, /chargeback can arise from account compromise, duplicate billing, provider error, misunderstanding, or deliberate abuse/i, 'Economy gate lost chargeback-cause differentiation.');
requireMatch(text.gate, /Apple transactions and later refund\/revocation state/i, 'Economy gate lost Apple rollback reconciliation.');
requireMatch(text.gate, /Google Play purchase tokens/i, 'Economy gate lost Google rollback reconciliation.');
requireMatch(text.gate, /Xsolla successful payments/i, 'Economy gate lost Xsolla rollback reconciliation.');
requireMatch(text.gate, /idempotency key or equivalent transaction identity/i, 'Economy gate lost rollback idempotency requirement.');

// Paid-product isolation.
requireMatch(text.gate, /must not silently restart, extend, shorten, or erase a valid one-time 30-Day VIP/i, 'Economy gate lost 30-Day VIP reset isolation.');
requireMatch(text.gate, /restore only the remaining legitimate period, not issue a fresh 30 days/i, 'Economy gate lost 30-Day VIP clock restoration rule.');
requireMatch(text.gate, /must not create a hidden expiry for a valid Lifetime VIP/i, 'Economy gate lost Lifetime VIP reset isolation.');
requireMatch(text.gate, /One valid purchase should result in one valid Lifetime VIP entitlement/i, 'Economy gate lost Lifetime VIP non-duplication rule.');
requireMatch(text.gate, /free grant must not overwrite, shorten, or reclassify a purchased entitlement/i, 'Economy gate lost free-vs-paid entitlement isolation.');

// Broad reset, evidence and shutdown safeguards.
requireMatch(text.gate, /Broad resets require a written paid-value impact assessment/i, 'Economy gate lost broad-reset paid-value impact review.');
requireMatch(text.gate, /purchased and unused Diamonds/i, 'Economy gate lost purchased-Diamond impact review.');
requireMatch(text.gate, /active 30-Day VIP and remaining paid time/i, 'Economy gate lost active 30-Day VIP impact review.');
requireMatch(text.gate, /valid Lifetime VIP/i, 'Economy gate lost Lifetime VIP impact review.');
requireMatch(text.gate, /Preserve historical formulas and before\/after evidence/i, 'Economy gate lost historical formula evidence.');
requireMatch(text.gate, /old formula\/configuration version/i, 'Economy gate lost old configuration evidence.');
requireMatch(text.gate, /new formula\/configuration version/i, 'Economy gate lost new configuration evidence.');
requireMatch(text.gate, /Permanent shutdown is separate from an economy reset/i, 'Economy gate lost shutdown-vs-reset separation.');
requireMatch(text.gate, /migration is not a reason to reset all users to zero/i, 'Economy gate lost successor/provider migration preservation.');

// Commercial-practice and virtual-currency safeguards.
requireMatch(text.gate, /CPC Network's 2025 Key Principles on In-Game Virtual Currencies/i, 'Economy gate lost CPC virtual-currency reference.');
requireMatch(text.gate, /enforcement-position and best-practice reference rather than a standalone new statute/i, 'Economy gate overstates CPC principles or lost legal-status nuance.');
requireMatch(text.gate, /fake `before reset` countdown/i, 'Economy gate lost reset-marketing dark-pattern safeguard.');
requireMatch(text.gate, /paid 30-Day VIP time continued running/i, 'Economy gate lost outage/freeze VIP-time evidence.');

// Existing canonical public wording must remain aligned.
requireMatch(text.terms, /## 21\. Economy balancing, corrections, and resets/i, 'Canonical Terms lost economy balancing/reset section.');
requireMatch(text.terms, /may make balancing changes to production speeds, prices, rewards, taxes, limits, demand, supply, formulas/i, 'Canonical Terms lost prospective balance-change protection.');
requireMatch(text.terms, /correct obvious errors, duplicated rewards, impossible balances, corrupted records, exploit-generated value/i, 'Canonical Terms lost invalid-state correction protection.');
requireMatch(text.terms, /broad economy reset, server reset, migration, or rollback affecting legitimate paid digital value will be handled subject to applicable law/i, 'Canonical Terms lost paid-value reset safeguard.');
requireMatch(text.terms, /do not create an unlimited right to confiscate legitimately purchased value/i, 'Canonical Terms lost anti-confiscation mandatory-rights safeguard.');
requireMatch(text.terms, /Corrections may affect accounts that received invalid assets even if the current holder did not create the exploit/i, 'Canonical Terms lost downstream invalid-state correction protection.');
requireMatch(text.terms, /preserves any remedy required for legitimate paid value/i, 'Canonical Terms lost legitimate-paid-value remedy safeguard.');

requireMatch(text.purchases, /authoritative/i, 'Canonical Purchases policy lost authoritative-record handling.');
requireMatch(text.purchases, /Diamonds/i, 'Canonical Purchases policy lost Diamonds product distinction.');
requireMatch(text.purchases, /30-Day VIP/i, 'Canonical Purchases policy lost 30-Day VIP product distinction.');
requireMatch(text.purchases, /Lifetime VIP/i, 'Canonical Purchases policy lost Lifetime VIP product distinction.');

// Related operational gates must continue to cover their specialist parts.
requireMatch(text.virtualCurrency, /Fair contract and balance-change rules/i, 'Virtual-currency gate lost balance-change safeguards.');
requireMatch(text.virtualCurrency, /preserve unrelated legitimate purchased value/i, 'Virtual-currency gate lost unrelated paid-value isolation.');
requireMatch(text.digitalChanges, /Economy resets and rollbacks need a paid-value impact review/i, 'Digital-product change gate lost economy-reset impact review.');
requireMatch(text.conformity, /BGB § 327n/i, 'Conformity gate lost price-reduction remedy.');
requireMatch(text.account, /exploit/i, 'Account enforcement gate lost exploit handling.');
requireMatch(text.shutdown, /Lifetime VIP/i, 'Shutdown gate lost Lifetime VIP handling.');

// Localization and release invariants.
requireMatch(text.progress, /25\/25.*target locales/is, 'Localization tracker no longer confirms all 25 target locales/hubs.');
requireMatch(text.progress, /100\/100 localized full documents/i, 'Localization tracker no longer confirms all 100 localized full documents.');
requireMatch(text.progress, /Exact next unfinished locale\/document: None/i, 'Localization tracker unexpectedly shows unfinished locale/document work.');
requireMatch(text.progress, /September 1, 2026/i, 'Localization tracker lost the September 1, 2026 full-release invariant.');
requireMatch(text.gate, /Last reviewed: September 1, 2026/i, 'Economy gate review date is missing or stale.');
requireMatch(text.gate, /100\/100 full documents and 25\/25 hubs/i, 'Economy gate lost localization-completion invariant.');

// Rendered canonical pages should still expose current economy/payment protections.
requireMatch(text.renderedTerms, /Economy balancing, corrections, and resets/i, 'Rendered Terms lost economy reset section.');
requireMatch(text.renderedTerms, /broad economy reset, server reset, migration, or rollback/i, 'Rendered Terms lost broad reset safeguard.');
requireMatch(text.renderedPurchases, /Diamonds/i, 'Rendered Purchases page lost Diamonds wording.');
requireMatch(text.renderedPurchases, /30-Day VIP/i, 'Rendered Purchases page lost 30-Day VIP wording.');
requireMatch(text.renderedPurchases, /Lifetime VIP/i, 'Rendered Purchases page lost Lifetime VIP wording.');

// Display-brand and live-release guard. Technical lowercase tyconx paths are not player-facing prose.
for (const [name, body] of [
  ['economy reset gate', text.gate],
  ['canonical Terms', text.terms],
  ['canonical Purchases policy', text.purchases],
  ['rendered Terms', text.renderedTerms],
  ['rendered Purchases policy', text.renderedPurchases],
]) {
  if (/TyconX/.test(body)) errors.push(`Displayed brand typo TyconX found in ${name}.`);
  if (/TycoonX (?:is|remains|currently is|service is) (?:a )?beta\b/i.test(body)) {
    errors.push(`Stale live-service beta wording found in ${name}.`);
  }
}

console.log('TycoonX economy reset, rollback, exploit correction, and paid-value QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: economy actions are classified, purchased value is isolated, payment events are reconciled, VIP state is protected, and mandatory consumer remedies remain available.');
}
