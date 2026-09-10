import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const progress = read('TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');
const readiness = read('TYCOONX_FINAL_LEGAL_RELEASE_READINESS.md');

const failures = [];
const requireText = (haystack, needle, label = needle) => {
  if (!haystack.includes(needle)) failures.push(`Missing: ${label}`);
};

requireText(progress, 'Localized full documents:** 100/100, **100%**', '100/100 localized full documents');
requireText(progress, 'Localized hubs:** 25/25, **100%**', '25/25 localized hubs');
requireText(progress, 'Canonical English legal wording:** **99.6%**', 'canonical English progress');
requireText(progress, 'Full commercial/legal/payment readiness:** **82.5%**', 'commercial/legal/payment readiness');
requireText(progress, 'Overall project completion:** **97.7%**', 'overall project completion');
requireText(progress, 'Exact next unfinished locale/document: None.', 'no unfinished locale/document');
requireText(progress, 'implementation remediation verification against `TYCOONX_FINAL_LEGAL_RELEASE_READINESS.md`', 'next remediation target');

for (const gate of [
  'TYCOONX_COMPANY_SUPPLY_EXPORT_TENDER_RELEASE_GATE.md',
  'TYCOONX_UNION_TREASURY_GOVERNANCE_RELEASE_GATE.md',
  'TYCOONX_ART_BEGGING_RELEASE_GATE.md',
  'TYCOONX_PLAYER_GOVERNMENT_MARKETS_RELEASE_GATE.md',
  'TYCOONX_BANK_CREDIT_FX_STOCKS_CRYPTO_RELEASE_GATE.md',
  'TYCOONX_LOGISTICS_JOBS_COMPETITIONS_RELEASE_GATE.md',
  'TYCOONX_SOCIAL_UGC_RELEASE_GATE.md',
  'TYCOONX_CROSS_CUTTING_SERVER_AUTHORITY_PRIVACY_RELEASE_GATE.md',
]) {
  requireText(progress, gate, `progress references ${gate}`);
}

for (const token of [
  'profiles',
  'rpc_add_xp',
  'rpc_add_energy',
  'specialization_upgrade_refund_wallet_credit',
  '_internal_shop_connected_fill',
  '_internal_industrial_connected_fill',
  'new_housing_tenant_cooldowns',
  '_spawn_next_house_plot',
  'company_supply_request_update',
  'mm.company_id = mm.company_id',
  'social_art_posts',
  'user_stocks',
  'stock_transactions',
  'stock_price_history',
  'bulk_update_crypto_prices',
  'new_bank_debt_recovery_resolve_note',
  '_daily_task_consume_user_product_stock',
  'messages',
  'send_company_event_notification',
  'notify_moderation_event',
]) {
  requireText(readiness, token, `final readiness matrix covers ${token}`);
}

for (const principle of [
  'A technically accepted request is not automatically legitimate gameplay',
  'an abnormal/server-accepted state alone does not prove intentional exploitation',
  'Mandatory German/EU consumer',
  'one-time non-renewing 30-Day VIP',
  'Lifetime VIP is a limited-time promotional one-time offering',
  'Apple App Store purchases, Google Play purchases and the official CK-Labs TycoonX webshop using Xsolla',
  'Do not automatically erase unrelated legitimate wealth or paid entitlements',
  'No production database change is authorized by this document',
]) {
  requireText(readiness, principle, principle);
}

const requiredLocales = ['tr','de','es','es_MX','fr','fr_CA','it','pt','pt_BR','ru','ja','ko','zh','zh_Hans','zh_Hant','ar','nl','sv','nb','pl','th','vi','uk','hi','id'];
requireText(progress, requiredLocales.join(', '), 'required locale order');

const legacyDisplayedBrand = new RegExp(`\\b${'Tycon' + 'X'}\\b`);
if (legacyDisplayedBrand.test(progress.replace(/`tyconx`/gi, '')) || legacyDisplayedBrand.test(readiness)) {
  failures.push('Legacy displayed brand misspelling found in readiness/progress prose');
}

if (/TycoonX\s+(?:is|remains|currently|still)\s+(?:a\s+)?beta/i.test(progress + '\n' + readiness)) {
  failures.push('Live-service beta wording found');
}

if (failures.length) {
  console.error('TycoonX final release-readiness verifier FAILED');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('TycoonX final release-readiness verifier PASS');
