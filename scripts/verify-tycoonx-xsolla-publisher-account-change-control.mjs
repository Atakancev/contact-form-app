#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const GATE = path.join(ROOT, 'TYCOONX_XSOLLA_PUBLISHER_ACCOUNT_CHANGE_CONTROL_RELEASE_GATE.md');
const PURCHASES = path.join(ROOT, 'tyconx-purchase-refund-policy.md');
const PROGRESS = path.join(ROOT, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

async function read(target, label) {
  try {
    return await readFile(target, 'utf8');
  } catch {
    errors.push(`Missing ${label}: ${path.relative(ROOT, target)}`);
    return '';
  }
}

const gate = await read(GATE, 'Xsolla Publisher Account change-control gate');
const purchases = await read(PURCHASES, 'canonical Purchases & Refunds Policy');
const progress = await read(PROGRESS, 'legal localization progress tracker');

requireMatch(gate, /September 6, 2026/, 'Xsolla change-control gate is missing the current review checkpoint.');
requireMatch(gate, /ten \(10\) business days|10 business days/i, 'Gate is missing Xsolla Section 2.5 ten-business-day advance notice.');
requireMatch(gate, /not 10 calendar days/i, 'Gate no longer distinguishes business days from calendar days.');
requireMatch(gate, /pricing.*currency.*adding or removing items|pricing updates.*currency adjustments.*adding or removing items/is, 'Gate is missing the current Section 2.5 change examples.');
requireMatch(gate, /planned/i, 'Gate must preserve that the current Section 2.5 wording concerns planned changes.');
requireMatch(gate, /does not.*player.*ten business days|not a player-facing ten-day guarantee/is, 'Gate must not misstate Xsolla internal notice as a player-facing guarantee.');
requireMatch(gate, /final total price.*checkout.*completed transaction|completed transaction.*final total price/is, 'Gate is missing completed-transaction price protection.');
requireMatch(gate, /later lower price.*refund.*price-match|later lower price.*price-match/is, 'Gate is missing no-automatic-price-match protection for future decreases.');
requireMatch(gate, /later higher price.*additional charge|later higher price.*completed one-time purchase/is, 'Gate is missing no-retroactive-charge protection.');
requireMatch(gate, /Lifetime VIP.*selected genuine sales windows/is, 'Gate is missing Lifetime VIP limited-window treatment.');
requireMatch(gate, /may.*never return/is, 'Gate is missing Lifetime VIP may-never-return protection.');
requireMatch(gate, /Purchased Diamonds do not expire solely because time passes/i, 'Gate no longer preserves purchased-Diamond non-expiry.');
requireMatch(gate, /one-time, non-renewing 30-day entitlement/i, 'Gate no longer preserves 30-Day VIP as one-time and non-renewing.');
requireMatch(gate, /regional price|regional-price/i, 'Gate is missing regional-price change control.');
requireMatch(gate, /tax.*FX|FX.*tax/is, 'Gate is missing tax/FX separation.');
requireMatch(gate, /obvious pricing\/catalog errors|obvious pricing.*error/is, 'Gate is missing obvious pricing/catalog-error handling.');
requireMatch(gate, /roles\/permissions|roles.*permissions/is, 'Gate is missing Publisher Account role/permission protection.');
requireMatch(gate, /credentials.*private keys|private keys.*credentials/is, 'Gate is missing Publisher Account credential/private-key protection.');
requireMatch(gate, /notify Xsolla promptly|notify Xsolla.*security breach|notify Xsolla.*unauthorized/is, 'Gate is missing provider notification after suspected compromise.');
requireMatch(gate, /does not itself prove.*player.*hacked|does not.*prove.*player.*fraud/is, 'Gate must isolate Publisher Account compromise from accusations against players.');
requireMatch(gate, /Section 2\.6|2\.6/, 'Gate is missing Xsolla Publisher Account notification-reading duty.');
requireMatch(gate, /Documentation.*product-specific terms|product-specific terms.*Documentation/is, 'Gate is missing Xsolla documentation/product-term drift control.');
requireMatch(gate, /suspension.*termination|suspend.*terminate/is, 'Gate is missing Xsolla suspension/termination provider risk.');
requireMatch(gate, /do not fabricate a successful payment state/i, 'Gate is missing outage/suspension fail-closed payment handling.');
requireMatch(gate, /mandatory refunds.*withdrawal.*conformity|mandatory.*withdrawal.*conformity/is, 'Gate no longer preserves mandatory consumer remedies.');
requireMatch(gate, /change owner.*affected Xsolla project.*old and intended new configuration/is, 'Gate is missing release-evidence requirements.');
requireMatch(gate, /Section 5\.5|5\.5/, 'Gate is missing the current Xsolla material-noncompliance suspension checkpoint.');

requireMatch(purchases, /TycoonX web shop powered by Xsolla/i, 'Canonical Purchases Policy is missing the Xsolla channel.');
requireMatch(purchases, /CK-Labs may change prices, bundle sizes, Diamond quantities, VIP prices, regional prices, currencies, product availability, and promotional offers for \*\*future purchases\*\*/i, 'Canonical Purchases Policy no longer preserves future-purchase price/catalog flexibility.');
requireMatch(purchases, /completed one-time purchase is not retroactively repriced/i, 'Canonical Purchases Policy is missing completed-purchase repricing protection.');
requireMatch(purchases, /Lifetime VIP.*selected limited promotional sales windows/is, 'Canonical Purchases Policy is missing Lifetime VIP limited-window language.');
requireMatch(purchases, /Purchased Diamonds do not expire solely because time passes/i, 'Canonical Purchases Policy no longer preserves purchased-Diamond non-expiry.');
requireMatch(purchases, /one-time, non-renewing entitlement/i, 'Canonical Purchases Policy no longer preserves one-time non-renewing 30-Day VIP.');
requireMatch(purchases, /mandatory consumer law/i, 'Canonical Purchases Policy must preserve mandatory consumer law for Xsolla transactions.');

requireMatch(progress, /All 25 target locales and all 100 localized full documents are current/i, 'Progress tracker no longer confirms all localized full documents are current.');
requireMatch(progress, /Exact next unfinished locale\/document: None/i, 'Progress tracker localization queue is no longer closed.');

for (const [label, text] of [['gate', gate], ['Purchases', purchases], ['progress', progress]]) {
  if (/TyconX/.test(text)) errors.push(`${label} contains displayed brand typo "TyconX".`);
  if (/\bTycoonX\s+(?:is|remains|service is|game is)\s+(?:a\s+)?beta\b/i.test(text)) {
    errors.push(`${label} contains stale live-service beta wording.`);
  }
}

console.log('TycoonX Xsolla Publisher Account change-control QA');

if (errors.length) {
  console.error('\nFAILED:');
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('PASS: Xsolla ten-business-day change control, account governance, pricing, product, entitlement, and mandatory-rights safeguards are present.');
}
