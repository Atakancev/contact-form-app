import fs from 'node:fs';

const read = (path) => fs.readFileSync(path, 'utf8');
const gate = read('TYCOONX_APPLE_SOCIAL_MEDIA_AGE_RELEASE_GATE.md');
const tracker = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');
const terms = read('tyconx-terms-of-service.md');
const privacy = read('tyconx-privacy-policy.md');
const community = read('tycoonx-community-standards.md');

const errors = [];

function requireText(label, text, needle) {
  if (!text.includes(needle)) errors.push(`${label}: missing ${JSON.stringify(needle)}`);
}

function requireMatch(label, text, regex) {
  if (!regex.test(text)) errors.push(`${label}: missing pattern ${regex}`);
}

function forbidMatch(label, text, regex) {
  if (regex.test(text)) errors.push(`${label}: forbidden/stale pattern ${regex}`);
}

requireText('gate review date', gate, 'Last reviewed: 2026-09-05');
requireText('full release', gate, 'TycoonX went to full release on **September 1, 2026**');
requireText('active September requirement', gate, 'As of this September 5, 2026 review, that requirement is active.');
requireMatch('submission scope', gate, /new app, new version, or update to the App Store/);
requireMatch('notarization scope', gate, /notarization for alternative distribution/);
requireText('UGC distinction', gate, '**User-Generated Content**');
requireText('social media distinction', gate, '**Social Media**');
requireText('chat distinction', gate, '**Messaging and Chat**');
requireMatch('chat is not automatically social media', gate, /chat by itself does \*\*not automatically prove\*\*/i);
requireMatch('social media definition', gate, /redistribution, amplification, or interaction with user-generated content/i);
requireText('under-13 capability', gate, 'Social Media Disabled for Users Under 13');
requireText('declared age range', gate, 'Declared Age Range API');
requireText('consent withdrawal', gate, '`RESCIND_CONSENT`');
requireMatch('region-specific rating caution', gate, /region-specific ratings can be higher or otherwise differ/i);
requireMatch('App Store source of truth', gate, /App Store Connect’s actual calculated result as the submission source of truth/i);
requireText('current P0', gate, '**P0 NOW for every new Apple submission/update/notarization in September 2026 and later:**');
requireMatch('SDK checkpoint', gate, /iOS\/iPadOS 26\.2 SDKs with Xcode 26\.2/);
requireMatch('significant update isolation', gate, /generic Terms-update banner as a substitute/i);
requireMatch('account misconduct isolation', gate, /not as proof of identity, fraud, payment ownership, or account misconduct/i);
requireMatch('refund isolation', gate, /not automatically a refund, chargeback, fraud finding, exploit finding, or entitlement-abuse finding/i);

requireMatch('purchased Diamonds', gate, /Purchased Diamonds do not expire solely because time passes/);
requireMatch('30-Day VIP', gate, /30-Day VIP.*one-time, non-renewing 30-day entitlement/s);
requireMatch('Lifetime VIP window', gate, /Lifetime VIP.*one-time promotional entitlement available only during selected genuine sales windows/s);
requireMatch('Lifetime VIP may never return', gate, /may be withdrawn from future sale, may never return/s);
requireMatch('mandatory remedy separation', gate, /conformity, refund, price-reduction, termination, or other mandatory consumer remedies/i);

requireText('Apple current references date', gate, 'Official Apple references checked 2026-09-05');
requireText('Apple whats new ref', gate, 'https://developer.apple.com/app-store/whats-new/');
requireText('Apple age definitions ref', gate, 'https://developer.apple.com/help/app-store-connect/reference/app-information/age-ratings-values-and-definitions');
requireText('Apple age assurance ref', gate, 'https://developer.apple.com/support/age-assurance');

forbidMatch('old future-P0 wording', gate, /P0 before the September 2026 App Store submission/i);
forbidMatch('legacy displayed brand', gate, /TyconX/);
forbidMatch('stale live beta wording', gate, /TycoonX\s+(?:is|remains|service is)\s+(?:a\s+)?beta/i);

requireMatch('tracker hubs', tracker, /25\s*\/\s*25|25\/25/);
requireMatch('tracker full docs', tracker, /100\s*\/\s*100|100\/100/);
requireMatch('tracker next none', tracker, /Exact next unfinished locale\/document:\s*`?None/i);
requireMatch('tracker full release date', tracker, /September 1, 2026/);

requireMatch('Terms age flexibility', terms, /age|minor|parent/i);
requireMatch('Privacy age data', privacy, /age[- ]range|parental|age control/i);
requireMatch('Community child safety', community, /child|minor|under 18|under-18/i);

if (errors.length) {
  console.error('TycoonX Apple social-media/age legal gate verification FAILED');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('TycoonX Apple social-media/age legal gate verification PASS');
