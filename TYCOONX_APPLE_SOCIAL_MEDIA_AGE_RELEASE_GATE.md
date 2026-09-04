# TycoonX Apple Social Media & Age-Range Release Gate

Last reviewed: 2026-09-05  
Operator/business name used in player-facing documents: **CK-Labs**

This checklist covers Apple’s current App Store social-media age-rating declaration and age-assurance tooling for TycoonX. It is an operational release gate. It does not replace the TycoonX Terms, Privacy Policy, Community Standards, Apple requirements, or mandatory local law.

TycoonX went to full release on **September 1, 2026**. Apple’s September 2026 submission requirement is therefore a **current production-submission requirement**, not a future launch task and not a beta requirement.

## 1. P0 now: classify TycoonX social-media capabilities before every relevant Apple submission

Apple’s current App Store age-rating framework defines a **Social Media** capability as redistribution, amplification, or interaction with user-generated content through a social feed or similar discovery method that visibly spreads content to many users. Examples can include feeds that let users engage with or amplify user-generated content through views, likes, comments, shares, or similar discovery features.

Apple made the social-media questions available in the App Store Connect age-rating questionnaire in July 2026. **Starting in September 2026, developers are required to indicate whether an app or game includes social-media capabilities when submitting a new app, new version, or update to the App Store, and when submitting for notarization for alternative distribution.** As of this September 5, 2026 review, that requirement is active.

Before TycoonX’s next relevant submission or notarization:

- [ ] Inventory every shipped TycoonX community surface that distributes or helps users discover UGC, including feeds, community/search/discovery views, public profile content, public art/music/book content, comments, reactions, likes, shares, reposts, or similar amplification features if present.
- [ ] Decide whether the **actual submitted build** meets Apple’s current Social Media definition based on functionality, not the game’s category name or marketing label.
- [ ] Answer the App Store Connect social-media age-rating question accurately for that submitted build.
- [ ] Save a dated screenshot/export of the submitted age-rating answers in the release evidence folder.
- [ ] Re-run this classification whenever a new community/discovery/amplification feature is added, removed, age-gated, or materially changed.
- [ ] Do not submit an update or notarization package with an unanswered, stale, or knowingly inaccurate social-media capability declaration.

Do not answer “No” merely because TycoonX is primarily a business simulation game. Apple’s classification turns on the actual UGC/social functionality.

### Social Media is not the same as every community feature

Apple’s current age-rating definitions separately identify **User-Generated Content**, **Social Media**, and **Messaging and Chat** capabilities. Do not collapse them into one answer:

- **User-Generated Content** can include broad distribution of user-created text, images, video, or audio as part of the intended app experience.
- **Social Media** focuses on redistribution, amplification, or interaction with UGC through a social feed or similar discovery method that visibly spreads content to many users.
- **Messaging and Chat** covers direct communication such as text, voice/video chat, direct/group messaging, or public posting.

Therefore, the existence of chat by itself does **not automatically prove** that the separate Social Media capability is present. Conversely, calling a feature a “company feed”, “gallery”, “community”, “market”, or “profile” does not avoid the Social Media classification if its actual mechanics satisfy Apple’s definition. Classify each App Store Connect capability from the shipped behavior.

## 2. Consequences of a Social Media answer

Under Apple’s current framework:

- an app/game declared as containing social-media capabilities is placed in the Social Media Time Allowance category; and
- Apple states a **13+ baseline/minimum** for apps with social-media capabilities under the general age-rating framework, while region-specific ratings can be higher or otherwise differ.

For apps with social-media capabilities, Apple states that a **Social Media** content descriptor will display in the age-ratings section of the App Store product page.

Apple’s current region-specific table should be treated as authoritative at submission time. For example, the current table can assign different regional results for social-media capabilities in markets such as Australia, Brazil, and Korea. Do not hard-code one global storefront age label into TycoonX merely from the general 13+ baseline.

Release checks:

- [ ] Ensure App Store metadata, screenshots, onboarding, Community Standards, and actual age gates do not contradict the submitted age-rating answer.
- [ ] Do not market TycoonX as unrestricted for younger users if the product is configured to block social features for them.
- [ ] If the age rating changes, re-check advertising/marketing, parental controls, regional storefront treatment, alternative-payment child-safety rules, and any age-dependent feature rules.
- [ ] Re-check the current Apple region-specific rating table rather than assuming the general rating is identical in every storefront.

## 3. If social-media capabilities are disabled for users under 13

Apple currently provides a specific **Social Media Disabled for Users Under 13** capability. If CK-Labs selects that configuration:

- [ ] Use Apple’s **Declared Age Range API at a minimum** to check users’ age ranges before enabling the social-media capabilities for a user.
- [ ] Do not rely only on a self-entered birthday or a checkbox if Apple’s applicable regulatory/platform feature requires the Declared Age Range API.
- [ ] Treat a declined/unavailable age-range response conservatively where necessary to avoid exposing age-restricted social functionality without a valid basis.
- [ ] Ensure under-13 restrictions are enforced in the actual app behavior, not merely described in Terms or Community Standards.
- [ ] Verify all relevant entry points are covered, including deep links, push-notification destinations, profile/community shortcuts, restored sessions, cached tabs, background refresh, and another logged-in device.
- [ ] Test the restriction on a fresh account, an existing account, and an account whose age/permission state changes.

Apple’s current “What’s New” guidance says that when this configuration is used, the app will not be included in the Social Media Time Allowance category for users under 13 and will remain in the Social Media category for users 13 and above. Apple also says the overall questionnaire responses may affect the resulting rating. Because Apple’s detailed age-rating table and regional rules can change or produce different labels, use App Store Connect’s actual calculated result as the submission source of truth rather than promising a particular lower rating in TycoonX legal or marketing copy.

## 4. Declared Age Range privacy and data minimization

The TycoonX Privacy Policy already permits processing limited age, age-range, parental-authorization, or platform age-control information where reasonably necessary for legal/platform compliance and age-appropriate social-feature restrictions.

Implementation checks:

- [ ] Store only the minimum age-range/eligibility state actually needed for the feature and legal obligation.
- [ ] Do not convert an Apple-provided age range into an invented exact birth date.
- [ ] Do not use age-range data for unrelated profiling, advertising, pricing, or other secondary purposes unless separately lawful and transparently disclosed.
- [ ] Restrict access to age-control data to systems and personnel that need it.
- [ ] Document retention/deletion behavior for age-control state and keep it consistent with the TycoonX Privacy Policy.
- [ ] Treat Apple age-range/permission state as a platform signal for the relevant purpose, not as proof of identity, fraud, payment ownership, or account misconduct.

Apple’s current age-assurance Q&A says the Declared Age Range API is available worldwide and users can decide whether age information is shared, while certain regions can require age-category sharing under applicable law. Do not infer a precise birth date or unnecessary identity data from the returned category.

## 5. SDK and runtime support must match the chosen age-assurance path

Apple’s current age-assurance Q&A says that to enable all of its newer age-assurance technologies and frameworks, developers must build against at least the **iOS/iPadOS 26.2 SDKs with Xcode 26.2**, and that additional age-assurance capabilities are available from iOS/iPadOS 26.4.

Release checks:

- [ ] Verify the TycoonX deployment/build configuration actually supports the Declared Age Range and PermissionKit functionality selected in App Store Connect.
- [ ] Do not select an under-13-disabled social configuration that depends on an API the production build never calls.
- [ ] Test supported and unsupported OS-version behavior.
- [ ] Fail safely when the required age-assurance state cannot be obtained on a device/OS for which CK-Labs has chosen to rely on that state.
- [ ] Recheck Apple’s minimum SDK/framework documentation before raising or lowering the TycoonX deployment baseline.

## 6. Significant app changes

Apple’s current Declared Age Range documentation says that in some regulatory contexts a significant app change can require adult notification or parental consent before continued use.

Before shipping a significant change affecting age rating, social interaction, data practices, direct messaging, location sharing, or another materially age-relevant feature:

- [ ] Determine whether the change is “significant” under the applicable law and Apple regulatory feature state.
- [ ] Check the Declared Age Range regulatory-feature response rather than hard-coding one global legal assumption.
- [ ] If the applicable Apple regulatory feature requires adult notification, present Apple’s required acknowledgment flow before continued use.
- [ ] If parental consent is required, use PermissionKit / the applicable Apple consent flow with a concise, understandable description of what changed.
- [ ] Until required consent is obtained, block the significant update or affected functionality where the applicable Apple/legal flow requires it.
- [ ] Keep evidence of the change description, rollout date, applicable consent/notification behavior, and tested failure state.

Do not use a generic Terms-update banner as a substitute where Apple or applicable law requires the dedicated age-assurance/parental-consent flow.

## 7. Parent/guardian consent withdrawal

Apple provides an App Store server notification for consent withdrawal, including the `RESCIND_CONSENT` notification type in its current age-assurance guidance.

Where TycoonX relies on Apple parental approval or age-assurance state:

- [ ] Configure and test the relevant App Store server notification handling.
- [ ] Treat a valid consent withdrawal as authoritative for the Apple-controlled permission state.
- [ ] Do not continue to rely on a stale cached “parent approved” flag after a valid withdrawal event.
- [ ] Reconcile the server-side TycoonX feature state so age-restricted social functionality is not left available through another device/session merely because a local cache was not refreshed.
- [ ] Keep minimal audit evidence needed to show the permission state was updated, without retaining unnecessary child data.

Apple’s current support guidance states that when a parent or guardian revokes consent for a child’s access to an app, Apple prevents the app from launching. Server notification handling is still useful for keeping TycoonX’s own server-side state consistent and avoiding stale permissions.

A consent withdrawal or age-category change is **not** automatically a refund, chargeback, fraud finding, exploit finding, or entitlement-abuse finding. Any payment or consumer-remedy consequence must be decided separately under the actual transaction, platform rules, and mandatory law.

## 8. Community moderation and child safety remain separate duties

Correct age-rating/age-range configuration does not replace moderation obligations.

Before release, continue to verify:

- [ ] in-app reporting for objectionable content and users where required;
- [ ] blocking for abusive users and relevant one-to-one interactions;
- [ ] effective moderation and timely response handling;
- [ ] child sexual abuse/exploitation prohibitions and escalation/reporting duties where applicable;
- [ ] no anonymous/random-chat feature is introduced without a fresh Apple/Google child-safety review;
- [ ] age-gated users cannot bypass community restrictions through unsupported app versions, cached state, deep links, or alternative clients; and
- [ ] a moderation report is not treated as proof of illegality, fraud, chargeback abuse, or payment abuse without separate evidence.

## 9. Payment and entitlement isolation

Age-rating and age-assurance state must not accidentally mutate unrelated paid value.

- **Purchased Diamonds:** an age-range change, parental-consent withdrawal, social-feature restriction, or App Store rating change does not itself expire or erase legitimately purchased Diamonds. Purchased Diamonds do not expire solely because time passes.
- **30-Day VIP:** remains a one-time, non-renewing 30-day entitlement. An age-gate event must not restart, duplicate, or silently shorten the original entitlement. If mandatory law requires a consumer remedy because a paid benefit becomes unavailable, assess that remedy separately.
- **Lifetime VIP:** remains a one-time promotional entitlement available only during selected genuine sales windows, may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability for purchase. An age-classification change must not add an expiry, recreate the entitlement, or reopen a closed Lifetime VIP sales window.
- **Refunds/chargebacks:** a parental-control or age-assurance event is not itself an Apple refund, Xsolla refund, Google Play refund, or chargeback event.

If an age-related platform/legal requirement materially prevents supply of a paid digital benefit, evaluate conformity, refund, price-reduction, termination, or other mandatory consumer remedies through the normal legal/payment path rather than using the age gate as an entitlement-deletion shortcut.

## 10. Founder-protective implementation rules

Subject to mandatory law and platform rules, CK-Labs should preserve the ability to:

- disable or redesign a social/community feature for an age group where safety, law, or platform requirements justify it;
- use platform-provided age-range categories rather than collecting exact birth dates where exact dates are unnecessary;
- temporarily restrict a feature while age/permission state is being verified;
- update age gates when law or platform classifications change;
- distinguish direct messaging from social-media/feed capabilities rather than overclassifying every communication feature; and
- avoid promising that a particular social feature will remain available to every age group indefinitely.

These protections must not be used to discriminate unlawfully, misrepresent the product’s age rating, conceal a required social-media declaration, or remove mandatory consumer/privacy rights.

## 11. Minimum regression scenarios

Before a material community or Apple age-assurance release, test at least:

1. App Store Connect declaration matches the actual submitted build.
2. Direct chat exists without feed/amplification and is classified separately from Social Media based on Apple’s definitions.
3. A public/discovery feed with likes/comments/shares is included in the Social Media analysis.
4. Social media disabled for under 13 calls Declared Age Range before enabling the feature.
5. Declined/unavailable age-range data cannot expose a restricted feature when the selected configuration requires age gating.
6. Deep links cannot bypass an under-13 social restriction.
7. Another logged-in device receives the server-side restriction after consent withdrawal.
8. `RESCIND_CONSENT` removes reliance on stale parental approval.
9. A significant-update flow blocks the affected feature until required approval where applicable.
10. A regional App Store age rating can differ from the general rating without changing the actual entitlement ledger.
11. A social-media declaration change does not delete purchased Diamonds.
12. A social-media declaration change does not restart or duplicate 30-Day VIP.
13. A social-media declaration change does not reopen or recreate Lifetime VIP.
14. A parental-control event is not automatically labeled fraud or chargeback abuse.
15. An unsupported old app version cannot bypass a server-enforced age restriction.
16. Current App Store submission evidence includes the social-media questionnaire answer.

## 12. Release evidence to retain

For each relevant App Store submission, retain:

- [ ] App Store Connect age-rating questionnaire answer screenshot/export;
- [ ] current TycoonX community/social feature inventory;
- [ ] classification notes separating UGC, Social Media, and Messaging/Chat where relevant;
- [ ] resulting general and material region-specific App Store age ratings;
- [ ] Declared Age Range implementation test result if the under-13-disabled option is used or a regional law requires it;
- [ ] Significant Change / PermissionKit test result where applicable;
- [ ] consent-withdrawal notification test result where applicable;
- [ ] current Community Standards and moderation-flow evidence; and
- [ ] release date/build number tied to the evidence.

## 13. Current status for TycoonX

- [x] Public Terms preserve age-gating and platform-compliance flexibility.
- [x] Public Privacy Policy already covers limited age, age-range, parental-authorization, and platform age-control processing.
- [x] Public Community Standards preserve child-safety and feature-restriction flexibility.
- [x] Existing community moderation release checklist covers Apple/Google report/block/moderation duties.
- [ ] **P0 NOW for every new Apple submission/update/notarization in September 2026 and later:** classify the actual submitted TycoonX community features under Apple’s current UGC, Social Media, and Messaging/Chat definitions and answer the App Store Connect capability questions accurately.
- [ ] **P0 if CK-Labs selects “Social Media Disabled for Users Under 13”:** implement and verify Declared Age Range before enabling those social features.
- [ ] **P1 where applicable:** implement significant-change notification/consent and consent-withdrawal reconciliation.

Do not mark the first P0 complete merely because an older TycoonX version was already on the App Store. Apple’s current requirement attaches to the relevant submission/update/notarization, so each materially changed community build needs a fresh parity check against the stored App Store Connect answer.

## Official Apple references checked 2026-09-05

- Apple, “What’s New - App Store” — the social-media questionnaire became available in July 2026; starting September 2026 the social-media indication is required for new apps/versions/updates and notarization submissions; Social Media Time Allowances and the under-13-disabled option.
- Apple, “Age ratings values and definitions” — separate definitions for User-Generated Content, Social Media, Messaging and Chat, and Social Media Disabled for Users Under 13; general and region-specific age-rating values.
- Apple, “Set an app age rating” — age rating is required App Store information and may vary by country/region and OS version.
- Apple, “Age assurance frameworks Q&A” — current Declared Age Range availability, SDK support, significant-app-update behavior, Sandbox testing, and `RESCIND_CONSENT` guidance.

Current official references:

- https://developer.apple.com/app-store/whats-new/
- https://developer.apple.com/help/app-store-connect/reference/app-information/age-ratings-values-and-definitions
- https://developer.apple.com/help/app-store-connect/manage-app-information/set-an-app-age-rating
- https://developer.apple.com/support/age-assurance
