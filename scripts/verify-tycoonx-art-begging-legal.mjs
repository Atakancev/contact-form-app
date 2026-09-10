import fs from "node:fs";

const read = (path) => fs.readFileSync(path, "utf8");
const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const gate = read("TYCOONX_ART_BEGGING_RELEASE_GATE.md");
const notice = read("app/tycoonx-legal/ArtBeggingRuleNotice.tsx");
const layout = read("app/layout.tsx");
const progress = read("TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md");

const locales = [
  "tr", "de", "es", "es_MX", "fr", "fr_CA", "it", "pt", "pt_BR", "ru",
  "ja", "ko", "zh", "zh_Hans", "zh_Hant", "ar", "nl", "sv", "nb", "pl",
  "th", "vi", "uk", "hi", "id",
];

const gateChecks = [
  "Art auctions and art direct offers",
  "Begging",
  "social_create_art_post",
  "social_bid_art",
  "social_resell_art",
  "social_cancel_listing",
  "social_postoffice_send_offer",
  "direct_offers_art_enabled",
  "direct_offers_art_min_amount",
  "current-owner self-bid",
  "original `user_id`",
  "current seller/owner",
  "generic Art UPDATE authority",
  "highest_bidder_id",
  "Active-row DELETE/refund",
  "moderation can happen before or after publication",
  "HTTP 202",
  "positive amount",
  "prohibits donating to one's own Begging post",
  "large Begging donation",
  "not by itself proof of abuse",
  "account compromise",
  "prohibited real-money trading",
  "Mandatory-rights boundary",
  "P0 - Art current-owner self-bid",
  "P0 - Art generic UPDATE authority",
  "P0 - Active Art DELETE settlement",
  "P1 - Direct-offer recipient preferences",
];

for (const phrase of gateChecks) {
  assert(gate.includes(phrase), `Gate missing required phrase: ${phrase}`);
}

for (const locale of locales) {
  assert(
    new RegExp(`\\b${locale.replace("_", "_")}\\s*:`).test(notice),
    `Notice missing locale: ${locale}`,
  );
}

assert(notice.includes('locale === "ar" ? "rtl" : "ltr"'), "Arabic RTL handling missing");
assert(notice.includes('pathname === "/tyconx-terms-of-service"'), "Canonical Terms route gate missing");
assert(notice.includes('pathname.endsWith("/terms")'), "Localized Terms route gate missing");
assert(notice.includes("Art auctions and resales are genuine collecting and trading mechanics"), "Canonical Art rule missing");
assert(notice.includes("Begging is specifically designed for voluntary player assistance"), "Canonical Begging rule missing");
assert(notice.includes("A large offer alone does not prove abuse"), "Evidence fairness rule missing");
assert(notice.includes("before or after publication"), "Moderation timing rule missing");
assert(notice.includes("Mandatory consumer and other non-waivable rights remain unaffected"), "Mandatory-rights caveat missing");

assert(layout.includes('import ArtBeggingRuleNotice from "./tycoonx-legal/ArtBeggingRuleNotice";'), "Layout import missing");
assert(layout.includes("<ArtBeggingRuleNotice />"), "Layout mount missing");
assert((layout.match(/<ArtBeggingRuleNotice\s*\/>/g) ?? []).length === 1, "Art/Begging notice must be mounted exactly once");

assert(progress.includes("Four September 10 code-derived Terms clarifications"), "Progress clarification count not advanced");
assert(progress.includes("ArtBeggingRuleNotice.tsx"), "Progress missing Art/Begging notice");
assert(progress.includes("P0 - current-owner self-bid guard"), "Progress missing self-bid finding");
assert(progress.includes("P0 - generic Art UPDATE authority"), "Progress missing direct-write finding");
assert(progress.includes("P0 - active Art raw DELETE settlement"), "Progress missing delete/refund finding");
assert(progress.includes("P1 - direct-offer recipient preferences"), "Progress missing owner-preference finding");
assert(progress.includes("Player and Government markets"), "Progress missing next gameplay target");
assert(progress.includes("100/100, **100%**"), "Progress missing localized document metric");
assert(progress.includes("25/25, **100%**"), "Progress missing localized hub metric");
assert(progress.includes("Canonical English legal wording:** **98.0%"), "Progress canonical percentage mismatch");
assert(progress.includes("Full commercial/legal/payment readiness:** **94.1%"), "Progress readiness percentage mismatch");
assert(progress.includes("Overall project completion:** **95.8%"), "Progress overall percentage mismatch");

const displayedSources = [gate, notice, progress];
for (const source of displayedSources) {
  assert(!/\bTyconX\b/.test(source), "Displayed/legal source contains forbidden TyconX spelling");
  assert(!/TycoonX\s+beta/i.test(source), "Displayed/legal source contains stale TycoonX beta wording");
}

console.log(`TycoonX Art/Begging legal verification passed: ${locales.length} locales and implementation/legal safeguards present.`);
