#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_GERMAN_312K_CANCELLATION_BUTTON_RELEASE_GATE.md');
const termsPath = path.join(ROOT, 'tyconx-terms-of-service.md');
const purchasesPath = path.join(ROOT, 'tyconx-purchase-refund-policy.md');
const progressPath = path.join(ROOT, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

const gate = await readFile(gatePath, 'utf8');
const terms = await readFile(termsPath, 'utf8');
const purchases = await readFile(purchasesPath, 'utf8');
const progress = await readFile(progressPath, 'utf8');

requireMatch(gate, /TycoonX went to full release on \*\*September 1, 2026\*\*/i, 'Missing live-service release checkpoint.');
requireMatch(gate, /BGB § 312k/i, 'Missing BGB § 312k statutory scope.');
requireMatch(gate, /Dauerschuldverhältnis/i, 'Missing continuing-obligation classification.');
requireMatch(gate, /via a website/i, 'Missing website trigger.');
requireMatch(gate, /BGH, judgment of May 22, 2025, I ZR 161\/24/i, 'Missing BGH I ZR 161/24 checkpoint.');
requireMatch(gate, /single one-time fee/i, 'Missing BGH one-time-fee safeguard.');
requireMatch(gate, /automatically ends/i, 'Missing BGH automatic-expiry safeguard.');
requireMatch(gate, /One-time 30-Day VIP/i, 'Missing one-time 30-Day VIP classification.');
requireMatch(gate, /Lifetime VIP/i, 'Missing Lifetime VIP classification.');
requireMatch(gate, /Diamonds/i, 'Missing Diamond classification.');
requireMatch(gate, /may be withdrawn from future sale, may never return/i, 'Missing limited-sale Lifetime VIP availability rule.');

requireMatch(gate, /does not depend on whether the consumer actually has a substantive right to ordinary cancellation/i, 'Missing cancellation-submission-vs-substantive-right distinction.');
requireMatch(gate, /does not.*automatically create a full refund/is, 'Missing cancellation-vs-refund distinction.');
requireMatch(gate, /BGB § 312k\(6\)/i, 'Missing defective-button consequence.');
requireMatch(gate, /at any time and without observing a notice period/i, 'Missing § 312k(6) no-notice-period consequence.');

requireMatch(gate, /Verträge hier kündigen/i, 'Missing first statutory cancellation label.');
requireMatch(gate, /continuously available/i, 'Missing continuous-availability requirement.');
requireMatch(gate, /immediate and easy to access/i, 'Missing immediate/easy-access requirement.');
requireMatch(gate, /without requiring a prior account login/i, 'Missing no-login conservative implementation safeguard.');
requireMatch(gate, /confirmation page/i, 'Missing confirmation-page requirement.');
requireMatch(gate, /reason.*mandatory for an ordinary cancellation/is, 'Missing ordinary-cancellation reason safeguard.');
requireMatch(gate, /requested termination date mandatory/i, 'Missing optional termination-date safeguard.');
requireMatch(gate, /jetzt kündigen/i, 'Missing final statutory cancellation label.');
requireMatch(gate, /durable medium/i, 'Missing durable-medium evidence requirement.');
requireMatch(gate, /immediately confirm electronically in text form/i, 'Missing immediate text confirmation requirement.');
requireMatch(gate, /original declaration and the later decision as separate events/i, 'Missing immutable cancellation evidence safeguard.');

requireMatch(gate, /not.*the same as[\s\S]{0,500}withdrawal right/i, 'Missing cancellation-vs-withdrawal separation.');
requireMatch(gate, /digital-product termination rights/i, 'Missing digital-product-remedy separation.');
requireMatch(gate, /account deletion/i, 'Missing account-deletion separation.');
requireMatch(gate, /Merchant of Record/i, 'Missing Xsolla Merchant-of-Record analysis.');
requireMatch(gate, /not a substitute for a contract map/i, 'Missing Xsolla contract-map safeguard.');
requireMatch(gate, /Apple App Store and Google Play/i, 'Missing Apple/Google channel distinction.');
requireMatch(gate, /bought in the app store.*ends the analysis/i, 'Missing app-store overreach safeguard.');

requireMatch(gate, /must not erase unrelated legitimately purchased Diamonds/i, 'Missing purchased-Diamond isolation.');
requireMatch(gate, /must not restart, extend or duplicate the original 30-day clock/i, 'Missing 30-Day VIP clock isolation.');
requireMatch(gate, /must not silently convert Lifetime VIP into 30-Day VIP, Diamonds, a subscription or an expiring entitlement/i, 'Missing Lifetime VIP isolation.');
requireMatch(gate, /not label a cancellation submission itself as fraud, chargeback abuse or regional-price abuse/i, 'Missing cancellation-abuse false-positive safeguard.');
requireMatch(gate, /retry the text confirmation idempotently/i, 'Missing outage/idempotency safeguard.');
requireMatch(gate, /Business transfer, provider replacement and permanent shutdown/i, 'Missing migration/shutdown checkpoint.');
requireMatch(gate, /Reviewed September 3, 2026 against/i, 'Missing current legal review date.');
requireMatch(gate, /LG München I \(33 O 14294\/25\)/i, 'Missing July 2026 implementation-warning checkpoint.');

requireMatch(terms, /30-Day VIP/i, 'Canonical Terms lost 30-Day VIP product distinction.');
requireMatch(terms, /Lifetime VIP/i, 'Canonical Terms lost Lifetime VIP product distinction.');
requireMatch(terms, /Diamonds/i, 'Canonical Terms lost Diamond product distinction.');
requireMatch(terms, /commercial operating lifetime of the Service/i, 'Canonical Terms lost Lifetime VIP commercial-lifetime boundary.');
requireMatch(terms, /Apple App Store/i, 'Canonical Terms lost Apple channel.');
requireMatch(terms, /Google Play/i, 'Canonical Terms lost Google Play channel.');
requireMatch(terms, /Xsolla/i, 'Canonical Terms lost Xsolla channel.');

requireMatch(purchases, /30-Day VIP/i, 'Canonical Purchases policy lost 30-Day VIP handling.');
requireMatch(purchases, /Lifetime VIP/i, 'Canonical Purchases policy lost Lifetime VIP handling.');
requireMatch(purchases, /Diamonds/i, 'Canonical Purchases policy lost Diamond handling.');
requireMatch(purchases, /chargeback/i, 'Canonical Purchases policy lost chargeback handling.');

requireMatch(progress, /100\/100 localized full documents are currently confirmed current/i, 'Localization tracker no longer confirms 100/100 current documents.');
requireMatch(progress, /Exact next unfinished locale\/document: None/i, 'Localization queue unexpectedly reopened; continue from that queue first.');
requireMatch(progress, /25\/25 localized legal hubs/i, 'Localization tracker no longer confirms all 25 hubs.');

for (const [name, text] of [
  ['§ 312k gate', gate],
  ['canonical Terms', terms],
  ['canonical Purchases policy', purchases],
]) {
  if (/TyconX/.test(text)) errors.push(`Displayed brand typo found in ${name}.`);
  if (/\bTycoonX\b[^\n]{0,100}\bbeta\b|\bbeta\b[^\n]{0,100}\bTycoonX\b/i.test(text)) {
    errors.push(`Stale live-service beta wording found in ${name}.`);
  }
}

if (/TycoonX goes to full release on September 1, 2026/i.test(gate)) {
  errors.push('Stale future-tense full-release wording found in § 312k gate.');
}

console.log('TycoonX German BGB § 312k cancellation-button QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: German website-scope classification, fixed-term one-time-fee protection, cancellation UX, provider separation, and entitlement-isolation safeguards are present.');
}
