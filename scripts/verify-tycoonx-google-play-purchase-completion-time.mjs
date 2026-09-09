import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');

const gate = read('TYCOONX_GOOGLE_PLAY_PURCHASE_COMPLETION_TIME_RELEASE_GATE.md');
const pending = read('TYCOONX_GOOGLE_PLAY_PENDING_PURCHASE_ATTRIBUTION_RELEASE_GATE.md');
const vip30 = read('TYCOONX_30_DAY_VIP_ONE_TIME_ENTITLEMENT_RELEASE_GATE.md');
const lifetime = read('TYCOONX_LIFETIME_VIP_LIMITED_PROMOTIONAL_ENTITLEMENT_RELEASE_GATE.md');
const purchases = read('tyconx-purchase-refund-policy.md');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const checks = [
  ['provider field', /purchaseCompletionTime/],
  ['successful state meaning', /changed to `?PURCHASED`?/i],
  ['pending grants nothing', /`PENDING`[^\n]*grants no paid Diamonds, 30-Day VIP, or Lifetime VIP/i],
  ['timestamp not entitlement authority', /timestamp evidence, not independent entitlement authority/i],
  ['preserve provider time', /preserve the provider value/i],
  ['separate processing time', /separately record the time TycoonX actually processed, granted, activated, or corrected/i],
  ['no RTDN receipt substitution', /RTDN or Pub\/Sub message reached CK-Labs/i],
  ['missing timestamp is not fraud', /absent `purchaseCompletionTime`[^\n]*not by itself be treated as fraud/i],
  ['do not fabricate timestamp', /do not fabricate a provider completion timestamp/i],
  ['Diamonds exactly once', /grant the purchased Diamond quantity exactly once/i],
  ['Diamonds do not expire with time', /Purchased Diamonds do not expire merely because time passes/i],
  ['30-Day VIP one-time', /one-time, non-renewing entitlement lasting 30 consecutive days/i],
  ['no pending backdating', /do not backdate the paid VIP start to checkout initiation/i],
  ['no silent shortening', /never silently burn part of the promised 30-day period/i],
  ['Lifetime limited window', /Lifetime VIP remains a limited-time promotional one-time offering available only during selected genuine sales windows/i],
  ['Lifetime may never return', /may never offer it again/i],
  ['Lifetime no reopen', /never reopens Lifetime VIP for other users/i],
  ['historical repricing blocked', /do not reprice the completed purchase using today's regional price/i],
  ['later decrease no automatic match', /later price decrease does not automatically create a refund, credit, price-match/i],
  ['later increase no extra charge', /later price increase does not create an additional charge/i],
  ['ack deadline after purchased', /three-day acknowledgement window begins when the purchase transitions from `PENDING` to `PURCHASED`/i],
  ['refund state separate', /It is not the current refund, reversal, or chargeback state/i],
  ['test isolation', /does not create production revenue, unrestricted production Diamonds, production 30-Day VIP, or production Lifetime VIP/i],
  ['outage separation', /delayed notification receipt must not be rewritten as purchase completion/i],
  ['fraud inference blocked', /does not by itself prove:[\s\S]*fraud/i],
  ['GDPR purpose limitation', /GDPR purpose limitation, data minimization, accuracy, retention, access-control, and security principles/i],
  ['German BGB 327d', /BGB § 327d/],
  ['German BGB 327i', /BGB § 327i/],
  ['20 regression scenarios', /20\. \*\*Support screenshot:/],
  ['no public legal meaning change', /does \*\*not\*\* change the canonical player-facing legal meaning/i],
];

for (const [name, pattern] of checks) {
  if (!pattern.test(gate)) throw new Error(`Gate check failed: ${name}`);
}

if (!/PENDING/i.test(pending) || !/PURCHASED/i.test(pending)) {
  throw new Error('Existing Google pending-purchase gate is missing expected purchase-state doctrine');
}
if (!/30 consecutive days/i.test(vip30) || !/non-renewing/i.test(vip30)) {
  throw new Error('30-Day VIP invariant missing from canonical release gate');
}
if (!/selected limited promotional sales windows/i.test(lifetime) || !/may choose never to offer it again/i.test(lifetime)) {
  throw new Error('Lifetime VIP limited-window invariant missing from canonical release gate');
}
if (!/Google Play/i.test(purchases) || !/Diamonds/i.test(purchases) || !/Lifetime VIP/i.test(purchases)) {
  throw new Error('Canonical Purchases & Refunds Policy is missing expected Google/product coverage');
}
if (!/100\s*\/\s*100|100\/100/i.test(progress)) {
  throw new Error('Progress tracker does not confirm 100/100 localized full documents');
}
if (!/25\s*\/\s*25|25\/25/i.test(progress)) {
  throw new Error('Progress tracker does not confirm 25/25 localized hubs');
}
if (/\bTyconX\b/.test(gate)) {
  throw new Error('Displayed brand typo found in new gate');
}
if (/\bTycoonX\s+beta\b/i.test(gate)) {
  throw new Error('Stale live-service beta wording found in new gate');
}

console.log(`PASS: ${checks.length + 8} TycoonX Google Play purchaseCompletionTime checks`);
