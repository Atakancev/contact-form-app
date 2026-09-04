#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_PERMANENT_SHUTDOWN_END_OF_SERVICE_RELEASE_GATE.md');
const termsPath = path.join(ROOT, 'tyconx-terms-of-service.md');
const progressPath = path.join(ROOT, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');
const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

const [gate, terms, progress] = await Promise.all([
  readFile(gatePath, 'utf8'),
  readFile(termsPath, 'utf8'),
  readFile(progressPath, 'utf8'),
]);

// German/EU digital-product shutdown safeguards.
requireMatch(gate, /BGB § 327d/i, 'Missing BGB § 327d conformity checkpoint.');
requireMatch(gate, /BGB § 327m/i, 'Missing BGB § 327m termination checkpoint.');
requireMatch(gate, /BGB § 327n/i, 'Missing BGB § 327n price-reduction/refund checkpoint.');
requireMatch(gate, /BGB §§ 327o and 327p/i, 'Missing BGB §§ 327o/327p termination consequences.');
requireMatch(gate, /BGB § 327r/i, 'Missing BGB § 327r digital-product modification checkpoint.');
requireMatch(gate, /Directive \(EU\) 2019\/770 Article 16/i, 'Missing Directive 2019/770 Article 16 checkpoint.');
requireMatch(gate, /Do \*\*not\*\* assume that announcing a permanent closure converts every affected contract/i, 'Missing shutdown-versus-modification classification safeguard.');
requireMatch(gate, /force majeure = no refund/i, 'Missing force-majeure no-blanket-waiver safeguard.');

// Current 2026 EU videogame-preservation policy checkpoint.
requireMatch(gate, /Last legal\/source review:\*\* September 4, 2026/i, 'Shutdown gate legal-review date is stale.');
requireMatch(gate, /June 16, 2026.*European Citizens' Initiative/is, 'Missing June 2026 European Citizens Initiative shutdown checkpoint.');
requireMatch(gate, /could not propose a standalone legal obligation requiring videogames to remain playable after they stop being provided commercially/i, 'Missing Commission no-standalone-perpetual-playability checkpoint.');
requireMatch(gate, /existing EU consumer law already protects consumers/i, 'Missing continued EU consumer-law protection after ECI response.');
requireMatch(gate, /pre-contract information about contract duration and termination conditions/i, 'Missing duration/termination disclosure checkpoint.');
requireMatch(gate, /consumers may be entitled to a proportionate refund/i, 'Missing proportionate-refund checkpoint.');
requireMatch(gate, /publish server source code, hand over backend credentials, release a community-server binary, or create a permanent offline mode/i, 'Missing no-invented-preservation-duty safeguard.');
requireMatch(gate, /absence of that new standalone preservation duty.*no remedy/is, 'Missing no-new-duty/no-remedy separation.');
requireMatch(gate, /voluntarily provides an offline fallback, read-only archive, data\/save export, community migration path/i, 'Missing voluntary preservation scope safeguard.');
requireMatch(gate, /end-2026 industry engagement produces a new recommendation, standard or legislative proposal/i, 'Missing future EU policy re-check trigger.');

// Commercial exposure and entitlement isolation.
requireMatch(gate, /freeze new Lifetime VIP sales/i, 'Missing Lifetime VIP sale-freeze safeguard.');
requireMatch(gate, /stop or adjust 30-Day VIP sales/i, 'Missing 30-Day VIP remaining-term safeguard.');
requireMatch(gate, /stop selling Diamond quantities/i, 'Missing Diamond exposure safeguard.');
requireMatch(gate, /do not automatically convert Lifetime VIP into 30-Day VIP/i, 'Missing product-conversion prohibition.');
requireMatch(gate, /do not automatically replace cash remedies with Diamonds/i, 'Missing no-forced-Diamond-remedy safeguard.');
requireMatch(gate, /do not remove unrelated paid entitlements/i, 'Missing unrelated-entitlement isolation.');
requireMatch(gate, /commercial operating lifetime of the TycoonX Service/i, 'Missing Lifetime VIP commercial-lifetime invariant.');
requireMatch(gate, /safest default is to remove Lifetime VIP from sale/i, 'Missing already-decided-closure Lifetime VIP safeguard.');
requireMatch(gate, /review App Store, Google Play, Xsolla\/webshop, website and in-game marketing/i, 'Missing shutdown marketing-promise audit.');

// Apple, Google Play and Xsolla wind-down controls.
requireMatch(gate, /Current Apple checkpoints as of September 4, 2026/i, 'Apple shutdown checkpoint date is stale.');
requireMatch(gate, /at least 31 days before removal/i, 'Missing Apple 31-day IAP-removal guidance checkpoint.');
requireMatch(gate, /Developer Removed from Sale/i, 'Missing Apple purchased-IAP access checkpoint.');
requireMatch(gate, /Current Google checkpoints as of September 4, 2026/i, 'Google shutdown checkpoint date is stale.');
requireMatch(gate, /monetization\.onetimeproducts\.purchaseOptions\.batchUpdateStates/i, 'Missing Google one-time-product deactivation control.');
requireMatch(gate, /orders\.refund/i, 'Missing Google refund control.');
requireMatch(gate, /orders older than three years cannot be refunded through that endpoint/i, 'Missing Google refund-endpoint limitation checkpoint.');
requireMatch(gate, /technical limitation of a Google refund endpoint is \*\*not\*\* itself a waiver/i, 'Missing Google mandatory-remedy fallback safeguard.');
requireMatch(gate, /Xsolla's current Refund Policy dated June 16, 2026/i, 'Missing current Xsolla refund-policy checkpoint.');
requireMatch(gate, /transaction-specific Xsolla role/i, 'Missing Xsolla merchant-role separation.');

// Content, privacy, evidence and security.
requireMatch(gate, /free of charge, without trader-imposed impediment, within a reasonable time, in a customary and machine-readable format/i, 'Missing BGB § 327p content-handback conditions.');
requireMatch(gate, /Do not confuse a GDPR export with the BGB § 327p/i, 'Missing GDPR versus non-personal-content handback distinction.');
requireMatch(gate, /Do not destroy transaction evidence while Apple\/Google\/Xsolla refunds or chargebacks are still pending/i, 'Missing payment-evidence retention safeguard.');
requireMatch(gate, /Do not turn off webhooks before the last purchase\/refund\/chargeback events are reconciled/i, 'Missing webhook wind-down safeguard.');
requireMatch(gate, /final entitlement reconciliation hash\/export or equivalent immutable evidence/i, 'Missing final entitlement evidence package.');
requireMatch(gate, /Emergency versus planned closure/i, 'Missing emergency closure path.');
requireMatch(gate, /personal data, payment credentials, anti-fraud logic, third-party licensed material or security-sensitive server components/i, 'Missing preservation privacy/security/IP boundary.');

// Canonical public Terms must keep the high-level promises already localized.
requireMatch(terms, /## 25\. Permanent discontinuation/i, 'Canonical Terms lost permanent-discontinuation section.');
requireMatch(terms, /Lifetime VIP ends with the commercial operating lifetime of the Service/i, 'Canonical Terms lost Lifetime VIP shutdown definition.');
requireMatch(terms, /Mandatory refund, price-reduction, termination, warranty, or other consumer remedies.*remain unaffected/is, 'Canonical Terms lost mandatory shutdown remedies.');
requireMatch(terms, /## 24\. Availability, outages, security incidents, and force majeure/i, 'Canonical Terms lost outage/force-majeure section.');
requireMatch(terms, /No clause in these Terms excludes liability where such exclusion is prohibited by law/i, 'Canonical Terms lost non-waivable liability safeguard.');
requireMatch(terms, /## 6\. VIP features and digital-product changes/i, 'Canonical Terms lost VIP/digital-product change section.');
requireMatch(terms, /advance notice, durable-medium information, termination right, unchanged-version option, refund, price reduction, or other remedy/i, 'Canonical Terms lost material-change remedy safeguards.');

// Localization and release invariants.
requireMatch(progress, /25\/25.*target locales/is, 'Localization hub completion invariant missing.');
requireMatch(progress, /100\/100 localized full documents are currently confirmed current/i, 'Localized full-document completion invariant missing.');
requireMatch(progress, /Exact next unfinished locale\/document: None/i, 'Localization queue is unexpectedly open.');
requireMatch(gate, /September 1, 2026/i, 'Missing TycoonX full-release date invariant.');
requireMatch(gate, /TycoonX is the only displayed game-brand spelling/i, 'Missing positive TycoonX brand invariant.');

for (const [name, text] of [
  ['shutdown gate', gate],
  ['canonical Terms', terms],
]) {
  if (/TyconX/.test(text)) errors.push(`Legacy displayed brand spelling found in ${name}.`);
  if (/\bTycoonX\s+(?:is|remains|currently|still)\s+(?:in\s+)?beta\b/i.test(text)) {
    errors.push(`Stale live-service beta wording found in ${name}.`);
  }
}

console.log('TycoonX permanent shutdown / end-of-service QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: shutdown classification, current EU videogame-preservation policy, consumer remedies, payment-channel wind-down, entitlement isolation, content handback, and evidence safeguards are present.');
}
