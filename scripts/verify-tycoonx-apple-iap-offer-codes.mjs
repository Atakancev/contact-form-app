import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const gatePath = path.join(root, 'TYCOONX_APPLE_IAP_OFFER_CODES_RELEASE_GATE.md');
const progressPath = path.join(root, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');
const euPromoPath = path.join(root, 'TYCOONX_EU_PROMOTION_DARK_PATTERN_RELEASE_GATE.md');

function read(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing required file: ${path.relative(root, filePath)}`);
  }
  return fs.readFileSync(filePath, 'utf8');
}

function requireText(text, needle, label) {
  if (!text.includes(needle)) {
    throw new Error(`Missing Apple offer-code safeguard: ${label} (${needle})`);
  }
}

function requireRegex(text, regex, label) {
  if (!regex.test(text)) {
    throw new Error(`Missing Apple offer-code safeguard: ${label} (${regex})`);
  }
}

function forbidRegex(text, regex, label) {
  if (regex.test(text)) {
    throw new Error(`Forbidden Apple offer-code regression: ${label} (${regex})`);
  }
}

const gate = read(gatePath);
const progress = read(progressPath);
const euPromo = read(euPromoPath);

// Apple current IAP offer-code mechanics.
requireText(gate, 'up to 10 active In-App Purchase offers at a time', '10 active-offer limit');
requireText(gate, '1,000,000 one-time-use plus custom codes per app per quarter', 'quarterly production code limit');
requireText(gate, '10,000', 'sandbox quarterly limit');
requireText(gate, 'one code redemption per offer', 'per-customer per-offer redemption limit');
requireText(gate, 'one-time-use codes', 'one-time-use code class');
requireText(gate, 'custom codes', 'custom code class');
requireText(gate, 'sandbox codes', 'sandbox code class');
requireText(gate, 'Ready for Distribution', 'production app-state requirement');
requireText(gate, 'associated In-App Purchase must be Approved', 'approved IAP requirement');
requireRegex(gate, /purchased within (?:your app in )?the last 30 days/i, 'purchase-history eligibility');
requireText(gate, 'paid or free offer', 'paid/free offer distinction');
requireText(gate, 'offer cannot be edited after creation', 'immutable offer configuration');
requireText(gate, '12:00 a.m. Pacific Time', 'Apple expiration timezone');
requireText(gate, 'up to one hour before they become redeemable', 'activation delay');
requireText(gate, '500 to 25,000', 'one-time-use batch bounds');
requireText(gate, 'custom-code redemption limit up to 25,000', 'custom code batch bound');
requireText(gate, 'maximum validity of six months', 'one-time-use expiration limit');
requireText(gate, 'custom codes to have no end date', 'custom code no-end-date option');
requireText(gate, 'creating a new batch using the same code with a later expiration date', 'custom-code extension behavior');
requireText(gate, 'deactivated first', 'replacement-batch deactivation rule');

// Entitlement authority and environment isolation.
requireText(gate, 'never sufficient entitlement authority by itself', 'code/link/screenshot not entitlement authority');
requireText(gate, 'authoritatively verified', 'verified Apple transaction authority');
requireText(gate, 'exactly once', 'idempotent fulfillment');
requireText(gate, 'Sandbox codes are test-only', 'sandbox test-only rule');
requireText(gate, 'must never grant production Diamonds', 'sandbox/production isolation');
requireText(gate, 'TycoonX is not a beta service', 'sandbox wording must not imply beta service');

// Product distinctions.
requireText(gate, 'exact Diamond quantity', 'Diamond quantity mapping');
requireText(gate, 'does not make Diamonds already validly granted', 'code expiration does not expire granted Diamonds');
requireText(gate, '30-consecutive-day entitlement once', 'one-time 30-Day VIP duration');
requireText(gate, 'does not turn the product into an auto-renewing subscription', '30-Day VIP non-renewal');
requireText(gate, 'Lifetime VIP remains a limited-time promotional offering', 'Lifetime VIP limited-sale status');
requireText(gate, 'may be withdrawn from sale, may never return', 'Lifetime VIP future availability disclaimer');
requireText(gate, 'undocumented backdoor', 'offer code must not bypass Lifetime sale window');
requireText(gate, 'Creating or distributing a code', 'Lifetime code-window control');
requireText(gate, 'is not automatically fraud', 'valid late Lifetime code is not automatic fraud');
requireText(gate, 'different price', 'future Lifetime sale price can differ without revoking completed purchase');

// Campaign truthfulness and timing.
requireText(gate, 'must not market a different local cutoff', 'expiration timezone disclosure');
requireText(gate, 'must be aligned to avoid a misleading earlier or later redemption window', 'cross-channel campaign alignment');
requireText(gate, 'must not advertise “active now”', 'activation delay marketing');
requireText(gate, 'fake scarcity', 'no fake scarcity via custom batch extension');
requireText(gate, 'recycle an expired “last chance” claim', 'no recycled last-chance claim');
requireText(gate, 'Deactivation is a forward-looking redemption control', 'deactivation semantics');
requireText(gate, 'must not treat code deactivation as a refund or revocation', 'completed entitlement survives code deactivation');

// Regional pricing, tax, FX, final price and promotion claims.
requireText(gate, 'taxes and foreign-exchange rates', 'Apple tax/FX pricing');
requireText(gate, 'authoritative Apple product/offer/storefront transaction data', 'storefront transaction authority');
requireText(gate, 'is not by itself a pricing error or regional-price abuse', 'legitimate regional offer not abuse');
requireText(gate, 'final total price shown', 'final total price rule');
requireText(gate, 'later price decrease does not automatically create a refund', 'no automatic price match');
requireText(gate, 'later increase does not create an extra charge', 'no retroactive extra charge');
requireText(gate, 'Promotional percentages, crossed-out prices', 'truthful promotional claims');

// Account attribution, privacy and fraud boundaries.
requireText(gate, 'outside TycoonX', 'outside-app redemption awareness');
requireText(gate, 'correct TycoonX account', 'account attribution');
requireText(gate, 'is genuinely ambiguous', 'ambiguous attribution reconciliation');
requireText(gate, 'must never manually grant Diamonds', 'support cannot grant from code knowledge');
requireText(gate, 'must not transform “not eligible for this Apple offer” into a broad fraud label', 'eligibility is not fraud');
requireText(gate, 'not by itself sufficient proof', 'code rejection/share is not automatic abuse evidence');
requireText(gate, 'transaction-specific', 'proportionate correction boundary');
requireText(gate, 'must not automatically accuse the player of exploitation', 'configuration-error protection');

// Refund/reversal separation.
requireText(gate, 'authoritative Apple transaction lineage', 'refund lineage');
requireText(gate, 'The code itself is not refund authority', 'code is not refund authority');
requireText(gate, 'A failed or pending redemption does not justify a clawback', 'failed/pending redemption no clawback');
requireText(gate, 'configuration mistake must not automatically become a chargeback/fraud strike', 'provider/configuration failure boundary');

// Mandatory rights.
requireText(gate, 'mandatory German/EU consumer protections', 'mandatory-rights preservation');
requireText(gate, 'withdrawal rights where applicable', 'withdrawal rights');
requireText(gate, 'conformity and update rights', 'conformity/update rights');
requireText(gate, 'price reduction', 'price-reduction remedy');
requireText(gate, 'termination', 'termination remedy');
requireText(gate, 'refund rights', 'refund rights');
requireText(gate, 'damages/liability rules', 'liability rights');
requireText(gate, 'Lifetime VIP scarcity and deadlines must be genuine', 'genuine Lifetime scarcity');

// Cross-gate consistency.
requireRegex(euPromo, /Lifetime VIP[\s\S]{0,1200}(genuine|selected)[\s\S]{0,1200}(window|sale)/i, 'existing EU promotion gate keeps genuine Lifetime windows');
requireRegex(euPromo, /(fake scarcity|false scarcity|countdown)/i, 'existing EU promotion gate blocks manipulative scarcity/countdowns');

// Brand/release/localization status.
forbidRegex(gate, /\bTyconX\b/, 'legacy misspelling in rendered gate prose');
requireText(gate, 'TycoonX', 'correct brand');
requireText(gate, 'September 1, 2026', 'full release date');
forbidRegex(gate, /TycoonX\s+(?:is|remains)\s+(?:currently\s+)?(?:a\s+)?beta\b/i, 'live TycoonX positively described as beta');
requireText(progress, '**Localized full documents:** 100/100, **100%**', '100/100 localized full documents');
requireText(progress, '**Localized hubs:** 25/25, **100%**', '25/25 localized hubs');
requireText(progress, 'Exact next unfinished locale/document: None.', 'closed localization queue');
requireText(progress, 'TycoonX went to full release on **September 1, 2026**', 'tracker full-release status');

console.log('PASS: TycoonX Apple In-App Purchase offer-code release gate preserves current Apple mechanics, product distinctions, sale-window integrity, regional-price/tax/FX boundaries, refund separation, mandatory rights, brand, release status, and completed localization state.');
