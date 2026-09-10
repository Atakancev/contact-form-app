# TycoonX Production Remediation Recheck

**Last reviewed: September 10, 2026.**  
Owner: CK-Labs  
Scope: read-only verification against `TYCOONX_FINAL_LEGAL_RELEASE_READINESS.md`.

This document records whether previously identified implementation blockers have actually been remediated in production. It does not authorize a database migration, player sanction, entitlement removal, balance change, policy change or other production mutation.

## 1. Current result

A second targeted read-only production follow-up still found **no complete verified closure among the representative critical controls sampled in this run**. The legal/localization framework remains substantially complete, but the technical commercial-readiness gate stays open.

One partial hardening remains verified in `_internal_shop_connected_fill(...)`: its current destination lookup resolves the shop slot through `user_shop_assets` and requires that shop asset to belong to the supplied `p_user_id`. This is useful defense in depth, but it does **not** close the original identity-authority finding because the function remains SECURITY DEFINER, remains broadly executable by ordinary client roles, accepts caller-supplied `p_user_id`, and rewrites the effective JWT subject to that supplied identity. The server must derive or strictly authorize the effective user rather than trusting an arbitrary caller-provided identity.

Do not close a finding merely because a UI path appears safe. For SECURITY DEFINER functions, direct RPC exposure, RLS composition, grants and server-side validation must be checked independently.

### Latest verification details

The newest production read-only inspection adds several precise confirmations without changing the legal meaning of the player-facing documents:

- `rpc_add_xp(amount)` now delegates to `apply_current_user_xp(...)`, but the delegated function still accepts the caller-supplied XP amount and applies it to the authenticated player's progression without proving the gameplay event that earned it. The refactor therefore does **not** close the caller-controlled XP finding.
- `_internal_industrial_connected_fill(...)` remains SECURITY DEFINER, broadly executable by client roles, accepts caller-supplied `p_user_id`, and rewrites the effective JWT subject to that supplied identity. Its facility/source lookups are tied to the supplied identity, but the identity itself still is not derived from or independently authorized against the real caller.
- The richer six-argument `company_supply_request_update(...)` does mention export-contract and V2-offer linkage, but only to preserve linked quantity/minimum-quality behavior. It still writes the caller-supplied `unit_price`. A fresh trigger inspection found no BEFORE trigger on `company_supply_requests` that independently revalidates the linked contract/offer price before that write. The inconsistent linked-price finding therefore remains fully open.
- `shop_auto_fill_cheapest(...)` and `shop_market_buy_and_store_agri(...)` both resolve `user_shop_assets` for shop metadata, but the reviewed lookups still do not require the destination shop owner to equal `auth.uid()`. Merely joining `user_shop_assets` is not an ownership control. The same acceptance criterion continues to apply to the livestock, mining and factory buy-and-store variants.
- Company recruitment RLS remains demonstrably broken at the raw policy layer: the reviewed Company job-post management and manager application-read policies still contain the tautological condition `mm.company_id = mm.company_id` instead of correlating the manager's Company with the protected post/application Company.
- Art auction self-bid protection remains incomplete for resales. `social_bid_art(...)` delegates to the internal settlement function, and the reviewed settlement still rejects self-bids by comparing the bidder against the original artist `user_id`, not the current resale `owner_id`.
- The broad `profiles` public SELECT and sensitive authenticated self-UPDATE surfaces remain present. The Diamond balance remains outside the reviewed generic authenticated profile UPDATE grant, which continues to be an important positive control.
- A fresh deployed-function brand scan still finds the legacy misspelled brand string in **12 production function definitions**. No database text was changed in this audit.

These checks strengthen the evidence for the existing release blockers; they do not create a new contractual restriction and do not justify treating ordinary players as wrongdoers merely because insecure backend state exists.

## 2. Critical authority findings still confirmed open

The following previously documented controls remain materially open in the reviewed production definitions:

- `rpc_add_xp(amount)` still lets an authenticated caller supply the positive XP amount for their own account without independently proving the gameplay event that earned it.
- `rpc_add_energy(amount)` still lets an authenticated caller supply the positive energy amount without independently proving the timer, reward, purchase or gameplay source.
- `gain_xp(user_id, amount)` remains a broadly executable arbitrary-target progression helper. The wider arbitrary-target progression family remains a remediation target until each relevant helper is independently reverified after engineering changes.
- `specialization_upgrade_refund_wallet_credit(user_id, amount)` remains a broadly executable raw wallet-credit helper.
- `set_housing_tenant_cooldown(user_id, ...)` remains broadly executable with a supplied target user, while the related cooldown state is still part of gameplay enforcement.
- `_spawn_next_house_plot(country)` remains a privileged Housing-supply creation helper exposed more broadly than a normal player action requires.
- `_internal_shop_connected_fill(...)` remains an identity-bearing internal helper exposed to ordinary client roles. Its destination is now tied to the supplied `p_user_id`, but the caller can still supply that identity and the function still changes effective JWT subject state. `_internal_industrial_connected_fill(...)` is now separately reconfirmed with the same identity-boundary problem.
- `force_update_stock(...)`, `bulk_update_crypto_prices(...)`, `automate_stock_prices()` and `run_stock_price_automation_safe()` remain exposed more broadly than player-facing market-price mutation requires.
- Internal banking helpers previously identified in the master matrix remain subject to trusted/internal boundary remediation and must be reverified after changes rather than assumed safe from client UI behavior.
- Global/system care, daily-task and reward workers identified in the master matrix remain subject to trusted-worker boundary remediation until their deployed grants and internal authorization are demonstrably narrowed.
- `send_company_event_notification(...)` remains a generic official-looking notification path that should be caused by authoritative server events rather than caller-authored assertions.

This is not an exhaustive replacement for the master matrix. It is a fresh confirmation that representative P0/P1 groups have not yet been demonstrably closed.

## 3. Profile authority and public-profile exposure remain open

The current production profile permission model still materially exceeds what an ordinary player should control or what an anonymous visitor should receive by default.

The authenticated role retains UPDATE access to sensitive profile columns including VIP/staff-role state, moderation/security state, progression state such as XP/energy and the level-reward checkpoint, plus other account fields that should be server or staff controlled. The owner-update policy then permits the authenticated player to update their own row. The Diamond balance is an important positive exception in the reviewed grants: it was not part of the authenticated generic profile UPDATE surface.

Anonymous/public profile reads also remain too broad. The reviewed public SELECT path still exposes substantially more account, device, moderation, activity and economic state than a minimal public player-card surface requires.

**Acceptance criterion:** replace generic client UPDATE authority with a narrowly defined player-editable allowlist, protect entitlement/staff/moderation/progression/security fields with fail-closed server authority, and expose a minimal public profile view/RPC rather than the raw broad profile row. Recheck every downstream RLS policy that trusts profile role flags after those flags become server-authoritative.

## 4. Company supply update remains inconsistent across overloads

Production currently contains two `company_supply_request_update(...)` overloads with materially different validation.

The older four-argument overload checks an export-linked request against the linked export contract's `unit_price` before accepting an updated price.

The richer six-argument overload, which also supports minimum quality and notes, authenticates and checks `manage_supply`. It recognizes linked export-contract and V2-offer state for quantity/minimum-quality behavior, but the reviewed body still does not reload the linked contract/offer price before writing the new `unit_price`. A fresh trigger review found audit, note-metadata, linked-V2 cancellation, reconciliation, status-normalization, Finance V2 context and notification triggers, but no trigger that independently enforces the linked commercial price before the update is accepted.

For an export-linked request the richer path preserves quantity/minimum-quality constraints while still writing the caller-supplied price. For a V2-offer-linked request it preserves minimum quality while still writing the caller-supplied price.

**Acceptance criterion:** every update overload that can mutate `unit_price` must revalidate the same linked commercial ceiling/floor and immutable contract facts as the authoritative creation/settlement path. Prefer one canonical update implementation rather than maintaining divergent validation rules across overloads.

## 5. Shop destination ownership remains unbound in the reviewed player-facing server paths

`shop_auto_fill_cheapest(p_slot_id, ...)` authenticates the caller and locks `user_shop_slots` by the supplied slot ID, but the reviewed destination lookup does not bind that slot to the authenticated user's owned shop before continuing.

The reviewed function later joins `user_shop_assets` to resolve shop metadata, but the lookup is by shop-asset ID without an owner predicate. That metadata lookup therefore does not cure the destination-ownership problem.

The reviewed `shop_market_buy_and_store_agri/live/mine/factory(...)` helpers use the same destination pattern: they load and later update the supplied slot without first proving that the destination shop belongs to the authenticated caller. The agriculture variant was re-read in full and likewise resolves `user_shop_assets` for shop kind without requiring owner equality. Because these helpers are SECURITY DEFINER, ordinary table RLS cannot be relied on as a substitute for an explicit server-side ownership check inside the function.

This finding is separate from the partial hardening observed in `_internal_shop_connected_fill(...)`. The internal connected-fill helper now ties its slot to the supplied `p_user_id`, but that supplied identity is itself insufficiently trusted. The player-facing auto-fill/buy-and-store functions still need a direct `auth.uid()` destination-owner check.

**Acceptance criterion:** resolve the supplied slot through `user_shop_assets`/owner state and require the destination owner to equal `auth.uid()` before any source stock, wallet, average-cost or destination-stock mutation occurs. Internal helpers must additionally derive or securely authorize the effective user rather than accepting arbitrary identity rebinding.

## 6. Chat confidentiality recheck: Executive boundary works, ordinary Company/Union boundary still needs hardening

The current `messages` table has RLS enabled. Its Executive Company Chat SELECT boundary is a **RESTRICTIVE** policy, while the generic read policies are permissive. PostgreSQL combines restrictive policies with the permissive result, so the Executive restriction is not nullified merely because generic permissive SELECT policies also exist.

That is an important positive correction: **the current Executive raw-read boundary should not be described as defeated by the generic permissive policies.**

However, the restrictive condition is specifically keyed to `is_executive_company_message`. Equivalent raw membership restrictions were not found for ordinary Company or Union messages in this policy set. Those ordinary restricted channels therefore still need a server-side audience condition rather than relying on Flutter/client filtering.

**Acceptance criterion:** preserve the working Executive restrictive policy and add equivalent authoritative Company/Union audience enforcement for non-public messages. Regression tests must prove that outsiders cannot retrieve raw Company/Union message history even when they know IDs or issue direct queries.

## 7. Player-facing brand cleanup scope remains open

A fresh scan of current production function definitions still finds the legacy misspelled brand string embedded in **12 deployed function definitions**. The affected definitions include Company press-release text, NPC job naming, chat mention labels, profile-activity market-name checks, minimum-version notifications, Social Table invite copy, upgrade-completion copy, product-research notifications, profile-activity cron logic, Company bankruptcy-news normalization and welcome messaging.

Some occurrences are internal comparison/default strings and some are directly capable of producing player-facing text. None were changed in this legal audit because database changes require a separately approved engineering migration.

**Acceptance criterion:** an approved migration should replace every rendered/player-facing occurrence with `TycoonX`, then re-scan all deployed function definitions and relevant configuration/content tables. Compatibility-sensitive technical identifiers may remain only where changing them would break routes or integrations.

## 8. Evidence and enforcement while technical gaps remain

Server acceptance alone is not proof that a player acted lawfully if the player knowingly exploited an authorization, validation, replay, race or settlement defect. The inverse is equally important: an abnormal row or successful request alone is not proof of knowing exploitation.

Before a serious sanction, correlate authoritative settlement/finance records, authentication/session evidence, timestamps, ownership, repeated behavior, impossible-state transitions and relevant provider records. Distinguish compromised accounts, stale clients, retries, outages and CK-Labs defects from deliberate abuse wherever reasonably possible.

Corrections should target directly attributable invalid game state proportionately. They should not automatically erase unrelated legitimate wealth, purchased Diamonds, one-time non-renewing 30-Day VIP or valid Lifetime VIP. Mandatory statutory remedies remain available where applicable.

## 9. Current law and provider checkpoint

The latest September 10, 2026 follow-up did not identify a material provider/law meaning change requiring the canonical English purchase/legal documents or all 25 localized versions to be reopened.

Apple's current App Review Guidelines continue to require the applicable In-App Purchase framework for in-app digital functionality and in-game currencies, state that purchased in-game IAP currency may not expire, require restoration for restorable purchases, and apply storefront/program-specific rules to external purchase links and similar exceptions.

Google Play's current Payments policy continues to cover digital goods and virtual currency, requires clear and accurate pricing, limits virtual currency to the app/game title for which it was purchased, and provides alternative-billing/external-offer paths only in eligible regions/programs subject to their requirements.

Xsolla's current refund documentation continues to distinguish ordering/payment-provider responsibilities, refund eligibility, payment-method effects and EU/EEA withdrawal treatment. Its developer refund documentation, updated September 7, 2026, also documents full/partial refund processing and refund webhooks. That operational update does not change the existing canonical allocation of responsibilities: CK-Labs remains responsible for truthful TycoonX product/entitlement delivery and obligations that cannot lawfully be shifted to a payment provider.

German BGB §§ 307, 327d, 327i and 327r continue to preserve the relevant controls on unfair/unclear standard terms, digital-product conformity/remedies and qualifying modifications to continuously supplied digital products. GDPR Articles 5, 25 and 32 continue to support data minimisation, privacy by design/default and risk-appropriate confidentiality/security controls.

## 10. Next verification target

Continue production remediation verification against `TYCOONX_FINAL_LEGAL_RELEASE_READINESS.md`. Close only findings that are demonstrably fixed in the deployed definitions/policies/grants. Priority order remains:

1. profile/staff/entitlement and public-profile authority;
2. raw XP/energy/wallet/reward authority;
3. cross-user and shop-destination helpers;
4. market/Company/Union/Art/stock/bank settlement authority;
5. Company/Union/social confidentiality and official-event notification authority;
6. trusted scheduler/service boundaries;
7. approved player-facing brand cleanup;
8. final non-GitHub-Actions regression plus current provider/German/EU closure.

Until those technical findings are closed, legal wording should not be expanded merely to normalize insecure implementation behavior.