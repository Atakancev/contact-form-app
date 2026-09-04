import fs from 'node:fs';

const files = {
  gate: 'TYCOONX_GERMAN_WITHDRAWAL_DIGITAL_CONTENT_SERVICE_VALUE_RELEASE_GATE.md',
  checkout: 'TYCOONX_GERMAN_ECOMMERCE_CHECKOUT_RELEASE_GATE.md',
  terms: 'tyconx-terms-of-service.md',
  purchases: 'tyconx-purchase-refund-policy.md',
  progress: 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md',
};

const text = Object.fromEntries(
  Object.entries(files).map(([key, path]) => [key, fs.readFileSync(path, 'utf8')]),
);

const failures = [];
const requireText = (key, needle, label = needle) => {
  if (!text[key].includes(needle)) failures.push(`${files[key]} missing: ${label}`);
};

// Current German-law classification and early-expiry controls.
requireText('gate', 'BGB § 356(4)', 'current paid-service early-expiry rule');
requireText('gate', 'BGB § 356(5)', 'current non-tangible digital-content early-expiry rule');
requireText('gate', 'BGB § 357a(2)', 'paid-service value-compensation rule');
requireText('gate', 'BGB § 357a(3)', 'no digital-content value compensation');
requireText('gate', 'BGB § 312f', 'contract-confirmation evidence');
requireText('gate', 'BGB § 327p', 'post-withdrawal digital-product consequences');
requireText('gate', 'starting performance does **not** by itself mean the withdrawal right has expired', 'service start is not full-performance expiry');
requireText('gate', 'there is no consumer value-compensation claim for withdrawn non-tangible digital content', 'digital-content no-Wertersatz boundary');
requireText('gate', 'preselected checkbox', 'no inferred/preselected consent');
requireText('gate', 'full-performance timestamp', 'full-performance evidence');

// TycoonX product invariants.
requireText('gate', 'purchased Diamonds do not expire solely because time passes', 'purchased-Diamond non-expiry');
requireText('gate', '30-Day VIP is a one-time, non-renewing 30-day entitlement', '30-Day VIP exact one-time/non-renewing model');
requireText('gate', 'Lifetime VIP is a one-time promotional entitlement offered only during selected genuine sales windows', 'Lifetime VIP limited-window model');
requireText('gate', 'may be withdrawn from future sale, may never return', 'Lifetime VIP future-availability boundary');
requireText('gate', 'used Diamonds', 'spent-Diamond withdrawal handling');
requireText('gate', 'must not remove unrelated paid purchases', 'transaction-scoped Diamond unwind');

// Payment-channel and abuse boundaries.
for (const needle of ['Apple App Store', 'Google Play', 'Xsolla']) requireText('gate', needle);
requireText('gate', 'A withdrawal request, missing consent record, or successful statutory withdrawal is not fraud', 'withdrawal is not fraud');
requireText('gate', 'pending, failed, rejected, or unconfirmed payment', 'failed/pending payment separation');
requireText('gate', 'provider/platform refund', 'provider refund separated from statutory withdrawal');
requireText('gate', 'transaction-scoped and idempotent', 'idempotent transaction-scoped unwind');

// Existing German checkout gate must remain the general electronic-withdrawal control and use current subsection mapping.
requireText('checkout', 'BGB § 356a', 'electronic withdrawal function');
requireText('checkout', 'Vertrag widerrufen', 'first statutory withdrawal control');
requireText('checkout', 'Widerruf bestätigen', 'final statutory withdrawal control');
requireText('checkout', 'For a paid contract for non-physical digital content, current BGB § 356(5)', 'current digital-content subsection mapping');
requireText('checkout', 'For a paid service, current BGB § 356(4)', 'current service subsection mapping');
requireText('checkout', 'BGB § 357a(3) does not create a value-compensation claim for withdrawn non-tangible digital content', 'checkout gate no-Wertersatz cross-reference');
if (text.checkout.includes('For a paid contract for non-physical digital content, BGB § 356(6)')) {
  failures.push(`${files.checkout} contains stale digital-content subsection mapping`);
}
if (text.checkout.includes('For a paid service, BGB § 356(5)')) {
  failures.push(`${files.checkout} contains stale service subsection mapping`);
}

// Canonical legal invariants must remain unchanged unless localized documents are resynchronized.
requireText('terms', 'Purchased Diamonds do not expire solely because time passes.');
requireText('terms', 'one-time, non-renewing digital entitlement');
requireText('terms', 'limited promotional sales windows');
requireText('terms', 'may choose never to offer Lifetime VIP again');
requireText('terms', 'Nothing in these Terms excludes, limits, or overrides rights that cannot legally be excluded or limited');
requireText('purchases', 'does not reduce any rights that cannot legally be waived');
requireText('purchases', 'Apple App Store In-App Purchase');
requireText('purchases', 'Google Play');
requireText('purchases', 'powered by Xsolla');
requireText('purchases', '30-Day VIP is a **one-time, non-renewing entitlement**');
requireText('purchases', 'selected limited promotional sales windows');

// Localization/release invariants.
requireText('progress', '25/25');
requireText('progress', '100/100');
requireText('progress', 'Exact next unfinished locale/document');
requireText('progress', 'None');
requireText('progress', 'September 1, 2026');

// Enforce displayed brand spelling on legal/compliance prose. The internal progress tracker intentionally records the forbidden spelling as a QA rule, so it is excluded here.
const forbiddenBrand = ['Ty', 'conX'].join('');
for (const key of ['gate', 'checkout', 'terms', 'purchases']) {
  if (text[key].includes(forbiddenBrand)) failures.push(`${files[key]} contains forbidden displayed-brand spelling`);
}

// Do not regress to describing the live service as a beta.
const staleLiveBeta = /\bTycoonX\s+(?:is\s+)?(?:a\s+)?beta\b/i;
for (const key of ['gate', 'checkout', 'terms', 'purchases']) {
  if (staleLiveBeta.test(text[key])) failures.push(`${files[key]} contains stale live-service beta wording`);
}

if (failures.length) {
  console.error('TycoonX German withdrawal/value-compensation verification FAILED');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX German withdrawal/value-compensation verification PASS');
