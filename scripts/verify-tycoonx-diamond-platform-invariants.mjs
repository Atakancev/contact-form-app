import fs from 'node:fs';

const files = {
  gate: 'TYCOONX_DIAMONDS_APPLE_GOOGLE_XSOLLA_PLATFORM_RELEASE_GATE.md',
  terms: 'tyconx-terms-of-service.md',
  purchases: 'tyconx-purchase-refund-policy.md',
  progress: 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md',
};

const read = (path) => fs.readFileSync(path, 'utf8');
const gate = read(files.gate);
const terms = read(files.terms);
const purchases = read(files.purchases);
const progress = read(files.progress);

const failures = [];

function requireText(name, text, expected) {
  if (!text.includes(expected)) failures.push(`${name}: missing ${JSON.stringify(expected)}`);
}

function forbidText(name, text, forbidden) {
  if (text.includes(forbidden)) failures.push(`${name}: forbidden ${JSON.stringify(forbidden)}`);
}

// Gate identity and current-release state.
requireText('gate', gate, '# TycoonX Diamonds Apple, Google Play & Xsolla Platform Release Gate');
requireText('gate', gate, '**Review date:** September 4, 2026');
requireText('gate', gate, 'TycoonX has been in full release since September 1, 2026');

// Apple: paid currency non-expiry and consumable restoration separation.
requireText('gate', gate, 'credits or in-game currencies purchased through In-App Purchase may not expire');
requireText('gate', gate, 'Diamond packs are intended to be **consumable** In-App Purchases');
requireText('gate', gate, 'must not be duplicated merely because the user taps `Restore Purchases`');
requireText('gate', gate, 'restoring access to that same authoritative balance is not a new Diamond grant');
requireText('gate', gate, 'Never reclassify purchased Diamonds as `promotional` merely to impose an expiry');

// Google: title scope, authoritative PURCHASED state and consumable lifecycle.
requireText('gate', gate, 'in-app virtual currencies must only be used within the app or game title for which they were purchased');
requireText('gate', gate, 'confirm that the purchase is in the `PURCHASED` state, not merely `PENDING`');
requireText('gate', gate, 'consume the consumable purchase through the supported Google flow');
requireText('gate', gate, 'must be acknowledged within three days or the user is automatically refunded and the purchase is revoked');
requireText('gate', gate, 'The three-day window starts after a pending transaction reaches `PURCHASED`');
requireText('gate', gate, 'if multi-quantity purchasing is enabled for a Diamond product');
requireText('gate', gate, 'in-app pricing must match the user-facing Play billing interface');

// Xsolla: catalog/payment boundary and webhook idempotency.
requireText('gate', gate, 'a catalog item being `Available` does not mean it has been paid');
requireText('gate', gate, 'opening Pay Station does not grant Diamonds');
requireText('gate', gate, 'duplicate webhooks or status retries must remain idempotent');
requireText('gate', gate, 'provider capability is not permission to contradict the TycoonX contract');
requireText('gate', gate, '`hard currency` configuration that can be linked to a platform of purchase');

// Cross-provider founder protection and consumer-rights isolation.
requireText('gate', gate, 'Purchased, promotional, and gameplay-earned Diamond buckets');
requireText('gate', gate, 'A disputed Diamond purchase does not by itself prove that the legitimate TycoonX account owner committed fraud');
requireText('gate', gate, 'Economy changes do not authorize paid-currency confiscation');
requireText('gate', gate, 'no paid Diamond expiry caused solely by migration');
requireText('gate', gate, 'service shutdown cannot be used to erase mandatory refund, conformity, termination, price-reduction, damages, or other non-waivable remedies');

// VIP isolation must remain exact.
requireText('gate', gate, '**30-Day VIP** remains a one-time, non-renewing 30-day entitlement');
requireText('gate', gate, '**Lifetime VIP** remains a one-time promotional entitlement available only during selected genuine sales windows');
requireText('gate', gate, 'may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability');

// Canonical Terms parity.
requireText('terms', terms, '**Purchased Diamonds do not expire solely because time passes.**');
requireText('terms', terms, 'Promotional, gifted, event, test, review, compensation, or free Diamonds and benefits may have separately disclosed conditions');
requireText('terms', terms, 'purchased Diamonds are intended to be consumable In-App Purchases');
requireText('terms', terms, 'A product described as **30-Day VIP**, **30 Days VIP**, or similar is a one-time, non-renewing digital entitlement');
requireText('terms', terms, '**Lifetime VIP** is a one-time digital entitlement that may be offered only during **limited promotional sales windows** selected by CK-Labs');
requireText('terms', terms, 'Nothing in these Terms excludes, limits, or overrides rights that cannot legally be excluded or limited');

// Canonical Purchases policy parity.
requireText('purchases', purchases, 'Purchased Diamonds do not expire solely because time passes.');
requireText('purchases', purchases, 'On Apple platforms, purchased Diamonds are intended to be sold as consumable In-App Purchases.');
requireText('purchases', purchases, 'A Google Play purchase in a **PENDING** state does not create a TycoonX paid entitlement.');
requireText('purchases', purchases, 'The entitlement is granted only after Google reports a valid completed **PURCHASED** state');
requireText('purchases', purchases, 'Returning from checkout, displaying a client-side success message, or creating an order does not by itself require CK-Labs to grant paid value');
requireText('purchases', purchases, 'does not reduce any rights that cannot legally be waived');

// Localization tracker remains complete because this gate does not change canonical meaning.
requireText('progress', progress, '25/25');
requireText('progress', progress, '100/100');
requireText('progress', progress, 'Exact next unfinished locale/document: **None**');

// Brand/release invariants for newly added prose.
forbidText('gate', gate, 'TyconX');
forbidText('gate', gate, 'TycoonX beta');

if (failures.length) {
  console.error('TycoonX Diamond platform invariant verification FAILED');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX Diamond platform invariant verification PASSED');
console.log('Checked Apple non-expiry/consumable restoration, Google title scope/pending/consume, Xsolla authoritative delivery, Diamond provenance, migration, account compromise, VIP isolation, canonical wording, localization completion, and brand/release invariants.');
