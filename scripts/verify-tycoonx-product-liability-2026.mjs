#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_EU_GERMAN_PRODUCT_LIABILITY_2026_RELEASE_GATE.md');
const termsPath = path.join(ROOT, 'tyconx-terms-of-service.md');
const purchasesPath = path.join(ROOT, 'tyconx-purchase-refund-policy.md');
const privacyPath = path.join(ROOT, 'tyconx-privacy-policy.md');
const progressPath = path.join(ROOT, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

const [gate, terms, purchases, privacy, progress] = await Promise.all([
  readFile(gatePath, 'utf8'),
  readFile(termsPath, 'utf8'),
  readFile(purchasesPath, 'utf8'),
  readFile(privacyPath, 'utf8'),
  readFile(progressPath, 'utf8'),
]);

requireMatch(gate, /Review date: September 3, 2026/i, 'Missing current review date.');
requireMatch(gate, /TycoonX went to full release on September 1, 2026/i, 'Missing live-service release checkpoint.');
requireMatch(gate, /Directive \(EU\) 2024\/2853/i, 'Missing Directive (EU) 2024/2853 source.');
requireMatch(gate, /after December 9, 2026/i, 'Missing post-December-9 application boundary.');
requireMatch(gate, /must be transposed.*December 9, 2026/is, 'Missing transposition deadline.');
requireMatch(gate, /BT-Drs\. 21\/4297/i, 'Missing current German government-bill checkpoint.');
requireMatch(gate, /March 4, 2026/i, 'Missing Bundestag first-reading checkpoint.');
requireMatch(gate, /April 13, 2026/i, 'Missing Bundestag committee-hearing checkpoint.');
requireMatch(gate, /must not be presented as though the new German implementing law is already in force/i, 'Missing draft-vs-enacted-law safeguard.');
requireMatch(gate, /re-check the enacted German text before December 9, 2026/i, 'Missing final-German-law recheck requirement.');

requireMatch(gate, /software.*definition of a product/is, 'Missing software-as-product rule.');
requireMatch(gate, /communications network or cloud technology/i, 'Missing network/cloud software scope.');
requireMatch(gate, /software-as-a-service/i, 'Missing SaaS software scope.');
requireMatch(gate, /free and open-source software.*outside the course of a commercial activity/is, 'Missing narrow FOSS exclusion.');

requireMatch(gate, /death or personal injury/i, 'Missing personal-injury damage category.');
requireMatch(gate, /medically recognized damage to psychological health/i, 'Missing psychological-health damage category.');
requireMatch(gate, /damage to or destruction of qualifying property/i, 'Missing property-damage category.');
requireMatch(gate, /destruction or corruption of data that are not used for professional purposes/i, 'Missing non-professional-data damage category.');
requireMatch(gate, /not automatically product-liability damage/i, 'Missing separation from ordinary game/payment disputes.');

requireMatch(gate, /safety that a person is entitled to expect/i, 'Missing defectiveness safety standard.');
requireMatch(gate, /safety-relevant cybersecurity requirements/i, 'Missing cybersecurity defectiveness factor.');
requireMatch(gate, /missing software update or upgrade necessary to maintain safety/i, 'Missing safety-update lifecycle rule.');
requireMatch(gate, /release hashes\/build identifiers/i, 'Missing release lineage evidence.');
requireMatch(gate, /critical dependency and SDK versions/i, 'Missing dependency/SDK evidence.');
requireMatch(gate, /do not write or enforce a blanket rule saying that use of an old version automatically transfers all legal risk/i, 'Missing unsupported-version user-fault safeguard.');
requireMatch(gate, /does \*\*not\*\* make every failure to update automatic contributory fault/i, 'Missing no-automatic-contributory-fault rule.');

requireMatch(gate, /third party's act or omission contributed alongside a defective product/i, 'Missing third-party attack causation safeguard.');
requireMatch(gate, /Provider responsibility and contractual indemnities.*must not.*automatically eliminating a mandatory product-liability right/is, 'Missing provider/indemnity boundary.');
requireMatch(gate, /Article 15.*does not permit liability.*to be excluded or limited by contract/is, 'Missing non-waivable-liability rule.');
requireMatch(gate, /Apple, Google Play, and Xsolla roles remain distinct/i, 'Missing Apple/Google/Xsolla separation.');

requireMatch(gate, /must not.*deleting unrelated legitimately purchased Diamonds/is, 'Missing Diamond isolation.');
requireMatch(gate, /does not itself restart, extend, shorten, duplicate, or convert the original one-time 30-Day VIP period/i, 'Missing 30-Day VIP isolation.');
requireMatch(gate, /Lifetime VIP remains a one-time entitlement available only during selected genuine promotional sales windows/i, 'Missing Lifetime VIP limited-window rule.');
requireMatch(gate, /may be withdrawn from future sale, may never return/i, 'Missing Lifetime VIP future-availability boundary.');
requireMatch(gate, /does not itself add an expiry date to an otherwise valid Lifetime VIP/i, 'Missing valid Lifetime VIP isolation.');

requireMatch(gate, /Article 9.*disclosure of relevant evidence/is, 'Missing evidence-disclosure checkpoint.');
requireMatch(gate, /Article 10.*rebuttable presumptions/is, 'Missing burden-of-proof presumptions checkpoint.');
requireMatch(gate, /protection of trade secrets/i, 'Missing trade-secret protection.');
requireMatch(gate, /Do not retain unrelated player data/i, 'Missing privacy/data-minimization safeguard.');
requireMatch(gate, /3-year limitation period/i, 'Missing 3-year limitation period.');
requireMatch(gate, /10-year expiry period/i, 'Missing 10-year expiry period.');
requireMatch(gate, /25-year/i, 'Missing latent-injury 25-year period.');
requireMatch(gate, /substantial modification/i, 'Missing substantial-modification analysis.');
requireMatch(gate, /permanent service shutdown, sale, merger, reorganization, or successor operator/i, 'Missing shutdown/successor evidence continuity.');
requireMatch(gate, /does not authorize purchasing a paid insurance product/i, 'Missing no-paid-service authorization safeguard.');

requireMatch(terms, /Nothing in these Terms excludes, limits, or overrides rights that cannot legally be excluded or limited/i, 'Canonical Terms lost mandatory-rights carveout.');
requireMatch(terms, /account.*compromised/is, 'Canonical Terms lost account-compromise handling.');
requireMatch(terms, /security.*update|update.*security/is, 'Canonical Terms lost security/update context.');
requireMatch(terms, /Diamonds/i, 'Canonical Terms lost Diamonds.');
requireMatch(terms, /30-Day VIP/i, 'Canonical Terms lost one-time 30-Day VIP.');
requireMatch(terms, /Lifetime VIP/i, 'Canonical Terms lost Lifetime VIP.');
requireMatch(terms, /Apple App Store/i, 'Canonical Terms lost Apple channel.');
requireMatch(terms, /Google Play/i, 'Canonical Terms lost Google Play channel.');
requireMatch(terms, /Xsolla/i, 'Canonical Terms lost Xsolla channel.');

requireMatch(purchases, /Diamonds/i, 'Canonical Purchases policy lost Diamonds.');
requireMatch(purchases, /30-Day VIP/i, 'Canonical Purchases policy lost one-time 30-Day VIP.');
requireMatch(purchases, /Lifetime VIP/i, 'Canonical Purchases policy lost Lifetime VIP.');
requireMatch(purchases, /refund/i, 'Canonical Purchases policy lost refund handling.');
requireMatch(purchases, /chargeback/i, 'Canonical Purchases policy lost chargeback handling.');

requireMatch(privacy, /security/i, 'Canonical Privacy Policy lost security handling.');
requireMatch(privacy, /incident/i, 'Canonical Privacy Policy lost incident handling.');

requireMatch(progress, /25\/25/i, 'Localization tracker no longer confirms 25/25 hub completion.');
requireMatch(progress, /100\/100/i, 'Localization tracker no longer confirms 100/100 document completion.');
requireMatch(progress, /Exact next unfinished locale\/document:\s*\*\*?None|Exact next unfinished locale\/document:\s*None/i, 'Localization queue appears reopened; localization must take priority.');

for (const [name, text] of [
  ['product-liability gate', gate],
  ['canonical Terms', terms],
  ['canonical Purchases policy', purchases],
  ['canonical Privacy Policy', privacy],
]) {
  if (/TyconX/.test(text)) errors.push(`Displayed TyconX brand typo found in ${name}.`);
  if (/\bTycoonX\b[^\n]{0,120}\bbeta\b|\bbeta\b[^\n]{0,120}\bTycoonX\b/i.test(text)) {
    errors.push(`Stale live-service beta wording found in ${name}.`);
  }
}

if (/TycoonX goes to full release on September 1, 2026/i.test(gate)) {
  errors.push('Stale future-tense September 1 release wording found in product-liability gate.');
}

console.log('TycoonX EU/German software product-liability 2026 QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: static legal-text QA preserves the post-December-9 scope, software/cybersecurity lifecycle rules, evidence safeguards, provider separation, mandatory rights, and TycoonX entitlement isolation.');
}
