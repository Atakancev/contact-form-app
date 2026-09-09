import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const gate = read('TYCOONX_APPLE_SOUTH_KOREA_AGE_RATING_OCTOBER_2026_RELEASE_GATE.md');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');
const socialAge = read('TYCOONX_APPLE_SOCIAL_MEDIA_AGE_RELEASE_GATE.md');
const koreaPayments = read('TYCOONX_APPLE_SOUTH_KOREA_ALTERNATIVE_PAYMENT_RELEASE_GATE.md');

const checks = [
  ['Apple announcement date', /August 12, 2026/i.test(gate)],
  ['October window, not invented exact date', /starting in October 2026/i.test(gate) && /must not.*hard-code an unsupported date/is.test(gate)],
  ['Infrequent profanity descriptor', /Infrequent profanity and crude humor/i.test(gate)],
  ['Infrequent mature descriptor', /Infrequent mature or suggestive themes/i.test(gate)],
  ['All to 12+ change', /All[^\n]*to \*\*12\+\*\*/i.test(gate) || /from.*All.*12\+/is.test(gate)],
  ['Questionnaire truthfulness', /actual shipped\/live content/i.test(gate) && /Do not understate/i.test(gate)],
  ['Distribution metadata separation', /distribution\/content-classification metadata/i.test(gate)],
  ['Not proof of legal age', /not reliable proof.*specific TycoonX player/is.test(gate) && /legal capacity/i.test(gate)],
  ['No residence or pricing inference', /resident in the Republic of Korea/i.test(gate) && /regional price/i.test(gate)],
  ['Declared Age Range separation', /Declared Age Range/i.test(gate) && /must not be merged/i.test(gate)],
  ['Korea payment separation', /TYCOONX_APPLE_SOUTH_KOREA_ALTERNATIVE_PAYMENT_RELEASE_GATE\.md/.test(gate) && /payment-channel logic remains separate/i.test(gate)],
  ['Diamonds protected', /Purchased Diamonds do not expire merely because time passes/i.test(gate)],
  ['30-Day VIP exact semantics', /30-Day VIP remains a non-renewing entitlement lasting \*\*30 consecutive days\*\*/i.test(gate)],
  ['Lifetime VIP promotional semantics', /Lifetime VIP remains a limited-time promotional one-time product/i.test(gate) && /may never return/i.test(gate)],
  ['Lifetime VIP cannot reopen', /must never reopen a closed Lifetime VIP sales window/i.test(gate)],
  ['Temporary delisting separation', /platform\/distribution compliance event/i.test(gate) && /erase legitimate paid entitlements/i.test(gate)],
  ['GRAC RCN authenticity', /Never invent an RCN/i.test(gate)],
  ['Old OS handling', /older OS/i.test(gate) && /Do not revoke paid value/i.test(gate)],
  ['Privacy minimization', /Do not infer or persist a player’s exact age/i.test(gate)],
  ['Mandatory rights preserved', /Nothing in this gate waives non-waivable consumer/i.test(gate)],
  ['20 regression scenarios', /20\. \*\*Future Apple rating taxonomy changes:/i.test(gate)],
  ['No localization trigger', /does not trigger retranslation of the 100 completed localized full documents/i.test(gate)],
  ['Existing social-age gate present', /TycoonX Apple Social Media Age Safety Release Gate/i.test(socialAge)],
  ['Existing Korea payment gate present', /TycoonX Apple South Korea Alternative Payment Release Gate/i.test(koreaPayments)],
  ['Progress full docs complete', /100\/100/i.test(progress)],
  ['Progress hubs complete', /25\/25/i.test(progress)],
  ['Full release rule present', /September 1, 2026/i.test(progress)],
  ['No displayed misspelling in new gate', !/TyconX/.test(gate)],
  ['No stale live beta claim in new gate', !/TycoonX.{0,40}\bbeta\b/i.test(gate)],
];

let failed = 0;
for (const [name, ok] of checks) {
  console.log(`${ok ? 'PASS' : 'FAIL'} ${name}`);
  if (!ok) failed += 1;
}

if (failed) {
  console.error(`\n${failed} TycoonX South Korea age-rating gate check(s) failed.`);
  process.exit(1);
}

console.log(`\nPASS ${checks.length}/${checks.length} TycoonX South Korea age-rating gate checks.`);
