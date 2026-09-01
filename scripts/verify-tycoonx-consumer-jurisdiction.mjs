import fs from 'node:fs';

const gatePath = 'TYCOONX_EU_CONSUMER_CHOICE_OF_LAW_JURISDICTION_RELEASE_GATE.md';
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

// Rome I Article 6 and mandatory habitual-residence protections.
requireText(gate, 'Regulation (EC) No 593/2008 (Rome I)', 'Rome I source');
requireText(gate, 'Article 6', 'Rome I Article 6');
requireText(gate, 'habitual residence', 'habitual residence');
requireText(gate, 'directs such activities to that country', 'directed activity');
requireText(gate, 'must not deprive a qualifying consumer of the protection of provisions that cannot be derogated from by agreement', 'mandatory consumer protection');
requireText(gate, 'Do not decide Rome I Article 6 or Brussels I consumer jurisdiction from IP address alone.', 'IP-only guard');
requireText(gate, 'The presence of one signal does not always decide the legal question by itself.', 'directed activity evidence guard');

// Brussels I Recast consumer jurisdiction.
requireText(gate, 'Regulation (EU) No 1215/2012 (Brussels I Recast)', 'Brussels I source');
requireText(gate, 'Articles 17 to 19', 'consumer jurisdiction section');
requireText(gate, 'the consumer may bring proceedings against the other party either in the courts of the Member State where that other party is domiciled or in the courts for the place where the consumer is domiciled', 'consumer claimant forum');
requireText(gate, 'the other party may generally bring proceedings against the consumer only in the courts of the Member State where the consumer is domiciled', 'trader claimant forum');
requireText(gate, 'pre-dispute jurisdiction agreements may depart from those protections only in the limited circumstances permitted by Article 19', 'Article 19 limits');
requireText(gate, 'for consumers, jurisdiction is determined by mandatory statutory rules', 'canonical jurisdiction posture');

// No copied provider arbitration/forum shortcuts.
requireText(gate, 'Do not import US-style mandatory arbitration', 'no imported mandatory arbitration');
requireText(gate, 'class-action waiver', 'class action wording guard');
requireText(gate, 'California-only forum wording', 'California forum guard');
requireText(gate, 'Apple App Store relationship', 'Apple section');
requireText(gate, 'Google Play relationship', 'Google section');
requireText(gate, 'Xsolla webshop relationship', 'Xsolla section');
requireText(gate, 'It is not a reusable CK-Labs waiver template.', 'Xsolla clause isolation');

// ADR, refund, chargeback, and court rights stay distinct.
requireText(gate, 'ADR and court rights remain separate', 'ADR separation');
requireText(gate, 'Using one route does not automatically waive another non-waivable route', 'redress route preservation');
requireText(gate, 'A consumer filing a lawful complaint or claim is not by itself evidence of:', 'no retaliation');
requireText(gate, 'CK-Labs can still investigate actual forged evidence', 'fraud enforcement preserved');

// Paid entitlement isolation.
requireText(gate, 'must not wipe unrelated legitimately purchased Diamonds', 'Diamond isolation');
requireText(gate, 'must not restart, extend, shorten, or duplicate the original one-time 30-Day VIP clock', '30-Day VIP isolation');
requireText(gate, 'does not create a hidden expiry for valid Lifetime VIP or convert it into 30-Day VIP', 'Lifetime VIP isolation');
requireText(gate, 'A real refund, reversal, invalid payment, final judgment, settlement, serious Terms violation, or other lawful underlying basis may still support the transaction-specific correction', 'lawful correction preserved');

// Residence and regional-price signals are not silently conflated.
requireText(gate, 'Regional pricing does not choose governing law by itself', 'regional pricing separation');
requireText(gate, 'Account residence, payment country, and habitual residence are different concepts', 'residence evidence separation');
requireText(gate, 'A player temporarily travelling does not automatically acquire a new habitual residence merely because the device IP address changes.', 'travel guard');

// Business transfer and permanent shutdown do not manufacture a new forum.
requireText(gate, 'Business sale, merger, and successor operator', 'successor operator section');
requireText(gate, 'do not use the business transfer as a device to move existing consumers into a less protective forum retroactively', 'successor forum protection');
requireText(gate, 'does not retroactively change the law or forum governing an already existing consumer dispute', 'shutdown forum continuity');

// Support wording and release evidence.
requireText(gate, 'you can only sue us in Cologne', 'support forbidden example');
requireText(gate, 'Escalate material cross-border jurisdiction questions', 'support escalation');
requireText(gate, '## 18. Release test matrix', 'release test matrix');
requireText(gate, 'French consumer deliberately served by TycoonX who buys through Xsolla', 'cross-border scenario');
requireText(gate, 'provider terms containing a California or arbitration clause', 'provider clause scenario');
requireText(gate, '## 19. Evidence CK-Labs should retain', 'evidence section');
requireText(gate, 'Apply GDPR data minimization and retention rules.', 'data minimization');

// Canonical public wording already has the right safeguards.
requireText(terms, 'These Terms are governed by German law, without depriving consumers of mandatory protections available under the law of their habitual country of residence where those protections apply.', 'canonical choice of law');
requireText(terms, 'For consumers, jurisdiction is determined by mandatory statutory rules.', 'canonical consumer jurisdiction');
requireText(terms, 'These Terms do not impose mandatory arbitration or require a consumer to litigate in a location where applicable law gives the consumer another forum.', 'canonical no forced arbitration');
requireText(terms, 'This section does not restrict a consumer’s right to use a competent court, statutory complaint mechanism, payment-provider process, or other mandatory remedy.', 'canonical dispute rights');
requireText(purchases, 'does not reduce any rights that cannot legally be waived', 'Purchases mandatory rights');

// Localization remains complete because no canonical meaning changed.
requireText(progress, '25/25', 'localized hubs');
requireText(progress, '100/100 localized full documents are currently confirmed current', 'localized documents');
requireText(progress, 'Exact next unfinished locale/document: None.', 'localization queue');
requireText(progress, 'September 1, 2026', 'full release invariant');
requireText(gate, 'does **not** by itself change the public canonical English Terms', 'localization impact');

// Brand and release wording.
forbidText(gate, 'TyconX', 'gate brand spelling');
forbidText(gate.toLowerCase(), 'tycoonx is in beta', 'stale beta wording');

if (failures.length > 0) {
  console.error('TycoonX EU consumer choice-of-law and jurisdiction verification failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX EU consumer choice-of-law and jurisdiction invariants verified.');
