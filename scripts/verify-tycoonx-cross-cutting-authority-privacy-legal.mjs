import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const gatePath = path.join(root, 'TYCOONX_CROSS_CUTTING_SERVER_AUTHORITY_PRIVACY_RELEASE_GATE.md');
const mapPath = path.join(root, 'TYCOONX_CODE_FIRST_GAMEPLAY_LEGAL_MAP.md');
const progressPath = path.join(root, 'TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md');

function read(file) {
  if (!fs.existsSync(file)) throw new Error(`Missing required file: ${file}`);
  return fs.readFileSync(file, 'utf8');
}

function requireText(haystack, needle, label) {
  if (!haystack.includes(needle)) throw new Error(`${label}: missing ${needle}`);
}

const gate = read(gatePath);
const map = read(mapPath);
const progress = read(progressPath);

for (const value of [
  'technical acceptance is not an automatic safe harbor',
  'unrelated valid purchased Diamonds, one-time 30-Day VIP and Lifetime VIP',
  'self-service profile privilege, entitlement, moderation and gameplay state',
  'public profile reads expose internal fields',
  'specialization_upgrade_refund_wallet_credit(...)',
  'gain_xp(...)',
  'award_collect_xp(...)',
  'rpc_add_xp(amount)',
  'rpc_add_energy(amount integer)',
  'energy',
  'hunger',
  'persona training',
  '_internal_shop_connected_fill(...)',
  '_internal_industrial_connected_fill(...)',
  'new_housing_tenant_cooldowns',
  'set_housing_tenant_cooldown',
  '_spawn_next_house_plot',
  'new_housing_foreclose_overdue()',
  'new_housing_daily_cron()',
  'notify_housing_event(...)',
  'invoke_daily_activity_news(...)',
  'invoke_regenerate_daily_activity(...)',
  'social_list_user_friends',
  'send_company_event_notification(...)',
  'notify_moderation_event(...)',
  'GDPR Article 5',
  'Article 25',
  'Article 32',
  'BGB § 327d',
  '§ 327i',
  'BGB § 307',
  'BGB § 327r',
  'TycoonX'
]) requireText(gate, value, 'cross-cutting gate');

for (const value of [
  'fail-closed server guard',
  'source-validated feature settlement',
  'server-owned',
  'client-authored anomaly flag',
  'ordinary invocation through that supported client flow',
  'Current owner-eviction settlement returns stored tenant deposit',
  'P0/P1 remediation verification and final release-readiness consolidation'
]) requireText(gate, value, 'remediation doctrine');

for (const value of [
  'Completed cluster: residual profile, privacy, Housing, energy, friends/activity/log authority',
  'rpc_add_xp(amount)',
  'rpc_add_energy(amount)',
  'new_housing_tenant_cooldowns',
  '_spawn_next_house_plot',
  'Positive remediation: persona training',
  'P0/P1 remediation verification and final release-readiness consolidation'
]) requireText(map, value, 'code-first map');

for (const value of [
  'Localized full documents:** 100/100, **100%**',
  'Localized hubs:** 25/25, **100%**',
  'Canonical English legal wording:** **99.6%**',
  'Full commercial/legal/payment readiness:** **82.5%**',
  'Overall project completion:** **97.5%**',
  'Exact next unfinished locale/document: None',
  'P0/P1 implementation remediation verification and final legal release-readiness consolidation'
]) requireText(progress, value, 'progress');

const forbiddenBrand = /\bTyconX\b/;
for (const [label, text] of [['gate', gate], ['map', map], ['progress', progress]]) {
  if (forbiddenBrand.test(text)) throw new Error(`${label}: legacy displayed brand spelling found.`);
}

const forbiddenLiveBeta = /TycoonX\s+(?:is|remains|currently is)\s+(?:in\s+)?beta/i;
for (const [label, text] of [['gate', gate], ['map', map], ['progress', progress]]) {
  if (forbiddenLiveBeta.test(text)) throw new Error(`${label}: live TycoonX incorrectly described as beta.`);
}

console.log('TycoonX cross-cutting authority/privacy/residual legal verifier passed.');