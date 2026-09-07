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
  'Send Consumption Information',
  'Send Consumption Information V1',
  '12-hour',
  'App Tracking Transparency',
  'revocationType',
  'REFUND_FULL',
  'REFUND_PRORATED',
  'FAMILY_REVOKE',
  'refundPercentage',
  'revocationPercentage',
  'Transaction.revocationPercentage',
  'consumptionPercentage',
  'GRANT_PRORATED',
  'customerConsented: false',
  'five-minute sandbox decisioning window',
  'Advanced Commerce API',
  'refundRiskingPreference',
  'default value is **true**',
  'RateLimitExceededError',
  'Retry-After',
  '50 requests per second',
  'five requests per second',
  'App Store Connect remains the source of truth',
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

if (!/For `REFUND_PRORATED`, use Apple's final provider-authoritative refund information, not CK-Labs' earlier consumption estimate/i.test(text)) {
  failures.push('Prorated refunds must use Apple final provider-authoritative refund information.');
}

if (!/`refundPercentage`.*`revocationPercentage`.*same refund decision/is.test(text)) {
  failures.push('refundPercentage/revocationPercentage same-refund normalization safeguard is missing.');
}

if (!/Do \*\*not\*\* let `refundPercentage`.*`revocationPercentage` independently trigger two Diamond deductions or two VIP corrections/is.test(text)) {
  failures.push('Apple refund-percentage duplicate-clawback safeguard is missing.');
}

if (!/Do \*\*not\*\* use the earlier `consumptionPercentage` submitted by CK-Labs as if it were Apple's final refund result/i.test(text)) {
  failures.push('Consumption percentage must not be mistaken for final refund percentage.');
}

if (!/materially disagree.*put that transaction into reconciliation/is.test(text)) {
  failures.push('Contradictory Apple refund-percentage reconciliation rule is missing.');
}

if (!/Never choose the larger percentage merely "to be safe"/i.test(text)) {
  failures.push('Largest-refund-percentage guessing blocker is missing.');
}

if (!/integer in \*\*milliunits from 0 through 100000\*\*/i.test(text)) {
  failures.push('Server revocationPercentage milliunit range safeguard is missing.');
}

if (!/`Transaction\.revocationPercentage`, the value is a `Decimal` percentage from \*\*0\.0 through 100\.0\*\*/i.test(text)) {
  failures.push('StoreKit revocationPercentage decimal range safeguard is missing.');
}

if (!/1000x over-clawback or under-clawback/i.test(text)) {
  failures.push('Apple prorated-refund unit mismatch blocker is missing.');
}

if (!/a prorated correction must be derived from the original verified Diamond grant for that exact transaction/i.test(text)) {
  failures.push('Transaction-specific prorated Diamond correction rule is missing.');
}

if (!/never remove more purchased Diamond value than that transaction originally granted/i.test(text)) {
  failures.push('Prorated Diamond over-clawback cap is missing.');
}

if (!/do not invent a fractional entitlement solely from a percentage field/i.test(text)) {
  failures.push('VIP fractional-entitlement guessing safeguard is missing.');
}

if (!/Send Consumption Information V1.*deprecated/is.test(text)) {
  failures.push('Deprecated Apple consumption V1 migration safeguard is missing.');
}

if (!/customer did not consent, do not send consumption data in response to the `CONSUMPTION_REQUEST`/i.test(text)) {
  failures.push('No-consent/no-send rule for Apple consumption data is missing.');
}

if (!/request with `customerConsented: false` is rejected/i.test(text)) {
  failures.push('Apple current customerConsented=false behavior is missing.');
}

if (!/If `GRANT_PRORATED` is used.*`consumptionPercentage`.*greater than `0` and less than `100000`/is.test(text)) {
  failures.push('Apple GRANT_PRORATED percentage validation is missing.');
}

if (!/If `deliveryStatus` is not `DELIVERED`, the consumption percentage must be `0`/i.test(text)) {
  failures.push('Undelivered Apple purchase consumptionPercentage rule is missing.');
}

if (!/Wait for the authoritative refund decision and signed revocation state/i.test(text)) {
  failures.push('No pre-emptive consumption-based clawback safeguard is missing.');
}

if (!/`refundRiskingPreference`.*default value is \*\*true\*\*/is.test(text)) {
  failures.push('Advanced Commerce default-true refundRiskingPreference warning is missing.');
}

if (!/If TycoonX does not have the required customer-consent flow.*set it to `false` or block that product's release/is.test(text)) {
  failures.push('Advanced Commerce refund-risk release blocker is missing.');
}

if (!/Setting it to `false` does not restrict the player's Apple or mandatory consumer refund rights/i.test(text)) {
  failures.push('Advanced Commerce refund-rights preservation rule is missing.');
}

if (!/HTTP `429` with `RateLimitExceededError`.*`Retry-After`/is.test(text)) {
  failures.push('Apple 429 Retry-After handling safeguard is missing.');
}

if (!/A provider rate limit or retry delay is not player fraud, chargeback abuse, hacking, or entitlement abuse/i.test(text)) {
  failures.push('Apple rate-limit non-fraud safeguard is missing.');
}

if (!/A no-consent case must not be queued for later sending at all/i.test(text)) {
  failures.push('No-consent retry prohibition is missing.');
}

if (!/When a verified refund or revocation changes a player's TycoonX Diamond balance or VIP access, inform the player clearly about what changed/i.test(text)) {
  failures.push('Post-refund balance/access notice requirement is missing.');
}

if (!/must not restart an expired 30-Day VIP/i.test(text)) {
  failures.push('30-Day VIP restore must not restart an expired entitlement.');
}

if (!/one and only one grant even if both the client and `ONE_TIME_CHARGE` are received/i.test(text)) {
  failures.push('Client/server duplicate-grant release test is missing.');
}

if (!/40% server-side `revocationPercentage` represented as `40000`.*StoreKit percentage represented as `40\.0`/is.test(text)) {
  failures.push('Prorated-refund server-versus-StoreKit unit regression test is missing.');
}

if (!/prorated Diamond refund proving only the matching transaction's refunded share is corrected/i.test(text)) {
  failures.push('Prorated Diamond transaction-isolation QA case is missing.');
}

if (!/`refundPercentage` plus signed `revocationPercentage`.*one correction/is.test(text)) {
  failures.push('Dual Apple refund-percentage QA case is missing.');
}

if (!/mismatched or contradictory refund-percentage evidence.*quarantines the transaction for reconciliation/is.test(text)) {
  failures.push('Contradictory Apple refund-percentage QA case is missing.');
}

if (!/Advanced Commerce configuration proving `refundRiskingPreference` is explicitly reviewed/i.test(text)) {
  failures.push('Advanced Commerce refundRiskingPreference QA case is missing.');
}

if (!/Send Consumption Information HTTP `429` test proving `RateLimitExceededError` and `Retry-After` are handled/i.test(text)) {
  failures.push('Apple rate-limit QA case is missing.');
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
