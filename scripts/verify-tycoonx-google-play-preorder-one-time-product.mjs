import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');

const gate = read('TYCOONX_GOOGLE_PLAY_PREORDER_ONE_TIME_PRODUCT_RELEASE_GATE.md');
const purchases = read('tyconx-purchase-refund-policy.md');
const ordering = read('TYCOONX_PAYMENT_EVENT_ORDERING_REPLAY_RECONCILIATION_RELEASE_GATE.md');
const paymentGates = read('TYCOONX_PAYMENT_ENTITLEMENT_RELEASE_GATES.md');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const failures = [];
const requireMatch = (text, re, label) => {
  if (!re.test(text)) failures.push(label);
};
const requireNoMatch = (text, re, label) => {
  if (re.test(text)) failures.push(label);
};

requireMatch(gate, /Last reviewed: \*\*September 9, 2026\*\*/i, 'current review date');
requireMatch(gate, /Keep Google Play pre-order offers disabled for all current TycoonX paid products/i, 'current pre-order fail-closed decision');
requireMatch(gate, /purchased Diamonds[\s\S]{0,180}one-time 30-Day VIP[\s\S]{0,180}Lifetime VIP/i, 'all current paid-product exclusions');
requireMatch(gate, /one-time product[\s\S]{0,220}purchase option[\s\S]{0,220}offer/i, 'Google one-time-product hierarchy');
requireMatch(gate, /supported only for the \*\*buy\*\* purchase option/i, 'buy-option-only pre-order rule');
requireMatch(gate, /not automatically enabled in newly supported regions/i, 'new-region pre-order isolation');

requireMatch(gate, /Payment Pending[\s\S]{0,220}not authority to grant paid TycoonX value/i, 'pending is not entitlement authority');
requireMatch(gate, /only after backend verification[\s\S]{0,160}`PURCHASED`/i, 'verified PURCHASED requirement');
requireMatch(gate, /preorderReleaseTime/i, 'preorderReleaseTime handling');
requireMatch(gate, /RTDN is sent when a fulfilled pre-order changes to `PURCHASED`/i, 'fulfilled pre-order RTDN transition');
requireMatch(gate, /purchase token[\s\S]{0,180}Google Play Developer API/i, 'server-side authoritative lookup');
requireMatch(gate, /grant remains exactly once/i, 'pre-order idempotent fulfillment');
requireMatch(gate, /release timestamp is not proof that payment succeeded/i, 'release timestamp authority boundary');

requireMatch(gate, /Purchased Diamonds remain consumable virtual currency and do not expire solely because time passes/i, 'Diamonds no-expiry invariant');
requireMatch(gate, /30-Day VIP remains a \*\*one-time, non-renewing entitlement lasting 30 consecutive days from activation or availability\*\*/i, '30-Day VIP exact semantics');
requireMatch(gate, /Do not configure Lifetime VIP as a Google Play pre-order/i, 'Lifetime VIP pre-order prohibition');
requireMatch(gate, /available only during selected genuine sales windows/i, 'Lifetime VIP genuine sales-window rule');
requireMatch(gate, /never reopens future sale/i, 'Lifetime VIP restore-versus-sale separation');

requireMatch(gate, /canceling associated pre-orders before making a material change/i, 'material catalog change cancellation rule');
requireMatch(gate, /immutable starting \*\*1 hour before the release time\*\*/i, 'one-hour immutability checkpoint');
requireMatch(gate, /canceled \*\*2 days before release\*\*/i, 'regional removal cancellation checkpoint');
requireMatch(gate, /once a product has been made available to buy, it cannot later be sold as a pre-order/i, 'buy-to-preorder transition restriction');
requireMatch(gate, /one active or fulfilled pre-order offer is allowed per region/i, 'one preorder per region rule');
requireMatch(gate, /cannot be placed inside a Google multi-product one-time-product bundle/i, 'multi-product preorder prohibition');

requireMatch(gate, /Regional availability is not player culpability/i, 'regional state versus enforcement separation');
requireMatch(gate, /increasing a pre-order price applies only to \*\*new\*\* pre-order purchases/i, 'pre-order price increase rule');
requireMatch(gate, /lower price guarantee/i, 'Google lower-price guarantee handling');
requireMatch(gate, /completed historical transaction/i, 'historical transaction non-repricing');

requireMatch(gate, /all items ordered through pre-order in the \*\*EEA and UK\*\* are treated as having a right of withdrawal/i, 'Google EEA/UK withdrawal checkpoint');
requireMatch(gate, /BGB § 356\(6\)/i, 'German digital-content withdrawal safeguard');
requireMatch(gate, /express consent[\s\S]{0,180}acknowledgement[\s\S]{0,180}§ 312f/i, 'German early-expiry evidence');
requireMatch(gate, /must not be falsely marked as fully performed/i, 'no fabricated early withdrawal expiry');
requireMatch(gate, /BGB § 356a/i, 'German electronic withdrawal-function cross-check');

requireMatch(gate, /Estimated Sales and Earnings reports when the pre-order is released and Play charges the user/i, 'pre-order reporting timing');
requireMatch(gate, /pending pre-order is not completed paid revenue/i, 'pending revenue exclusion');
requireMatch(gate, /Do not count the same order twice/i, 'pending-to-completed finance idempotency');
requireMatch(gate, /canceled before purchase completion[\s\S]{0,180}grant no paid entitlement/i, 'pre-release cancellation handling');
requireMatch(gate, /do not create a refund record unless money was actually charged and refunded/i, 'no fabricated pre-order refund');

requireMatch(gate, /Release-time outage and delayed delivery/i, 'release-time outage recovery');
requireMatch(gate, /Old clients, stale offers, and support screenshots/i, 'stale-client/support safety');
requireMatch(gate, /manually create a paid entitlement from a screenshot of a pending pre-order/i, 'support screenshot restriction');
requireMatch(gate, /Test and production isolation/i, 'test isolation');
requireMatch(gate, /test pre-order[\s\S]{0,200}never create production Diamonds/i, 'no test-to-production value leak');
requireMatch(gate, /Future Google changes fail closed/i, 'future provider-change fail closed');
requireMatch(gate, /26\. A refund or void after completion/i, '26-case regression matrix');
requireMatch(gate, /BLOCK RELEASE \/ BLOCK PAYMENT-PATH CHANGE/i, 'pre-order release blocker verdict');

requireMatch(ordering, /Webhook arrival order is not entitlement authority/i, 'existing payment ordering doctrine');
requireMatch(ordering, /Google Play RTDN and Pub\/Sub replay/i, 'existing Google RTDN doctrine');
requireMatch(paymentGates, /Google Play multi-product one-time purchase bundles/i, 'existing Google multi-product doctrine');
requireMatch(paymentGates, /pre-order or rental purchase option/i, 'existing multi-product preorder/rental exclusion');

requireMatch(purchases, /Purchased Diamonds do not expire solely because time passes/i, 'canonical purchased-Diamond invariant');
requireMatch(purchases, /one-time, non-renewing entitlement/i, 'canonical 30-Day VIP invariant');
requireMatch(purchases, /selected limited promotional sales windows/i, 'canonical Lifetime VIP sales-window invariant');
requireMatch(purchases, /Google Play purchase in a \*\*PENDING\*\* state does not create a TycoonX paid entitlement/i, 'canonical Google pending-purchase rule');
requireMatch(purchases, /completed one-time purchase is not retroactively repriced/i, 'canonical completed-purchase pricing rule');
requireMatch(purchases, /does not reduce any rights that cannot legally be waived/i, 'canonical mandatory-rights caveat');

requireMatch(progress, /25\/25/i, '25/25 localized hubs');
requireMatch(progress, /100 localized full documents are current/i, '100 localized full documents current');
requireMatch(progress, /Exact next unfinished locale\/document: None/i, 'localization queue closed');
requireMatch(progress, /full release on \*\*September 1, 2026\*\*/i, 'full-release checkpoint');

const badBrand = new RegExp('\\bTy' + 'conX\\b');
for (const [name, text] of [
  ['pre-order gate', gate],
  ['canonical Purchases policy', purchases],
]) {
  requireNoMatch(text, badBrand, `no stale displayed brand in ${name}`);
  requireNoMatch(text, /TycoonX.{0,40}\bbeta\b|\bbeta\b.{0,40}TycoonX/i, `no stale live-service beta wording in ${name}`);
}

if (failures.length) {
  console.error('TycoonX Google Play pre-order one-time-product verification FAILED:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX Google Play pre-order one-time-product verification passed.');
