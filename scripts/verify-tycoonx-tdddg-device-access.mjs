#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const gate = await readFile(path.join(root, 'TYCOONX_TDDDG_DEVICE_ACCESS_CONSENT_RELEASE_GATE.md'), 'utf8');
const privacy = await readFile(path.join(root, 'tyconx-privacy-policy.md'), 'utf8');
const contactForm = await readFile(path.join(root, 'app/ContactForm.tsx'), 'utf8');
const packageJson = await readFile(path.join(root, 'package.json'), 'utf8');

const failures = [];

const gateRequired = [
  'TDDDG § 25',
  'strictly necessary',
  'personal-data status is not the threshold',
  'no pre-checked boxes',
  'before the optional storage/access occurs',
  'withdrawal',
  'device-access inventory',
  'App Tracking Transparency',
  'required-reason API',
  'Google Play Data Safety',
  'Advertising ID',
  'Cloudflare Turnstile',
  'Diamonds',
  '30-Day VIP',
  'Lifetime VIP',
  'September 1, 2026',
  'reopen all 25 localized Privacy documents',
];

for (const token of gateRequired) {
  if (!gate.includes(token)) failures.push(`TDDDG gate lost safeguard: ${token}`);
}

if (!/Do not treat a GDPR legitimate-interest assessment as a substitute for a consent requirement under TDDDG § 25/i.test(gate)) {
  failures.push('TDDDG/GDPR two-layer legal-basis distinction is missing.');
}
if (!/Do not infer TDDDG consent from merely opening TycoonX, creating an account, accepting the Terms, buying Diamonds, buying 30-Day VIP, buying Lifetime VIP/i.test(gate)) {
  failures.push('No-bundled-consent safeguard is missing.');
}
if (!/optional SDKs do not access the terminal equipment before consent/i.test(gate)) {
  failures.push('Pre-consent SDK blocking evidence requirement is missing.');
}
if (!/Refusing optional analytics\/advertising consent must not/i.test(gate)) {
  failures.push('Paid-entitlement independence from optional consent is missing.');
}
if (!/An operating-system permission does not automatically replace TDDDG consent/i.test(gate)) {
  failures.push('OS-permission versus TDDDG distinction is missing.');
}
if (!/privacy-manifest declaration is not itself TDDDG consent/i.test(gate)) {
  failures.push('Apple privacy-manifest versus TDDDG distinction is missing.');
}
if (!/Play policy disclosure or Android permission approval does not replace TDDDG consent/i.test(gate)) {
  failures.push('Google Play disclosure versus TDDDG distinction is missing.');
}

const privacyRequired = [
  'Where consent is legally required, we ask for it separately.',
  'Merely using TycoonX is not treated as consent',
  'certain marketing, cookies, analytics, or other optional features',
  'You can withdraw consent at any time',
];
for (const token of privacyRequired) {
  if (!privacy.includes(token)) failures.push(`Canonical Privacy Policy lost consent baseline: ${token}`);
}

if (!packageJson.includes('@marsidev/react-turnstile')) {
  failures.push('Support-site Turnstile dependency changed; reassess the gate and deployed behavior.');
}
if (!contactForm.includes("from '@marsidev/react-turnstile'")) {
  failures.push('Support-site Turnstile integration changed; reassess the gate and deployed behavior.');
}
if (!contactForm.includes('<Turnstile')) {
  failures.push('Support-site Turnstile rendering changed; reassess the gate and deployed behavior.');
}

for (const [label, text] of [
  ['TDDDG gate', gate],
  ['privacy policy', privacy],
]) {
  if (/\bTyconX\b/.test(text)) failures.push(`Displayed legacy TyconX spelling found in ${label}.`);
  if (/\bbeta\b/i.test(text)) failures.push(`Stale beta wording found in ${label}.`);
}

if (failures.length > 0) {
  console.error('TycoonX TDDDG device-access verifier failed:\n');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX TDDDG device-access verifier passed.');
