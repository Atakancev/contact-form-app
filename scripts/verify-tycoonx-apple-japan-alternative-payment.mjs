#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const gatePath = path.join(root, 'TYCOONX_APPLE_JAPAN_ALTERNATIVE_PAYMENT_RELEASE_GATE.md');
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

requireAll(gate, 'Apple Japan gate', [
  '# TycoonX Apple Japan Alternative Payment Release Gate',
  'September 6, 2026',
  'iOS 26.2',
  'StoreKit External Purchases or Offers Entitlement',
  'com.apple.developer.storekit.custom-purchase-link.allowed-regions',
  '`jp`',
  'Japan storefront',
  '`canMakePayments`',
  '`ExternalPurchaseCustomLink.isEligible`',
  '`showNotice`',
  'Apple In-App Purchase must be displayed at least as prominently',
  "App Store product page",
  'must not include information about purchasing on the developer website or with alternative payment processing',
  'Level 1 PCI compliance',
  'unauthorized-transaction disputes',
  'users **under 13**',
  'users **13 through 17**',
  'monthly reporting within 15 days after the end of the calendar month',
  'External Purchase Server API',
  '**7 days**',
  'authoritative server-side Xsolla payment state',
  'Apple reporting state separate from Xsolla payment authority and TycoonX entitlement authority',
  'Purchased Diamonds do not expire solely because time passes.',
  'one-time, non-renewing 30-day entitlement',
  'limited-time promotional offering available only during selected genuine sales windows',
  'may never return',
  'mandatory Japanese or other applicable consumer rights',
  'remotely disableable without deleting valid user entitlements',
]);

requireAll(gate, 'Storefront fail-closed rules', [
  'GPS location',
  'IP geolocation',
  'device language',
  'SIM country',
  'TycoonX profile country',
  'If current StoreKit eligibility cannot be established, fail closed.',
]);

requireAll(gate, 'Child safety regression rules', [
  'under-13 user is never given an out-of-app website purchase offer',
  'age 13-17 alternative purchase route is blocked until the required parental gate succeeds',
]);

requireAll(gate, 'Payment-channel separation', [
  'Apple IAP transaction',
  'Xsolla/webshop transaction',
  'in-app alternative-processor transaction if CK-Labs ever implements one',
  'Xsolla must not be presented as able to refund or reverse an Apple In-App Purchase transaction.',
]);

if (/\bTyconX\b/.test(gate)) fail('Apple Japan gate contains displayed legacy brand spelling TyconX');
if (/TycoonX\s+beta/i.test(gate)) fail('Apple Japan gate contains stale live-service beta wording');

requireAll(tracker, 'Localization tracker', [
  '**25/25** target locales',
  '**All 25 target locales and all 100 localized full documents are current.**',
  '**Localized full documents:** 100/100, **100%**',
  '**Localized hubs:** 25/25, **100%**',
  '**Exact next unfinished locale/document: None.',
]);

if (tracker.includes('TYCOONX_APPLE_JAPAN_ALTERNATIVE_PAYMENT_RELEASE_GATE.md')) {
  requireAll(tracker, 'Apple Japan tracker checkpoint', [
    'Apple Japan',
    'iOS 26.2',
    'StoreKit External Purchases or Offers Entitlement',
    'External Purchase Server API',
  ]);
}

if (!process.exitCode) {
  console.log('PASS: TycoonX Apple Japan alternative-payment release gate invariants are present.');
}
