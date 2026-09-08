#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gatePath = path.join(root, 'TYCOONX_APPLE_REFUND_HISTORY_V2_RECONCILIATION_RELEASE_GATE.md');
const progressPath = path.join(root, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const [text, progress] = await Promise.all([
  readFile(gatePath, 'utf8'),
  readFile(progressPath, 'utf8'),
]);

const failures = [];
const required = [
  'Get Refund History V1',
  '/inApps/v2/refund/lookup/{anyTransactionId}',
  'appTransactionId',
  'signedTransactions',
  'at most **20** per page',
  'hasMore=false',
  'revision',
  'customer-level refund history',
  'App Store-approved refunds',
  'ascending order by `revocationDate`',
  '10 requests per second in production',
  'RateLimitExceededError',
  'Retry-After',
  'Diamonds',
  '30 consecutive days',
  'Lifetime VIP',
  'limited-time promotional one-time entitlement',
  'mandatory German/EU consumer remedies',
];

for (const token of required) {
  if (!text.includes(token)) {
    failures.push(`Missing Apple Refund History V2 safeguard: ${token}`);
  }
}

if (!/V1.*deprecated/is.test(text)) {
  failures.push('Deprecated Get Refund History V1 migration warning is missing.');
}

if (!/start without a `revision`/i.test(text)) {
  failures.push('Initial full-scan no-revision rule is missing.');
}

if (!/If `hasMore=true`, request the next page with the exact `revision` returned by the previous page/i.test(text)) {
  failures.push('Refund History pagination chaining rule is missing.');
}

if (!/do not.*advance the durable customer checkpoint.*until all pages.*verified and reconciled/is.test(text)) {
  failures.push('Crash-safe final revision checkpoint rule is missing.');
}

if (!/revision from customer A deliberately supplied to customer B proving it is rejected/i.test(text)) {
  failures.push('Cross-customer revision isolation regression case is missing.');
}

if (!/do not expose a public "proxy" endpoint.*arbitrary Apple transaction ID/is.test(text)) {
  failures.push('Refund-history privacy proxy boundary is missing.');
}

if (!/Knowing or guessing an Apple transaction identifier is not proof of ownership/i.test(text)) {
  failures.push('Apple transaction ID ownership boundary is missing.');
}

if (!/verify the Apple JWS signature and certificate trust/i.test(text)) {
  failures.push('Per-transaction JWS verification requirement is missing.');
}

if (!/Never decode a failed JWS and use its attacker-controlled `transactionId`/i.test(text)) {
  failures.push('Failed-JWS identifier isolation is missing.');
}

if (!/empty `signedTransactions` array.*does not, by itself, prove/is.test(text)) {
  failures.push('Empty refund-history response limitation is missing.');
}

if (!/one transaction-specific cumulative correction budget/i.test(text)) {
  failures.push('Cross-path refund idempotency budget is missing.');
}

if (!/refund first processed from a `REFUND` notification and later seen in Refund History is still one refund/i.test(text)) {
  failures.push('REFUND notification/history convergence rule is missing.');
}

if (!/never remove more purchased Diamond value than that transaction originally granted/i.test(text)) {
  failures.push('Diamond correction cap is missing.');
}

if (!/transaction A granted 500 Diamonds.*maximum transaction-specific purchased-value correction of 500/is.test(text)) {
  failures.push('Concrete Diamond correction example is missing.');
}

if (!/One-time 30-Day VIP remains a non-renewing entitlement lasting \*\*30 consecutive days\*\*/i.test(text)) {
  failures.push('Exact 30-Day VIP meaning is missing.');
}

if (!/Lifetime VIP remains a limited-time promotional one-time entitlement available only during genuine selected sales windows/i.test(text)) {
  failures.push('Lifetime VIP sales-window rule is missing.');
}

if (!/Refund History can show that a historical Lifetime VIP transaction was refunded\. It cannot reopen Lifetime VIP for sale/i.test(text)) {
  failures.push('Refund History must not reopen Lifetime VIP sales.');
}

if (!/App Store-approved refund is a payment\/refund event, not automatically proof of/is.test(text)) {
  failures.push('Refund versus misconduct distinction is missing.');
}

if (!/HTTP `429`.*honor `Retry-After`/is.test(text)) {
  failures.push('Refund History rate-limit handling is missing.');
}

if (!/refund history is payment-related personal data/i.test(text)) {
  failures.push('Refund-history privacy classification is missing.');
}

if (!/materially expands the categories, purposes, recipients, or retention.*update the English Privacy Policy first.*25 localized Privacy pages/is.test(text)) {
  failures.push('Privacy/localization reopening trigger is missing.');
}

if (!/absent Apple refund-history row does not suppress a valid German\/EU statutory remedy/i.test(text)) {
  failures.push('Mandatory-rights regression case is missing.');
}

if (!/100\/100/.test(progress) || !/25\/25/.test(progress)) {
  failures.push('Localization progress is no longer complete.');
}

if (/\bTyconX\b/.test(text)) {
  failures.push('Displayed legacy TyconX spelling found in Apple Refund History V2 gate.');
}

if (/\bTycoonX\b.{0,20}\bbeta\b|\bbeta\b.{0,20}\bTycoonX\b/i.test(text)) {
  failures.push('Stale TycoonX beta wording found in Apple Refund History V2 gate.');
}

if (failures.length > 0) {
  console.error('TycoonX Apple Refund History V2 verifier failed:\n');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX Apple Refund History V2 verifier passed.');
