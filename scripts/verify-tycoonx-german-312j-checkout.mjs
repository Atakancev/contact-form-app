#!/usr/bin/env node

import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const paths = {
  gate: 'TYCOONX_GERMAN_312J_ORDER_BUTTON_CHECKOUT_RELEASE_GATE.md',
  terms: 'tyconx-terms-of-service.md',
  purchases: 'tyconx-purchase-refund-policy.md',
  progress: 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md',
};

const errors = [];
const notes = [];

function need(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

async function collectFiles(dir) {
  const out = [];
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...await collectFiles(full));
    else if (entry.isFile()) out.push(full);
  }
  return out;
}

const entries = await Promise.all(Object.entries(paths).map(async ([key, file]) => [
  key,
  await readFile(path.join(ROOT, file), 'utf8'),
]));
const text = Object.fromEntries(entries);

// Keep the § 312j doctrine in one dedicated gate/verifier. A second full
// order-button gate previously drifted into the repository and duplicated the
// same legal rules. Fail QA if those retired paths ever reappear.
const retiredDuplicatePaths = [
  'TYCOONX_GERMAN_CHECKOUT_ORDER_BUTTON_RELEASE_GATE.md',
  'scripts/verify-tycoonx-german-checkout-order-button.mjs',
];
for (const file of retiredDuplicatePaths) {
  try {
    await readFile(path.join(ROOT, file), 'utf8');
    errors.push(`Retired duplicate German order-button QA path reappeared: ${file}`);
  } catch (error) {
    if (error?.code !== 'ENOENT') {
      errors.push(`Could not verify retired duplicate path is absent (${file}): ${error?.message ?? error}`);
    }
  }
}

const gateChecks = [
  [/Review date: \*\*September 3, 2026\*\*/i, 'Missing current review date.'],
  [/TycoonX went to full release on \*\*September 1, 2026\*\*/i, 'Missing live-service release checkpoint.'],
  [/BGB § 312j/i, 'Missing BGB § 312j baseline.'],
  [/BGB § 312j\(4\)/i, 'Missing § 312j(4) contract-formation consequence.'],
  [/zahlungspflichtig bestellen/i, 'Missing statutory German payment-button wording.'],
  [/labelled with \*\*nothing other than\*\*/i, 'Missing button-label-only safeguard.'],
  [/immediately before the consumer submits the order/i, 'Missing immediate pre-order information timing.'],
  [/Article 246a § 1\(1\).*1, 5 to 7, 8, 14 and 15/is, 'Missing current EGBGB cross-reference checkpoint.'],
  [/total price including taxes and charges/i, 'Missing final-total/tax checkpoint.'],
  [/personalized-price disclosure/i, 'Missing personalized-price checkpoint.'],

  [/C-249\/21, Fuhrmann-2/i, 'Missing CJEU Fuhrmann-2 checkpoint.'],
  [/only the wording on the button or similar function itself is relevant/i, 'Missing button-wording-only rule.'],
  [/Terms checkbox does not cure an ambiguous final button/i, 'Missing no-Terms-cure safeguard.'],
  [/C-400\/22, Conny/i, 'Missing CJEU Conny checkpoint.'],
  [/conditional on a future event/i, 'Missing conditional-payment safeguard.'],

  [/BGH X ZR 81\/23/i, 'Missing BGH X ZR 81/23 multiple-contract checkpoint.'],
  [/several services that are in principle independently provided/i, 'Missing independent-paid-contract rule.'],
  [/BGH I ZR 159\/24/i, 'Missing BGH I ZR 159/24 checkpoint.'],
  [/definitively ineffective under § 312j\(4\)/i, 'Missing definitive-ineffectiveness safeguard.'],
  [/later confirmation.*must itself respect the § 312j payment-confirmation protection/is, 'Missing anti-circumvention confirmation safeguard.'],

  [/### Diamonds/i, 'Missing Diamonds checkout section.'],
  [/### One-time 30-Day VIP/i, 'Missing one-time 30-Day VIP checkout section.'],
  [/one-time, non-renewing 30-day entitlement/i, 'Missing 30-Day VIP non-renewing rule.'],
  [/### Lifetime VIP/i, 'Missing Lifetime VIP checkout section.'],
  [/selected genuine promotional sales windows/i, 'Missing Lifetime VIP limited-window rule.'],
  [/may be withdrawn from future sale, may never return/i, 'Missing Lifetime VIP future-availability boundary.'],
  [/later lower price does not automatically create a refund, credit, price match/i, 'Missing future lower-price safeguard.'],
  [/later higher price does not create an extra charge/i, 'Missing future higher-price safeguard.'],

  [/Promotions, coupons and regional pricing/i, 'Missing promotions/regional-pricing section.'],
  [/actual final total after a valid coupon/i, 'Missing coupon final-total rule.'],
  [/ordinary country\/storefront\/currency pricing distinct from automated individualized price personalization/i, 'Missing regional-vs-personalized distinction.'],
  [/Obvious catalog\/configuration errors/i, 'Missing pricing/catalog error section.'],
  [/backend `expected price` field.*not automatic proof/is, 'Missing backend-price-authority safeguard.'],

  [/Pending, failed and reversed payments/i, 'Missing payment-state section.'],
  [/compliant button does not turn a `PENDING` payment into a completed transaction/i, 'Missing pending-payment distinction.'],
  [/Refunds, chargebacks and reversals must affect only the matching transaction\/entitlement/i, 'Missing transaction-specific correction rule.'],
  [/Duplicate webhooks or callbacks must remain idempotent/i, 'Missing idempotency rule.'],

  [/Apple App Store and Google Play boundary/i, 'Missing Apple/Google boundary.'],
  [/do not place a second CK-Labs `zahlungspflichtig bestellen` button/i, 'Missing no-duplicate-platform-button safeguard.'],
  [/Xsolla Merchant-of-Record boundary/i, 'Missing Xsolla boundary.'],
  [/Merchant of Record.*alone.*no § 312j risk/is, 'Missing no-MoR-assumption safeguard.'],
  [/final order-button wording in German/i, 'Missing live Xsolla German button evidence.'],

  [/Account compromise, fraud and entitlement abuse/i, 'Missing account-compromise/fraud section.'],
  [/Do not remove unrelated legitimate Diamonds or unrelated paid VIP/i, 'Missing unrelated-entitlement isolation.'],
  [/Do not restart, extend, shorten, duplicate or convert the original one-time 30-Day VIP period/i, 'Missing 30-Day VIP isolation.'],
  [/Do not add an expiry date to a valid Lifetime VIP/i, 'Missing Lifetime VIP isolation.'],

  [/Outages and third-party failures/i, 'Missing outage section.'],
  [/reconcile idempotently after recovery/i, 'Missing outage reconciliation rule.'],
  [/Old and unsupported app versions/i, 'Missing unsupported-version section.'],
  [/Future recurring products/i, 'Missing future recurring-products section.'],
  [/do not silently convert an existing one-time VIP into it/i, 'Missing no-recurring-conversion safeguard.'],

  [/September 27, 2026 German-law checkpoint/i, 'Missing September 27 law-change checkpoint.'],
  [/digital content\/services, not physical goods/i, 'Missing current TycoonX digital-only classification.'],
  [/Production evidence required/i, 'Missing production-evidence section.'],
  [/screenshot or equivalent durable capture of the screen immediately before order/i, 'Missing final-order-screen evidence requirement.'],
  [/Current repository parity checkpoint/i, 'Missing repository-vs-production boundary.'],
  [/does \*\*not\*\* prove that the external live TycoonX\/Xsolla checkout is compliant/i, 'Missing no-false-production-proof safeguard.'],
  [/do \*\*not\*\* add a fake static order button/i, 'Missing no-fake-button safeguard.'],
  [/Reviewed September 3, 2026 against/i, 'Missing source review checkpoint.'],
];

for (const [pattern, message] of gateChecks) need(text.gate, pattern, message);

need(text.terms, /Diamonds/i, 'Canonical Terms lost Diamonds.');
need(text.terms, /30-Day VIP/i, 'Canonical Terms lost 30-Day VIP.');
need(text.terms, /Lifetime VIP/i, 'Canonical Terms lost Lifetime VIP.');
need(text.terms, /Apple App Store/i, 'Canonical Terms lost Apple channel.');
need(text.terms, /Google Play/i, 'Canonical Terms lost Google Play channel.');
need(text.terms, /Xsolla/i, 'Canonical Terms lost Xsolla channel.');
need(text.terms, /Nothing in these Terms excludes, limits, or overrides rights that cannot legally be excluded or limited/i, 'Canonical Terms lost mandatory-rights carveout.');

need(text.purchases, /Diamonds/i, 'Canonical Purchases policy lost Diamonds.');
need(text.purchases, /30-Day VIP/i, 'Canonical Purchases policy lost 30-Day VIP.');
need(text.purchases, /Lifetime VIP/i, 'Canonical Purchases policy lost Lifetime VIP.');
need(text.purchases, /refund/i, 'Canonical Purchases policy lost refunds.');
need(text.purchases, /chargeback/i, 'Canonical Purchases policy lost chargebacks.');
need(text.purchases, /regional/i, 'Canonical Purchases policy lost regional pricing context.');

need(text.progress, /25\/25/i, 'Localization tracker no longer confirms 25/25 hubs.');
need(text.progress, /100\/100 localized full documents are currently confirmed current/i, 'Localization tracker no longer confirms 100/100 current localized documents.');
need(text.progress, /Exact next unfinished locale\/document: None/i, 'Localization queue unexpectedly reopened; localization must take priority.');

for (const [name, value] of Object.entries(text)) {
  if (/TyconX/.test(value)) errors.push(`Displayed TyconX brand typo found in ${name}.`);
  if (/\bTycoonX\b[^\n]{0,120}\bbeta\b|\bbeta\b[^\n]{0,120}\bTycoonX\b/i.test(value)) {
    errors.push(`Stale live-service beta wording found in ${name}.`);
  }
}

if (/TycoonX goes to full release on September 1, 2026/i.test(text.gate)) {
  errors.push('Stale future-tense release wording found in § 312j gate.');
}

const appFiles = await collectFiles(path.join(ROOT, 'app'));
const relativeFiles = appFiles.map((file) => path.relative(ROOT, file).replaceAll('\\', '/'));
const commerceRoutes = relativeFiles.filter((file) => /\/(?:checkout|shop|webshop|storefront|pay)(?:\/|\.|$)/i.test(file));

let appText = '';
for (const file of appFiles) {
  if (!/\.(?:tsx?|jsx?|md|mdx|html)$/i.test(file)) continue;
  try {
    appText += `\n${await readFile(file, 'utf8')}`;
  } catch {
    // Continue static QA if an unrelated file cannot be read.
  }
}

const hasGermanPaymentLabel = /zahlungspflichtig bestellen/i.test(appText);
const hasPotentialNeutralPaidLabel = /(>\s*(?:Continue|Confirm|Complete|Activate|Weiter|Bestätigen|Abschließen)\s*<|['"`](?:Continue|Confirm|Complete|Activate|Weiter|Bestätigen|Abschließen)['"`])/i.test(appText);

if (commerceRoutes.length === 0) {
  notes.push('No obvious in-repository shop/webshop/checkout/storefront/pay route detected. External TycoonX/Xsolla German § 312j production parity remains a manual evidence item.');
} else if (!hasGermanPaymentLabel) {
  errors.push(`Potential commerce route(s) detected (${commerceRoutes.join(', ')}) but no German § 312j payment-button label was found. Classify the actual contracting flow before shipping.`);
} else {
  notes.push('Potential in-repository commerce route and German payment label detected. Static text is not proof that the production order screen, merchant mapping and final total are compliant.');
}

if (commerceRoutes.length > 0 && hasPotentialNeutralPaidLabel) {
  notes.push('Neutral action labels were found near a repository that may contain commerce routes. Manually verify they cannot submit a German paid order.');
}

console.log('TycoonX German BGB § 312j checkout QA');
for (const note of notes) console.log(`INFO: ${note}`);

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: repository legal-text QA covers German order-button formation, pre-order information, product/payment separation, provider boundaries, entitlement isolation and the production-evidence boundary.');
}
