#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const lifecycle = await readFile(path.join(root, 'TYCOONX_TEMPORARY_RESTRICTION_REVIEW_LIFECYCLE_RELEASE_GATE.md'), 'utf8');
const enforcement = await readFile(path.join(root, 'TYCOONX_ACCOUNT_SUSPENSION_COMPROMISE_TERMINATION_RELEASE_GATE.md'), 'utf8');
const dsaRedress = await readFile(path.join(root, 'TYCOONX_DSA_ARTICLE_20_21_REDRESS_RELEASE_GATE.md'), 'utf8');
const terms = await readFile(path.join(root, 'tyconx-terms-of-service.md'), 'utf8');
const purchases = await readFile(path.join(root, 'tyconx-purchase-refund-policy.md'), 'utf8');
const privacy = await readFile(path.join(root, 'tyconx-privacy-policy.md'), 'utf8');
const progress = await readFile(path.join(root, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md'), 'utf8');

const failures = [];
const requireText = (text, needle, message) => {
  if (!text.includes(needle)) failures.push(message ?? `Missing required text: ${needle}`);
};
const requireMatch = (text, pattern, message) => {
  if (!pattern.test(text)) failures.push(message);
};

for (const token of [
  'Last reviewed: September 5, 2026',
  'a restriction labelled `temporary` must not silently become an indefinite unresolved state',
  '`next_review_at`',
  'Temporary does not mean fixed-duration, but it does mean actively reviewable',
  'There is no single universal German/EU rule requiring every TycoonX temporary restriction to end after a fixed number of hours or days',
  'Extension requires a fresh reason, not a stale flag',
  'Security containment must not turn into an unproved misconduct finding',
  'Payment-risk holds must follow transaction state',
  'Exploit containment and state correction are separate from suspension duration',
  '30-Day VIP remains a one-time, non-renewing 30-day entitlement',
  'A temporary review state does not itself revoke Lifetime VIP',
  'at least six months',
  'BGB § 314',
  'GDPR Article 5',
  'Outages and mass-security events need bulk review triggers',
  'a material temporary restriction can exist without an owner or review trigger',
  'a practical permanent exclusion can be maintained indefinitely without the review that would accompany a final termination',
]) requireText(lifecycle, token);

requireMatch(
  lifecycle,
  /review it as soon as reasonably practicable when material new evidence arrives/i,
  'Missing new-evidence review trigger.',
);
requireMatch(
  lifecycle,
  /narrower control would now be sufficient/i,
  'Missing least-broad-scope re-evaluation on extension.',
);
requireMatch(
  lifecycle,
  /resolved provider state should trigger reconciliation/i,
  'Missing provider-resolution reconciliation trigger.',
);
requireMatch(
  lifecycle,
  /does not automatically pause or restart the clock/i,
  'Missing 30-Day VIP clock safeguard.',
);
requireMatch(
  lifecycle,
  /six-month Article 20 period/i,
  'Missing DSA Article 20 notification-clock handling.',
);
requireMatch(
  lifecycle,
  /scheduled job must not extend a high-impact restriction forever/i,
  'Missing stale automation safeguard.',
);
requireMatch(
  lifecycle,
  /do not keep every raw security event indefinitely/i,
  'Missing data-minimisation/storage-limitation safeguard.',
);

for (const token of [
  'Security containment',
  'Payment-risk restriction',
  'Final termination',
  'A temporary protective restriction is not itself a final finding',
  'BGB § 314',
  'DSA Article 17',
  '30-Day VIP',
  'Lifetime VIP',
]) requireText(enforcement, token, `Existing account-enforcement invariant missing: ${token}`);

for (const token of [
  'at least six months',
  'The six-month period starts on the day the recipient is informed',
  'must not be taken solely on the basis of automated means',
]) requireText(dsaRedress, token, `DSA redress invariant missing: ${token}`);

requireText(
  terms,
  'CK-Labs may temporarily restrict an account or specific functions where reasonably necessary to investigate suspected compromise, fraud, payment disputes, exploit activity, abusive conduct, or other security concerns.',
  'Canonical Terms lost temporary investigation authority.',
);
requireText(
  terms,
  'Termination for cause remains subject to mandatory law and applicable platform rules. CK-Labs will not rely on this section to eliminate non-waivable consumer remedies.',
  'Canonical Terms lost termination mandatory-rights safeguard.',
);
requireMatch(
  purchases,
  /unrelated legitimately purchased value/i,
  'Purchases policy lost unrelated-paid-value protection.',
);
requireMatch(
  privacy,
  /retention/i,
  'Privacy Policy no longer addresses retention.',
);

for (const [label, text] of [
  ['temporary restriction lifecycle gate', lifecycle],
  ['account enforcement gate', enforcement],
  ['DSA redress gate', dsaRedress],
  ['canonical Terms', terms],
  ['canonical Purchases policy', purchases],
  ['canonical Privacy Policy', privacy],
]) {
  if (/\bTyconX\b/.test(text)) failures.push(`Displayed legacy brand spelling found in ${label}.`);
}

if (/\bbeta\b/i.test(lifecycle)) failures.push('Stale live-service beta wording found in temporary restriction lifecycle gate.');

requireText(
  progress,
  '100/100 localized full documents are currently confirmed current',
  'Localization progress no longer confirms 100/100 full documents.',
);
requireText(
  progress,
  'Exact next unfinished locale/document: None',
  'Localization queue is no longer closed.',
);
requireText(
  progress,
  'September 1, 2026',
  'Full-release date invariant missing from progress tracker.',
);

console.log('TycoonX temporary restriction lifecycle QA');
if (failures.length) {
  console.error('\nFAILED:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('PASS: temporary restrictions remain reviewable, extend only on a current basis, preserve entitlement/payment/DSA/German/privacy safeguards, support bulk incident release, and do not become stale permanent bans.');
