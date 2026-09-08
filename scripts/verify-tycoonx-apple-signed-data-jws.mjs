#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gatePath = path.join(root, 'TYCOONX_APPLE_SIGNED_DATA_JWS_VERIFICATION_RELEASE_GATE.md');
const progressPath = path.join(root, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const [text, progress] = await Promise.all([
  readFile(gatePath, 'utf8'),
  readFile(progressPath, 'utf8'),
]);

const failures = [];

const required = [
  'App Store Server Notifications V2',
  'JSON Web Signature (JWS)',
  'SignedDataVerifier',
  'verifyAndDecodeNotification',
  'verifyAndDecodeTransaction',
  'verifyAndDecodeRenewalInfo',
  'verifyAndDecodeAppTransaction',
  'Apple PKI',
  '`x5c`',
  '`ES256`',
  '`bundleId`',
  '`appAppleId`',
  'Environment.PRODUCTION',
  '`signedTransactionInfo`',
  '`signedRenewalInfo`',
  '`enableOnlineChecks`',
  'OCSP',
  'retryable verification failure',
  '`signedDate`',
  '`transactionId`',
  '`originalTransactionId`',
  '`productId`',
  '`appAccountToken`',
  'Diamonds',
  '30-Day VIP',
  'Lifetime VIP',
  'ONE_TIME_CHARGE',
  'Mandatory German/EU consumer rights',
];

for (const token of required) {
  if (!text.includes(token)) failures.push(`Missing Apple signed-data safeguard: ${token}`);
}

const checks = [
  [/merely parses Base64URL sections is not verification/i, 'Decode-versus-verify distinction is missing.'],
  [/incoming chain is evidence to validate, not a trust store supplied by the sender/i, 'Incoming x5c trust-boundary rule is missing.'],
  [/never accept the last certificate in a request's `x5c` array as trusted merely because the request says it is a root/i, 'Attacker-supplied x5c root blocker is missing.'],
  [/Do not permanently pin a single leaf or WWDR intermediate certificate fingerprint/i, 'Apple certificate rotation safeguard is missing.'],
  [/attacker-controlled `alg` header/i, 'JWS alg-confusion safeguard is missing.'],
  [/correctly signed Apple object for another CK-Labs app is \*\*not\*\* a valid TycoonX purchase/i, 'Cross-app signed-data isolation is missing.'],
  [/sandbox.*must remain isolated from production entitlements/is, 'Sandbox/production isolation is missing.'],
  [/every JWS whose claims affect paid value is verified before those claims are used/i, 'Nested JWS verification invariant is missing.'],
  [/retryable verifier\/OCSP\/network failure is \*\*not\*\* proof/i, 'Retryable verification failure must not become fraud evidence.'],
  [/do not grant new value from the unverified payload while waiting/i, 'Retryable failure fail-closed grant rule is missing.'],
  [/do not claw back existing value merely because Apple's revocation service or CK-Labs networking is temporarily unavailable/i, 'OCSP outage clawback blocker is missing.'],
  [/use it only as an explicit historical\/recovery decision, not as a fallback that silently disables live security checks/i, 'Historical offline-verification boundary is missing.'],
  [/old signed purchase snapshot can be genuine and still have been refunded or revoked later/i, 'Historical snapshot/current-state distinction is missing.'],
  [/If a JWS fails verification, do not trust fields decoded from that failed JWS/i, 'Failed-JWS identifier trust blocker is missing.'],
  [/Successful JWS verification proves authenticity\/integrity and app context\. It does \*\*not\*\* by itself decide the TycoonX business action/i, 'Verification-versus-entitlement authority distinction is missing.'],
  [/Purchased Diamonds do not expire merely because time passes/i, 'Purchased Diamond non-expiry safeguard is missing.'],
  [/one-time, non-renewing period of 30 consecutive days/i, '30-Day VIP product invariant is missing.'],
  [/limited-time promotional one-time entitlement offered only during selected genuine sales windows/i, 'Lifetime VIP selected-sales-window safeguard is missing.'],
  [/Apple root certificates.*public trust anchors.*App Store Connect.*private keys.*secrets/is, 'Public-root versus private-key distinction is missing.'],
  [/Never commit a real private key to this repository/i, 'Apple private-key source-control blocker is missing.'],
  [/mandatory consumer remedies for paid digital products/i, 'Mandatory-rights outage safeguard is missing.'],
];

for (const [regex, message] of checks) {
  if (!regex.test(text)) failures.push(message);
}

if (/\bTyconX\b/.test(text)) {
  failures.push('Displayed legacy brand spelling TyconX found in Apple signed-data gate.');
}

if (/\bTycoonX\s+beta\b/i.test(text)) {
  failures.push('Stale TycoonX beta wording found in Apple signed-data gate.');
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
  console.error('TycoonX Apple signed-data JWS gate failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX Apple signed-data JWS verification gate passed.');
