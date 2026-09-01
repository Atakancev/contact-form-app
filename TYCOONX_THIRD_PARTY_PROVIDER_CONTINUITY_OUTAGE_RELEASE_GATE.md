# TycoonX Third-Party Provider Continuity, Outage & Migration Release Gate

**Operational release QA. Last reviewed: September 1, 2026.**

This gate hardens TycoonX against outages, rule changes, API deprecations, suspensions, migrations, and permanent exits involving Apple, Google Play, Xsolla, authentication, hosting, database, storage, network, CDN, messaging, anti-fraud, analytics, or other critical third-party providers.

It complements the canonical TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, and the existing provider-specific release gates. It does not replace mandatory law, platform rules, transaction-specific provider terms, or a provider-specific incident runbook.

The public legal baseline already says that CK-Labs may replace, add, or discontinue providers for valid reasons, that provider outages can affect TycoonX, and that CK-Labs remains responsible for obligations that cannot lawfully be shifted to a third party. This gate operationalizes that meaning. It does **not** materially change the canonical public legal meaning and therefore does not reopen localization by itself.

## 1. Provider failure is not one generic state

Before changing user accounts, payments, entitlements, or access, classify the event as one of the following:

1. **Temporary provider outage or degradation** — the provider is expected to recover.
2. **Provider API, SDK, policy, price, tax, or rule change** — service continues but CK-Labs must adapt.
3. **Planned provider migration** — CK-Labs deliberately moves to another provider.
4. **Emergency provider replacement** — security, legal, availability, or provider failure makes a rapid move necessary.
5. **Provider account suspension or termination** — a platform/provider limits CK-Labs rather than an individual player.
6. **Regional provider availability loss** — a provider or payment method becomes unavailable only in specific countries/storefronts.
7. **Permanent provider exit** — the dependency or relevant product is discontinued.

Do not collapse these into a generic `provider_failed` flag. The correct user, payment, privacy, tax, and consumer-remedy consequences differ.

## 2. Dependency failure does not automatically erase CK-Labs obligations

A genuine third-party failure, cyberattack, force-majeure event, or platform rule change can be relevant to fault, timing, technical possibility, and remedies. It is not an automatic waiver of every CK-Labs obligation.

Where mandatory German/EU digital-product law applies, keep separate questions for:

- whether the digital product was supplied as required;
- whether it remains conforming, secure, accessible, and usable;
- whether a required update must be provided;
- whether cure is possible and completed in a reasonable time;
- whether termination or price reduction rights arise;
- whether a product modification requires notice or a no-cost termination route; and
- whether another mandatory remedy applies.

Do not use wording such as “Apple was down,” “Xsolla failed,” “the host crashed,” or “force majeure” as an automatic support rejection where mandatory rights still apply.

## 3. Freeze uncertain writes before guessing

When an authoritative provider state cannot be verified, the safe default is to pause the risky write rather than invent a result.

Examples:

- If payment confirmation is unavailable, do not grant paid value merely because the client displayed success.
- If refund state is unavailable, do not revoke an entitlement merely because one webhook timed out.
- If a provider API is returning inconsistent data, do not bulk-remove paid entitlements while the source of truth is uncertain.
- If an authentication provider is unavailable, do not create a second TycoonX account automatically and strand the original paid account.
- If a database restore predates recent purchases, do not treat the restored snapshot as proof that those purchases never happened.

Emergency read-only mode, purchase disablement, transfer freezes, or temporary feature disablement can be safer than speculative irreversible writes.

## 4. Every critical provider needs an authority map

Maintain a current provider authority table showing which system controls each fact.

At minimum record:

| Fact | Primary authority | TycoonX responsibility |
| --- | --- | --- |
| Apple transaction/refund/revocation state | Apple / verified StoreKit or App Store Server data | Validate, map, fulfill, reconcile the matching TycoonX entitlement |
| Google Play purchase/refund/void state | Google Play Developer API / verified purchase token state | Validate, map, fulfill, acknowledge/consume where appropriate, reconcile |
| Xsolla payment/refund/chargeback state | Configured Xsolla transaction/webhook/API state | Verify, map, fulfill, reconcile the transaction-specific entitlement |
| TycoonX internal account ownership | CK-Labs internal account identity | Preserve stable internal account linkage across auth-provider changes |
| Purchased Diamond ledger | CK-Labs authoritative entitlement/finance records plus provider provenance | Prevent duplicate fulfillment and isolate legitimate purchased value |
| 30-Day VIP clock | CK-Labs authoritative entitlement record plus original provider purchase | Preserve original activation/expiry and remaining valid time |
| Lifetime VIP | CK-Labs authoritative entitlement record plus restorable provider provenance | Preserve one valid Lifetime VIP without hidden expiry or duplication |
| Tax/merchant evidence | Transaction-specific checkout/receipt/provider record | Preserve the merchant, price, currency, tax treatment, and evidence for that transaction |

A current client display is useful evidence but is not automatically the legal or technical source of truth.

## 5. Apple outage and migration rules

For Apple App Store purchases and restorable entitlements:

- Use verified StoreKit/App Store Server transaction state for fulfillment and reconciliation rather than a client-only success callback.
- Keep App Store Server Notifications V2 handling idempotent and deduplicate notification processing.
- Do not make one notification the only recovery path. Reconcile against current authoritative StoreKit/App Store Server state when notifications are missed or delayed.
- Keep a visible Restore Purchases mechanism where Apple requires restoration.
- Restore a valid Lifetime VIP once. Do not restore consumed Diamonds as a second purchase.
- Preserve the original 30-Day VIP clock where the product remains valid; a restore does not start a fresh 30 days.
- If an Apple outage prevents immediate verification, delay irreversible grant/revocation decisions until verification can be recovered where reasonably possible.
- Do not classify a missing Apple notification, approval delay, outage, or receipt-verification failure as user fraud without independent evidence.
- If Apple changes a required API, entitlement, storefront rule, or purchase program, classify whether the change requires an app update, server update, checkout change, legal notice, product unavailability, or regional disablement before release.

Apple states that restorable In-App Purchases must have a restore mechanism and provides current entitlement/transaction data for restoring prior purchases. App Store Server Notifications V1 is deprecated; production integrations should use the current V2 model.

## 6. Google Play outage and migration rules

For Google Play purchases:

- `PENDING` is not `PURCHASED`. Do not grant paid value before the purchase reaches a verified purchased state.
- Treat Real-time Developer Notifications as state-change signals, not as the full authoritative purchase record. Verify the resulting state through the appropriate Google Play Developer API where needed before final entitlement action.
- Deduplicate Pub/Sub notifications using message identity and keep entitlement changes idempotent.
- Reconcile purchases after app launch/foreground/reconnection and through server-side recovery paths so a missed notification does not permanently strand a valid purchase.
- Preserve `purchaseToken`, product identity, account attribution where available, order/reference information where present, and the resulting entitlement action.
- Acknowledge or consume only after valid delivery and according to the actual product type. Do not consume a non-consumable Lifetime VIP merely to make it repurchasable.
- If Play Billing/API requirements change, treat unsupported billing versions as a release/migration issue, not as a reason to erase valid historic purchases.
- Do not treat an RTDN delay, pending cancellation, provider-side refund review, or billing-service outage as user fraud without independent evidence.

Google’s current documentation says RTDN indicates that purchase state changed and the Developer API should be used for complete status. Google also requires completed purchases to be acknowledged/consumed within its applicable acknowledgement window or they can be refunded and revoked.

## 7. Xsolla outage and migration rules

For the official TycoonX webshop using Xsolla:

- Verify the actual CK-Labs project webhook model instead of assuming every Xsolla project uses the same events.
- Newer Store projects can use combined `order_paid` / `order_canceled` webhooks, while older integrations can use separate payment/refund and order webhooks. Process the events applicable to the configured project.
- Verify webhook authenticity against the correct request data and make processing idempotent.
- A browser return URL, local success page, or locally created order is not final payment authority.
- If CK-Labs is temporarily unable to receive webhooks, reconcile transaction state after recovery rather than blindly replaying every historic order.
- Do not assume that returning an error to an Xsolla refund webhook safely vetoes a provider-initiated refund. Reconcile final provider state.
- Preserve the transaction-specific Xsolla entity/merchant shown to the consumer, price, currency, tax presentation, transaction ID, payment state, refund/chargeback state, and applicable refund-policy configuration.
- A future replacement of Xsolla affects future transactions unless a lawful migration requires more. Do not rewrite the historical merchant, tax, or refund authority of older Xsolla transactions merely because another provider later handles new purchases.

## 8. Replacing a payment provider does not rewrite old contracts

If CK-Labs changes payment provider:

- Keep old transaction records linked to the provider and merchant that actually processed them.
- Keep new purchases linked to the new provider and merchant actually shown at checkout.
- Do not merge both into a fictional single merchant history.
- Do not retroactively change a completed transaction’s price, currency, tax, or payment channel because the provider changed later.
- Keep refunds, chargebacks, tax records, and payment disputes routed according to the transaction-specific provider role and mandatory law.
- Preserve enough evidence after provider termination to investigate open disputes and mandatory claims for the legally relevant retention period.

A replacement provider must not be allowed to replay old Apple, Google Play, or Xsolla purchases as fresh TycoonX value.

## 9. Authentication-provider continuity is an entitlement issue too

A login provider is not the paid-entitlement owner.

Maintain a stable CK-Labs internal account identifier independent of Apple, Google, email, or another authentication provider. Provider subject IDs or login tokens may help prove control, but should not be the sole permanent entitlement key if that creates avoidable lock-in.

Before changing or removing an authentication provider:

- map every affected login identity to the stable internal TycoonX account;
- preserve purchased Diamond provenance, active 30-Day VIP, Lifetime VIP, moderation state, security history, and open payment disputes;
- provide a safe re-binding or recovery path where reasonably necessary;
- prevent automatic creation of duplicate accounts when the old provider is merely unavailable;
- verify ownership using proportionate evidence;
- never ask users for Apple/Google/Xsolla/email passwords, full card numbers, CVVs, authentication backup codes, or unrelated sensitive data; and
- keep account compromise review separate from provider-migration errors.

If a provider outage blocks login, emergency containment may be appropriate. It does not by itself prove that the player violated the Terms or forfeited paid entitlements.

## 10. Hosting, database, storage, network, and CDN migration

Before migrating or replacing infrastructure that stores or serves entitlement/account state:

- create a dated migration plan and rollback boundary;
- identify the authoritative source for purchases and entitlements before, during, and after cutover;
- verify backups and restoration procedures;
- preserve transaction provenance and legally required records;
- use checksums, counts, reconciliation queries, or another reliable method to detect missing/duplicate records;
- reconcile provider transactions that completed across the snapshot/cutover boundary exactly once;
- prevent a restored snapshot from restarting 30-Day VIP or removing post-snapshot purchases;
- prevent migration from adding a hidden expiry to Lifetime VIP or duplicating it;
- preserve purchased Diamond records separately from unsupported duplicated/exploit-generated value where the architecture permits; and
- test a rollback before relying on it for production recovery.

A database backup is not automatically authoritative for payments that occurred after the backup was taken.

## 11. Security emergency involving a provider

If a provider, API key, webhook secret, OAuth client, service credential, or integration appears compromised:

1. disable or restrict the affected integration where necessary;
2. rotate/revoke secrets and tokens as appropriate;
3. invalidate or reauthenticate affected sessions where justified;
4. suspend high-risk purchases/transfers rather than guessing at transaction state;
5. preserve forensic evidence and an incident timeline;
6. assess GDPR/security-notification duties where personal data is involved;
7. reconcile paid transactions after the trusted path is restored; and
8. separate the provider incident from user punishment unless independent evidence shows user misconduct.

Security containment can be immediate. Permanent account enforcement still requires its own basis and proportionality assessment.

## 12. Privacy and provider replacement gate

Before sending personal data to a new provider, classify the actual data-protection role and purpose instead of assuming that every vendor is automatically a processor.

Where GDPR applies:

- if the provider acts as a processor, ensure the Article 28 requirements and appropriate contract/processing instructions are in place;
- maintain appropriate technical and organisational security measures under Article 32;
- if personal data will be transferred to a third country/international organisation, evaluate Chapter V and Article 44 transfer requirements before production transfer;
- update the privacy notice where the new processing, recipient category, purpose, transfer, or other information materially requires it;
- obtain valid consent only where consent is actually the required legal basis; merely updating the Privacy Policy is not universal consent;
- minimize migration data and do not send unrelated account, payment, moderation, or security data merely because a provider can accept it; and
- verify deletion/return obligations when the old provider relationship ends.

Do not copy production personal data into a new vendor merely to “test migration” without an appropriate lawful, secure production process.

## 13. Required app updates and unsupported versions

Provider migrations can require a new app version, SDK, billing library, authentication flow, certificate, or security update.

Where German digital-product law applies, preserve BGB § 327f update duties. If CK-Labs wants to rely on a user’s failure to install an update for a resulting conformity issue, verify the statutory conditions, including clear information about availability and the consequences of not installing, and make sure deficient installation instructions were not the cause.

Do not use “unsupported version” as a blanket reason to deny a valid server-side entitlement that can still be verified from authoritative records.

## 14. Regional provider loss and storefront restrictions

If a payment or platform provider becomes unavailable in a country/storefront:

- disable new purchases through that route where necessary rather than offering a flow that cannot complete lawfully;
- do not encourage users to falsify country, tax residence, payment location, or storefront eligibility;
- preserve valid prior entitlements where required and technically possible;
- keep transaction-specific refund/withdrawal routes for historic purchases;
- evaluate whether another authorized provider can be offered lawfully in that market; and
- communicate a material access/payment change where law or the contract requires notice.

A regional provider loss is not automatically a permanent shutdown of TycoonX globally.

## 15. Paid-product isolation during provider incidents

Provider incidents must not collapse all paid products into one balance flag.

### Purchased Diamonds

- A provider outage does not make valid purchased Diamonds expire.
- Do not replay a consumable Diamond transaction simply because reconciliation runs twice.
- If the purchase is valid but missing, deliver it once after verification.
- If the transaction is refunded/reversed, correct only the matching value and directly related invalid state where lawful.

### One-time 30-Day VIP

- Preserve the original start and expiry.
- Provider migration or restore does not start a fresh 30-day period.
- If access was materially unavailable during the paid period, assess the applicable cure, extension, price-reduction, termination, refund, or other remedy rather than automatically restarting the product or automatically refusing compensation.

### Lifetime VIP

- Provider replacement is not itself the end of TycoonX’s commercial operating lifetime.
- If TycoonX continues, preserve one valid Lifetime VIP across provider/authentication/infrastructure migration where required.
- Do not convert Lifetime VIP into 30-Day VIP, invent a migration expiry, or duplicate the entitlement.

## 16. Outages and German/EU digital-product remedies

A third-party outage can be the factual cause of a TycoonX defect or interruption without eliminating the consumer-facing remedy framework.

Where the German digital-product rules apply:

- BGB § 327b places the burden of proving supply on the trader for covered supply questions;
- BGB § 327e includes functionality, compatibility, accessibility, continuity, and security among relevant conformity characteristics;
- BGB § 327f requires conformity-preserving updates, including security updates, during the relevant period;
- BGB § 327l requires cure within a reasonable time after notice and without significant inconvenience, where cure is available;
- BGB § 327m can permit termination in the statutory cases, including failed or impossible cure and sufficiently serious defects;
- BGB § 327n can permit price reduction, including proportionate reduction for periods of non-conformity in continuously supplied products; and
- BGB § 327r separately regulates certain modifications of continuously supplied digital products beyond what is necessary for conformity.

Do not promise automatic money compensation for every short outage. Do not impose a blanket “third-party outage = no remedy” rule either.

A voluntary Diamond credit or VIP extension can be goodwill. It must not silently replace a mandatory monetary remedy where mandatory law requires something else.

## 17. Incident evidence packet

For a material provider incident or migration, preserve an appropriately minimized evidence packet containing:

- provider and affected service;
- event classification from Section 1;
- incident/migration start and end timestamps;
- affected countries/storefronts/platforms;
- affected TycoonX functions;
- purchase and entitlement flows disabled or degraded;
- provider status/incident reference where available;
- relevant provider/API/version configuration;
- authoritative records relied on;
- sample reconciliation results;
- number/category of affected purchases without retaining unnecessary personal data in the release packet;
- treatment of Diamonds, 30-Day VIP, Lifetime VIP, refunds, and chargebacks;
- data-protection/security assessment where personal data or credentials are involved;
- user notice/support wording where required;
- rollback/forward-fix decision; and
- post-incident sign-off.

The goal is to make a later dispute reproducible without keeping unnecessary personal data forever.

## 18. Release regression scenarios

Before declaring production parity, test and retain evidence for at least these scenarios:

| Scenario | Expected invariant |
| --- | --- |
| Apple server notification delayed | Valid transaction can still reconcile from authoritative Apple state; no duplicate grant |
| Apple restore after reinstall | Lifetime VIP restores once; Diamonds are not replayed |
| Google purchase remains `PENDING` during outage | No paid entitlement until verified `PURCHASED` |
| Duplicate Google RTDN | Message/event processing is idempotent; value changes once |
| Xsolla webhook endpoint unavailable during payment | Order reconciles after recovery; browser success does not grant by itself |
| Xsolla refund arrives while TycoonX endpoint errors | Final provider refund state still reconciles; unrelated purchases remain |
| Authentication provider unavailable | Existing internal account is not replaced by an accidental duplicate account |
| Authentication provider replaced | Same internal account retains purchased Diamonds, original 30-Day VIP clock, and one Lifetime VIP |
| Database rollback crosses a completed purchase | Post-snapshot valid purchase is recovered exactly once |
| Database rollback crosses an active 30-Day VIP | Original expiry is preserved, not restarted |
| Payment provider replaced | Historic transactions retain historic merchant/provider/refund provenance |
| Provider compromise | Keys/secrets rotate and risky flows pause without automatically banning users |
| Regional payment route removed | New checkout is disabled or replaced lawfully; prior entitlements remain reconcilable |
| Required SDK/billing update | Supported update path exists; valid historical entitlement is not erased |
| Multi-day paid-feature outage | Impact period and remedy analysis are recorded; no blanket no-remedy rule |
| TycoonX continues after Xsolla exit | Lifetime VIP does not end merely because Xsolla exits |

## 19. Go-live blockers

Treat the following as blockers for enabling the affected provider path:

- payment success cannot be verified server-side or through an authoritative provider path;
- retries can grant or revoke the same paid value more than once;
- there is no recovery path after missed notifications/webhooks;
- provider migration can orphan an internal TycoonX account or paid entitlement;
- a database rollback can lose/replay post-snapshot purchases without reconciliation;
- 30-Day VIP can be restarted by restore or migration;
- Lifetime VIP can be converted, duplicated, or silently expired by migration;
- historic transaction merchant/price/tax/refund provenance would be overwritten;
- a new processor/provider would receive personal data without a documented lawful/security/transfer assessment where required; or
- the support team would have to guess whether an event is a provider outage, refund, fraud case, entitlement defect, account compromise, or permanent service shutdown.

## 20. Brand, release status, and localization invariants

- Player-facing and legal prose must display **TycoonX** exactly.
- Technical paths containing `tyconx` may remain only where changing them could break URLs or integrations.
- TycoonX is in full release as of **September 1, 2026**.
- Do not describe the live game, purchases, VIP, Diamonds, users, rewards, or current legal terms as beta.
- Genuine test, staging, review, promotional, or complimentary grants may be described as such where legally useful without implying that live TycoonX is a beta.
- This gate does not materially change the canonical public Terms, Purchases & Refunds, Privacy, or Community Standards meaning. No localized document is reopened by this operational gate.
- If a future provider decision materially changes canonical public meaning, update English first, reopen only the affected document type in `TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md`, and resynchronize the 25 locales in the required order.

## 21. Official references checked September 1, 2026

### German / EU

- German BGB §§ 327 et seq., digital products: https://www.gesetze-im-internet.de/bgb/
- BGB § 327b, supply and burden of proof: https://www.gesetze-im-internet.de/bgb/__327b.html
- BGB § 327e, conformity characteristics: https://www.gesetze-im-internet.de/bgb/__327e.html
- BGB § 327f, required updates/security updates: https://www.gesetze-im-internet.de/bgb/__327f.html
- BGB § 327l, cure: https://www.gesetze-im-internet.de/bgb/__327l.html
- BGB § 327m, termination/damages for covered defects: https://www.gesetze-im-internet.de/bgb/__327m.html
- BGB § 327n, price reduction: https://www.gesetze-im-internet.de/bgb/__327n.html
- BGB § 327r, modifications: https://www.gesetze-im-internet.de/bgb/__327r.html
- GDPR Regulation (EU) 2016/679, including Articles 28, 32, and Chapter V/Article 44: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng

### Apple

- Apple In-App Purchase and restoration guidance: https://developer.apple.com/in-app-purchase/
- App Store Server Notifications: https://developer.apple.com/documentation/appstoreservernotifications

### Google Play

- Google Play Billing integration: https://developer.android.com/google/play/billing/integrate
- Real-time Developer Notifications reference: https://developer.android.com/google/play/billing/rtdn-reference

### Xsolla

- Xsolla webhooks: https://developers.xsolla.com/webhooks/overview/
- Xsolla Store order webhooks: https://developers.xsolla.com/webhooks/store-webhooks/

## 22. Manual regression

After changes to this gate or related provider logic, run the dedicated verifier locally without GitHub Actions or paid CI:

```bash
node scripts/verify-tycoonx-provider-continuity.mjs
```

Also run the repository-wide legal verifier where practical:

```bash
node scripts/verify-tycoonx-legal.mjs
```
