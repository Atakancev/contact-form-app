import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8');
}

function assertIncludes(text, needle, label) {
  if (!text.includes(needle)) {
    throw new Error(`Missing ${label}: ${needle}`);
  }
}

function assertNotIncludes(text, needle, label) {
  if (text.includes(needle)) {
    throw new Error(`Forbidden ${label}: ${needle}`);
  }
}

const gate = read('TYCOONX_EU_VAT_TAX_MERCHANT_RELEASE_GATE.md');
const terms = read('tyconx-terms-of-service.md');
const purchases = read('tyconx-purchase-refund-policy.md');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

for (const [needle, label] of [
  ['# TycoonX EU VAT, Tax & Merchant Responsibility Release Gate', 'gate title'],
  ['Apple App Store purchases and alternative payments are different tax paths', 'Apple channel separation'],
  ['Google Play Billing and alternative billing are different VAT paths', 'Google channel separation'],
  ['Xsolla merchant-of-record status must be verified for the actual TycoonX project', 'Xsolla MoR verification'],
  ['Article 58', 'EU VAT Article 58'],
  ['Article 59c', 'EU VAT Article 59c'],
  ['One Stop Shop', 'OSS checkpoint'],
  ['No double VAT, no double refund, no double entitlement correction', 'double-tax protection'],
  ['Tax and FX changes affect future prices, not completed one-time purchases', 'future price treatment'],
  ['German e-invoicing rules must not be misapplied to consumers', 'German B2B e-invoice separation'],
  ['private end consumers are not affected', 'German consumer e-invoice checkpoint'],
  ['ViDA is a monitoring item, not a reason to invent 2026 duties', 'ViDA phased compliance'],
  ['October 1, 2026', 'Apple EU transition date'],
  ['Diamonds', 'Diamonds distinction'],
  ['one-time 30-Day VIP', '30-Day VIP distinction'],
  ['Lifetime VIP', 'Lifetime VIP distinction'],
  ['limited-window offer', 'Lifetime VIP limited-window invariant'],
  ['mandatory consumer rights', 'consumer-rights preservation'],
]) {
  assertIncludes(gate, needle, label);
}

assertNotIncludes(gate, 'TyconX', 'displayed misspelling');
assertNotIncludes(gate.toLowerCase(), ' beta', 'stale live-service status');

for (const [needle, label] of [
  ['Apple App Store In-App Purchase', 'canonical Apple channel'],
  ['Google Play', 'canonical Google channel'],
  ['official TycoonX web shop using Xsolla', 'canonical Xsolla channel'],
  ['taxes, VAT, foreign-exchange movements', 'canonical tax/FX pricing protection'],
  ['The final total price and currency displayed by the applicable checkout before confirmation govern that transaction', 'canonical final-price rule'],
  ['A completed one-time purchase is not retroactively repriced', 'canonical non-retroactivity'],
]) {
  assertIncludes(terms, needle, label);
}

for (const [needle, label] of [
  ['The payment provider, merchant of record, refund process, taxes, and consumer rights applicable to a specific transaction may differ by channel and country.', 'purchase-policy merchant-role rule'],
  ['an Xsolla group company may act as merchant of record', 'purchase-policy Xsolla qualification'],
  ['Mandatory taxes and unavoidable price components are displayed as required by applicable law.', 'purchase-policy total-price rule'],
  ['A completed one-time purchase is not retroactively repriced', 'purchase-policy non-retroactivity'],
  ['CK-Labs will not use these corrections to remove unrelated legitimately purchased value', 'purchase-policy entitlement isolation'],
]) {
  assertIncludes(purchases, needle, label);
}

for (const [needle, label] of [
  ['Full hubs: **25/25**', 'localized hub completion'],
  ['Full localized docs: **100/100**', 'localized document completion'],
  ['Exact next unfinished locale/document: **None.', 'no unfinished localization'],
]) {
  assertIncludes(progress, needle, label);
}

console.log('TycoonX EU VAT/tax merchant release gate verification passed.');
