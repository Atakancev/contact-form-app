#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const exists = file => fs.existsSync(path.join(root, file));

const gate = read('TYCOONX_TDDDG_TERMINAL_ACCESS_CONSENT_RELEASE_GATE.md');
const privacy = read('tyconx-privacy-policy.md');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');
const pkg = read('package.json');
const contact = read('app/ContactForm.tsx');

const failures = [];
const need = (label, pattern, text = gate) => {
  if (!pattern.test(text)) failures.push(label);
};
const missing = (label, file) => {
  if (exists(file)) failures.push(`${label}: obsolete duplicate exists at ${file}`);
};

// Single-source, release, and current-law checkpoints.
need('single source', /single TycoonX operational gate/i);
need('review date', /Last reviewed:\*\* September 5, 2026/i);
need('full release date', /went to full release on \*\*September 1, 2026\*\*/i);
need('TDDDG 25 consent baseline', /§ 25\(1\) TDDDG/i);
need('TDDDG 25 exceptions', /§ 25\(2\) TDDDG/i);
need('strict necessity', /\*\*strictly necessary\*\*/i);
need('expressly requested service', /expressly requested by the user/i);
need('apps included', /websites \*\*and apps\*\*/i);
need('terminal info need not be personal', /need not itself be personal data/i);
need('separate GDPR layer', /GDPR analysis is a separate legal step/i);
need('fine ceiling', /EUR 300,000/i);
need('March 2026 law checkpoint', /latest amendment through \*\*March 10, 2026\*\*/i);

// Granular necessity and inventory.
for (const [label, pattern] of [
  ['requested function', /Requested function:/],
  ['timing', /Timing:/],
  ['minimum scope', /Minimum scope:/],
  ['separate purpose', /Separate purpose:/],
  ['legitimate interest does not cure access', /legitimate-interest assessment cannot cure terminal access/i],
  ['general visitor measurement not automatic', /General visitor measurement, A\/B testing, retention analytics/i],
  ['browser inventory', /browser cookies and WebView cookies/i],
  ['SDK installation IDs', /SDK-generated installation IDs/i],
  ['fingerprint signals', /fingerprint-like signals/i],
  ['consent state storage', /consent-state storage itself/i],
  ['unknown optional behavior blocker', /Unknown behavior is a blocker for optional technology/i],
]) need(label, pattern);

// Pre-consent blocking, fail-closed behavior, rejection, withdrawal, and old clients.
for (const [label, pattern] of [
  ['pre-consent SDK block', /initialize an optional SDK[\s\S]{0,160}before consent/i],
  ['cold start evidence', /cold-start network and terminal behavior/i],
  ['no purchase equals consent', /buying Diamonds, buying 30-Day VIP, buying Lifetime VIP/i],
  ['fail closed heading', /### Fail closed/i],
  ['unknown state stays disabled', /optional consent-requiring access stays disabled/i],
  ['reject parity', /substantially equivalent effort/i],
  ['withdrawal', /Withdrawal must be effective for future consent-based access\/processing/i],
  ['no consent resurrection', /without silently resurrecting optional consent/i],
  ['legal info accessible', /Privacy Policy and legally required provider\/imprint information must remain reachable/i],
  ['old client protection', /old\/unsupported app version must not bypass a newly required consent gate/i],
  ['outage fail closed', /outage must fail closed for optional consent-requiring technology/i],
]) need(label, pattern);

// Security and anti-abuse separation.
need('security granular review', /Security, anti-cheat, and account compromise/i);
need('privacy choice not fraud evidence', /not by itself evidence[\s\S]{0,180}hacking, exploits, account compromise, fraud, chargeback abuse, entitlement abuse, or regional-price abuse/i);
need('security emergency limited', /security emergency[\s\S]{0,160}does not authorize unrelated advertising or behavioral profiling/i);

// Concrete Turnstile repository checkpoint and current provider controls.
need('Turnstile dependency in package', /@marsidev\/react-turnstile/, pkg);
need('Turnstile import/render', /@marsidev\/react-turnstile[\s\S]*<Turnstile/, contact);
for (const [label, pattern] of [
  ['Turnstile repo checkpoint', /Cloudflare Turnstile is a concrete repository checkpoint/i],
  ['Turnstile package reference', /@marsidev\/react-turnstile/],
  ['Turnstile ContactForm reference', /app\/ContactForm\.tsx/],
  ['pre-clearance', /pre-clearance/],
  ['cf_clearance', /`cf_clearance`/],
  ['Ephemeral IDs', /Ephemeral IDs/],
  ['Siteverify', /Siteverify\/server-side validation/],
]) need(label, pattern);

// Apple, Google, Xsolla, and payment/entitlement isolation.
for (const [label, pattern] of [
  ['ATT boundary', /Apple App Tracking Transparency \(ATT\)/],
  ['ATT not German consent', /does \*\*not\*\* automatically prove German § 25\/GDPR consent/i],
  ['ATT bypass forbidden', /Do not bypass ATT denial/i],
  ['Google Data safety boundary', /Google Play Data safety, User Data, SDK/i],
  ['Play form not consent', /Data safety form does not itself create § 25 consent/i],
  ['Xsolla boundary', /Xsolla and webshop boundary/i],
  ['purchase channels', /Apple App Store[\s\S]{0,100}Google Play[\s\S]{0,160}CK-Labs TycoonX webshop using Xsolla/i],
  ['Diamonds non-expiry', /Purchased Diamonds do not expire solely because time passes/i],
  ['30-Day VIP', /30-Day VIP remains a one-time, non-renewing 30-day entitlement/i],
  ['Lifetime selected windows', /Lifetime VIP remains a limited-time promotional one-time entitlement offered only during selected genuine sales windows/i],
  ['Lifetime may never return', /may never return/i],
  ['Lifetime no continuous expectation', /no expectation of continuous future availability for purchase/i],
]) need(label, pattern);

// Evidence, regression, canonical/localization invariants.
need('release blockers', /## 17\. Release blockers/);
need('release evidence', /## 18\. Release evidence packet/);
need('21 regression scenarios', /21\. a cold-start traffic audit/i);
need('canonical unchanged', /does \*\*not\*\* by itself change canonical public legal meaning/i);
need('privacy only re-open trigger', /reopen \*\*Privacy only\*\*/i);
need('privacy no implied consent', /Merely using TycoonX is not treated as consent/i, privacy);
need('privacy withdrawal', /withdraw consent at any time for future processing/i, privacy);
need('progress 25 hubs', /25\/25/, progress);
need('progress 100 documents', /100\/100/, progress);
need('progress queue closed', /Exact next unfinished locale\/document:\s*None/i, progress);
need('progress full release', /September 1, 2026/, progress);

// Duplicate doctrine must stay gone.
for (const [label, file] of [
  ['old cookie gate', 'TYCOONX_TDDDG_COOKIE_TRACKING_RELEASE_GATE.md'],
  ['old device gate', 'TYCOONX_TDDDG_DEVICE_ACCESS_CONSENT_RELEASE_GATE.md'],
  ['old EU/German tracking gate', 'TYCOONX_EU_GERMAN_DEVICE_STORAGE_TRACKING_CONSENT_RELEASE_GATE.md'],
  ['duplicate German device-storage gate', 'TYCOONX_GERMAN_TDDDG_DEVICE_STORAGE_CONSENT_RELEASE_GATE.md'],
  ['old cookie verifier', 'scripts/verify-tycoonx-tdddg-cookie-tracking.mjs'],
  ['old device verifier', 'scripts/verify-tycoonx-tdddg-device-access.mjs'],
  ['old tracking verifier', 'scripts/verify-tycoonx-device-tracking-consent.mjs'],
  ['duplicate German device-consent verifier', 'scripts/verify-tycoonx-german-tdddg-device-consent.mjs'],
]) missing(label, file);

// Brand/release invariants.
if (/\bTyconX\b/.test(gate)) failures.push('displayed legacy brand spelling in gate');
if (/TycoonX[^\n.]{0,80}\bbeta\b|\bbeta\b[^\n.]{0,80}TycoonX/i.test(gate)) failures.push('stale live beta wording in gate');
if (/goes to full release|before TycoonX full release|pre-release gate/i.test(gate)) failures.push('stale future/pre-release wording in gate');

if (failures.length) {
  console.error('TycoonX consolidated TDDDG verifier: FAIL');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX consolidated TDDDG verifier: PASS');
