import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (name) => fs.readFileSync(path.join(root, name), 'utf8');
const gate = read('TYCOONX_GOOGLE_PLAY_ACKNOWLEDGEMENT_CONSUMPTION_RELEASE_GATE.md');

function must(text, pattern, label) {
  if (!pattern.test(text)) throw new Error(`Missing invariant: ${label}`);
}

must(gate, /Last reviewed: September 9, 2026/, 'current review date');
must(gate, /full release/i, 'full release positioning');
must(gate, /within \*\*three days\*\*/i, 'three-day Google acknowledgement deadline');
must(gate, /`PENDING` to `PURCHASED`/, 'pending acknowledgement clock transition');
must(gate, /Purchases\.products:consume/, 'secure-backend consumable API');
must(gate, /consumeAsync\(\)/, 'client consumable API');
must(gate, /Purchases\.products:acknowledge/, 'secure-backend non-consumable API');
must(gate, /acknowledgePurchase\(\)/, 'client acknowledgement API');
must(gate, /`consumptionState`/, 'provider consumption-state check');
must(gate, /`acknowledgementState`/, 'provider acknowledgement-state check');
must(gate, /billing settlement state/i, 'Google consumption versus gameplay distinction');
must(gate, /never interpret Google consumption as the player spending, expiring, forfeiting, or surrendering those Diamonds/i, 'Diamonds survive provider consumption');
must(gate, /purchase-history query was removed from Play Billing Library 8/i, 'PBL 8 purchase-history removal');
must(gate, /`queryPurchasesAsync\(\)` for purchases that are currently active\/owned/i, 'active purchase query scope');
must(gate, /keep consumed purchase history on the app's own backend/i, 'backend consumed purchase history');
must(gate, /canceled or voided purchases should be checked through the Voided Purchases developer API/i, 'voided purchase authority');
must(gate, /`queryPurchasesAsync\(\)` is not a historical ledger or a negative refund verdict/i, 'active query not historical authority');
must(gate, /absence of an old transaction from `queryPurchasesAsync\(\)` does \*\*not\*\* prove that the purchase never occurred/i, 'empty active query not non-purchase proof');
must(gate, /historical consumed Diamond purchases must be retained in the durable TycoonX backend purchase\/entitlement ledger/i, 'durable consumed Diamond history');
must(gate, /reinstall, device change, Play Store cache reset, old\/unsupported client, or transient empty query must never erase server-side purchase history/i, 'device lifecycle cannot erase history');
must(gate, /restore flow re-grant the historical 1,000/i, 'historical consumed purchase no duplicate restore');
must(gate, /one-time, non-renewing entitlement lasting 30 consecutive days/i, '30-Day VIP product definition');
must(gate, /consuming the Google purchase does not mean the current 30-Day VIP expired/i, '30-Day VIP consumption separation');
must(gate, /future recurring product requires its own compliant recurring-product terms/i, 'future recurring product guard');
must(gate, /Lifetime VIP is a one-time promotional entitlement available only during selected genuine sales windows/i, 'Lifetime VIP sales-window rule');
must(gate, /never consume a Lifetime VIP purchase token/i, 'Lifetime VIP cannot be consumed');
must(gate, /does not by itself cancel the player's already valid TycoonX Lifetime VIP/i, 'accidental Lifetime consume preserves valid entitlement');
must(gate, /not by itself evidence of player fraud, chargeback abuse, hacking, account compromise, regional-price abuse, or entitlement abuse/i, 'missed acknowledgement not automatic abuse');
must(gate, /consumed purchase being absent from `queryPurchasesAsync\(\)` is normal ownership-query behavior/i, 'consumed absence not fraud signal');
must(gate, /entitlement_granted = true`, `provider_settled = false/i, 'separate entitlement and provider settlement idempotency');
must(gate, /`orderId` must not become the sole idempotency key/i, 'orderId not sole key');
must(gate, /mandatory consumer rights/i, 'mandatory rights preserved');
must(gate, /consumed historical purchases remain durably attributable on the backend/i, 'release evidence for backend history');
must(gate, /empty active-purchase query as proof of refund\/non-purchase/i, 'support tooling negative-proof safeguard');
must(gate, /Six-month-old 1,000-Diamond purchase was validly consumed and is absent from `queryPurchasesAsync\(\)`/i, 'consumed purchase disappearance regression test');
must(gate, /local\/legacy history surface shows an old consumed 1,000-Diamond transaction/i, 'no historical regrant regression test');
must(gate, /refunded consumed Diamond transaction is absent from the active client query/i, 'refund authority regression test');
must(gate, /reinstalls TycoonX or changes devices/i, 'device migration purchase history regression test');
must(gate, /screenshot showing an empty Google ownership query/i, 'support screenshot regression test');
must(gate, /current checkout does not expose a second purchase path/i, '30-Day overlapping purchase fail-closed test');
must(gate, /no consume call is reachable/i, 'Lifetime non-consumable regression test');
must(gate, /Google auto-refunds after CK-Labs misses acknowledgement/i, 'automatic refund regression test');
must(gate, /query-purchase-history/i, 'current Google Query Purchase History reference');
must(gate, /billing\/release-notes/i, 'current Google Billing release notes reference');

if (/\bTyconX\b/.test(gate)) throw new Error('Displayed legacy brand spelling detected');
if (/TycoonX\s+beta/i.test(gate)) throw new Error('Stale live-service beta wording detected');

console.log('TycoonX Google Play acknowledgement/consumption gate passed.');
