#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gatePath = path.join(root, 'TYCOONX_GOOGLE_PLAY_RTDN_PUBSUB_AUTHENTICITY_RELEASE_GATE.md');
const progressPath = path.join(root, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');
const refundGatePath = path.join(root, 'TYCOONX_GOOGLE_PLAY_REFUND_API_MODERNIZATION_2026_GATE.md');
const pendingGatePath = path.join(root, 'TYCOONX_GOOGLE_PLAY_PENDING_PURCHASE_ATTRIBUTION_RELEASE_GATE.md');

const [gate, progress, refundGate, pendingGate] = await Promise.all([
  readFile(gatePath, 'utf8'),
  readFile(progressPath, 'utf8'),
  readFile(refundGatePath, 'utf8'),
  readFile(pendingGatePath, 'utf8'),
]);

const failures = [];

const requiredGateTokens = [
  'Google Cloud Pub/Sub',
  'Google Play Developer API',
  'RTDN is a signal, never standalone payment authority',
  'Authorization: Bearer',
  'OpenID Connect JWT',
  'expected audience',
  'service-account email',
  'email_verified',
  'accounts.google.com',
  'packageName',
  'eventTimeMillis',
  'messageId',
  'google-play-developer-notifications@system.gserviceaccount.com',
  'Durable ingest before acknowledgement',
  'Pull subscriptions use Google IAM',
  'testNotification',
  'ONE_TIME_PRODUCT_PURCHASED',
  'Purchased Diamonds',
  'One-time 30-Day VIP',
  'Lifetime VIP',
  '30 consecutive days',
  'selected genuine sales windows',
  'mandatory German/EU',
  'mandatory consumer remedy',
];

for (const token of requiredGateTokens) {
  if (!gate.includes(token)) {
    failures.push(`Missing RTDN/Pub/Sub safeguard: ${token}`);
  }
}

const requiredPatterns = [
  [/call the applicable Google Play Developer API[\s\S]*authoritative current purchase\/refund\/subscription state/i,
    'RTDN no longer requires authoritative Google state reconciliation.'],
  [/verify the Google JWT cryptographic signature/i,
    'Authenticated push no longer requires JWT signature verification.'],
  [/require the expected audience/i,
    'Authenticated push no longer pins the configured audience.'],
  [/require the expected dedicated Pub\/Sub push-auth service-account email/i,
    'Authenticated push no longer pins the service-account identity.'],
  [/require `email_verified` to be true/i,
    'Authenticated push no longer requires verified service-account email.'],
  [/accepted Google issuer/i,
    'Authenticated push no longer checks Google issuer identity.'],
  [/production and test\/staging audiences, service-account identities, endpoints, topics, and ledgers separated/i,
    'Production/test Pub/Sub isolation is missing.'],
  [/A correctly authenticated Pub\/Sub message for a different CK-Labs app is not a TycoonX purchase/i,
    'Cross-app RTDN isolation is missing.'],
  [/do not return success until CK-Labs has durably recorded the event or durably enqueued it/i,
    'Crash-safe ingest-before-acknowledgement is missing.'],
  [/do not make it the sole entitlement idempotency key/i,
    'messageId is incorrectly allowed to become the sole entitlement idempotency key.'],
  [/two different `messageId` values are not proof that two separate paid entitlements exist/i,
    'Different Pub/Sub message IDs can incorrectly imply multiple purchases.'],
  [/Do not make final entitlement state depend on RTDN receipt order alone/i,
    'Delayed/out-of-order RTDN protection is missing.'],
  [/testNotification[\s\S]*must never[\s\S]*grant Diamonds/i,
    'Google Play test notifications can affect paid value.'],
  [/Fail closed on an unsupported future RTDN version, notification family, or enum value/i,
    'Unknown RTDN types no longer fail closed.'],
  [/purchase token is provider transaction evidence, not permission to reassign/i,
    'RTDN account-attribution isolation is missing.'],
  [/Purchased Diamonds are granted only from a verified completed Google transaction and exactly once/i,
    'Diamond exactly-once protection is missing.'],
  [/30-Day VIP remains one non-renewing entitlement lasting 30 consecutive days/i,
    '30-Day VIP product distinction is missing.'],
  [/Lifetime VIP remains a limited-time promotional one-time entitlement available only during selected genuine sales windows/i,
    'Lifetime VIP limited-window protection is missing.'],
  [/RTDN can help restore or reconcile a genuine historical Lifetime VIP transaction[\s\S]*cannot create a new Lifetime VIP transaction after the sale closes/i,
    'Historical Lifetime VIP restore is not isolated from future sale availability.'],
  [/operational\/security incident, not automatic player misconduct/i,
    'Provider/CK-Labs RTDN outages can incorrectly become player misconduct.'],
  [/do not log bearer JWTs, service-account private keys, OAuth access tokens/i,
    'RTDN secret/logging protection is missing.'],
  [/do not waive or narrow mandatory rights/i,
    'Mandatory consumer-rights boundary is missing.'],
];

for (const [pattern, message] of requiredPatterns) {
  if (!pattern.test(gate)) failures.push(message);
}

if (!refundGate.includes('RTDN tells TycoonX that state changed but is not a substitute for all quantity state')) {
  failures.push('Existing Google refund gate no longer preserves RTDN-as-signal quantity reconciliation.');
}

if (!pendingGate.includes('treat RTDN or a client callback as a trigger to verify the purchase, not as standalone payment authority')) {
  failures.push('Existing pending-purchase gate no longer treats RTDN as verification trigger only.');
}

if (!progress.includes('All 25 target locales and all 100 localized full documents are current.')) {
  failures.push('Localization completion invariant changed; review the localization queue before relying on this gate.');
}

if (!progress.includes('TycoonX went to full release on **September 1, 2026**')) {
  failures.push('Full-release status invariant is missing from the localization tracker.');
}

if (/\bTyconX\b/.test(gate)) {
  failures.push('Displayed legacy brand spelling found in RTDN gate.');
}

if (/TycoonX[^\n]{0,80}\bbeta\b|\bbeta\b[^\n]{0,80}TycoonX/i.test(gate)) {
  failures.push('Stale live-service beta wording found in RTDN gate.');
}

if (!/Minimum regression matrix[\s\S]*23\./i.test(gate)) {
  failures.push('RTDN gate no longer contains the full minimum regression matrix.');
}

if (failures.length) {
  console.error('TycoonX Google Play RTDN/PubSub authenticity gate FAILED:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX Google Play RTDN/PubSub authenticity gate passed.');
