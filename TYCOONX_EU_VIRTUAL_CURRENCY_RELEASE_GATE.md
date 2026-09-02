# TycoonX EU/EEA Virtual Currency Release Gate

**Status:** P0 consumer-law / monetization gate  
**Last reviewed:** September 2, 2026

**Applies to:** purchased TycoonX Diamonds and any in-game digital content or service that can be acquired with Diamonds that are directly or indirectly purchasable with real-world money.

**Reference position:** Consumer Protection Cooperation (CPC) Network, *Key Principles on In-Game Virtual Currencies*, published March 21, 2025 and coordinated by the European Commission. The CPC Network describes these principles as minimum requirements and best practices under EU consumer law. The document also states that its recommendations are non-exhaustive and that following them is not by itself a guarantee of legal compliance. The principles draw in particular on the Unfair Commercial Practices Directive, Consumer Rights Directive and Unfair Contract Terms Directive.

This checklist is an implementation gate. It does not replace transaction-specific advice where national law, platform rules, or the identity of the contracting merchant changes the analysis. The CPC principles are an enforcement position and compliance benchmark, not a new standalone statute. Where a recommendation goes beyond an unambiguous black-letter requirement, TycoonX treats it as the default EU/EEA release position unless a documented legal review supports a different implementation.

## 1. Real-money price transparency

Before an EU/EEA consumer commits to a transaction:

- Show the real-world monetary price of a paid Diamond package clearly and prominently.
- Where in-game digital content or a service is offered for Diamonds that can be bought with real money, show the real-world monetary price information required for that content/service clearly enough for the player to understand the true cost.
- If a purchasable virtual currency must first be exchanged into another purchasable virtual currency before the item or service can be obtained, the real-world monetary price must not disappear behind that extra conversion.
- Do not make the real cost harder to understand by requiring several paid virtual-currency conversions before the intended purchase.
- Where a real-money equivalent is displayed, calculate it from an objective **full-cost acquisition reference**: what the consumer would have to pay in full to obtain the required amount of purchasable virtual currency for that item or service in the relevant purchase context.
- Do **not** calculate the displayed real-money equivalent from the cheapest per-Diamond rate in a large bundle, a starter pack, a temporary promotion, a bonus allocation, a loyalty reward, or another quantity discount if the consumer would have to spend more than the displayed amount to obtain the required Diamonds.
- Free, promotional, event, compensation, tester/review, or gameplay-earned Diamonds do not by themselves change the objective real-money price information for an item or service that is also purchasable with paid Diamonds.
- A player's existing Diamond balance must not be used to relabel the full price of an item as only the cost of a small top-up if doing so would misrepresent the item's objective real-money price. A separate `you need X more Diamonds` message may be shown if it is clearly distinguished from the item's price.
- Where Apple, Google Play and Xsolla have genuinely different local prices because of storefront, country, currency, VAT/tax or provider pricing, calculate and display the relevant channel/context price rather than presenting a fictional universal conversion rate.
- Mandatory taxes and unavoidable charges remain subject to the normal TycoonX total-price rules and the actual Apple, Google, Xsolla, or other contracting checkout.

### Example

If an item costs **750 Diamonds**, and the only ordinary packages are 660 Diamonds for €5.99 and 1,400 Diamonds for €11.99, TycoonX must not advertise the item as costing `€6.42` merely by multiplying 750 by the cheapest per-Diamond rate from the 1,400-Diamond pack. That is not the amount the consumer actually has to pay in full to acquire enough Diamonds in that purchase context.

## 2. Avoid layered or mixed purchasable currencies

The CPC principles specifically warn against mixing different purchasable in-game virtual currencies and against forcing consumers through several currency exchanges before reaching the intended purchase.

Treat the following as EU/EEA release blockers unless a documented legal review confirms the exact design is compliant and not misleading:

- introducing a second real-money-purchasable intermediary currency whose practical purpose is to obscure the price of content or services;
- requiring Diamonds to be exchanged into another paid token before an ordinary paid item can be obtained where the extra layer does not have a clear consumer-facing justification;
- mixing multiple separately purchasable virtual currencies on the same purchase surface in a way that makes the real-money cost difficult to compare or understand; or
- chaining several conversions, bonuses, multipliers or temporary rates so the player cannot readily understand the real-world cost.

Legitimate gameplay currencies that cannot be purchased for real money are not automatically prohibited merely because they coexist with Diamonds. The risk is highest where several currencies are directly or indirectly purchasable and are used to detach the spending decision from real money.

## 3. Do not force unwanted surplus virtual currency

The CPC Network's stated default is that consumers should not be forced to spend more real money on virtual currency than is needed for the content or service they intend to obtain.

For EU/EEA monetization:

- do not structure package values deliberately so a player must buy materially more paid virtual currency than needed for the selected item or service;
- do not make bundle-only purchasing the sole practical route where it repeatedly forces unwanted surplus currency;
- provide a practical way to obtain the **specific amount needed**, or an equivalent direct-purchase route for the item/service, where the CPC principle applies to the design;
- if platform or provider constraints make a specific-amount purchase technically impossible, do not assume that the constraint automatically makes a forced-surplus design compliant; document the constraint and obtain a legal/compliance review before release;
- do not use leftover balances as a pressure mechanism for another purchase; and
- do not design price ladders so the apparent purpose of package mismatch is to strand paid value and induce repeat spending.

This gate does not prohibit genuine bundle discounts, bonuses, gameplay-earned Diamonds, or ordinary package choices **in addition to** a compliant way to make the intended purchase. It also does not state that every small residual balance is automatically unlawful. The concern is a design that materially distorts the consumer's decision or systematically forces unnecessary paid currency.

### Example

An item costs 750 Diamonds, while the player can buy only 660 or 1,400 Diamonds and cannot buy the missing 90 or buy the item directly. Under the CPC position this is a release-risk pattern and should be redesigned or specifically reviewed, rather than treated as compliant simply because the 1,400-Diamond package is clearly priced.

## 4. Purchased Diamonds and withdrawal rights

For EU/EEA consumers:

- Do **not** treat the mere crediting of purchased Diamonds as immediately supplied digital content that automatically extinguishes the statutory withdrawal right.
- Where the statutory 14-day withdrawal right applies to a purchase of in-game virtual currency, unused purchased Diamonds must remain eligible for that right during the statutory period.
- Do not use a blanket `no refunds` or `all withdrawal rights waived` checkbox for Diamonds, 30-Day VIP, Lifetime VIP, and later Diamond spending as though they are legally identical transactions.
- Apple, Google, Xsolla, or another provider may control the request channel, merchant-of-record process, or refund mechanics for a specific transaction. That allocation of roles does not remove a mandatory consumer right.
- If purchased Diamonds have already been spent, transferred, or exchanged for digital content/services, determine the consequences of withdrawal from mandatory law and the actual transaction history. Do not invent a blanket rule that silently removes statutory rights.

## 5. Spending Diamonds on digital content or services

A later exchange of purchased Diamonds for digital content or services can itself be a consumer transaction subject to mandatory EU consumer rules.

Before that transaction where required:

- present the main characteristics of the item/service;
- present the required real-money price information as well as the Diamond amount;
- provide required trader identity/contact, payment/delivery, conformity/legal-guarantee, and withdrawal information;
- if relying on the digital-content early-performance exception, obtain the legally required express consent and acknowledgement separately from the act of purchasing where required and provide the required contract confirmation;
- do not assume that acceptance of the general TycoonX Terms alone replaces transaction-specific consent where the law requires separate consent; and
- preserve enough authoritative transaction history to determine what was purchased with paid Diamonds, promotional Diamonds and gameplay-earned Diamonds when a lawful remedy depends on that distinction.

## 6. Fair contract terms, value changes and access to paid content

The existing TycoonX founder-protective rules remain valid only within mandatory consumer-law limits.

CK-Labs may still:

- correct duplicate or accidental Diamond grants;
- reverse value tied to a refunded, charged-back, fraudulent, duplicated, or otherwise invalid payment;
- correct technical corruption, hacks, exploits, or unauthorized entitlement duplication;
- rebalance the game economy and future gameplay mechanics for legitimate reasons, subject to mandatory digital-product rules; and
- restrict or terminate accounts for serious or repeated Terms violations under the applicable enforcement rules.

CK-Labs must not use those protections as an unfair unilateral right to remove legitimately purchased Diamonds, paid content, or access at any time for any reason. In particular:

- do not reserve a boundless right to withdraw purchased virtual currency, content or services without a valid reason and the safeguards required by law;
- do not use a Terms clause to deny or materially restrict statutory withdrawal, conformity, repair, replacement, price-reduction, termination, refund or damages rights that cannot be waived;
- do not remove paid features or content merely because doing so is commercially convenient where mandatory digital-product law requires a valid contractual reason, notice, continued conformity or a remedy;
- do not arbitrarily change the denomination, exchange mechanics or effective value of purchased Diamonds in a way that defeats the consumer's reasonable contractual expectation or mandatory digital-product rights;
- distinguish lawful gameplay balancing from a disguised confiscation or devaluation of purchased virtual currency; and
- where a suspension, ban or other enforcement action removes access to purchased Diamonds or paid content, preserve a meaningful way for the player to challenge the reason where required by applicable law or the governing TycoonX enforcement/redress rules.

Emergency restrictions can still be applied first where reasonably necessary for security, fraud, safety or game-integrity reasons. That does not remove later review/redress requirements that apply to the case.

Corrections should remain tied to the affected transaction, exploit, technical error, or lawful game change, preserve unrelated legitimate purchased value, and keep mandatory remedies intact.

## 7. Children and vulnerable consumers

For any TycoonX purchase surface that is not exclusively limited to adults:

- clearly separate commercial purchase prompts and paid-Diamond advertising from ordinary gameplay;
- do not directly exhort children to buy Diamonds, digital content, or VIP, or to persuade an adult to buy it for them or on their behalf;
- use functional parental controls and age-appropriate defaults, including platform-level controls offered by Apple and Google;
- where appropriate for the actual audience and platform, default real-money spending controls conservatively for children rather than relying only on an optional parental-control menu;
- assess the consumers actually reached by the commercial practice, not only the audience CK-Labs intended to target;
- do not target or segment players because they appear unusually vulnerable to excessive spending, impaired impulse control, gambling-related harm, credulity, age-related vulnerability, or similar foreseeable vulnerability;
- do not design monetization around exploiting so-called `whales` or other consumers' vulnerability to overspending; and
- review time pressure, scarcity, streaks, loss framing, pop-ups, push notifications and other purchase prompts more strictly where children or vulnerable consumers are likely to be reached.

Age gates and parental controls help reduce risk but do not remove CK-Labs' responsibility for the commercial practices players actually encounter.

## 8. Platform and provider responsibilities

This EU/EEA gate applies alongside the channel-specific rules already maintained for TycoonX:

- **Apple App Store:** StoreKit/IAP rules, refund/revocation status, storefront-specific external-purchase rules, and Apple parental controls remain applicable.
- **Google Play:** Google Play Billing / alternative-billing or external-offers program requirements, purchase-token authority, refund status, and parental controls remain applicable.
- **Xsolla web shop:** the transaction-specific Xsolla entity, checkout, refund policy, tax/VAT handling, fraud screening, and merchant-of-record role remain relevant.

A provider's fixed product tiers or checkout limitations do not by themselves settle the EU consumer-law analysis of a TycoonX package design. If provider constraints conflict with the intended EU/EEA monetization flow, document the constraint and use a compliant product structure rather than assuming the provider absorbs CK-Labs' consumer-law responsibility.

TycoonX entitlement delivery must continue to rely on authoritative TycoonX and provider records. A provider refund or chargeback may justify a narrow correction of the corresponding paid value, but it does not justify removing unrelated legitimate purchases.

## 9. EU/EEA release test matrix

Before enabling or materially changing a Diamond purchase/spend surface, test at least:

1. a normal paid Diamond package showing a clear real-money total;
2. a 750-Diamond item where the largest bundle has the lowest per-Diamond rate, confirming the item is **not** priced using a fictional cheapest-per-unit conversion;
3. a player who already owns 700 of the 750 Diamonds, confirming the item still shows the required objective real-money price while any `90 more needed` message is clearly separate;
4. promotional or gameplay-earned Diamonds, confirming they do not distort the objective real-money price of the same paid-Diamond item;
5. a proposed second real-money-purchasable token exchanged from Diamonds, confirming it is blocked or specifically reviewed before release;
6. an item whose price does not align with available Diamond bundles, confirming a specific-amount or equivalent direct-purchase path exists or the design is held for legal review;
7. an attempted several-step paid-currency conversion, confirming the true real-money cost remains clear;
8. an unused purchased-Diamond withdrawal request inside the applicable 14-day period;
9. a later Diamond spend for digital content, confirming required pre-contract and early-performance information/consent where applicable;
10. a refunded or charged-back Diamond transaction, confirming only transaction-linked paid value is corrected;
11. an economy rebalance, confirming legitimate purchased Diamond balances are not arbitrarily confiscated or silently devalued;
12. an account suspension affecting access to paid content, confirming the applicable challenge/redress path remains available;
13. a child-reachable purchase surface, confirming no direct exhortation and functional parental controls/defaults;
14. a high-spending account, confirming the player is not targeted because an internal model labels them a `whale` or vulnerable spender; and
15. Apple, Google Play and Xsolla channel variants, confirming provider-specific prices and constraints do not create misleading cross-channel real-money equivalents.

## 10. Pre-release verification

- [ ] every paid Diamond package displays a clear real-money price;
- [ ] every paid-Diamond item/service surface shows the required real-money price information;
- [ ] the real-money-equivalent formula uses a documented full-cost acquisition reference, not a large-bundle discount or temporary promotion;
- [ ] existing balances, free grants and gameplay-earned Diamonds do not distort the item's objective real-money price;
- [ ] no multi-purchasable-currency layer obscures real cost;
- [ ] Diamond package sizing does not systematically force materially unwanted surplus currency;
- [ ] a specific-amount or equivalent direct-purchase route exists where required by the CPC release position, or a documented legal review supports the alternative design;
- [ ] unused purchased Diamonds are not automatically excluded from the statutory withdrawal process;
- [ ] the checkout does not misuse the digital-content early-performance exception for the initial Diamond purchase;
- [ ] later Diamond spending has the required pre-contract information and withdrawal treatment;
- [ ] transaction/provider records can distinguish unused, spent, refunded, reversed, chargeback-affected, promotional, and gameplay-earned Diamonds where needed for a lawful remedy;
- [ ] paid-value changes and account enforcement preserve mandatory conformity/redress rights;
- [ ] child-directed purchase pressure is absent and vulnerable-consumer targeting is not used;
- [ ] the canonical English Terms and Purchases & Refunds Policy remain consistent with this gate; and
- [ ] completed localized Terms/Purchases pages are reopened only if the canonical public legal meaning materially changes.

## 11. Evidence to retain

Keep dated evidence of:

- store/package screenshots and checkout screenshots;
- the real-money-equivalent calculation formula, input package(s), channel/country/currency and version date;
- package values, item prices and any exact-amount or direct-purchase mechanism;
- a simple currency-topology map showing every directly or indirectly real-money-purchasable currency and conversion path;
- proof that promotional/gameplay balances and an existing player's balance do not silently change the advertised objective item price;
- withdrawal/refund configuration by Apple, Google and Xsolla channel;
- Diamond ledger states needed to distinguish unused and spent purchased value from free/promotional/gameplay value;
- material economy/value changes and the legal/compliance review supporting them;
- account-enforcement challenge/redress screenshots or workflow evidence where paid access is affected;
- parental-control and child-safety settings;
- any documented provider limitation that prevents the preferred package/exact-amount design and the legal review of the alternative; and
- material monetization changes and the legal/compliance review performed before release.

This evidence helps CK-Labs demonstrate that TycoonX pricing and virtual-currency design were configured intentionally and transparently rather than relying on misleading client displays, stranded balances, hidden currency layers, or undocumented assumptions.

## Current official reference checkpoint

Rechecked September 2, 2026 against the European Commission / CPC Network *Key Principles on In-Game Virtual Currencies* dated March 21, 2025. The current CPC position expressly addresses real-money price transparency, multiple virtual-currency layers, forced surplus bundles/specific-amount purchasing, pre-contract information, withdrawal rights, unfair contract/value-change terms, access to contest account restrictions, children and vulnerable consumers.

The European Commission has continued to present those principles as the CPC Network's minimum requirements/best practices for in-game virtual currencies. Recheck the Commission/CPC position before a material redesign of TycoonX Diamond monetization because coordinated enforcement practice can evolve.
