#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const GATE = path.join(ROOT, 'TYCOONX_XSOLLA_REFUND_REASON_ENFORCEMENT_EVIDENCE_RELEASE_GATE.md');
const PURCHASES = path.join(ROOT, 'app', 'tyconx-purchase-refund-policy', 'page.tsx');
const PRIVACY = path.join(ROOT, 'app', 'tyconx-privacy-policy', 'page.tsx');
const PROGRESS = path.join(ROOT, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

const errors = [];

function requireMatch(text, pattern, message) {
  if (!pattern.test(text)) errors.push(message);
}

function rejectMatch(text, pattern, message) {
  if (pattern.test(text)) errors.push(message);
}

async function read(target, label) {
  try {
    return await readFile(target, 'utf8');
  } catch {
    errors.push(`Missing ${label}: ${path.relative(ROOT, target)}`);
    return '';
  }
}

const gate = await read(GATE, 'Xsolla refund-reason evidence gate');
const purchases = await read(PURCHASES, 'canonical Purchases & Refunds page');
const privacy = await read(PRIVACY, 'canonical Privacy Policy page');
const progress = await read(PROGRESS, 'localization progress tracker');

requireMatch(gate, /September 9, 2026/, 'Refund-reason gate is missing the current review checkpoint.');
requireMatch(gate, /reason code is evidence, not an automatic sanction/i, 'Gate must separate provider reason evidence from automatic player sanctions.');
requireMatch(gate, /payment\/refund state[\s\S]*entitlement state[\s\S]*security\/risk state[\s\S]*player-enforcement state[\s\S]*consumer-rights state/i, 'Gate must keep payment, entitlement, security, enforcement and consumer-rights states separate.');
requireMatch(gate, /`3`.*integration error/is, 'Gate is missing Xsolla integration-error code handling.');
requireMatch(gate, /integration error[\s\S]*not.*fraud strike/is, 'Integration errors must not become automatic player-fraud findings.');
requireMatch(gate, /`5`.*test payment/is, 'Gate is missing Xsolla test-payment code handling.');
requireMatch(gate, /test payment[\s\S]*outside production paid value/is, 'Test-payment cancellations must be isolated from production paid value.');
requireMatch(gate, /Codes 8, 9, and 10|codes `8`, `9`, and `10`/i, 'Gate is missing ordinary cancellation reason handling.');
requireMatch(gate, /Code 13.*duplicate transaction/is, 'Gate is missing duplicate-transaction reason handling.');
requireMatch(gate, /duplicate transaction[\s\S]*do not ban/i, 'Duplicate transactions must not automatically become hacking or fraud bans.');
requireMatch(gate, /Codes 4, 7, and 11|codes `4`, `7`, and `11`/i, 'Gate is missing high-risk provider signal handling for codes 4, 7 and 11.');
requireMatch(gate, /do[^\n]*not[^\n]*automatically prove.*TycoonX account holder.*fraudster/is, 'Fraud-labelled provider codes must not automatically prove player identity or culpability.');
requireMatch(gate, /Code 12.*friendly fraud/is, 'Gate is missing friendly-fraud handling.');
requireMatch(gate, /Codes 21.{0,5}23|Codes 21–23|codes `21`.*`23`/i, 'Gate is missing card-fraud pattern codes 21-23.');
requireMatch(gate, /code `24`.*regional-pric/i, 'Gate is missing Xsolla regional-price-abuse code 24.');
requireMatch(gate, /country\/eligibility inputs.*final price\/currency.*checkout configuration/is, 'Regional-price enforcement must review actual transaction/configuration evidence.');
requireMatch(gate, /not retroactively repriced/i, 'Gate must preserve completed-purchase historical pricing.');
requireMatch(gate, /code `25`.*partner or payment-system exploit/is, 'Gate is missing partner/payment-system exploit code 25.');
requireMatch(gate, /possible provider\/partner\/integration compromise/i, 'Code 25 must trigger provider/partner compromise review before player blame.');
requireMatch(gate, /code `26`.*fraud.*not.*exact attack type/is, 'Gate is missing undefined confirmed-fraud code 26 handling.');
requireMatch(gate, /must not invent.*card theft.*account takeover.*regional-price abuse/is, 'Code 26 must not authorize invented attack facts.');
requireMatch(gate, /code `27`.*linked transaction/is, 'Gate is missing linked-transaction code 27 handling.');
requireMatch(gate, /transaction itself was not specified.*fraud report/is, 'Gate must preserve Xsolla\'s linked-transaction evidentiary limitation.');
requireMatch(gate, /correlation, not direct fraud proof/i, 'Linked-transaction evidence must remain correlation rather than direct proof.');
requireMatch(gate, /refund_details\.author.*not the identity of the fraudster/i, 'Gate must separate refund initiator from the identity of any fraudster.');
requireMatch(gate, /authoritative refund\/reversal\/chargeback state.*settlement evidence/is, 'Entitlement correction must remain tied to authoritative provider state.');
requireMatch(gate, /do not.*run the same clawback twice/is, 'Gate must prevent duplicate entitlement clawbacks.');
requireMatch(gate, /Purchased Diamonds do not expire merely because time passes/i, 'Gate must preserve non-expiring purchased Diamonds.');
requireMatch(gate, /one-time, non-renewing entitlement lasting 30 consecutive days/i, 'Gate must preserve exact one-time 30-Day VIP semantics.');
requireMatch(gate, /Lifetime VIP remains a \*\*limited-time promotional one-time entitlement available only during selected genuine sales windows\*\*/i, 'Gate must preserve Lifetime VIP limited sales-window semantics.');
requireMatch(gate, /must not reopen a closed Lifetime VIP sales window/i, 'Refund/fraud workflows must not reopen Lifetime VIP sales.');
requireMatch(gate, /Cross-channel isolation/i, 'Gate must isolate Xsolla risk metadata from Apple and Google purchase authority.');
requireMatch(gate, /do not revoke an Apple or Google Play purchase.*Xsolla transaction/is, 'Xsolla fraud metadata must not automatically revoke unrelated Apple/Google purchases.');
requireMatch(gate, /account was compromised/i, 'Gate must contain account-compromise handling.');
requireMatch(gate, /do not demand full payment-card credentials/i, 'Account-compromise handling must avoid collecting unnecessary full card credentials.');
requireMatch(gate, /Privacy and data minimization/i, 'Gate must contain privacy/data-minimization controls.');
requireMatch(gate, /advertising or unrelated behavioral profiling/i, 'Provider fraud-reason data must not be repurposed for unrelated profiling.');
requireMatch(gate, /Unknown or changed Xsolla reason codes/i, 'Gate must have forward-compatible unknown-code handling.');
requireMatch(gate, /do not coerce it into the nearest known fraud category/i, 'Unknown codes must not be coerced into existing fraud categories.');
requireMatch(gate, /Mandatory EU\/German consumer-rights boundary/i, 'Gate must preserve mandatory EU/German consumer rights.');
requireMatch(gate, /refund request, chargeback, provider dispute, ADR\/regulator contact.*not by itself proof/is, 'Lawful consumer redress must not automatically become fraud evidence.');
requireMatch(gate, /code `3` integration error.*no player fraud strike/is, 'Regression matrix is missing integration-error isolation.');
requireMatch(gate, /code `24` regional-price abuse.*evidence reviewed/is, 'Regression matrix is missing regional-price-abuse evidence review.');
requireMatch(gate, /code `25` partner\/payment-system exploit.*before accusing the player/is, 'Regression matrix is missing provider/partner compromise review.');
requireMatch(gate, /code `27` linked transaction.*not direct fraud proof/is, 'Regression matrix is missing linked-transaction evidentiary isolation.');
requireMatch(gate, /unknown future refund code.*no irreversible enforcement/is, 'Regression matrix is missing future-code fail-closed behavior.');
requireMatch(gate, /closed Lifetime VIP sales window.*no reopening/is, 'Regression matrix is missing Lifetime VIP closure protection.');
requireMatch(gate, /reason code received before refund settlement.*waits.*authoritative transaction\/refund state/is, 'Regression matrix must distinguish reason metadata from completed refund settlement.');
requireMatch(gate, /developers\.xsolla\.com\/webhooks\/payments\/refund/i, 'Gate is missing the current Xsolla refund webhook reference.');
requireMatch(gate, /developers\.xsolla\.com\/webhooks\/anti-fraud/i, 'Gate is missing the current Xsolla anti-fraud reference.');

requireMatch(purchases, /Apple App Store|App Store/i, 'Canonical Purchases page must still cover Apple purchases.');
requireMatch(purchases, /Google Play/i, 'Canonical Purchases page must still cover Google Play purchases.');
requireMatch(purchases, /Xsolla/i, 'Canonical Purchases page must still cover the Xsolla webshop.');
requireMatch(purchases, /30[- ]Day VIP|30 Day VIP/i, 'Canonical Purchases page must still distinguish 30-Day VIP.');
requireMatch(purchases, /Lifetime VIP/i, 'Canonical Purchases page must still distinguish Lifetime VIP.');
requireMatch(purchases, /Diamonds/i, 'Canonical Purchases page must still cover Diamonds.');
requireMatch(privacy, /Xsolla/i, 'Canonical Privacy Policy must still cover Xsolla/payment-provider processing.');
requireMatch(privacy, /fraud|security/i, 'Canonical Privacy Policy must still cover security/fraud processing.');
requireMatch(progress, /25\/25|25 of 25/i, 'Localization tracker no longer confirms all 25 localized hubs.');
requireMatch(progress, /100\/100|100 of 100/i, 'Localization tracker no longer confirms all 100 localized full documents.');

const displayedSources = `${gate}\n${purchases}\n${privacy}`;
rejectMatch(displayedSources, /\bTyconX\b/g, 'Displayed/legal prose contains forbidden TyconX spelling.');
rejectMatch(displayedSources, /TycoonX[^\n]{0,80}\bbeta\b|\bbeta\b[^\n]{0,80}TycoonX/i, 'Live TycoonX legal prose contains stale beta wording.');

if (errors.length) {
  console.error('TycoonX Xsolla refund-reason evidence verification FAILED:\n');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('TycoonX Xsolla refund-reason evidence verification PASSED.');
