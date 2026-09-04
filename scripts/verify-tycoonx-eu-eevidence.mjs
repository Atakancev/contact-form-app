#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import process from 'node:process';

const gateFile = 'TYCOONX_EU_EEVIDENCE_PRODUCTION_PRESERVATION_RELEASE_GATE.md';
const termsFile = 'tyconx-terms-of-service.md';
const privacyFile = 'tyconx-privacy-policy.md';
const progressFile = 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md';

const [gate, terms, privacy, progress] = await Promise.all([
  readFile(gateFile, 'utf8'),
  readFile(termsFile, 'utf8'),
  readFile(privacyFile, 'utf8'),
  readFile(progressFile, 'utf8'),
]);

const requiredGate = [
  ['Regulation (EU) 2023/1543 has applied since **August 18, 2026**', 'current e-Evidence application date'],
  ['Directive (EU) 2023/1544', 'designation Directive'],
  ['EBewMG', 'German implementation law'],
  ['enable their users to communicate with each other', 'communication-service scope test'],
  ['substantial connection', 'EU offering substantial-connection test'],
  ['single-Member-State exclusive-service exclusion', 'single-state scope exclusion'],
  ['by **August 18, 2026**', 'designation deadline'],
  ['powers and resources', 'addressee capability requirement'],
  ['Bundesamt für Justiz', 'German central authority'],
  ['German must be included among the languages', 'German addressee language requirement'],
  ['**EPOC:**', 'European Production Order Certificate distinction'],
  ['**EPOC-PR:**', 'European Preservation Order Certificate distinction'],
  ['date/time of valid receipt and time zone', 'receipt/deadline evidence'],
  ['ordinary production deadline is **10 days following receipt**', 'ordinary EPOC deadline'],
  ['production deadline is **8 hours**', 'emergency EPOC deadline'],
  ['preserved **without undue delay**', 'preservation action timing'],
  ['normal preservation period is **60 days**', 'standard preservation period'],
  ['extend that period by **30 days**', 'preservation extension'],
  ['A preservation order must not automatically disclose', 'preservation/production separation'],
  ['subscriber data', 'subscriber data category'],
  ['traffic data', 'traffic data category'],
  ['content data', 'content data category'],
  ['not a general data-retention mandate', 'no generalized retention mandate'],
  ['activity associated with account X', 'account-compromise attribution safeguard'],
  ['Legal holds are exceptions to normal deletion', 'legal-hold retention boundary'],
  ['conflict with another legal obligation', 'conflicting-obligation escalation'],
  ['Apple, Google Play, Xsolla', 'provider boundary'],
  ['Purchased Diamonds', 'Diamond entitlement isolation'],
  ['one-time, non-renewing 30-Day VIP', '30-Day VIP product isolation'],
  ['Lifetime VIP remains a one-time promotional entitlement available only during selected genuine sales windows', 'Lifetime VIP limited-window rule'],
  ['may be withdrawn from future sale, may never return', 'Lifetime VIP future availability rule'],
  ['is not itself a refund, chargeback, fraud finding', 'legal-process/payment separation'],
  ['The existence of the request is not conclusive proof of a TycoonX Terms violation', 'criminal allegation/game enforcement separation'],
  ['eight-hour production deadline', 'out-of-hours emergency continuity'],
  ['Permanent discontinuation of TycoonX does not automatically extinguish', 'shutdown legal-hold continuity'],
  ['up to **EUR 500,000**', 'German statutory fine cap checkpoint'],
  ['up to **2%**', 'German turnover fine checkpoint'],
  ['does not by itself change the canonical player-facing legal meaning', 'localization non-reopening rationale'],
  ['TycoonX is a fully released service', 'full-release status'],
];

const requiredTerms = [
  ['Nothing in these Terms excludes, limits, or overrides rights that cannot legally be excluded or limited', 'canonical mandatory-rights safeguard'],
  ['Purchased Diamonds do not expire solely because time passes', 'canonical purchased-Diamond non-expiry'],
  ['one-time, non-renewing digital entitlement', 'canonical 30-Day VIP distinction'],
  ['limited promotional sales windows', 'canonical Lifetime VIP sales-window rule'],
  ['may choose never to offer Lifetime VIP again', 'canonical Lifetime VIP non-return rule'],
  ['commercial operating lifetime of the TycoonX Service', 'canonical Lifetime VIP meaning'],
  ['account or payment account has been compromised', 'canonical account-compromise coverage'],
  ['Apple App Store In-App Purchase', 'canonical Apple channel'],
  ['Google Play', 'canonical Google channel'],
  ['official TycoonX web shop using Xsolla', 'canonical Xsolla channel'],
];

const requiredPrivacy = [
  ['lawful authority requests', 'privacy legal-obligation basis'],
  ['legally required recordkeeping', 'privacy legal recordkeeping basis'],
  ['valid legal process', 'privacy authority disclosure boundary'],
  ['keep personal data only for as long as reasonably necessary', 'privacy retention minimization'],
  ['private communications are not retained indefinitely', 'private-message retention boundary'],
  ['account has been compromised', 'privacy security-contact coverage'],
];

const requiredProgress = [
  ['all **25/25** target locales', '25/25 localized hubs completion'],
  ['**100/100 localized full documents are currently confirmed current**', '100/100 localized documents completion'],
  ['**Exact next unfinished locale/document: None.', 'no unfinished locale/document'],
  ['September 1, 2026', 'full-release date in tracker'],
];

const missing = [];
for (const [needle, label] of requiredGate) {
  if (!gate.includes(needle)) missing.push(`${gateFile}: ${label}`);
}
for (const [needle, label] of requiredTerms) {
  if (!terms.includes(needle)) missing.push(`${termsFile}: ${label}`);
}
for (const [needle, label] of requiredPrivacy) {
  if (!privacy.includes(needle)) missing.push(`${privacyFile}: ${label}`);
}
for (const [needle, label] of requiredProgress) {
  if (!progress.includes(needle)) missing.push(`${progressFile}: ${label}`);
}

const legacyBrand = ['Ty', 'conX'].join('');
const forbiddenGate = [
  [new RegExp(`\\b${legacyBrand}\\b`), 'legacy displayed brand spelling in e-Evidence gate'],
  [/\bTycoonX\b[^\n]{0,100}\bbeta\b|\bbeta\b[^\n]{0,100}\bTycoonX\b/i, 'live-service beta wording in e-Evidence gate'],
  [/preservation (?:itself )?authorizes disclosure/i, 'preservation treated as disclosure authority'],
  [/EPOC[^\n]{0,120}(automatically removes? Diamonds|automatically refunds?|automatically expires? Lifetime VIP)/i, 'e-Evidence/payment-entitlement coupling'],
  [/30-Day VIP[^\n]{0,100}(auto-renew|automatically renews|subscription)/i, '30-Day VIP recurring characterization'],
  [/Lifetime VIP[^\n]{0,100}(always available|permanently available|guaranteed to return)/i, 'continuous Lifetime VIP availability promise'],
];

const forbiddenHits = forbiddenGate.filter(([pattern]) => pattern.test(gate));

console.log('TycoonX EU e-Evidence production and preservation QA');
console.log(`Gate checkpoints: ${requiredGate.length - missing.filter((item) => item.startsWith(gateFile)).length}/${requiredGate.length}`);
console.log(`Canonical Terms checkpoints: ${requiredTerms.length - missing.filter((item) => item.startsWith(termsFile)).length}/${requiredTerms.length}`);
console.log(`Privacy checkpoints: ${requiredPrivacy.length - missing.filter((item) => item.startsWith(privacyFile)).length}/${requiredPrivacy.length}`);
console.log(`Localization tracker checkpoints: ${requiredProgress.length - missing.filter((item) => item.startsWith(progressFile)).length}/${requiredProgress.length}`);

if (missing.length || forbiddenHits.length) {
  console.error('\nFAILED:');
  for (const item of missing) console.error(`- Missing ${item}`);
  for (const [, label] of forbiddenHits) console.error(`- Found ${label}`);
  process.exitCode = 1;
} else {
  console.log('\nPASS: e-Evidence scope, addressee, EPOC/EPOC-PR deadlines, preservation, privacy, provider boundaries, entitlement isolation and localization invariants are present.');
}
