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
  'P0: self-service profile privilege, entitlement and moderation state',
  'P0 privacy: public profile reads expose internal fields',
  'specialization_upgrade_refund_wallet_credit(...)',
  'gain_xp(...)',
  'award_collect_xp(...)',
  '_internal_shop_connected_fill(...)',
  '_internal_industrial_connected_fill(...)',
  'send_company_event_notification(...)',
  'notify_moderation_event(...)',
  'technical acceptance is not an automatic safe harbor',
  'unrelated valid purchased Diamonds, one-time 30-Day VIP and Lifetime VIP',
  'GDPR Article 5',
  'Article 25',
  'Article 32',
  'BGB § 327d',
  '§ 327i',
  'BGB § 307',
  'TycoonX'
]) requireText(gate, value, 'cross-cutting gate');

for (const value of [
  'public profile view/RPC',
  'fail-closed server guard',
  'trusted internal caller',
  'client-authored anomaly flag',
  'mandatory privacy, consumer, notice, conformity, remedy and appeal rights remain intact'
]) requireText(gate, value, 'remediation doctrine');

requireText(map, 'cross-cutting server-authority/privacy', 'code-first map');
requireText(progress, 'Localized full documents:** 100/100, **100%**', 'progress');
requireText(progress, 'Localized hubs:** 25/25, **100%**', 'progress');
requireText(progress, 'Exact next unfinished locale/document: None', 'progress');

const forbiddenLiveBeta = /TycoonX\s+(?:is|remains|currently is)\s+(?:in\s+)?beta/i;
if (forbiddenLiveBeta.test(gate)) throw new Error('Gate incorrectly describes live TycoonX as beta.');

console.log('TycoonX cross-cutting authority/privacy legal verifier passed.');