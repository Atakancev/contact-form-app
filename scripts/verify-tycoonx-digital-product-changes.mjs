#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_EU_DIGITAL_PRODUCT_CHANGE_SHUTDOWN_GATE.md');
const termsPath = path.join(ROOT, 'tyconx-terms-of-service.md');
const renderedTermsPath = path.join(ROOT, 'app', 'tyconx-terms-of-service', 'page.tsx');
const purchasesPath = path.join(ROOT, 'tyconx-purchase-refund-policy.md');

const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

const gate = await readFile(gatePath, 'utf8');
const terms = await readFile(termsPath, 'utf8');
const renderedTerms = await readFile(renderedTermsPath, 'utf8');
const purchases = await readFile(purchasesPath, 'utf8');

requireMatch(gate, /BGB § 327r/i, 'Missing BGB § 327r modification gate.');
requireMatch(gate, /Directive \(EU\) 2019\/770 Article 19/i, 'Missing Directive (EU) 2019/770 Article 19 modification safeguard.');
requireMatch(gate, /valid reason/i, 'Missing valid-reason requirement for ongoing digital-product changes.');
requireMatch(gate, /no additional cost/i, 'Missing no-additional-cost requirement for modifications.');
requireMatch(gate, /clearly and comprehensibly/i, 'Missing clear modification-information requirement.');
requireMatch(gate, /durable medium/i, 'Missing durable-medium notice rule for more-than-insignificant impairment.');
requireMatch(gate, /without cost within 30 days/i, 'Missing 30-day no-cost termination route under BGB § 327r.');
requireMatch(gate, /unchanged, conforming version without additional cost/i, 'Missing unchanged-version exception safeguard.');
requireMatch(gate, /BGB § 327l/i, 'Missing cure/conformity remedy reference.');
requireMatch(gate, /BGB § 327m/i, 'Missing digital-product termination remedy reference.');
requireMatch(gate, /BGB § 327n/i, 'Missing price-reduction remedy reference.');
requireMatch(gate, /BGB § 327o/i, 'Missing repayment consequence reference.');
requireMatch(gate, /within \*\*14 days\*\*/i, 'Missing statutory 14-day repayment timing safeguard.');
requireMatch(gate, /same payment method/i, 'Missing statutory same-payment-method repayment rule.');

// Required updates and unsupported-version handling.
requireMatch(gate, /BGB § 327f/i, 'Missing BGB § 327f required-update gate.');
requireMatch(gate, /Required updates expressly include \*\*security updates\*\*/i, 'Missing security-update duty.');
requireMatch(gate, /update was actually made available/i, 'Missing evidence that a required update was actually provided.');
requireMatch(gate, /informed about the update's availability and the consequences of failing to install it/i, 'Missing BGB § 327f non-installation notice safeguard.');
requireMatch(gate, /reasonable installation period/i, 'Missing reasonable installation-time safeguard.');
requireMatch(gate, /not caused by deficient installation instructions/i, 'Missing deficient-installation-instructions safeguard.');
requireMatch(gate, /defect caused \*\*solely\*\* by the missing update/i, 'Missing sole-causation limit for BGB § 327f non-installation.');
requireMatch(gate, /Classify the reason before forcing an update/i, 'Missing forced-update reason classification.');
requireMatch(gate, /required conformity\/security update/i, 'Missing required security/conformity update category.');
requireMatch(gate, /platform or OS compatibility change/i, 'Missing platform/OS compatibility update category.');
requireMatch(gate, /server\/protocol migration/i, 'Missing server/protocol migration category.');
requireMatch(gate, /discretionary product modification/i, 'Missing separation between required updates and discretionary modifications.');
requireMatch(gate, /unofficial, modified, tampered or technically invalid client/i, 'Missing tampered-client versus old-official-client distinction.');
requireMatch(gate, /do not make installation of a technical\/security update count as acceptance of unrelated new Terms/i, 'Missing update-versus-contract-consent separation.');
requireMatch(gate, /A device that can no longer run the minimum supported OS or official app version.*does not erase the server-side account/is, 'Missing obsolete-device entitlement/account preservation safeguard.');
requireMatch(gate, /disable new purchases on that client rather than accepting a payment through a known-invalid flow/i, 'Missing unsupported-client purchase-disable safeguard.');
requireMatch(gate, /inability or refusal to update is not by itself evidence of fraud, chargeback abuse, exploit intent or account compromise/i, 'Missing anti-false-abuse classification for update failures.');
requireMatch(gate, /forced update, reinstall or client migration must not restart the original 30-day clock/i, 'Missing 30-Day VIP clock preservation across forced update.');
requireMatch(gate, /blocking an obsolete client does not by itself cancel Lifetime VIP/i, 'Missing Lifetime VIP preservation across old-client blocking.');
requireMatch(gate, /updating, reinstalling or migrating the app must not replay a consumed Diamond purchase/i, 'Missing Diamond idempotency across update/reinstall.');
requireMatch(gate, /Retried Apple, Google Play or Xsolla events after an app update or server migration must remain idempotent/i, 'Missing payment-event idempotency across update migration.');

// Current store/platform lifecycle rules reviewed September 1, 2026.
requireMatch(gate, /Apple currently evaluates App Store apps for functionality, current-review-guideline compliance and staleness/i, 'Missing current Apple outdated-app lifecycle rule.');
requireMatch(gate, /Apple currently gives \*\*90 days\*\* to submit an update/i, 'Missing Apple 90-day possible-removal update window.');
requireMatch(gate, /apps that crash on launch can be removed immediately/i, 'Missing Apple crash-on-launch removal safeguard.');
requireMatch(gate, /Google Play target-API rule effective August 31, 2026/i, 'Missing current Google Play target-API checkpoint.');
requireMatch(gate, /Android 16 \/ API level 36 or higher/i, 'Missing Google Play API 36 submission requirement.');
requireMatch(gate, /Android 15 \/ API level 35 or higher/i, 'Missing Google Play API 35 existing-app availability requirement.');
requireMatch(gate, /extension to \*\*November 1, 2026\*\*/i, 'Missing Google Play target-API extension date.');
requireMatch(gate, /Do \*\*not\*\* treat that extension as granted unless/i, 'Missing protection against assuming a Google Play extension.');

requireMatch(gate, /purchased and unused Diamonds/i, 'Missing purchased-Diamond shutdown/reset impact review.');
requireMatch(gate, /active 30-Day VIP/i, 'Missing active 30-Day VIP shutdown/reset impact review.');
requireMatch(gate, /valid Lifetime VIP/i, 'Missing Lifetime VIP shutdown/reset impact review.');
requireMatch(gate, /commercial operating lifetime of TycoonX/i, 'Missing commercial-lifetime distinction for Lifetime VIP.');
requireMatch(gate, /does \*\*not\*\* by itself eliminate a mandatory remedy/i, 'Missing protection against treating Lifetime VIP wording as a remedy waiver.');
requireMatch(gate, /blanket "no compensation for downtime" rule/i, 'Missing outage/remedy anti-waiver safeguard.');
requireMatch(gate, /permanent TycoonX shutdown/i, 'Missing permanent shutdown runbook.');
requireMatch(gate, /BGB § 327p/i, 'Missing post-termination non-personal content safeguard.');
requireMatch(gate, /common machine-readable format/i, 'Missing post-termination content return format rule.');
requireMatch(gate, /Apple, Google Play and Xsolla/i, 'Missing payment-channel shutdown responsibility matrix.');
requireMatch(gate, /economy reset touching verified purchased Diamonds/i, 'Missing economy-reset release evidence scenario.');
requireMatch(gate, /Required security update blocks a vulnerable old build/i, 'Missing required-update regression scenario.');
requireMatch(gate, /Store outage prevents installation of a required update/i, 'Missing required-update store-outage regression scenario.');
requireMatch(gate, /Google Play target-API compliance after August 31, 2026/i, 'Missing Google target-API regression scenario.');
requireMatch(gate, /Apple App Store outdated-app\/removal notice/i, 'Missing Apple outdated-app regression scenario.');
requireMatch(gate, /App reinstall\/update after a valid purchase/i, 'Missing post-update entitlement-reconciliation regression scenario.');
requireMatch(gate, /change followed by consumer termination under § 327r/i, 'Missing § 327r termination regression scenario.');
requireMatch(gate, /September 1, 2026/i, 'Missing full-release date invariant.');
requireMatch(gate, /all 25 locales/i, 'Missing localization reopening safeguard.');

for (const [name, text] of [
  ['digital-product change/shutdown gate', gate],
  ['canonical Terms', terms],
  ['rendered Terms', renderedTerms],
  ['canonical Purchases policy', purchases],
]) {
  if (/TyconX/.test(text)) errors.push(`Displayed brand typo TyconX found in ${name}.`);
  if (/TycoonX (?:is|remains|currently is|service is) (?:a )?beta\b/i.test(text)) {
    errors.push(`Stale live-service beta wording found in ${name}.`);
  }
}

requireMatch(terms, /For a digital product supplied continuously over time, a change beyond what is necessary to maintain conformity will be made only where the contract and applicable law permit it/i, 'Canonical Terms lost ongoing digital-product change safeguard.');
requireMatch(terms, /valid contractual reason, will not impose additional cost to the consumer, and will be communicated clearly/i, 'Canonical Terms lost valid-reason/no-cost/clear-notice modification safeguard.');
requireMatch(terms, /If a change more than insignificantly impairs access or use/i, 'Canonical Terms lost material-impairment change safeguard.');
requireMatch(terms, /durable-medium information, termination right, unchanged-version option, refund, price reduction/i, 'Canonical Terms lost material-change remedy list.');
requireMatch(terms, /outdated app version/i, 'Canonical Terms lost outdated-client authoritative-record safeguard.');
requireMatch(terms, /A broad economy reset, server reset, migration, or rollback affecting legitimate paid digital value will be handled subject to applicable law/i, 'Canonical Terms lost paid-value economy reset safeguard.');
requireMatch(terms, /Mandatory rights relating to paid digital products remain unaffected/i, 'Canonical Terms lost outage/security mandatory-rights safeguard.');
requireMatch(terms, /Lifetime VIP ends with the commercial operating lifetime of the Service/i, 'Canonical Terms lost commercial-lifetime shutdown rule.');
requireMatch(terms, /Mandatory refund, price-reduction, termination, warranty, or other consumer remedies.*remain unaffected/is, 'Canonical Terms lost permanent-shutdown mandatory-remedies safeguard.');

requireMatch(renderedTerms, /change more than insignificantly impairs access or use/i, 'Rendered Terms lost material-change safeguard.');
requireMatch(renderedTerms, /outdated app version/i, 'Rendered Terms lost outdated-client authoritative-record safeguard.');
requireMatch(renderedTerms, /commercial operating lifetime of the Service/i, 'Rendered Terms lost Lifetime VIP commercial-lifetime wording.');
requireMatch(renderedTerms, /Mandatory refund, price-reduction, termination, warranty, or other consumer remedies/i, 'Rendered Terms lost shutdown-remedy wording.');

requireMatch(purchases, /mandatory consumer rights/i, 'Canonical Purchases policy lost mandatory-consumer-rights protection.');
requireMatch(purchases, /30-Day VIP/i, 'Canonical Purchases policy lost 30-Day VIP product distinction.');
requireMatch(purchases, /Lifetime VIP/i, 'Canonical Purchases policy lost Lifetime VIP product distinction.');
requireMatch(purchases, /Diamonds/i, 'Canonical Purchases policy lost Diamond product distinction.');

console.log('TycoonX EU/German digital-product change, update and shutdown QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: digital-product updates, unsupported versions, modifications, economy resets, outages, shutdowns, remedies and TycoonX product distinctions are protected.');
}
