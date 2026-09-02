import fs from 'node:fs';

const checks = [
  {
    file: 'TYCOONX_EU_VIRTUAL_CURRENCY_RELEASE_GATE.md',
    mustInclude: [
      'Last reviewed:** September 2, 2026',
      'full-cost acquisition reference',
      'cheapest per-Diamond rate',
      'player\'s existing Diamond balance',
      'Avoid layered or mixed purchasable currencies',
      'specific amount needed',
      '14-day withdrawal right',
      'arbitrarily change the denomination',
      'meaningful way for the player to challenge the reason',
      'vulnerable to excessive spending',
      'currency-topology map',
      'Apple App Store',
      'Google Play',
      'Xsolla',
      'TycoonX',
    ],
    mustNotInclude: ['TyconX', 'TycoonX beta'],
  },
  {
    file: 'tyconx-terms-of-service.md',
    mustInclude: [
      '# TycoonX Terms of Service',
      'Purchased Diamonds do not expire solely because time passes.',
      'mandatory digital-product law',
      'A purchase does not create a right to bypass Apple, Google, Xsolla',
      'The final total price and currency displayed by the applicable checkout before confirmation govern that transaction',
      '30-Day VIP',
      'Lifetime VIP',
      'mandatory consumer rights',
      'users may contact Support to dispute an enforcement decision',
    ],
    mustNotInclude: ['TyconX', 'TycoonX beta'],
  },
  {
    file: 'tyconx-purchase-refund-policy.md',
    mustInclude: [
      '# TycoonX Purchases & Refunds Policy',
      'Diamonds are virtual in-game currency.',
      'real-world monetary price information',
      'force consumers to buy materially unwanted surplus currency',
      '14-day statutory withdrawal right',
      'Apple App Store In-App Purchase',
      'Google Play',
      'Xsolla',
      '30-Day VIP',
      'Lifetime VIP',
    ],
    mustNotInclude: ['TyconX', 'TycoonX beta'],
  },
  {
    file: 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md',
    mustInclude: [
      '100/100 localized full documents are currently confirmed current',
      'Exact next unfinished locale/document: None',
      'TycoonX goes to full release on **September 1, 2026**',
    ],
    mustNotInclude: ['TyconX'],
  },
];

let failed = false;
for (const check of checks) {
  if (!fs.existsSync(check.file)) {
    console.error(`MISSING: ${check.file}`);
    failed = true;
    continue;
  }
  const text = fs.readFileSync(check.file, 'utf8');
  for (const needle of check.mustInclude) {
    if (!text.includes(needle)) {
      console.error(`MISSING TEXT in ${check.file}: ${needle}`);
      failed = true;
    }
  }
  for (const needle of check.mustNotInclude) {
    if (text.includes(needle)) {
      console.error(`FORBIDDEN TEXT in ${check.file}: ${needle}`);
      failed = true;
    }
  }
}

if (failed) process.exit(1);
console.log('TycoonX CPC virtual-currency parity checks passed.');
