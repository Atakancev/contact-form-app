#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_GOOGLE_PLAY_2026_PAYMENT_TRANSITION_GATE.md');
const trackerPath = path.join(ROOT, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const gate = await readFile(gatePath, 'utf8');
const tracker = await readFile(trackerPath, 'utf8');

const errors = [];

function requireText(text, needle, label) {
  if (!text.includes(needle)) errors.push(`${label}: missing "${needle}"`);
}

function forbid(text, needle, label) {
  if (text.includes(needle)) errors.push(`${label}: forbidden stale wording "${needle}"`);
}

const requiredGate = [
  'Last reviewed: September 6, 2026',
  'TycoonX is in full release.',
  'United Kingdom:** Billing Choice program',
  'United States:** use Google\'s **existing alternative billing in the United States** program',
  '**existing external content links program**',
  'Do not assume the US is enrolled through the new UK/EEA Billing Choice program',
  'Play Billing Library **9.1 or higher**',
  'order history, subscription management where a subscription exists, customer service, and refund requests',
  'Google\'s current US alternative-billing program, updated July 22, 2026',
  'starting **October 1, 2026**',
  'all authorized US alternative-billing transactions can be reported to Google within **24 hours**',
  'Google\'s current US external content links program, also updated July 22, 2026',
  '$0 transactions arising from free-trial purchases',
  'Purchase links versus external-app-download links',
  '24-hour attribution and reporting are different concepts',
  'Xsolla payment success remains the payment-provider authority',
  'Google external/alternative transaction state remains an additional platform reporting/commercial obligation',
  'September 30, 2026: Australia and Japan fee/billing-choice rollout',
  'Apps Experience Program / revamped Play Games Level Up Program',
  'do not claim TycoonX participates until CK-Labs has reviewed the final eligibility/integration requirements and actual Play Console acceptance/enrollment',
  'Voided Purchases API (`purchases.voidedpurchases.list`)',
  '`PendingRefundReviewNotification`',
  'Purchased Diamonds do not expire solely because time passes.',
  'one-time, non-renewing 30-day entitlement',
  'selected genuine sales windows',
  'Do not bypass Google parental/supervised-user controls to reach Xsolla.',
  'a US user is routed through UK/EEA Billing Choice enrollment assumptions without the correct US program',
  'node scripts/verify-tycoonx-google-play-2026-transition.mjs',
];

for (const needle of requiredGate) requireText(gate, needle, 'Google Play 2026 gate');

forbid(gate, 'TyconX', 'Google Play 2026 gate');
forbid(gate, 'TycoonX beta', 'Google Play 2026 gate');
forbid(gate, 'TycoonX is in beta', 'Google Play 2026 gate');

requireText(tracker, 'All 25 target locales and all 100 localized full documents are current.', 'localization tracker');
requireText(tracker, 'Localized full documents:** 100/100, **100%**', 'localization tracker');
requireText(tracker, 'Localized hubs:** 25/25, **100%**', 'localization tracker');
requireText(tracker, 'Exact next unfinished locale/document: None.', 'localization tracker');

if (!/October 1, 2026[\s\S]{0,5000}24 hours/i.test(gate)) {
  errors.push('Google Play 2026 gate: October 1 US transition is not tied to an operational 24-hour reporting control.');
}

if (!/order history[\s\S]{0,300}refund requests/i.test(gate)) {
  errors.push('Google Play 2026 gate: required US alternative-billing post-purchase support links are incomplete.');
}

if (!/linkout time[\s\S]{0,1000}report-submission time/i.test(gate)) {
  errors.push('Google Play 2026 gate: linkout attribution and report-deadline timestamps are not independently preserved.');
}

if (!/30-Day VIP remains a \*\*one-time, non-renewing 30-day entitlement\*\*/.test(gate)) {
  errors.push('Google Play 2026 gate: 30-Day VIP product invariant is missing or weakened.');
}

if (!/Lifetime VIP remains a \*\*one-time promotional entitlement available only during selected genuine sales windows\*\*/.test(gate)) {
  errors.push('Google Play 2026 gate: Lifetime VIP limited-sales-window invariant is missing or weakened.');
}

if (errors.length) {
  console.error('TycoonX Google Play 2026 transition verification FAILED:\n');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('TycoonX Google Play 2026 transition verification PASSED.');
