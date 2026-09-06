#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_GOOGLE_PLAY_BILLING_LIBRARY_VERSION_LIFECYCLE_RELEASE_GATE.md');
const transitionPath = path.join(ROOT, 'TYCOONX_GOOGLE_PLAY_2026_PAYMENT_TRANSITION_GATE.md');
const billingChoicePath = path.join(ROOT, 'TYCOONX_GOOGLE_PLAY_BILLING_CHOICE_PBL_9_1_IMPLEMENTATION_GATE.md');
const trackerPath = path.join(ROOT, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const [gate, transition, billingChoice, tracker] = await Promise.all([
  readFile(gatePath, 'utf8'),
  readFile(transitionPath, 'utf8'),
  readFile(billingChoicePath, 'utf8'),
  readFile(trackerPath, 'utf8'),
]);

const errors = [];

function requireText(text, needle, label) {
  if (!text.includes(needle)) errors.push(`${label}: missing "${needle}"`);
}

function requireMatch(text, pattern, label) {
  if (!pattern.test(text)) errors.push(label);
}

function forbid(text, needle, label) {
  if (text.includes(needle)) errors.push(`${label}: forbidden stale wording "${needle}"`);
}

const requiredGate = [
  'Last reviewed: September 6, 2026',
  'TycoonX is in full release.',
  'Play Billing Library 7: normal new-app/update deadline **August 31, 2026**; extension deadline **November 1, 2026**',
  'Play Billing Library 8: normal new-app/update deadline **August 31, 2027**; extension deadline **November 1, 2027**',
  'Play Billing Library 9: normal new-app/update deadline **August 31, 2028**; extension deadline **November 1, 2028**',
  'The August 31, 2026 normal deadline for Play Billing Library 7 has therefore already passed.',
  '**new apps and updates must use a supported version**',
  'do not submit a build that relies on Play Billing Library 7 merely because an older production build still works',
  'Play Billing Library 8 or 9 as the supported baseline for ordinary Google Play Billing submissions',
  'A Play Billing Library 7 extension is not automatic.',
  'retain evidence that the extension was actually requested/available and accepted',
  'After November 1, 2026, do not rely on Play Billing Library 7',
  'Play Billing Library 9.1 or higher',
  'a build using Play Billing Library 8 may still satisfy the ordinary library-support lifecycle while being **ineligible for TycoonX Billing Choice**',
  'com.google.android.play.billingclient.version',
  'transitive SDK/plugin dependencies',
  'exact AAB/APK intended for production',
  'A deprecation warning or old installed client is a release-maintenance issue, not evidence of fraud',
  'grant paid entitlement only after Google reports a verified `PURCHASED` state, not while the purchase is `PENDING`',
  'acknowledgement clock begins only after the purchase reaches the completed state',
  'Purchased Diamonds are consumable paid value and do not expire solely because time passes.',
  '30-Day VIP remains a **one-time, non-renewing 30-day entitlement**',
  'Lifetime VIP remains a **one-time promotional entitlement available only during selected genuine sales windows**',
  'Google remains authoritative for Google Play purchase/refund/revocation state.',
  'Client callbacks alone are not payment authority.',
  'after August 31, 2026, a new TycoonX update is submitted with Play Billing Library 7 without verified extension coverage',
  'November 1, 2026 is treated as an automatic grace period without Play Console evidence',
  'node scripts/verify-tycoonx-google-play-billing-library-lifecycle.mjs',
];

for (const needle of requiredGate) requireText(gate, needle, 'Google Play Billing Library lifecycle gate');

requireText(transition, 'Play Billing Library **9.1 or higher**', 'Google Play 2026 transition gate');
requireText(billingChoice, '9.1', 'Billing Choice implementation gate');
requireText(tracker, 'All 25 target locales and all 100 localized full documents are current.', 'localization tracker');
requireText(tracker, 'Exact next unfinished locale/document: None.', 'localization tracker');
requireText(tracker, 'September 1, 2026', 'localization tracker');

requireMatch(
  gate,
  /August 31, 2026[\s\S]{0,500}November 1, 2026[\s\S]{0,2500}extension[\s\S]{0,2000}Play Console/i,
  'Google Play Billing Library lifecycle gate: 2026 deadline is not tied to evidence-based extension handling.',
);

requireMatch(
  gate,
  /Play Billing Library 8[\s\S]{0,1800}Billing Choice[\s\S]{0,800}9\.1/i,
  'Google Play Billing Library lifecycle gate: generic supported-version baseline is not separated from Billing Choice 9.1+.',
);

requireMatch(
  gate,
  /transitive[\s\S]{0,1200}merged `AndroidManifest\.xml`[\s\S]{0,1200}AAB\/APK/i,
  'Google Play Billing Library lifecycle gate: artifact/transitive-dependency verification is incomplete.',
);

requireMatch(
  gate,
  /old installed client[\s\S]{0,2500}not evidence of fraud/i,
  'Google Play Billing Library lifecycle gate: old-client handling is not separated from fraud/enforcement.',
);

forbid(gate, 'TyconX', 'Google Play Billing Library lifecycle gate');
forbid(gate, 'TycoonX beta', 'Google Play Billing Library lifecycle gate');
forbid(gate, 'TycoonX is in beta', 'Google Play Billing Library lifecycle gate');

if (errors.length) {
  console.error('TycoonX Google Play Billing Library lifecycle verification FAILED:\n');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('TycoonX Google Play Billing Library lifecycle verification PASSED.');
