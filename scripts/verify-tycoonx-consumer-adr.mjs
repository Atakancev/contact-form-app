import fs from 'node:fs';
import path from 'node:path';

const gatePath = 'TYCOONX_EU_GERMAN_CONSUMER_ADR_DISPUTE_RELEASE_GATE.md';
const termsPath = 'tyconx-terms-of-service.md';
const purchasesPath = 'tyconx-purchase-refund-policy.md';
const progressPath = 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md';

const gate = fs.readFileSync(gatePath, 'utf8');
const terms = fs.readFileSync(termsPath, 'utf8');
const purchases = fs.readFileSync(purchasesPath, 'utf8');
const progress = fs.readFileSync(progressPath, 'utf8');

const failures = [];

function requireText(haystack, needle, label) {
  if (!haystack.includes(needle)) failures.push(`${label}: missing ${JSON.stringify(needle)}`);
}

function forbidText(haystack, needle, label) {
  if (haystack.includes(needle)) failures.push(`${label}: forbidden ${JSON.stringify(needle)}`);
}

function collectTextFiles(root) {
  if (!fs.existsSync(root)) return [];
  const out = [];
  const stack = [root];
  while (stack.length) {
    const current = stack.pop();
    const stat = fs.statSync(current);
    if (stat.isDirectory()) {
      for (const entry of fs.readdirSync(current)) stack.push(path.join(current, entry));
      continue;
    }
    if (/\.(md|mdx|tsx|ts|jsx|js)$/.test(current)) out.push(current);
  }
  return out;
}

// Old EU ODR platform and current German VSBG duties.
requireText(gate, 'Regulation (EU) 2024/3228', 'ODR repeal source');
requireText(gate, 'July 20, 2025', 'ODR repeal date');
requireText(gate, 'New complaints stopped on **March 20, 2025**', 'ODR complaint cutoff');
requireText(gate, 'Do **not** add the old ODR platform link', 'stale ODR guard');
requireText(gate, '§ 36 VSBG', 'VSBG section 36');
requireText(gate, '§ 37 VSBG', 'VSBG section 37');
requireText(gate, '10 or fewer persons on December 31 of the preceding year', 'VSBG small-business threshold');
requireText(gate, 'the exemption applies to § 36(1)(1)', 'VSBG exemption scope');
requireText(gate, 'it does **not** remove the post-dispute duty in § 37 VSBG', 'VSBG post-dispute independence');
requireText(gate, 'address and website', 'VSBG section 37 body details');
requireText(gate, 'willing or obliged', 'VSBG section 37 participation statement');
requireText(gate, 'in text form', 'VSBG section 37 form requirement');

// Competent body lookup must be current rather than permanently assumed.
requireText(gate, 'Do not permanently hard-code a consumer conciliation body without rechecking competence.', 'competence recheck');
requireText(gate, 'Universalschlichtungsstelle des Bundes - Zentrum für Schlichtung e. V.', 'current universal body');
requireText(gate, 'Straßburger Str. 8', 'current universal body address');
requireText(gate, 'https://www.universalschlichtungsstelle.de', 'current universal body website');
requireText(gate, 'must be revalidated before being placed into a production § 37 template', 'current body revalidation');

// Founder-protective participation posture without waiving consumer rights.
requireText(gate, 'Do not state that CK-Labs is willing to participate if it has not made that business/legal decision.', 'no accidental ADR commitment');
requireText(gate, 'do not describe ADR as a mandatory substitute for a consumer\'s court rights', 'court rights');
requireText(gate, 'do not add a binding-arbitration/class-action waiver copied from a third-party provider\'s contract', 'provider arbitration isolation');
requireText(gate, 'A consumer can pursue a refund, statutory withdrawal, conformity remedy, ADR, regulator complaint, data-protection complaint, or court claim without that procedural act itself proving abuse.', 'lawful redress not fraud');
requireText(gate, 'No retaliation for lawful consumer redress', 'non-retaliation section');

// Apple / Google / Xsolla roles stay transaction specific.
requireText(gate, 'Transaction/channel allocation: Apple App Store', 'Apple channel section');
requireText(gate, 'Transaction/channel allocation: Google Play', 'Google channel section');
requireText(gate, 'Transaction/channel allocation: Xsolla webshop', 'Xsolla channel section');
requireText(gate, 'the Apple support/refund route does not by itself replace the required CK-Labs text-form § 37 notice', 'Apple ADR separation');
requireText(gate, 'the Play refund/support route does not by itself replace the required CK-Labs text-form § 37 notice', 'Google ADR separation');
requireText(gate, 'a provider dispute process does not automatically replace § 37 VSBG', 'Xsolla ADR separation');
requireText(gate, 'Do not copy Xsolla\'s own arbitration or dispute clause into CK-Labs Terms', 'Xsolla arbitration isolation');

// Entitlement and enforcement isolation.
requireText(gate, 'A dispute concerning one Diamond transaction must not automatically remove unrelated legitimately purchased Diamonds.', 'Diamond isolation');
requireText(gate, 'must not restart the original 30-Day VIP clock', '30-Day VIP clock');
requireText(gate, 'does not create a hidden Lifetime VIP expiry', 'Lifetime VIP continuity');
requireText(gate, 'Transaction-specific entitlement correction after an actual refund, reversal, invalid payment, or confirmed abuse remains permitted where lawful.', 'lawful correction preserved');

// 2026 EU reform is a future implementation watch, not misrepresented as current German transposition.
requireText(gate, 'Directive (EU) **2025/2647**', 'EU ADR reform');
requireText(gate, 'January 19, 2026', 'EU ADR directive entry into force');
requireText(gate, 'March 20, 2028', 'EU ADR transposition date');
requireText(gate, 'September 20, 2028', 'EU ADR application date');
requireText(gate, 'do not treat every future-rule detail as already applicable German law on September 1, 2026', 'future rule timing guard');

// Operational evidence.
requireText(gate, 'annual § 36 employee-threshold assessment', 'annual threshold evidence');
requireText(gate, 'current § 37 German text-form template', 'section 37 template evidence');
requireText(gate, 'no stale EU ODR link', 'ODR QA evidence');
requireText(gate, 'calendar reminder for Directive (EU) 2025/2647 German implementation review', '2028 legal watch');
requireText(gate, '## 17. QA scenarios', 'QA matrix');
requireText(gate, 'Support copied a 2024 template containing the old ODR link.', 'stale template regression');

// Canonical public wording already preserves mandatory rights and transaction-specific corrections.
requireText(terms, 'Nothing in these Terms excludes, limits, or overrides rights that cannot legally be excluded or limited', 'canonical mandatory rights');
requireText(terms, 'subject to mandatory legal rights and the user’s ability to challenge an incorrect decision through Support', 'canonical challenge route');
requireText(terms, 'without limiting genuine fraud reporting or consumer rights', 'canonical chargeback safeguard');
requireText(purchases, 'Nothing in this Policy excludes statutory rights that cannot legally be waived.', 'Purchases mandatory rights');
requireText(purchases, 'CK-Labs remains responsible for delivering the corresponding TycoonX entitlement after receiving valid confirmation of successful payment.', 'Purchases CK-Labs delivery responsibility');

// Localization remains complete because this gate does not change canonical public meaning.
requireText(progress, '25/25', 'localized hubs');
requireText(progress, '100/100 localized full documents are currently confirmed current', 'localized documents');
requireText(progress, 'Exact next unfinished locale/document: None.', 'localization queue');
requireText(progress, 'September 1, 2026', 'full release invariant');
requireText(gate, 'does **not** by itself change the public canonical English Terms', 'localization impact');

// Player-facing/legal brand and release wording.
forbidText(gate, 'TyconX', 'gate brand spelling');
forbidText(gate.toLowerCase(), 'tycoonx is in beta', 'gate stale beta wording');

// The discontinued Commission ODR URL must not reappear in canonical or localized legal copy.
const legalFiles = [
  termsPath,
  purchasesPath,
  'tyconx-privacy-policy.md',
  'tyconx-community-standards.md',
  ...collectTextFiles('app/tycoonx-legal'),
  ...collectTextFiles('app/tyconx-terms-of-service'),
  ...collectTextFiles('app/tyconx-purchase-refund-policy'),
  ...collectTextFiles('app/tyconx-privacy-policy'),
].filter((file, index, files) => fs.existsSync(file) && files.indexOf(file) === index);

for (const file of legalFiles) {
  const text = fs.readFileSync(file, 'utf8');
  forbidText(text, 'ec.europa.eu/consumers/odr', `${file} stale ODR URL`);
}

if (failures.length > 0) {
  console.error('TycoonX EU/German consumer ADR verification failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX EU/German consumer ADR and dispute invariants verified.');
