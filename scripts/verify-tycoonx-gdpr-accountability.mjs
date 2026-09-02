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

const gate = read('TYCOONX_GDPR_ROPA_DPIA_PRIVACY_BY_DESIGN_DPO_RELEASE_GATE.md');
const privacy = read('tyconx-privacy-policy.md');
const processor = read('TYCOONX_GDPR_PROCESSOR_SUBPROCESSOR_VENDOR_RELEASE_GATE.md');
const transfers = read('TYCOONX_GDPR_INTERNATIONAL_TRANSFER_RELEASE_GATE.md');
const breach = read('TYCOONX_GDPR_PERSONAL_DATA_BREACH_RELEASE_GATE.md');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

// Article 30 RoPA accountability.
requireText(gate, 'Records of processing activities are a production requirement', 'RoPA production gate');
requireText(gate, 'GDPR Article 30', 'Article 30 reference');
requireText(gate, 'fewer than 250 persons', 'current Article 30(5) threshold');
requireText(gate, 'processing is not occasional', 'Article 30(5) non-occasional trigger');
requireText(gate, 'routine operations', 'TycoonX recurring-processing rule');
requireText(gate, 'Pending EU proposals to simplify Article 30 must not be treated as enacted law', 'pending-law safeguard');
requireText(gate, 'Minimum controller RoPA fields', 'minimum RoPA fields');
requireText(gate, 'purposes of processing', 'RoPA purposes');
requireText(gate, 'categories of data subjects', 'RoPA data-subject categories');
requireText(gate, 'categories of personal data', 'RoPA data categories');
requireText(gate, 'categories of recipients', 'RoPA recipients');
requireText(gate, 'transfers to third countries/international organisations', 'RoPA transfers');
requireText(gate, 'envisaged erasure/retention periods', 'RoPA retention');
requireText(gate, 'technical and organisational security measures', 'RoPA security measures');
requireText(gate, 'available to the competent supervisory authority on request', 'authority availability');

// TycoonX processing inventory and change control.
requireText(gate, 'Suggested TycoonX RoPA activity map', 'TycoonX activity map');
requireText(gate, 'Apple App Store purchase validation and entitlement reconciliation', 'Apple purchase activity');
requireText(gate, 'Google Play purchase validation and entitlement reconciliation', 'Google purchase activity');
requireText(gate, 'CK-Labs TycoonX webshop/Xsolla purchase, fraud, tax and entitlement flows', 'Xsolla activity');
requireText(gate, 'Diamonds ledger and correction history', 'Diamond activity');
requireText(gate, 'one-time 30-Day VIP entitlement state', '30-Day VIP activity');
requireText(gate, 'Lifetime VIP entitlement/restoration state', 'Lifetime VIP activity');
requireText(gate, 'RoPA change-control trigger', 'RoPA change-control section');
requireText(gate, 'adding an SDK, analytics tool, AI provider, moderation service or fraud vendor', 'SDK/vendor trigger');
requireText(gate, 'merger, sale, reorganisation or successor operator', 'successor trigger');

// Article 25 privacy by design/default.
requireText(gate, 'GDPR Article 25 privacy by design and by default', 'Article 25 section');
requireText(gate, 'least exposing state compatible with the feature', 'privacy-default rule');
requireText(gate, 'Private messages should not become public by default.', 'private-message default');
requireText(gate, 'Optional analytics/marketing processing requiring consent should not be enabled merely because the user opened TycoonX.', 'optional-processing default');
requireText(gate, 'unnecessary precise location, contacts, photos or device data', 'data-minimisation example');

// Article 35 DPIA screening and content.
requireText(gate, 'DPIA screening happens before high-risk processing starts', 'DPIA timing');
requireText(gate, 'GDPR Article 35', 'Article 35 reference');
requireText(gate, 'applicable supervisory-authority Article 35(4) list', 'authority mandatory-list check');
requireText(gate, 'evaluation or scoring', 'EDPB risk criterion');
requireText(gate, 'automated decision-making with legal or similarly significant effects', 'automated-decision criterion');
requireText(gate, 'systematic monitoring', 'systematic-monitoring criterion');
requireText(gate, 'data concerning vulnerable people', 'vulnerable-data-subject criterion');
requireText(gate, 'TycoonX features that require explicit DPIA screening', 'TycoonX DPIA trigger section');
requireText(gate, 'account-level fraud/abuse scoring', 'fraud scoring trigger');
requireText(gate, 'age-estimation/age-assurance technology', 'age-assurance trigger');
requireText(gate, 'Minimum DPIA contents', 'DPIA contents section');
requireText(gate, 'necessity and proportionality', 'DPIA necessity/proportionality');
requireText(gate, 'residual risk after the controls', 'DPIA residual risk');
requireText(gate, 'DPIA lifecycle, not a one-time PDF', 'DPIA review lifecycle');

// Article 36 prior consultation.
requireText(gate, 'Article 36 prior consultation: high residual risk is a stop condition', 'Article 36 gate');
requireText(gate, 'before starting the processing', 'prior-consultation timing');
requireText(gate, 'Do not ship first and plan to consult later', 'ship-before-consult prohibition');

// GDPR Article 37 and German BDSG § 38 DPO triggers.
requireText(gate, 'Germany: DPO decision must follow both GDPR Article 37 and BDSG § 38', 'DPO section');
requireText(gate, 'regular and systematic monitoring of data subjects on a large scale', 'Article 37 monitoring trigger');
requireText(gate, 'at least **20 persons**', 'German 20-person trigger');
requireText(gate, '**regardless of headcount**', 'German DPIA-based DPO trigger');
requireText(gate, 'processing that is subject to a DPIA under GDPR Article 35', 'German DPIA/DPO dependency');
requireText(gate, 'Do not casually label a support contact, founder, contractor or privacy consultant `DPO`.', 'DPO title safeguard');
requireText(gate, 'CK-Labs remains responsible for GDPR compliance', 'controller responsibility');

// Provider/platform boundaries and paid entitlements.
requireText(gate, 'Platform/provider records do not replace CK-Labs accountability', 'provider separation section');
requireText(gate, '**Apple**', 'Apple role');
requireText(gate, '**Google**', 'Google role');
requireText(gate, '**Xsolla**', 'Xsolla role');
requireText(gate, 'Paid-value and entitlement isolation', 'entitlement-isolation section');
requireText(gate, 'legitimately purchased Diamonds', 'Diamond isolation');
requireText(gate, 'original one-time 30-Day VIP period', '30-Day VIP isolation');
requireText(gate, 'valid **Lifetime VIP**', 'Lifetime VIP isolation');
requireText(gate, 'may be withdrawn from future sale without expiring an already valid entitlement', 'Lifetime VIP sales-window rule');

// Security, successor and evidence handling.
requireText(gate, 'Security emergencies and incident changes', 'security emergency section');
requireText(gate, 'Business sale, merger or successor operator', 'successor section');
requireText(gate, 'Minimum release regression scenarios', 'regression scenarios');
requireRegex(gate, /20\. Apple\/Google\/Xsolla store\/provider declarations/, '20 regression scenarios');
requireText(gate, 'Release evidence packet', 'release evidence packet');
requireText(gate, 'current DPO necessity assessment under Article 37 GDPR and § 38 BDSG', 'DPO evidence');
requireText(gate, 'Current legal checkpoint reviewed September 2, 2026', 'current-law checkpoint');
requireText(gate, 'not release-ready', 'release blocker');

// Canonical Privacy Policy must remain compatible with the internal gate.
requireText(privacy, '# TycoonX Privacy Policy', 'canonical privacy title');
requireText(privacy, 'Some information is necessary to perform the TycoonX contract or process a purchase.', 'contract necessity');
requireText(privacy, 'Providers receive only the information reasonably necessary for their role', 'provider minimisation');
requireText(privacy, 'Standard Contractual Clauses', 'international-transfer safeguard');
requireText(privacy, 'We keep personal data only for as long as reasonably necessary', 'retention principle');
requireText(privacy, 'Automated signals may lead to review, temporary restrictions, moderation, or investigation.', 'automated processing');
requireText(privacy, 'If a change requires your consent, we will request that consent rather than treating continued use alone as consent.', 'consent change safeguard');

// Existing privacy gates remain connected rather than duplicated.
requireText(processor, 'Article 28', 'processor Article 28 coverage');
requireText(transfers, 'Chapter V', 'international transfer coverage');
requireText(breach, '72-hour', 'breach timing coverage');

// Localization and release invariants.
requireRegex(progress, /25\/25/, '25 localized hubs');
requireRegex(progress, /100\/100/, '100 localized full documents');
requireText(progress, 'September 1, 2026', 'full-release date');
requireRegex(progress, /Exact next unfinished locale\/document:\s*None\b/i, 'closed localization queue');

// Rendered/legal prose brand and release checks for files touched by this gate.
for (const [file, text] of [
  ['TYCOONX_GDPR_ROPA_DPIA_PRIVACY_BY_DESIGN_DPO_RELEASE_GATE.md', gate],
  ['tyconx-privacy-policy.md', privacy],
]) {
  forbidRegex(text, /\bTyconX\b/, `${file} displayed TyconX typo`);
  forbidRegex(text, /TycoonX[^\n.]{0,80}\bbeta\b|\bbeta\b[^\n.]{0,80}TycoonX/i, `${file} live beta wording`);
}

console.log('PASS: TycoonX GDPR RoPA/DPIA/privacy-by-design/DPO legal gate invariants are present.');