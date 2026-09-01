import fs from 'node:fs';

const gatePath = 'TYCOONX_MINOR_PURCHASE_PARENTAL_AUTHORIZATION_RELEASE_GATE.md';
const termsPath = 'tyconx-terms-of-service.md';
const purchasesPath = 'tyconx-purchase-refund-policy.md';
const privacyPath = 'tyconx-privacy-policy.md';
const progressPath = 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md';

const gate = fs.readFileSync(gatePath, 'utf8');
const terms = fs.readFileSync(termsPath, 'utf8');
const purchases = fs.readFileSync(purchasesPath, 'utf8');
const privacy = fs.readFileSync(privacyPath, 'utf8');
const progress = fs.readFileSync(progressPath, 'utf8');

const failures = [];

function requireText(haystack, needle, label) {
  if (!haystack.includes(needle)) failures.push(`${label}: missing ${JSON.stringify(needle)}`);
}

function forbidText(haystack, needle, label) {
  if (haystack.includes(needle)) failures.push(`${label}: forbidden ${JSON.stringify(needle)}`);
}

// Core transaction-specific authorization model.
requireText(gate, 'transaction-specific authorization question', 'core minor purchase invariant');
requireText(gate, 'minor account = every purchase invalid', 'invalid shortcut guard');
requireText(gate, 'parent later disputes payment = child committed fraud', 'fraud shortcut guard');
requireText(gate, 'parent once approved a purchase = all future purchases approved', 'future-authorization guard');
requireText(gate, 'family payment method = unlimited authorization', 'family payment guard');
requireText(gate, 'Google Family Link approval = authorization for an Xsolla web purchase', 'cross-channel approval guard');

// German contractual-capacity baseline.
requireText(gate, 'BGB § 2', 'German majority rule');
requireText(gate, 'BGB § 104', 'German incapacity rule');
requireText(gate, 'BGB § 107', 'German representative consent rule');
requireText(gate, 'BGB § 108', 'German later approval rule');
requireText(gate, 'BGB § 110', 'German own-means rule');
requireText(gate, 'must not be treated as merely legally advantageous', 'paid purchase legal-advantage safeguard');
requireText(gate, 'Do not turn § 110 into a blanket statement', 'pocket-money overstatement guard');
requireText(gate, 'do not promise parents that every purchase by anyone under 18 is automatically void', 'minor contract overstatement guard');

// Purchase authorization and privacy consent stay separate.
requireText(gate, 'Purchase authorization is separate from privacy consent', 'privacy/contract separation');
requireText(gate, 'GDPR Article 8', 'GDPR child consent');
requireText(gate, 'purchase approval automatically authorizes optional analytics', 'privacy consent isolation');
requireText(gate, 'privacy consent automatically authorizes a Diamond or VIP purchase', 'purchase consent isolation');
requireText(gate, 'store age rating automatically proves the person can conclude every paid contract independently', 'age-rating capacity guard');
requireText(gate, 'minimum age, age-range, parental-authorization, transaction, and account-linkage information', 'child data minimization');

// Apple Ask to Buy.
requireText(gate, 'Apple App Store and Ask to Buy', 'Apple section');
requireText(gate, 'Treat a provider-confirmed Ask to Buy approval as transaction-specific evidence', 'Apple approval evidence');
requireText(gate, 'Do not reuse one approval as consent for later Diamond bundles', 'Apple approval isolation');
requireText(gate, 'Do not grant paid TycoonX value merely because an approval request exists.', 'Apple pending approval guard');
requireText(gate, 'A declined or unanswered Ask to Buy request does not create an entitlement.', 'Apple declined approval');
requireText(gate, 'age/availability varies by country or region', 'Apple age variability');

// Google Play / Family Link scope.
requireText(gate, 'Google Play, Family Link, and purchase approvals', 'Google section');
requireText(gate, "Google Play purchase approvals apply to purchases made through Google Play's billing system", 'Google approval scope');
requireText(gate, 'must not be treated as approval for an Xsolla checkout', 'Google to Xsolla isolation');
requireText(gate, 'family payment method must not be treated as unlimited authority', 'Google family-payment guard');
requireText(gate, 'authoritative Google `PURCHASED` state', 'Google purchase authority');
requireText(gate, 'a pending approval request or `PENDING` purchase grants no Diamonds or VIP', 'Google pending safeguard');
requireText(gate, 'purchase token/order evidence', 'Google transaction provenance');

// Xsolla minor / parental-control behavior.
requireText(gate, 'Xsolla web-shop minors and parental controls', 'Xsolla section');
requireText(gate, 'knowledge and consent of a parent or legal guardian', 'Xsolla minor baseline');
requireText(gate, 'Verify which parental-control or age-gating features are **actually enabled for the CK-Labs Xsolla project**', 'Xsolla live configuration check');
requireText(gate, 'disable or block the affected checkout rather than inventing consent', 'Xsolla missing authorization safeguard');
requireText(gate, 'Google Family Link or Apple Ask to Buy must not be presented as authorization for Xsolla.', 'Xsolla cross-channel guard');
requireText(gate, 'government-ID image', 'support sensitive-data guard');
requireText(gate, 'should not unnecessarily duplicate that identity-verification dataset', 'Xsolla data minimization');

// Child-focused marketing and virtual-currency vulnerability.
requireText(gate, 'Point 28 of Annex I to Directive 2005/29/EC', 'UCPD direct exhortation rule');
requireText(gate, 'direct exhortation to children to buy advertised products or to persuade parents or other adults to buy them', 'direct exhortation substance');
requireText(gate, 'Ask your parents to buy Lifetime VIP for you!', 'direct exhortation regression example');
requireText(gate, 'This is not a ban on every advertisement that a minor might happen to see.', 'marketing overbreadth guard');
requireText(gate, "European Commission's 2025 CPC Network Key Principles", 'CPC virtual currency children safeguard');
requireText(gate, 'vulnerable group', 'child vulnerability');

// Dispute and enforcement separation.
requireText(gate, 'Minor purchase disputes are not automatically fraud', 'minor dispute classification');
requireText(gate, 'Do not automatically label the child, parent, or account fraudulent', 'fraud presumption guard');
requireText(gate, 'Deliberate fraud, forged evidence, manipulated clients, coordinated refund cycling', 'real abuse enforceability');
requireText(gate, 'payment correction and account enforcement are recorded separately', 'payment/enforcement separation');

// Refund and entitlement isolation.
requireText(gate, 'specific corresponding entitlement or purchased value', 'transaction-specific correction');
requireText(gate, 'Do not remove unrelated legitimately purchased value', 'unrelated purchase isolation');
requireText(gate, 'does not automatically cancel Lifetime VIP bought separately', '30-Day/Lifetime separation');
requireText(gate, 'does not automatically invalidate an unrelated still-valid 30-Day VIP', 'Lifetime/30-Day separation');
requireText(gate, 'does not authorize CK-Labs to create a new real-world debt', 'real-world debt guard');
requireText(gate, 'without specific lawful basis and legal review', 'minor negative-balance safeguard');

// Product invariants.
requireText(gate, 'remains one-time and non-renewing', '30-Day VIP one-time invariant');
requireText(gate, 'does not restart the original entitlement unless it belongs to a separate valid later purchase', '30-Day VIP clock invariant');
requireText(gate, 'remains a one-time entitlement sold only during selected genuine sales windows', 'Lifetime VIP limited-window invariant');
requireText(gate, 'one valid purchase still produces one Lifetime VIP entitlement', 'Lifetime VIP idempotency');
requireText(gate, 'Do not use the Diamond layer to obscure the real cost', 'Diamond price transparency');
requireText(gate, 'must not deliberately route around them merely to increase conversion', 'parental-control bypass guard');

// Historical state and evidence.
requireText(gate, "Do not rewrite old transaction authorization history merely because the account's current age status changed.", 'historical authorization continuity');
requireText(gate, 'provider transaction/order/purchase-token reference', 'provider evidence');
requireText(gate, 'OTP/TAN/SMS/authenticator codes', 'secret minimization');
requireText(gate, 'full government-ID copies merely because a minor-related purchase was reviewed', 'identity document minimization');
requireText(gate, 'prefer provider status/reference evidence over copying the verification document', 'provider evidence preference');

// Support and regression coverage.
requireText(gate, '## 14. Support decision tree', 'support workflow');
requireText(gate, 'Determine whether the dispute is authorization, account compromise, duplicate billing, product delivery, withdrawal/refund, conformity, or suspected deliberate abuse.', 'support classification');
requireText(gate, 'Preserve unrelated legitimate purchases.', 'support isolation');
requireText(gate, '## 15. Mandatory regression scenarios', 'regression matrix');
requireText(gate, 'Google Family Link is enabled but the player opens an Xsolla checkout', 'cross-channel regression');
requireText(gate, 'child-directed promotion says "ask your parents to buy"', 'direct-exhortation regression');
requireText(gate, 'Support investigates a minor purchase without requesting passwords, CVV, OTP, or full card data.', 'support security regression');

// Current-source watch and localization impact.
requireText(gate, 'German BGB §§ 2, 104, 107, 108 and 110', 'law watchlist');
requireText(gate, 'Do not hard-code a provider age threshold', 'provider age watch');
requireText(gate, 'does not reopen the completed localization queue', 'localization impact');
requireText(gate, 'References checked September 1, 2026', 'current research date');

// Canonical documents already support this gate without material wording change.
requireText(terms, 'Where age, parental authorization, or other eligibility requirements apply under local law or platform rules', 'canonical Terms age/authorization rule');
requireText(terms, 'Nothing in these Terms excludes, limits, or overrides rights that cannot legally be excluded or limited', 'canonical mandatory rights');
requireText(terms, 'If a payment is refunded, reversed, cancelled, charged back, or found invalid after value has been credited', 'canonical transaction correction');
requireText(terms, 'without limiting genuine fraud reporting or consumer rights', 'canonical chargeback safeguard');

requireText(purchases, 'CK-Labs remains responsible for delivering the corresponding TycoonX entitlement after receiving valid confirmation of successful payment.', 'Purchases provider confirmation rule');
requireText(purchases, 'CK-Labs will not use these corrections to remove unrelated legitimately purchased value', 'Purchases unrelated-value isolation');
requireText(purchases, 'Users should promptly report suspected unauthorized purchases', 'Purchases unauthorized-payment route');
requireText(purchases, 'Nothing in this Policy excludes statutory rights that cannot legally be waived.', 'Purchases mandatory rights');

requireText(privacy, '## 11. Children and Age-Related Controls', 'Privacy children section');
requireText(privacy, 'Where parental consent is legally required, the Service should not be used without the required authorization.', 'Privacy parental authorization');
requireText(privacy, 'limited age, age-range, parental-authorization, or platform age-control information', 'Privacy age-data minimization');
requireText(privacy, 'Merely using TycoonX is not treated as consent to processing that requires consent', 'Privacy consent separation');

// Localization completion and release status remain unchanged.
requireText(progress, '25/25', 'localized hubs');
requireText(progress, '100/100 localized full documents are currently confirmed current', 'localized full documents');
requireText(progress, 'Exact next unfinished locale/document: None.', 'localization queue');
requireText(progress, 'September 1, 2026', 'full-release status');

// Player-facing/legal prose brand and stale-release safeguards.
forbidText(gate, 'TyconX', 'minor purchase gate brand spelling');
forbidText(gate.toLowerCase(), 'tycoonx beta', 'minor purchase gate stale release wording');
forbidText(gate.toLowerCase(), 'tycoonx is in beta', 'minor purchase gate stale release wording');

if (failures.length > 0) {
  console.error('TycoonX minor purchase / parental authorization verification failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX minor purchase / parental authorization invariants verified.');
