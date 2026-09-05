import fs from 'node:fs';

const read = (path) => fs.readFileSync(path, 'utf8');
const fail = (message) => {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
};
const requireText = (text, needle, label) => {
  if (!text.includes(needle)) fail(`${label}: missing ${needle}`);
};
const forbidText = (text, needle, label) => {
  if (text.includes(needle)) fail(`${label}: forbidden ${needle}`);
};

const markdown = read('TYCOONX_APPLE_CUSTOM_EULA.md');
const page = read('app/tycoonx-eula/page.tsx');
const checklist = read('TYCOONX_APPLE_CUSTOM_EULA_RELEASE_CHECKLIST.md');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

for (const [label, text] of [
  ['EULA Markdown', markdown],
  ['EULA public mirror', page],
]) {
  requireText(text, 'TycoonX', `${label} brand`);
  forbidText(text, 'TyconX', `${label} legacy brand`);
  forbidText(text.toLowerCase(), 'tycoonx beta', `${label} stale release wording`);
  requireText(text, 'Family Sharing', `${label} Family Sharing`);
  requireText(text, 'volume purchasing', `${label} volume purchasing`);
  requireText(text, 'Legacy Contacts', `${label} Legacy Contacts`);
  requireText(text, 'Apple will refund the purchase price', `${label} Apple warranty refund wording`);
  forbidText(text, 'Apple may refund the purchase price', `${label} weakened Apple warranty wording`);
  requireText(text, 'Apple has no obligation whatsoever to provide maintenance or support', `${label} maintenance allocation`);
  requireText(text, 'Apple and Apple’s subsidiaries are third-party beneficiaries', `${label} Apple beneficiary`);
  requireText(text, 'United States Government list of prohibited or restricted parties', `${label} legal compliance`);
}

requireText(markdown, 'Last updated: September 5, 2026', 'canonical EULA date');
requireText(page, 'Last updated September 5, 2026', 'public EULA date');
requireText(markdown, 'Purchased Diamonds do not expire solely because time passes', 'Diamond invariant');
requireText(markdown, '30-Day VIP is a one-time, non-renewing entitlement', '30-Day VIP invariant');
requireText(markdown, 'Lifetime VIP is a one-time digital entitlement that may be offered only during selected limited promotional sales windows', 'Lifetime VIP invariant');
requireText(markdown, 'Completed one-time purchases are not retroactively repriced', 'completed-price invariant');
requireText(markdown, 'Mandatory consumer remedies remain unaffected', 'mandatory-rights safeguard');

requireText(checklist, 'Apple will refund the purchase price for the Licensed Application', 'checklist warranty parity');
requireText(checklist, 'Do not weaken Apple’s current required wording to “may refund.”', 'checklist warranty regression');
requireText(checklist, 'Family Sharing, volume purchasing, or Legacy Contacts', 'checklist scope parity');
requireText(checklist, 'App Store Connect Custom License Agreement text is older than the repository version', 'App Store Connect sync blocker');
requireText(checklist, 'For the current post-release configuration and before each future App Store submission', 'post-release QA wording');

requireText(progress, 'Localized full documents:** 100/100, **100%**', 'localization completion');
requireText(progress, 'Localized hubs:** 25/25, **100%**', 'localized hubs completion');
requireText(progress, 'Exact next unfinished locale/document: None.', 'closed localization queue');

if (!process.exitCode) {
  console.log('PASS: TycoonX Apple custom EULA matches the checked current Apple minimum-term invariants and repository/public-mirror parity requirements.');
}
