#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_APPLE_US_STOREFRONT_EXTERNAL_PURCHASE_RELEASE_GATE.md');
const trackerPath = path.join(ROOT, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const gate = await readFile(gatePath, 'utf8');
const tracker = await readFile(trackerPath, 'utf8');
const errors = [];

function requireText(text, needle, label) {
  if (!text.includes(needle)) errors.push(`${label}: missing "${needle}"`);
}

function forbid(text, needle, label) {
  if (text.includes(needle)) errors.push(`${label}: forbidden wording "${needle}"`);
}

const requiredGate = [
  'Last reviewed: September 6, 2026',
  'United States storefront',
  'App Review Guideline 3.1.1(a)',
  'storefront-specific permission',
  'Storefront.current',
  'countryCode',
  'ISO 3166-1 alpha-3',
  '`USA`',
  'GPS or device location',
  'IP geolocation',
  'device language or locale',
  'storefront information can change at any time',
  'Fail-closed rule',
  'must never default to Xsolla',
  'external steering',
  'official TycoonX web purchase surface',
  'embed an Xsolla card form',
  'not, by itself, a reason to remove, hide, degrade, or make unreliable an otherwise approved Apple in-app-purchase path',
  'Storefront-safe UI and App Store metadata',
  'globally shared App Store metadata',
  'server-side Xsolla transaction/payment state is authoritative',
  'Entitlement delivery must be idempotent',
  'TycoonX order ID',
  'Xsolla transaction ID',
  'Apple is authoritative for the Apple App Store transaction state',
  'Do not send a user to Apple for a refund of a transaction that Apple did not process.',
  'final total price shown before confirmation',
  'Taxes, VAT, fees, currency conversion',
  'Purchased Diamonds',
  'do not expire merely because time passes',
  'one-time, non-renewing 30-day entitlement',
  'limited-time promotional offering available only during selected genuine sales windows',
  'may never return',
  'mandatory withdrawal, conformity, update, liability, refund, price-reduction, termination, notice, consent',
  'Account enforcement, payment state, and entitlement state must remain separate decision records.',
  'Storefront.current.countryCode == "USA"',
  'Storefront changes from `USA` to a non-U.S. storefront',
  'global App Store metadata',
  'can be remotely disabled/fail closed',
  'current Apple agreement/commercial-term review',
];

for (const needle of requiredGate) requireText(gate, needle, 'Apple U.S. storefront gate');

const forbiddenLegacyBrand = 'Ty' + 'conX';
forbid(gate, forbiddenLegacyBrand, 'Apple U.S. storefront gate');
forbid(gate, 'TycoonX beta', 'Apple U.S. storefront gate');
forbid(gate, 'TycoonX is in beta', 'Apple U.S. storefront gate');

if (!/United States storefront[\s\S]{0,1200}(without obtaining|without).*entitlement/i.test(gate)) {
  errors.push('Apple U.S. storefront gate: U.S. no-entitlement steering rule is not stated clearly enough.');
}

if (!/Storefront\.current[\s\S]{0,700}USA/i.test(gate)) {
  errors.push('Apple U.S. storefront gate: StoreKit current storefront is not tied to the USA decision.');
}

if (!/unavailable[\s\S]{0,500}hide or disable[\s\S]{0,500}must never default to Xsolla/i.test(gate)) {
  errors.push('Apple U.S. storefront gate: unknown storefront does not clearly fail closed.');
}

if (!/external steering[\s\S]{0,900}embed an Xsolla card form/i.test(gate)) {
  errors.push('Apple U.S. storefront gate: external steering is not adequately separated from embedded alternative payment processing.');
}

if (!/returning from a browser[\s\S]{0,500}not[^\n]*authoritative/i.test(gate)) {
  errors.push('Apple U.S. storefront gate: browser return is not clearly excluded as payment authority.');
}

if (!/server-side Xsolla[\s\S]{0,500}idempotent/i.test(gate)) {
  errors.push('Apple U.S. storefront gate: authoritative Xsolla confirmation and idempotent entitlement delivery are not linked.');
}

if (!/30-Day VIP[\s\S]{0,250}one-time, non-renewing 30-day entitlement/i.test(gate)) {
  errors.push('Apple U.S. storefront gate: 30-Day VIP invariant is missing or weakened.');
}

if (!/Lifetime VIP[\s\S]{0,300}selected genuine sales windows[\s\S]{0,250}may never return/i.test(gate)) {
  errors.push('Apple U.S. storefront gate: Lifetime VIP limited-sales-window invariant is missing or weakened.');
}

requireText(tracker, 'All 25 target locales and all 100 localized full documents are current.', 'localization tracker');
requireText(tracker, 'Localized full documents:** 100/100, **100%**', 'localization tracker');
requireText(tracker, 'Localized hubs:** 25/25, **100%**', 'localization tracker');
requireText(tracker, 'Exact next unfinished locale/document: None.', 'localization tracker');

if (errors.length) {
  console.error('TycoonX Apple U.S. storefront steering verification FAILED:\n');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('TycoonX Apple U.S. storefront steering verification PASSED.');
