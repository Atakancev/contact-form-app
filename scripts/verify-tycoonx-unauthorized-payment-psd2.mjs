#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gate = await readFile(path.join(root, 'TYCOONX_UNAUTHORIZED_PAYMENT_PSD2_ACCOUNT_TAKEOVER_RELEASE_GATE.md'), 'utf8');
const terms = await readFile(path.join(root, 'tyconx-terms-of-service.md'), 'utf8');
const purchases = await readFile(path.join(root, 'tyconx-purchase-refund-policy.md'), 'utf8');
const accountEnforcement = await readFile(path.join(root, 'TYCOONX_ACCOUNT_SUSPENSION_COMPROMISE_TERMINATION_RELEASE_GATE.md'), 'utf8');
const xsolla = await readFile(path.join(root, 'TYCOONX_XSOLLA_REFUND_CHARGEBACK_RELEASE_GATE.md'), 'utf8');
const googleChargebacks = await readFile(path.join(root, 'TYCOONX_GOOGLE_PLAY_CHARGEBACK_REVIEW_RELEASE_GATE.md'), 'utf8');
const appleRefunds = await readFile(path.join(root, 'TYCOONX_APPLE_REFUND_ENTITLEMENT_RELEASE_GATE.md'), 'utf8');
const progress = await readFile(path.join(root, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md'), 'utf8');

const failures = [];

function requireText(text, token, message) {
  if (!text.includes(token)) failures.push(message ?? `Missing required safeguard: ${token}`);
}

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) failures.push(message);
}

for (const token of [
  'Last reviewed: September 5, 2026',
  'An unauthorized **payment transaction**, an unauthorized **TycoonX account action**, and an unauthorized **store/provider purchase** are not the same legal or technical event.',
  'BGB § 675j',
  'BGB § 675u',
  'BGB § 675v',
  'BGB § 675w',
  'BGB § 676b',
  'BGB § 675e',
  'strong customer authentication',
  'authentication/recording alone is not necessarily enough to prove authorization',
  'EU alternative-payment distinction',
  'not billed through the App Store/In-App Purchase system',
  'Xsolla as merchant of record',
  'chargeback_opened -> permanent fraud ban',
  'Build one transaction identity across security, payment and entitlement systems',
  'Entitlement action follows authoritative transaction outcome, not accusation alone',
  'Purchased Diamonds do not expire solely because time passes.',
  '30-Day VIP remains a one-time, non-renewing 30-day entitlement.',
  'Lifetime VIP remains a one-time promotional entitlement available only during selected genuine sales windows.',
  'Refund, chargeback, and unauthorized-payment paths must not double-pay',
  'Account compromise and payment-instrument compromise may diverge',
  'Future PSD3 / Payment Services Regulation transition watch',
  'November 27, 2025',
  'September 1, 2026',
]) requireText(gate, token);

requireMatch(
  gate,
  /support must not promise, deny, or calculate a PSD2\/BGB bank-account reimbursement as though CK-Labs were the payer's payment service provider/i,
  'Missing CK-Labs-versus-payer-PSP role boundary.',
);

requireMatch(
  gate,
  /SCA or provider authentication as an important payment signal, but not as a magic conclusion/i,
  'Missing strong-customer-authentication evidentiary limit.',
);

requireMatch(
  gate,
  /chargeback can remain in progress and can later be won or lost/i,
  'Missing Xsolla non-final chargeback-state safeguard.',
);

requireMatch(
  gate,
  /won chargeback does not create a second Diamond grant/i,
  'Missing Diamond non-duplication safeguard after a won dispute.',
);

requireMatch(
  gate,
  /dispute review does not restart the 30-day entitlement/i,
  'Missing 30-Day VIP clock protection during payment disputes.',
);

requireMatch(
  gate,
  /dispute does not reopen the sales window/i,
  'Missing Lifetime VIP closed-window protection.',
);

requireMatch(
  gate,
  /future PSD3\/PSR rules are applied before their final legal status and applicability are verified/i,
  'Missing stop-ship safeguard against prematurely applying future PSD3/PSR rules.',
);

requireText(
  terms,
  'Do not automatically classify a good-faith account-compromise report, refund request, or chargeback as fraud by the account owner merely because it relates to the account.',
  'Canonical Terms lost good-faith compromise/refund/chargeback protection.',
);

requireText(
  terms,
  'CK-Labs may temporarily restrict an account or specific functions where reasonably necessary to investigate suspected compromise, fraud, payment disputes, exploit activity, abusive conduct, or other security concerns.',
  'Canonical Terms lost temporary payment/security investigation authority.',
);

requireText(
  terms,
  'CK-Labs will not use these correction rights to remove unrelated legitimately purchased value merely because another transaction or part of the account is disputed.',
  'Canonical Terms lost unrelated-valid-value protection.',
);

requireText(
  purchases,
  'A chargeback, refund request, or report of account compromise is not by itself proof that the account owner committed fraud.',
  'Purchases policy lost chargeback/account-compromise evidentiary protection.',
);

requireText(
  purchases,
  'CK-Labs will not use these corrections to remove unrelated legitimately purchased value except where reasonably necessary to reverse a specific invalid transaction or as otherwise permitted by law.',
  'Purchases policy lost transaction-specific entitlement correction.',
);

requireText(
  accountEnforcement,
  'Do not automatically classify every chargeback as fraud by the TycoonX account owner.',
  'Account-enforcement gate lost chargeback-versus-owner-fraud separation.',
);

requireMatch(
  xsolla,
  /chargeback/i,
  'Xsolla refund/chargeback gate no longer covers chargebacks.',
);
requireMatch(
  xsolla,
  /idempot/i,
  'Xsolla refund/chargeback gate no longer protects idempotent reconciliation.',
);
requireMatch(
  googleChargebacks,
  /account compromise/i,
  'Google chargeback gate no longer accounts for account compromise.',
);
requireMatch(
  appleRefunds,
  /refund/i,
  'Apple refund gate no longer covers refund reconciliation.',
);

for (const [label, text] of [
  ['unauthorized-payment gate', gate],
  ['canonical Terms', terms],
  ['canonical Purchases policy', purchases],
  ['account-enforcement gate', accountEnforcement],
  ['Xsolla gate', xsolla],
  ['Google chargeback gate', googleChargebacks],
  ['Apple refund gate', appleRefunds],
]) {
  if (/\bTyconX\b/.test(text)) failures.push(`Displayed legacy brand spelling found in ${label}.`);
}

if (/\bTycoonX\b[\s\S]{0,40}\bbeta\b/i.test(gate) || /\bbeta\b[\s\S]{0,40}\bTycoonX\b/i.test(gate)) {
  failures.push('Stale live-service beta wording found in unauthorized-payment gate.');
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

console.log('TycoonX unauthorized-payment, PSD2 and account-takeover QA');

if (failures.length > 0) {
  console.error('\nFAILED:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('PASS: unauthorized-payment classification, PSD2/German PSP-role boundaries, SCA evidence limits, Apple/Google/Xsolla routing, chargeback idempotency, Diamonds, 30-Day VIP, Lifetime VIP, localization, release and branding safeguards are present.');
