#!/usr/bin/env node

import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const gatePath = path.join(ROOT, 'TYCOONX_APPLE_SOCIAL_MEDIA_AGE_RELEASE_GATE.md');
const privacyPath = path.join(ROOT, 'app', 'tyconx-privacy-policy', 'page.tsx');
const communityPath = path.join(ROOT, 'app', 'tycoonx-community-standards', 'page.tsx');

const errors = [];

async function exists(target) {
  try {
    await stat(target);
    return true;
  } catch {
    return false;
  }
}

function requireText(text, pattern, message) {
  if (pattern instanceof RegExp ? !pattern.test(text) : !text.includes(pattern)) {
    errors.push(message);
  }
}

if (!(await exists(gatePath))) {
  errors.push('Missing TYCOONX_APPLE_SOCIAL_MEDIA_AGE_RELEASE_GATE.md');
} else {
  const gate = await readFile(gatePath, 'utf8');
  requireText(gate, 'September 2026', 'Apple social-age gate is missing the September 2026 submission deadline.');
  requireText(gate, 'Declared Age Range API', 'Apple social-age gate is missing the Declared Age Range API requirement.');
  requireText(gate, 'minimum age rating of **13+**', 'Apple social-age gate is missing the current 13+ consequence for declared social-media capability.');
  requireText(gate, 'significantAppChangeRequiresAdultNotification', 'Apple social-age gate is missing significant-change adult-notification handling.');
  requireText(gate, 'significantAppChangeRequiresParentalConsent', 'Apple social-age gate is missing significant-change parental-consent handling.');
  requireText(gate, 'RESCIND_CONSENT', 'Apple social-age gate is missing consent-withdrawal notification handling.');
  requireText(gate, /social media disabled (?:for users )?under 13/i, 'Apple social-age gate is missing the under-13-disabled configuration.');
  requireText(gate, /App Store Connect age-rating questionnaire/i, 'Apple social-age gate is missing App Store Connect evidence requirements.');
  requireText(gate, /Do not answer “No” merely because TycoonX is primarily a business simulation game/i, 'Apple social-age gate lost the feature-based classification safeguard.');
}

if (!(await exists(privacyPath))) {
  errors.push('Missing canonical TycoonX Privacy Policy page.');
} else {
  const privacy = await readFile(privacyPath, 'utf8');
  requireText(privacy, 'Children and Age-Related Controls', 'Canonical Privacy Policy no longer has the age-related controls section.');
  requireText(privacy, /age-range/i, 'Canonical Privacy Policy no longer covers age-range processing.');
  requireText(privacy, /parental-authorization/i, 'Canonical Privacy Policy no longer covers parental-authorization information.');
}

if (!(await exists(communityPath))) {
  errors.push('Missing canonical TycoonX Community Standards page.');
} else {
  const community = await readFile(communityPath, 'utf8');
  requireText(community, /minor|child|age-gat/i, 'Canonical Community Standards no longer appear to preserve child-safety or age-gating language.');
}

console.log('TycoonX Apple social-media / age-range QA');

if (errors.length > 0) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: Apple social-media and age-range release safeguards are present.');
}
