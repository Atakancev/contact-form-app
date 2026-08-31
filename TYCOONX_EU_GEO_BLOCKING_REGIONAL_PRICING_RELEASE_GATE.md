# TycoonX EU Geo-Blocking & Regional Pricing Release Gate

Last reviewed: 2026-08-31
Owner: CK-Labs
Scope: TycoonX official webshop, legal/marketing pages, country selectors, regional prices, Apple/Google storefront messaging, Xsolla purchase links, payment acceptance, promotions, account-region checks, and support decisions involving country or region.

## Purpose

TycoonX may use genuine regional pricing and may show different future-purchase prices by storefront, country, currency, tax treatment, payment channel, and genuine promotional window where lawful. That commercial freedom must be kept separate from EU rules on access to online interfaces, automatic country redirects, and discrimination within accepted payment methods.

This gate exists because the EU Geo-Blocking Regulation treats these topics differently. In particular, online games are excluded from the Regulation's Article 4(1)(b) equal-general-conditions rule for copyright-content services, but that does **not** mean every location-based restriction is automatically lawful. The Regulation's online-interface and payment rules still require separate analysis.

This is an implementation and commercial-compliance gate. It does not replace the TycoonX Terms of Service, Purchases & Refunds Policy, provider rules, competition law, tax law, sanctions/export rules, or mandatory consumer rights.

## P0 rules

### 1. Do not confuse regional price differentiation with unlawful access blocking

CK-Labs may maintain different genuine regional price tables for future TycoonX purchases where lawful. Examples include:

- different Apple storefront prices;
- different Google Play storefront prices;
- different Xsolla webshop prices by country or currency;
- differences caused by VAT, sales tax, platform price tiers, payment-provider pricing, foreign-exchange movements, or local commercial strategy;
- different genuine promotional prices in different regions or sales windows.

However, do not treat the existence of different prices as permission to block access to another EU/EEA-facing TycoonX web interface merely because the visitor appears to live in another Member State.

### 2. Article 3 online-interface access applies separately

For EU customers, the Geo-Blocking Regulation generally prohibits blocking or limiting access to an online interface, or automatically redirecting a customer to a different country version, for reasons related to nationality, residence, or establishment unless a lawful exception applies.

For TycoonX, this matters to the **CK-Labs-controlled webshop and legal/marketing interfaces**, including non-audiovisual copyright-content services such as online games.

Release rules:

- Do not automatically force an EU customer from one TycoonX country/storefront webpage to another solely because of IP geolocation, account country, or residence without the required prior consent where Article 3 applies.
- If a customer consents to a redirect, keep the originally requested version accessible unless a specific legal requirement permits blocking it.
- A country selector can recommend the customer's likely region, but recommendation is different from an unavoidable redirect.
- If access must be blocked or limited to comply with a specific EU or Member-State legal requirement, give the clear and specific explanation required by applicable law.
- Do not label a visitor's mere access to another regional TycoonX page as fraud, abuse, or a Terms violation.

### 3. Online-game copyright-content carve-out is limited

Regulation (EU) 2018/302 Article 4(1)(b) excludes electronically supplied services whose main feature is access to or use of copyright-protected works or other protected subject matter from that specific equal-general-conditions rule. EU institutional guidance expressly identifies software and online games as examples.

Operational consequence for TycoonX:

- The Regulation does **not** generally force one harmonized TycoonX price across every EU country merely because a lower price exists elsewhere.
- CK-Labs can therefore retain genuine region-specific future-purchase prices for TycoonX game content where other law and platform rules permit it.
- Do **not** overread that carve-out. It is not a blanket exemption from Article 3 online-interface rules, Article 5 payment rules, unfair-commercial-practice rules, competition law, tax law, sanctions, platform requirements, or mandatory consumer rights.
- The phrase "regional pricing is allowed" must always mean "allowed where lawful for this product, interface, payment method, country, and provider configuration."

### 4. Accepted payment methods cannot be discriminated against merely by EU origin

Within the range of payment means that the trader has chosen to accept, Regulation (EU) 2018/302 Article 5 restricts different payment conditions based on nationality, residence, establishment, payment-account location, payment-service-provider location, or place of issue of the payment instrument within the Union when the statutory conditions are met.

TycoonX/Xsolla release rules:

- CK-Labs remains free to choose which payment methods, brands, categories, and currencies the CK-Labs-controlled checkout accepts, subject to provider rules and applicable law.
- Once a qualifying payment method/brand/category and currency are accepted, do not create a CK-Labs rule that rejects the otherwise qualifying payment merely because the card or payment account was issued in another EU Member State.
- Do not require a German-issued card merely because the displayed TycoonX webshop price is German, if the same accepted payment brand/category and accepted currency can lawfully process the transaction.
- Objective fraud, authentication, sanctions, AML/payment-provider, or security reasons may justify a payment hold or refusal where lawful. Record the real reason instead of coding nationality or residence as a proxy for fraud.
- A provider-side refusal by Apple, Google, Xsolla, a bank, card network, or PSP must be distinguished from a CK-Labs-created regional rejection rule.

### 5. Viewing another regional price is not the same as being eligible to purchase it

The following actions are not, by themselves, proof of abuse:

- visiting a different TycoonX country page;
- viewing a lower regional price;
- traveling temporarily;
- moving countries;
- using a device language that differs from the billing country;
- having an IP address that differs from the account/storefront country;
- using a payment account issued in another EU Member State.

CK-Labs may still enforce genuine, clearly disclosed eligibility conditions for a country-specific promotion or price where lawful. Any enforcement should be based on reliable transaction/storefront/payment facts, not one weak signal alone.

### 6. Regional-price abuse controls must be evidence-based and narrow

Potential abuse can include deliberately falsifying country, tax residence, billing information, storefront eligibility, or payment information to obtain a price or promotion the user is not entitled to receive.

If a transaction is suspected of regional-price abuse:

1. Preserve the authoritative Apple, Google, Xsolla, or CK-Labs transaction evidence.
2. Identify the actual eligibility rule for that offer.
3. Distinguish account country, storefront country, current IP location, payment-instrument country, tax location, and residence rather than treating them as interchangeable.
4. Consider legitimate travel, migration, dual-country payment arrangements, VPN use for ordinary privacy/security, or provider routing before concluding fraud.
5. Correct only the affected invalid transaction/value where possible.
6. Do not remove unrelated legitimately purchased Diamonds, active 30-Day VIP, or valid Lifetime VIP merely because another transaction used an invalid region.
7. Preserve mandatory refund, withdrawal, conformity, appeal, and consumer-remedy rights.

### 7. Region changes affect future purchases, not completed one-time prices

When a player genuinely changes country or storefront:

- future Diamond bundles, 30-Day VIP, or Lifetime VIP sales windows may use the currently applicable regional price, currency, tax, or availability;
- a completed one-time purchase is not retroactively repriced because the player later moves;
- a later move to a cheaper country does not create an automatic refund or price-match right for an earlier completed purchase;
- a later move to a more expensive country does not create an extra charge on an earlier completed one-time purchase;
- valid paid entitlements should not be revoked merely because the player's later region differs from the original purchase region, unless a separate lawful/provider basis requires action.

### 8. Lifetime VIP regional pricing remains compatible with limited sales windows

Lifetime VIP may have different prices in different genuine regional sales windows. The following must remain true:

- each price/window is real and supportable;
- countdowns and closing dates are genuine;
- the final price shown before confirmation governs the completed transaction, subject to lawful obvious-error correction;
- a lower Lifetime VIP price in another country or later sales window does not automatically create a refund or price-match right;
- access to a foreign regional webpage must not itself be treated as entitlement abuse;
- any refusal of a country-specific Lifetime VIP offer must be based on a lawful eligibility rule and not a fabricated scarcity or discriminatory pretext.

### 9. Taxes, VAT, and FX differences are not the same as individualized pricing

Country/storefront price differences caused by VAT, tax-inclusive display rules, currency conversion, platform price tiers, payment-provider conversion, or region-wide commercial pricing are not automatically personalized prices based on automated decision-making.

If CK-Labs ever prices a user individually based on that person's behavior, profile, purchase history, inferred willingness to pay, or other user-specific automated signals, use the separate personalized-pricing and automated-decision compliance path. Do not disguise individualized pricing as ordinary regional pricing.

### 10. Apple and Google storefront restrictions must be classified correctly

Apple and Google can control storefront availability, account-country rules, accepted payment methods, taxes, external-purchase programs, and regional product catalogs under their own platform systems.

CK-Labs must:

- preserve the provider's actual rule as provider-controlled evidence;
- avoid promising a purchase route that the provider does not make available;
- avoid presenting a provider rejection as though CK-Labs independently determined that the player committed fraud;
- keep CK-Labs-controlled webshop/interface rules separately compliant;
- avoid assuming that an App Store or Play Store country restriction automatically authorizes the same restriction on the CK-Labs/Xsolla web interface.

### 11. Xsolla merchant/payment role does not remove CK-Labs interface obligations

Where Xsolla is merchant of record or controls payment processing, Xsolla may determine transaction-specific payment methods, tax handling, fraud screening, or regional payment availability.

CK-Labs still controls its own TycoonX webpages, marketing claims, country selectors, redirect logic, entitlement delivery, and any CK-Labs-created regional eligibility rules. The implementation must therefore distinguish:

- CK-Labs interface/access behavior;
- Xsolla checkout/payment behavior;
- the contracting merchant for the transaction;
- the applicable regional price and tax display;
- the provider's reason for any refusal;
- CK-Labs entitlement action after authoritative payment status is known.

### 12. No entitlement over-correction

A regional-pricing investigation must never become a shortcut for broad account confiscation.

Examples:

- If one Diamond bundle was proven invalid because of deliberate regional-price fraud, that does not automatically invalidate a separate legitimate 30-Day VIP purchase.
- If one promotional purchase is unwound, a separate valid Lifetime VIP must remain intact unless it has its own lawful invalidity basis.
- If an Apple/Google/Xsolla provider reverses one transaction, remove/correct the corresponding entitlement or value only as permitted by law and reliable transaction mapping.
- If the player merely viewed another regional price and completed no invalid transaction, there is nothing to claw back.

## EU regional-pricing test matrix

Before changing regional price logic or Xsolla country routing, retain evidence for at least these scenarios:

1. **EU visitor opens another country's TycoonX webshop page**
   - original page remains accessible;
   - no forced redirect without required consent;
   - viewing alone is not flagged as fraud.

2. **User accepts a suggested regional redirect**
   - consent is recorded where required;
   - original interface remains reachable unless a lawful exception applies.

3. **Qualifying EU-issued payment instrument from another Member State**
   - no CK-Labs rejection solely because of issuing country when Article 5 conditions are satisfied;
   - provider rejection reason is recorded separately if the PSP/store refuses it.

4. **Different regional Diamond price**
   - price, currency, taxes, and eligibility are accurate;
   - completed purchase is not later repriced.

5. **Player travels or moves countries**
   - future prices can change;
   - existing valid entitlements remain mapped to authoritative transaction records.

6. **Proven deliberate regional-price abuse**
   - evidence supports the actual eligibility breach;
   - only affected invalid value is corrected where possible;
   - unrelated purchased value remains intact.

7. **Lifetime VIP limited-window sale differs by region**
   - each regional window is genuine;
   - no fake countdown or cross-region promise;
   - completed one-time price remains final subject to mandatory law.

## Evidence to retain

For each material regional-pricing configuration, retain a lightweight record of:

- country/storefront and currency;
- product IDs and provider channel;
- visible gross price and tax treatment where relevant;
- start/end date for promotions;
- whether CK-Labs, Apple, Google, or Xsolla controls the relevant restriction;
- redirect logic and consent behavior on CK-Labs-controlled web interfaces;
- accepted payment brands/categories/currencies for CK-Labs-controlled checkout;
- region-eligibility rule if a promotion is restricted;
- objective reason for any country/payment restriction;
- screenshots or test evidence for the affected interface;
- entitlement reconciliation result for refunds/reversals.

Do not collect or retain extra nationality/residence/payment data merely to prove compliance. Apply GDPR data-minimization and retention rules.

## Current legal checkpoint

Reviewed against the law and official guidance available on 2026-08-31:

- Regulation (EU) 2018/302 on unjustified geo-blocking, especially Articles 3, 4, and 5;
- Article 4(1)(b), which excludes electronically supplied copyright-content services from that specific equal-general-conditions rule;
- European Commission guidance stating that non-audiovisual copyright-content services such as software and online games remain subject to the Regulation's online-interface access rule even though the Article 4 price/general-conditions treatment is different;
- Article 5 payment non-discrimination within accepted payment means where its statutory conditions are satisfied;
- European Commission/CPC enforcement material on geo-blocking in digital services, illustrating that country-based interface and payment restrictions remain an active enforcement area.

Primary references:

- https://eur-lex.europa.eu/eli/reg/2018/302/oj
- https://digital-strategy.ec.europa.eu/en/news/10-key-features-geo-blocking-regulation
- https://digital-strategy.ec.europa.eu/en/policies/geoblocking

## Founder-protective interpretation

This gate does **not** require CK-Labs to charge the same TycoonX price in every EU country, accept every payment method, sell every promotion everywhere, ignore tax/storefront/provider restrictions, or permit deliberate region falsification. It protects CK-Labs by making each restriction defensible: distinguish price differentiation from interface blocking, distinguish provider rules from CK-Labs rules, require evidence before calling travel or cross-border payment fraud, and isolate any correction to the actually invalid transaction while preserving mandatory consumer rights and unrelated legitimate purchases.