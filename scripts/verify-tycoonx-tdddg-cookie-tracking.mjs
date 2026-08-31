#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_TDDDG_COOKIE_TRACKING_RELEASE_GATE.md');
const privacyPath = path.join(ROOT, 'tyconx-privacy-policy.md');
const renderedPrivacyPath = path.join(ROOT, 'app/tyconx-privacy-policy/page.tsx');
const contactFormPath = path.join(ROOT, 'app/ContactForm.tsx');
const packagePath = path.join(ROOT, 'package.json');
const progressPath = path.join(ROOT, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');
const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

const [gate, privacy, renderedPrivacy, contactForm, packageJson, progress] = await Promise.all([
  readFile(gatePath, 'utf8'),
  readFile(privacyPath, 'utf8'),
  readFile(renderedPrivacyPath, 'utf8'),
  readFile(contactFormPath, 'utf8'),
  readFile(packagePath, 'utf8'),
  readFile(progressPath, 'utf8'),
]);

// German TDDDG baseline and separation from GDPR.
requireMatch(gate, /§ 25 TDDDG/i, 'Missing § 25 TDDDG baseline.');
requireMatch(gate, /strictly necessary/i, 'Missing strictly-necessary test.');
requireMatch(gate, /public telecommunications network/i, 'Missing § 25(2) transmission exception.');
requireMatch(gate, /TDDDG and GDPR are two separate legal layers/i, 'Missing TDDDG/GDPR two-layer analysis.');
requireMatch(gate, /legitimate interest under GDPR does not automatically remove a § 25 TDDDG consent requirement/i, 'Missing GDPR legitimate-interest separation safeguard.');
requireMatch(gate, /§ 25\(2\) TDDDG exception does not automatically create a GDPR legal basis/i, 'Missing TDDDG-exception/GDPR-basis separation.');

// Terminal-storage inventory.
requireMatch(gate, /localStorage/i, 'Missing localStorage inventory requirement.');
requireMatch(gate, /sessionStorage/i, 'Missing sessionStorage inventory requirement.');
requireMatch(gate, /IndexedDB/i, 'Missing IndexedDB inventory requirement.');
requireMatch(gate, /app SDK reads\/writes to device identifiers/i, 'Missing mobile SDK/device storage checkpoint.');
requireMatch(gate, /payment\/checkout scripts and fraud-screening integrations/i, 'Missing payment/fraud storage inventory.');
requireMatch(gate, /Cloudflare Turnstile and any Cloudflare pre-clearance/i, 'Missing Turnstile/pre-clearance inventory.');

// Consent design and Planet49.
requireMatch(gate, /do not write\/read the optional technology before valid consent/i, 'Missing pre-consent blocking rule.');
requireMatch(gate, /active affirmative choice/i, 'Missing affirmative-consent rule.');
requireMatch(gate, /pre-ticked boxes/i, 'Missing pre-ticked-box prohibition.');
requireMatch(gate, /Planet49/i, 'Missing Planet49 checkpoint.');
requireMatch(gate, /cookie duration and whether third parties may access the cookies/i, 'Missing Planet49 duration/third-party information checkpoint.');
requireMatch(gate, /withdrawing consent must be as easy as giving it/i, 'Missing GDPR Article 7 withdrawal rule.');
requireMatch(gate, /do not keep only a boolean such as `cookiesAccepted = true`/i, 'Missing consent evidence safeguard.');

// TycoonX purchase and entitlement isolation.
requireMatch(gate, /do not fire optional CK-Labs marketing pixels before consent/i, 'Missing webshop pre-consent marketing safeguard.');
requireMatch(gate, /do not change the already confirmed TycoonX purchase price/i, 'Missing tracking-refusal purchase-price safeguard.');
requireMatch(gate, /delete purchased Diamonds/i, 'Missing purchased-Diamond consent isolation.');
requireMatch(gate, /end an active one-time 30-Day VIP early/i, 'Missing 30-Day VIP consent isolation.');
requireMatch(gate, /revoke valid Lifetime VIP/i, 'Missing Lifetime VIP consent isolation.');
requireMatch(gate, /infer consent from Apple, Google Play, or Xsolla payment acceptance/i, 'Missing payment-acceptance/consent separation.');

// Current Turnstile implementation and current Cloudflare configuration risks.
requireMatch(contactForm, /@marsidev\/react-turnstile/, 'Current contact form no longer imports react-turnstile; re-review gate.');
requireMatch(contactForm, /<Turnstile/i, 'Current contact form no longer embeds Turnstile; re-review gate.');
requireMatch(packageJson, /@marsidev\/react-turnstile/, 'Package dependency for react-turnstile is missing; re-review gate.');
requireMatch(gate, /Ephemeral IDs/i, 'Missing Cloudflare Ephemeral IDs checkpoint.');
requireMatch(gate, /cf_clearance/i, 'Missing Cloudflare cf_clearance checkpoint.');
requireMatch(gate, /whether pre-clearance is enabled and its clearance level/i, 'Missing actual Turnstile configuration evidence.');
requireMatch(gate, /Do not assume `Turnstile is security` automatically proves the § 25\(2\) exception/i, 'Missing Turnstile legal-classification safeguard.');

// Canonical Privacy Policy high-level consent meaning must stay synchronized.
requireMatch(privacy, /Merely using TycoonX is not treated as consent to processing that requires consent/i, 'Canonical Privacy Policy lost no-implied-consent rule.');
requireMatch(privacy, /certain marketing, cookies, analytics, or other optional features/i, 'Canonical Privacy Policy lost cookies/analytics consent example.');
requireMatch(renderedPrivacy, /Merely using TycoonX is not treated as consent to processing that legally requires consent/i, 'Rendered Privacy Policy lost no-implied-consent rule.');
requireMatch(renderedPrivacy, /Optional information or processing that is not necessary for the core Service is handled separately/i, 'Rendered Privacy Policy lost optional-processing separation.');
requireMatch(gate, /If CK-Labs later adds a materially new public privacy meaning/i, 'Missing localization reopening trigger for material Privacy changes.');

// Localization, brand, and release invariants.
requireMatch(progress, /25\/25.*target locales/is, 'Localization hub completion invariant missing.');
requireMatch(progress, /100\/100 localized full documents are currently confirmed current/i, 'Localized full-document completion invariant missing.');
requireMatch(progress, /Exact next unfinished locale\/document: None/i, 'Localization queue is unexpectedly open.');
requireMatch(gate, /September 1, 2026/i, 'Missing TycoonX full-release date invariant.');

for (const [name, text] of [
  ['TDDDG gate', gate],
  ['canonical Privacy Policy', privacy],
  ['rendered Privacy Policy', renderedPrivacy],
  ['contact form', contactForm],
]) {
  if (/TyconX/.test(text)) errors.push(`Displayed brand typo TyconX found in ${name}.`);
  if (/\bTycoonX\s+(?:is|remains|currently|still)\s+(?:in\s+)?beta\b/i.test(text)) {
    errors.push(`Stale live-service beta wording found in ${name}.`);
  }
}

console.log('TycoonX TDDDG cookie / device-storage QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: TDDDG classification, consent design, Turnstile configuration review, Privacy Policy parity, payment separation, and entitlement-isolation safeguards are present.');
}
