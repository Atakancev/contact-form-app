# TycoonX Randomized-Purchase & Xsolla Go-Live Checklist

Last reviewed: September 2, 2026

This checklist is an operational release/change gate for the live TycoonX service. It complements the public Terms, Purchases & Refunds Policy, Apple Custom EULA, Privacy Policy, Community Standards, the EU/EEA Virtual Currency Release Gate, the German Youth Protection Release Gate, and the broader Payment & Entitlement Release Gates. It does not create a randomized-purchase mechanic and does not state that TycoonX currently has one.

TycoonX went to full release on September 1, 2026. Current users, purchases, VIP, Diamonds, rewards and the live service must not be described as beta.

## P0: randomized paid items / loot-box style mechanics

Before enabling or materially changing any TycoonX paid product, paid-currency spend, paid bundle, paid spin, paid chest, paid draw, or other purchase flow that can result in a randomized virtual item or randomized reward, confirm that the mechanic is lawful and platform-compliant in every country where it will be offered.

If the answer is **no randomized paid mechanic**, keep this gate documented as not applicable and do not add unnecessary loot-box wording to public legal copy.

If the answer is **yes**, do not enable the mechanic until all of the following are true:

- Apple: disclose the odds of receiving each type of randomized virtual item before the purchase, as required by App Review Guideline 3.1.1.
- Google Play: clearly disclose the odds in advance of, and in close and timely proximity to, the purchase.
- Apply the odds disclosure conservatively where the randomized result is obtained directly for real money **or by spending Diamonds or another virtual currency that can be purchased with real money**. Do not use a paid-currency layer to make the probability disclosure less visible.
- The disclosure must describe the actual live probability table used by the authoritative server/configuration. Do not use stale marketing percentages or screenshots that can drift from production behavior.
- If probabilities vary by player state, pity/guarantee step, duplicate protection, event, country, account history, inventory state, or another condition, disclose the rules accurately enough that the displayed odds are not misleading.
- If a guarantee or pity counter changes the probability over successive purchases, explain the material rule before purchase and ensure the displayed probability or probability range remains accurate for the player's current state where required.
- Do not silently alter odds during a live paid promotion. If odds change, update the disclosure at the same time and preserve enough configuration/version evidence to answer refund, platform-review, regulator, or player-dispute questions.
- The final paid-purchase screen must not imply a guaranteed item when the result is random.
- A label such as `rare`, `legendary`, `up to`, `featured`, or `boosted odds` must have a documented objective meaning and must not contradict the actual probability table.
- A refund, withdrawal, reversal, or chargeback must reconcile the corresponding paid value without creating duplicate paid value or removing unrelated legitimate purchases.
- If a jurisdiction imposes stricter probability-item rules, age restrictions, registration, licensing, or display requirements, apply the stricter local rule or disable the mechanic there before distribution.

### Paid Diamonds do not hide the real purchase context

Where a randomized mechanic costs Diamonds that are directly or indirectly purchasable with real money, apply the separate `TYCOONX_EU_VIRTUAL_CURRENCY_RELEASE_GATE.md` as well. For EU/EEA consumers this includes transparent real-money price information where required, avoiding currency layers that obscure cost, respecting withdrawal/conformity rights, and taking particular care with children and vulnerable consumers.

Do not describe a randomized spend as `free` merely because the immediate button uses Diamonds rather than euros or another real-world currency when those Diamonds were purchased or the presentation would otherwise mislead the consumer about economic cost.

## P0: Germany gambling-law classification before enabling a paid random mechanic

Do not assume that a loot-box-style mechanic is automatically gambling, and do not assume that calling the reward a `virtual item` automatically keeps it outside gambling law.

Under § 3(1) of the German Glücksspielstaatsvertrag 2021 (GlüStV 2021), gambling exists where an **Entgelt** is required to acquire a **Gewinnchance** and the decision about the win depends wholly or predominantly on chance. Whether a particular TycoonX mechanic satisfies those elements is a factual/legal classification that must be completed before the mechanic is enabled for Germany.

For every proposed paid randomized mechanic, preserve a written Germany assessment covering at least:

- what the player gives to participate, including direct money, purchased Diamonds, a paid token, or another economically linked input;
- what the player can receive and whether that reward can constitute a `Gewinn` in the specific legal context;
- how much the result depends on chance versus player skill;
- whether the reward is transferable between players;
- whether the reward can be sold, redeemed, cashed out, exchanged for money or money-like value, tokenized, or traded through a marketplace;
- whether CK-Labs or another provider enables, facilitates, promotes, or reasonably knows of a real-money secondary market;
- whether participation is available to a broad/public group; and
- whether a license, prohibition, age restriction, geo-block, or another gambling-specific requirement could apply.

A normal in-game item that has no cash-out path is not declared lawful merely by this checklist. Conversely, the presence of randomization alone does not prove that the mechanic is regulated gambling. The actual statutory elements and current German interpretation control.

Treat the following as **automatic re-review triggers** before Germany launch or continued operation:

- adding player-to-player trading of randomized rewards;
- adding cash-out, redemption, marketplace, NFT/token, or external transfer functionality;
- allowing rewards to be exchanged for another asset with real-world value;
- adding paid rerolls, paid spins, paid keys, paid chests, wagering/staking, or casino-style presentation;
- materially changing the consideration/prize structure; or
- a regulator, court, Apple, Google Play, Xsolla, or rating body changing the applicable classification or requirements.

If the mechanic is classified as regulated gambling or there is a credible unresolved risk that it is regulated gambling, **do not enable it in Germany** until the required legal/authorization path is confirmed. A Terms disclaimer cannot convert an unlawful gambling mechanic into a lawful game feature.

## P0: EU/EEA consumer-protection parity for randomized purchases

The European CPC Network's March 21, 2025 Key Principles on In-Game Virtual Currencies remain relevant when a randomized mechanic uses purchased Diamonds or another virtual currency. The European Commission describes those principles as addressing clear pricing and pre-contract information, hidden costs, forced virtual-currency purchasing, withdrawal rights, and consumer vulnerabilities, particularly children.

Before an EU/EEA randomized-purchase mechanic goes live:

- show the required real-world price information without making the player mentally convert several currency layers;
- do not engineer Diamond package sizes merely to force the player to buy materially more paid currency than needed for the intended random purchase;
- do not use a random reward, countdown, streak, limited-time chest, or `one more try` prompt to exploit a child's inexperience or another consumer's known vulnerability;
- do not target users because a model predicts unusually high susceptibility to repeated spending;
- make the randomized nature, material odds, quantity, price, and any guarantee/pity rule visible before the spend is committed;
- preserve the normal withdrawal, conformity, refund, correction, and dispute rules rather than using `random outcome` as a blanket no-refund clause; and
- keep a channel/country kill switch so a mechanic can be disabled without affecting unrelated gameplay or legitimate paid entitlements if a legal/platform classification changes.

## Korea-specific check

If TycoonX distributes a paid randomized-item mechanic in South Korea, perform a separate Korea release review before enabling it. Google Play specifically identifies Korean requirements for games offering probabilistic items, including probability-information display requirements in addition to the general Play odds-disclosure rule. Do not copy a generic global odds page and assume it satisfies the Korean content/method-of-display rules.

## Probability integrity and evidence

For any paid randomized mechanic, probability evidence must be reproducible from the production configuration used at the time of the transaction.

Retain at least:

- mechanic/product identifier and version;
- effective start/end timestamps for each probability table;
- country/channel/event segmentation rules;
- each obtainable reward category and probability;
- pity/guarantee/duplicate-protection logic;
- server/config deployment identifier;
- the exact disclosure shown to the player and its version;
- the purchase/spend transaction identifier needed to match the applicable table; and
- change approvals or incident records where an odds/configuration error occurred.

Do not promise cryptographic randomness, independent auditing, `provably fair` behavior, or a particular random-number-generation standard unless production actually supports that claim and the evidence is retained.

If an obvious configuration error makes displayed odds materially different from the authoritative live mechanic, stop or disable the affected paid random purchase, preserve evidence, correct the disclosure/configuration, identify impacted transactions, and assess refunds/remedies under the normal TycoonX pricing/configuration-error and mandatory consumer-rights gates. Do not silently edit the odds page and continue as if the earlier transactions never occurred.

## P0: Xsolla real-payment production validation

The Xsolla webshop is not production-ready merely because sandbox checkout works. For the live TycoonX service, preserve evidence that production checkout has been validated and repeat the relevant checks after a material product, token, webhook, merchant, payment-method, or entitlement-flow change.

- Confirm a production token request does not contain `"sandbox": true` when a real payment is intended.
- Use a controlled real-payment test when necessary to validate a material production payment-flow change, using an eligible real payment method and normal refund/reconciliation safeguards.
- Confirm the provider-side transaction reaches the correct successful state before TycoonX grants Diamonds, 30-Day VIP, Lifetime VIP, or any other paid entitlement.
- Confirm the TycoonX fulfillment path is idempotent under duplicate/retried webhook delivery.
- Confirm the transaction appears in Xsolla Publisher Account transaction search with the expected amount, currency, user/account mapping, product, and status.
- Exercise the available refund flow when validating a payment method or material refund-path change and verify the corresponding TycoonX entitlement/value is reconciled correctly.
- Do not assume every Xsolla payment method supports the same refund path. The checkout-specific refund policy and payment method remain relevant.
- Verify that production and sandbox users/configuration cannot be mixed accidentally.
- Keep enough transaction identifiers and server logs to connect the Xsolla payment, TycoonX user, entitlement grant, refund/reversal, and any later support case without storing unnecessary payment-card data.

## P0: App Review / Play review purchase visibility

Before submitting an update that adds or materially changes a purchase mechanic:

- Every configured Apple In-App Purchase that Apple needs to review must be complete, up to date, visible, and functional in the submitted build.
- If a configured paid item is intentionally unavailable to the reviewer, explain exactly why in App Review Notes instead of leaving a broken or hidden purchase surface unexplained.
- Describe new or materially changed purchase behavior specifically in App Review Notes, including Diamonds, one-time 30-Day VIP, Lifetime VIP sales-window behavior, restore behavior, any paid randomized mechanic, and any permitted external-purchase route.
- Keep App Store screenshots/description clear about which showcased functionality requires an additional purchase.
- For Google Play, confirm the live build's probability disclosure is in advance of and in close and timely proximity to the randomized purchase, not only on a remote legal/help page.
- Do not ship review-only odds, safer review configuration, or a probability table that differs from the live production configuration after approval.

## P0: paid-entitlement isolation

A randomized-mechanic incident, odds correction, gambling-law review, regional disablement, or provider-policy change must not by itself:

- delete or duplicate unrelated legitimately purchased Diamonds;
- create an unrelated negative Diamond balance;
- restart, pause, extend, or duplicate the original one-time 30-Day VIP entitlement;
- create a hidden expiry, downgrade, or conversion of valid Lifetime VIP;
- replay an Apple, Google Play, or Xsolla purchase; or
- manufacture a fraud, exploit, refund, or chargeback finding without transaction-specific evidence.

Lifetime VIP remains a one-time entitlement offered only during selected genuine promotional sales windows. It may be withdrawn from future sale and may never return. A randomized-item feature must not be bundled or marketed in a way that silently changes those Lifetime VIP rules.

## Regression scenarios before enabling a randomized paid mechanic

Test at least these scenarios and retain evidence:

1. Direct real-money randomized purchase shows current odds before confirmation.
2. Randomized purchase using purchased Diamonds shows the required odds and price information before the Diamond spend.
3. Player has only gameplay-earned Diamonds; the UI still describes the random nature and does not make misleading real-money claims.
4. Pity counter changes the live probability; player sees the materially correct rule/state.
5. Guaranteed reward after N purchases works exactly as disclosed.
6. Duplicate-protection changes the available pool; disclosure remains accurate.
7. Event starts/ends while the purchase screen is open; stale client data cannot buy under an undisclosed probability table.
8. Server configuration changes; previous transactions remain tied to their historical probability version.
9. Refund/withdrawal of a randomized purchase affects only transaction-linked value under the applicable remedy rules.
10. Chargeback does not remove unrelated Diamonds or VIP.
11. Germany: direct-money paid random mechanic receives a documented GlüStV classification.
12. Germany: purchased-Diamond random mechanic receives the same legal classification rather than being ignored because the immediate spend uses virtual currency.
13. Germany: a proposed player marketplace/cash-out feature automatically reopens the classification before launch.
14. Child account encounters the mechanic; commercial design and age-rating/youth-protection controls behave as approved.
15. High-spending account is not targeted because of a vulnerability/susceptibility label.
16. Korea storefront receives the required country-specific probability review.
17. Apple review build and production build use the same materially relevant odds/configuration.
18. Google Play disclosure is close to the actual purchase, not buried in Terms.
19. Xsolla webhook retry does not duplicate a random purchase result or paid entitlement.
20. Provider outage after payment but before result delivery is recoverable idempotently from authoritative records.
21. Odds/configuration mismatch disables the affected mechanic and preserves impacted transaction evidence.
22. Regional kill switch disables only the affected mechanic and does not revoke unrelated Diamonds, 30-Day VIP or Lifetime VIP.

## P1: public legal wording trigger

Do not add a public randomized-item clause solely because this checklist exists. Add or update public Terms/Purchases wording only if TycoonX actually introduces a paid randomized-item mechanic or another material purchase behavior that users need to understand contractually.

If such a mechanic is introduced, update the canonical English legal source first, then refresh all 25 localized legal sets for the material change in the required order. Do not silently patch only one language.

## Current official reference checkpoint

Rechecked September 2, 2026 against:

- Apple App Review Guideline 3.1.1: purchased in-game currency may not expire; restorable purchases need a restore mechanism; paid randomized virtual-item mechanisms must disclose item odds before purchase.
- Google Play Payments policy: apps/games offering mechanisms to receive randomized virtual items from a purchase must clearly disclose odds in advance of, and in close and timely proximity to, that purchase.
- Google Play country/region requirements: South Korea has additional probabilistic-item probability-information requirements for affected games.
- GlüStV 2021 § 3(1): gambling classification turns on consideration for a chance to win and a wholly or predominantly chance-dependent decision about the win. This checklist does not decide whether a specific virtual-item mechanic satisfies those elements.
- European Commission / CPC Network Key Principles on In-Game Virtual Currencies, adopted March 21, 2025: clear pricing/pre-contract information, avoidance of hidden costs and forced currency purchasing, withdrawal rights, and protection of consumer vulnerabilities including children.

Platform policies and gambling/consumer-law interpretations can change. Recheck the current source before introducing a randomized paid mechanic rather than treating this September 2026 snapshot as permanent.
