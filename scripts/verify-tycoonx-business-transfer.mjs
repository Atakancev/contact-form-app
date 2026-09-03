#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_BUSINESS_TRANSFER_SUCCESSOR_RELEASE_GATE.md');
const termsPath = path.join(ROOT, 'tyconx-terms-of-service.md');
const privacyPath = path.join(ROOT, 'tyconx-privacy-policy.md');
const purchasesPath = path.join(ROOT, 'tyconx-purchase-refund-policy.md');
const progressPath = path.join(ROOT, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

const gate = await readFile(gatePath, 'utf8');
const terms = await readFile(termsPath, 'utf8');
const privacy = await readFile(privacyPath, 'utf8');
const purchases = await readFile(purchasesPath, 'utf8');
const progress = await readFile(progressPath, 'utf8');

requireMatch(gate, /TycoonX went to full release on \*\*September 1, 2026\*\*/i, 'Missing live-service release checkpoint.');
requireMatch(gate, /share or ownership change/i, 'Missing same-entity ownership-change classification.');
requireMatch(gate, /asset sale or contractual transfer/i, 'Missing asset/contract transfer classification.');
requireMatch(gate, /BGB § 398/i, 'Missing BGB § 398 assignment checkpoint.');
requireMatch(gate, /BGB § 415/i, 'Missing BGB § 415 debt-assumption checkpoint.');
requireMatch(gate, /UmwG § 20/i, 'Missing statutory universal-succession checkpoint.');
requireMatch(gate, /does not by itself prove that every consumer-facing contractual obligation has validly moved/i, 'Missing asset-transfer overreach safeguard.');
requireMatch(gate, /do not manufacture a fictional consent event from continued gameplay/i, 'Missing contract-consent safeguard.');

requireMatch(gate, /Paid-entitlement continuity is a P0 closing item/i, 'Missing paid-entitlement continuity gate.');
requireMatch(gate, /purchased Diamond balance/i, 'Missing purchased-Diamond migration evidence.');
requireMatch(gate, /30-Day VIP/i, 'Missing one-time 30-Day VIP migration handling.');
requireMatch(gate, /Lifetime VIP/i, 'Missing Lifetime VIP successor handling.');
requireMatch(gate, /must continue if the successor continues operating TycoonX/i, 'Missing Lifetime VIP continuity rule.');
requireMatch(gate, /must not duplicate entitlements/i, 'Missing duplicate-entitlement migration safeguard.');
requireMatch(gate, /chargeback on one Diamond transaction must not automatically remove a separate valid Lifetime VIP/i, 'Missing transaction-isolation safeguard.');

requireMatch(gate, /Promotion and catalog freeze around closing/i, 'Missing promotion/catalog transfer-freeze section.');
requireMatch(gate, /Lifetime VIP sales window, Diamond promotion, coupon, regional-price change, currency change/i, 'Missing overlapping commercial-change inventory.');
requireMatch(gate, /must not silently extend a countdown or create a false scarcity claim/i, 'Missing promotion timing safeguard.');
requireMatch(gate, /must not retroactively reprice it because the company changed hands/i, 'Missing completed-price successor safeguard.');

requireMatch(gate, /GDPR controller-change and data-transfer gate/i, 'Missing GDPR controller-change section.');
requireMatch(gate, /GDPR Articles \*\*13 and 14\*\*/i, 'Missing GDPR Articles 13/14 transparency checkpoint.');
requireMatch(gate, /new controller obtains personal data other than directly from the player/i, 'Missing successor Article 14 scenario.');
requireMatch(gate, /one-month limit/i, 'Missing Article 14 timing checkpoint.');
requireMatch(gate, /Open requests must have an owner/i, 'Missing privacy-request handover rule.');
requireMatch(gate, /do not state that players .*consented to the sale/i, 'Missing Privacy-disclosure-vs-consent safeguard.');

requireMatch(gate, /Security and credential handover/i, 'Missing secure credential handover section.');
requireMatch(gate, /rotate API keys, webhook secrets, signing keys/i, 'Missing key/secret rotation safeguard.');
requireMatch(gate, /Never .*sharing old owner passwords/i, 'Missing password-sharing prohibition.');

requireMatch(gate, /Apple App Store transfer checkpoint/i, 'Missing Apple app-transfer checkpoint.');
requireMatch(gate, /Bundle ID, reviews and ratings/i, 'Missing Apple continuity facts.');
requireMatch(gate, /recipient must accept an initiated Apple app transfer within \*\*60 days\*\*/i, 'Missing Apple 60-day transfer-acceptance window.');
requireMatch(gate, /up to \*\*two business days\*\*/i, 'Missing Apple processing-duration checkpoint.');
requireMatch(gate, /metadata, pricing, availability, and In-App Purchases/i, 'Missing Apple transfer edit-freeze checkpoint.');
requireMatch(gate, /Sign in with Apple/i, 'Missing Sign in with Apple transfer handling.');
requireMatch(gate, /keychain-sharing changes/i, 'Missing Apple keychain transfer handling.');
requireMatch(gate, /APNs certificates\/keys/i, 'Missing Apple push migration handling.');
requireMatch(gate, /webhooks that may otherwise continue pointing to the transferor/i, 'Missing Apple webhook migration safeguard.');
requireMatch(gate, /Accessibility Nutrition Labels/i, 'Missing Apple accessibility metadata transfer review.');
requireMatch(gate, /OS data-transfer metadata/i, 'Missing Apple OS data-transfer metadata review.');
requireMatch(gate, /transferor retains access to sales\/payment information from before transfer/i, 'Missing Apple before/after financial-reporting boundary.');
requireMatch(gate, /new provisioning profiles/i, 'Missing Apple post-transfer provisioning-profile checkpoint.');

requireMatch(gate, /Google Play transfer checkpoint/i, 'Missing Google Play transfer checkpoint.');
requireMatch(gate, /official app-transfer process rather than sharing or selling a developer-account login/i, 'Missing official Google transfer-process safeguard.');
requireMatch(gate, /purchase-token reconciliation/i, 'Missing Google purchase-token migration handling.');
requireMatch(gate, /Pub\/Sub\/RTDN/i, 'Missing Google RTDN migration handling.');
requireMatch(gate, /Re-open Google's current official `Transfer apps to a different developer account` documentation/i, 'Missing Google transaction-time revalidation rule.');

requireMatch(gate, /Xsolla \/ official web shop checkpoint/i, 'Missing Xsolla transition checkpoint.');
requireMatch(gate, /merchant_id/i, 'Missing Xsolla merchant ID handling.');
requireMatch(gate, /project_id/i, 'Missing Xsolla project ID handling.');
requireMatch(gate, /at least \*\*10 business days in advance\*\*/i, 'Missing current Xsolla advance-notice checkpoint.');
requireMatch(gate, /Publisher Account Terms of Use dated June 30, 2026/i, 'Missing dated Xsolla terms checkpoint.');
requireMatch(gate, /required successor KYC\/tax\/licensing/i, 'Missing Xsolla successor compliance check.');

requireMatch(gate, /Service shutdown instead of transfer/i, 'Missing failed-transfer shutdown path.');
requireMatch(gate, /update English first and then reopen only the affected localized documents/i, 'Missing canonical-first localization rule for successor changes.');
requireMatch(gate, /Reviewed September 3, 2026 against/i, 'Missing current reference checkpoint date.');

requireMatch(terms, /## 26\. Business transfer, sale, merger, or successor operator/i, 'Canonical Terms lost business-transfer section.');
requireMatch(terms, /business transfer does not by itself erase a valid paid entitlement/i, 'Canonical Terms lost paid-entitlement transfer protection.');
requireMatch(terms, /provide notice, obtain consent, or preserve termination and objection rights where applicable law requires it/i, 'Canonical Terms lost mandatory transfer-rights safeguard.');
requireMatch(terms, /Lifetime VIP ends with the commercial operating lifetime of the Service/i, 'Canonical Terms lost Lifetime VIP shutdown boundary.');
requireMatch(terms, /Mandatory refund, price-reduction, termination, warranty, or other consumer remedies/i, 'Canonical Terms lost shutdown mandatory-remedies safeguard.');

requireMatch(privacy, /### Business transfers/i, 'Canonical Privacy Policy lost business-transfer disclosure.');
requireMatch(privacy, /subject to applicable data-protection law and appropriate notice or other safeguards where required/i, 'Canonical Privacy Policy lost business-transfer safeguards.');
requireMatch(privacy, /## 15\. Changes to This Privacy Policy/i, 'Canonical Privacy Policy lost change-notice section.');
requireMatch(privacy, /If a change requires your consent, we will request that consent rather than treating continued use alone as consent/i, 'Canonical Privacy Policy lost consent-on-change safeguard.');

requireMatch(purchases, /Lifetime VIP/i, 'Canonical Purchases policy lost Lifetime VIP product handling.');
requireMatch(purchases, /30-Day VIP/i, 'Canonical Purchases policy lost 30-Day VIP handling.');
requireMatch(purchases, /Diamonds/i, 'Canonical Purchases policy lost Diamond handling.');

requireMatch(progress, /100\/100 localized full documents are currently confirmed current/i, 'Localization tracker no longer confirms 100/100 current documents.');
requireMatch(progress, /Exact next unfinished locale\/document: None/i, 'Localization queue unexpectedly reopened; continue from that queue before further hardening.');
requireMatch(progress, /tr, de, es, es_MX, fr, fr_CA, it, pt, pt_BR, ru, ja, ko, zh, zh_Hans, zh_Hant, ar, nl, sv, nb, pl, th, vi, uk, hi, id/i, 'Localization order invariant missing.');

for (const [name, text] of [
  ['business-transfer gate', gate],
  ['canonical Terms', terms],
  ['canonical Privacy Policy', privacy],
  ['canonical Purchases policy', purchases],
]) {
  if (/TyconX/.test(text)) errors.push(`Displayed brand typo found in ${name}.`);
}

for (const [name, text] of [
  ['business-transfer gate', gate],
  ['canonical Terms', terms],
  ['canonical Privacy Policy', privacy],
  ['canonical Purchases policy', purchases],
]) {
  if (/\bTycoonX\b[^\n]{0,100}\bbeta\b|\bbeta\b[^\n]{0,100}\bTycoonX\b/i.test(text)) {
    errors.push(`Stale live-service release wording found in ${name}.`);
  }
}

if (/TycoonX goes to full release on September 1, 2026/i.test(gate)) {
  errors.push('Stale future-tense full-release wording found in business-transfer gate.');
}

console.log('TycoonX business transfer and successor-operator QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: contract-transfer classification, successor entitlement continuity, promotion freeze, controller-change, platform migration, and shutdown safeguards are present.');
}
