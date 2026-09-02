import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function read(file) {
  return fs.readFileSync(path.join(root, file), 'utf8');
}

function requireText(text, needle, label) {
  if (!text.includes(needle)) {
    throw new Error(`Missing ${label}: ${needle}`);
  }
}

function requireRegex(text, regex, label) {
  if (!regex.test(text)) {
    throw new Error(`Missing ${label}: ${regex}`);
  }
}

function forbidRegex(text, regex, label) {
  if (regex.test(text)) {
    throw new Error(`Forbidden ${label}: ${regex}`);
  }
}

const gate = read('TYCOONX_UGC_COPYRIGHT_URHDAG_RELEASE_GATE.md');
const terms = read('tyconx-terms-of-service.md');
const community = read('tycoonx-community-standards.md');
const dsaTerms = read('TYCOONX_DSA_ARTICLE_14_TERMS_MODERATION_RELEASE_GATE.md');
const creatorExit = read('TYCOONX_GERMAN_DATA_FOR_DIGITAL_SERVICE_UGC_EXIT_RELEASE_GATE.md');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

// Scope classification must not assume that all UGC services are Article 17/UrhDaG services.
requireText(gate, 'classify TycoonX before assuming the German UrhDaG applies', 'scope-classification heading');
requireText(gate, 'large amount', 'large-amount criterion');
requireText(gate, 'organises that content', 'organisation criterion');
requireText(gate, 'promotes that content for profit', 'profit-promotion criterion');
requireText(gate, 'competes with online content services for the same audiences', 'competitive-audience criterion');
requireText(gate, 'Current release assumption', 'current classification position');
requireText(gate, 'does not declare TycoonX to be an UrhDaG service provider', 'no false in-scope declaration');

// Existing public contract/community baseline.
requireText(terms, '# TycoonX Terms of Service', 'canonical Terms title');
requireText(terms, 'you remain responsible for content you submit and must have the rights necessary to submit it', 'Terms uploader-rights rule');
requireText(terms, 'non-exclusive, worldwide, royalty-free license', 'Terms operational UGC license');
requireText(terms, 'Private direct messages, private support communications, and non-public reports are not licensed for public promotional use', 'private-content promotional boundary');
requireText(community, '# TycoonX Community Standards & Moderation Policy', 'Community Policy title');
requireText(community, 'content that infringes intellectual-property or other third-party rights', 'IP prohibition');
requireText(community, '## 10. Intellectual-property complaints', 'IP complaint section');
requireText(community, 'Users remain responsible for having the rights needed for content they upload.', 'Community uploader-rights rule');

// Limited-license and provenance safeguards.
requireText(gate, 'do not silently claim ownership of the user\'s copyright', 'no ownership grab');
requireText(gate, 'unrestricted perpetual merchandising, sublicensing, resale, or AI-training right', 'no hidden commercial expansion');
requireText(gate, 'Rights provenance before CK-Labs promotes creator content', 'provenance gate');
requireText(gate, 'music composition and lyrics', 'music rights');
requireText(gate, 'sound recordings and performances', 'recording/performance rights');
requireText(gate, 'co-authors or joint creators', 'joint-creator rights');
requireText(gate, 'AI-generated or AI-assisted material', 'AI provenance');

// Complaint flow and due-process safeguards.
requireText(gate, 'Intellectual-property complaint intake', 'complaint intake');
requireText(gate, 'A report does not automatically prove infringement.', 'no automatic guilt');
requireText(gate, 'public-domain', 'public-domain safeguard');
requireText(gate, 'quotation, parody, pastiche', 'statutory-use safeguard');
requireText(gate, 'Do not automatically suspend the entire account for a first disputed copyright claim', 'proportionate account action');
requireText(gate, 'False, abusive, or bad-faith copyright complaints', 'false-notice handling');
requireText(gate, 'Do not disclose uploader identity', 'claimant privacy boundary');

// In-scope UrhDaG requirements.
requireText(gate, '§ 4 UrhDaG', 'licensing-efforts rule');
requireText(gate, '§ 8', 'simple-blocking rule');
requireText(gate, '§ 7', 'qualified-blocking rule');
requireText(gate, '€10 million', 'startup turnover threshold');
requireText(gate, 'less than three years', 'startup service-age threshold');
requireText(gate, '5 million', 'startup visitor threshold');
requireText(gate, '€1 million', 'small-provider turnover threshold');
requireText(gate, '§§ 9-11', 'lawful-use/overblocking safeguards');
requireText(gate, '§ 5(3) requires the provider to inform users in its terms', 'specific Terms duty');
requireText(gate, 'canonical-Terms localization trigger', 'localization trigger');
requireText(gate, '§ 14 UrhDaG', 'copyright complaint procedure');
requireText(gate, 'no later than one week', 'UrhDaG complaint deadline');
requireText(gate, 'impartial human decision-maker', 'human complaint decision');

// Prevent misuse of UrhDaG quantitative rules as universal copying permissions.
requireText(gate, '15 seconds of music is always legal', 'anti-threshold shortcut');
requireText(gate, '160 characters are always free', 'anti-text-threshold shortcut');
requireText(gate, 'not a general license', 'threshold scope limitation');

// Joint works, deletion/export, and AI boundaries.
requireText(gate, 'Joint creations, company/union content, and ownership disputes', 'joint-works section');
requireText(gate, 'BGB § 327p interaction', 'creator-exit integration');
requireText(gate, 'external model training', 'AI-training boundary');
requireText(gate, 'A user selecting an AI tool does not guarantee that the output is free of third-party rights.', 'AI-output rights safeguard');
requireText(creatorExit, 'BGB § 327p', 'existing creator-content exit coverage');

// Apple/Google/platform parity.
requireText(gate, 'Apple App Store parity', 'Apple section');
requireText(gate, 'Google Play parity', 'Google section');
requireText(gate, 'unauthorised downloading/conversion of third-party media sources', 'Apple media safeguard');
requireText(gate, 'do not market TycoonX as a way to download, copy, stream, or redistribute third-party works without authorization', 'Google infringement-inducement safeguard');
requireText(gate, 'Store/payment/provider separation', 'provider separation');

// Paid entitlement isolation.
requireText(gate, 'Paid entitlement isolation', 'paid-value section');
requireText(gate, 'legitimately purchased Diamonds', 'Diamond preservation');
requireText(gate, 'original one-time 30-Day VIP period', '30-Day VIP preservation');
requireText(gate, 'insert an expiry into valid Lifetime VIP', 'Lifetime VIP expiry protection');
requireText(gate, 'Apple, Google Play, or Xsolla purchase event', 'purchase-event isolation');
requireText(gate, 'No copyright clause waives non-waivable remedies.', 'mandatory-rights preservation');

// Evidence, regression, and release blockers.
requireText(gate, 'Evidence pack', 'evidence pack');
requireText(gate, 'Regression scenarios', 'regression scenarios');
requireRegex(gate, /28\. Provider migration moves stored creator files/, '28 regression scenarios');
requireText(gate, 'Release blockers', 'release blockers');
requireText(gate, 'Localization trigger', 'localization trigger section');

// DSA integration must remain present.
requireText(dsaTerms, 'TycoonX', 'existing DSA Terms gate');
requireText(community, 'statement of reasons', 'Community DSA reasons');
requireText(community, 'notice-and-action', 'Community DSA notice mechanism');

// Localization queue and release-state invariants.
requireRegex(progress, /25\/25/, '25 localized hubs');
requireRegex(progress, /100\/100/, '100 localized full documents');
requireText(progress, 'September 1, 2026', 'full-release date');
requireRegex(progress, /Exact next unfinished locale\/document:\s*None\b/i, 'closed localization queue');

// Displayed/legal prose must use TycoonX and must not describe the live service as beta.
for (const [file, text] of [
  ['TYCOONX_UGC_COPYRIGHT_URHDAG_RELEASE_GATE.md', gate],
  ['tyconx-terms-of-service.md', terms],
  ['tycoonx-community-standards.md', community],
]) {
  forbidRegex(text, /\bTyconX\b/, `${file} displayed TyconX typo`);
  forbidRegex(text, /TycoonX[^\n.]{0,80}\bbeta\b|\bbeta\b[^\n.]{0,80}TycoonX/i, `${file} live beta wording`);
}

console.log('PASS: TycoonX UGC copyright, UrhDaG classification, creator-rights, and paid-entitlement invariants are present.');
