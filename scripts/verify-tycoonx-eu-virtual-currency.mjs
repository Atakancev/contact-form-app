import fs from 'node:fs';

const checks = [
  {
    file: 'app/tyconx-purchase-refund-policy/page.tsx',
    mustInclude: [
      'Last updated August 28, 2026',
      'real-world monetary price information',
      'unused purchased Diamonds remain subject to that right',
      '14-day statutory withdrawal right',
      'does not treat the mere crediting of purchased Diamonds as immediately supplied digital content',
      'TycoonX',
    ],
    mustNotInclude: [
      'For immediately supplied digital content such as a Diamond bundle',
      'TyconX',
      'beta',
    ],
  },
  {
    file: 'tyconx-purchase-refund-policy.md',
    mustInclude: [
      'Last updated: August 28, 2026',
      'Purchased Diamonds and EU/EEA withdrawal rights',
      'unused purchased Diamonds remain subject to that right',
      'real-world monetary price information',
      'TycoonX',
    ],
    mustNotInclude: [
      'Immediately supplied digital content such as Diamonds',
      'TyconX',
      'beta',
    ],
  },
  {
    file: 'app/tycoonx-legal/tr/purchases/page.tsx',
    mustInclude: [
      'Türkçe sürüm: 28 Ağustos 2026',
      'Kanonik İngilizce sürüm: 28 Ağustos 2026',
      '14 günlük yasal cayma hakkı',
      'kullanılmamış satın alınmış Elmaslar',
      'gerçek para karşılığı',
      'TycoonX',
    ],
    mustNotInclude: [
      'Elmas paketi gibi hemen sağlanan dijital içerikte',
      'TyconX',
      'beta',
    ],
  },
  {
    file: 'TYCOONX_EU_VIRTUAL_CURRENCY_RELEASE_GATE.md',
    mustInclude: [
      'March 21, 2025',
      'real-world monetary price',
      '14-day statutory withdrawal right',
      'unused purchased Diamonds',
      'children',
      'Apple App Store',
      'Google Play',
      'Xsolla',
      'TycoonX',
    ],
    mustNotInclude: ['TyconX', 'beta'],
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
console.log('TycoonX EU virtual-currency legal checks passed.');
