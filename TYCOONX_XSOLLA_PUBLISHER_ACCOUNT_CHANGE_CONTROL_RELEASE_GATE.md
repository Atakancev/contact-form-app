# TycoonX Xsolla Publisher Account Change-Control Release Gate

**Last reviewed:** September 6, 2026  
**Owner:** CK-Labs  
**Scope:** Official TycoonX web shop using Xsolla

This is an internal commercial/payment release gate. It supplements the canonical TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, `TYCOONX_XSOLLA_REFUND_CHARGEBACK_RELEASE_GATE.md`, and the other payment-entitlement gates. It does not create extra player rights, reduce mandatory consumer rights, or replace the transaction-specific Xsolla agreement, checkout terms, product terms, or current documentation.

## Why this gate exists

Xsolla's current **Publisher Account Terms of Use**, last updated June 30, 2026, contain an operational requirement that is easy to miss when changing a live game catalog. Section 2.5 currently requires a Publisher to inform Xsolla **at least ten (10) business days in advance of planned changes** to the Publisher Account or associated projects. Xsolla gives examples including pricing updates, currency adjustments, adding or removing items, pre-order end dates, and game release dates.

The same current terms also state that the Publisher is responsible for reading Publisher Account/email notices, must safeguard credentials and private keys, must manage Representative roles carefully, and may face suspension or termination of Xsolla services for material non-compliance. These are obligations between CK-Labs and Xsolla. They must not be misrepresented to players as a statutory ten-day price guarantee, a refund promise, or a requirement that TycoonX keep a promotion open.

For TycoonX, the practical risk is simple: a future price, Diamond bundle, VIP offer, currency, country/catalog, or Lifetime VIP sales-window change can be perfectly lawful in the player contract but still be operationally non-compliant with the Xsolla account terms if CK-Labs changes the Xsolla project without the required advance notice.

## 1. Ten-business-day planning rule

For a **planned** Xsolla Publisher Account or project change that falls within the current Section 2.5 requirement:

1. identify the intended production effective date;
2. count backward at least **10 business days**, not 10 calendar days;
3. notify Xsolla through the then-current accepted account/support/contact route;
4. retain evidence of the notification and the proposed effective date;
5. do not assume silence is an approval where a separate Xsolla approval, product term, or account workflow is required; and
6. deploy only after all other legal, platform, tax, consumer-information, security, and technical requirements are satisfied.

Use a longer lead time where the actual Xsolla agreement, product documentation, account workflow, law, tax configuration, fraud review, or support response requires it.

Do not backdate a notice after production changed. Do not describe a change as unplanned merely to avoid the notice requirement when it was actually scheduled in advance.

## 2. Changes that must trigger the Xsolla change-control check

The release checklist must ask whether Section 2.5 applies before CK-Labs intentionally changes any Xsolla-side configuration such as:

- Diamond bundle price or Diamond quantity;
- 30-Day VIP price, availability, or item configuration;
- Lifetime VIP price, SKU, availability, or genuine sales-window configuration;
- regional price tables;
- supported checkout currency configuration;
- adding a new paid item or bundle;
- removing or disabling an existing paid item;
- changing a SKU's product meaning or quantity;
- a planned TycoonX release-date or pre-order configuration where those features are actually used; or
- another planned Publisher Account/project change covered by the then-current Xsolla terms.

This list is deliberately broader than only price changes because Xsolla's current Section 2.5 examples are non-exhaustive.

## 3. This is not a player-facing ten-day guarantee

The Xsolla Publisher Account notice requirement is an internal CK-Labs/Xsolla obligation.

It does **not** mean:

- a TycoonX player is promised ten business days' advance notice for every future one-time price change;
- a displayed future price is locked merely because CK-Labs notified Xsolla;
- a Lifetime VIP promotion must stay open for ten business days;
- a later lower price automatically creates a refund, credit, extra Diamonds, extra VIP time, or price-match right;
- a later higher price creates an additional charge on an already completed one-time purchase; or
- CK-Labs may ignore stricter notice, consent, price-display, withdrawal, conformity, or other mandatory consumer-law rules where they apply.

The final total price and currency shown by the applicable checkout before confirmation govern a completed transaction, subject to mandatory law and lawful treatment of an obvious pricing/configuration error. Completed one-time purchases are not retroactively repriced merely because a later catalog changes.

## 4. Lifetime VIP sales windows

Lifetime VIP remains a **one-time promotional entitlement offered only during selected genuine sales windows**. It may be withdrawn from future sale, may never return, and creates no expectation of continuous availability.

When a Lifetime VIP sales window requires a planned Xsolla item, availability, or price change:

- schedule the Xsolla-side change-control notice early enough for the intended window;
- keep the public countdown, opening/closing date, crossed-out price, and discount claim truthful;
- do not extend a player-facing countdown only because an internal notice was submitted late and then pretend the extension was always planned;
- do not close a valid completed Lifetime VIP entitlement when the future sales window closes;
- do not reopen a closed window merely because an older Xsolla SKU still exists in the catalog; and
- preserve the exact transaction and entitlement mapping for purchases validly completed during the window.

Different genuine Lifetime VIP sales windows may use different future prices. Closing or reopening a future sales window never retroactively changes the price of an already completed purchase.

## 5. Diamonds and bundle changes

Purchased Diamonds do not expire solely because time passes.

For a planned Xsolla Diamond bundle change:

- notify Xsolla in advance where the current Section 2.5 obligation applies;
- keep the SKU/product mapping unambiguous;
- do not silently reuse an old transaction identifier or old SKU meaning for a different Diamond quantity in a way that makes historic fulfillment impossible to reconstruct;
- use the authoritative product/version mapping that applied when the transaction completed;
- do not rewrite an already completed purchase merely because the current bundle later contains more or fewer Diamonds; and
- preserve enough lineage to reverse/refund only the affected purchased value where lawful.

A future 1,000-Diamond bundle replacing a former 800-Diamond bundle does not turn an old valid 800-Diamond transaction into a 1,000-Diamond purchase and does not reduce an old 1,000-Diamond transaction if the future bundle becomes smaller.

## 6. One-time 30-Day VIP changes

30-Day VIP remains a **one-time, non-renewing 30-day entitlement** unless a future compliant product clearly says otherwise.

A planned Xsolla price or catalog change must not:

- silently convert 30-Day VIP into a recurring subscription;
- restart an existing player's 30-day clock;
- shorten an already valid 30-day entitlement;
- duplicate an entitlement because a SKU was replaced; or
- treat the internal Xsolla notice date as the consumer's activation date.

If CK-Labs ever creates a genuinely recurring future product, it needs its own compliant renewal, cancellation, price-change, notice, consent, and platform/payment configuration. This gate does not authorize recurring billing.

## 7. Regional prices, currencies, tax and FX

CK-Labs may set different future prices by genuine country, channel, currency, storefront, or promotion where lawful. For Xsolla-side **planned** regional-price or currency-configuration changes, perform the Section 2.5 change-control check.

Keep these concepts separate:

- **CK-Labs planned catalog change:** may trigger the ten-business-day Xsolla notice requirement;
- **provider/payment-method tax or FX adjustment:** may alter the local checkout total under provider rules without being a CK-Labs-planned catalog change;
- **mandatory VAT/tax display:** must still be handled as required by the transaction and applicable consumer/tax law; and
- **regional-price abuse investigation:** requires actual evidence and must not be inferred merely from language, VPN use, travel, billing currency, or a price difference by itself.

A provider-driven tax or FX change must not be rewritten in player-facing copy as a fake CK-Labs discount or surcharge.

## 8. Obvious pricing/catalog errors

The canonical TycoonX Purchases & Refunds Policy already preserves lawful correction of obvious pricing, currency, tax, catalog, quantity, or entitlement configuration errors.

This gate adds the Xsolla operational layer:

- stop further erroneous sales where technically and legally appropriate;
- preserve the exact erroneous checkout/transaction evidence;
- determine whether the transaction was still pending, unfulfilled, completed, refunded, or otherwise binding under the applicable provider terms and mandatory law;
- notify/contact Xsolla as required for the incident and any planned corrective catalog change;
- do not manufacture a retroactive price or silently charge the customer more;
- where a transaction must lawfully be canceled, refund the amount actually charged through the appropriate provider process; and
- do not use an internal failure to give Xsolla advance notice as a reason to confiscate a player's unrelated paid value.

## 9. Publisher Account security and unauthorized changes

Xsolla's current Publisher Account Terms state that account actions are attributed to the Publisher and place credential/private-key and role-management responsibilities on the Publisher. Treat Publisher Account compromise as a payment-security incident.

Operational minimum:

- restrict Publisher Account access to the people who genuinely need it;
- assign roles/permissions no broader than necessary;
- protect passwords, private keys, project secrets, and recovery methods from source code, public logs, support messages, screenshots, and client applications;
- if compromise or unauthorized use is suspected, notify Xsolla promptly through a verified current channel and rotate/revoke affected credentials where supported;
- inventory recent price, currency, catalog, webhook, project, domain, payment, and Representative changes;
- pause risky new Xsolla fulfillment or catalog editing when transaction authority cannot be trusted; and
- reconcile against authoritative Xsolla transaction records before correcting TycoonX entitlements.

A compromised Publisher Account does not itself prove that a player hacked TycoonX, committed fraud, abused regional pricing, or filed a bad-faith chargeback.

## 10. Notifications are operational input, not inbox noise

Xsolla's current Section 2.6 says the Publisher is responsible for reading Account/email notifications and that ignoring them does not remove the associated obligations or liability.

CK-Labs should therefore maintain a simple documented routine for:

- Publisher Account notices;
- Xsolla legal/product-term updates relevant to TycoonX;
- payment or fraud notices;
- chargeback evidence requests;
- catalog/payment-method changes;
- security notices; and
- account warnings or required actions.

Do not rely on a single spam-prone mailbox as the only source of operational awareness when the same action can be visible in Publisher Account.

## 11. Xsolla documentation and product-term drift

Xsolla's current Publisher Account Terms require compliance with applicable Documentation and allow product-specific terms/conditions to apply. Before a material Xsolla payment release or catalog migration:

- check the live Xsolla documentation for the product actually used by TycoonX;
- check Publisher Account for accepted/new product terms or required actions;
- record the source title, last-updated date where shown, retrieval date, and the production configuration relied upon;
- do not assume a blog post or old integration sample overrides newer operative documentation/account state; and
- fail closed on a new payment route if required provider terms, permissions, or configuration are uncertain.

This evidence is internal release evidence. It should not be copied into player-facing legal prose as if every provider operational rule were a consumer contract term.

## 12. Provider suspension, outage, or rule change

Xsolla currently reserves broad suspension/termination rights for Publisher Account/product non-compliance. TycoonX must therefore avoid making a player-facing promise that the Xsolla web shop or any particular payment method will always remain available.

If Xsolla access is suspended, unavailable, replaced, or materially changed:

- stop presenting unavailable Xsolla checkout as usable;
- do not fabricate a successful payment state;
- keep Apple App Store and Google Play channels operating independently where permitted and technically available;
- preserve valid already-completed Xsolla transactions and entitlement lineage;
- preserve mandatory refunds, withdrawal, conformity, price-reduction, termination, restoration, and other non-waivable rights;
- reconcile delayed/refunded/reversed transactions when authoritative provider state becomes available; and
- if CK-Labs replaces Xsolla in the future, migrate entitlements without duplicating or deleting valid purchased value.

Provider suspension is not permission to expire purchased Diamonds, shorten one-time 30-Day VIP, revoke valid Lifetime VIP, or erase transaction evidence.

## 13. Release evidence for every material Xsolla catalog change

Keep a lightweight record containing at least:

- change owner;
- affected Xsolla project/store and item/SKU;
- old and intended new configuration;
- reason for change;
- whether it is planned or an incident/emergency correction;
- intended effective date/time;
- date/time and channel used to notify Xsolla where required;
- evidence that at least ten business days were allowed where Section 2.5 applies;
- any Xsolla confirmation, support ticket, approval, warning, or required follow-up;
- pre-change and post-change price/currency/quantity/availability evidence;
- TycoonX backend SKU-to-entitlement mapping before and after the change;
- rollback/disable plan; and
- post-release test transaction result where a safe provider-approved test is available.

Do not store payment-card data or unrelated player personal data in this change record.

## 14. Minimum regression cases

Before a material Xsolla catalog/payment release, test at least:

1. A planned Diamond price change is scheduled with the required Xsolla lead-time check.
2. A planned currency change is not deployed simply because 10 calendar days passed; business days are used.
3. Adding a new paid bundle triggers the change-control check.
4. Removing a paid item triggers the change-control check.
5. Closing a genuine Lifetime VIP sales window does not revoke existing Lifetime VIP.
6. Reopening a later genuine Lifetime VIP window can use a different future price without repricing old purchases.
7. Changing a Diamond SKU mapping does not cause old transactions to grant the new quantity.
8. Changing 30-Day VIP catalog configuration does not create recurring billing or restart existing periods.
9. A provider-driven tax/FX change is not falsely labeled as a CK-Labs promotion.
10. A pricing-error correction does not create an unauthorized additional charge.
11. A suspected Publisher Account compromise freezes unsafe changes and triggers provider/security review without accusing players automatically.
12. An Xsolla outage/suspension does not delete purchased Diamonds or valid VIP entitlements.
13. A missed internal Xsolla notice does not become a reason to deny a mandatory consumer remedy.
14. Completed purchases remain tied to the checkout/provider record that actually governed the transaction.

## 15. Release blockers

Do not ship a planned Xsolla catalog/payment change when:

- the current Xsolla terms require advance notice and no evidence of the required notice exists;
- the intended effective date is earlier than the required lead time without a verified provider-approved exception or genuine incident basis;
- the SKU-to-entitlement mapping is ambiguous;
- a future price change would retroactively rewrite a completed transaction;
- a Lifetime VIP catalog change would cancel already valid Lifetime VIP;
- a Diamond change would expire purchased Diamonds merely because time passed;
- a 30-Day VIP change would silently create recurring billing;
- Publisher Account credentials or project authority are suspected compromised and the production configuration cannot be trusted; or
- a new route depends on provider terms/documentation that CK-Labs has not actually reviewed or accepted where required.

## Current Xsolla checkpoint

As of **September 6, 2026**:

- Xsolla's legal index lists the **Publisher Account Terms of Use** as last updated **June 30, 2026**.
- Section 2.5 says Publishers must inform Xsolla at least **ten (10) business days in advance** of planned Publisher Account/project changes and gives pricing, currency adjustments, item additions/removals, pre-order end dates, and game release dates as examples.
- Section 2.6 says Publishers are responsible for reading Account/email notices and that ignoring them does not remove related obligations or liability.
- Sections 2.2 and 2.3 place responsibility on the Publisher for Publisher Account activity, role assignment, credentials, private keys, and prompt notification of security breaches or unauthorized use.
- Sections 4.1 and 4.2 require compliance with applicable Xsolla Documentation and product-specific terms.
- Section 5.5 reserves suspension/termination rights for material non-compliance.

Provider terms can change. Recheck the live Publisher Account Terms, the actual CK-Labs/Xsolla agreement, relevant product-specific terms, and Publisher Account state before relying on this gate for a future production change.

## Manual verification

Run locally without GitHub Actions or paid services:

```bash
node scripts/verify-tycoonx-xsolla-publisher-account-change-control.mjs
```
