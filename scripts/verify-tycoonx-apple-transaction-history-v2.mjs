#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gatePath = path.join(root, 'TYCOONX_APPLE_TRANSACTION_HISTORY_V2_RECONCILIATION_RELEASE_GATE.md');
const progressPath = path.join(root, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const [gate, progress] = await Promise.all([
  readFile(gatePath, 'utf8'),
  readFile(progressPath, 'utf8'),
]);

const failures = [];

const requiredGateTokens = [
  'Get Transaction History V2',
  '/inApps/v2/history/{anyTransactionId}',
  'finished consumable',
  'Get Transaction History V1 is deprecated',
  'any transaction ID',
  '`revision`',
  '`hasMore`',
  'same query parameters',
  'recently modified date',
  '50 requests per second per app',
  '10% of production',
  'HTTP 429',
  'RateLimitExceededError',
  'Retry-After',
  'Transaction.updates',
  'ONE_TIME_CHARGE',
  'Get Refund History',
  'Diamonds',
  '30-Day VIP',
  '30 consecutive days',
  'Lifetime VIP',
  'selected genuine sales windows',
  'excludeRevoked=true',
  'signed transaction',
  'JWS',
  'Sandbox',
  'production',
  'GDPR',
  'mandatory consumer',
];

for (const token of requiredGateTokens) {
  if (!gate.includes(token)) {
    failures.push(`Missing Apple Transaction History V2 safeguard: ${token}`);
  }
}

const requiredPatterns = [
  [/V2.*all In-App Purchases.*finished consumable/is, 'V2 finished-consumable completeness is missing.'],
  [/V1.*deprecated/is, 'V1 deprecation safeguard is missing.'],
  [/Stopping after the first page is not a complete account refresh/i, 'Pagination completeness safeguard is missing.'],
  [/only mark the refresh successful after the final page is durably processed/i, 'Durable final-page completion rule is missing.'],
  [/`revision` token is opaque Apple continuation state/i, 'Opaque revision-token rule is missing.'],
  [/filter change starts a new logical scan/i, 'Filter-change/new-scan safeguard is missing.'],
  [/excludeRevoked=true.*cannot be treated as proof.*never had a revoked transaction/is, 'Revocation-filter authority warning is missing.'],
  [/repeated `transactionId` is not a second sale/i, 'Repeated-transaction duplicate-sale blocker is missing.'],
  [/historical.*Diamond.*must.*not.*restore.*500 Diamonds/is, 'Historical Diamond regrant blocker/example is missing.'],
  [/historical non-renewing 30-Day VIP purchase does not prove the VIP period is currently active/i, 'Historical 30-Day VIP activity blocker is missing.'],
  [/Historical transaction presence cannot restart an expired clock/i, '30-Day VIP restart blocker is missing.'],
  [/Lifetime VIP.*can support restoration.*does not reopen the sale/is, 'Lifetime VIP restore-versus-sale distinction is missing.'],
  [/successful HTTP response does not make an unverified decoded payload authoritative/i, 'HTTP-success/JWS-authority boundary is missing.'],
  [/Sandbox\/TestFlight evidence must not mutate production Diamonds or VIP/i, 'Sandbox/production isolation is missing.'],
  [/Transaction History is payment-state evidence, not proof of player intent/i, 'Payment-state versus fraud-intent safeguard is missing.'],
  [/provider failure as player abuse/i, 'Provider-failure non-abuse safeguard is missing.'],
  [/Purchased Diamonds do not expire solely because time passes/i, 'Diamond non-expiry invariant is missing.'],
  [/one non-renewing \*\*30-consecutive-day\*\* entitlement/i, '30-Day VIP product invariant is missing.'],
  [/Lifetime VIP remains a limited-time promotional one-time entitlement offered only during selected genuine sales windows/i, 'Lifetime VIP sales-window invariant is missing.'],
  [/Mandatory EU\/German withdrawal, conformity, update, notice, consent, price-reduction, termination, refund, liability, privacy, accessibility/i, 'Mandatory EU/German rights preservation is missing.'],
];

for (const [pattern, message] of requiredPatterns) {
  if (!pattern.test(gate)) failures.push(message);
}

const qaCases = [
  'V2 returns an old finished consumable Diamond transaction',
  'same Apple transaction arrives through StoreKit and V2 history',
  'five-page history',
  'crash between pages',
  '`revision` token is never reused for another player/customer',
  'filter change while paging starts a new scan',
  'newer revoked state',
  '`excludeRevoked=true`',
  'unverified signed transaction',
  'Sandbox transaction history',
  '500-Diamond historical transaction',
  'Expired 30-Day VIP history',
  'historical Lifetime VIP',
  'Refunded Lifetime VIP',
  '`HTTP 429`',
  'Apple outage',
  'lawful refund',
  'deprecated V1',
  'Apple JWS/app/environment verification',
  'Logs expose no Apple private key',
];

for (const qa of qaCases) {
  if (!gate.includes(qa)) failures.push(`Missing Transaction History V2 regression case: ${qa}`);
}

if (/\bTyconX\b/.test(gate)) {
  failures.push('Displayed legacy TyconX spelling found in Apple Transaction History V2 gate.');
}

if (/TycoonX[^\n.]{0,120}\bbeta\b/i.test(gate)) {
  failures.push('Stale live-service beta wording found in Apple Transaction History V2 gate.');
}

if (!/25\/25/i.test(progress) || !/100\/100/i.test(progress)) {
  failures.push('Localization progress no longer confirms 25/25 hubs and 100/100 full documents.');
}

if (!/Exact next unfinished locale\/document: None/i.test(progress)) {
  failures.push('Localization queue is not confirmed complete.');
}

if (!/TycoonX went to full release on \*\*September 1, 2026\*\*/i.test(progress)) {
  failures.push('September 1, 2026 full-release invariant is missing from localization tracker.');
}

if (/\bTyconX\b/.test(progress)) {
  failures.push('Displayed legacy TyconX spelling found in localization tracker.');
}

if (failures.length > 0) {
  console.error('TycoonX Apple Transaction History V2 verifier failed:\n');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX Apple Transaction History V2 reconciliation gate passed.');
