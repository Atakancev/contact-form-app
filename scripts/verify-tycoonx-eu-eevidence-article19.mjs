#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import process from 'node:process';

const gateFile = 'TYCOONX_EU_EEVIDENCE_ARTICLE19_TRANSMISSION_RELEASE_GATE.md';
const mainGateFile = 'TYCOONX_EU_EEVIDENCE_PRODUCTION_PRESERVATION_RELEASE_GATE.md';
const termsFile = 'tyconx-terms-of-service.md';
const privacyFile = 'tyconx-privacy-policy.md';
const progressFile = 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md';

const [gate, mainGate, terms, privacy, progress] = await Promise.all([
  readFile(gateFile, 'utf8'),
  readFile(mainGateFile, 'utf8'),
  readFile(termsFile, 'utf8'),
  readFile(privacyFile, 'utf8'),
  readFile(progressFile, 'utf8'),
]);

const requiredGate = [
  ['Regulation (EU) 2023/1543 applies from **August 18, 2026**', 'current Regulation application date'],
  ['Article 19 requires written communication', 'Article 19 primary-system requirement'],
  ['Commission Implementing Regulation (EU) 2025/1550 was adopted on July 28, 2025', 'implementing-act adoption checkpoint'],
  ['Germany as legally and technically ready both to issue and to receive EPOCs/EPOC-PRs', 'current Germany readiness checkpoint'],
  ['service-provider web-based interface user manual (Version 1.0, May 21, 2026)', 'service-provider interface manual checkpoint'],
  ['**e-CODEX access points**', 'e-CODEX primary transport'],
  ['**25 megabytes (25,600 kilobytes)**', '25 MB primary-system threshold'],
  ['Article 19(5): fallback is an exception', 'fallback-exception boundary'],
  ['swift, secure and reliable and allows the recipient to establish authenticity', 'fallback functional requirements'],
  ['S/MIME', 'secure-email fallback'],
  ['separate secure channel', 'separate credential channel'],
  ['Article 19(6): fallback must be recorded', 'fallback recording obligation'],
  ['**without undue delay**', 'fallback recording timing'],
  ['case or file reference number', 'fallback record case reference'],
  ['Alternative-production manifest', 'alternative evidence manifest'],
  ['cryptographically strong hash digest', 'manifest integrity hash'],
  ['**at least 10 calendar days and no more than 45 calendar days**', 'retrieval availability window'],
  ['non-repudiation of origin', 'security origin non-repudiation'],
  ['non-repudiation of receipt', 'security receipt non-repudiation'],
  ['qualified electronic seal or qualified electronic signature', 'Article 21 eIDAS signature/seal'],
  ['updated informal guidance on **August 19, 2026**', 'current deadline-guidance checkpoint'],
  ['the day of receipt is not counted', 'ordinary-day deadline calculation'],
  ['the **enforcing State**, not the issuing State', 'public-holiday jurisdiction rule'],
  ['the hour during which the EPOC is received is not counted', 'emergency-hour calculation'],
  ['there is **no weekend/public-holiday extension**', 'emergency weekend rule'],
  ['Friday at 17:10', 'emergency deadline regression example'],
  ['current JUDEX alerts are indicative', 'portal-alert non-authoritative warning'],
  ['Do not confuse contingency with the old transition period', 'Article 24 transition/fallback separation'],
  ['Article 19(5)', 'current contingency legal basis'],
  ['Purchased Diamonds remain governed by the canonical TycoonX Terms', 'Diamond isolation'],
  ['**30-Day VIP remains a one-time, non-renewing entitlement.', '30-Day VIP isolation'],
  ['Lifetime VIP remains a one-time promotional entitlement offered only during selected genuine sales windows', 'Lifetime VIP limited-window rule'],
  ['may be withdrawn from future sale, may never return', 'Lifetime VIP non-return rule'],
  ['does not justify copying raw evidence into every operational log', 'transmission-log minimisation'],
  ['`fallback_recorded_in_system_at`', 'production fallback-record field'],
  ['`manifest_hash_digest`', 'production manifest hash field'],
  ['18. business/provider migration', 'regression-matrix completeness'],
  ['an Article 19 event can directly alter Diamonds or VIP entitlements', 'P0 entitlement isolation blocker'],
  ['not the canonical player-facing meaning', 'canonical/localization non-reopening boundary'],
  ['TycoonX is a fully released service', 'full-release status'],
];

const requiredMainGate = [
  ['A preservation order must not automatically disclose', 'main preservation/disclosure separation'],
  ['ordinary production deadline is **10 days following receipt**', 'main ordinary deadline'],
  ['production deadline is **8 hours**', 'main emergency deadline'],
  ['normal preservation period is **60 days**', 'main preservation period'],
  ['one-time, non-renewing 30-Day VIP', 'main 30-Day VIP distinction'],
  ['Lifetime VIP remains a one-time promotional entitlement available only during selected genuine sales windows', 'main Lifetime VIP rule'],
];

const requiredTerms = [
  ['Nothing in these Terms excludes, limits, or overrides rights that cannot legally be excluded or limited', 'canonical mandatory-rights safeguard'],
  ['Purchased Diamonds do not expire solely because time passes', 'canonical purchased-Diamond non-expiry'],
  ['one-time, non-renewing digital entitlement', 'canonical 30-Day VIP distinction'],
  ['limited promotional sales windows', 'canonical Lifetime VIP sales-window rule'],
  ['may choose never to offer Lifetime VIP again', 'canonical Lifetime VIP non-return rule'],
];

const requiredPrivacy = [
  ['lawful authority requests', 'privacy lawful-authority basis'],
  ['valid legal process', 'privacy legal-process disclosure boundary'],
  ['keep personal data only for as long as reasonably necessary', 'privacy retention minimisation'],
];

const requiredProgress = [
  ['all **25/25** target locales', '25/25 localized hubs completion'],
  ['**100/100 localized full documents are currently confirmed current**', '100/100 localized documents completion'],
  ['**Exact next unfinished locale/document: None.', 'no unfinished locale/document'],
  ['September 1, 2026', 'full-release date'],
];

const groups = [
  [gateFile, gate, requiredGate],
  [mainGateFile, mainGate, requiredMainGate],
  [termsFile, terms, requiredTerms],
  [privacyFile, privacy, requiredPrivacy],
  [progressFile, progress, requiredProgress],
];

const missing = [];
for (const [file, text, rules] of groups) {
  for (const [needle, label] of rules) {
    if (!text.includes(needle)) missing.push(`${file}: ${label}`);
  }
}

const legacyBrand = ['Ty', 'conX'].join('');
const forbidden = [
  [new RegExp(`\\b${legacyBrand}\\b`), 'legacy displayed brand spelling'],
  [/TycoonX\s+(?:is|remains|operates as)\s+(?:an?\s+)?beta\b|\bbeta\s+(?:service|release|users?|purchases?|VIP|Diamonds)\b/i, 'stale live-service beta characterization'],
  [/ordinary email is the default/i, 'ordinary email treated as primary route'],
  [/fallback[^\n]{0,120}(waives|removes|expires)[^\n]{0,80}(Diamonds|VIP)/i, 'fallback/payment-entitlement coupling'],
  [/30-Day VIP[^\n]{0,100}(auto-renew|automatically renews|subscription)/i, '30-Day VIP recurring characterization'],
  [/Lifetime VIP[^\n]{0,100}(always available|permanently available|guaranteed to return)/i, 'continuous Lifetime VIP availability promise'],
  [/preservation[^\n]{0,100}automatically disclose/i, 'preservation treated as automatic disclosure'],
];

const forbiddenHits = forbidden.filter(([pattern]) => pattern.test(gate));

console.log('TycoonX EU e-Evidence Article 19 transmission QA');
for (const [file, text, rules] of groups) {
  const fileMissing = missing.filter((item) => item.startsWith(`${file}:`)).length;
  console.log(`${file}: ${rules.length - fileMissing}/${rules.length}`);
}

if (missing.length || forbiddenHits.length) {
  console.error('\nFAILED:');
  for (const item of missing) console.error(`- Missing ${item}`);
  for (const [, label] of forbiddenHits) console.error(`- Found ${label}`);
  process.exitCode = 1;
} else {
  console.log('\nPASS: Article 19 primary/fallback transport, 25 MB routing, fallback recording, manifests, security, deadline calculation, entitlement isolation and localization invariants are present.');
}
