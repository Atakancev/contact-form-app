# TycoonX EU/EEA Virtual Currency Release Gate

**Status:** P0 consumer-law / monetization gate

**Applies to:** purchased TycoonX Diamonds and any in-game digital content or service that can be acquired with Diamonds that are directly or indirectly purchasable with real-world money.

**Reference position:** Consumer Protection Cooperation (CPC) Network, *Key Principles on In-Game Virtual Currencies*, published March 21, 2025 and coordinated by the European Commission. The CPC Network describes these principles as minimum requirements and best practices under EU consumer law. The document also states that its recommendations are non-exhaustive and that following them is not by itself a guarantee of legal compliance.

This checklist is an implementation gate. It does not replace transaction-specific advice where national law, platform rules, or the identity of the contracting merchant changes the analysis.

## 1. Real-money price transparency

Before an EU/EEA consumer commits to a transaction:

- Show the real-world monetary price of a paid Diamond package clearly and prominently.
- Where in-game digital content or a service is offered for Diamonds that can be bought with real money, show the real-world monetary price information required for that content/service clearly enough for the player to understand the true cost.
- Do not make the real cost harder to understand by requiring several paid virtual-currency conversions before the intended purchase.
- Where a real-money equivalent is displayed, calculate it from an objective purchasing reference rather than a misleading promotional or quantity-discount assumption.
- Mandatory taxes and unavoidable charges remain subject to the normal TycoonX total-price rules and the actual Apple, Google, Xsolla, or other contracting checkout.

## 2. Do not force unwanted surplus virtual currency

Treat the following as release blockers for EU/EEA monetization unless legal review confirms the specific implementation is compliant:

- package values deliberately structured so a player must buy materially more paid virtual currency than needed for the selected item or service;
- refusing a reasonable way to acquire the needed amount where the design effectively forces unwanted surplus currency;
- repeated currency conversions whose practical purpose is to disconnect the player from the real-money cost;
- purchase flows that exploit leftover balances to pressure another purchase.

This gate does not prohibit legitimate bundle discounts, bonuses, gameplay-earned Diamonds, or ordinary package choices. The point is to avoid a design that materially distorts the consumer's decision by forcing unnecessary paid currency or hiding cost.

## 3. Purchased Diamonds and withdrawal rights

For EU/EEA consumers:

- Do **not** treat the mere crediting of purchased Diamonds as immediately supplied digital content that automatically extinguishes the statutory withdrawal right.
- Where the statutory 14-day withdrawal right applies to a purchase of in-game virtual currency, unused purchased Diamonds must remain eligible for that right during the statutory period.
- Do not use a blanket "no refunds" or "all withdrawal rights waived" checkbox for Diamonds, 30-Day VIP, Lifetime VIP, and later Diamond spending as though they are legally identical transactions.
- Apple, Google, Xsolla, or another provider may control the request channel, merchant-of-record process, or refund mechanics for a specific transaction. That allocation of roles does not remove a mandatory consumer right.
- If purchased Diamonds have already been spent, transferred, or exchanged for digital content/services, determine the consequences of withdrawal from mandatory law and the actual transaction history. Do not invent a blanket rule that silently removes statutory rights.

## 4. Spending Diamonds on digital content or services

A later exchange of purchased Diamonds for digital content or services can itself be a consumer transaction subject to mandatory EU consumer rules.

Before that transaction where required:

- present the main characteristics of the item/service;
- present the required real-money price information as well as the Diamond amount;
- provide required trader/contact, delivery, conformity, and withdrawal information;
- if relying on the digital-content early-performance exception, obtain the legally required express consent and acknowledgement separately from the act of purchasing where required and provide the required contract confirmation;
- do not assume that acceptance of the general TycoonX Terms alone replaces transaction-specific consent where the law requires separate consent.

## 5. Fair contract and balance-change rules

The existing TycoonX founder-protective rules remain valid only within mandatory consumer-law limits.

CK-Labs may still:

- correct duplicate or accidental Diamond grants;
- reverse value tied to a refunded, charged-back, fraudulent, duplicated, or otherwise invalid payment;
- correct technical corruption, exploits, or unauthorized entitlement duplication;
- rebalance the game economy and future gameplay mechanics for legitimate reasons, subject to mandatory digital-product rules.

CK-Labs must not use those protections as an unfair unilateral right to remove legitimately purchased Diamonds or paid content at any time for any reason. Corrections should be tied to the affected transaction, exploit, technical error, or lawful game change, preserve unrelated legitimate purchased value, and keep mandatory remedies intact.

## 6. Children and vulnerable consumers

For any TycoonX purchase surface that is not exclusively limited to adults:

- clearly separate commercial purchase prompts from ordinary gameplay;
- do not directly exhort children to buy Diamonds, digital content, or VIP, or to persuade an adult to buy it for them;
- use available platform parental controls and age-appropriate spending protections;
- do not target or segment players because they appear unusually vulnerable to excessive spending;
- do not design monetization around exploiting so-called "whales" or other consumers' vulnerability to overspending.

## 7. Platform and provider responsibilities

This EU/EEA gate applies alongside the channel-specific rules already maintained for TycoonX:

- **Apple App Store:** StoreKit/IAP rules, refund/revocation status, storefront-specific external-purchase rules, and Apple parental controls remain applicable.
- **Google Play:** Google Play Billing / alternative-billing or external-offers program requirements, purchase-token authority, refund status, and parental controls remain applicable.
- **Xsolla web shop:** the transaction-specific Xsolla entity, checkout, refund policy, tax/VAT handling, fraud screening, and merchant-of-record role remain relevant.

TycoonX entitlement delivery must continue to rely on authoritative TycoonX and provider records. A provider refund or chargeback may justify a narrow correction of the corresponding paid value, but it does not justify removing unrelated legitimate purchases.

## 8. Pre-release verification

Before September 1, 2026 release or before enabling any new EU/EEA Diamond purchase/spend surface, manually verify:

- [ ] every paid Diamond package displays a clear real-money price;
- [ ] every paid-Diamond item/service surface shows the required real-money price information;
- [ ] no multi-currency layer obscures real cost;
- [ ] Diamond package sizing does not force materially unwanted surplus currency;
- [ ] unused purchased Diamonds are not automatically excluded from the statutory withdrawal process;
- [ ] the checkout does not misuse the digital-content early-performance exception for the initial Diamond purchase;
- [ ] later Diamond spending has the required pre-contract information and withdrawal treatment;
- [ ] transaction/provider records can distinguish unused, spent, refunded, reversed, chargeback-affected, promotional, and gameplay-earned Diamonds where needed for a lawful remedy;
- [ ] child-directed purchase pressure is absent;
- [ ] the canonical English Purchases & Refunds Policy matches this gate;
- [ ] each localized Purchases & Refunds page has been refreshed after the August 28, 2026 canonical change.

## 9. Evidence to retain

Keep dated evidence of:

- store/package screenshots and checkout screenshots;
- real-money-equivalent calculation logic;
- package values and item prices;
- withdrawal/refund configuration by Apple, Google, and Xsolla channel;
- Diamond ledger states needed to distinguish unused and spent purchased value from free/promotional/gameplay value;
- parental-control and child-safety settings;
- material monetization changes and the legal/compliance review performed before release.

This evidence helps CK-Labs demonstrate that TycoonX pricing and virtual-currency design were configured intentionally and transparently rather than relying on misleading client displays or undocumented assumptions.