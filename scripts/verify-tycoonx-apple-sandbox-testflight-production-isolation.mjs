#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gatePath = path.join(root, 'TYCOONX_APPLE_SANDBOX_TESTFLIGHT_PRODUCTION_ISOLATION_RELEASE_GATE.md');
const jwsGatePath = path.join(root, 'TYCOONX_APPLE_SIGNED_DATA_JWS_VERIFICATION_RELEASE_GATE.md');
const progressPath = path.join(root, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const [text, jwsGate, progress] = await Promise.all([
  readFile(gatePath, 'utf8'),
  readFile(jwsGatePath, 'utf8'),
  readFile(progressPath, 'utf8'),
]);

const failures = [];

const required = [
  'TestFlight',
  '`production`',
  '`sandbox`',
  '`xcode`',
  'StoreKit Testing in Xcode',
  'App Store Server API',
  '`TransactionIdNotFoundError`',
  'Sandbox Apple Accounts',
  'App Store Server Notification',
  'Diamonds',
  '30-Day VIP',
  'Lifetime VIP',
  '30 consecutive days',
  'Mandatory German/EU rights',
];

for (const token of required) {
  if (!text.includes(token)) failures.push(`Missing Apple test-isolation safeguard: ${token}`);
}

const checks = [
  [/Only a verified production Apple transaction may authorize unrestricted production paid entitlement or production purchase revenue/i, 'Production-only paid-value authority rule is missing.'],
  [/TestFlight In-App Purchases.*sandbox environment.*free to testers.*do not carry over into production/is, 'TestFlight sandbox/free/non-carryover rule is missing.'],
  [/TestFlight Diamond purchase must not mint unrestricted production Diamonds/i, 'TestFlight Diamond isolation is missing.'],
  [/TestFlight 30-Day VIP purchase must not start or extend unrestricted production paid VIP/i, 'TestFlight 30-Day VIP isolation is missing.'],
  [/TestFlight Lifetime VIP purchase must not create an unrestricted production Lifetime VIP entitlement/i, 'TestFlight Lifetime VIP isolation is missing.'],
  [/StoreKit Testing in Xcode.*simulate successful transactions locally without App Store payment processing/is, 'Xcode StoreKit non-payment boundary is missing.'],
  [/sandbox.*App Store infrastructure.*do not incur charges/is, 'Sandbox realistic-transaction versus real-payment distinction is missing.'],
  [/successful JWS verification.*substitute for verifying the production environment/is, 'JWS-verification-versus-environment distinction is missing.'],
  [/unknown values to production/i, 'Unknown-environment fail-closed rule is missing.'],
  [/notification URL.*not the authoritative environment by itself/is, 'Endpoint-route trust-boundary rule is missing.'],
  [/production-first lookup.*sandbox retry.*TransactionIdNotFoundError/is, 'Apple production-first/sandbox-fallback discovery rule is missing.'],
  [/sandbox lookup success must remain sandbox evidence/i, 'Sandbox fallback promotion blocker is missing.'],
  [/clearing a sandbox tester's purchase history.*must not delete or alter.*production/is, 'Sandbox-history clearing isolation is missing.'],
  [/sandbox tester.*switching among storefronts.*not a production regional-pricing violation/is, 'Sandbox storefront QA safeguard is missing.'],
  [/sandbox\/test refund or simulated failure.*must not.*fraud\/chargeback strike/is, 'Simulated refund/chargeback enforcement isolation is missing.'],
  [/same person can later install the production App Store build and complete a genuine production purchase/is, 'Former-tester genuine production purchase safeguard is missing.'],
  [/Classify the transaction from verified Apple environment\/provider evidence, not from the person's role/i, 'Tester-role heuristic blocker is missing.'],
  [/must be segregated from production commercial reporting/i, 'Production finance/test separation is missing.'],
  [/genuine purchased Diamonds do not expire merely because time passes/i, 'Purchased Diamond non-expiry safeguard is missing.'],
  [/one-time, non-renewing entitlement lasting exactly 30 consecutive days/i, '30-Day VIP exact product invariant is missing.'],
  [/limited-time promotional one-time entitlement offered only during selected genuine sales windows/i, 'Lifetime VIP selected-sales-window rule is missing.'],
  [/test purchase.*can never open or reopen a production Lifetime VIP sales window/is, 'Lifetime VIP test-sale reopening blocker is missing.'],
  [/test catalog availability is not production sale availability/i, 'Test catalog versus production availability rule is missing.'],
  [/data minimization and purpose limitation/i, 'Test-data privacy minimization is missing.'],
  [/may not relabel it as sandbox\/test/i, 'Genuine production purchase downgrade blocker is missing.'],
  [/mandatory.*rights.*cannot be denied because test history exists/is, 'Mandatory-rights test-history safeguard is missing.'],
  [/proportionate transaction-specific correction/i, 'Proportionate leaked-test-value incident correction is missing.'],
];

for (const [regex, message] of checks) {
  if (!regex.test(text)) failures.push(message);
}

const regressionCases = [
  'TestFlight user buys a Diamond pack',
  'TestFlight user buys 30-Day VIP',
  'TestFlight user buys Lifetime VIP while the production sale is closed',
  'StoreKit Testing in Xcode returns a successful purchase',
  'Sandbox JWS verifies cryptographically',
  'Sandbox notification hits the production HTTP endpoint',
  'Production API lookup returns `TransactionIdNotFoundError`, sandbox lookup succeeds',
  'Sandbox tester changes storefront repeatedly',
  'Sandbox tester clears purchase history',
  'Sandbox simulated refund arrives',
  'Former TestFlight tester buys from the production App Store',
  'Unknown future Apple environment value',
  'Accidentally leaked test Diamonds mixed with gameplay',
  'EU/German consumer with genuine production purchase also has sandbox history',
];

for (const testCase of regressionCases) {
  if (!text.includes(testCase)) failures.push(`Missing Apple sandbox/TestFlight regression case: ${testCase}`);
}

if (!/sandbox\/TestFlight\/test data must remain isolated from production entitlements/i.test(jwsGate)) {
  failures.push('Apple signed-data JWS gate no longer enforces sandbox/TestFlight production isolation.');
}

if (!/verified environment must be production for production entitlement mutation/i.test(jwsGate)) {
  failures.push('Apple signed-data JWS gate no longer requires production environment for production mutation.');
}

if (/\bTyconX\b/.test(text)) {
  failures.push('Displayed legacy brand spelling TyconX found in Apple sandbox/TestFlight gate.');
}

if (/\bTycoonX\s+beta\b/i.test(text)) {
  failures.push('Stale TycoonX beta wording found in Apple sandbox/TestFlight gate.');
}

if (!/all 100 localized full documents are current/i.test(progress)) {
  failures.push('Localization tracker no longer confirms all 100 localized full documents are current.');
}

if (!/25\/25[^\n]*target locales/i.test(progress)) {
  failures.push('Localization tracker no longer confirms 25/25 localized hubs/locales.');
}

if (!/Exact next unfinished locale\/document: None/i.test(progress)) {
  failures.push('Localization tracker unexpectedly reports unfinished localization work.');
}

if (failures.length) {
  console.error('TycoonX Apple sandbox/TestFlight production-isolation gate failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX Apple sandbox/TestFlight production-isolation gate passed.');
