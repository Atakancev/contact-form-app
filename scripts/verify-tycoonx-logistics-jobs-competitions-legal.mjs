import fs from 'node:fs';

const read = (path) => fs.readFileSync(path, 'utf8');
const fail = (message) => {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
};
const requireText = (text, needle, label) => {
  if (!text.includes(needle)) fail(`${label} missing: ${needle}`);
};
const count = (text, needle) => text.split(needle).length - 1;

const gatePath = 'TYCOONX_LOGISTICS_JOBS_COMPETITIONS_RELEASE_GATE.md';
const noticePath = 'app/tycoonx-legal/LogisticsJobsCompetitionsRuleNotice.tsx';
const layoutPath = 'app/layout.tsx';
const mapPath = 'TYCOONX_CODE_FIRST_GAMEPLAY_LEGAL_MAP.md';
const progressPath = 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md';

for (const path of [gatePath, noticePath, layoutPath, mapPath, progressPath]) {
  if (!fs.existsSync(path)) fail(`missing file: ${path}`);
}
if (process.exitCode) process.exit(process.exitCode);

const gate = read(gatePath);
const notice = read(noticePath);
const layout = read(layoutPath);
const map = read(mapPath);
const progress = read(progressPath);

for (const needle of [
  '_auto_complete_care_jobs_aged',
  '_auto_post_care_jobs_batched',
  '_daily_task_consume_user_product_stock',
  'hourly_chart_rewards',
  'last_level_reward_claimed',
  'company_job_posts',
  'company_job_applications',
  'mm.company_id = mm.company_id',
  'fm_settle_match_rewards',
  'logistics_speed_up_delivery',
  'new_start_fleet_delivery',
  'new_start_loaded_fleet_delivery',
  'one-time 30-Day VIP',
  'Lifetime VIP',
  'mandatory',
]) requireText(gate, needle, 'release gate');

requireText(gate, 'P0: global care-job automation helpers are too broadly executable', 'release gate');
requireText(gate, 'P0: daily-task stock-consumption helper accepts an arbitrary user', 'release gate');
requireText(gate, 'P0: hourly reward cooldown state is client-writable', 'release gate');
requireText(gate, 'P0: level-up reward checkpoint is not visibly monotonic/server-owned', 'release gate');
requireText(gate, 'P0/P1: Company job RLS has cross-company predicates', 'release gate');
requireText(gate, 'system auto-completion is not player botting', 'release gate');
requireText(gate, 'A high wage is not proof of value funneling', 'release gate');

const locales = [
  'tr', 'de', 'es', 'es_MX', 'fr', 'fr_CA', 'it', 'pt', 'pt_BR', 'ru',
  'ja', 'ko', 'zh', 'zh_Hans', 'zh_Hant', 'ar', 'nl', 'sv', 'nb', 'pl',
  'th', 'vi', 'uk', 'hi', 'id',
];

let previous = notice.indexOf('en: {');
if (previous < 0) fail('notice missing English copy');
for (const locale of locales) {
  const marker = `  ${locale}: {`;
  const current = notice.indexOf(marker);
  if (current < 0) fail(`notice missing locale ${locale}`);
  if (current <= previous) fail(`locale ${locale} is out of required order`);
  previous = current;
}

for (const variant of [
  "es_MX: 'es-MX'",
  "fr_CA: 'fr-CA'",
  "pt_BR: 'pt-BR'",
  "zh_Hans: 'zh-Hans'",
  "zh_Hant: 'zh-Hant'",
]) requireText(notice, variant, 'notice language mapping');
requireText(notice, "const rtl = locale === 'ar';", 'Arabic RTL');
requireText(notice, "dir={rtl ? 'rtl' : 'ltr'}", 'Arabic RTL');
requireText(notice, '/^\\/tyconx-terms-of-service\\/?$/', 'canonical technical route gate');
requireText(notice, '/^\\/tycoonx-legal\\/([^/]+)\\/terms\\/?$/', 'localized route gate');

if (notice.includes('TyconX')) fail('player-facing notice contains displayed TyconX misspelling');
if (/TycoonX\s+beta/i.test(notice)) fail('notice contains stale TycoonX beta wording');

const importNeedle = 'import LogisticsJobsCompetitionsRuleNotice from "./tycoonx-legal/LogisticsJobsCompetitionsRuleNotice";';
requireText(layout, importNeedle, 'root layout');
if (count(layout, '<LogisticsJobsCompetitionsRuleNotice />') !== 1) {
  fail('LogisticsJobsCompetitionsRuleNotice must be mounted exactly once');
}

requireText(map, 'Completed cluster: Logistics, jobs, competitions and rewards', 'code-first map');
requireText(map, 'Social/UGC', 'code-first map next target');
requireText(map, '`LogisticsJobsCompetitionsRuleNotice.tsx`', 'code-first map notice list');

for (const needle of [
  'Seven September 10 code-derived Terms clarifications',
  '`LogisticsJobsCompetitionsRuleNotice.tsx`',
  '**Localized full documents:** 100/100, **100%**',
  '**Localized hubs:** 25/25, **100%**',
  '**Canonical English legal wording:** **99.2%**',
  '**Full commercial/legal/payment readiness:** **91.6%**',
  '**Overall project completion:** **96.7%**',
  'Exact next unfinished locale/document: None',
  'Next substantive code-first target:** Social/UGC',
]) requireText(progress, needle, 'progress tracker');

if (progress.includes('TyconX')) fail('progress tracker contains displayed TyconX misspelling');
if (/TycoonX\s+beta/i.test(progress)) fail('progress tracker contains stale TycoonX beta wording');

if (!process.exitCode) {
  console.log('PASS: TycoonX logistics/jobs/competitions legal gate, localization notice, routing and progress checks passed.');
}
