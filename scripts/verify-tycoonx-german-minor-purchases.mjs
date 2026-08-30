#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_GERMAN_MINOR_PURCHASE_RELEASE_GATE.md');
const termsPath = path.join(ROOT, 'tyconx-terms-of-service.md');
const purchasesPath = path.join(ROOT, 'tyconx-purchase-refund-policy.md');
const privacyPath = path.join(ROOT, 'tyconx-privacy-policy.md');

const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

const gate = await readFile(gatePath, 'utf8');
const terms = await readFile(termsPath, 'utf8');
const purchases = await readFile(purchasesPath, 'utf8');
const privacy = await readFile(privacyPath, 'utf8');

requireMatch(gate, /BGB § 104/i, 'Missing BGB § 104 under-seven legal-capacity rule.');
requireMatch(gate, /BGB § 105\(1\)/i, 'Missing BGB § 105 void-declaration rule.');
requireMatch(gate, /BGB § 106/i, 'Missing BGB § 106 limited-capacity rule.');
requireMatch(gate, /BGB § 107/i, 'Missing BGB § 107 representative-consent rule.');
requireMatch(gate, /BGB § 108\(1\)/i, 'Missing BGB § 108 approval rule.');
requireMatch(gate, /two-week response window/i, 'Missing BGB § 108(2) two-week response window.');
requireMatch(gate, /BGB § 110/i, 'Missing BGB § 110 pocket-money rule.');
requireMatch(gate, /Do not treat § 110 as a blanket rule/i, 'Missing safeguard against overbroad pocket-money-rule assumptions.');
requireMatch(gate, /stored on a device/i, 'Missing stored-parental-card safeguard.');
requireMatch(gate, /Ask to Buy/i, 'Missing Apple Ask to Buy handling.');
requireMatch(gate, /Product\.PurchaseResult\.pending/i, 'Missing StoreKit pending-purchase state.');
requireMatch(gate, /zero Diamonds, zero 30-Day VIP time, and zero Lifetime VIP access/i, 'Missing no-entitlement-before-Apple-completion rule.');
requireMatch(gate, /declined.*no successful transaction/is, 'Missing Ask to Buy decline handling.');
requireMatch(gate, /not classify a declined Ask to Buy request as fraud/i, 'Missing Ask to Buy anti-false-fraud safeguard.');
requireMatch(gate, /purchase approval settings apply only to purchases made through Google Play's billing system/i, 'Missing Google Play approval scope rule.');
requireMatch(gate, /Google family approval covers a separate Xsolla web-shop transaction/i, 'Missing Google-versus-Xsolla approval separation.');
requireMatch(gate, /Flexible Refund Policy/i, 'Missing Xsolla transaction-specific minor-purchase refund reference.');
requireMatch(gate, /not promise that every Xsolla purchase by a minor is refundable/i, 'Missing Xsolla no-blanket-refund safeguard.');
requireMatch(gate, /consumer vulnerabilities, particularly children/i, 'Missing EU child-vulnerability purchase-design gate.');
requireMatch(gate, /Do not repeatedly nag a child/i, 'Missing anti-pressure safeguard for parental purchase approval.');
requireMatch(gate, /Do not wipe the entire account balance/i, 'Missing transaction-specific entitlement correction safeguard.');
requireMatch(gate, /Purchased Diamonds tied to the affected transaction/i, 'Missing purchased-Diamond transaction isolation.');
requireMatch(gate, /30-Day VIP transaction/i, 'Missing 30-Day VIP transaction-specific correction.');
requireMatch(gate, /Lifetime VIP transaction/i, 'Missing Lifetime VIP transaction-specific correction.');
requireMatch(gate, /parent disputing a purchase is not.*proof.*fraud/is, 'Missing anti-false-fraud rule for parent disputes.');
requireMatch(gate, /minimum evidence reasonably needed/i, 'Missing child/guardian data-minimization rule.');
requireMatch(gate, /all 25 locales/i, 'Missing localization reopening trigger.');

for (const [name, text] of [
  ['minor-purchase gate', gate],
  ['canonical Terms', terms],
  ['canonical Purchases policy', purchases],
  ['canonical Privacy policy', privacy],
]) {
  if (/TyconX/.test(text)) errors.push(`Displayed brand typo TyconX found in ${name}.`);
  if (/\bbeta\b/i.test(text)) errors.push(`Stale beta wording found in ${name}.`);
}

requireMatch(terms, /Where age, parental authorization, or other eligibility requirements apply under local law or platform rules/i, 'Canonical Terms lost age/parental-authorization safeguard.');
requireMatch(terms, /Purchased Diamonds do not expire solely because time passes/i, 'Canonical Terms lost purchased-Diamond persistence rule.');
requireMatch(terms, /one-time, non-renewing digital entitlement/i, 'Canonical Terms lost one-time 30-Day VIP distinction.');
requireMatch(terms, /Lifetime VIP.*limited promotional sales windows/is, 'Canonical Terms lost limited-window Lifetime VIP rule.');
requireMatch(terms, /Mandatory consumer remedies remain unaffected/i, 'Canonical Terms lost mandatory consumer-remedy safeguard.');
requireMatch(purchases, /Apple App Store|Apple/i, 'Canonical Purchases policy lost Apple channel coverage.');
requireMatch(purchases, /Google Play/i, 'Canonical Purchases policy lost Google Play channel coverage.');
requireMatch(purchases, /Xsolla/i, 'Canonical Purchases policy lost Xsolla channel coverage.');
requireMatch(privacy, /age|parental/i, 'Canonical Privacy policy lost age/parental data context.');

console.log('TycoonX German minor purchase QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: German minor-contract, parental-approval, child-vulnerability and transaction-specific entitlement safeguards are present.');
}
