#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gatePath = path.join(root, 'TYCOONX_APPLE_REFUND_ENTITLEMENT_RELEASE_GATE.md');
const progressPath = path.join(root, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const [gate, progress] = await Promise.all([
  readFile(gatePath, 'utf8'),
  readFile(progressPath, 'utf8'),
]);

const failures = [];
const requireGate = (pattern, message) => {
  if (!pattern.test(gate)) failures.push(message);
};

requireGate(/HTTP `200` through `206` as successful notification delivery/i, 'Missing Apple V2 success-code boundary.');
requireGate(/durably record or enqueue enough notification identity.*before returning a success code/is, 'Missing durable-ingest-before-success rule.');
requireGate(/Do not return a success code merely to suppress retries while the only copy of the event still exists in process memory/i, 'Missing premature-success protection.');
requireGate(/returns notifications it \*\*first attempted to send\*\* during the requested `startDate`\/`endDate` interval/i, 'Missing Notification History first-send-attempt window rule.');
requireGate(/Do not use purchase\/refund timestamps or the largest `signedDate` alone as a durable Notification History recovery watermark/i, 'Missing recovery-watermark protection.');
requireGate(/Do not advance a durable recovery boundary until every page for the interval has been durably reconciled/i, 'Missing crash-safe recovery-boundary rule.');
requireGate(/when `notificationType` is supplied but `notificationSubtype` is omitted.*only matching notifications that also \*\*do not have a subtype\*\*/is, 'Missing type-only subtype omission warning.');
requireGate(/type-only `DID_RENEW` query does not return `DID_RENEW` notifications with subtype `BILLING_RECOVERY`/i, 'Missing DID_RENEW/BILLING_RECOVERY example.');
requireGate(/Absence from a narrow filtered response is not proof that no relevant event exists/i, 'Missing narrow-filter absence protection.');
requireGate(/unknown future Apple types\/subtypes must fail closed into review\/reconciliation/i, 'Missing unknown-notification fail-closed rule.');
requireGate(/V2 receiver acknowledgement testing.*HTTP `200`-`206`.*durably recorded\/queued/is, 'Missing V2 acknowledgement QA case.');
requireGate(/outage-window recovery proving `startDate`\/`endDate` select Apple's \*\*first send attempt\*\*/i, 'Missing first-send-window QA case.');
requireGate(/type-only `DID_RENEW` query does not silently stand in for subtype-bearing `DID_RENEW` events such as `BILLING_RECOVERY`/i, 'Missing subtype-filter QA case.');
requireGate(/WWDC22, What's new with in-app purchase/i, 'Missing Apple Notification History source reference.');
requireGate(/WWDC22, Explore in-app purchase integration and migration/i, 'Missing Apple migration source reference.');

if (/\bTyconX\b/.test(gate)) {
  failures.push('Displayed legacy game-name spelling found in Apple refund gate.');
}
if (/\bTycoonX\b[^\n]{0,50}\bbeta\b/i.test(gate)) {
  failures.push('Stale live-service beta wording found in Apple refund gate.');
}
if (!/100\/100/.test(progress) || !/25\/25/.test(progress)) {
  failures.push('Localization progress is no longer complete; re-open the required queue before treating this gate as synchronized.');
}

if (failures.length) {
  console.error('TycoonX Apple notification recovery verifier failed:\n');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX Apple notification recovery verifier passed.');
