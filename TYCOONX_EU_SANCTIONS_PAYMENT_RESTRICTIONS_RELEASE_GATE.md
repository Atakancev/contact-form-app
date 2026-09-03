# TycoonX EU/German Sanctions, Payment Restrictions & Regional Availability Release Gate

Last reviewed: 2026-09-03
Owner: CK-Labs
Status: Operational and commercial compliance gate for the live TycoonX service. This gate does not itself change the canonical player-facing Terms, Privacy Policy, Purchases & Refunds Policy, or Community Standards.

## Purpose

TycoonX is available through Apple App Store purchases, Google Play purchases, and the CK-Labs TycoonX webshop using Xsolla. Those channels may become unavailable in a country, for a payment method, for a bank, or for a specific person or entity because of sanctions, trade restrictions, provider compliance rules, payment-network rules, fraud controls, or other legal requirements.

This gate prevents two opposite mistakes:

1. illegally completing or restoring a transaction that must be blocked or restricted; and
2. treating a nationality, country, provider decline, travel pattern, VPN, or payment failure as automatic proof that a player is sanctioned, fraudulent, or abusing regional pricing.

The existence of an EU sanctions regime concerning a country, sector, person, entity, bank, or territory does **not** by itself mean every TycoonX consumer connected with that country must be blocked. The exact legal measure, listed party, ownership/control facts, payment route, provider rule, product, and transaction must be identified.

This gate must be read together with:

- `TYCOONX_EU_GEO_BLOCKING_REGIONAL_PRICING_RELEASE_GATE.md`;
- `TYCOONX_EU_VAT_TAX_MERCHANT_RELEASE_GATE.md`;
- `TYCOONX_EU_GERMAN_PAYMENT_METHOD_FEE_SURCHARGE_RELEASE_GATE.md`;
- `TYCOONX_XSOLLA_REFUND_CHARGEBACK_RELEASE_GATE.md`;
- `TYCOONX_GOOGLE_PLAY_2026_PAYMENT_TRANSITION_GATE.md`;
- `TYCOONX_THIRD_PARTY_PROVIDER_CONTINUITY_OUTAGE_RELEASE_GATE.md`;
- `TYCOONX_ACCOUNT_SUSPENSION_COMPROMISE_TERMINATION_RELEASE_GATE.md`;
- `TYCOONX_PAYMENT_ENTITLEMENT_RELEASE_GATES.md`.

## 1. EU sanctions baseline

EU restrictive measures can include asset freezes, prohibitions on making funds or economic resources available directly or indirectly to listed persons or entities, sectoral restrictions, transaction bans, service restrictions, export/import restrictions, and anti-circumvention rules.

For example, Council Regulation (EU) No 269/2014 Article 2 requires the freezing of funds and economic resources belonging to, owned, held, or controlled by listed persons and entities and prohibits making funds or economic resources available, directly or indirectly, to or for their benefit. Other sanctions regimes can use different wording or impose different restrictions.

Release rules:

- Never assume that one sanctions regulation is the complete legal basis for every country, person, bank, or transaction.
- Check the **current** measure and current consolidated list at the time the restriction matters.
- Check whether a non-listed entity is owned or controlled by a listed person where the applicable regime requires that analysis.
- Do not knowingly participate in circumvention or structure a transaction to defeat a legal restriction.
- Do not hard-code a permanent list of banned nationalities or countries into TycoonX legal logic merely because a country currently appears in a sanctions regime.
- If a genuine sanctions question cannot be resolved from the applicable rule and reliable provider evidence, escalate before fulfillment, refund, release of funds, or other value movement.

For German operations, the competent authority depends on the measure. Financial-sanctions questions may involve the Deutsche Bundesbank, while export-control and embargo questions can involve BAFA. Do not treat a generic FAQ as a substitute for a transaction-specific authorization where one is legally required.

## 2. Country or nationality is not a sanctions match

A player's nationality, residence, language, current IP address, Apple storefront, Google Play country, Xsolla country, payment-card country, bank country, or use of a VPN is not by itself proof that the player is a sanctioned person or that the transaction is prohibited.

Do not automatically label a player as `fraud`, `sanctions_evasion`, `chargeback_abuse`, or `regional_price_abuse` merely because:

- the player is Russian, Belarusian, Iranian, Chinese, Turkish, or from any other country associated with a sanctions or trade-control regime;
- the player travels or moves country;
- the player's IP differs from the billing or storefront country;
- a bank or provider declines a payment;
- Apple, Google, or Xsolla does not offer a payment method in the player's location;
- the player has a legitimate account or payment relationship in more than one country.

Where a legal or provider restriction is country-based, record the exact source and scope of that restriction rather than converting it into an accusation about the player's conduct.

## 3. Risk-based screening, not blanket KYC

CK-Labs should use a proportionate, risk-based compliance process suitable for an indie consumer game. This gate does not require CK-Labs to collect passports, national ID documents, source-of-funds evidence, or other high-risk identity data from every TycoonX player.

A compliance review may be justified where there is a concrete trigger, for example:

- a reliable provider message identifies a sanctions or restricted-country issue;
- a payment provider reports a sanctions/list screening hit;
- a transaction involves a specifically restricted bank, entity, territory, or payment route;
- reliable information indicates a possible listed-person or ownership/control match;
- CK-Labs receives a binding authority instruction;
- the transaction is unusually structured in a way that creates a credible circumvention concern.

When a review is needed:

1. preserve the authoritative transaction/provider evidence;
2. identify the actual legal or provider restriction;
3. distinguish person-level, entity-level, bank-level, territory-level, sectoral, and provider-only restrictions;
4. assess false-positive risks such as shared names, transliteration, stale lists, travel, roaming, or provider geolocation error;
5. collect only the additional data reasonably necessary for that review;
6. document the decision and its source;
7. apply the narrowest lawful restriction that resolves the issue.

## 4. GDPR and sanctions screening

Sanctions screening and payment-compliance data can be personal data. Do not create an unlimited sanctions dossier merely because compliance is important.

For each screening activity, CK-Labs must identify the applicable GDPR lawful basis, purpose, data categories, provider/recipient, retention period, and access controls. Where processing is necessary to comply with a binding legal obligation, document the actual obligation. Where another lawful basis is relied on, document that basis separately rather than calling every fraud or payment check a legal obligation.

Operational safeguards:

- minimize names, country indicators, payment metadata, and screening results to what is actually needed;
- restrict access to compliance evidence;
- preserve false-positive and manual-review outcomes so the same player is not repeatedly harmed by the same resolved mismatch;
- do not expose watchlist, anti-fraud, bank, or reporter details to other players;
- do not retain raw identity documents indefinitely merely because they were once supplied for a review;
- keep sanctions evidence retention separate from ordinary marketing, analytics, and personalization.

## 5. Transaction state model

Sanctions and regional restrictions must not be collapsed into a generic `failed payment` or `fraud` state. At minimum, implementation and support should distinguish states equivalent to:

- `allowed`;
- `provider_unavailable`;
- `compliance_review`;
- `legally_prohibited`;
- `payment_failed`;
- `payment_pending`;
- `payment_completed`;
- `payment_reversed_or_refunded`.

These labels can be implemented under different internal names. The legal distinction matters more than the literal field name.

Rules:

- No paid entitlement should be granted solely because the client says payment succeeded.
- A provider decline is not proof of fraud.
- `compliance_review` is not the same as a final legal prohibition.
- A temporary provider outage is not a sanctions determination.
- If payment is genuinely pending, do not permanently deny the player while also treating the transaction as completed.
- If payment is genuinely completed and authoritative provider records support it, do not later reclassify it as prohibited merely because a current country price or current storefront state differs.

## 6. Apple App Store

Apple controls App Store storefront availability and Apple In-App Purchase availability. A customer's Apple Account country or region determines the storefront from which the customer can purchase content.

CK-Labs must:

- use Apple's authoritative storefront and transaction records for Apple purchases;
- distinguish an Apple-controlled legal/regulatory availability restriction from a CK-Labs fraud finding;
- avoid using IP location as a substitute for Apple's storefront authority for an Apple In-App Purchase;
- avoid promising availability in a country where Apple does not make the app or product available;
- preserve the historical transaction record for completed purchases even if Apple later changes country availability.

Apple currently states that an app can become unavailable in a country or region because of legal or regulatory requirements. Apple also states that users who previously downloaded an app from a country that is later deselected can generally continue receiving updates and can redownload it from purchase history while the necessary contract remains active. Do not override that provider behavior with an unnecessary CK-Labs account punishment.

If Apple removes a TycoonX In-App Purchase from sale in a country, that prevents or limits future sales through that Apple storefront. It does not by itself authorize CK-Labs to delete a valid existing Diamond balance, shorten an existing 30-Day VIP, or add an expiry to valid Lifetime VIP.

## 7. Google Play

Google maintains separate country, billing, sanctions, and payment restrictions. Those rules can be more specific than a general sanctions statement and can change over time.

Current Google guidance says that users in certain sanctioned regions may continue using Google Play and downloading free apps but may be unable to make purchases, and that previously downloaded or purchased content should generally remain accessible. Google also publishes a separate Russia/Belarus billing notice with more specific restrictions, including failed purchase attempts in Russia, continued availability of free apps, and limits affecting paid-app access and updates.

Release rules:

- Follow the **most specific current Google rule** applicable to the actual user, product, storefront, and payment flow.
- Do not treat a Google billing error caused by country or sanctions restrictions as proof of payment fraud.
- Do not fabricate a completed purchase when Google reports that no transaction was processed.
- Do not promise that every prior Google purchase can always be redownloaded in every restricted region if Google's current rule says otherwise.
- Do not delete a TycoonX server entitlement merely because Google currently prevents a new purchase, unless the entitlement itself is invalid, reversed, or must be restricted under applicable law/provider rules.
- Preserve Google order and purchase-token evidence needed to distinguish a failed attempt from a completed or refunded transaction.

## 8. Xsolla webshop

Xsolla can impose country, sanctions, payment-method, fraud, and regional catalog restrictions under its own rules and under applicable law. Xsolla's current Publisher Account Terms state that its license is not valid in jurisdictions subject to specified trade or economic sanctions and that Xsolla may suspend or terminate access where a publisher operates in a restricted jurisdiction or is otherwise subject to sanctions.

Xsolla also supports regional catalog restrictions, where item availability can be determined from a supplied country value or, if not supplied, from IP-based country detection. Xsolla payment documentation includes a restricted-country payment error (`0003-0003`).

CK-Labs must therefore distinguish:

- the country source used for catalog selection;
- a provider-side restricted-country response;
- a provider fraud decision;
- a CK-Labs regional-pricing eligibility rule;
- an actual legal sanctions prohibition;
- a simple technical/payment failure.

Do not treat Xsolla's IP-derived country as conclusive proof of residence, nationality, tax residence, or sanctions status. A restricted-country error should normally stop that payment attempt and trigger the appropriate provider/support path, not an automatic TycoonX fraud ban.

## 9. Diamonds

Purchased Diamonds are a TycoonX digital entitlement. Sanctions or provider restrictions must not be used as a blanket justification to rewrite unrelated valid Diamond balances.

Rules:

- A future purchase restriction does not automatically confiscate Diamonds validly obtained before the restriction.
- A failed or blocked purchase does not create Diamonds.
- A reversed, refunded, or invalid transaction may justify transaction-scoped correction of value actually granted from that transaction, subject to the Purchases & Refunds Policy and mandatory law.
- Do not create a negative Diamond balance merely because a player's country later becomes restricted or a provider changes its rules.
- Do not assume that non-transferable in-game Diamonds are or are not `economic resources` for every sanctions regime. If a genuine listed-person issue creates that legal question, stop the affected value movement and obtain transaction-specific compliance guidance.

## 10. One-time 30-Day VIP

The TycoonX 30-Day VIP is a **one-time 30-day entitlement**, not an automatically renewing monthly subscription.

A sanctions, bank, country, provider, or payment-method restriction:

- does not restart an already valid 30-Day VIP;
- does not pause or extend it automatically;
- does not shorten it automatically;
- does not create a second 30-Day VIP;
- does not convert it into a recurring subscription.

If the purchase itself is later authoritatively refunded, reversed, or found invalid, apply the existing transaction-specific entitlement rules and mandatory consumer protections.

## 11. Lifetime VIP

Lifetime VIP is a one-time entitlement offered only during selected genuine promotional sales windows. It may be withdrawn from future sale, may never return, and creates no expectation that Lifetime VIP will remain continuously available for purchase.

Sanctions, provider, bank, or regional availability changes can prevent **future** Lifetime VIP sales in a country or channel where required. They do not by themselves:

- add an expiry date to a valid Lifetime VIP;
- downgrade valid Lifetime VIP into 30-Day VIP;
- revoke Lifetime VIP merely because the player's residence, IP, storefront, or payment options later change;
- create a refund or price-match right merely because another country or later sales window has a different price.

If continuing a specific entitlement would itself be prohibited by applicable law, CK-Labs must document that specific legal basis and apply only the restriction required, preserving non-waivable consumer remedies.

## 12. Refunds, reversals, and chargebacks

A sanctions or provider restriction can affect whether and how money may be returned. Do not assume that `refund everything immediately` is always lawful where a genuine listed-person or blocked-funds issue exists.

Rules:

- distinguish a provider refusal, refund, reversal, chargeback, and sanctions hold;
- never invent a chargeback because payment was blocked before completion;
- never accuse a player of chargeback abuse solely because a provider reversed a transaction for compliance reasons;
- if Apple, Google, or Xsolla controls the refund, follow the applicable provider process and preserve the provider's authoritative status;
- if a refund or release of funds might itself be prohibited or require authorization, do not improvise a workaround or alternate recipient;
- preserve mandatory consumer remedies to the extent legally available and use the competent provider/authority route where a legal restriction limits the normal refund mechanism.

## 13. Regional pricing, promotions, and coupons

Sanctions compliance does not suspend the normal TycoonX pricing and promotion rules.

CK-Labs may continue to use lawful regional prices, currencies, tax treatment, future Diamond bundle prices/content, 30-Day VIP prices, Lifetime VIP sales-window prices, and genuine promotions for future purchases.

However:

- do not use a sanctions label as a pretext for misleading regional price discrimination;
- do not fabricate scarcity, crossed-out prices, countdowns, or country-specific promotions;
- a provider or legal restriction in one country does not create an automatic price-match right in another country;
- a later price reduction does not automatically create a refund or credit for an earlier completed one-time purchase, except where mandatory law requires otherwise;
- a later price increase does not create an extra charge on an already completed one-time purchase;
- the final total price shown before confirmation governs the completed transaction, subject to lawful obvious-error correction and mandatory law;
- total consumer prices and mandatory taxes/fees must still be displayed as required.

## 14. VPNs, travel, and circumvention

A VPN is not automatically evidence of sanctions evasion or regional-price abuse. Players can use VPNs for privacy, security, travel, carrier routing, or other legitimate reasons.

At the same time, CK-Labs must not knowingly assist circumvention of a legal or provider restriction. Support, help pages, and staff must not tell a player to:

- spoof or falsify country or residence;
- use another person's identity or payment method;
- route through a third country specifically to defeat a sanctions restriction;
- create a false Apple/Google/Xsolla country profile;
- submit false billing or tax information;
- use a VPN specifically to bypass a legal restriction.

If a provider offers an official lawful country-change or alternative-payment process, CK-Labs can point the user to that official process without representing that it will necessarily succeed.

## 15. Existing entitlements when future sales become unavailable

Future purchase availability and existing entitlement validity are separate questions.

When a country, bank, payment method, provider, or storefront becomes unavailable:

1. stop or hide future purchases only to the extent required by the current legal/provider rule;
2. preserve completed transaction evidence;
3. preserve valid existing entitlements unless a specific legal/provider rule requires otherwise;
4. keep restore/reconciliation paths available where lawful and technically possible;
5. communicate material service or entitlement consequences where mandatory law or fairness requires it;
6. do not silently rewrite historical prices or transaction dates;
7. preserve statutory conformity, update, termination, refund, and damages remedies where applicable.

## 16. Fraud, account compromise, and sanctions are separate findings

A compromised account can create unusual geography or payment behavior. Before concluding sanctions evasion or regional-price fraud, consider whether the account may have been taken over.

A compliance restriction must not automatically trigger permanent account termination unless the facts independently justify it. Where safe and lawful, CK-Labs should prefer a transaction/payment restriction over a whole-account ban when only the purchase route is affected.

A confirmed exploit, fraud scheme, or deliberate falsification can still be handled under the Terms and account-enforcement rules. The evidence must support that separate finding.

## 17. Provider outage, rule change, or replacement

Apple, Google, Xsolla, banks, card networks, fraud vendors, identity providers, or infrastructure providers may change or suspend service because of sanctions, law, risk policy, technical outages, or commercial decisions.

CK-Labs may replace or discontinue a provider where lawful. A provider change does not by itself cancel a valid TycoonX entitlement. Migration logic must remain idempotent and must not duplicate or erase Diamonds, 30-Day VIP, or Lifetime VIP.

If the provider gives only a generic `restricted` or `unavailable` result, do not invent a legal explanation. Record it as a provider-controlled restriction unless and until the actual basis is known.

## 18. Business sale, merger, reorganization, or successor operator

A future sale, merger, reorganization, financing, or successor operator does not remove applicable sanctions obligations. Before transferring payment relationships, entitlement records, or funds, the successor/provider relationship must be checked under the applicable compliance rules.

A business transfer does not by itself erase valid Diamonds, active 30-Day VIP, or valid Lifetime VIP. Where the Service continues, valid entitlements should continue subject to the Terms and mandatory law. If a legal restriction prevents a specific transfer or payment, document and isolate that restriction rather than deleting unrelated player rights.

## 19. Operational evidence packet

For a material sanctions or restricted-payment decision, preserve an evidence packet containing, where applicable:

- date/time and responsible reviewer;
- user/account identifier;
- transaction/order/provider ID;
- product and entitlement involved;
- payment state before and after review;
- storefront/country source and whether it came from account setting, provider, explicit catalog country, or IP fallback;
- exact provider error or compliance status;
- applicable sanctions/regulatory source and review date;
- listed-person/entity match data only to the extent necessary;
- ownership/control analysis where relevant;
- false-positive checks;
- any provider or competent-authority communication;
- entitlement action taken;
- refund/reversal status;
- player notice/support response;
- retention/deletion date for compliance evidence.

## 20. Regression scenarios

Release/support QA should cover at least these scenarios:

1. Apple purchase unavailable in a country for provider reasons, no fraud flag created.
2. Google Play purchase attempt in a restricted billing country fails with no entitlement granted.
3. Xsolla returns `0003-0003`, transaction remains unfulfilled and player is not automatically banned.
4. Player travels and IP differs from storefront country, no sanctions conclusion from IP alone.
5. Player uses a VPN but transaction and provider records are otherwise valid, no automatic evasion finding.
6. Similar-name sanctions screening hit is manually cleared as a false positive.
7. Confirmed listed-party match is isolated for compliance review before value movement.
8. Provider restriction ends later, future purchases resume without replaying old purchase webhooks.
9. Completed Diamond purchase remains historically recorded after country availability changes.
10. Failed Diamond purchase grants zero Diamonds.
11. Refunded Diamond purchase corrects only transaction-linked value where lawful.
12. Valid one-time 30-Day VIP is not restarted by a country change.
13. Valid one-time 30-Day VIP is not shortened by a provider outage.
14. Valid Lifetime VIP does not gain an expiry because future Lifetime VIP sales are blocked in that country.
15. Future Lifetime VIP sales window is unavailable in one country without fabricating a prior-purchase refund right.
16. Provider compliance reversal is not mislabeled as player chargeback abuse.
17. Account compromise explains unusual country signals, account-security workflow takes priority over an unsupported fraud accusation.
18. Xsolla IP fallback chooses the wrong country due to travel, manual support distinguishes catalog source from residence.
19. Apple removes the app from a country, previously downloaded users are handled according to Apple's current update/redownload rules.
20. Google-specific restricted-country rules are applied instead of assuming one universal sanctions behavior.
21. A sanctions hold exists on funds, Support does not improvise a refund to a third party.
22. Promotion coupon is country-limited for a lawful objective reason and the condition is clearly disclosed.
23. A lower foreign regional price is viewed but not purchased, no abuse sanction occurs.
24. Deliberately falsified billing/country information is supported by evidence before enforcement.
25. Provider outage shows a generic restriction error, Support does not claim the user is legally sanctioned without evidence.
26. Business successor migration preserves valid entitlements and does not replay purchases.
27. Free/promotional/test grant is distinguished from a paid purchase and from sanctions/payment status.
28. Permanent service discontinuation follows the separate shutdown gate and mandatory consumer remedies rather than using sanctions as a blanket waiver.

## 21. Public-document and localization trigger

This gate is primarily an internal operational control. It does not by itself require a new player-facing sanctions clause or reopening all localized legal documents.

Reopen the canonical English document first if CK-Labs materially changes the public legal relationship, for example by introducing a new country eligibility promise, a new consumer-facing sanctions restriction, a new data-processing purpose not already covered, or a material entitlement rule. Then synchronize every affected localized document in the required locale order and update `TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md`.

Do **not** add a broad clause saying CK-Labs may confiscate any entitlement whenever `sanctions` are mentioned. Such a clause would be unnecessarily broad and could conflict with mandatory consumer rights.

## 22. Release blockers

Treat the following as blockers for the affected purchase or region until resolved:

- authoritative provider or legal evidence shows the transaction is prohibited;
- a credible listed-person/entity match has not been resolved;
- payment is still pending but the client would grant the entitlement;
- support is instructed to tell users how to evade a legal/provider country restriction;
- a country/provider block would automatically wipe unrelated valid entitlements;
- sanctions/provider failures are automatically recorded as fraud or chargeback abuse;
- country/IP is treated as conclusive sanctions identity evidence;
- a refund would move funds in a way that may itself be legally prohibited and no lawful route has been confirmed;
- a material country restriction is deployed without preserving transaction and entitlement evidence;
- provider rules are hard-coded as permanent law without a revalidation date.

## 23. Current reference checkpoint

Revalidate these sources when a material restriction or provider rule changes:

- EUR-Lex, Council Regulation (EU) No 269/2014, current consolidated Article 2 and applicable amendments: https://eur-lex.europa.eu/eli/reg/2014/269/oj
- European Commission EU sanctions guidance and due-diligence materials: https://commission.europa.eu/topics/eu-solidarity-ukraine/eu-sanctions-against-russia-following-invasion-ukraine_en
- Deutsche Bundesbank financial sanctions: https://www.bundesbank.de/en/service/financial-sanctions
- BAFA embargo and Russia sanctions information: https://www.bafa.de/
- Apple App Store availability: https://developer.apple.com/help/app-store-connect/manage-your-apps-availability/manage-availability-for-your-app-on-the-app-store
- Apple In-App Purchase availability: https://developer.apple.com/help/app-store-connect/manage-in-app-purchases/set-availability-for-in-app-purchases
- Google Play international sanctions guidance: https://support.google.com/googleplay/android-developer/answer/11958934
- Google Play Russia/Belarus billing guidance: https://support.google.com/googleplay/android-developer/answer/11950272
- Xsolla Publisher Account Terms: https://xsolla.com/terms-of-use
- Xsolla regional sale restrictions: https://developers.xsolla.com/items-catalog/catalog-features/regional-restrictions/
- Xsolla payment errors: https://developers.xsolla.com/dev-resources/references/errors/payment-errors/

Reference status checked on 2026-09-03. Sanctions lists, provider availability, payment rules, and country restrictions can change quickly. Revalidate the actual rule before relying on this file for a real blocked transaction.
