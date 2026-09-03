#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_GOOGLE_PLAY_AGE_SIGNALS_RELEASE_GATE.md');
const youthGatePath = path.join(ROOT, 'TYCOONX_GERMAN_YOUTH_PROTECTION_RELEASE_GATE.md');
const minorGatePath = path.join(ROOT, 'TYCOONX_GERMAN_MINOR_PURCHASE_RELEASE_GATE.md');
const parentalGatePath = path.join(ROOT, 'TYCOONX_MINOR_PURCHASE_PARENTAL_AUTHORIZATION_RELEASE_GATE.md');
const privacyPath = path.join(ROOT, 'tyconx-privacy-policy.md');
const purchasesPath = path.join(ROOT, 'tyconx-purchase-refund-policy.md');
const termsPath = path.join(ROOT, 'tyconx-terms-of-service.md');
const progressPath = path.join(ROOT, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

const [gate, youthGate, minorGate, parentalGate, privacy, purchases, terms, progress] = await Promise.all([
  readFile(gatePath, 'utf8'),
  readFile(youthGatePath, 'utf8'),
  readFile(minorGatePath, 'utf8'),
  readFile(parentalGatePath, 'utf8'),
  readFile(privacyPath, 'utf8'),
  readFile(purchasesPath, 'utf8'),
  readFile(termsPath, 'utf8'),
  readFile(progressPath, 'utf8'),
]);

// Live-state and current Google SDK architecture.
requireMatch(gate, /went to full release on \*\*September 1, 2026\*\*/i, 'Missing September 1, 2026 full-release invariant.');
requireMatch(gate, /age-signals:0\.0\.4/i, 'Missing current Age Signals 0.0.4 dependency.');
requireMatch(gate, /requestAgeSignalsAccess/i, 'Missing requestAgeSignalsAccess flow.');
requireMatch(gate, /checkAgeSignals/i, 'Missing checkAgeSignals flow.');
requireMatch(gate, /userStatus.*deprecated.*unsupported.*0\.0\.4/is, 'Missing deprecated 0.0.3 userStatus safeguard.');
requireMatch(gate, /SHARED.*NOT_SHARED.*VERIFICATION_REQUIRED/is, 'Missing access-state triage.');
requireMatch(gate, /NOT_SHARED.*not proof.*adult or a child/is, 'Missing non-sharing age-inference safeguard.');

// Age-range/provenance semantics.
requireMatch(gate, /0-12.*13-15.*16-17.*18\+/is, 'Missing default Google age ranges.');
requireMatch(gate, /custom age ranges/i, 'Missing custom-age-range support.');
requireMatch(gate, /ageLower.*ageUpper/is, 'Missing returned-range handling.');
requireMatch(gate, /TIER_A.*self-declared/is, 'Missing TIER_A provenance.');
requireMatch(gate, /TIER_B.*parent or guardian/is, 'Missing TIER_B provenance.');
requireMatch(gate, /TIER_C/is, 'Missing TIER_C provenance.');
requireMatch(gate, /TIER_D/is, 'Missing TIER_D provenance.');
requireMatch(gate, /not a marketing or culpability score/i, 'Missing age-provenance purpose limitation.');

// Google policy purpose limitation and privacy.
requireMatch(gate, /advertising or ad targeting/i, 'Missing advertising prohibition.');
requireMatch(gate, /marketing/i, 'Missing marketing prohibition.');
requireMatch(gate, /user profiling/i, 'Missing profiling prohibition.');
requireMatch(gate, /analytics or business intelligence/i, 'Missing analytics/BI prohibition.');
requireMatch(gate, /sharing or transferring.*third party.*strictly required.*law/is, 'Missing third-party sharing restriction.');
requireMatch(gate, /personal and sensitive user age and parental-consent data/i, 'Missing sensitive-data classification.');
requireMatch(gate, /Play Data Safety/i, 'Missing Play Data Safety assessment.');
requireMatch(gate, /do not derive or store an exact date of birth/i, 'Missing no-derived-DOB safeguard.');
requireMatch(gate, /do not send it to Xsolla/i, 'Missing Xsolla Age Signals isolation.');
requireMatch(gate, /do not copy it into Apple-side account metadata/i, 'Missing Apple isolation.');

// Significant changes and revocations.
requireMatch(gate, /installId.*revocation/is, 'Missing installId revocation purpose.');
requireMatch(gate, /do not use it as a cross-device advertising ID, fingerprint/i, 'Missing installId anti-tracking safeguard.');
requireMatch(gate, /revoked app approvals Play Console functionality is not yet live/i, 'Missing current revoked-approval availability warning.');
requireMatch(gate, /significantChangeStatus.*APPROVED.*PENDING.*DECLINED/is, 'Missing significant-change status handling.');
requireMatch(gate, /significantChangeApprovalDate/i, 'Missing significant-change approval date.');
requireMatch(gate, /significant-change Play Console functionality is not yet live/i, 'Missing current significant-change availability warning.');
requireMatch(gate, /up to 90 days in advance/i, 'Missing current significant-change advance window.');
requireMatch(gate, /more than two days apart/i, 'Missing current significant-change spacing rule.');
requireMatch(gate, /restrict only the content\/functionality related to that unapproved significant change/i, 'Missing proportionate significant-change restriction.');

// Jurisdiction and legal-mandate boundary.
requireMatch(gate, /Google Play itself does not universally mandate developers to use the Age Signals features/i, 'Missing non-universal-mandate safeguard.');
requireMatch(gate, /Texas App Store Accountability Act is now in effect/i, 'Missing current Texas status checkpoint.');
requireMatch(gate, /dated jurisdiction matrix/i, 'Missing jurisdiction evidence requirement.');
requireMatch(gate, /product\/SKU age ratings/i, 'Missing SKU age-rating distinction.');
requireMatch(gate, /app's IARC rating.*SKU-specific/is, 'Missing IARC-vs-SKU separation.');

// Payment and entitlement boundaries.
requireMatch(gate, /does \*\*not\*\* prove that a parent authorized a specific Diamond or VIP purchase/i, 'Missing age-signal-vs-purchase-authorization separation.');
requireMatch(gate, /30-Day VIP remains a \*\*one-time, non-renewing 30-day digital entitlement\*\*/i, 'Missing one-time 30-Day VIP invariant.');
requireMatch(gate, /Lifetime VIP remains a \*\*limited-time promotional one-time entitlement available only during selected genuine sales windows\*\*/i, 'Missing Lifetime VIP selected-sales-window invariant.');
requireMatch(gate, /may be withdrawn from future sale/i, 'Missing Lifetime VIP withdrawal-from-sale rule.');
requireMatch(gate, /may never return/i, 'Missing Lifetime VIP may-never-return rule.');
requireMatch(gate, /legitimately purchased Diamonds/i, 'Missing purchased-Diamond protection.');
requireMatch(gate, /must not be used to target minors with scarcity pressure/i, 'Missing anti-pressure Lifetime VIP safeguard.');
requireMatch(gate, /Apple App Store, Google Play, and the CK-Labs TycoonX webshop using Xsolla/i, 'Missing payment-channel separation.');
requireMatch(gate, /final total price shown before confirmation remains the transaction price/i, 'Missing completed-purchase price invariant.');
requireMatch(gate, /later price decrease does not automatically create a refund, credit, or price-match right/i, 'Missing later-price-decrease rule.');

// Security, outages, compromise, localization.
requireMatch(gate, /Play Integrity/i, 'Missing Play Integrity security consideration.');
requireMatch(gate, /API error.*not proof of wrongdoing/is, 'Missing API-outage/player-misconduct separation.');
requireMatch(gate, /Google age\/sharing state.*TycoonX authentication\/account-control state.*purchase\/payment-provider state.*TycoonX entitlement state.*moderation\/fraud\/exploit state/is, 'Missing separate state-machine model.');
requireMatch(gate, /unsupported old Android client must not be allowed to bypass a legally required age restriction/i, 'Missing old-client bypass safeguard.');
requireMatch(gate, /all \*\*25 localized hubs\*\* and all \*\*100 localized full documents\*\*/i, 'Missing localization completion invariant.');
requireMatch(gate, /tr, de, es, es_MX, fr, fr_CA, it, pt, pt_BR, ru, ja, ko, zh, zh_Hans, zh_Hant, ar, nl, sv, nb, pl, th, vi, uk, hi, id/i, 'Missing exact localization order.');

// Cross-gate/canonical sanity checks.
requireMatch(youthGate, /Google Play IARC and UGC parity/i, 'German youth-protection gate lost Google Play parity.');
requireMatch(minorGate, /BGB § 110/i, 'German minor-purchase gate lost BGB § 110 analysis.');
requireMatch(parentalGate, /parental/i, 'Parental-authorization gate appears incomplete.');
requireMatch(privacy, /children|minor|age/i, 'Canonical Privacy Policy lost age/minor context.');
requireMatch(purchases, /Diamonds/i, 'Canonical Purchases policy lost Diamonds coverage.');
requireMatch(purchases, /30-Day VIP/i, 'Canonical Purchases policy lost 30-Day VIP coverage.');
requireMatch(purchases, /Lifetime VIP/i, 'Canonical Purchases policy lost Lifetime VIP coverage.');
requireMatch(terms, /Mandatory consumer remedies remain unaffected/i, 'Canonical Terms lost mandatory consumer remedies.');
requireMatch(progress, /100\/100/i, 'Localization progress no longer reports 100/100 full localized documents.');
requireMatch(progress, /25\/25/i, 'Localization progress no longer reports 25/25 localized hubs.');

for (const [name, text] of [
  ['Age Signals gate', gate],
  ['canonical Privacy Policy', privacy],
  ['canonical Purchases policy', purchases],
  ['canonical Terms', terms],
]) {
  if (/TyconX/.test(text)) errors.push(`Displayed brand typo TyconX found in ${name}.`);
}

// Player-facing canonical documents must not regress to a TycoonX beta description.
// Do not flag operational sentences that explicitly say the live game must not be described that way.
for (const [name, text] of [
  ['canonical Privacy Policy', privacy],
  ['canonical Purchases policy', purchases],
  ['canonical Terms', terms],
]) {
  if (/\bTycoonX beta\b|\bTycoonX is (?:still )?(?:in )?beta\b|\bTycoonX remains (?:in )?beta\b/i.test(text)) {
    errors.push(`Stale TycoonX beta-state wording found in ${name}.`);
  }
}

console.log('TycoonX Google Play Age Signals QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: Google Play Age Signals purpose limits, 0.0.4 flow, parental-state boundaries, purchase isolation, privacy, security, and localization invariants are present.');
}
