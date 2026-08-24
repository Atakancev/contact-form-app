# TyconX App Store Legal & IAP Checklist

Last reviewed: 2026-08-24
Operator/business name used in player-facing documents: **CK-Labs**

This checklist is for App Store Connect, StoreKit, and the public legal pages. It is operational guidance, not a replacement for qualified legal advice.

## 1. App Store Connect URLs

### Required
- **Privacy Policy URL** → `/tyconx-privacy-policy`
- **Support URL** → `/tyconx-support`

### Strongly recommended public links
- **Terms of Service** → `/tyconx-terms-of-service`
- **Purchases & Refunds Policy** → `/tyconx-purchase-refund-policy`

### Optional Apple field
- **Custom EULA**: do not submit a custom App Store EULA until the full legal operator identity, public postal address, and support telephone number are confirmed and the Apple minimum EULA terms are included. If no custom EULA is submitted, Apple's standard EULA applies automatically.

## 2. Correct Apple product types

| TyconX product | App Store type | Key rule |
| --- | --- | --- |
| Diamond packs | **Consumable** | Purchased in-game currency must not expire merely because time passes. Do not restore consumed transactions as a duplicate purchase. Preserve the account balance server-side where applicable. |
| One-time 30-Day VIP | **Non-Renewing Subscription** | Exactly 30 days, no automatic renewal. TyconX must persist/restore the valid entitlement across supported devices. |
| Lifetime VIP | **Non-Consumable** | One purchase. Must be restorable while the entitlement remains valid. |

Do not configure 30-Day VIP as auto-renewable unless TyconX intentionally introduces recurring billing and the purchase UI is changed accordingly.

## 3. In-app purchase screen requirements

Before the Apple purchase sheet is triggered, the TyconX UI should clearly show:

### Diamonds
- number of Diamonds being bought;
- localized App Store price;
- that Diamonds are virtual game currency;
- that purchased Diamonds do not expire solely due to time;
- no real-world cash value / no cash redemption from CK-Labs;
- link to Terms and Purchases & Refunds Policy.

### 30-Day VIP
- exact product name: **30-Day VIP**;
- exact duration: **30 consecutive days**;
- **one-time / does not auto-renew** prominently visible;
- current localized App Store price;
- concise list of the VIP benefits supplied at purchase;
- when the 30-day period starts;
- Restore Purchases access;
- Terms and Purchases & Refunds links.

### Lifetime VIP
- exact product name: **Lifetime VIP**;
- **one-time purchase**;
- current localized App Store price;
- concise list of current VIP benefits;
- plain-language disclosure near the offer that “Lifetime” means the commercial lifetime of the TyconX Service while it continues to be operated, subject to mandatory consumer law;
- Restore Purchases access;
- Terms and Purchases & Refunds links.

Avoid marketing such as “VIP forever no matter what,” “guaranteed forever,” or anything implying TyconX can never close.

## 4. Restore Purchases

TyconX should expose an obvious user-initiated **Restore Purchases** action, preferably in both the Store/VIP screen and Settings/Support.

Expected behavior:

- validate Apple transaction/entitlement state server-side where possible;
- restore Lifetime VIP when the non-consumable is valid;
- restore a still-valid 30-Day VIP from authoritative entitlement records;
- do not duplicate Diamond consumables;
- make restore idempotent;
- log transaction ID, original transaction ID where applicable, product ID, environment, result, and entitlement correction for audit/support;
- never grant an entitlement only because the client claims a purchase succeeded.

## 5. Refund handling

### App Store purchases
- Do not promise “no refunds.”
- Direct the user to Apple's official refund process for App Store purchases.
- CK-Labs can troubleshoot delivery or entitlement problems but should not claim it controls Apple's refund decision.
- Process Apple refund/revocation information server-side when available.
- When an Apple transaction is refunded/revoked, revoke or correct only the corresponding purchased value/entitlement and linked invalid downstream value as reasonably necessary.
- Keep the action auditable and idempotent.

### Refund abuse / chargebacks
Terms should permit CK-Labs, subject to law, to:
- remove the refunded entitlement;
- remove corresponding unspent purchased value;
- correct an equivalent balance where refunded value was already consumed/transferred;
- temporarily restrict economy/purchase functions during an investigation;
- suspend/terminate for proven fraud or repeated deliberate abuse.

Do not use a refund correction to confiscate unrelated legitimate purchases.

## 6. Hacking, exploits, and corrupted game state

The Terms expressly reserve the right, subject to mandatory law, to:
- detect and investigate exploits, manipulated clients, invalid receipts, scripts, bots, unauthorized APIs, bypasses, and payment abuse;
- use authoritative server logs, receipts, transaction records, backups, and audit data as evidence;
- reverse exploit-generated trades/transfers/rewards;
- recalculate balances, companies, inventory, market activity, scores, and entitlements;
- roll back corrupted state when required to restore game integrity;
- suspend first where immediate action is reasonably required for security, then investigate;
- restore compromised accounts where reasonably verifiable and technically feasible without promising that every transaction can be reversed.

## 7. Permanent TyconX shutdown

The public Terms and purchase policy must disclose before sale that:
- online game access depends on continued operation of TyconX;
- Lifetime VIP means the commercial lifetime of TyconX, not the biological lifetime of the customer;
- TyconX may be discontinued for valid legal, technical, security, platform, economic, force-majeure, or business reasons;
- virtual assets do not automatically become cash-redeemable on shutdown;
- CK-Labs will provide advance notice where legally required and reasonably practicable;
- mandatory refund, termination, price-reduction, warranty, and other consumer remedies are not waived.

## 8. German/EU digital-product protections

The Terms must not attempt to contract out of mandatory consumer law.

Important areas to preserve:
- supply of digital products;
- conformity / defects;
- security and required updates;
- cure/remedy rights;
- price reduction;
- termination and reimbursement;
- rules for modifications of continuously supplied digital products;
- statutory withdrawal rights where applicable.

For digital content supplied immediately, do not assume the withdrawal right automatically disappears. The legally required express consent, acknowledgement, and confirmation conditions must actually be met where applicable.

## 9. Privacy / security data

The Privacy Policy and App Store privacy answers should cover, where actually collected:
- account identifiers;
- gameplay/economy state;
- transaction and purchase validation data;
- support communications;
- security/fraud/abuse logs;
- device/technical/diagnostic information;
- chat/community content;
- analytics;
- third-party processors and platform/payment partners;
- retention and deletion rules;
- EU data-subject rights;
- international transfer safeguards.

Do not claim that the user “consents” to all processing simply by using the Service. Use the correct legal basis for each purpose.

## 10. App Store metadata / review notes

For the first submission of each IAP type, include it with a new app version as required by App Store Connect.

App Review Notes should explain clearly:
- where the Store/VIP screen is located;
- that Diamonds are consumables;
- that 30-Day VIP is non-renewing and lasts exactly 30 days;
- that Lifetime VIP is a non-consumable one-time entitlement;
- how the reviewer can access/test the purchase flow;
- where Restore Purchases is located;
- any test account needed;
- that server-side receipt/transaction validation controls entitlement delivery;
- that no external payment mechanism is used to unlock the same in-app digital content in a way that violates the applicable App Store rules.

## 11. Custom Apple EULA decision

Apple automatically supplies its standard EULA if CK-Labs does not submit a custom EULA.

A CK-Labs custom EULA should only be submitted after it contains Apple's required minimum terms, including:
- agreement is between CK-Labs and the end user, not Apple;
- Apple-compatible scope of license;
- CK-Labs maintenance/support responsibility;
- warranty allocation and Apple refund language required by Apple;
- product-claim responsibility;
- IP-claim responsibility;
- U.S. sanctions/export representation;
- developer legal name/address/telephone/email;
- third-party terms compliance;
- Apple and subsidiaries as third-party beneficiaries.

### Current blocker before a custom EULA is App Store-ready
The repository does not currently establish the full legal operator details needed for Apple's custom EULA and a German commercial legal notice. Before submitting a custom EULA, confirm:
- exact legal trader/entity name behind **CK-Labs**;
- public business postal address;
- public support telephone number;
- any legally required registration / VAT / business identifiers.

Until those details are confirmed, keep Apple's standard EULA active and use the TyconX Terms of Service as the service/game contract.

## 12. Release gate

Do not ship paid IAPs until all of the following pass:
- [ ] Privacy Policy URL works publicly over HTTPS.
- [ ] Support URL works publicly over HTTPS and has a real contact route.
- [ ] Terms URL works publicly over HTTPS.
- [ ] Purchases & Refunds Policy works publicly over HTTPS.
- [ ] Product type for every App Store product is correct.
- [ ] Purchased Diamonds never expire solely because time passes.
- [ ] Lifetime VIP Restore Purchases works after reinstall/new device.
- [ ] Valid 30-Day VIP restores correctly without extending or duplicating the period.
- [ ] Refunded/revoked purchases are reconciled server-side without duplicate value.
- [ ] Purchase grant logic is idempotent.
- [ ] No client-only purchase trust path exists.
- [ ] Store screen clearly explains price, duration, renewal status, and benefits.
- [ ] “Lifetime” disclosure is visible before purchase.
- [ ] App Store privacy nutrition labels match actual code/SDK behavior.
- [ ] App Review notes explain all IAP types and review path.
- [ ] Paid Apps Agreement, banking, and tax setup are current in App Store Connect.
