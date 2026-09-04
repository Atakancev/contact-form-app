import fs from 'node:fs';

const read = (path) => fs.readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

const gate = read('TYCOONX_GERMAN_312K_CANCELLATION_BUTTON_RELEASE_GATE.md');
const terms = read('tyconx-terms-of-service.md');
const purchases = read('tyconx-purchase-refund-policy.md');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const errors = [];
const requireMatch = (text, regex, message) => {
  if (!regex.test(text)) errors.push(message);
};

// Current German § 312k scope and BGH one-time-payment rule.
requireMatch(gate, /BGB § 312k/i, 'Missing German BGB § 312k classification gate.');
requireMatch(gate, /Dauerschuldverhältnis/i, 'Missing continuing-obligation classification.');
requireMatch(gate, /May 22, 2025.*I ZR 161\/24/is, 'Missing BGH I ZR 161/24 checkpoint.');
requireMatch(gate, /single one-time fee/is, 'Missing one-time-fee safeguard.');
requireMatch(gate, /automatically ends after the agreed fixed term/is, 'Missing automatic-expiry safeguard.');
requireMatch(gate, /One-time 30-Day VIP.*P0 classification issue/is, 'Missing 30-Day VIP § 312k classification.');
requireMatch(gate, /Lifetime VIP.*P0 classification issue/is, 'Missing Lifetime VIP § 312k classification.');
requireMatch(gate, /Diamonds.*not automatically the same type of continuing obligation/is, 'Missing Diamond/continuing-contract separation.');

// Statutory implementation details.
requireMatch(gate, /§ 312k\(6\).*at any time and without observing a notice period/is, 'Missing § 312k(6) consequence.');
requireMatch(gate, /Verträge hier kündigen/i, 'Missing initial statutory cancellation-control wording.');
requireMatch(gate, /continuously available/i, 'Missing continuous-availability rule.');
requireMatch(gate, /immediate and easy to access/i, 'Missing direct/easy-access rule.');
requireMatch(gate, /without requiring a prior account login/i, 'Missing conservative logged-out access safeguard.');
requireMatch(gate, /do not make a \*\*reason\*\* mandatory for an ordinary cancellation/i, 'Missing ordinary-cancellation reason safeguard.');
requireMatch(gate, /§ 312k\(5\).*earliest possible time/is, 'Missing omitted-date earliest-time rule.');
requireMatch(gate, /jetzt kündigen/i, 'Missing final statutory confirmation-control wording.');
requireMatch(gate, /§ 312k\(3\)-\(4\)/i, 'Missing durable-record/immediate-confirmation checkpoint.');
requireMatch(gate, /date and time it was received/i, 'Missing receipt timestamp confirmation requirement.');
requireMatch(gate, /time at which the contract is intended to end/i, 'Missing contractual end-time confirmation requirement.');

// July 2026 BGH confirmation-page hardening.
requireMatch(gate, /July 16, 2026.*I ZR 200\/25/is, 'Missing BGH I ZR 200/25 checkpoint.');
requireMatch(gate, /content of the § 312k confirmation page is exhaustively defined/i, 'Missing function-only confirmation-page rule.');
requireMatch(gate, /pause VIP.*keep VIP/is, 'Missing TycoonX retention-offer example safeguard.');
requireMatch(gate, /extra Diamonds or a coupon for staying/i, 'Missing Diamond retention-offer safeguard.');
requireMatch(gate, /Lifetime VIP upsell/i, 'Missing Lifetime VIP upsell safeguard.');
requireMatch(gate, /Do not attempt to cure this by making the retention offer visually small or non-blocking/i, 'Missing anti-dark-pattern safeguard.');

// Keep cancellation legally separate from other consumer/payment actions.
requireMatch(gate, /not the same as:[\s\S]*German\/EU withdrawal right/is, 'Missing withdrawal/cancellation separation.');
requireMatch(gate, /not the same as:[\s\S]*Apple or Google refund request/is, 'Missing platform-refund separation.');
requireMatch(gate, /not the same as:[\s\S]*Xsolla refund request/is, 'Missing Xsolla-refund separation.');
requireMatch(gate, /not the same as:[\s\S]*TycoonX account deletion/is, 'Missing account-deletion separation.');
requireMatch(gate, /cancellation submission is not automatically a refund/i, 'Missing cancellation/refund non-equivalence.');
requireMatch(gate, /must not erase unrelated legitimately purchased Diamonds/i, 'Missing unrelated-Diamond isolation.');
requireMatch(gate, /does not restart or duplicate the 30-Day VIP clock/i, 'Missing 30-Day VIP idempotency rule.');
requireMatch(gate, /does not expire or downgrade Lifetime VIP unless the contract actually ends/is, 'Missing Lifetime VIP cancellation isolation.');

// Merchant/provider mapping must remain transaction-specific.
requireMatch(gate, /Xsolla.*Merchant of Record/is, 'Missing Xsolla Merchant-of-Record checkpoint.');
requireMatch(gate, /not a substitute for a contract map/i, 'Missing Xsolla/CK-Labs contract-map safeguard.');
requireMatch(gate, /Apple App Store and Google Play/is, 'Missing Apple/Google channel separation.');
requireMatch(gate, /native Apple App Store or Google Play purchase.*must not be mechanically treated as a CK-Labs website transaction/is, 'Missing native-store/web-contract separation.');
requireMatch(gate, /production § 312k compliance remains \*\*unverified\*\*/i, 'Missing production-parity limitation.');

// Canonical paid-product meaning remains unchanged.
requireMatch(terms, /## 4\. One-time 30-Day VIP/i, 'Canonical Terms lost 30-Day VIP section.');
requireMatch(terms, /one-time, non-renewing digital entitlement/i, 'Canonical 30-Day VIP non-renewal rule missing.');
requireMatch(terms, /## 5\. Limited-time Lifetime VIP/i, 'Canonical Terms lost Lifetime VIP section.');
requireMatch(terms, /limited promotional sales windows/i, 'Canonical Lifetime VIP sales-window rule missing.');
requireMatch(terms, /commercial operating lifetime of the TycoonX Service/i, 'Canonical Lifetime VIP commercial-lifetime rule missing.');
requireMatch(terms, /Purchased Diamonds do not expire solely because time passes/i, 'Canonical purchased-Diamond invariant missing.');
requireMatch(terms, /Nothing in these Terms excludes, limits, or overrides rights that cannot legally be excluded or limited/i, 'Canonical non-waiver safeguard missing.');
requireMatch(purchases, /does not reduce any rights that cannot legally be waived/i, 'Purchases policy mandatory-rights safeguard missing.');

// Localization and release invariants.
requireMatch(progress, /25\/25.*target locales/is, 'Localized hub completion invariant missing.');
requireMatch(progress, /100\/100 localized full documents are currently confirmed current/i, 'Localized full-document completion invariant missing.');
requireMatch(progress, /Exact next unfinished locale\/document: None/i, 'Localization queue is unexpectedly open.');
requireMatch(progress, /full release on \*\*September 1, 2026\*\*/i, 'Full-release invariant missing.');

const legacyBrand = ['Ty', 'conX'].join('');
for (const [name, text] of [
  ['German § 312k gate', gate],
  ['canonical Terms', terms],
  ['Purchases & Refunds', purchases],
]) {
  if (text.includes(legacyBrand)) errors.push(`Legacy displayed game-brand spelling found in ${name}.`);
  if (/\bTycoonX\s+(?:is|remains|currently|still)\s+(?:in\s+)?beta\b/i.test(text)) {
    errors.push(`Stale live-service beta wording found in ${name}.`);
  }
}

if (errors.length) {
  console.error('FAIL: TycoonX German BGB § 312k cancellation-button safeguards are incomplete.');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: German § 312k scope, one-time VIP, confirmation-page, evidence, merchant, entitlement, mandatory-rights, brand, release, and localization safeguards are present.');
}
