#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const gatePath = path.join(root, 'TYCOONX_APPLE_SOUTH_KOREA_ALTERNATIVE_PAYMENT_RELEASE_GATE.md');
const trackerPath = path.join(root, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const fail = (message) => {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
};

const requireFile = (filePath) => {
  if (!fs.existsSync(filePath)) {
    fail(`Missing ${path.relative(root, filePath)}`);
    return '';
  }
  return fs.readFileSync(filePath, 'utf8');
};

const requireAll = (text, label, needles) => {
  for (const needle of needles) {
    if (!text.includes(needle)) fail(`${label} missing required invariant: ${needle}`);
  }
};

const gate = requireFile(gatePath);
const tracker = requireFile(trackerPath);

requireAll(gate, 'Apple South Korea gate', [
  '# TycoonX Apple South Korea Alternative Payment Release Gate',
  'September 6, 2026',
  'StoreKit External Purchase Entitlement',
  'separate iOS and/or iPadOS app binary',
  'distributed solely on the South Korea storefront',
  "cannot be used in the same app with Apple's in-app purchase system",
  'Xsolla is **not automatically approved**',
  'only one PSP may be used per entitlement',
  'native experience within the app',
  'may not be provided in a web view',
  '`com.apple.developer.storekit.external-purchase = true`',
  '`SKExternalPurchase`',
  '`KR`',
  '`canMakePayments`',
  '`Storefront` or `SKStorefront`',
  'External Purchase Modal Sheet',
  'iOS/iPadOS 15.4 or later',
  '**26% commission on the price paid by the user, gross of value-added taxes**',
  "**monthly within 15 calendar days following the end of Apple's fiscal month**",
  "**45 days following the end of Apple's fiscal month**",
  'Apple reportable transaction state',
  'PSP payment authorization/settlement state',
  'TycoonX entitlement state',
  'client UI must not be the entitlement authority',
  'Purchased Diamonds do not expire solely because time passes.',
  'one-time, non-renewing 30-day entitlement',
  'limited-time promotional offering available only during selected genuine sales windows',
  'may never return',
  'remotely disableable without deleting valid user entitlements',
  'Mandatory consumer rights remain intact',
]);

requireAll(gate, 'South Korea fail-closed rules', [
  'GPS location',
  'IP geolocation',
  'device language',
  'SIM country',
  'TycoonX profile country',
  'If the required storefront/payment state cannot be confirmed, fail closed',
]);

requireAll(gate, 'PSP and architecture separation', [
  'KCP, Inicis, Toss, and NICE',
  'submit Xsolla to Apple',
  'Do not treat the U.S. external-web-link architecture, Japan web-offer architecture, Google Play South Korea webview architecture, or the standalone TycoonX webshop as interchangeable',
  'Apple IAP is not offered in the same entitlement-enabled app while the current mutual-exclusion rule applies.',
  'A non-approved Xsolla configuration cannot be enabled by remote flag.',
]);

requireAll(gate, 'Product and price invariants', [
  'completed one-time purchases are not retroactively repriced',
  'a later price decrease does not automatically create a refund/credit/price-match right',
  'a later price increase does not create an extra charge on an already completed one-time purchase',
  'promotional countdowns, crossed-out prices, discount claims, scarcity claims, and Lifetime VIP sales-window claims must be genuine and not misleading',
]);

if (/\bTyconX\b/.test(gate)) fail('Apple South Korea gate contains displayed legacy brand spelling TyconX');
if (/TycoonX\s+beta/i.test(gate)) fail('Apple South Korea gate contains stale live-service beta wording');

requireAll(tracker, 'Localization tracker', [
  '**25/25** target locales',
  '**All 25 target locales and all 100 localized full documents are current.**',
  '**Localized full documents:** 100/100, **100%**',
  '**Localized hubs:** 25/25, **100%**',
  '**Exact next unfinished locale/document: None.',
]);

if (tracker.includes('TYCOONX_APPLE_SOUTH_KOREA_ALTERNATIVE_PAYMENT_RELEASE_GATE.md')) {
  requireAll(tracker, 'Apple South Korea tracker checkpoint', [
    'Apple South Korea',
    'South Korea-only binary',
    'one PSP per entitlement',
    'native in-app payment experience',
    'monthly reporting',
  ]);
}

if (!process.exitCode) {
  console.log('PASS: TycoonX Apple South Korea alternative-payment release gate invariants are present.');
}
