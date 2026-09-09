import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function read(rel) {
  return fs.readFileSync(path.join(root, rel), 'utf8');
}

function requireText(text, needle, label) {
  if (!text.includes(needle)) {
    throw new Error(`Missing ${label}: ${needle}`);
  }
}

function rejectText(text, needle, label) {
  if (text.includes(needle)) {
    throw new Error(`Forbidden ${label}: ${needle}`);
  }
}

const gate = read('TYCOONX_UNION_TREASURY_GOVERNANCE_RELEASE_GATE.md');
const notice = read('app/tycoonx-legal/UnionGovernanceRuleNotice.tsx');
const rootLayout = read('app/layout.tsx');
const termsLayout = read('app/tyconx-terms-of-service/layout.tsx');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');
const map = read('TYCOONX_CODE_FIRST_GAMEPLAY_LEGAL_MAP.md');
const terms = read('tyconx-terms-of-service.md');

const gateChecks = [
  ['pay_union_membership_fee()', 'membership-fee RPC'],
  ['union_leader_deposit(...)', 'leader deposit'],
  ['union_leader_withdraw(...)', 'leader withdrawal'],
  ['pay_union_maintenance_now()', 'manual maintenance'],
  ['union_daily_sweep()', 'daily sweep'],
  ['seven unpaid maintenance days', 'maintenance closure threshold'],
  ['50% of the project target', 'project contribution cap'],
  ['start_union_level_upgrade()', 'upgrade start'],
  ['sync_union_level_upgrade(...)', 'upgrade sync'],
  ['collapse_union()', 'Union closure'],
  ['not automatically abuse', 'no amount-only abuse finding'],
  ['not automatically theft', 'leader withdrawal safeguard'],
  ['not a real-world subscription', 'membership fee is not real billing'],
  ['not a bank account', 'fictional treasury'],
  ['not an account sanction', 'maintenance closure distinction'],
  ['account compromise', 'compromise handling'],
  ['modified or direct client', 'modified-client risk'],
  ['alternate accounts', 'alternate-account evasion'],
  ['real-money trading', 'RMT boundary'],
  ['successful server request is not an absolute safe harbor', 'server acceptance boundary'],
  ['unrelated legitimate paid value', 'paid-value preservation'],
  ['mandatory consumer rights', 'mandatory-rights preservation'],
  ['broad `unions` UPDATE surface', 'RLS security finding'],
  ['leader_id', 'leadership-state protection'],
  ['union_level', 'progression-state protection'],
  ['union_xp', 'XP-state protection'],
  ['member_limit', 'member-limit protection'],
  ['Finance V2', 'treasury authority guard'],
  ['NEEDS ENGINEERING HARDENING', 'release decision'],
  ['Art/Begging', 'next code-first target'],
];

for (const [needle, label] of gateChecks) requireText(gate, needle, label);

const locales = [
  'en', 'tr', 'de', 'es', 'es_MX', 'fr', 'fr_CA', 'it', 'pt', 'pt_BR',
  'ru', 'ja', 'ko', 'zh', 'zh_Hans', 'zh_Hant', 'ar', 'nl', 'sv', 'nb',
  'pl', 'th', 'vi', 'uk', 'hi', 'id',
];

for (const locale of locales) {
  requireText(notice, `  ${locale}: {`, `Union notice locale ${locale}`);
}

requireText(notice, `if (/^\\/tyconx-terms-of-service\\/?$/.test(pathname)) return 'en';`, 'canonical Terms route gate');
requireText(notice, `pathname.match(/^\\/tycoonx-legal\\/([^/]+)\\/terms\\/?$/)`, 'localized Terms route gate');
requireText(notice, `const rtl = locale === 'ar';`, 'Arabic RTL selection');
requireText(notice, `dir={rtl ? 'rtl' : 'ltr'}`, 'RTL DOM direction');
requireText(notice, `es_MX: 'es-MX'`, 'Mexican Spanish lang tag');
requireText(notice, `fr_CA: 'fr-CA'`, 'Canadian French lang tag');
requireText(notice, `pt_BR: 'pt-BR'`, 'Brazilian Portuguese lang tag');
requireText(notice, `zh_Hans: 'zh-Hans'`, 'Simplified Chinese lang tag');
requireText(notice, `zh_Hant: 'zh-Hant'`, 'Traditional Chinese lang tag');
requireText(notice, 'leader treasury deposits and withdrawals', 'English leader treasury wording');
requireText(notice, 'after seven unpaid maintenance days', 'English closure threshold');
requireText(notice, 'server-accepted request', 'English server acceptance boundary');
requireText(notice, 'mandatory consumer rights', 'English mandatory-rights wording');

requireText(rootLayout, 'import UnionGovernanceRuleNotice', 'root layout import');
requireText(rootLayout, '<UnionGovernanceRuleNotice />', 'root layout mount');
rejectText(termsLayout, 'GameplayEconomyRuleNotice', 'duplicate canonical gameplay notice mount');

requireText(map, 'Union treasury/governance now reviewed', 'map Union completion section');
requireText(map, 'generic `unions` UPDATE is broader than the normal UI', 'map authority finding');
requireText(map, '**Art/Begging:**', 'map next queue');

requireText(progress, '100/100', 'full localized documents complete');
requireText(progress, '25/25', 'localized hubs complete');
requireText(progress, 'Exact next unfinished locale/document: None', 'no unfinished locale');

requireText(terms, '# TycoonX Terms of Service', 'canonical brand');
requireText(terms, 'Union Project', 'canonical Union contribution doctrine');
requireText(terms, 'mandatory consumer rights', 'canonical mandatory-rights baseline');

for (const [name, text] of [
  ['gate', gate],
  ['notice', notice],
  ['root layout', rootLayout],
  ['terms layout', termsLayout],
  ['progress', progress],
  ['map', map],
]) {
  rejectText(text, 'TyconX', `${name} displayed legacy brand`);
  rejectText(text, 'TycoonX beta', `${name} live-service beta wording`);
}

console.log(`PASS: TycoonX Union governance legal gate verified for ${locales.length - 1}/25 localized routes plus English.`);
