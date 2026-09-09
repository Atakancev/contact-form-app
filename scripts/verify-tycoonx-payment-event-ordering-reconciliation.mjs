import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');

const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const gate = read('TYCOONX_PAYMENT_EVENT_ORDERING_REPLAY_RECONCILIATION_RELEASE_GATE.md');
const purchases = read('tyconx-purchase-refund-policy.md');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const failures = [];
const requireMatch = (text, re, label) => {
  if (!re.test(text)) failures.push(label);
};
const requireNoMatch = (text, re, label) => {
  if (re.test(text)) failures.push(label);
};

requireMatch(gate, /Webhook arrival order is not entitlement authority/i, 'central ordering invariant');
requireMatch(gate, /last callback received wins/i, 'last-arrival-wins rejection');
requireMatch(gate, /idempotency before side effects/i, 'idempotency before side effects');
requireMatch(gate, /concurren(t|cy).{0,120}(one economic result|controlled|same transaction)/is, 'concurrent-processing safety');
requireMatch(gate, /channel-qualified identities/i, 'cross-channel transaction namespace');
requireMatch(gate, /older event arriving later/i, 'stale-event protection');

requireMatch(gate, /notificationUUID/i, 'Apple notificationUUID dedupe');
requireMatch(gate, /signedDate/i, 'Apple signedDate chronology');
requireMatch(gate, /older `signedDate`.{0,120}newer `signedDate`/is, 'Apple stale signedDate protection');
requireMatch(gate, /App Store Server API/i, 'Apple authoritative reconciliation');

requireMatch(gate, /Real-time Developer Notifications.{0,120}change signal/is, 'Google RTDN signal-only rule');
requireMatch(gate, /Google Play Developer API/i, 'Google Developer API reconciliation');
requireMatch(gate, /messageId/i, 'PubSub messageId dedupe');
requireMatch(gate, /at-least-once/i, 'PubSub delivery model');
requireMatch(gate, /no ordering guarantee/i, 'PubSub ordering warning');
requireMatch(gate, /replay\/seek/i, 'PubSub replay handling');
requireMatch(gate, /VoidedPurchaseNotification/i, 'Google voided purchase handling');

requireMatch(gate, /Xsolla webhook signature/i, 'Xsolla signature verification');
requireMatch(gate, /Xsolla documents retry behavior/i, 'Xsolla retry awareness');
requireMatch(gate, /transaction\/report evidence/i, 'Xsolla transaction reconciliation');
requireMatch(gate, /financial reconciliation/i, 'Xsolla report reconciliation source');

requireMatch(gate, /purchased Diamond transaction may increase purchased Diamond value exactly once/i, 'Diamonds exactly-once');
requireMatch(gate, /Purchased Diamonds do not expire solely because time passes/i, 'Diamonds no time expiry');
requireMatch(gate, /one-time, non-renewing entitlement lasting 30 consecutive days/i, '30-Day VIP exact semantics');
requireMatch(gate, /Lifetime VIP remains a one-time promotional entitlement offered only during selected genuine sales windows/i, 'Lifetime VIP sales-window semantics');
requireMatch(gate, /must \*\*never create a new sale or reopen a closed sales window\*\*/i, 'Lifetime VIP stale-event closure');
requireMatch(gate, /transaction A.{0,200}transaction B/is, 'refund versus repurchase isolation');
requireMatch(gate, /does not retroactively reprice a completed one-time purchase/i, 'historical price immutability');
requireMatch(gate, /Outage, backlog and recovery mode/i, 'outage backlog safety');
requireMatch(gate, /Manual support and administrative correction/i, 'manual correction audit separation');
requireMatch(gate, /Unknown future event types/i, 'future event fail-safe');
requireMatch(gate, /not by themselves evidence that a player hacked TycoonX/i, 'transport versus player-enforcement separation');
requireMatch(gate, /data minimization/i, 'privacy minimization');
requireMatch(gate, /BGB § 327d/i, 'German conformity safeguard');
requireMatch(gate, /BGB § 327i/i, 'German remedies safeguard');
requireMatch(gate, /24\. A transport duplicate or reordering event/i, '24-case regression matrix');
requireMatch(gate, /BLOCK RELEASE \/ BLOCK PAYMENT-PATH CHANGE/i, 'release blocker verdict');

requireMatch(purchases, /Purchased Diamonds do not expire solely because time passes/i, 'canonical purchased Diamonds invariant');
requireMatch(purchases, /one-time, non-renewing entitlement/i, 'canonical 30-Day VIP invariant');
requireMatch(purchases, /selected limited promotional sales windows/i, 'canonical Lifetime VIP sales-window invariant');
requireMatch(purchases, /Apple App Store In-App Purchase/i, 'canonical Apple purchase channel');
requireMatch(purchases, /Google Play/i, 'canonical Google purchase channel');
requireMatch(purchases, /official TycoonX web shop powered by Xsolla/i, 'canonical Xsolla purchase channel');
requireMatch(purchases, /completed one-time purchase is not retroactively repriced/i, 'canonical future-price rule');
requireMatch(purchases, /does not reduce any rights that cannot legally be waived/i, 'canonical mandatory-rights caveat');

requireMatch(progress, /25\s*\/\s*25/, '25/25 localized hubs');
requireMatch(progress, /100\s*\/\s*100/, '100/100 localized full documents');
requireMatch(progress, /Exact next unfinished locale\/document: None/i, 'no unfinished localization');
requireMatch(progress, /full release on \*\*September 1, 2026\*\*/i, 'full-release checkpoint');

const badBrand = new RegExp('\\bTy' + 'conX\\b');
requireNoMatch(gate, badBrand, 'no stale rendered brand in new gate');
requireNoMatch(purchases, badBrand, 'no stale rendered brand in canonical purchases');
requireNoMatch(gate, /TycoonX.{0,40}\bbeta\b|\bbeta\b.{0,40}TycoonX/i, 'no stale live-service beta wording in new gate');

if (failures.length) {
  console.error('TycoonX payment event ordering/replay/reconciliation verification FAILED:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX payment event ordering/replay/reconciliation verification passed.');
