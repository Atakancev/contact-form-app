#!/usr/bin/env node

import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_GDPR_SECURITY_INCIDENT_RESPONSE_GATE.md');
const privacyPath = path.join(ROOT, 'app', 'tyconx-privacy-policy', 'page.tsx');
const termsPath = path.join(ROOT, 'app', 'tyconx-terms-of-service', 'page.tsx');
const craPath = path.join(ROOT, 'TYCOONX_EU_CYBER_RESILIENCE_ACT_2026_REPORTING_GATE.md');

const errors = [];

async function exists(file) {
  try {
    await stat(file);
    return true;
  } catch {
    return false;
  }
}

function requireText(text, pattern, label) {
  const ok = pattern instanceof RegExp ? pattern.test(text) : text.includes(pattern);
  if (!ok) errors.push(label);
}

for (const file of [gatePath, privacyPath, termsPath, craPath]) {
  if (!(await exists(file))) errors.push(`Missing required file: ${path.relative(ROOT, file)}`);
}

if (await exists(gatePath)) {
  const text = await readFile(gatePath, 'utf8');

  requireText(text, '72 hours', 'GDPR incident gate is missing the Article 33 72-hour deadline.');
  requireText(text, /unlikely to result in a risk/i, 'GDPR incident gate is missing the supervisory-authority risk threshold.');
  requireText(text, /high risk/i, 'GDPR incident gate is missing the Article 34 affected-user threshold.');
  requireText(text, /without undue delay/i, 'GDPR incident gate is missing the without-undue-delay standard.');
  requireText(text, /reasonable degree of certainty/i, 'GDPR incident gate is missing the awareness-time standard.');
  requireText(text, /provided in phases|notification may be made.*phases/i, 'GDPR incident gate is missing phased notification handling.');
  requireText(text, /document personal-data breaches|document every personal-data breach/i, 'GDPR incident gate is missing Article 33(5) breach documentation.');
  requireText(text, /processor.*without undue delay/i, 'GDPR incident gate is missing processor-to-controller breach escalation.');
  requireText(text, /encryption/i, 'GDPR incident gate is missing Article 34 encryption/protection considerations.');
  requireText(text, 'September 11, 2026', 'GDPR incident gate is missing the CRA September 11, 2026 cross-check.');
  requireText(text, /GDPR and CRA.*separate|CRA.*GDPR.*separate/i, 'GDPR incident gate is missing separate GDPR/CRA reporting clocks.');
  requireText(text, /authoritative TycoonX, Apple, Google, Xsolla/i, 'GDPR incident gate is missing authoritative entitlement-record reconciliation.');
  requireText(text, /unrelated legitimate purchases|unrelated paid TycoonX value/i, 'GDPR incident gate is missing protection for unrelated legitimate paid value.');
  requireText(text, /do not fabricate|Do not fabricate/i, 'GDPR incident gate is missing evidence-integrity protection.');
  requireText(text, /not by itself evidence of fraud/i, 'GDPR incident gate is missing lawful refund/chargeback anti-presumption language.');

  if (/TyconX/.test(text)) errors.push('Displayed brand typo "TyconX" found in GDPR incident gate.');
}

if (await exists(privacyPath)) {
  const text = await readFile(privacyPath, 'utf8');
  requireText(text, "title: 'Security'", 'Canonical Privacy Policy no longer contains the Security section.');
  requireText(text, /security vulnerability/i, 'Canonical Privacy Policy no longer exposes security-vulnerability reporting language.');
  requireText(text, /Security and fraud data/i, 'Canonical Privacy Policy no longer covers security/fraud incident data.');
}

if (await exists(termsPath)) {
  const text = await readFile(termsPath, 'utf8');
  requireText(text, /account.*compromised/i, 'Canonical Terms no longer cover compromised-account handling.');
  requireText(text, /authoritative server and payment-provider records/i, 'Canonical Terms no longer preserve authoritative transaction/server records.');
}

if (errors.length > 0) {
  console.error('TycoonX GDPR incident-response QA FAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('TycoonX GDPR incident-response QA PASS');
  console.log('- Article 33 72-hour notification gate present');
  console.log('- Article 34 high-risk user communication gate present');
  console.log('- Article 33(5) breach documentation present');
  console.log('- GDPR/CRA parallel-clock safeguard present');
  console.log('- canonical Privacy/Terms security protections present');
}
