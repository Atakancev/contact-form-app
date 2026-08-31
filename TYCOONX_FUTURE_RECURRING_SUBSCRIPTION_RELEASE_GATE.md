# TycoonX Future Recurring Subscription Release Gate

Last reviewed: August 31, 2026
Owner: CK-Labs
Status: P0 before any recurring TycoonX product is enabled

## Purpose

TycoonX currently distinguishes **Diamonds**, **one-time non-renewing 30-Day VIP**, and **limited-window one-time Lifetime VIP** from any future recurring product. This file is the release gate for a future auto-renewing or otherwise recurring-charge TycoonX subscription.

It is intentionally stricter than the rules for current one-time purchases. The existing Terms and Purchases & Refunds Policy do **not** authorize CK-Labs to silently convert 30-Day VIP, Lifetime VIP, Diamonds, or another one-time purchase into recurring billing.

No recurring product should go live until its exact merchant, platform, duration, renewal behavior, cancellation route, renewal price, price-change mechanics, refund/withdrawal treatment, entitlement lifecycle, and regional availability have passed this gate.

This gate is implementation guidance. Mandatory law, the current Apple App Store rules, Google Play rules, the transaction-specific Xsolla arrangement, and the contract actually shown to the consumer remain controlling.

## 1. Product classification is a P0 invariant

Before configuration or marketing, classify the product as one of:

- one-time 30-Day VIP;
- one-time Lifetime VIP;
- one-time Diamonds or another consumable/non-consumable purchase;
- prepaid/non-renewing time entitlement;
- auto-renewing subscription;
- installment/commitment product; or
- another recurring-charge product.

A recurring product must have its **own product identifier, checkout copy, legal treatment, entitlement state, renewal logic, cancellation logic, and reconciliation tests**. Do not reuse a one-time product identifier merely because the benefits look similar.

The words `30-Day VIP`, `30 Days VIP`, or equivalent must continue to mean one-time and non-renewing unless a genuinely separate recurring product is deliberately launched with clear recurring terms. Lifetime VIP remains a one-time limited-window promotional entitlement and must never be configured as an auto-renewing subscription.

A subscription must provide genuine ongoing or recurring value. Do not use a subscription SKU merely to sell a lump sum of Diamonds, a one-time game booster, or another effectively one-off benefit.

## 2. Pre-contract disclosure for a recurring product

Before a consumer commits, clearly disclose at the legally required point in the flow, as applicable:

- exact subscription name and recurring benefits;
- initial price and currency;
- whether taxes are included and any unavoidable additional charge;
- billing period and billing frequency;
- whether and how the subscription automatically renews;
- trial, introductory, promotional, setup-fee, or discounted period and what happens afterwards;
- the ordinary renewal price after an offer period;
- initial minimum term or commitment period, if any;
- cancellation method, cancellation timing, and the effect of cancellation;
- when access ends after cancellation;
- merchant/contracting entity and payment channel;
- material regional or platform restrictions; and
- the legally required withdrawal, conformity, update, termination, refund, price-reduction and support information.

Do not hide the recurring price or renewal cadence behind an info icon, legal-policy link, scroll trap, or separate screen where the customer must take extra action merely to discover the material subscription terms.

A free trial must not be described as `free` without clear disclosure of the post-trial recurring price and automatic-renewal consequence where the user will be charged unless they cancel.

## 3. German BGB § 309 no. 9 contract-term gate

Where German AGB law applies to a consumer contractual relationship involving regular delivery of goods or regular performance of services, do not use standard terms that conflict with **BGB § 309 no. 9**.

The release baseline is:

- do not bind the consumer through standard terms for an initial contractual term longer than **two years**;
- a silent/tacit extension must not create another fixed binding term; where the rule applies, the extension must be for an **indefinite period** with a right to cancel at any time subject to a notice period of no more than **one month**; and
- do not impose a consumer cancellation notice period longer than **one month before the end of the initially agreed term** where § 309 no. 9 applies.

Do not copy a platform's available subscription duration into CK-Labs Terms without checking the German contract effect. Platform configuration does not override mandatory or AGB-control rules.

## 4. German BGB § 312k online termination button

If CK-Labs enables German consumers through a **website** to conclude a paid continuing-obligation contract covered by BGB § 312k and CK-Labs is the responsible trader, the website must provide the statutory electronic termination flow.

The compliant flow must include:

- a continuously available, directly and easily accessible cancellation button labelled **`Verträge hier kündigen`** or a genuinely equivalent unambiguous formulation;
- a confirmation page allowing the consumer to provide the legally required information, including the type of cancellation, identifying information, identification of the contract, requested termination time, and an electronic contact method for confirmation;
- a final confirmation button labelled **`jetzt kündigen`** or a genuinely equivalent unambiguous formulation;
- the ability for the consumer to save the submitted cancellation declaration with date and time on a durable medium; and
- immediate electronic confirmation in text form of the content, receipt date/time, and termination date.

If the consumer does not choose a termination time, the statutory default to the earliest possible time must be respected where applicable.

**Failure is not cosmetic.** Where BGB § 312k(6) applies and the required button/confirmation page is not provided correctly, the consumer can terminate the covered contract **at any time without observing a notice period**.

Do not require login if doing so would make the statutory cancellation function not directly/easily accessible in the legally required way. Identity verification may be proportionate to identifying the contract, but it must not become a cancellation obstacle.

If Xsolla or another merchant controls the legally relevant subscription website and cancellation interface, record that role and verify the provider-controlled German flow. Do not assume that a generic `Manage plan` screen automatically satisfies § 312k merely because it contains a cancel action.

Native Apple/Google subscription management and a German website § 312k cancellation function are separate questions. Do not mechanically add the German website buttons inside a provider-controlled native store flow where the statute is not the applicable interface rule.

## 5. Existing-subscriber price increases require a separate legal path

The generic TycoonX rule allowing CK-Labs to change prices for **future purchases** does not authorize unilateral higher recurring charges to an existing subscriber.

Before increasing the recurring price for an existing subscriber, determine and document:

- the contracting merchant;
- the governing subscription terms and any valid price-adjustment basis;
- applicable German/EU AGB and consumer-law controls;
- whether affirmative consent is legally or contractually required;
- the provider's current consent/notification rules;
- the minimum notice period;
- whether the user can cancel before the higher price applies; and
- the authoritative provider state proving whether the price change was accepted, rejected, pending, canceled, or applied.

Do not rely on a clause saying CK-Labs may change any recurring price at any time for any reason. A price-adjustment mechanism for an existing German consumer must remain transparent, balanced, and compatible with mandatory law.

BGB § 327r digital-product modification rules do not by themselves create a free-standing right to charge an existing subscriber a higher recurring price.

A lower future price does not automatically create a retroactive refund or price-match right for already completed billing periods unless mandatory law or the specific offer requires it. A higher price must not be charged for a renewal until the legally/provider-required conditions for that renewal price are satisfied.

## 6. Apple App Store auto-renewable subscriptions

If TycoonX later offers an Apple auto-renewable subscription:

- use a dedicated auto-renewable subscription product in an appropriate subscription group;
- provide ongoing value throughout the subscription;
- preserve Apple's minimum-duration and subscription-group rules;
- show accurate benefits, duration, recurring price and renewal behavior before purchase;
- provide or link to appropriate subscription management so the user can turn off auto-renewal;
- reconcile entitlement state from verified StoreKit/App Store Server information rather than a local timer alone; and
- process cancellation, billing retry, grace-period, expiration, refund and revocation states without granting duplicate paid time.

### Apple price increases

Apple's current App Store Connect rules distinguish notice-only versus consent-required increases by storefront and other criteria. **As of this August 31, 2026 checkpoint, Apple's current threshold table marks Germany as `Consent required` for both non-annual and annual auto-renewable subscription price increases.**

Accordingly, do not design a German TycoonX subscription price increase on the assumption that Apple may simply notify and auto-charge the higher amount. Where Apple requires consent, the subscription must not renew at the higher price unless the subscriber consents through the applicable Apple flow. If the subscriber does not consent, Apple can cause the subscription to expire at the end of the applicable existing-price cycle.

Apple's thresholds, regional consent rules and notification timing can change. Re-check current App Store Connect rules on every recurring-price release rather than hard-coding today's thresholds into TycoonX legal prose.

Current Apple documentation also allows preserving an existing subscriber's old price. Consider grandfathering where commercially useful and legally simpler.

## 7. Google Play subscriptions

If TycoonX later offers a Google Play subscription:

- use an actual subscription/base-plan configuration, not a disguised one-time product;
- disclose offer terms, cost, billing frequency, automatic renewal and other material information clearly;
- provide sustained or recurring value during the subscription;
- do not use a subscription primarily to deliver a lump sum of Diamonds or another one-time benefit;
- only grant entitlement after the authoritative purchase reaches the appropriate completed/active state;
- use RTDN plus Google Play Developer API reconciliation for renewal, cancellation, expiry, grace/account-hold, refund/revocation and price-change states; and
- preserve access through the paid period after an ordinary stop-renewals cancellation unless the authoritative provider state or mandatory law requires otherwise.

### Google Play price changes

Google's current documentation treats an increase for an existing subscriber as a separate migration of the subscriber's legacy price cohort.

The current default is an **opt-in price increase**: the user must expressly accept the higher price before it is first charged, or Google Play cancels the subscription when the higher-price renewal would otherwise occur. Google's current documentation uses a 37-day advance period for the default opt-in migration, with Google notifications beginning 30 days before the first renewal at the higher price.

Google also permits certain **opt-out** increases only in eligible locations and subject to amount, frequency, notice and developer requirements. For an opt-out increase, current Google documentation requires an in-app notice in addition to Google's own notices.

Do not assume that a country, subscription, price increase or account is eligible for opt-out treatment merely because Play Console exposes price-editing controls. Use the current Play Console/API eligibility and the applicable law for the actual subscriber.

Handle `SUBSCRIPTION_PRICE_CHANGE_UPDATED` and related authoritative subscription state idempotently. A user who never accepted a required opt-in increase must not be treated as having accepted merely because the TycoonX client displayed the higher price.

## 8. Xsolla recurring subscriptions

Xsolla's current Web Shop documentation supports regular recurring subscription plans and provides a user-facing subscription management interface where signed-in users can view, renew or cancel an active plan.

If CK-Labs enables a recurring TycoonX plan through Xsolla:

- verify the exact Xsolla entity/merchant and transaction-specific terms;
- verify that the plan is actually recurring and that the displayed billing cycle, trial, setup fee, ordinary renewal price, currency, taxes and cancellation behavior match the configured plan;
- retain server-side webhook/API reconciliation for created, renewed, updated, canceled and refunded subscription states;
- make cancellation without refund distinct from cancellation plus refund;
- do not remove access earlier than the provider/contract state permits merely because auto-renewal has been turned off; and
- do not revoke unrelated Diamonds, one-time 30-Day VIP or Lifetime VIP because a recurring subscription ends.

Xsolla's current API/documentation allows the charge amount of an **active** subscription to be changed and states that the user is notified by email and the new amount applies from the next billing period. That technical capability is **not itself proof that a higher recurring price may lawfully be imposed on a German/EU consumer**. Before using it, verify the transaction-specific merchant terms, legal price-adjustment basis, required notice/consent, and cancellation rights. Where affirmative consent is required, an informational provider email alone is not a substitute for that consent.

For price changes intended only for new subscribers, prefer a new/current plan price that leaves existing subscriptions on their old terms unless a lawful and tested migration is deliberately performed.

## 9. Cancellation, refund and entitlement lifecycle

A recurring entitlement record must distinguish at least:

- active and renewing;
- active but auto-renewal turned off;
- trial/introductory period;
- pending initial payment;
- pending renewal;
- billing retry/grace period;
- account hold/suspended for failed payment where the provider uses that state;
- canceled but still entitled until period end;
- expired;
- refunded/revoked; and
- migrated/replaced by another plan.

`Canceled` must not automatically mean `remove access now`. Stop-renewal cancellation commonly leaves access until the already-paid period ends. Immediate revocation/refund is a different event.

A failed renewal must not erase unrelated purchased Diamonds, Lifetime VIP, or a separately valid one-time 30-Day VIP. A recurring subscription chargeback may justify correction of the subscription entitlement tied to that charge, but does not automatically prove fraud across the whole account.

If the service itself is discontinued, stop future renewals before service end and follow the TycoonX shutdown gate for notice, remaining paid periods and mandatory remedies.

## 10. Promotions, trials and win-back offers

A recurring-product promotion must clearly disclose:

- eligibility;
- duration of the discounted/free period;
- price during the offer;
- standard recurring price afterwards;
- billing frequency;
- automatic-renewal consequence; and
- how to cancel before the first standard-price renewal.

Do not use a fake free trial, fake countdown, misleading crossed-out subscription price, or a cancellation screen designed to trap the user into another paid term.

A trial or promotional discount does not authorize CK-Labs to charge the ordinary renewal price if the provider or mandatory law requires additional consent that was not obtained.

A canceled user may receive a genuine win-back offer, but refusing a win-back offer must not reactivate billing.

## 11. Regional pricing, currency and taxes for subscriptions

Recurring prices may differ by genuine country, storefront, platform, currency, tax regime and channel.

For a **new** subscription purchase, the final total recurring price shown in the applicable checkout governs that transaction subject to mandatory law and obvious-error rules.

For an **existing** subscriber, a tax, VAT, foreign-exchange, storefront or provider adjustment must be processed under the provider's current subscription rules and applicable consumer law. Do not assume that the one-time-purchase rule allowing future price changes automatically authorizes a higher recurring debit.

Do not use VPN, country, device, payment-method or account-profile mismatches as an automatic basis to terminate an otherwise valid subscription. Investigate genuine regional-price abuse and use authoritative provider/store records.

## 12. Required release evidence before enabling recurring billing

For every recurring TycoonX channel/storefront, retain a dated evidence set showing:

1. subscription product identifier and exact user-facing name;
2. benefits and evidence of ongoing/recurring value;
3. initial price, currency, taxes and billing interval;
4. trial/introductory terms, if any;
5. ordinary renewal price after any offer;
6. auto-renewal disclosure immediately before purchase;
7. merchant/contracting entity;
8. successful first payment and entitlement grant;
9. successful renewal without duplicate entitlement;
10. user cancellation that stops renewal but preserves access to the paid-through date;
11. expiration after cancellation;
12. failed renewal and provider recovery/grace behavior;
13. refund/revocation and entitlement correction;
14. provider-side cancellation/revocation reconciliation while the app is closed;
15. existing-subscriber price increase with the correct notice/consent path;
16. user rejection/no-response to a consent-required price increase;
17. price decrease or grandfathering where supported;
18. promotion/trial conversion to the ordinary renewal price;
19. German website § 312k termination flow where applicable; and
20. proof that current one-time Diamonds, one-time 30-Day VIP and Lifetime VIP remain unaffected.

Do not enable a recurring product because sandbox purchase succeeds while cancellation, renewal, price migration, failed-payment and server-side reconciliation remain untested.

## 13. Regression rules

Never weaken this gate to say that:

- current 30-Day VIP is auto-renewing;
- Lifetime VIP is a subscription;
- a one-time Diamond purchase can silently start recurring billing;
- accepting the general TycoonX Terms alone is consent to every future recurring price increase;
- CK-Labs may raise an existing subscription price at any time without the required contractual basis, notice or consent;
- an Xsolla price-change API call proves a German/EU consumer consented;
- Apple or Google provider notification automatically satisfies every separate mandatory consumer-law duty;
- canceling auto-renewal always means immediate loss of already-paid access;
- a missing German § 312k cancellation function has no consequence; or
- a recurring-product clause may waive mandatory withdrawal, conformity, update, termination, price-reduction, refund or liability rights.

## Current legal/platform checkpoint

Reviewed against current sources available August 31, 2026:

- German BGB § 309 no. 9 on standard-term limits for recurring/regular service relationships;
- German BGB § 312k on the website cancellation button and the consequence of non-compliance;
- the existing TycoonX German checkout gate for recurring-price/duration pre-contract information;
- Apple App Review Guideline 3.1.2 and current App Store subscription documentation requiring ongoing value for auto-renewable subscriptions;
- Apple's current auto-renewable subscription price-increase rules and current storefront threshold table, which currently marks Germany as requiring consent for subscription price increases;
- Google Play's current Subscriptions policy requiring clear cost, billing-frequency and auto-renewal information plus sustained/recurring value;
- Google Play's current subscription price-change documentation for opt-in and eligible opt-out migrations, notices and RTDN state;
- Xsolla's current Web Shop subscription documentation, subscription webhook/API lifecycle documentation and active-subscription price-change documentation; and
- the canonical TycoonX Terms and Purchases & Refunds Policy, which currently state that 30-Day VIP and Lifetime VIP are one-time and that any future recurring product requires separate recurring-price, renewal, notice, consent and cancellation rules.

## Founder-protective interpretation

This gate does not stop CK-Labs from introducing a lawful recurring VIP product later, changing the price for new subscribers, using genuine regional prices, grandfathering existing users, ending a subscription product for new sales, offering trials or discounts, or correcting fraud and invalid payments.

It protects CK-Labs by making the recurring charge provable and channel-specific: the player can see what renews, the correct merchant can collect it, a valid price change has an auditable consent/notice path, cancellation is effective, and a provider state change cannot accidentally delete unrelated TycoonX value.
