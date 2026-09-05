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

const gate = read('TYCOONX_GENUINE_TRANSACTION_ENFORCEMENT_RELEASE_GATE.md');
const terms = read('tyconx-terms-of-service.md');
const localized = read('app/tycoonx-legal/TransferRuleNotice.tsx');
const economyGate = read('TYCOONX_GAME_ECONOMY_RESET_CORRECTION_RELEASE_GATE.md');
const accountGate = read('TYCOONX_ACCOUNT_SUSPENSION_COMPROMISE_TERMINATION_RELEASE_GATE.md');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

requireText(gate, 'Last reviewed: September 5, 2026', 'review date');
requireText(gate, 'does **not** create a new player-facing prohibition', 'source hierarchy');
requireText(gate, 'Apply the genuine-purpose test', 'genuine-purpose test');
requireText(gate, 'Art:', 'art rule');
requireText(gate, 'buyer must genuinely want to acquire the artwork', 'art-purpose requirement');
requireText(gate, "TycoonX's designated Begging screen or feature", 'Begging route');
requireText(gate, 'real primary or main purpose', 'primary-purpose test');
requireText(gate, 'A high price is a signal, not proof', 'high-price safeguard');
requireText(gate, 'Require reasonable evidence of the prohibited purpose', 'reasonable-evidence standard');
requireText(gate, 'Shared IP address, household, device family, geography, friendship, company membership, or a single transaction is not by itself proof', 'account-linkage safeguard');
requireText(gate, 'Separate detection, containment, correction, and punishment', 'decision separation');
requireText(gate, 'Automated systems may flag, but should not silently decide the whole case', 'automation safeguard');
requireText(gate, 'GDPR Article 22', 'GDPR Article 22');
requireText(gate, 'human intervention', 'human intervention');
requireText(gate, 'contest the decision', 'contest right');
requireText(gate, 'Digital Services Act Article 17', 'DSA Article 17');
requireText(gate, 'BGB § 307', 'German standard-terms safeguard');
requireText(gate, 'Account compromise changes the enforcement analysis', 'account-compromise separation');
requireText(gate, 'Exploit-generated or invalid value follows the economy-correction gate', 'economy correction routing');
requireText(gate, 'Paid entitlements remain isolated from gameplay-transfer enforcement', 'paid-value isolation');
requireText(gate, '**Purchased Diamonds do not expire solely because time passes.**', 'Diamond invariant');
requireText(gate, '**30-Day VIP is a one-time, non-renewing 30-day entitlement.**', '30-Day VIP invariant');
requireText(gate, '**Lifetime VIP is a one-time promotional entitlement available only during selected genuine sales windows.**', 'Lifetime VIP invariant');
requireText(gate, 'may never return', 'Lifetime VIP future availability');
requireText(gate, 'Apple, Google Play, and Xsolla records prove payment facts, not gameplay intent', 'provider-role separation');
requireText(gate, 'does **not** create a broader standalone real-money-trading prohibition', 'no hidden RMT expansion');
requireText(gate, 'Do not punish retroactively solely under the September 5 rule', 'non-retroactivity safeguard');
requireText(gate, 'A gameplay correction is not a real-world debt', 'no real-world debt');
requireText(gate, 'Regression scenarios', 'regression scenarios');
requireText(gate, 'Proper Begging use', 'Begging regression scenario');
requireText(gate, 'Automated score 0.99', 'automation regression scenario');
requireText(gate, 'Pre-September 5 assistance transaction', 'retroactivity regression scenario');

requireText(terms, '**Genuine transactions and player-to-player wealth transfers.**', 'canonical transfer rule');
requireText(terms, 'Buying art mainly to send money to the artist or financially help that player is not permitted', 'canonical art rule');
requireText(terms, 'A high price, generous deal, or unusual transaction is not automatically a violation', 'canonical proportionality safeguard');
requireText(terms, 'use TycoonX’s designated **Begging** screen or feature', 'canonical Begging route');
requireText(localized, "en: {", 'localized rule component');
requireText(localized, "locale === 'ar'", 'Arabic RTL handling');
requireText(economyGate, 'Correction and punishment are separate decisions', 'economy gate integration');
requireText(accountGate, 'A security freeze, a moderation action, a payment-risk hold, and a final contractual termination are different decisions', 'account gate integration');
requireText(progress, 'September 5, 2026 genuine-transaction and money-transfer invariant', 'progress transfer invariant');
requireText(progress, '100/100, **100%**', 'localized full-document completion');
requireText(progress, '25/25, **100%**', 'localized hub completion');
requireText(progress, '**Exact next unfinished locale/document: None.', 'closed localization queue');

forbidText(gate, 'TyconX', 'brand rule');
forbidText(gate, 'TycoonX beta', 'release-status rule');

if (!process.exitCode) {
  console.log('PASS: TycoonX genuine-transaction enforcement gate preserves evidence, proportionality, paid-value, compromise, provider, and localization boundaries.');
}
