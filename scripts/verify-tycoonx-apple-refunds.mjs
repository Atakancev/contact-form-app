#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gatePath = path.join(root, 'TYCOONX_APPLE_REFUND_ENTITLEMENT_RELEASE_GATE.md');
const text = await readFile(gatePath, 'utf8');

const required = [
  'App Store Server Notifications V2',
  'notificationUUID',
  'signedDate',
  'ONE_TIME_CHARGE',
  'May 27, 2025',
  'Product.PurchaseResult.pending',
  'Transaction.updates',
  'Ask to Buy',
  'Strong Customer Authentication',
  'userCancelled',
  'unverified',
  'Transaction.finish()',
  'Get Notification History',
  'Get Transaction History',
  'Get Refund History',
  '180 days in production',
  '30 days in sandbox',
  'CONSUMPTION_REQUEST',
  'REFUND_DECLINED',
  'REFUND',
  'REVOKE',
  'Send Consumption Information V2',
  '12-hour',
  'App Tracking Transparency',
  'Transaction.currentEntitlements',
  '30-Day VIP',
  'Lifetime VIP',
  'Diamonds',
  'Family Sharing',
];

const failures = [];
for (const token of required) {
  if (!text.includes(token)) {
    failures.push(`Missing Apple refund/entitlement safeguard: ${token}`);
  }
}

if (!/consumables do \*\*not\*\* appear in `currentEntitlements`/i.test(text)) {
  failures.push('Consumable/currentEntitlements distinction is missing.');
}

if (!/latest transaction for a non-renewing subscription can appear even when the time-limited service has already finished/i.test(text)) {
  failures.push('Non-renewing subscription finished-state warning is missing.');
}

if (!/`pending` is \*\*not\*\* a paid transaction and must grant no Diamonds, 30-Day VIP time, or Lifetime VIP access/i.test(text)) {
  failures.push('Pending Apple purchase must grant no paid value.');
}

if (!/keep a `Transaction\.updates` listener active from app launch, not only while the store screen is visible/i.test(text)) {
  failures.push('Persistent StoreKit transaction listener requirement is missing.');
}

if (!/do not grant an `unverified` StoreKit transaction/i.test(text)) {
  failures.push('Unverified StoreKit transaction rejection safeguard is missing.');
}

if (!/do not start the 30-Day VIP clock while a purchase is pending/i.test(text)) {
  failures.push('Pending purchase must not start 30-Day VIP time.');
}

if (!/Finish a verified transaction only after TycoonX has durably completed the fulfillment work/i.test(text)) {
  failures.push('Finish-after-durable-fulfillment safeguard is missing.');
}

if (!/Ask to Buy decline or `userCancelled` proving no entitlement is granted and no fake refund\/clawback event is created/i.test(text)) {
  failures.push('Ask to Buy decline/userCancelled regression test is missing.');
}

if (!/interrupted\/SCA-style purchase.*later completes after backgrounding or relaunch/is.test(text)) {
  failures.push('Interrupted/SCA relaunch recovery test is missing.');
}

if (!/do not revoke paid value merely because a refund was \*\*requested\*\*/i.test(text)) {
  failures.push('Refund-request-versus-refund-decision safeguard is missing.');
}

if (!/customer gave valid consent for this specific data sharing/i.test(text)) {
  failures.push('Apple consumption-data consent safeguard is missing.');
}

if (!/do not send consumption data in response to the `CONSUMPTION_REQUEST`/i.test(text)) {
  failures.push('No-consent/no-send rule for Apple consumption data is missing.');
}

if (!/must not restart an expired 30-Day VIP/i.test(text)) {
  failures.push('30-Day VIP restore must not restart an expired entitlement.');
}

if (!/one and only one grant even if both the client and `ONE_TIME_CHARGE` are received/i.test(text)) {
  failures.push('Client/server duplicate-grant release test is missing.');
}

if (!/refunded entitlement is not resurrected/i.test(text)) {
  failures.push('Refunded Lifetime VIP restore regression test is missing.');
}

if (!/material new disclosure would require the canonical English Privacy Policy to be updated and the 25 localized Privacy pages to be reopened/i.test(text)) {
  failures.push('Privacy/localization reopening trigger for Apple consumption data is missing.');
}

if (/\bTyconX\b/.test(text)) {
  failures.push('Displayed legacy TyconX spelling found in Apple refund gate.');
}

if (failures.length > 0) {
  console.error('TycoonX Apple refund and entitlement verifier failed:\n');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX Apple refund and entitlement verifier passed.');
