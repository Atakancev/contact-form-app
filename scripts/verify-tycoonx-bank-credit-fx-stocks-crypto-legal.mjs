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

const gatePath = 'TYCOONX_BANK_CREDIT_FX_STOCKS_CRYPTO_RELEASE_GATE.md';
const noticePath = 'app/tycoonx-legal/BankCreditMarketsRuleNotice.tsx';
const layoutPath = 'app/layout.tsx';
const progressPath = 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md';
const mapPath = 'TYCOONX_CODE_FIRST_GAMEPLAY_LEGAL_MAP.md';

for (const file of [gatePath, noticePath, layoutPath, progressPath, mapPath]) {
  if (!fs.existsSync(path.join(root, file))) fail(`Missing required file ${file}`);
}
if (process.exitCode) process.exit(process.exitCode);

const gate = read(gatePath);
const notice = read(noticePath);
const layout = read(layoutPath);
const progress = read(progressPath);
const map = read(mapPath);

const gateChecks = [
  'direct `user_stocks` position authority',
  'client-insertable `stock_transactions`',
  'publicly insertable `stock_price_history`',
  'publicly executable price-mutating functions',
  'force_update_stock',
  'bulk_update_crypto_prices',
  'automate_stock_prices',
  'legacy bank rows remain client-writable economic state',
  'new_bank_debt_recovery_resolve_note',
  'new_bank_log_transaction',
  'new_bank_get_transactions_internal',
  'new_bank_get_quote_internal',
  'new_bank_get_collateral_candidates',
  'new_bank_get_professor_recovery_assets',
  'new_bank_push_notification',
  'new_bank_process_due_items',
  'new_bank_roll_forward_savings',
  'FX-account DELETE RLS requires ownership',
  'Diamond-funded slots',
  'one-time 30-Day VIP',
  'Lifetime VIP',
  'TycoonX-operated price movement',
  'Account compromise',
  'German/EU mandatory-rights boundary',
  'BGB § 327r',
  'does **not** certify',
];
for (const check of gateChecks) requireTextCI(gate, check, 'bank/market gate');

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
  'BankCreditMarketsRuleNotice',
  'tyconx-terms-of-service',
  'tycoonx-legal',
  "locale === 'ar'",
  "es_MX: 'es-MX'",
  "fr_CA: 'fr-CA'",
  "pt_BR: 'pt-BR'",
  "zh_Hans: 'zh-Hans'",
  "zh_Hant: 'zh-Hant'",
  'fictional simulation mechanics',
  'not real bank deposits',
  'TycoonX-operated price automation',
  'one-time 30-Day VIP',
  'Lifetime VIP',
  'mandatory consumer',
]) requireText(notice, required, 'localized bank/market notice');

requireText(layout, 'import BankCreditMarketsRuleNotice', 'root layout');
requireText(layout, '<BankCreditMarketsRuleNotice />', 'root layout');
if ((layout.match(/<BankCreditMarketsRuleNotice \/>/g) ?? []).length !== 1) {
  fail('BankCreditMarketsRuleNotice must be mounted exactly once in root layout');
}

for (const required of [
  '100/100',
  '25/25',
  'BankCreditMarketsRuleNotice.tsx',
  'Bank/credit/FX/stocks/crypto',
  'Logistics/jobs/competitions',
  'Exact next unfinished locale/document: None',
]) requireText(progress, required, 'localization progress');

for (const required of [
  'Bank/credit/FX/stocks/crypto',
  'user_stocks',
  'stock_transactions',
  'stock_price_history',
  'new_bank_debt_recovery_resolve_note',
  'Logistics/jobs/competitions',
]) requireTextCI(map, required, 'code-first gameplay map');

for (const body of [notice, gate, progress, map]) {
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
  console.log('PASS: TycoonX bank/credit/FX/stocks/crypto legal gate, localized notice, routing, mapping and progress checks passed.');
}
