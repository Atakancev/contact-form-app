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

const gate = read('TYCOONX_GERMAN_DATA_FOR_DIGITAL_SERVICE_UGC_EXIT_RELEASE_GATE.md');
const conformity = read('TYCOONX_EU_DIGITAL_PRODUCT_CONFORMITY_REMEDIES_RELEASE_GATE.md');
const deletion = read('TYCOONX_ACCOUNT_DELETION_RELEASE_GATE.md');
const terms = read('tyconx-terms-of-service.md');
const privacy = read('tyconx-privacy-policy.md');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

// BGB § 327(3) and § 312(1a) scope.
requireText(gate, 'BGB § 327(3)', 'data-backed digital-product scope');
requireText(gate, 'provides personal data or undertakes to provide personal data', 'personal-data consideration rule');
requireText(gate, 'BGB § 312(1a) sentence 2', 'exclusive-purpose exception');
requireText(gate, 'exclusively', 'exclusive processing condition');
requireText(gate, 'The game is free, so §§ 327 ff. cannot apply.', 'no free-service shortcut');
requireText(gate, 'The user has an account, so §§ 327 ff. always apply.', 'no automatic in-scope shortcut');
requireText(gate, 'analytics, advertising, profiling', 'secondary-purpose examples');
requireText(gate, 'underlying digital-service relationship', 'separate service-contract analysis');

// GDPR/TDDDG separation.
requireText(gate, 'does **not** mean CK-Labs owns the user\'s personal data', 'no ownership implication');
requireText(gate, 'keep GDPR legal-basis analysis separate', 'GDPR separation');
requireText(gate, 'TDDDG terminal-access gate also remains separate', 'TDDDG separation');
requireText(gate, 'access, erasure, restriction, objection, portability', 'privacy-right preservation');

// BGB § 327q privacy-right contract effects.
requireText(gate, 'BGB § 327q(1)', 'contract-validity rule');
requireText(gate, 'withdraw analytics consent = account automatically void', 'forbidden automatic invalidation example');
requireText(gate, 'BGB § 327q(2)', 'conditional termination rule');
requireText(gate, 'balancing both sides\' interests', 'interest-balancing rule');
requireText(gate, 'what processing can still lawfully continue', 'remaining-lawful-processing check');
requireText(gate, 'alternatives considered', 'less intrusive contractual alternative check');
requireText(gate, 'BGB § 327q(3)', 'no damages rule');
requireText(gate, 'privacy withdrawal fee', 'no privacy fee');
requireText(gate, 'negative Diamond balance', 'no Diamond privacy penalty');

// BGB § 327m data-backed defect rule.
requireText(gate, 'insignificant defect', 'minor-defect concept');
requireText(gate, 'does **not** apply to consumer contracts within BGB § 327(3)', 'minor-defect exception for data-backed contracts');
requireText(gate, 'do not promise automatic cash compensation where no money price exists', 'no invented cash remedy');

// BGB § 327p post-termination content handling.
requireText(gate, 'BGB § 327p(1)', 'post-termination access rule');
requireText(gate, 'BGB § 327p(2)', 'non-personal content-use rule');
requireText(gate, 'has no utility outside the context of the digital product', 'outside-context exception');
requireText(gate, 'aggregated with other data', 'aggregation exception');
requireText(gate, 'generated jointly with other consumers', 'joint-content exception');
requireText(gate, 'user-created **art**', 'art classification');
requireText(gate, 'music', 'music classification');
requireText(gate, 'books', 'book classification');
requireText(gate, 'game-only inventory', 'game-state exception analysis');
requireText(gate, 'BGB § 327p(3)', 'content-return rule');
requireText(gate, 'free of charge', 'free export');
requireText(gate, 'without obstruction by CK-Labs', 'no export obstruction');
requireText(gate, 'within a reasonable period', 'reasonable export period');
requireText(gate, 'commonly used and machine-readable format', 'machine-readable export');
requireText(gate, 'source code, server secrets, anti-cheat logic', 'security/proprietary export boundary');

// Deletion and GDPR separation.
requireText(gate, 'GDPR rights and BGB § 327p content-return rights are separate', 'GDPR/BGB export separation');
requireText(gate, 'Account deletion must not defeat a valid content-return right', 'deletion/export sequencing');
requireText(gate, 'do not keep the entire deleted account indefinitely', 'data-minimization guard');
requireText(gate, 'third-party personal data', 'third-party privacy safeguard');
requireText(gate, 'User-generated creative content, licences, and moderation', 'creator-content section');

// Paid entitlement isolation.
requireText(gate, 'Paid-value isolation: Diamonds, 30-Day VIP, and Lifetime VIP', 'paid-value isolation section');
requireText(gate, 'legitimately purchased Diamonds', 'purchased-Diamond preservation');
requireText(gate, 'original 30-day period', '30-Day VIP clock preservation');
requireText(gate, 'selected genuine sales windows', 'Lifetime VIP sales-window invariant');
requireText(gate, 'may be withdrawn from future sale and may never return', 'Lifetime VIP availability invariant');
requireText(gate, 'does not by itself make a valid Lifetime VIP fraudulent or void', 'privacy/Lifetime VIP isolation');
requireText(gate, 'Apple App Store, Google Play, and Xsolla', 'payment-channel separation');
requireText(gate, 'underlying TycoonX account/service contract classification', 'separate service contract record');
requireText(gate, 'individual Apple/Google/Xsolla transaction contract', 'separate purchase-contract record');

// Shutdown/successor and evidence.
requireText(gate, 'Provider outage, platform exit, successor operator, and permanent shutdown', 'shutdown/successor coverage');
requireText(gate, 'Release evidence packet', 'evidence packet');
requireText(gate, 'Release blockers', 'release blockers');
requireText(gate, 'Regression scenarios', 'regression scenarios');
requireRegex(gate, /24\. \*\*Privacy request after purchase dispute:/, '24 regression scenarios');

// Existing canonical and operational gates must remain compatible.
requireText(conformity, 'BGB §§ 327 et seq.', 'existing digital-product conformity coverage');
requireText(conformity, 'mandatory consumer law', 'mandatory-rights preservation');
requireText(deletion, 'Account deletion and a GDPR erasure request can overlap, but they are not always identical.', 'existing deletion/privacy distinction');
requireText(deletion, 'Deleting a TycoonX account must not silently waive', 'existing paid-remedy deletion rule');
requireText(terms, '# TycoonX Terms of Service', 'canonical Terms title');
requireText(terms, 'subject to mandatory digital-product law', 'canonical digital-product rights caveat');
requireText(privacy, '# TycoonX Privacy Policy', 'canonical Privacy title');
requireText(privacy, 'You can withdraw consent at any time for future processing', 'canonical consent-withdrawal rule');

// Localization and full-release invariants.
requireRegex(progress, /25\/25/, '25 localized hubs');
requireRegex(progress, /100\/100/, '100 localized full documents');
requireText(progress, 'September 1, 2026', 'full-release date');
requireRegex(progress, /Exact next unfinished locale\/document:\s*None\b/i, 'closed localization queue');

// Rendered/legal prose must use TycoonX and must not describe the live service as beta.
for (const [file, text] of [
  ['TYCOONX_GERMAN_DATA_FOR_DIGITAL_SERVICE_UGC_EXIT_RELEASE_GATE.md', gate],
  ['tyconx-terms-of-service.md', terms],
  ['tyconx-privacy-policy.md', privacy],
]) {
  forbidRegex(text, /\bTyconX\b/, `${file} displayed TyconX typo`);
  forbidRegex(text, /TycoonX[^\n.]{0,80}\bbeta\b|\bbeta\b[^\n.]{0,80}TycoonX/i, `${file} live beta wording`);
}

console.log('PASS: TycoonX German data-for-service, privacy-right contract, and UGC exit invariants are present.');
