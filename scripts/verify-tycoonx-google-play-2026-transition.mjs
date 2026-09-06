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
  'one **one program per region at a time**'.replace('one **one', '**one'),
  'Treat a program switch as a controlled Play Console/backend transition',
  'A blog announcement is evidence of an announcement, not a substitute for later operative program terms or actual account eligibility.',
  'United Kingdom:** Billing Choice program',
  'United States:** use Google\'s **existing alternative billing in the United States** program',
  '**existing external content links program**',
  'Do not assume the US is enrolled through the new UK/EEA Billing Choice program',
  'Play Billing Library **9.1 or higher**',
  'order history, subscription management where a subscription exists, customer service, and refund requests',
  'starting **October 1, 2026**',
  'all authorized US alternative-billing transactions can be reported to Google within **24 hours**',
  '$0 transactions arising from free-trial purchases',
  'Purchase links versus external-app-download links',
  '24-hour external-link attribution and reporting are different concepts',
  'Externaltransactions APIs',
  'Xsolla payment success remains the payment-provider authority',
  'Google external transaction state remains an additional platform reporting/commercial obligation',
  'Xsolla transaction ID',
  'Google external transaction ID',
  'September 30, 2026: Australia and Japan fee/billing-choice rollout',
  'Source-precedence and conflicting-date control',
  'earlier Google/Android Developers announcement listed **Japan with the December 31, 2026 Korea phase**',
  'current Play Console Help timeline now lists **Japan with Australia on September 30, 2026**',
  'Treat this as a live policy-source divergence',
  'use the most current operative program-specific Google Play documentation and actual Play Console eligibility/enrollment',
  '**fail closed** for the new route and do not book the lower fee',
  'Never rewrite historical economics because Google later changes a rollout date or documentation.',
  'December 31, 2026: South Korea rollout',
  'TycoonX is a game: Level Up, not Apps Experience Program',
  'Google Play Games Level Up',
  'September 3, 2026',
  'Enrollment being available does not equal approval',
  'Mobile, Foldables, and Tablets',
  'Japan: external payments and User Choice Billing are mutually exclusive',
  'cannot offer External Payments and User Choice Billing at the same time',
  'Do not infer an Australia external-link permission',
  'Apps Experience Program is not an automatic fallback',
  'explicit enrollment, implementation/maintenance of applicable guidelines, Google validation, and approval',
  'Australia pre-September-30 fail-closed rule',
  'existing User Choice Billing pilot says games are eligible in the EEA and Japan',
  'Brazil, Indonesia, and South Africa',
  'India and South Korea current-program controls',
  'India has a separate current alternative-billing program that expressly permits apps **and games**',
  'South Korea has a separate current alternative-billing program that expressly permits apps **and games**',
  'Report all authorized India alternative-billing transactions to Google within **24 hours**',
  'Report all authorized South Korea alternative-billing transactions within **24 hours**',
  'service fee reduced by 4%',
  'embedded webview',
  '10% Korean VAT',
  'India and South Korea are not waiting-room markets',
  'source-publication/retrieval/effective dates for policy decisions',
  'any official-source conflict and how it was resolved',
  'Voided Purchases API (`purchases.voidedpurchases.list`)',
  '`PendingRefundReviewNotification`',
  '`orders.reviewrefund`',
  '24-hour response window',
  'Purchased Diamonds do not expire solely because time passes.',
  'one-time, non-renewing 30-day entitlement',
  'selected genuine sales windows',
  'Do not bypass Google parental/supervised-user controls to reach Xsolla.',
  'node scripts/verify-tycoonx-google-play-2026-transition.mjs',
];

for (const needle of requiredGate) requireText(gate, needle, 'Google Play 2026 gate');

forbid(gate, 'TyconX', 'Google Play 2026 gate');
forbid(gate, 'TycoonX beta', 'Google Play 2026 gate');
forbid(gate, 'TycoonX is in beta', 'Google Play 2026 gate');
forbid(gate, '**Australia:** User Choice Billing is an existing alternative-billing route for eligible apps/games.', 'Google Play 2026 gate');

requireText(tracker, 'All 25 target locales and all 100 localized full documents are current.', 'localization tracker');
requireText(tracker, 'Localized full documents:** 100/100, **100%**', 'localization tracker');
requireText(tracker, 'Localized hubs:** 25/25, **100%**', 'localization tracker');
requireText(tracker, 'Exact next unfinished locale/document: None.', 'localization tracker');

if (!/October 1, 2026[\s\S]{0,4000}24 hours/i.test(gate)) {
  errors.push('Google Play 2026 gate: October 1 US transition is not tied to a 24-hour reporting control.');
}

if (!/linkout time[\s\S]{0,1000}report-submission time/i.test(gate)) {
  errors.push('Google Play 2026 gate: attribution and report-deadline timestamps are not independently preserved.');
}

if (!/one \*\*one program per region at a time\*\*/i.test(gate)) {
  errors.push('Google Play 2026 gate: current regional program exclusivity rule is missing.');
}

if (!/source-precedence[\s\S]{0,1800}December 31, 2026[\s\S]{0,1000}September 30, 2026[\s\S]{0,1600}fail closed/i.test(gate)) {
  errors.push('Google Play 2026 gate: Google policy-source divergence is not tied to a fail-closed precedence rule.');
}

if (!/official source title\/URL[\s\S]{0,1000}retrieved[\s\S]{0,1000}accepted program terms/i.test(gate)) {
  errors.push('Google Play 2026 gate: dated source/Play Console decision evidence is incomplete.');
}

if (!/TycoonX is a game[\s\S]{0,500}Level Up/i.test(gate)) {
  errors.push('Google Play 2026 gate: TycoonX is not explicitly classified into the games program review path.');
}

if (!/Level Up[\s\S]{0,1500}validation\/approval[\s\S]{0,1500}regional rollout date/i.test(gate)) {
  errors.push('Google Play 2026 gate: lower Level Up rates are not conditioned on approval and rollout timing.');
}

if (!/Mobile, Foldables, and Tablets/.test(gate)) {
  errors.push('Google Play 2026 gate: September 30 Level Up form-factor checkpoint is missing.');
}

if (!/Japan[\s\S]{0,2000}cannot offer External Payments and User Choice Billing at the same time/i.test(gate)) {
  errors.push('Google Play 2026 gate: Japan program exclusivity is missing.');
}

if (!/Australia[\s\S]{0,2500}existing User Choice Billing pilot[\s\S]{0,1200}non-gaming/i.test(gate)) {
  errors.push('Google Play 2026 gate: Australia pre-rollout game-eligibility fail-closed rule is missing.');
}

if (!/Brazil, Indonesia, and South Africa[\s\S]{0,800}non-gaming/i.test(gate)) {
  errors.push('Google Play 2026 gate: non-game UCB pilot markets are not kept closed for TycoonX.');
}

if (!/India[\s\S]{0,1200}apps \*\*and games\*\*[\s\S]{0,2500}within \*\*24 hours\*\*/i.test(gate)) {
  errors.push('Google Play 2026 gate: India game eligibility and 24-hour alternative-billing reporting are not jointly enforced.');
}

if (!/South Korea[\s\S]{0,1200}apps \*\*and games\*\*[\s\S]{0,3000}within \*\*24 hours\*\*/i.test(gate)) {
  errors.push('Google Play 2026 gate: South Korea game eligibility and 24-hour alternative-billing reporting are not jointly enforced.');
}

if (!/South Korea[\s\S]{0,4500}embedded webview/i.test(gate)) {
  errors.push('Google Play 2026 gate: current South Korea web-based alternative-payment UX safeguard is missing.');
}

if (!/South Korea[\s\S]{0,6000}10% Korean VAT/i.test(gate)) {
  errors.push('Google Play 2026 gate: current South Korea alternative-billing tax treatment is missing.');
}

if (!/India[\s\S]{0,4000}generic external-webshop steering permission/i.test(gate)) {
  errors.push('Google Play 2026 gate: India alternative billing is not separated from generic Xsolla browser steering.');
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