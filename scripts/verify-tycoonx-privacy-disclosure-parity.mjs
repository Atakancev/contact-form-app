import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function read(rel) {
  return fs.readFileSync(path.join(root, rel), 'utf8');
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

const gate = read('TYCOONX_APPLE_GOOGLE_PRIVACY_DISCLOSURE_PARITY_RELEASE_GATE.md');
const privacy = read('tyconx-privacy-policy.md');
const terms = read('tyconx-terms-of-service.md');
const purchases = read('tyconx-purchase-refund-policy.md');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const gateChecks = [
  ['Review date: September 4, 2026', 'review date'],
  ['Five-layer privacy truth chain', 'privacy truth chain'],
  ['Platform labels are not a GDPR legal basis or consent', 'label/legal-basis separation'],
  ['third-party partners whose code is integrated into the app', 'Apple third-party SDK disclosure'],
  ['linked to the user under Apple\'s definition', 'Apple linked-data classification'],
  ['tracking under Apple\'s definition', 'Apple tracking classification'],
  ['Apple privacy manifests are a separate release artifact', 'Apple manifest separation'],
  ['Required Reason APIs', 'Apple Required Reason API controls'],
  ['third-party SDK manifests and signatures', 'Apple SDK manifest/signature controls'],
  ['Google Play Data safety is a separate taxonomy', 'Google taxonomy separation'],
  ['`collect` currently includes user data transmitted from the app off device', 'Google collection definition'],
  ['Google global declaration rule', 'Google global-form rule'],
  ['Google ephemeral processing is not the same as no processing', 'Google ephemeral processing rule'],
  ['Google `sharing` exceptions do not erase legal disclosure duties', 'Google sharing exception boundary'],
  ['Payment-provider and Xsolla boundary', 'payment/Xsolla privacy boundary'],
  ['TycoonX never accesses that payment information', 'Google direct payment exception condition'],
  ['transaction/order IDs, entitlement state, refund/chargeback state', 'payment data received by TycoonX'],
  ['Diamond balance and transaction ledger', 'Diamond privacy inventory'],
  ['30-Day VIP and Lifetime VIP entitlement state', 'VIP privacy inventory'],
  ['one-time, non-renewing 30-Day VIP', '30-Day VIP invariant'],
  ['selected genuine sales windows', 'Lifetime VIP sales-window invariant'],
  ['may never return', 'Lifetime VIP availability invariant'],
  ['Account compromise and security logs', 'account compromise controls'],
  ['Old and unsupported app versions', 'old-version privacy handling'],
  ['Provider outage or rule change', 'provider continuity handling'],
  ['Release evidence packet', 'privacy evidence packet'],
  ['Minimum regression scenarios', 'privacy regression scenarios'],
  ['Release blockers', 'privacy release blockers'],
  ['Current platform references reviewed September 4, 2026', 'source checkpoint'],
  ['does **not** change the current canonical Privacy Policy\'s material legal meaning', 'no canonical meaning change'],
];

for (const [needle, label] of gateChecks) {
  assertIncludes(gate, needle, label);
}

const privacyChecks = [
  ['## 1. Information We Process', 'Privacy data inventory'],
  ['### 1.3 Purchase and Entitlement Data', 'Privacy purchase data section'],
  ['We generally do not receive your full payment-card number from platform stores or payment processors.', 'Privacy full-card boundary'],
  ['### 1.4 Security, Fraud, and Abuse Data', 'Privacy security data section'],
  ['### 1.6 Usage and Analytics Data', 'Privacy analytics data section'],
  ['### 1.7 Information from Third Parties', 'Privacy third-party data section'],
  ['Apple App Store, Google Play, Xsolla', 'Privacy payment providers'],
  ['Service providers', 'Privacy service-provider disclosure'],
  ['Apple, Google, Xsolla, banks, card networks, and other payment participants may act as independent controllers', 'Privacy independent controller boundary'],
  ['## 7. International Transfers', 'Privacy transfers section'],
  ['## 8. Data Retention', 'Privacy retention section'],
  ['## 9. Your Privacy Rights', 'Privacy rights section'],
  ['## 10. Account Deletion and Paid Entitlements', 'Privacy account-deletion/entitlement separation'],
  ['## 11. Children and Age-Related Controls', 'Privacy age controls'],
  ['## 12. Security', 'Privacy security section'],
  ['## 13. Automated Security and Moderation', 'Privacy automated-system section'],
  ['## 15. Changes to This Privacy Policy', 'Privacy change-notice section'],
];

for (const [needle, label] of privacyChecks) {
  assertIncludes(privacy, needle, label);
}

assertIncludes(terms, 'Purchased Diamonds do not expire solely because time passes.', 'Terms purchased Diamond invariant');
assertIncludes(terms, 'one-time, non-renewing digital entitlement', 'Terms 30-Day VIP invariant');
assertIncludes(terms, 'limited promotional sales windows', 'Terms Lifetime VIP window invariant');
assertIncludes(terms, 'may choose never to offer Lifetime VIP again', 'Terms Lifetime VIP availability invariant');
assertIncludes(purchases, 'one-time, non-renewing entitlement', 'Purchases 30-Day VIP invariant');
assertIncludes(purchases, 'selected limited promotional sales windows', 'Purchases Lifetime VIP window invariant');

assertIncludes(progress, 'exists for all **25/25** target locales', 'localized hub completion');
assertIncludes(progress, '**100/100 localized full documents are currently confirmed current**', 'localized full-document completion');
assertIncludes(progress, '**Exact next unfinished locale/document: None.', 'no unfinished locale/document');
assertIncludes(progress, 'September 1, 2026', 'full-release invariant');

for (const [label, text] of [
  ['privacy parity gate', gate],
  ['canonical Privacy Policy', privacy],
  ['canonical Terms', terms],
  ['canonical Purchases policy', purchases],
]) {
  assertNotIncludes(text, 'TyconX', `${label} displayed brand typo`);
  assertNotIncludes(text, 'TycoonX beta', `${label} stale live beta wording`);
}

console.log('TycoonX Apple/Google privacy disclosure parity verification passed.');
