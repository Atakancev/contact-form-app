#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_EU_DIGITAL_PRODUCT_CONFORMITY_REMEDIES_RELEASE_GATE.md');
const termsPath = path.join(ROOT, 'tyconx-terms-of-service.md');
const purchasesPath = path.join(ROOT, 'tyconx-purchase-refund-policy.md');
const progressPath = path.join(ROOT, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

const [gate, terms, purchases, progress] = await Promise.all([
  readFile(gatePath, 'utf8'),
  readFile(termsPath, 'utf8'),
  readFile(purchasesPath, 'utf8'),
  readFile(progressPath, 'utf8'),
]);

requireMatch(gate, /September 1, 2026/i, 'Missing September 1, 2026 release-date invariant.');
requireMatch(gate, /Directive \(EU\) 2019\/770/i, 'Missing Directive (EU) 2019/770 conformity framework.');
requireMatch(gate, /BGB § 327b/i, 'Missing BGB § 327b delivery rule.');
requireMatch(gate, /burden of proving supply/i, 'Missing trader burden-of-proof safeguard for delivery.');
requireMatch(gate, /BGB § 327c/i, 'Missing BGB § 327c non-supply escalation.');
requireMatch(gate, /BGB §§ 327d and 327e/i, 'Missing BGB §§ 327d/327e conformity requirements.');
requireMatch(gate, /quantity.*functionality.*compatibility.*continuity.*security.*accessibility/is, 'Missing core conformity-characteristics matrix.');
requireMatch(gate, /Public claims can matter/i, 'Missing advertising/public-statement conformity safeguard.');
requireMatch(gate, /BGB § 327h/i, 'Missing separately agreed deviation safeguard.');
requireMatch(gate, /expressly and separately agreed/i, 'Missing separate-agreement requirement for objective-requirement deviation.');
requireMatch(gate, /BGB § 327l/i, 'Missing cure rule.');
requireMatch(gate, /reasonable time.*without significant inconvenience/is, 'Missing cure timing/inconvenience safeguard.');
requireMatch(gate, /BGB § 327m/i, 'Missing persistent/severe defect termination escalation.');
requireMatch(gate, /BGB § 327n/i, 'Missing price-reduction remedy.');
requireMatch(gate, /within \*\*14 days\*\*/i, 'Missing German 14-day repayment safeguard.');
requireMatch(gate, /same payment method/i, 'Missing same-payment-method repayment rule.');
requireMatch(gate, /BGB § 327o/i, 'Missing contract-termination repayment consequences.');
requireMatch(gate, /BGB § 327f/i, 'Missing required/security update rule.');
requireMatch(gate, /BGB § 327k/i, 'Missing digital-product burden-of-proof reversal.');
requireMatch(gate, /least intrusive/i, 'Missing least-intrusive diagnostics/cooperation safeguard.');
requireMatch(gate, /BGB § 327j/i, 'Missing limitation-period evidence-retention safeguard.');
requireMatch(gate, /BGB § 327s/i, 'Missing anti-waiver/circumvention safeguard.');
requireMatch(gate, /“all sales are final”/i, 'Missing all-sales-final anti-waiver example.');
requireMatch(gate, /third-party outage/i, 'Missing third-party outage anti-waiver handling.');
requireMatch(gate, /Purchased Diamonds/i, 'Missing purchased-Diamond conformity handling.');
requireMatch(gate, /one-time 30-Day VIP/i, 'Missing one-time 30-Day VIP conformity handling.');
requireMatch(gate, /limited-time Lifetime VIP/i, 'Missing limited-time Lifetime VIP conformity handling.');
requireMatch(gate, /commercial operating lifetime of TycoonX/i, 'Missing Lifetime VIP commercial-lifetime definition.');
requireMatch(gate, /must not silently restart a fresh 30-day period/i, 'Missing 30-Day VIP restore-clock safeguard.');
requireMatch(gate, /not granting a second Lifetime VIP/i, 'Missing Lifetime VIP duplicate-restoration safeguard.');
requireMatch(gate, /500 purchased Diamonds were never delivered/i, 'Missing transaction-scoped Diamond cure example.');
requireMatch(gate, /duplicate webhook during cure/i, 'Missing duplicate-event regression scenario.');
requireMatch(gate, /Apple App Store/i, 'Missing Apple transaction-role handling.');
requireMatch(gate, /Google Play/i, 'Missing Google Play transaction-role handling.');
requireMatch(gate, /Xsolla webshop/i, 'Missing Xsolla transaction-role handling.');
requireMatch(gate, /PENDING/i, 'Missing Google pending-state protection.');
requireMatch(gate, /account compromise/i, 'Missing account-compromise separation.');
requireMatch(gate, /Hacks\/exploits/i, 'Missing exploit correction separation.');
requireMatch(gate, /Chargeback/i, 'Missing chargeback-vs-defect distinction.');
requireMatch(gate, /Regional-price or promotion abuse/i, 'Missing regional/promotion abuse separation.');
requireMatch(gate, /all 25 locales/i, 'Missing localization reopening rule.');
requireMatch(gate, /100 localized full documents/i, 'Missing localized-document completion invariant.');

requireMatch(terms, /Nothing in these Terms excludes statutory withdrawal, conformity, update, warranty, price-reduction, termination, refund, or other rights that cannot legally be waived/i, 'Canonical Terms lost non-waivable digital-product-rights protection.');
requireMatch(terms, /Purchased Diamonds/i, 'Canonical Terms lost purchased-Diamond distinction.');
requireMatch(terms, /30-Day VIP/i, 'Canonical Terms lost 30-Day VIP distinction.');
requireMatch(terms, /Lifetime VIP/i, 'Canonical Terms lost Lifetime VIP distinction.');
requireMatch(terms, /commercial operating lifetime of the Service/i, 'Canonical Terms lost Lifetime VIP commercial-lifetime wording.');
requireMatch(terms, /authoritative.*records/is, 'Canonical Terms lost authoritative-record principle.');
requireMatch(terms, /updates required to keep the relevant digital product in conformity/i, 'Canonical Terms lost required-update protection.');

requireMatch(purchases, /does not reduce any rights that cannot legally be waived/i, 'Purchases policy lost non-waivable-rights protection.');
requireMatch(purchases, /If a user was charged but purchased content does not appear/i, 'Purchases policy lost delivery-problem path.');
requireMatch(purchases, /A restore operation never creates duplicate purchased value/i, 'Purchases policy lost restore idempotency rule.');
requireMatch(purchases, /Mandatory consumer remedies remain available if discontinuation, defects, non-supply, or material changes/i, 'Purchases policy lost Lifetime VIP defect/non-supply remedies.');
requireMatch(purchases, /Sections 327 et seq\. BGB/i, 'Purchases policy lost German digital-product framework.');
requireMatch(purchases, /including required security updates/i, 'Purchases policy lost security-update obligation.');

requireMatch(progress, /25\/25.*target locales/i, 'Localization progress no longer reports 25/25 target locales.');
requireMatch(progress, /100\/100 localized full documents/i, 'Localization progress no longer reports 100/100 full documents.');
requireMatch(progress, /Exact next unfinished locale\/document:\s*None\./i, 'Localization tracker no longer reports no unfinished locale/document.');

for (const [name, text] of [
  ['digital-product conformity gate', gate],
  ['canonical Terms', terms],
  ['canonical Purchases policy', purchases],
  ['localization tracker', progress],
]) {
  if (/TyconX/.test(text)) errors.push(`Displayed brand typo TyconX found in ${name}.`);
  if (/TycoonX (?:is|remains|currently is|service is) (?:a )?beta\b/i.test(text)) {
    errors.push(`Stale live-service beta wording found in ${name}.`);
  }
}

console.log('TycoonX EU/German digital-product conformity and remedies QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: delivery, conformity, cure, escalation, repayment, updates, evidence, payment-channel roles, and TycoonX entitlement isolation are protected.');
}
