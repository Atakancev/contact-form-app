import fs from 'node:fs';

const gatePath = 'TYCOONX_EU_GERMAN_SCA_3DS_PAYMENT_AUTHENTICATION_RELEASE_GATE.md';
const paymentGatePath = 'TYCOONX_PAYMENT_ENTITLEMENT_RELEASE_GATES.md';
const termsPath = 'tyconx-terms-of-service.md';
const purchasesPath = 'tyconx-purchase-refund-policy.md';
const privacyPath = 'tyconx-privacy-policy.md';
const progressPath = 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md';

const gate = fs.readFileSync(gatePath, 'utf8');
const paymentGate = fs.readFileSync(paymentGatePath, 'utf8');
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

// Core authentication-versus-payment-versus-entitlement separation.
requireText(gate, 'A payment-authentication challenge is not a completed purchase', 'SCA gate core invariant');
requireText(gate, 'a completed authentication challenge is not by itself authority to grant a TycoonX entitlement', 'SCA gate core invariant');
requireText(gate, 'browser redirect', 'client-state separation');
requireText(gate, 'client-side receipt display must not skip steps 4-6', 'client-state separation');
requireText(gate, 'only a verified state that the relevant provider recognizes as successfully completed may authorize paid entitlement delivery', 'authoritative payment state');
requireText(gate, 'freeze the risky write and reconcile', 'uncertain provider state');

// Current EU/German SCA baseline and future-law watch.
requireText(gate, 'Directive (EU) 2015/2366', 'PSD2 baseline');
requireText(gate, 'knowledge, possession, and inherence', 'SCA factors');
requireText(gate, 'Article 97', 'PSD2 Article 97');
requireText(gate, 'dynamically links the transaction to a specific amount and payee', 'dynamic linking');
requireText(gate, 'Commission Delegated Regulation (EU) 2018/389', 'SCA RTS');
requireText(gate, 'CK-Labs must not invent an exemption', 'SCA exemption responsibility');
requireText(gate, 'Deutsche Bundesbank', 'German payment guidance');
requireText(gate, 'proposed PSD3/Payment Services Regulation package is a future-law watch item', 'future payment-law status');
requireText(gate, 'Do not label the proposed replacement framework as already applicable TycoonX law', 'future law safeguard');

// Provider responsibility split.
requireText(gate, '### CK-Labs is responsible for', 'role split');
requireText(gate, 'not interfering with or bypassing provider-required authentication', 'CK-Labs role');
requireText(gate, 'Apple, Google, Xsolla, banks, issuers, acquirers, card networks, wallets', 'provider role split');
requireText(gate, "CK-Labs appear to control a bank's 3-D Secure decision", 'support responsibility accuracy');

// Xsolla 3-D Secure and embedded-flow safeguards.
requireText(gate, 'dynamic 3-D Secure 2.0', 'Xsolla 3DS');
requireText(gate, 'Do not grant because a 3-D Secure challenge itself reports completion', 'Xsolla 3DS authority');
requireText(gate, 'Verify Xsolla webhook authenticity', 'Xsolla webhook verification');
requireText(gate, 'Repeated redirects, repeated webhooks, page refreshes, and retry delivery must not duplicate an entitlement.', 'Xsolla idempotency');
requireText(gate, 'Content Security Policy', 'Xsolla CSP');
requireText(gate, 'independent window', 'Xsolla 3DS independent-window handling');
requireText(gate, 'the verification hold is not a TycoonX Diamond/VIP purchase', 'Xsolla verification hold isolation');

// Apple purchase states.
requireText(gate, 'Product.PurchaseResult.pending', 'Apple pending purchase');
requireText(gate, 'Do not grant for `userCancelled`.', 'Apple cancellation');
requireText(gate, 'unverified StoreKit transaction', 'Apple transaction verification');
requireText(gate, 'transaction-update/reconciliation path', 'Apple delayed completion');
requireText(gate, 'Apple Account password', 'Apple secret handling');

// Google purchase states and server verification.
requireText(gate, 'distinguish `PENDING` from `PURCHASED`', 'Google state separation');
requireText(gate, 'Never grant Diamonds or VIP while Google reports `PENDING`.', 'Google pending safeguard');
requireText(gate, 'Verify purchase state on the secure backend', 'Google backend verification');
requireText(gate, 'purchase token', 'Google idempotency identity');
requireText(gate, 'Do not acknowledge a purchase while it remains `PENDING`.', 'Google acknowledgement safeguard');

// Authentication failures cannot collapse into fraud enforcement.
requireText(gate, 'Authentication failure is not automatically fraud', 'fraud separation');
requireText(gate, 'failed or expired SCA challenges', 'fraud separation');
requireText(gate, 'travel, roaming, VPN use, or an IP-country mismatch', 'regional mismatch safeguard');
requireText(gate, 'legitimate unauthorized-payment claim after account/card compromise', 'account compromise safeguard');
requireText(gate, 'Deliberate payment fraud, forged receipts, manipulated clients', 'real abuse remains enforceable');

// Secrets and data minimization.
requireText(gate, 'Never collect player authentication secrets', 'secret collection ban');
requireText(gate, 'one-time password, TAN, SMS code', 'SCA secret handling');
requireText(gate, 'CVV/CVC', 'card secret handling');
requireText(gate, 'authentication recovery/backup code', 'recovery secret handling');
requireText(gate, 'provider transaction references and status metadata over storing authentication secrets', 'privacy minimization');

// Price/product/entitlement integrity.
requireText(gate, 'A payment-authentication step must never be used to substitute a different TycoonX product', 'order integrity');
requireText(gate, 'final consumer price and currency', 'price evidence');
requireText(gate, 'A later FX change, tax change, provider fee, or regional price change does not retroactively alter a completed transaction.', 'no retroactive repricing');
requireText(gate, 'Merchant/provider processing fees also do not reduce the number of Diamonds or VIP duration', 'entitlement amount isolation');

// Refund, chargeback, and mandatory-rights safeguards.
requireText(gate, 'not a TycoonX contractual waiver of refund, withdrawal, conformity, unauthorized-payment, or other mandatory rights', 'mandatory rights');
requireText(gate, 'Do not state that a player can never dispute a transaction merely because 3-D Secure', '3DS dispute safeguard');
requireText(gate, 'classify the actual case before imposing account punishment', 'chargeback/fraud classification');
requireText(gate, 'Do not confiscate unrelated purchased Diamonds', 'transaction-specific correction');

// 30-Day and Lifetime VIP isolation.
requireText(gate, 'A valid one-time 30-Day VIP begins according to the authoritative activation rule', '30-Day VIP activation');
requireText(gate, 'must not reset the original 30-Day VIP expiry', '30-Day VIP restore/auth isolation');
requireText(gate, 'One valid Lifetime VIP purchase produces one Lifetime VIP entitlement.', 'Lifetime VIP idempotency');
requireText(gate, 'Authentication failure on a new purchase does not remove an already-valid Lifetime VIP', 'existing entitlement isolation');

// Outage and migration behavior.
requireText(gate, 'do not grant from a client success state alone', 'outage payment safety');
requireText(gate, 'communicate a neutral pending/payment-verification message rather than accusing the player of fraud', 'outage messaging');
requireText(gate, 'Replacing Xsolla, adding another webshop processor', 'provider migration');
requireText(gate, 'Historic transactions remain associated with their actual provider', 'historical transaction provenance');

// Regression/evidence/current-law controls.
requireText(gate, '## 17. Mandatory regression scenarios', 'regression matrix');
requireText(gate, 'Apple StoreKit returns `.pending`', 'Apple regression');
requireText(gate, 'Google purchase changes from `PENDING` to `PURCHASED` while the app is closed', 'Google regression');
requireText(gate, 'Support requests a payment identifier for investigation without requesting OTP', 'support regression');
requireText(gate, 'Do not store authentication secrets as release evidence.', 'evidence minimization');
requireText(gate, 'Re-check the PSD3/Payment Services Regulation legislative status', 'future-law watch');
requireText(gate, 'does not reopen the completed localization queue', 'localization impact');

// Existing payment gate remains aligned.
requireText(paymentGate, 'Do not treat a browser return URL, client-side success message, or locally created order as final payment authority.', 'existing Xsolla authority');
requireText(paymentGate, 'Never grant Diamonds, 30-Day VIP, Lifetime VIP, or any other paid entitlement while Google reports the purchase as `PENDING`.', 'existing Google pending rule');
requireText(paymentGate, 'Pending/approval-style transactions must not grant paid value before Apple reports valid completion.', 'existing Apple pending rule');
requireText(paymentGate, 'Corrections must target invalid or duplicated value and must not confiscate unrelated legitimate purchases.', 'existing paid-value isolation');

// Canonical public documents already support this operational gate.
requireText(terms, 'Pending, failed, canceled, reversed, revoked, or refunded payments do not create a right to keep unsupported paid value', 'canonical Terms payment state');
requireText(terms, 'Authoritative server and provider records', 'canonical Terms authoritative records');
requireText(terms, 'Nothing in these Terms excludes, limits, or overrides rights that cannot legally be excluded or limited', 'canonical Terms mandatory rights');
requireText(terms, 'A genuine payment dispute or exercise of a mandatory consumer right is not automatically fraud or chargeback abuse.', 'canonical Terms dispute safeguard');

requireText(purchases, 'CK-Labs remains responsible for delivering the corresponding TycoonX entitlement after receiving valid confirmation of successful payment.', 'Purchases policy delivery authority');
requireText(purchases, 'Pending, failed, canceled, reversed, revoked, or refunded payments', 'Purchases policy payment states');
requireText(purchases, 'A genuine payment dispute or exercise of a mandatory consumer right is not automatically fraud or chargeback abuse.', 'Purchases policy dispute safeguard');
requireText(purchases, 'Mandatory consumer rights are not waived', 'Purchases policy mandatory rights');

requireText(privacy, 'We generally do not receive your full payment-card number from platform stores or payment processors.', 'Privacy card minimization');
requireText(privacy, 'purchase receipt, signed transaction information, validation token, or equivalent confirmation data', 'Privacy purchase verification data');
requireText(privacy, 'invalid purchase validations', 'Privacy fraud/security data');
requireText(privacy, 'withdraw consent', 'Privacy consent control');

// Localization and full-release status stay complete/current.
requireText(progress, '25/25', 'localization hubs');
requireText(progress, '100/100 localized full documents are currently confirmed current', 'localized documents');
requireText(progress, 'Exact next unfinished locale/document: None.', 'localization queue');
requireText(progress, 'September 1, 2026', 'full-release checkpoint');

// Displayed/internal legal prose branding and stale release wording.
forbidText(gate, 'TyconX', 'SCA gate brand spelling');
forbidText(gate.toLowerCase(), 'tycoonx beta', 'SCA gate release wording');
forbidText(gate.toLowerCase(), 'tycoonx is in beta', 'SCA gate release wording');

if (failures.length > 0) {
  console.error('TycoonX SCA / 3-D Secure payment-authentication verification failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX SCA / 3-D Secure payment-authentication invariants verified.');