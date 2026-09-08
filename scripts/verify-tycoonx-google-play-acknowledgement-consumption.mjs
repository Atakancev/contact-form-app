import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (name) => fs.readFileSync(path.join(root, name), 'utf8');
const gate = read('TYCOONX_GOOGLE_PLAY_ACKNOWLEDGEMENT_CONSUMPTION_RELEASE_GATE.md');

function must(text, pattern, label) {
  if (!pattern.test(text)) throw new Error(`Missing invariant: ${label}`);
}

must(gate, /Last reviewed: September 8, 2026/, 'current review date');
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
must(gate, /one-time, non-renewing entitlement lasting 30 consecutive days/i, '30-Day VIP product definition');
must(gate, /consuming the Google purchase does not mean the current 30-Day VIP expired/i, '30-Day VIP consumption separation');
must(gate, /future recurring product requires its own compliant recurring-product terms/i, 'future recurring product guard');
must(gate, /Lifetime VIP is a one-time promotional entitlement available only during selected genuine sales windows/i, 'Lifetime VIP sales-window rule');
must(gate, /never consume a Lifetime VIP purchase token/i, 'Lifetime VIP cannot be consumed');
must(gate, /does not by itself cancel the player's already valid TycoonX Lifetime VIP/i, 'accidental Lifetime consume preserves valid entitlement');
must(gate, /not by itself evidence of player fraud, chargeback abuse, hacking, account compromise, regional-price abuse, or entitlement abuse/i, 'missed acknowledgement not automatic abuse');
must(gate, /entitlement_granted = true`, `provider_settled = false/i, 'separate entitlement and provider settlement idempotency');
must(gate, /`orderId` must not become the sole idempotency key/i, 'orderId not sole key');
must(gate, /mandatory consumer rights/i, 'mandatory rights preserved');
must(gate, /current checkout does not expose a second purchase path/i, '30-Day overlapping purchase fail-closed test');
must(gate, /no consume call is reachable/i, 'Lifetime non-consumable regression test');
must(gate, /Google auto-refunds after CK-Labs misses acknowledgement/i, 'automatic refund regression test');

if (/\bTyconX\b/.test(gate)) throw new Error('Displayed legacy brand spelling detected');
if (/TycoonX\s+beta/i.test(gate)) throw new Error('Stale live-service beta wording detected');

console.log('TycoonX Google Play acknowledgement/consumption gate passed.');
