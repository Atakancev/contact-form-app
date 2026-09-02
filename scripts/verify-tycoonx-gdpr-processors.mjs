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

const gate = read('TYCOONX_GDPR_PROCESSOR_SUBPROCESSOR_VENDOR_RELEASE_GATE.md');
const privacy = read('tyconx-privacy-policy.md');
const transfers = read('TYCOONX_GDPR_INTERNATIONAL_TRANSFER_RELEASE_GATE.md');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

// Article 28 selection, contract and instructions.
requireText(gate, 'Article 28(1): sufficient guarantees before use', 'Article 28(1) sufficient-guarantees gate');
requireText(gate, 'Article 28(3): the processor contract must match reality', 'Article 28(3) contract gate');
requireText(gate, 'documented processing instructions', 'documented instructions requirement');
requireText(gate, 'confidentiality obligations for authorized personnel', 'confidentiality requirement');
requireText(gate, 'Article 32 security measures', 'Article 32 security requirement');
requireText(gate, 'deletion or return of personal data after the service ends', 'deletion/return requirement');
requireText(gate, 'audit and inspection rights as required by Article 28', 'audit requirement');
requireText(gate, 'duty to tell CK-Labs if an instruction would infringe', 'unlawful-instruction warning');

// Role classification must be factual and activity-specific.
requireText(gate, 'Role classification is factual, not a label', 'role-classification rule');
requireText(gate, '**processor**', 'processor role');
requireText(gate, '**independent controller**', 'independent-controller role');
requireText(gate, '**joint controller**', 'joint-controller role');
requireText(gate, 'Article 28(10)', 'processor-becoming-controller safeguard');

// Subprocessor governance.
requireText(gate, 'Article 28(2) and (4): subprocessor authorization', 'subprocessor section');
requireText(gate, 'prior specific or general written authorization', 'subprocessor authorization');
requireText(gate, 'genuine opportunity to object', 'subprocessor objection opportunity');
requireText(gate, 'same data-protection obligations', 'subprocessor flow-down');
requireText(gate, 'remains responsible to CK-Labs for the subprocessor', 'processor responsibility for subprocessor');

// Transfer, breach, rights, security and offboarding.
requireText(gate, 'An Article 28 DPA does not by itself solve GDPR Chapter V.', 'Chapter V separation');
requireText(gate, 'TYCOONX_GDPR_INTERNATIONAL_TRANSFER_RELEASE_GATE.md', 'transfer-gate link');
requireText(gate, 'GDPR Article 33(2)', 'processor breach notification');
requireText(gate, 'without undue delay', 'processor breach timing');
requireText(gate, 'Data-subject-rights assistance', 'data-subject-rights assistance');
requireText(gate, 'End of service: return, deletion, and transition', 'offboarding gate');
requireText(gate, 'Audits and compliance evidence', 'audit evidence section');
requireText(gate, 'Security and Article 32 parity', 'security parity section');

// Provider/platform role boundaries.
requireText(gate, 'Do not describe Apple, Google, or Xsolla globally as CK-Labs processors.', 'platform role separation');
requireText(gate, "Apple's current App Review Guidelines", 'Apple policy checkpoint');
requireText(gate, "Google Play's current User Data policy", 'Google policy checkpoint');
requireText(gate, "Xsolla's current Privacy Policy expressly says its role varies", 'Xsolla role checkpoint');
requireText(gate, 'SDK and dependency change gate', 'SDK change gate');
requireText(gate, 'AI, moderation, support, and fraud vendors', 'high-risk vendor section');

// Paid entitlement isolation.
requireText(gate, 'delete or duplicate legitimately purchased Diamonds', 'Diamond isolation');
requireText(gate, 'original one-time **30-Day VIP** period', '30-Day VIP isolation');
requireText(gate, 'valid **Lifetime VIP**', 'Lifetime VIP isolation');
requireText(gate, 'replay Apple, Google Play, or Xsolla purchase events', 'purchase replay isolation');

// Operational evidence and regression coverage.
requireText(gate, 'Vendor register required', 'vendor register');
requireText(gate, 'Release-blocking failures', 'release blockers');
requireText(gate, 'Regression scenarios', 'regression section');
requireRegex(gate, /20\. Vendor migration must not create a hidden Lifetime VIP expiry\./, '20 regression scenarios');
requireText(gate, 'Canonical and localization rule', 'canonical/localization rule');
requireText(gate, 'does not materially change', 'no canonical-change declaration');

// Canonical Privacy Policy parity.
requireText(privacy, '# TycoonX Privacy Policy', 'canonical Privacy title');
requireText(privacy, 'Providers receive only the information reasonably necessary for their role and are subject to applicable contractual and legal safeguards.', 'canonical provider safeguard language');
requireText(privacy, 'Apple, Google, Xsolla, banks, card networks, and other payment participants may act as independent controllers', 'canonical independent-controller language');
requireText(privacy, 'Standard Contractual Clauses', 'canonical international-transfer language');
requireText(privacy, 'Third-party AI services are not exempt from these rules.', 'canonical AI-provider language');

// Existing transfer gate must keep Article 28 separate from Chapter V.
requireText(transfers, 'Article 28 processor/subprocessor terms where applicable', 'transfer gate Article 28 linkage');
requireText(transfers, 'DPF does not replace the rest of GDPR', 'transfer gate DPF separation');

// Localization and release invariants.
requireRegex(progress, /25\/25/, '25 localized hubs');
requireRegex(progress, /100\/100/, '100 localized full documents');
requireText(progress, 'September 1, 2026', 'full-release date');
requireRegex(progress, /Exact next unfinished locale\/document:\s*None\b/i, 'closed localization queue');

// Rendered/legal prose must use the correct brand and must not describe the live service as beta.
for (const [file, text] of [
  ['TYCOONX_GDPR_PROCESSOR_SUBPROCESSOR_VENDOR_RELEASE_GATE.md', gate],
  ['tyconx-privacy-policy.md', privacy],
]) {
  forbidRegex(text, /\bTyconX\b/, `${file} displayed TyconX typo`);
  forbidRegex(text, /TycoonX[^\n.]{0,80}\bbeta\b|\bbeta\b[^\n.]{0,80}TycoonX/i, `${file} live beta wording`);
}

console.log('PASS: TycoonX GDPR processor/subprocessor/vendor legal gate invariants are present.');
