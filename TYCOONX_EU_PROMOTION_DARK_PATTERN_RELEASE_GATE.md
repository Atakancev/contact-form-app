# TycoonX EU Promotion & Dark-Pattern Release Gate

Last reviewed: 2026-08-28
Owner: CK-Labs
Scope: TycoonX app, official TycoonX webshop, purchase screens, store metadata, banners, push notifications, email, social posts, event pages, VIP/Diamond offers, coupons and promotional UI.

## Purpose

TycoonX may use genuine limited-time promotions, including selected Lifetime VIP sales windows. Those offers can be lawful and commercially useful, but the urgency, price, availability and checkout presentation must reflect the real offer.

This gate is designed to prevent misleading scarcity, fake countdowns, hidden mandatory charges, preselected paid extras, misleading "free" claims and purchase pressure directed at children while preserving CK-Labs' ability to run, extend, shorten or discontinue genuine promotions where legally permitted.

This is an implementation and marketing gate. It does not replace the Terms of Service, Purchases & Refunds Policy, mandatory consumer rights or platform-specific checkout requirements.

## P0 release rules

### 1. Lifetime VIP windows must be real

- A Lifetime VIP sale may be available only during selected promotional windows and may later be unavailable permanently.
- If TycoonX states that a sale ends at a particular date/time, the displayed deadline must correspond to the actual configured offer.
- A countdown must not automatically reset to the same deadline or continue presenting the same offer as if the original deadline had not expired.
- When a sale closes, future purchase availability should actually close unless CK-Labs makes a genuine, separately supportable extension or new offer.
- A genuine extension is not forbidden, but it must not be implemented as a fake timer reset. Where the original deadline was prominently advertised, the changed deadline should be communicated clearly enough that a reasonable consumer is not misled about what changed.
- Internal evidence should record the original window, any extension/shortening, the reason, the time the configuration changed, and the storefronts/regions affected.
- Do not say Lifetime VIP "will never return" unless CK-Labs is actually making that commitment. Safer accurate wording is that it may be withdrawn, may never return, and no future availability is promised.

### 2. No fake scarcity or false urgency

Never display or imply any of the following unless it is accurate and supportable at the time shown:

- "only 3 left" when the digital entitlement is not actually quantity-limited;
- "last chance" while CK-Labs already intends to keep the identical offer continuously available;
- "today only" when the same terms automatically renew every day;
- a timer that expires and silently restarts with the same offer;
- an invented number of buyers, viewers or remaining claims designed only to pressure purchase;
- an alert that a price is about to increase when no such change is actually planned.

German UWG Annex no. 7 and the corresponding EU Unfair Commercial Practices Directive rule treat a false statement that a product or service is available only for a very limited time or on special terms for a very limited time, when used to force an immediate decision, as always prohibited.

### 3. Promotional price claims must be explainable

- A crossed-out price, percentage saving, "was/now" price, "best price", "lowest price", comparison price or similar claim must have a truthful, documented basis.
- Do not invent a reference price solely to create an apparent discount.
- Where an applicable jurisdiction requires a statutory reference-price or price-history method for the particular product/offer, use that method on the affected surface.
- If a price comparison is not a statutory price reduction but a comparison with another package, platform or normal list price, label the comparison clearly enough that consumers understand what is being compared.
- Do not assume that the same price-reduction formula applies identically to every digital entitlement in every EU jurisdiction. Legal applicability must be checked for the specific product and marketing claim.
- A later genuine lower price does not by itself create a refund or price-match right for an earlier completed one-time purchase unless mandatory law, the provider's rules or the specific offer says otherwise.

### 4. No drip pricing

- Do not present a price as the final total and then add unavoidable service, processing or platform charges only at the final confirmation step.
- Mandatory taxes, VAT and unavoidable charges must be displayed in the manner required by the consumer's applicable law.
- If tax cannot lawfully or technically be known until checkout context is established, the earlier TycoonX surface must not misrepresent a pre-tax amount as the final payable total.
- The Apple, Google or Xsolla checkout remains authoritative for the actual transaction total, but CK-Labs-owned marketing must not contradict or conceal mandatory components that CK-Labs is legally required to disclose.

### 5. No preselected paid extras

- Optional paid add-ons, extra Diamond packs, VIP upgrades, donations, bundles or other additional charges must not be preselected in a way that requires the consumer to opt out to avoid paying more.
- Obtain an affirmative user action for any extra payment beyond the main selected product where applicable law requires express consent.
- Do not use a visually deceptive hierarchy that makes the paid option look mandatory while obscuring a genuine no-extra-cost choice.
- If TycoonX later introduces subscriptions or recurring paid products, do not preselect them as an add-on to a one-time purchase and do not disguise recurring billing as a one-time benefit.

### 6. "Free" must really mean free

- Do not describe Diamonds, VIP, bundles, rewards or another product as "free", "gratis", "no cost" or equivalent if the consumer must actually pay a separate charge to obtain that item.
- If value is included in a paid bundle, prefer accurate language such as "included", "bonus", "extra" or "included with this purchase" rather than creating a false standalone free claim.
- Genuine no-payment promotional grants, event rewards, support compensation and complimentary entitlements may be described as free where accurate.

### 7. Do not sell mandatory legal rights as a special bonus

- Statutory rights, mandatory refunds, statutory conformity remedies, withdrawal rights, required security updates or other non-waivable consumer rights must not be marketed as though CK-Labs is giving the consumer a special commercial benefit that competitors normally do not provide.
- Voluntary protections that genuinely go beyond the legal minimum may be advertised, but the distinction must be accurate.

### 8. Child-directed purchase pressure is prohibited

- Do not place a direct exhortation in advertising aimed at children telling them to buy Diamonds/VIP or to persuade parents or another adult to buy them.
- Avoid child-targeted copy such as "ask your parents to buy this now" or equivalent pressure language.
- General purchase availability is not the same as a direct child-directed exhortation, but age-targeting, wording, placement and the surrounding creative must be considered together.
- This rule sits alongside the separate Apple social-media/age gate, Google family/child protections and any applicable local age-assurance requirements.

German UWG Annex no. 28 expressly prohibits including in advertising a direct exhortation to children to purchase the advertised product/service themselves or persuade parents or other adults to do so.

### 9. No manipulative checkout hierarchy

- The final purchase action must be visually and textually clear about the payment obligation.
- Do not hide cancellation/back navigation, make the non-paid option effectively unreadable, use deceptive contrast, or repeatedly obstruct exit from the offer.
- Do not require a user to dismiss repeated purchase prompts merely to continue ordinary gameplay where the frequency/design becomes aggressive or misleading.
- Do not convert a declined offer into a different paid offer without making the new price/product obvious.

### 10. Promotion/coupon abuse controls must remain narrow

CK-Labs may protect genuine promotions against abuse, including:

- duplicate coupon redemption;
- manipulated country/region or tax location;
- automated purchase abuse;
- entitlement replay;
- refund cycling;
- account farming;
- exploiting a pricing/configuration error.

Any correction should remain tied to the invalid promotion or transaction. Do not remove unrelated legitimately purchased value merely because another promotion was abused unless a separate lawful basis exists.

## Offer-change playbook

When CK-Labs changes a genuine promotion after it has gone live:

1. Record the original offer terms and configured deadline.
2. Record the reason for the change.
3. Update the actual backend/store configuration, not only the visual timer.
4. Update all affected public surfaces that claim a deadline, discount or regional price.
5. Preserve already completed purchases at their confirmed transaction price.
6. Reconcile provider-confirmed pending transactions according to the Purchases & Refunds Policy rather than inventing a new cutoff after payment processing.
7. Keep evidence of the old/new creative and timestamps for consumer-support or regulator questions.

## Regional pricing

- Different Apple, Google, Xsolla, country, currency, tax and genuine promotional prices are permitted where lawful.
- Never imply that a regional price is a personalized discount if it is simply a storefront/currency/tax price.
- If individualized automated pricing is ever used and disclosure is legally required, disclose it through the applicable platform/checkout mechanism.
- Region manipulation to obtain an ineligible offer may be refused or corrected where lawful, but ordinary travel, migration or payment-provider routing must not automatically be labelled fraud without evidence.

## QA before a Lifetime VIP sale

- [ ] Sale start and end timestamps match backend/store configuration.
- [ ] Countdown does not reset automatically.
- [ ] No identical expired offer remains falsely labelled as ending soon.
- [ ] Product page states the limited-sale nature and commercial-lifetime meaning accurately.
- [ ] Crossed-out/reference price basis is documented where used.
- [ ] Total payable price/tax presentation is compliant for the target checkout.
- [ ] No optional paid item is preselected.
- [ ] No direct child-directed purchase exhortation appears.
- [ ] Apple/Google/Xsolla transaction roles remain accurate.
- [ ] Pending transactions are not treated as completed until the provider confirms them.
- [ ] Completed prior purchases are not retroactively repriced.
- [ ] Promotional abuse protections affect only the invalid value/transaction where possible.

## Evidence to retain

For each major paid promotion, retain a lightweight record of:

- offer name and product IDs;
- target countries/storefronts;
- start/end timestamps;
- displayed price and currency;
- reference-price basis if one is claimed;
- screenshots or copy of countdown/discount creative;
- reason and timestamp for any extension/shortening;
- provider configuration relevant to the offer;
- known outage/configuration incidents that affected availability;
- support decision record for material disputes.

Retention must follow the Privacy Policy and applicable data-minimization/retention rules. Do not retain unrelated player data merely to prove a promotion existed.

## Current legal checkpoint

This release gate reflects:

- Directive 2005/29/EC on unfair business-to-consumer commercial practices, including Annex I point 7 on false very-limited-time claims;
- the German UWG Annex to section 3(3), including no. 7 (false time limitation), no. 10 (presenting legal rights as a special feature), no. 20 (false "free" claims) and no. 28 (direct exhortations to children);
- Directive 2011/83/EU Article 22 on express consent for additional payments;
- the European Commission/CPC 2026 sweep on online sales practices, which highlighted misleading reference prices, fake scarcity/countdowns, preselected extras and drip pricing as continuing enforcement concerns.

## Founder-protective interpretation

Nothing here prevents CK-Labs from running genuine short promotions, changing future prices, setting different regional prices, ending a sale, making a documented genuine extension, correcting an obvious configuration error, refusing promotion abuse, or never offering Lifetime VIP again. The protection comes from keeping the commercial reality and the consumer-facing claim aligned.
