# TycoonX VIP Entitlement and Commercial-Integrity Recheck

**Last reviewed: September 10, 2026.**  
Owner: CK-Labs  
Scope: read-only production verification of VIP entitlement provenance, Diamond-to-VIP conversion, expiry communications and provider-state boundaries.

This is an internal legal/implementation release gate. It does not replace the canonical TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, Community Standards, provider terms or mandatory law. It does not authorize a production database change, entitlement change, balance change, sanction or player communication.

## 1. Result

The current paid-entitlement implementation has strong server-authoritative provider controls, but two P0 groups remain open:

1. an entitlement-provenance chain in which a client-influenceable `profiles.vip` cache can later be preserved as though it represented a trustworthy prior entitlement; and
2. a commercial-communication path in which an official-looking VIP-expiry message can be generated from caller-supplied target/expiry/source data and currently uses renewal wording even for one-time/non-renewing entitlement candidates.

The existing canonical/localized legal wording should not be expanded to normalize either defect. They should be fixed technically. Until then, an abnormal VIP state or a VIP-expiry notification is not automatically reliable evidence of a valid purchase, a valid expiry, fraud or player intent.

## 2. P0: self-writable `profiles.vip` can be promoted into persistent preserved VIP

A fresh production check reconfirmed that the authenticated role can update its own `profiles.vip` field under the current generic owner-update surface. The authoritative Diamond-pass and Xsolla entitlement tables are not directly writable by the authenticated role, which is an important positive control, but trusted entitlement paths still use the raw `profiles.vip` boolean as evidence that a prior VIP entitlement should be preserved.

### Diamond-to-VIP path

`activate_vip_with_diamonds()` is otherwise materially server-authoritative:

- it derives the account from `auth.uid()`;
- it reads the current Diamond cost from server configuration rather than trusting a client price;
- it locks the player's profile;
- it verifies and deducts the Diamond balance atomically;
- it records the Diamond exchange event; and
- it creates a 30-day VIP period, queued after a later existing provider-backed VIP expiry where applicable.

However, when no prior Diamond pass or recognized provider entitlement explains the previous state, the function can preserve a pre-existing `profiles.vip = true` value. Effective-VIP logic can then continue honoring that preserved state after the dated entitlement period.

Because `profiles.vip` itself remains client-influenceable, an unauthorized self-set VIP boolean can contaminate an otherwise legitimate Diamond conversion and become persistent preserved VIP state.

### Xsolla path

`xsolla_apply_subscription_event(...)` is not directly executable by ordinary authenticated or anonymous roles, which is a strong boundary. But when creating a first recognized Xsolla entitlement record, it can also preserve a pre-existing profile VIP state when no independently authoritative prior entitlement explains it. The effective-VIP logic can then honor that preservation after the dated provider period.

A real later purchase must not be able to launder an untrusted earlier cache boolean into an indefinite trusted entitlement.

### Acceptance criterion

1. Make `profiles.vip` server-owned before relying on it as entitlement provenance.
2. Do not infer a preserved prior entitlement from a bare profile boolean. Preserve only a separately identified authoritative source, for example a valid Lifetime VIP/manual staff grant record with provenance, a valid provider entitlement, or a documented migration record.
3. Store prior entitlement source/type and, where applicable, a transaction/grant identifier rather than only a boolean.
4. Make effective-VIP calculation derive from authoritative entitlement records. A convenience/cache boolean on `profiles` should be an output/cache, not the source of truth.
5. Regression-test no prior VIP, valid one-time 30-Day VIP, Lifetime VIP, documented complimentary grant, Diamond pass, Xsolla purchase, RevenueCat purchase, expired purchase, refunded/reversed purchase, compromised account and an intentionally corrupted `profiles.vip` cache.
6. A legitimate one-time 30-Day VIP or Lifetime VIP must survive the hardening. The fix must not erase valid paid or documented complimentary entitlements merely because the cache/provenance model changes.

## 3. P0: VIP-expiry commercial messages are not sufficiently authoritative

`send_vip_expiry_professor_notification(p_user_id, p_expires_at, p_lead_days, p_source)` is currently SECURITY DEFINER and executable by both anonymous and authenticated client roles. The reviewed function does not authenticate/authorize the supplied target and does not verify the supplied expiry timestamp/source against RevenueCat, Xsolla, Diamond-pass or another authoritative entitlement record before generating the notification.

If the target profile exists and is active, it can create an official-looking in-app VIP-expiry reminder and can attempt push delivery where enabled.

That is not merely an evidence-quality problem. A false expiry or purchase-oriented reminder can influence a consumer's transactional decision. Any such message must therefore be caused by authoritative entitlement state rather than caller-authored assertions.

### Acceptance criterion

- Remove anonymous and ordinary-client EXECUTE permission from the raw sender.
- Make the sender internal to a trusted scheduler/service path or require an equivalent fail-closed trusted-caller check.
- Derive the target account, actual expiry, entitlement source and reminder window from authoritative server/provider records inside the trusted operation.
- Do not accept arbitrary caller-supplied expiry/source data as the commercial facts shown to the player.
- Preserve idempotency so retries cannot spam the same reminder.
- Log the authoritative entitlement/source record that justified the reminder.
- Never use a notification row or push-delivery record as independent proof that the entitlement existed or expired.
- If a staff/manual reminder path is retained, it must re-resolve entitlement facts server-side and use server-authoritative staff authorization rather than a client-editable profile role flag.

## 4. P0 commercial-copy mismatch: one-time 30-Day VIP must not be presented as auto-renewing

The current raw Professor sender uses the same renewal-oriented text family for candidates that the global processor classifies as, among other things, one-time or non-renewing sources. The English message tells the player to renew VIP, and equivalent renewal language is used in the other supported message variants.

That is inconsistent with the canonical TycoonX product rule: the current 30-Day VIP is a **one-time, non-renewing digital entitlement**. It does not automatically renew or rebill. A player can make a separate future purchase only if an eligible VIP offer is actually available at that time.

The notification's `p_source` value is currently metadata rather than a source-specific copy decision. A single generic renewal message should not be reused across one-time, non-renewing, canceled, Lifetime or any future recurring entitlement type.

### Required source-aware message doctrine

For a one-time 30-Day VIP expiry, player-facing copy should communicate the substance below in the player's supported locale, naturally rather than word-for-word:

> Your one-time 30-Day VIP ends in 24 hours. It does not renew automatically. If another eligible VIP offer is available, you can purchase it separately to regain the applicable VIP benefits. When your current VIP ends, VIP-only automatic purchase features will stop unless another valid VIP entitlement is active.

For a three-day reminder, change only the timing fact. Do not call the product a subscription and do not imply automatic renewal, automatic rebilling or guaranteed future availability.

For Lifetime VIP, there should normally be **no expiry reminder** because a valid Lifetime VIP entitlement has no ordinary 30-day expiry. If a future truly recurring product is ever introduced, it must have its own product-specific compliant renewal, billing, price-change, cancellation and reminder rules rather than reusing the one-time 30-Day VIP copy.

If a source represents a canceled or non-renewing legacy recurring entitlement, the message must accurately describe that source's real provider state and must not be reused as the current one-time 30-Day VIP description.

### Release-language requirements

- Use **TycoonX** exactly in any player-facing brand reference.
- Do not use stale pre-release language that could imply the released game is still in beta.
- Prefer factual current-benefit wording such as `VIP benefits` or specifically supported perks. Do not use vague pre-release-style promises such as early access to new content unless that is a precise current commercial benefit and the wording cannot mislead about the released status of TycoonX.
- The reminder should never imply that the player must buy again to preserve unrelated purchases, Diamonds, Lifetime VIP or other valid entitlements.

### Localization requirements for the reminder system

The production sender currently has a dedicated message table for many languages, but its locale normalization does not cleanly mirror the full legal/app locale set. For example, generic `pt` and generic `zh` are not handled as distinct canonical locale keys in the same way as the legal hub, while Arabic is normalized to an `ar_SA` message branch.

Commercially influential purchase/expiry communications should use the application's canonical locale-resolution layer and provide native, source-accurate copy for all supported locales/variants actually offered by TycoonX. Regional variants should not silently collapse where the app otherwise treats them separately. Arabic presentation must remain RTL in the UI layer.

## 5. P1: global expiry-reminder processor should be scheduler/service-only

`process_vip_expiry_professor_reminders(...)` is currently SECURITY DEFINER and executable by anonymous/authenticated roles.

Unlike the raw sender, the reviewed processor materially improves entitlement validation. It derives candidates from RevenueCat/Xsolla state, checks active profile/VIP state, excludes conflicting later/active sources, uses one-day/three-day windows and has a uniqueness/deduplication log. Ordinary callers therefore do not appear able to fabricate arbitrary expiry facts through this processor alone.

Even so, a global production reminder sweep is a service/scheduler responsibility rather than an ordinary player action. Restrict its execution to the trusted worker path and retain the current server-derived selection and deduplication controls.

## 6. P1 release-language cleanup: historical free-VIP claim path remains deployed but disabled

The historical free-VIP claim RPC remains deployed and executable by authenticated users. Current production configuration keeps the controlling historical free-VIP flag disabled, so the reviewed function cannot currently grant free VIP through that old mechanism. Its presence is therefore not evidence that live TycoonX currently offers free VIP through that path.

However, its disabled error path still contains stale player-readable pre-release wording. An approved engineering cleanup should retire/revoke the obsolete RPC if no supported client requires it, or at minimum neutralize the player-readable wording while preserving any compatibility-sensitive technical identifier that must temporarily remain.

Do not reactivate the historical free-VIP flag as part of legal cleanup.

## 7. Positive controls verified in the same sweep

The following controls should be preserved and should not be misreported as vulnerabilities:

- RevenueCat purchase-application functions reviewed in the privilege scan are not executable by ordinary anonymous/authenticated roles.
- Xsolla purchase/subscription/reversal application functions reviewed in the privilege scan are not executable by ordinary anonymous/authenticated roles.
- Reviewed Diamond-pass, Xsolla entitlement and RevenueCat event/subscriber tables do not grant ordinary authenticated users direct mutation authority over the authoritative provider records.
- `activate_vip_with_diamonds()` binds the purchaser to `auth.uid()`, uses the server-configured Diamond cost, checks/locks the balance, deducts Diamonds atomically and records an exchange event. The defect is prior-entitlement provenance, not caller control of the Diamond price.
- The server-configured Diamond-to-VIP cost is an implementation/catalog value, not a permanent legal promise. Future lawful changes remain governed by the displayed offer and canonical future-price rules.
- The reviewed Diamond energy-refill path binds to `auth.uid()`, validates the Diamond count, locks the profile, checks available Diamonds, applies its server-side limit, deducts Diamonds and updates energy atomically.
- The reviewed legacy Logistics refund path binds to the authenticated user, limits eligibility to that user's eligible records and withdraws the refunded records as part of settlement, materially reducing repeat-refund risk.
- Anonymous EXECUTE visibility on some VIP status/collection helpers does not itself prove anonymous entitlement collection where the function fails when `auth.uid()` is null. Least-privilege cleanup is still preferable.

## 8. Legal/product effect

No canonical English or localized legal clause should promise that a raw `profiles.vip` boolean or a reminder notification is authoritative. Legal reconciliation should continue to rely on valid transaction, provider, server and documented-grant records, subject to mandatory rights and the player's ability to challenge an incorrect record.

A valid purchase or documented Lifetime VIP/complimentary entitlement must not be removed merely because CK-Labs later repairs the cache/provenance model. Conversely, an entitlement that exists only because of knowing manipulation of a client-writable field may be investigated and proportionately corrected using reliable evidence. Account compromise, support mistakes, migration defects and provider reconciliation errors must remain distinguishable from intentional abuse.

False, stale or source-inaccurate expiry reminders must be corrected as operational incidents. They must not be used to deny a refund, prove an expiry, prove fraud or override the authoritative transaction/entitlement record.

The current legal documents already classify 30-Day VIP correctly as one-time/non-renewing and preserve Lifetime VIP, Diamonds, provider distinctions and mandatory rights. The commercial-copy mismatch is therefore an implementation/content defect, not a reason to weaken or rewrite the canonical legal product definition.

## 9. Regression cases before closure

Before closing this gate, verify all of the following against deployed production definitions and supported player-facing copy:

1. `profiles.vip` is server-owned or otherwise cannot be used by an ordinary client to create entitlement provenance.
2. Diamond-to-VIP preservation uses an independently authoritative prior entitlement source.
3. Xsolla preservation uses an independently authoritative prior entitlement source.
4. Effective-VIP calculation does not convert a corrupted cache boolean into indefinite entitlement.
5. Ordinary anonymous/authenticated users cannot execute the raw VIP-expiry sender.
6. Ordinary anonymous/authenticated users cannot run the global expiry-reminder processor.
7. The sender re-resolves target/source/expiry from authoritative entitlement records.
8. A one-time 30-Day VIP reminder explicitly says it does not renew automatically and only offers a separate future purchase if an eligible offer is available.
9. Lifetime VIP does not receive an ordinary expiry reminder.
10. A future recurring product, if introduced, uses separate subscription-specific billing/renewal/cancellation copy and rules.
11. Refunded/reversed/expired/stacked/provider-conflicting entitlements do not produce a false reminder.
12. A deliberately stale or fabricated caller-supplied expiry cannot create a commercial message.
13. Supported locale variants receive native, source-accurate copy; Arabic is rendered RTL by the UI.
14. No stale pre-release wording remains in current player-readable VIP paths.
15. No valid one-time 30-Day VIP, Lifetime VIP, Diamond entitlement or mandatory consumer remedy is lost through the hardening.

Until these controls are fixed and reverified, the technical commercial-readiness gate remains open.