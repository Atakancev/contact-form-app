#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_FREE_DIGITAL_SERVICE_PERSONAL_DATA_TERMINATION_GATE.md');
const deletePagePath = path.join(ROOT, 'app/tycoonx-delete-account/page.tsx');
const termsPath = path.join(ROOT, 'tyconx-terms-of-service.md');
const privacyPath = path.join(ROOT, 'tyconx-privacy-policy.md');
const progressPath = path.join(ROOT, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

const [gate, deletePage, terms, privacy, progress] = await Promise.all([
  readFile(gatePath, 'utf8'),
  readFile(deletePagePath, 'utf8'),
  readFile(termsPath, 'utf8'),
  readFile(privacyPath, 'utf8'),
  readFile(progressPath, 'utf8'),
]);

requireMatch(gate, /September 1, 2026/i, 'Missing September 1, 2026 release checkpoint.');
requireMatch(gate, /BGB § 327\(3\)/i, 'Missing BGB § 327(3) personal-data digital-product scope.');
requireMatch(gate, /BGB § 312\(1a\)/i, 'Missing BGB § 312(1a) exception analysis.');
requireMatch(gate, /exclusively.*contractual obligations.*legal requirements/is, 'Missing exclusive service/legal processing exception.');
requireMatch(gate, /personal data.*not.*price/is, 'Missing safeguard against treating personal data as money.');
requireMatch(gate, /Directive \(EU\) 2019\/770/i, 'Missing Directive (EU) 2019/770 baseline.');
requireMatch(gate, /BGB § 516a/i, 'Missing free digital gift classification checkpoint.');
requireMatch(gate, /BGB § 327q\(1\)/i, 'Missing BGB § 327q(1) contract-validity rule.');
requireMatch(gate, /does \*\*not\*\* by itself affect the validity of the contract/i, 'Missing privacy-right contract-validity protection.');
requireMatch(gate, /BGB § 327q\(2\)/i, 'Missing BGB § 327q(2) narrow termination rule.');
requireMatch(gate, /continuing the contract is unreasonable/i, 'Missing unreasonable-continuation threshold.');
requireMatch(gate, /BGB § 327q\(3\)/i, 'Missing BGB § 327q(3) no-damages rule.');
requireMatch(gate, /privacy withdrawal fee/i, 'Missing privacy-right retaliation example.');
requireMatch(gate, /BGB § 327p/i, 'Missing BGB § 327p post-termination content rule.');
requireMatch(gate, /Article 16 of Directive \(EU\) 2019\/770/i, 'Missing Directive Article 16 content rule.');
requireMatch(gate, /free of charge/i, 'Missing free content-retrieval requirement.');
requireMatch(gate, /commonly used, machine-readable format/i, 'Missing machine-readable retrieval requirement.');
requireMatch(gate, /jointly generated content/i, 'Missing collaborative-content safeguard.');
requireMatch(gate, /original art/i, 'Missing TycoonX art example.');
requireMatch(gate, /music or beats/i, 'Missing TycoonX music example.');
requireMatch(gate, /books or written works/i, 'Missing TycoonX books example.');
requireMatch(gate, /GDPR portability and BGB § 327p are the same right/i, 'Missing GDPR-vs-contract retrieval distinction.');
requireMatch(gate, /Apple/i, 'Missing Apple deletion-role checkpoint.');
requireMatch(gate, /Google Play/i, 'Missing Google Play deletion-role checkpoint.');
requireMatch(gate, /Xsolla/i, 'Missing Xsolla payment-record separation.');
requireMatch(gate, /purchased Diamonds/i, 'Missing purchased-Diamond isolation.');
requireMatch(gate, /one-time 30-Day VIP/i, 'Missing 30-Day VIP isolation.');
requireMatch(gate, /limited-window Lifetime VIP/i, 'Missing Lifetime VIP isolation.');
requireMatch(gate, /account compromise/i, 'Missing account-compromise separation.');
requireMatch(gate, /Hacks, exploits, abuse, and moderation remain separate/i, 'Missing exploit/moderation separation.');
requireMatch(gate, /Permanent service shutdown and successor scenarios/i, 'Missing shutdown/successor content-retrieval checkpoint.');
requireMatch(gate, /all 25 locales/i, 'Missing localization invariant reference.');
requireMatch(gate, /100 localized full documents/i, 'Missing localized document-count invariant.');

requireMatch(deletePage, /Deleting your account does not waive any refund, statutory withdrawal, conformity, or other mandatory consumer right/i, 'Deletion page lost mandatory-rights safeguard.');
requireMatch(deletePage, /separate right to retrieve qualifying content that you provided or created/i, 'Deletion page missing qualifying content-retrieval notice.');
requireMatch(deletePage, /after contract termination where applicable law requires it/i, 'Deletion page improperly limits retrieval to pre-deletion requests.');
requireMatch(deletePage, /Diamonds, one-time 30-Day VIP, and limited-window Lifetime VIP/i, 'Deletion page lost paid-product distinctions.');
requireMatch(deletePage, /Apple App Store, Google Play, Xsolla/i, 'Deletion page lost payment-channel separation.');

requireMatch(terms, /Nothing in these Terms excludes, limits, or overrides rights that cannot legally be excluded or limited/i, 'Canonical Terms lost mandatory-rights baseline.');
requireMatch(terms, /Promotional, gifted, event, test, review, compensation, or free Diamonds/i, 'Canonical Terms lost free/promotional grant distinction.');
requireMatch(terms, /30-Day VIP/i, 'Canonical Terms lost 30-Day VIP distinction.');
requireMatch(terms, /Lifetime VIP/i, 'Canonical Terms lost Lifetime VIP distinction.');

requireMatch(privacy, /Merely using TycoonX is not treated as consent/i, 'Privacy Policy lost no-implied-consent rule.');
requireMatch(privacy, /You can withdraw consent at any time for future processing/i, 'Privacy Policy lost consent-withdrawal rule.');
requireMatch(privacy, /Optional information or processing that is not necessary for the core Service is handled separately/i, 'Privacy Policy lost optional-vs-necessary processing distinction.');
requireMatch(privacy, /Deleting your TycoonX account is separate from requesting a payment refund/i, 'Privacy Policy lost deletion-vs-refund separation.');

requireMatch(progress, /25\/25.*target locales/i, 'Localization tracker no longer reports 25/25 target locales.');
requireMatch(progress, /100\/100 localized full documents/i, 'Localization tracker no longer reports 100/100 localized full documents.');
requireMatch(progress, /Exact next unfinished locale\/document:\s*None\./i, 'Localization tracker no longer reports no unfinished locale/document.');

for (const [name, text] of [
  ['free digital-service gate', gate],
  ['account deletion page', deletePage],
  ['canonical Terms', terms],
  ['canonical Privacy Policy', privacy],
  ['localization tracker', progress],
]) {
  if (/TyconX/.test(text)) errors.push(`Displayed brand typo TyconX found in ${name}.`);
  if (/TycoonX (?:is|remains|currently is|service is) (?:a )?beta\b/i.test(text)) {
    errors.push(`Stale live-service beta wording found in ${name}.`);
  }
}

console.log('TycoonX free digital service, personal-data contract, and termination QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: free-service scope, privacy-right separation, post-termination content retrieval, account deletion, and paid-entitlement isolation are protected.');
}
