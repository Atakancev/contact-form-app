import fs from 'node:fs';

const requiredFiles = [
  'TYCOONX_GOOGLE_PLAY_RENTAL_PURCHASE_OPTION_RELEASE_GATE.md',
  'TYCOONX_30_DAY_VIP_ONE_TIME_ENTITLEMENT_RELEASE_GATE.md',
  'TYCOONX_LIFETIME_VIP_LIMITED_PROMOTIONAL_ENTITLEMENT_RELEASE_GATE.md',
  'TYCOONX_GOOGLE_PLAY_PENDING_PURCHASE_ATTRIBUTION_RELEASE_GATE.md',
  'tyconx-purchase-refund-policy.md',
  'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md',
];

for (const file of requiredFiles) {
  if (!fs.existsSync(file)) throw new Error(`Missing required file: ${file}`);
}

const gate = fs.readFileSync('TYCOONX_GOOGLE_PLAY_RENTAL_PURCHASE_OPTION_RELEASE_GATE.md', 'utf8');
const vip30 = fs.readFileSync('TYCOONX_30_DAY_VIP_ONE_TIME_ENTITLEMENT_RELEASE_GATE.md', 'utf8');
const lifetime = fs.readFileSync('TYCOONX_LIFETIME_VIP_LIMITED_PROMOTIONAL_ENTITLEMENT_RELEASE_GATE.md', 'utf8');
const pending = fs.readFileSync('TYCOONX_GOOGLE_PLAY_PENDING_PURCHASE_ATTRIBUTION_RELEASE_GATE.md', 'utf8');
const purchases = fs.readFileSync('tyconx-purchase-refund-policy.md', 'utf8');
const progress = fs.readFileSync('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md', 'utf8');

const checks = [
  ['full-release status', /TycoonX is in full release/i],
  ['Buy and Rent taxonomy', /configured as \*\*Buy\*\* or \*\*Rent\*\*/i],
  ['rental period', /rental period/i],
  ['optional expiry period', /optional(?:ly)? (?:have|set|add).*expir/i],
  ['Google does not control access', /does \*\*not\*\* control access/i],
  ['48 hour rental period', /48 hours/i],
  ['72 hour rental period', /72 hours/i],
  ['30 day rental period', /30 days/i],
  ['60 day rental period', /60 days/i],
  ['32 day edge case', /day 32/i],
  ['only Buy backwards compatible', /only Buy purchase options can be marked backwards compatible/i],
  ['preorder Buy only', /pre-orders are supported only for Buy/i],
  ['multi-product rent unsupported', /multi-product one-time purchases do not support Rent/i],
  ['RentalDetails API', /RentalDetails/],
  ['rentalPeriod API', /`rentalPeriod`/],
  ['expirationPeriod API', /`expirationPeriod`/],
  ['EAP caution', /early access program/i],
  ['rent disabled for current paid products', /Do not activate Google Play Rent purchase options for purchased Diamonds, one-time 30-Day VIP, or Lifetime VIP/i],
  ['unknown option fail closed', /Unknown or newly introduced Google purchase-option types must fail closed/i],
  ['purchased Diamonds do not expire', /purchased Diamonds do not expire merely because time passes/i],
  ['Diamond rental expiration prohibited', /do not map a Rent period or rental expiry to the player's purchased Diamond balance/i],
  ['30-Day VIP exact duration', /30 consecutive days from activation or availability/i],
  ['30-Day VIP Rent not automatically equivalent', /30-day Rent option is not automatically equivalent/i],
  ['30-Day VIP 31-32 day prevention', /31, 32, or another duration/i],
  ['Lifetime VIP never Rent', /Lifetime VIP must never be Rent/i],
  ['Lifetime promotional windows', /selected genuine promotional sales windows/i],
  ['Lifetime no rental expiry', /no `rentalPeriod`, `expirationPeriod`.*hidden calendar expiry/i],
  ['closed Lifetime sale remains closed', /cannot reopen a closed Lifetime VIP sales window/i],
  ['checkout disclosure', /temporary duration and any first-use expiry condition/i],
  ['historical price preserved', /later catalog change between Buy and Rent does not retroactively rewrite an earlier completed purchase/i],
  ['client clock not authority', /device clock.*must not be the sole authority/i],
  ['old client fail closed', /old app version cannot represent the material rental duration\/expiry disclosure, it must not initiate/i],
  ['expiry separate from refund', /Rental expiry is not a refund, reversal, chargeback, payment failure, or fraud event/i],
  ['regional pricing transaction-specific', /regional pricing, taxes, currency, and promotions remain transaction-specific/i],
  ['cross-channel isolation', /Google catalog flag must never rewrite another provider's transaction/i],
  ['fraud evidence based', /Account compromise, fraud, and abuse decisions remain evidence-based/i],
  ['outage remedy', /material outage prevents use during paid access.*conformity\/cure\/extension\/price reduction\/termination\/refund/i],
  ['BGB 327d', /BGB § 327d/i],
  ['BGB 327e', /§ 327e/i],
  ['mandatory rights non-waivable', /cannot contractually waive non-waivable withdrawal, conformity, update, cure, termination, price-reduction, refund, liability, or information rights/i],
  ['26 regression scenarios', /26\. Apple\/Xsolla transaction exists/i],
  ['release blockers', /## 16\. Release blockers/i],
];

for (const [name, pattern] of checks) {
  if (!pattern.test(gate)) throw new Error(`Rental gate check failed: ${name}`);
}

if (!/one-time, non-renewing digital entitlement/i.test(vip30) || !/30 consecutive days/i.test(vip30)) {
  throw new Error('30-Day VIP canonical entitlement gate no longer preserves one-time 30-day semantics');
}
if (!/selected limited promotional sales windows/i.test(lifetime) || !/commercial operating lifetime/i.test(lifetime)) {
  throw new Error('Lifetime VIP gate no longer preserves limited-window/commercial-lifetime semantics');
}
if (!/Google Play Pending Purchase & Attribution Release Gate/i.test(pending) || !/PENDING/i.test(pending)) {
  throw new Error('Google pending-purchase companion gate missing expected state rules');
}
if (!/Purchased Diamonds do not expire solely because time passes/i.test(purchases)) {
  throw new Error('Canonical Purchases policy no longer preserves Diamond non-expiry');
}
if (!/30 consecutive days from activation or availability/i.test(purchases)) {
  throw new Error('Canonical Purchases policy no longer preserves 30-Day VIP duration');
}
if (!/selected limited promotional sales windows/i.test(purchases) || !/commercial operating lifetime/i.test(purchases)) {
  throw new Error('Canonical Purchases policy no longer preserves Lifetime VIP meaning');
}
if (!/25\/25/.test(progress) || !/100\/100/.test(progress)) {
  throw new Error('Localization tracker no longer reports complete hubs/full documents');
}
if (/\bTyconX\b/.test(gate)) {
  throw new Error('Displayed brand typo found in rental gate');
}
if (/TycoonX[^\n]{0,40}\bbeta\b/i.test(gate)) {
  throw new Error('Stale live-service beta wording found in rental gate');
}

console.log(`PASS: ${checks.length} Google Play rental purchase-option safeguards plus canonical entitlement/localization checks.`);
