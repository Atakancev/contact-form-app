# TycoonX Google Play Pending Purchase & Attribution Release Gate

Last reviewed: September 7, 2026

This operational release gate protects TycoonX Google Play purchases that are delayed, completed while the app is offline, approved on another device, redeemed outside the app, or missing the in-app account identifiers CK-Labs normally attaches. It complements the broader Google Play billing, refund, chargeback, account-binding, and consumer-rights gates. It does not replace Google Play terms or current Android Developers guidance.

TycoonX is in full release. The paid products covered here are purchased Diamonds, one-time non-renewing 30-Day VIP, and Lifetime VIP when that limited-time promotional product is genuinely on sale.

## Current September 7, 2026 Google position

Google's current Play Billing integration guidance, updated September 1, 2026, says:

- a purchase can remain `PENDING` while the buyer completes another payment step, including delayed forms of payment;
- entitlement must be granted only after the verified purchase state becomes `PURCHASED`;
- `queryPurchasesAsync()` should be used when the app establishes a Billing Library connection / comes to the foreground so purchases completed while the app was not running are still detected;
- a pending purchase can be approved on another device, including by a family member;
- out-of-app purchases such as promotion redemptions can be discovered by the same processing flow;
- purchases made outside the app might not contain `obfuscatedAccountId` or `obfuscatedProfileId`; Google says the app may then grant to the logged-in user or ask the user to choose a preferred account;
- the three-day acknowledgement period begins only after a pending purchase becomes `PURCHASED`; and
- Google's current fraud guidance says **not to use `orderId` to detect duplicate purchases or as a database primary key**, because not every purchase has an order ID, including some promo-code purchases.

These rules mean a missing callback, missing `orderId`, or missing obfuscated account identifier is not by itself evidence that the purchase is invalid or abusive.

## P0 release rules

### 1. Never grant paid value while Google still says `PENDING`

For every Google Play purchase:

- verify the purchase with authoritative Google evidence on the secure backend;
- treat `PENDING` as a payment-in-progress state, not as paid entitlement;
- do not grant purchased Diamonds, start one-time 30-Day VIP, or grant Lifetime VIP while the purchase is still `PENDING`;
- do not consume or acknowledge a pending purchase as though paid fulfillment has already completed; and
- do not tell the player the purchase is completed until the authoritative state is `PURCHASED`.

A pending purchase is also not automatic evidence of insufficient funds, fraud, hacking, chargeback abuse, account compromise, regional-price abuse, or entitlement abuse. Delayed payment is a normal Google Play lifecycle state.

### 2. Completion can happen while TycoonX is not running

Do not depend on the original `PurchasesUpdatedListener` callback surviving the entire purchase lifecycle.

TycoonX must:

- process the callback when available;
- call `queryPurchasesAsync()` after a successful Billing Library connection and when the app returns to the foreground so completed pending purchases are recovered;
- use Real-time Developer Notifications and authoritative server verification where configured to keep backend state synchronized even while the user is offline;
- treat RTDN or a client callback as a trigger to verify the purchase, not as standalone payment authority; and
- make fulfillment idempotent so the same purchase discovered through listener, foreground query, RTDN, retry, or support reconciliation is granted exactly once.

Example: a player starts a 200-Diamond purchase, closes TycoonX, then completes the delayed payment later. On the next launch, `queryPurchasesAsync()` finds the now-`PURCHASED` transaction. After backend verification, TycoonX grants the 200 Diamonds exactly once even though the original app session never received the completion callback.

### 3. Parent or family approval on another device does not change the product

Google documents that a pending purchase may complete after approval on another device. Therefore:

- do not require the original purchasing device to be online before fulfilling a verified completed purchase;
- do not create a second purchase merely because the approval happened elsewhere;
- do not reinterpret parental/family approval as consent to unrelated TycoonX features, a waiver of consumer rights, or evidence that the account holder is an adult;
- do not use another-device approval itself as evidence of account sharing, account compromise, or entitlement abuse; and
- retain the original product distinction after completion.

Purchased Diamonds remain purchased Diamonds. One-time 30-Day VIP remains one-time and non-renewing. A valid Lifetime VIP transaction remains the specific limited-time promotional entitlement that was actually sold; family approval cannot reopen a closed Lifetime VIP sales window for a new transaction.

### 4. Missing obfuscated account identifiers require safe attribution, not guessing

TycoonX should attach `obfuscatedAccountId` / `obfuscatedProfileId` to ordinary in-app purchase flows where appropriate and verify the returned identifiers on the secure backend before using them for attribution.

However, Google explicitly warns that purchases made outside the app may not contain those identifiers. In that case:

- absence of an obfuscated identifier is not automatic proof of fraud, promo abuse, account compromise, or an invalid purchase;
- do not invent an account mapping from nickname, language, country, device model, IP address, billing-country guess, support message, or whichever TycoonX account happened to open the app first;
- if the authoritative purchase is visible to the currently signed-in Google Play user and the TycoonX account relationship is safe and unambiguous under the implementation, CK-Labs may bind it to the logged-in TycoonX account;
- otherwise place the entitlement into an unclaimed/reconciliation state and let the user choose or prove the intended TycoonX account through a secure flow;
- once a Google purchase token has been validly and finally bound to a TycoonX account, do not let another account claim the same purchase merely by presenting the same receipt/order ID; and
- account-recovery or compromise cases must use the dedicated account-binding/support process rather than arbitrary reassignment.

Do not create a permanent entitlement orphan merely because an external promotion redemption lacked in-app identifiers. Equally, do not make "first account to ask support" the ownership rule.

### 5. Purchase token is the transaction-deduplication anchor; `orderId` is not a safe primary key

Google's current fraud guidance expressly says not to use `orderId` to detect duplicate purchases or as a database primary key because some legitimate purchases, including some promo-code purchases, may have no order ID.

For TycoonX:

- use the authoritative Google purchase token and verified product/purchase state as the core purchase-processing/idempotency evidence appropriate to the Google API;
- do not reject a legitimate purchase solely because `orderId` is absent;
- do not synthesize or guess an `orderId` merely to satisfy a local database assumption;
- do not use an emailed order number, screenshot, or user-entered order number alone to grant Diamonds or VIP;
- if an order ID exists, retain it as useful financial/support/refund evidence where lawfully appropriate, but not as the sole entitlement identity; and
- migrations must preserve old purchase-token bindings so replaying historical tokens cannot generate duplicate value.

A promo redemption with no `orderId` can still be a genuine Google Play purchase. Missing `orderId` is not a fraud flag by itself.

### 6. Acknowledgement clock starts on completion, not on initiation

For a pending purchase:

- do not start TycoonX's acknowledgement deadline from the moment the user first opens the payment flow;
- start operational acknowledgement urgency when Google reports `PURCHASED` under the current Google rule;
- once paid entitlement is validly granted, acknowledge/consume promptly through the correct Google path;
- backend/server processing should not wait for the player to reopen the app if authoritative Google notification already establishes a valid completed purchase and the entitlement can be safely attributed; and
- if CK-Labs misses acknowledgement because of its own processing outage, do not classify Google's resulting automatic refund/revocation as player fraud or chargeback abuse.

The acknowledgement deadline is a platform-processing obligation. It is not a contractual excuse to keep money without providing the paid entitlement or a lawful refund/remedy.

### 7. Cancellation before completion creates no paid entitlement to claw back

If a pending one-time purchase is canceled or expires before reaching `PURCHASED`:

- no paid TycoonX entitlement should have been granted in the first place;
- a `ONE_TIME_PRODUCT_CANCELED` notification is a state transition to reconcile, not evidence that the user performed a chargeback;
- do not deduct unrelated purchased Diamonds, cancel unrelated VIP, or sanction the account simply because a pending transaction was canceled; and
- keep any free/promotional/test grant that is legally and operationally independent of the canceled paid transaction separate from the payment event.

If a bug granted value while the transaction was only pending, correct the specific erroneous grant proportionately and transparently under the existing configuration-error/economy-correction rules, with mandatory consumer protections preserved. Do not turn CK-Labs' premature-fulfillment bug into an accusation against the player.

### 8. Product-specific attribution rules

#### Purchased Diamonds

- Grant the verified quantity/value once, only after `PURCHASED`.
- A missing `orderId` or missing obfuscated account identifier does not make paid Diamonds expire or become confiscable.
- A token already fulfilled to one account cannot be replayed to duplicate the Diamond grant on another account.
- Refund/void corrections remain bound to the affected transaction and must not consume unrelated Diamond purchases.

#### One-time 30-Day VIP

- Start the original 30-day period only after the completed purchase is verified and safely attributed.
- Do not restart the 30-day clock each time the purchase is rediscovered through `queryPurchasesAsync()` or RTDN.
- Do not turn a delayed completion into an auto-renewing subscription or stack a second 30-day period unless a separate valid product/transaction lawfully supports it.

#### Lifetime VIP

- Lifetime VIP remains a one-time promotional offering available only during selected genuine sales windows, may be withdrawn from future sale, may never return, and creates no expectation of continuous availability.
- A purchase initiated while a genuine window is open but remaining `PENDING` at the closing moment must be reconciled against Google's actual completed transaction and the disclosed offer/catalog rules. Do not invent a new second sale after closure merely to fulfill it.
- If Google validly completes an already-authorized pending Lifetime VIP transaction after the window closes, do not label the buyer abusive solely because the completion timestamp is later than the sales-window closing timestamp. Honor the legally supportable completed transaction or use a lawful provider refund/unwind if the original authorization was not valid under the actual offer configuration.
- CK-Labs must not keep a completed payment while refusing the paid Lifetime VIP entitlement solely because its own window-close configuration failed to account for an already pending transaction.

### 9. Mandatory German/EU consumer rights remain intact

Nothing in pending-state, account-attribution, promo-redemption, acknowledgement, or anti-fraud logic waives mandatory rights.

Where applicable, preserve statutory rights concerning clear pre-contract information, total price, withdrawal, consent to early digital performance where legally required, conformity, updates, cure, price reduction, termination, refund, damages/liability, and other non-waivable remedies.

An attribution problem must not be used to run down a legal remedy period unfairly. CK-Labs should preserve the verified transaction evidence and the player's timely support/remedy request while ownership is being securely resolved.

### 10. Required tests before release

Test at least:

1. Diamond purchase stays `PENDING`: no value granted.
2. Diamond purchase becomes `PURCHASED` while app is foregrounded: one grant.
3. Diamond purchase becomes `PURCHASED` while app is closed: foreground `queryPurchasesAsync()` recovers it once.
4. Same completed purchase arrives via listener + RTDN + query + retry: one grant only.
5. Parent/family approval completes on another device: verified entitlement still arrives once.
6. Out-of-app/promo purchase lacks obfuscated IDs: no fraud label; secure account-selection/reconciliation path is used.
7. Legitimate promo purchase has no `orderId`: purchase is not rejected; purchase token remains the idempotency anchor.
8. User enters someone else's order ID in support: no entitlement is granted from the order ID alone.
9. Pending purchase is canceled: no paid entitlement existed and unrelated balances are untouched.
10. CK-Labs accidentally granted while pending: only the attributable erroneous grant is corrected; no punitive account action follows automatically.
11. One-time 30-Day VIP completion is rediscovered twice: original period is not restarted.
12. Lifetime VIP was initiated during an open sale window and validly completes later: transaction is reconciled without treating the later completion timestamp alone as abuse.
13. A completed transaction cannot be safely attributed: it remains claimable/reconcilable rather than being guessed onto the wrong account or discarded.
14. A completed purchase is acknowledged/consumed promptly after fulfillment; the operational deadline is not incorrectly measured from the original pending initiation time.

## Release blockers

Block the relevant Google Play purchase rollout if any of these are true:

- TycoonX grants Diamonds or VIP while the Google purchase state is still `PENDING`;
- completed pending purchases can be lost merely because the app was closed or disconnected;
- `queryPurchasesAsync()` is not used to recover relevant completed purchases when the app reconnects/returns to foreground;
- `orderId` is the database primary key or sole duplicate detector for Google purchases;
- a legitimate purchase without `orderId` is automatically rejected or classified as fraud;
- missing `obfuscatedAccountId` / `obfuscatedProfileId` causes automatic rejection, arbitrary account assignment, or abuse classification;
- the same purchase token can grant paid entitlement to more than one TycoonX account;
- parental/family approval on another device is treated by itself as account compromise or adult-status proof;
- a canceled pending purchase causes a chargeback penalty or deduction from unrelated paid value;
- the acknowledgement clock is measured from `PENDING` initiation instead of the transition to `PURCHASED`;
- a later-discovered completed one-time 30-Day VIP restarts its 30-day period;
- a pending Lifetime VIP transaction is used to reopen a new sales window after closure; or
- CK-Labs' own processing or attribution failure is used to waive mandatory German/EU consumer remedies.

## Evidence to retain

Retain only what is necessary and lawful for payment, accounting, fraud prevention, support, consumer remedies, and entitlement integrity, including as appropriate:

- purchase token and verified product/quantity/state;
- authoritative transition timestamps and acknowledgement/consumption state;
- safe internal account-binding decision and reason;
- order ID if Google actually provides one;
- provider refund/void state where applicable; and
- idempotency/reconciliation result.

Do not retain extra identity or device data merely to compensate for an absent obfuscated account identifier. Apply the TycoonX Privacy Policy, data minimization, purpose limitation, security, and retention rules.

## Source checkpoint

Current official references checked September 7, 2026:

- Google Play Billing integration guidance, last updated September 1, 2026: `https://developer.android.com/google/play/billing/integrate`
- Google Play Billing fraud/security guidance: `https://developer.android.com/google/play/billing/security`
- Google Play RTDN reference, last updated September 1, 2026: `https://developer.android.com/google/play/billing/rtdn-reference`

Recheck current Google documentation and Play Console behavior before a material billing change or release. If Google changes identifier, pending-state, acknowledgement, or out-of-app purchase behavior, update this gate before relying on the old assumptions.

## Verification

Run:

```bash
node scripts/verify-tycoonx-google-play-pending-purchase-attribution.mjs
```
