import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (rel) => fs.readFileSync(path.join(root, rel), 'utf8');
const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};
const hasAll = (text, values, label) => {
  for (const value of values) assert(text.includes(value), `${label}: missing ${JSON.stringify(value)}`);
};

const gate = read('TYCOONX_COMPANY_SUPPLY_EXPORT_TENDER_RELEASE_GATE.md');
const map = read('TYCOONX_CODE_FIRST_GAMEPLAY_LEGAL_MAP.md');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');
const notice = read('app/tycoonx-legal/CompanyCommerceRuleNotice.tsx');
const gameplayNotice = read('app/tycoonx-legal/GameplayEconomyRuleNotice.tsx');
const rootLayout = read('app/layout.tsx');
const legalLayout = read('app/tycoonx-legal/layout.tsx');

hasAll(gate, [
  'company_supply_request_create',
  'company_supply_request_update',
  'company_supply_deliver',
  'company_supply_deliver_from_warehouse',
  'new_company_offer_create',
  'new_company_tender_bid',
  'new_company_tenders_sweep',
  'new_company_export_accept',
  'new_company_export_complete',
  'new_company_export_fail_internal',
  'new_company_export_sweep_overdue',
  'manage_supply',
  'manage_exports',
  'manage_tenders',
  'specialist supply transfer',
  'linked-request update price revalidation is not symmetric',
  'server acceptance',
  'accidental',
  'account compromise',
  'unrelated legitimate paid value',
  'mandatory consumer rights',
  'BGB § 307',
  'BGB § 327d',
  'BGB § 327i',
], 'release gate');

hasAll(map, [
  'Company supply requests now reviewed',
  'Company warehouse fulfillment is a specialist transfer',
  'linked supply-request update price validation is asymmetric',
  'Current Company export/procurement offers now reviewed',
  'Current Company tenders now reviewed',
  'Union treasury/governance',
], 'code-first map');

const targetLocales = [
  'tr', 'de', 'es', 'es_MX', 'fr', 'fr_CA', 'it', 'pt', 'pt_BR', 'ru',
  'ja', 'ko', 'zh', 'zh_Hans', 'zh_Hant', 'ar', 'nl', 'sv', 'nb', 'pl',
  'th', 'vi', 'uk', 'hi', 'id',
];
for (const locale of ['en', ...targetLocales]) {
  assert(new RegExp(`\\b${locale.replace('_', '\\_')}\\s*:`).test(notice), `localized notice: missing locale ${locale}`);
  assert(new RegExp(`\\b${locale.replace('_', '\\_')}\\s*:`).test(gameplayNotice), `gameplay notice: missing locale ${locale}`);
}

hasAll(notice, [
  'Company supply, exports and tenders',
  'manage_supply',
  'manage_exports',
  'manage_tenders',
  'sham procurement',
  'collusive bidding',
  'artificial pricing intended to funnel value',
  'A high or low price',
  'A server-accepted action',
  'Accidental one-off use',
  '/^\\/tyconx-terms-of-service\\/?$/',
  '/^\\/tycoonx-legal\\/([^/]+)\\/terms\\/?$/',
  "const rtl = locale === 'ar'",
  "dir={rtl ? 'rtl' : 'ltr'}",
  "es_MX: 'es-MX'",
  "fr_CA: 'fr-CA'",
  "pt_BR: 'pt-BR'",
  "zh_Hans: 'zh-Hans'",
  "zh_Hant: 'zh-Hant'",
], 'localized notice');

hasAll(gameplayNotice, [
  '/^\\/tyconx-terms-of-service\\/?$/',
  '/^\\/tycoonx-legal\\/([^/]+)\\/terms\\/?$/',
  "const rtl = locale === 'ar'",
], 'gameplay notice routing');

assert(!notice.includes('TyconX'), 'localized notice contains forbidden displayed brand TyconX');
assert(!gameplayNotice.includes('TyconX'), 'gameplay notice contains forbidden displayed brand TyconX');
assert(!/\bTycoonX\s+beta\b/i.test(`${notice}\n${gameplayNotice}`), 'gameplay notices contain stale TycoonX beta wording');

hasAll(rootLayout, [
  'GameplayEconomyRuleNotice',
  '<GameplayEconomyRuleNotice />',
  'CompanyCommerceRuleNotice',
  '<CompanyCommerceRuleNotice />',
], 'root layout');
assert(!legalLayout.includes('GameplayEconomyRuleNotice'), 'localized legal layout must not duplicate the root-routed gameplay notice');
assert(!legalLayout.includes('CompanyCommerceRuleNotice'), 'localized legal layout must not duplicate the root-routed company notice');

hasAll(progress, [
  'All 25 target locales and all 100 localized full documents are current.',
  'GameplayEconomyRuleNotice.tsx',
  'CompanyCommerceRuleNotice.tsx',
  'linked contract/V2-offer price ceiling',
  'No database change was made by this run.',
  '**Localized full documents:** 100/100, **100%**',
  '**Localized hubs:** 25/25, **100%**',
  '**Canonical English legal wording:** **97.0%**',
  '**Full commercial/legal/payment readiness:** **93.5%**',
  '**Overall project completion:** **95.2%**',
  'Exact next unfinished locale/document: None.',
  'Next substantive code-first target:** Union treasury/governance',
], 'progress tracker');

const publicFacing = `${notice}\n${gameplayNotice}\n${progress}`;
assert(!publicFacing.includes('TyconX'), 'public/progress text contains forbidden TyconX spelling');
assert(!/TycoonX.{0,20}\bbeta\b/i.test(publicFacing), 'public/progress text implies live TycoonX is beta');

console.log('PASS: TycoonX Company commerce gate, localization sync, canonical notice routing, branding and progress invariants verified.');
