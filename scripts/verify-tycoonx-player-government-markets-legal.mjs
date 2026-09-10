import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const fail = (message) => {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
};
const requireText = (body, needle, label) => {
  if (!body.includes(needle)) fail(`${label} is missing: ${needle}`);
};
const requireTextCI = (body, needle, label) => {
  if (!body.toLowerCase().includes(needle.toLowerCase())) fail(`${label} is missing: ${needle}`);
};

const gatePath = 'TYCOONX_PLAYER_GOVERNMENT_MARKETS_RELEASE_GATE.md';
const noticePath = 'app/tycoonx-legal/PlayerGovernmentMarketRuleNotice.tsx';
const layoutPath = 'app/layout.tsx';
const progressPath = 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md';

for (const file of [gatePath, noticePath, layoutPath, progressPath]) {
  if (!fs.existsSync(path.join(root, file))) fail(`Missing required file ${file}`);
}

if (process.exitCode) process.exit(process.exitCode);

const gate = read(gatePath);
const notice = read(noticePath);
const layout = read(layoutPath);
const progress = read(progressPath);

const gateChecks = [
  'negative-price producer purchase path',
  'shop auto-fill destination ownership',
  'automatic market and auto-fill are not prohibited bots',
  'Government Market direct sales',
  'Government tender rules derived from the current implementation',
  'Government tender delivery, reward and penalty',
  'client-authored "suspicious" Government logs',
  'Coordinated trading and market manipulation',
  'Account compromise',
  'Corrections, balancing and economy integrity',
  'Mandatory consumer-law boundary',
  'market_buy_from_asset',
  'market_buy_from_livestock_asset',
  'market_buy_from_mining_asset',
  'market_buy_from_industrial_facility',
  'shop_auto_fill_cheapest',
  'auto_market_tick',
  'government_market_place_bid',
  'government_market_sync',
  'government_market_deliver_task',
  'unrelated valid paid entitlements',
];
for (const check of gateChecks) requireTextCI(gate, check, 'market gate');

const locales = [
  'en', 'tr', 'de', 'es', 'es_MX', 'fr', 'fr_CA', 'it', 'pt', 'pt_BR',
  'ru', 'ja', 'ko', 'zh', 'zh_Hans', 'zh_Hant', 'ar', 'nl', 'sv', 'nb',
  'pl', 'th', 'vi', 'uk', 'hi', 'id',
];
for (const locale of locales) {
  const pattern = new RegExp(`\\n\\s*${locale}:\\s*\\{`);
  if (!pattern.test(notice)) fail(`Notice is missing locale ${locale}`);
}

for (const required of [
  'PlayerGovernmentMarketRuleNotice',
  'tyconx-terms-of-service',
  'tycoonx-legal',
  "locale === 'ar'",
  "es_MX: 'es-MX'",
  "fr_CA: 'fr-CA'",
  "pt_BR: 'pt-BR'",
  "zh_Hans: 'zh-Hans'",
  "zh_Hant: 'zh-Hant'",
  'TycoonX player markets',
  'built-in shop auto-fill',
  'automatic market purchases',
  'Government direct sales',
  'Government tenders',
  'impossible or negative prices',
  'unauthorized destination slots',
  'Built-in TycoonX automation',
  'mandatory consumer',
]) requireText(notice, required, 'localized market notice');

requireText(layout, 'import PlayerGovernmentMarketRuleNotice', 'root layout');
requireText(layout, '<PlayerGovernmentMarketRuleNotice />', 'root layout');
if ((layout.match(/<PlayerGovernmentMarketRuleNotice \/>/g) ?? []).length !== 1) {
  fail('PlayerGovernmentMarketRuleNotice must be mounted exactly once in root layout');
}

for (const required of [
  '100/100',
  '25/25',
  'PlayerGovernmentMarketRuleNotice.tsx',
  'Player and Government markets',
  'Bank/credit/FX/stocks/crypto',
  'Exact next unfinished locale/document: None',
]) requireText(progress, required, 'localization progress');

for (const body of [notice, gate, progress]) {
  if (/\bTyconX\b/.test(body)) fail('Found prohibited displayed spelling TyconX');
  if (/TycoonX[^\n]{0,80}\bbeta\b/i.test(body)) fail('Found stale current-service beta wording');
}

const expectedLocaleOrder = [
  'tr', 'de', 'es', 'es_MX', 'fr', 'fr_CA', 'it', 'pt', 'pt_BR', 'ru',
  'ja', 'ko', 'zh', 'zh_Hans', 'zh_Hant', 'ar', 'nl', 'sv', 'nb', 'pl',
  'th', 'vi', 'uk', 'hi', 'id',
];
let last = -1;
for (const locale of expectedLocaleOrder) {
  const idx = notice.indexOf(`\n  ${locale}: {`);
  if (idx < 0) fail(`Cannot locate locale ${locale} in ordered notice map`);
  if (idx <= last) fail(`Locale ${locale} is out of required localization order`);
  last = idx;
}

if (!process.exitCode) {
  console.log('PASS: TycoonX player/Government market legal gate, localized notice, routing and progress checks passed.');
}
