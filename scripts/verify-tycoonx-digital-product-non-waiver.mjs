#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_EU_DIGITAL_PRODUCT_MODIFICATION_NON_WAIVER_RELEASE_GATE.md');
const changeGatePath = path.join(ROOT, 'TYCOONX_EU_DIGITAL_PRODUCT_CHANGE_SHUTDOWN_GATE.md');
const termsPath = path.join(ROOT, 'tyconx-terms-of-service.md');
const purchasesPath = path.join(ROOT, 'tyconx-purchase-refund-policy.md');
const progressPath = path.join(ROOT, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const [gate, changeGate, terms, purchases, progress] = await Promise.all([
  readFile(gatePath, 'utf8'),
  readFile(changeGatePath, 'utf8'),
  readFile(termsPath, 'utf8'),
  readFile(purchasesPath, 'utf8'),
  readFile(progressPath, 'utf8'),
]);

const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

// Mandatory German/EU non-waiver framework.
requireMatch(gate, /BGB § 327s/i, 'Missing BGB § 327s non-waiver rule.');
requireMatch(gate, /BGB § 327s\(2\)/i, 'Missing modification-specific BGB § 327s(2) timing rule.');
requireMatch(gate, /after the consumer was informed about the modification under BGB § 327r/i, 'Missing post-modification-information timing safeguard.');
requireMatch(gate, /BGB § 327s\(3\)/i, 'Missing BGB § 327s(3) anti-circumvention rule.');
requireMatch(gate, /BGB § 327s\(4\)/i, 'Missing damages-claim exception boundary.');
requireMatch(gate, /BGB § 327h/i, 'Missing BGB § 327h separate-characteristic-deviation boundary.');
requireMatch(gate, /Directive \(EU\) 2019\/770 Article 22/i, 'Missing Directive Article 22 mandatory-nature safeguard.');
requireMatch(gate, /more protective/i, 'Missing ability to offer consumer protection beyond the statutory minimum.');

// Forced updates and fake consent must not become waiver machinery.
requireMatch(gate, /A forced app update is not a rights-waiver event/i, 'Missing forced-update non-waiver rule.');
requireMatch(gate, /Continued use is not a blanket substitute for the statutory modification process/i, 'Missing continued-use anti-waiver safeguard.');
requireMatch(gate, /By continuing you accept all changes and waive all claims/i, 'Missing explicit rejection of generic continued-use waiver.');
requireMatch(gate, /Do not bundle mandatory access with an unrelated waiver/i, 'Missing anti-bundling safeguard.');
requireMatch(gate, /install a required security update/i, 'Missing required-update access safeguard.');
requireMatch(gate, /recover a compromised account/i, 'Missing compromised-account recovery safeguard.');
requireMatch(gate, /post-notice agreement/i, 'Missing post-notice agreement evidence separation.');
requireMatch(gate, /anti-circumvention engineering checks/i, 'Missing engineering anti-circumvention checks.');
requireMatch(gate, /splitting one material change into many small server toggles/i, 'Missing anti-splitting safeguard for material changes.');
requireMatch(gate, /moving a promised feature behind a new paid tier/i, 'Missing paywall-change anti-circumvention safeguard.');

// Product/payment distinctions.
requireMatch(gate, /Purchased Diamonds stay transaction-specific/i, 'Missing purchased-Diamond transaction isolation.');
requireMatch(gate, /fixed real-money redemption value/i, 'Missing protection against creating fixed Diamond cash-value promise.');
requireMatch(gate, /30-Day VIP is a \*\*one-time, non-renewing 30-day entitlement\*\*/i, 'Missing exact 30-Day VIP non-renewing distinction.');
requireMatch(gate, /Lifetime VIP remains a \*\*one-time promotional entitlement available only during selected genuine sales windows\*\*/i, 'Missing Lifetime VIP selected-sales-window distinction.');
requireMatch(gate, /may never return/i, 'Missing Lifetime VIP no-return-expectation wording.');
requireMatch(gate, /Apple, Google Play and Xsolla terms do not erase CK-Labs duties/i, 'Missing platform/payment-provider non-waiver boundary.');
requireMatch(gate, /provider refund or reversal remains authoritative/i, 'Missing provider transaction-authority boundary.');
requireMatch(gate, /Chargebacks, fraud and account compromise remain separate/i, 'Missing payment/security event separation.');

// Feature changes, economy, shutdown, and remedies.
requireMatch(gate, /Economy rebalancing remains prospective unless a valid correction basis exists/i, 'Missing prospective-rebalancing safeguard.');
requireMatch(gate, /balance change and an invalid-state correction are different/i, 'Missing rebalance-versus-correction distinction.');
requireMatch(gate, /Security emergencies permit necessary containment, not hidden commercial degradation/i, 'Missing security-emergency modification boundary.');
requireMatch(gate, /Permanent shutdown cannot be pre-waived into `no remedy ever`/i, 'Missing permanent-shutdown anti-waiver safeguard.');
requireMatch(gate, /refund, price reduction, termination right or another mandatory consumer remedy/i, 'Missing mandatory shutdown-remedy preservation.');
requireMatch(gate, /conformity, withdrawal, termination, price-reduction or refund route/i, 'Missing mandatory-remedy access safeguard.');

// Evidence and regression requirements.
requireMatch(gate, /Evidence packet for a material modification/i, 'Missing modification evidence packet.');
requireMatch(gate, /no-additional-cost analysis/i, 'Missing no-additional-cost evidence.');
requireMatch(gate, /BGB § 327r 30-day calculation/i, 'Missing § 327r termination-window evidence.');
requireMatch(gate, /unchanged-version availability\/conformity evidence/i, 'Missing unchanged-version evidence requirement.');
requireMatch(gate, /Player keeps playing after material-change notice/i, 'Missing continued-use regression scenario.');
requireMatch(gate, /Compromised account accepts a change screen/i, 'Missing compromised-account consent regression scenario.');
requireMatch(gate, /User terminates one affected contract/i, 'Missing transaction-specific termination regression scenario.');

// Existing comprehensive gate and canonical wording must remain intact.
requireMatch(changeGate, /BGB § 327r/i, 'Existing digital-product change gate lost BGB § 327r.');
requireMatch(changeGate, /without cost within 30 days/i, 'Existing change gate lost the 30-day no-cost termination route.');
requireMatch(changeGate, /durable medium/i, 'Existing change gate lost durable-medium notice.');
requireMatch(changeGate, /permanent TycoonX shutdown/i, 'Existing change gate lost permanent-shutdown handling.');

requireMatch(terms, /Nothing in these Terms excludes, limits, or overrides rights that cannot legally be excluded or limited/i, 'Canonical Terms lost general mandatory-rights safeguard.');
requireMatch(terms, /valid contractual reason, will not impose additional cost to the consumer, and will be communicated clearly/i, 'Canonical Terms lost valid-reason/no-cost modification safeguard.');
requireMatch(terms, /durable-medium information, termination right, unchanged-version option, refund, price reduction/i, 'Canonical Terms lost material-change remedy wording.');
requireMatch(terms, /30-Day VIP.*one-time, non-renewing digital entitlement/is, 'Canonical Terms lost 30-Day VIP distinction.');
requireMatch(terms, /Lifetime VIP.*one-time digital entitlement.*limited promotional sales windows/is, 'Canonical Terms lost Lifetime VIP selected-window rule.');
requireMatch(terms, /Purchased Diamonds do not expire solely because time passes/i, 'Canonical Terms lost purchased-Diamond time-expiry safeguard.');

requireMatch(purchases, /mandatory consumer rights/i, 'Purchases policy lost mandatory-consumer-rights safeguard.');
requireMatch(purchases, /30-Day VIP/i, 'Purchases policy lost 30-Day VIP product distinction.');
requireMatch(purchases, /Lifetime VIP/i, 'Purchases policy lost Lifetime VIP product distinction.');
requireMatch(purchases, /Diamonds/i, 'Purchases policy lost Diamond product distinction.');

// Localization and release-status invariants.
requireMatch(progress, /25\/25\*{0,2} target locales/i, 'Localization tracker no longer confirms all 25 hubs/locales.');
requireMatch(progress, /100\/100 localized full documents are currently confirmed current/i, 'Localization tracker no longer confirms 100/100 current full documents.');
requireMatch(progress, /Exact next unfinished locale\/document: None/i, 'Localization tracker no longer reports no unfinished locale/document.');
requireMatch(gate, /September 1, 2026/i, 'Missing TycoonX full-release date.');
requireMatch(gate, /all 25 locales/i, 'Missing localization reopening safeguard.');

for (const [name, text] of [
  ['digital-product non-waiver gate', gate],
  ['digital-product change gate', changeGate],
  ['canonical Terms', terms],
  ['canonical Purchases policy', purchases],
]) {
  if (/TyconX/.test(text)) errors.push(`Displayed brand typo found in ${name}.`);
  if (/TycoonX (?:is|remains|currently is|service is) (?:a )?beta\b/i.test(text)) {
    errors.push(`Stale live-service beta wording found in ${name}.`);
  }
}

console.log('TycoonX EU/German digital-product modification and non-waiver QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: modification rights, anti-circumvention, update consent, payment separation, Diamonds, VIP and shutdown remedies are protected.');
}
