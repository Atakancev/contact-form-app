#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_APPLE_FAMILY_SHARING_ENTITLEMENT_RELEASE_GATE.md');
const lifetimePath = path.join(ROOT, 'TYCOONX_LIFETIME_VIP_LIMITED_PROMOTIONAL_ENTITLEMENT_RELEASE_GATE.md');
const appleRefundPath = path.join(ROOT, 'TYCOONX_APPLE_REFUND_ENTITLEMENT_RELEASE_GATE.md');
const progressPath = path.join(ROOT, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const [gate, lifetime, appleRefund, progress] = await Promise.all([
  readFile(gatePath, 'utf8'),
  readFile(lifetimePath, 'utf8'),
  readFile(appleRefundPath, 'utf8'),
  readFile(progressPath, 'utf8'),
]);

const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

// Current default and Apple irreversible configuration boundary.
requireMatch(gate, /keep \*\*Apple Lifetime VIP Family Sharing disabled\*\*/i, 'Family Sharing gate lost current Lifetime VIP default-off rule.');
requireMatch(gate, /once Family Sharing is turned on.*cannot be turned off/is, 'Family Sharing gate lost Apple irreversible-per-product warning.');
requireMatch(gate, /must not have Family Sharing switched on unless the irreversible-config review/i, 'Family Sharing gate lost release blocker.');
requireMatch(gate, /up to five additional family members/i, 'Family Sharing gate lost Apple sharing-scope warning.');
requireMatch(gate, /existing purchasers.*after Family Sharing is enabled/is, 'Family Sharing gate lost historical-purchaser impact.');
requireMatch(gate, /separately reviewed Apple product architecture/i, 'Family Sharing gate lost safer future-product architecture review.');

// Product distinctions.
requireMatch(gate, /do not enable Family Sharing for purchased \*\*Diamonds\*\*/i, 'Family Sharing gate lost Diamond non-sharing rule.');
requireMatch(gate, /do not change one-time \*\*30-Day VIP\*\* into another Apple product type merely to make it family-shareable/i, 'Family Sharing gate lost 30-Day VIP anti-retyping rule.');
requireMatch(gate, /30-Day VIP remains a one-time, non-renewing 30-consecutive-day entitlement/i, 'Family Sharing gate lost 30-Day VIP legal meaning.');
requireMatch(gate, /Family Sharing must never restart a 30-Day VIP clock/i, 'Family Sharing gate lost 30-Day VIP restart protection.');
requireMatch(gate, /clone purchased Diamonds to family members/i, 'Family Sharing gate lost Diamond duplication protection.');

// Direct purchaser versus derivative family/organization access.
requireMatch(gate, /Family Sharing beneficiary is not automatically the purchaser/i, 'Family Sharing gate lost purchaser-vs-beneficiary distinction.');
requireMatch(gate, /direct\/purchased, family-shared, assigned, or another Apple-reported value/i, 'Family Sharing gate lost expanded ownership-provenance classification.');
requireMatch(gate, /derivative entitlement.*not a second paid Lifetime VIP purchase record/is, 'Family Sharing gate lost derivative-entitlement accounting rule.');
requireMatch(gate, /Never count family-shared access as extra Lifetime VIP sales revenue/i, 'Family Sharing gate lost revenue-accounting separation.');
requireMatch(gate, /family member later buying Lifetime VIP directly.*separate direct-purchase provenance/is, 'Family Sharing gate lost later-direct-purchase provenance.');
requireMatch(gate, /direct entitlement must survive loss of family sharing/i, 'Family Sharing gate lost direct-entitlement survival rule.');

// Provider-backed state and privacy.
requireMatch(gate, /`isFamilyShareable`/i, 'Family Sharing gate lost StoreKit family-shareable metadata check.');
requireMatch(gate, /provider-backed product configuration/i, 'Family Sharing gate lost provider-backed UI/configuration rule.');
requireMatch(gate, /must not be shown the purchaser's protected payment information/i, 'Family Sharing gate lost purchaser payment privacy boundary.');
requireMatch(gate, /ownership type and revocation state rather than inferring ownership/i, 'Family Sharing gate lost authoritative Apple ownership-state rule.');

// Modern Apple account/app correlation for Family Sharing.
requireMatch(gate, /`appTransactionId` as a globally unique identifier for each Apple Account per app/i, 'Family Sharing gate lost appTransactionId per-Apple-Account/app identity rule.');
requireMatch(gate, /each family member receives a different `appTransactionId`/i, 'Family Sharing gate lost distinct family-member appTransactionId rule.');
requireMatch(gate, /static.*redownloads.*refunds.*repurchases.*storefront changes/is, 'Family Sharing gate lost appTransactionId stability scope.');
requireMatch(gate, /`appAccountToken` is \*\*not available for family-shared transactions\*\*/i, 'Family Sharing gate lost Apple family-shared appAccountToken limitation.');
requireMatch(gate, /absence of `appAccountToken` on a verified `FAMILY_SHARED` transaction as an expected Apple condition/i, 'Family Sharing gate lost missing-appAccountToken safe handling.');
requireMatch(gate, /do not fabricate a missing family-member `appAccountToken`, reuse the purchaser's token/i, 'Family Sharing gate lost appAccountToken fabrication/reuse blocker.');
requireMatch(gate, /one verified `appTransactionId`.*TycoonX account A.*TycoonX account B.*fail closed/is, 'Family Sharing gate lost conflicting appTransactionId account-binding safeguard.');
requireMatch(gate, /do not automatically merge accounts, move Lifetime VIP, duplicate paid value, or sanction either account/i, 'Family Sharing gate lost account-merge and enforcement isolation for appTransactionId conflicts.');
requireMatch(gate, /do not infer current Family Sharing membership from the continued presence of the same `appTransactionId`/i, 'Family Sharing gate lost current-family-membership versus stable-ID boundary.');
requireMatch(gate, /do not infer that the holder paid for the transaction.*resides in a particular country.*committed fraud/is, 'Family Sharing gate lost appTransactionId non-authority safeguards.');
requireMatch(gate, /`appTransactionId` is unavailable.*do not deny a valid purchase, restoration, refund, or mandatory consumer remedy/is, 'Family Sharing gate lost older/missing appTransactionId fallback protection.');
requireMatch(gate, /persistent pseudonymous provider identifier/i, 'Family Sharing gate lost appTransactionId privacy classification.');
requireMatch(gate, /GDPR Article 5 purpose limitation and data minimization/i, 'Family Sharing gate lost GDPR purpose-limitation/data-minimization rule.');
requireMatch(gate, /do not repurpose it for advertising, unrelated behavioral profiling, or marketing segmentation/i, 'Family Sharing gate lost appTransactionId secondary-use blocker.');

// September 2026 StoreKit ownership-surface asymmetry.
requireMatch(gate, /Transaction\.OwnershipType.*purchased.*familyShared.*assigned/is, 'Family Sharing gate lost current StoreKit assigned ownership type.');
requireMatch(gate, /user has access to the transaction through an organization/i, 'Family Sharing gate lost Apple assigned-access meaning.');
requireMatch(gate, /App Store Server API `inAppOwnershipType`.*only `PURCHASED` and `FAMILY_SHARED`/is, 'Family Sharing gate lost current App Store Server API two-value ownership surface.');
requireMatch(gate, /must not be treated as interchangeable exhaustive enums/i, 'Family Sharing gate lost StoreKit/server ownership-enum asymmetry rule.');
requireMatch(gate, /treat StoreKit `assigned` as a distinct Apple-reported organizational-access state, not as `purchased` and not as `familyShared`/i, 'Family Sharing gate lost assigned-provenance separation.');
requireMatch(gate, /do not count `assigned` access as a new Lifetime VIP sale/i, 'Family Sharing gate lost assigned-access revenue separation.');
requireMatch(gate, /do not force an `assigned` StoreKit value into App Store Server API `PURCHASED` or `FAMILY_SHARED`/i, 'Family Sharing gate lost no-force-cast rule for assigned ownership.');
requireMatch(gate, /Never use an `else = purchased` or equivalent fallback/i, 'Family Sharing gate lost future-ownership fail-closed rule.');
requireMatch(gate, /unknown, newly introduced, or organizational ownership state is not evidence.*hacked.*fraud.*regional pricing.*chargeback.*compromised/is, 'Family Sharing gate lost enforcement isolation for unknown/assigned ownership.');

// REVOKE versus REFUND and enforcement isolation.
requireMatch(gate, /`REVOKE` is not the same thing as `REFUND`/i, 'Family Sharing gate lost REVOKE-vs-REFUND distinction.');
requireMatch(gate, /remove only the derivative family-shared access/i, 'Family Sharing gate lost transaction-specific family revocation rule.');
requireMatch(gate, /checking whether that TycoonX account also owns the product directly/i, 'Family Sharing gate lost direct-purchase check before family revocation.');
requireMatch(gate, /not automatically evidence.*fraud.*chargeback.*regional pricing.*hacked/is, 'Family Sharing gate lost family-revocation enforcement isolation.');
requireMatch(gate, /Do not create a real-world debt for a family member/i, 'Family Sharing gate lost no-family-debt safeguard.');

// Lifetime VIP limited-window invariants.
requireMatch(gate, /Lifetime VIP remains a limited-time promotional offering available only during selected genuine sales windows/i, 'Family Sharing gate lost limited-window Lifetime VIP rule.');
requireMatch(gate, /closing the window does \*\*not\*\* by itself revoke a valid purchaser's existing Lifetime VIP/i, 'Family Sharing gate lost direct entitlement survival after sale close.');
requireMatch(gate, /does \*\*not\*\* by itself revoke valid derivative family access/i, 'Family Sharing gate lost valid derivative access after sale close.');
requireMatch(gate, /not automatically a new Lifetime VIP sale or promotion reopening/i, 'Family Sharing gate lost no-sale-reopening classification.');
requireMatch(gate, /does not acquire a right to reopen a closed Lifetime VIP sales window/i, 'Family Sharing gate lost expired-window protection.');

// Marketing, localization, and mandatory consumer rights.
requireMatch(gate, /Do not advertise Family Sharing before it is actually enabled and functioning/i, 'Family Sharing gate lost truthful-marketing rule.');
requireMatch(gate, /all 25 localized legal variants/i, 'Family Sharing gate lost localization synchronization checkpoint.');
requireMatch(gate, /German BGB § 327e/i, 'Family Sharing gate lost German conformity/public-statement checkpoint.');
requireMatch(gate, /German BGB § 327r/i, 'Family Sharing gate lost German modification-rights checkpoint.');
requireMatch(gate, /mandatory German\/EU consumer remedies remain intact/i, 'Family Sharing gate lost mandatory-rights preservation.');

// Regional pricing and security boundaries.
requireMatch(gate, /Family Sharing is not a regional-price bypass mechanism by itself/i, 'Family Sharing gate lost regional-pricing abuse boundary.');
requireMatch(gate, /must not automatically be accused of regional-price abuse/i, 'Family Sharing gate lost no-auto-abuse rule for legitimate family access.');
requireMatch(gate, /legitimate family-group change as account compromise by default/i, 'Family Sharing gate lost family-change vs account-compromise distinction.');

// Release evidence and regression cases must protect assigned/future ownership values and modern identity fields.
requireMatch(gate, /StoreKit `assigned` ownership is not silently mapped to direct purchase or Family Sharing/i, 'Family Sharing gate lost assigned-ownership release evidence.');
requireMatch(gate, /future\/unrecognized ownership values fail closed for irreversible paid-value mutation/i, 'Family Sharing gate lost unknown-ownership release evidence.');
requireMatch(gate, /purchaser and each family beneficiary.*distinct verified `appTransactionId` values.*without being merged/is, 'Family Sharing gate lost distinct-family-identity release evidence.');
requireMatch(gate, /verified `FAMILY_SHARED` fulfillment works when Apple omits `appAccountToken`/i, 'Family Sharing gate lost family-shared no-appAccountToken release evidence.');
requireMatch(gate, /conflicting `appTransactionId` to TycoonX-account mapping fails closed/i, 'Family Sharing gate lost conflicting appTransactionId release evidence.');
requireMatch(gate, /StoreKit returns ownership type `assigned`.*does not count it as a direct paid Lifetime VIP sale/is, 'Family Sharing gate lost assigned-ownership regression case.');
requireMatch(gate, /future\/unrecognized ownership value.*does not default it to `purchased`/is, 'Family Sharing gate lost unknown-ownership regression case.');
requireMatch(gate, /Purchaser and family member present different verified `appTransactionId` values.*does not merge/is, 'Family Sharing gate lost distinct appTransactionId regression case.');
requireMatch(gate, /Verified `FAMILY_SHARED` transaction has no `appAccountToken`.*does not fabricate, reuse, or guess an account token/is, 'Family Sharing gate lost missing appAccountToken regression case.');
requireMatch(gate, /Same verified `appTransactionId` appears.*second TycoonX account.*quarantined for reconciliation/is, 'Family Sharing gate lost conflicting account-binding regression case.');
requireMatch(gate, /appTransactionId.*remains unchanged.*current access follows verified Apple ownership\/revocation evidence/is, 'Family Sharing gate lost stable-ID versus current-entitlement regression case.');

// Existing adjacent gates must still preserve the underlying product meaning.
requireMatch(lifetime, /Apple currently describes a \*\*Non-Consumable\*\* In-App Purchase/i, 'Lifetime VIP gate lost Apple non-consumable mapping.');
requireMatch(lifetime, /offered only during selected limited promotional sales windows/i, 'Lifetime VIP gate lost limited promotional product meaning.');
requireMatch(lifetime, /may choose never to offer it again/i, 'Lifetime VIP gate lost no-return rule.');
requireMatch(appleRefund, /Lifetime VIP:\*\* non-consumable In-App Purchase/i, 'Apple refund gate lost Lifetime VIP non-consumable mapping.');
requireMatch(appleRefund, /FAMILY_REVOKE/i, 'Apple refund gate lost Family Sharing revocation type.');
requireMatch(appleRefund, /family member may receive a `REVOKE` event/is, 'Apple refund gate lost family-member REVOKE handling.');
requireMatch(appleRefund, /verify whether that TycoonX account also has its own valid direct purchase/i, 'Apple refund gate lost direct-purchase preservation after Family Sharing revocation.');

// Localization and release invariants.
requireMatch(progress, /100\/100 localized full documents/i, 'Localization tracker no longer confirms all 100 localized full documents.');
requireMatch(progress, /25\/25.*target locales/is, 'Localization tracker no longer confirms all 25 target locales/hubs.');
requireMatch(progress, /Exact next unfinished locale\/document: None/i, 'Localization tracker unexpectedly reports unfinished locale/document work.');
requireMatch(progress, /September 1, 2026/i, 'Localization tracker lost TycoonX full-release date.');
requireMatch(gate, /Last reviewed:\*\* September 9, 2026/i, 'Family Sharing gate review date is stale.');

// Player-facing brand and stale-release guard.
for (const [name, text] of [
  ['Apple Family Sharing gate', gate],
  ['Lifetime VIP gate', lifetime],
  ['Apple refund gate', appleRefund],
]) {
  if (/TyconX/.test(text)) errors.push(`Displayed brand typo found in ${name}.`);
}
if (/TycoonX[^\n]{0,80}\bbeta\b/i.test(gate)) {
  errors.push('Apple Family Sharing gate contains stale live-service beta wording.');
}

console.log('TycoonX Apple Family Sharing legal, catalog, identity, and entitlement QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: irreversible Apple Family Sharing configuration, StoreKit ownership provenance, appTransactionId/appAccountToken identity handling, derivative entitlement handling, sales-window integrity, localization, and mandatory-rights safeguards are present.');
}