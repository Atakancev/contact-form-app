# TycoonX Google Play Billing Library Version Lifecycle Release Gate

Last reviewed: September 6, 2026

This is an operational release gate for the Google Play build of TycoonX. It complements `TYCOONX_GOOGLE_PLAY_2026_PAYMENT_TRANSITION_GATE.md` and `TYCOONX_GOOGLE_PLAY_BILLING_CHOICE_PBL_9_1_IMPLEMENTATION_GATE.md`. It does not replace Google Play program terms, Play Console warnings, or current Android Developers documentation.

TycoonX is in full release. This gate exists because an otherwise legally correct purchase flow can still become commercially unavailable if the Android build uses a Google Play Billing Library version that Google no longer accepts for new apps or updates.

## Current September 6, 2026 position

Google's current Play Billing Library deprecation table says:

- Play Billing Library 7: normal new-app/update deadline **August 31, 2026**; extension deadline **November 1, 2026**;
- Play Billing Library 8: normal new-app/update deadline **August 31, 2027**; extension deadline **November 1, 2027**; and
- Play Billing Library 9: normal new-app/update deadline **August 31, 2028**; extension deadline **November 1, 2028**.

The August 31, 2026 normal deadline for Play Billing Library 7 has therefore already passed.

Google also says existing apps can continue to work on an older library, while **new apps and updates must use a supported version**. An old installed TycoonX build continuing to function is not evidence that the same library version is still acceptable for a new Play submission.

## P0 release rules

### 1. Normal Google Play Billing path

For any new TycoonX Android submission or update after August 31, 2026:

- do not submit a build that relies on Play Billing Library 7 merely because an older production build still works;
- use a currently supported Play Billing Library version unless CK-Labs has an actual Play Console extension covering the app and submission period;
- as of this review, treat Play Billing Library 8 or 9 as the supported baseline for ordinary Google Play Billing submissions, subject to current Google documentation and Play Console state;
- prefer the current stable supported version that is compatible with the TycoonX codebase rather than targeting the oldest possible supported version solely to postpone migration; and
- recheck Google's current support table immediately before each material Play submission.

### 2. Extension is evidence-based and temporary

A Play Billing Library 7 extension is not automatic.

If CK-Labs relies on the November 1, 2026 extension window:

- retain evidence that the extension was actually requested/available and accepted for the TycoonX app in Play Console;
- record the warning/policy-status page, extension approval/state, date, package name, affected release track, and responsible release owner;
- do not treat November 1 as a universal grace period for every developer without account-specific evidence;
- do not use the extension to justify postponing the migration beyond the covered period; and
- fail the affected release if the claimed extension cannot be verified.

After November 1, 2026, do not rely on Play Billing Library 7 for new TycoonX submissions unless Google publishes a later operative exception that actually applies to TycoonX.

### 3. Billing Choice is stricter than the ordinary baseline

Do not confuse the broad Play Billing Library support lifecycle with a program-specific minimum.

The existing TycoonX Billing Choice gate currently requires **Play Billing Library 9.1 or higher** for that flow. Therefore:

- a build using Play Billing Library 8 may still satisfy the ordinary library-support lifecycle while being **ineligible for TycoonX Billing Choice**;
- a Play Billing Library 7 extension does not authorize CK-Labs to bypass a Billing Choice 9.1+ requirement;
- program-specific API/version requirements override the lower generic baseline for that program; and
- if Billing Choice is enabled, the dedicated Billing Choice implementation verifier must also pass.

### 4. Inspect the actual release artifact, not only source declarations

Before release, verify the effective billing library version in the Android artifact/manifest and dependency graph.

Check at least:

- the app/module `build.gradle` or version-catalog dependency;
- transitive SDK/plugin dependencies that may bundle or pull an older Play Billing Library;
- the merged `AndroidManifest.xml` and `com.google.android.play.billingclient.version` metadata where Google expects it;
- the exact AAB/APK intended for production;
- maintained production, internal, closed, or open-test artifacts where a stale billing dependency could keep a Play Console warning active; and
- Play Console policy-status warnings after the updated artifact is processed.

Do not assume changing one Gradle line proves every active/maintained artifact is compliant.

### 5. Existing installs are not player wrongdoing

A deprecation warning or old installed client is a release-maintenance issue, not evidence of fraud, chargeback abuse, entitlement abuse, or hacking.

If an old TycoonX build still runs:

- do not revoke purchased Diamonds solely because the client uses an older billing library;
- do not restart, shorten, or delete a valid one-time 30-Day VIP solely because of billing-library age;
- do not cancel valid Lifetime VIP solely because of billing-library age;
- do not classify a player as abusive merely because their device has not updated yet; and
- use proportionate minimum-version/security controls where an obsolete client can no longer safely or correctly transact.

Where mandatory consumer law requires continued conformity, updates, remedies, notice, or support, a platform-library migration does not waive those duties.

### 6. Pending purchases and acknowledgement remain separate lifecycle controls

Upgrading the library does not change the fundamental purchase-state protections already used by TycoonX:

- grant paid entitlement only after Google reports a verified `PURCHASED` state, not while the purchase is `PENDING`;
- the acknowledgement clock begins only after the purchase reaches the completed state under Google's current rules;
- completed purchases must be acknowledged/consumed using the correct flow so they are not automatically refunded/revoked for failure to process them; and
- migration retries must be idempotent and must not duplicate Diamonds, VIP, Google acknowledgements, or entitlement-ledger entries.

### 7. Unsupported-version migration must not break product classification

A Billing Library migration must preserve the current TycoonX product distinctions:

#### Purchased Diamonds

Purchased Diamonds are consumable paid value and do not expire solely because time passes. A library upgrade must not replay old purchase tokens, double-consume, duplicate value, or delete unrelated legitimate Diamonds.

#### One-time 30-Day VIP

30-Day VIP remains a **one-time, non-renewing 30-day entitlement**. A migration must not silently convert it into an auto-renewing subscription, restart its clock, or create a second entitlement from an old token.

#### Lifetime VIP

Lifetime VIP remains a **one-time promotional entitlement available only during selected genuine sales windows**. A library upgrade, new offer API, product migration, or restored purchase must not reopen a closed sales window or create an expectation that Lifetime VIP will remain continuously purchasable.

### 8. Refunds, chargebacks, restoration, and authoritative records

A billing-library migration must preserve transaction authority boundaries.

- Google remains authoritative for Google Play purchase/refund/revocation state.
- TycoonX server/entitlement records remain authoritative for entitlement fulfillment after valid provider evidence.
- Client callbacks alone are not payment authority.
- Refund, revocation, and chargeback handling must correct only the affected transaction/value and must not remove unrelated legitimate purchases.
- Restoration after migration must be idempotent and based on authoritative Google/account/server evidence.
- Do not convert a migration mismatch into an automatic accusation against the player.

### 9. Operational evidence packet

For every TycoonX Android production submission after August 31, 2026, retain a dated record of:

- effective Play Billing Library version;
- source/dependency declaration and merged artifact evidence;
- Play Console policy warning/state;
- extension evidence if relying on an extension;
- package name and submitted version code;
- production/test track reviewed;
- Billing Choice or other program-specific minimum where applicable;
- purchase/acknowledgement/refund smoke-test result; and
- current official Google support-table retrieval date.

Do not put credentials, payment tokens, private customer data, or sensitive Play Console exports into this public repository.

## Regression blockers

Fail the affected Android release if any of these occur:

- after August 31, 2026, a new TycoonX update is submitted with Play Billing Library 7 without verified extension coverage;
- November 1, 2026 is treated as an automatic grace period without Play Console evidence;
- an old installed build continuing to work is treated as proof that its library version remains acceptable for new submissions;
- a Billing Choice build uses a generic supported version while ignoring the current 9.1+ program-specific requirement;
- the declared Gradle version is current but the production artifact or transitive dependency still exposes a stale billing library;
- a billing-library migration duplicates an entitlement, acknowledgement, consumption, refund, or correction;
- a player loses valid paid value solely because their installed build is old; or
- billing-library deprecation is treated as evidence of player fraud or entitlement abuse.

## Manual verification

Run the dedicated verifier:

```bash
node scripts/verify-tycoonx-google-play-billing-library-lifecycle.mjs
```

Also run:

```bash
node scripts/verify-tycoonx-google-play-2026-transition.mjs
node scripts/verify-tycoonx-30-day-vip.mjs
node scripts/verify-tycoonx-legal.mjs
```

Immediately before a Google Play submission, recheck the current official Play Billing Library deprecation table and the TycoonX Play Console policy-status page. Platform deadlines and program-specific minimum versions can change.