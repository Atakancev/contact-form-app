#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const paths = {
  gate: 'TYCOONX_EU_GERMAN_PRODUCT_LIABILITY_2026_RELEASE_GATE.md',
  terms: 'tyconx-terms-of-service.md',
  purchases: 'tyconx-purchase-refund-policy.md',
  privacy: 'tyconx-privacy-policy.md',
  progress: 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md',
};

const entries = await Promise.all(Object.entries(paths).map(async ([key, file]) => [
  key,
  await readFile(path.join(ROOT, file), 'utf8'),
]));
const text = Object.fromEntries(entries);
const errors = [];

function need(source, pattern, message) {
  if (!pattern.test(text[source])) errors.push(message);
}

const gateChecks = [
  [/Review date: September 3, 2026/i, 'Missing current review date.'],
  [/TycoonX went to full release on September 1, 2026/i, 'Missing live-service release checkpoint.'],
  [/Directive \(EU\) 2024\/2853/i, 'Missing Directive (EU) 2024/2853.'],
  [/after December 9, 2026/i, 'Missing post-December-9 application boundary.'],
  [/transposed[\s\S]{0,100}December 9, 2026/i, 'Missing transposition deadline.'],
  [/BT-Drs\. 21\/4297/i, 'Missing German government-bill checkpoint.'],
  [/March 4, 2026/i, 'Missing Bundestag first-reading checkpoint.'],
  [/April 13, 2026/i, 'Missing Bundestag committee-hearing checkpoint.'],
  [/must not be presented as though the new German implementing law is already in force/i, 'Missing draft-vs-enacted-law safeguard.'],
  [/re-check the enacted German text before December 9, 2026/i, 'Missing final German-law recheck.'],
  [/software[\s\S]{0,180}definition of a product/i, 'Missing software-as-product rule.'],
  [/communications network or cloud technology/i, 'Missing network/cloud software scope.'],
  [/software-as-a-service/i, 'Missing SaaS scope.'],
  [/free and open-source software[\s\S]{0,220}outside the course of a commercial activity/i, 'Missing narrow FOSS exclusion.'],
  [/death or personal injury/i, 'Missing personal-injury category.'],
  [/medically recognized damage to psychological health/i, 'Missing psychological-health category.'],
  [/damage to or destruction of qualifying property/i, 'Missing property-damage category.'],
  [/destruction or corruption of data that are not used for professional purposes/i, 'Missing non-professional-data category.'],
  [/not automatically product-liability damage/i, 'Missing ordinary-dispute separation.'],
  [/safety that a person is entitled to expect/i, 'Missing defectiveness safety standard.'],
  [/safety-relevant cybersecurity requirements/i, 'Missing cybersecurity factor.'],
  [/missing software update or upgrade necessary to maintain safety/i, 'Missing safety-update lifecycle rule.'],
  [/release hashes\/build identifiers/i, 'Missing release-lineage evidence.'],
  [/critical dependency and SDK versions/i, 'Missing dependency/SDK evidence.'],
  [/old version automatically transfers all legal risk/i, 'Missing unsupported-version safeguard.'],
  [/not\*\* make every failure to update automatic contributory fault/i, 'Missing no-automatic-user-fault rule.'],
  [/third party's act or omission contributed alongside a defective product/i, 'Missing third-party attack causation safeguard.'],
  [/contractual indemnities[\s\S]{0,250}mandatory product-liability right/i, 'Missing provider/indemnity boundary.'],
  [/Article 15[\s\S]{0,250}excluded or limited by contract/i, 'Missing non-waivable-liability rule.'],
  [/Apple, Google Play, and Xsolla roles remain distinct/i, 'Missing channel-role separation.'],
  [/unrelated legitimately purchased Diamonds/i, 'Missing Diamond isolation.'],
  [/does not itself restart, extend, shorten, duplicate, or convert the original one-time 30-Day VIP period/i, 'Missing 30-Day VIP isolation.'],
  [/Lifetime VIP remains a one-time entitlement available only during selected genuine promotional sales windows/i, 'Missing Lifetime VIP limited-window rule.'],
  [/may be withdrawn from future sale, may never return/i, 'Missing Lifetime VIP future-availability rule.'],
  [/does not itself add an expiry date to an otherwise valid Lifetime VIP/i, 'Missing valid Lifetime VIP isolation.'],
  [/Article 9[\s\S]{0,220}disclosure of relevant evidence/i, 'Missing evidence-disclosure checkpoint.'],
  [/Article 10[\s\S]{0,220}rebuttable presumptions/i, 'Missing burden-of-proof checkpoint.'],
  [/protection of trade secrets/i, 'Missing trade-secret safeguard.'],
  [/Do not retain unrelated player data/i, 'Missing data-minimization safeguard.'],
  [/3-year limitation period/i, 'Missing 3-year limitation period.'],
  [/10-year expiry period/i, 'Missing 10-year expiry period.'],
  [/25-year/i, 'Missing latent-injury 25-year period.'],
  [/substantial modification/i, 'Missing substantial-modification analysis.'],
  [/permanent service shutdown, sale, merger, reorganization, or successor operator/i, 'Missing shutdown/successor continuity.'],
  [/does not authorize purchasing a paid insurance product/i, 'Missing no-paid-service authorization safeguard.'],
];
for (const [pattern, message] of gateChecks) need('gate', pattern, message);

const canonicalChecks = [
  ['terms', /Nothing in these Terms excludes, limits, or overrides rights that cannot legally be excluded or limited/i, 'Canonical Terms lost mandatory-rights carveout.'],
  ['terms', /account[\s\S]{0,120}compromised/i, 'Canonical Terms lost account-compromise handling.'],
  ['terms', /Diamonds/i, 'Canonical Terms lost Diamonds.'],
  ['terms', /30-Day VIP/i, 'Canonical Terms lost one-time 30-Day VIP.'],
  ['terms', /Lifetime VIP/i, 'Canonical Terms lost Lifetime VIP.'],
  ['terms', /Apple App Store/i, 'Canonical Terms lost Apple channel.'],
  ['terms', /Google Play/i, 'Canonical Terms lost Google Play channel.'],
  ['terms', /Xsolla/i, 'Canonical Terms lost Xsolla channel.'],
  ['purchases', /Diamonds/i, 'Canonical Purchases policy lost Diamonds.'],
  ['purchases', /30-Day VIP/i, 'Canonical Purchases policy lost one-time 30-Day VIP.'],
  ['purchases', /Lifetime VIP/i, 'Canonical Purchases policy lost Lifetime VIP.'],
  ['purchases', /refund/i, 'Canonical Purchases policy lost refund handling.'],
  ['purchases', /chargeback/i, 'Canonical Purchases policy lost chargeback handling.'],
  ['privacy', /security/i, 'Canonical Privacy Policy lost security handling.'],
  ['privacy', /incident/i, 'Canonical Privacy Policy lost incident handling.'],
];
for (const [source, pattern, message] of canonicalChecks) need(source, pattern, message);

need('progress', /25\/25/i, 'Localization tracker no longer confirms 25/25 hubs.');
need('progress', /100\/100/i, 'Localization tracker no longer confirms 100/100 documents.');
need('progress', /Exact next unfinished locale\/document:[^\n]{0,50}\bNone\b/i, 'Localization queue appears reopened; localization must take priority.');

for (const [name, value] of Object.entries(text)) {
  if (name === 'progress') continue;
  if (/TyconX/.test(value)) errors.push(`Displayed TyconX brand typo found in ${name}.`);
  if (/\bTycoonX\b[^\n]{0,120}\bbeta\b|\bbeta\b[^\n]{0,120}\bTycoonX\b/i.test(value)) {
    errors.push(`Stale live-service beta wording found in ${name}.`);
  }
}
if (/TycoonX goes to full release on September 1, 2026/i.test(text.gate)) {
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
