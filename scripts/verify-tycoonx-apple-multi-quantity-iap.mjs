import fs from 'node:fs';

const gatePath = 'TYCOONX_APPLE_MULTI_QUANTITY_IAP_RELEASE_GATE.md';
const text = fs.readFileSync(gatePath, 'utf8');
const failures = [];

const mustContain = [
  'TycoonX',
  'Product.PurchaseOption.quantity',
  'maximum is 10',
  'purchasedQuantity',
  'quantity / `purchasedQuantity`',
  'Diamonds exactly once',
  '30-Day VIP',
  'Lifetime VIP',
  'limited-time promotional one-time entitlement',
  'price',
  'total transaction amount for the purchased quantity',
  'storefront',
  'PAngV § 3',
  'BGB § 312j',
  'consumptionPercentage=50000',
  'cumulative Diamond correction',
  'mandatory consumer remedy',
  'September 8, 2026',
];

for (const required of mustContain) {
  if (!text.includes(required)) failures.push(`Missing required invariant: ${required}`);
}

if (!/applies to consumable In-App Purchases and non-renewing subscriptions/i.test(text)) {
  failures.push('Apple quantity product-type scope is missing.');
}
if (!/Diamonds:[\s\S]*multi-quantity may be enabled only after/i.test(text)) {
  failures.push('Diamond multi-quantity fail-closed rule is missing.');
}
if (!/30-Day VIP:[\s\S]*quantity fixed at 1/i.test(text)) {
  failures.push('30-Day VIP quantity-one rule is missing.');
}
if (!/Lifetime VIP:[\s\S]*quantity must remain 1/i.test(text)) {
  failures.push('Lifetime VIP quantity-one rule is missing.');
}
if (!/grantedDiamonds = configuredDiamondsPerUnitAtPurchase × verifiedPurchasedQuantity/i.test(text)) {
  failures.push('Quantity-aware Diamond grant formula is missing.');
}
if (!/quantity 3[^\n]*1,500 Diamonds exactly once/i.test(text)) {
  failures.push('Concrete quantity-3 Diamond example is missing.');
}
if (!/same `transactionId` must not grant quantity 3 multiple times/i.test(text)) {
  failures.push('Transaction-level idempotency rule is missing.');
}
if (!/Do not multiply that server transaction price by quantity again/i.test(text)) {
  failures.push('Apple quantity-inclusive price double-multiplication safeguard is missing.');
}
if (!/currency[^\n]*must not be used to infer storefront/i.test(text)) {
  failures.push('Apple currency/storefront separation is missing.');
}
if (!/total original Diamond grant for that transaction/i.test(text)) {
  failures.push('Transaction-wide refund base is missing.');
}
if (!/quantity 2 and one item is fully consumed[^\n]*50% \(`50000` milliunits\)/i.test(text)) {
  failures.push('Apple quantity consumption-percentage example is missing.');
}
if (!/create 60\/90\/etc\. days of 30-Day VIP/i.test(text)) {
  failures.push('VIP quantity-stacking prohibition is missing.');
}
if (!/cannot create multiple entitlements or reopen a closed sale/i.test(text)) {
  failures.push('Lifetime VIP sale-window quantity regression case is missing.');
}
if (!/old app versions cannot bypass server-side product\/quantity validation/i.test(text)) {
  failures.push('Unsupported-client quantity regression case is missing.');
}
if (/\bTyconX\b/.test(text)) {
  failures.push('Legacy displayed brand spelling found.');
}
if (/\bTycoonX\s+(?:is|remains|currently|still)\s+(?:a\s+)?beta\b/i.test(text)) {
  failures.push('Stale live-service beta wording found.');
}

if (failures.length) {
  console.error('TycoonX Apple multi-quantity IAP gate FAILED');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX Apple multi-quantity IAP gate passed.');
