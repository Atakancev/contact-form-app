#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gate = await readFile(path.join(root, 'TYCOONX_LEGAL_DOCUMENT_CHANGE_NOTICE_RELEASE_GATE.md'), 'utf8');
const terms = await readFile(path.join(root, 'tyconx-terms-of-service.md'), 'utf8');
const purchases = await readFile(path.join(root, 'tyconx-purchase-refund-policy.md'), 'utf8');
const privacy = await readFile(path.join(root, 'tyconx-privacy-policy.md'), 'utf8');
const community = await readFile(path.join(root, 'tycoonx-community-standards.md'), 'utf8');
const digitalChanges = await readFile(path.join(root, 'TYCOONX_EU_DIGITAL_PRODUCT_CHANGE_SHUTDOWN_GATE.md'), 'utf8');
const progress = await readFile(path.join(root, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md'), 'utf8');

const failures = [];

function requireText(text, token, message) {
  if (!text.includes(token)) failures.push(message ?? `Missing required safeguard: ${token}`);
}

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) failures.push(message);
}

for (const token of [
  'Non-material editorial correction',
  'Material contractual change',
  'Privacy-processing change',
  'Community/moderation change',
  'Purchase/payment-policy change',
  'BGB § 307',
  'No retroactive rewrite of completed transactions or historical conduct',
  'Notice is not automatically consent',
  'Rejection must be handled lawfully, not punitively',
  'GDPR Article 13(3)',
  'Article 14(2)',
  'Apple, Google Play and Xsolla',
  'Versioning and evidence are mandatory for material changes',
  'Old versions must remain retrievable internally',
  'Localization synchronization is part of the release, not an afterthought',
  '30-Day VIP',
  'Lifetime VIP',
  'September 1, 2026',
  'Do not describe the live Service, current users, current legal terms, Diamonds, 30-Day VIP, Lifetime VIP or current rewards as beta.',
]) requireText(gate, token);

requireMatch(
  gate,
  /continued use always means acceptance/i,
  'Missing safeguard against an unlimited continued-use amendment clause.',
);

requireMatch(
  gate,
  /Privacy Policy is a transparency document, not a universal consent form/i,
  'Missing separation between privacy transparency and consent.',
);

requireMatch(
  gate,
  /before the further processing/i,
  'Missing prior-information timing for new GDPR processing purposes.',
);

requireMatch(
  gate,
  /significant changes? to the terms and conditions/i,
  'Missing DSA significant-change notice safeguard.',
);

requireMatch(
  gate,
  /old version associated with already completed transactions/i,
  'Missing historical purchase-policy version preservation.',
);

requireMatch(
  gate,
  /grant, spend, replay or confiscate Diamonds/i,
  'Missing Diamond isolation from legal-document state.',
);

requireMatch(
  gate,
  /reset, restart, shorten or duplicate the one-time 30-Day VIP clock/i,
  'Missing 30-Day VIP isolation from legal-document state.',
);

requireMatch(
  gate,
  /revoke, duplicate or convert Lifetime VIP/i,
  'Missing Lifetime VIP isolation from legal-document state.',
);

requireText(
  terms,
  'A change to these Terms does not retroactively authorize conduct that was unlawful when the relevant transaction occurred.',
  'Canonical Terms lost the no-retroactive-authorization safeguard.',
);
requireText(
  terms,
  'Where applicable law requires express consent rather than notice or continued use, CK-Labs will request that consent.',
  'Canonical Terms lost the express-consent-versus-notice safeguard.',
);

requireText(
  purchases,
  'A completed one-time purchase is not retroactively repriced merely because CK-Labs later changes a price.',
  'Canonical Purchases policy lost the no-retroactive-repricing safeguard.',
);
requireMatch(
  purchases,
  /Lifetime VIP/i,
  'Canonical Purchases policy no longer distinguishes Lifetime VIP.',
);
requireMatch(
  purchases,
  /30-Day VIP/i,
  'Canonical Purchases policy no longer distinguishes 30-Day VIP.',
);
requireMatch(
  privacy,
  /consent/i,
  'Canonical Privacy Policy no longer addresses consent.',
);
requireMatch(
  community,
  /moderation/i,
  'Canonical Community Standards no longer address moderation.',
);
requireMatch(
  digitalChanges,
  /327r/i,
  'Digital-product modification gate no longer protects the separate BGB § 327r path.',
);

for (const [label, text] of [
  ['legal-document change gate', gate],
  ['canonical Terms', terms],
  ['canonical Purchases policy', purchases],
  ['canonical Privacy Policy', privacy],
  ['canonical Community Standards', community],
]) {
  if (/\bTyconX\b/.test(text)) failures.push(`Displayed legacy brand spelling found in ${label}.`);
}

requireText(
  progress,
  '100/100 localized full documents are currently confirmed current',
  'Localization progress no longer confirms all 100 localized full documents as current.',
);
requireText(
  progress,
  'Exact next unfinished locale/document: None',
  'Localization queue is no longer closed; localization must resume before incremental hardening.',
);
requireText(
  progress,
  'September 1, 2026',
  'Full-release date invariant is missing from localization progress.',
);

console.log('TycoonX legal-document change, notice and versioning QA');

if (failures.length > 0) {
  console.error('\nFAILED:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('PASS: material-change classification, no retroactive transaction rewrite, consent-versus-notice separation, GDPR/DSA routing, version evidence, paid-entitlement isolation, localization, brand and release invariants are present.');
