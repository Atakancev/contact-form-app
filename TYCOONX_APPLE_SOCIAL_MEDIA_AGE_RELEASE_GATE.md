# TycoonX Apple Social Media & Age-Range Release Gate

Last reviewed: 2026-08-28  
Operator/business name used in player-facing documents: **CK-Labs**

This checklist covers Apple’s current App Store social-media age-rating declaration and age-assurance tooling for TycoonX. It is an operational release gate. It does not replace the TycoonX Terms, Privacy Policy, Community Standards, Apple requirements, or mandatory local law.

## 1. P0: classify TycoonX social-media capabilities before the September 2026 submission

Apple’s current App Store age-rating framework defines a **Social Media** capability as redistribution, amplification, or interaction with user-generated content through a social feed or similar discovery method that visibly spreads content to many users. Examples can include reposting, liking, commenting, reacting, or making user-generated content more visible through feeds, communities, search, or other sharing/discovery tools.

Starting in **September 2026**, Apple requires developers to indicate whether an app or game includes social-media capabilities when submitting a new app/version or update to the App Store, and for notarization for alternative distribution.

Before TycoonX’s next submission:

- [ ] Inventory every TycoonX community surface that distributes or helps users discover UGC, including feeds, community/search/discovery views, public profile content, public art/music/book content, comments, reactions, likes, shares, reposts, or similar amplification features if present.
- [ ] Decide whether the shipped build meets Apple’s current Social Media definition based on actual functionality, not the game’s category name or marketing label.
- [ ] Answer the App Store Connect social-media age-rating question accurately for the shipped build.
- [ ] Save a dated screenshot/export of the submitted age-rating answers in the release evidence folder.
- [ ] Re-run this classification whenever a new community/discovery/amplification feature is added or materially changed.

Do not answer “No” merely because TycoonX is primarily a business simulation game. Apple’s classification turns on the actual UGC/social functionality.

## 2. Consequences of a “Social Media” answer

Under Apple’s current framework:

- an app/game declared as containing social-media capabilities is placed in the Social Media Time Allowance category; and
- the app/game receives a minimum App Store age rating of **13+**, unless the under-13-disabled configuration described below is used and the remaining questionnaire answers support a lower rating.

For apps with social-media capabilities, Apple states that a **Social Media** content descriptor will appear in the age-ratings section of the App Store product page.

Release checks:

- [ ] Ensure App Store metadata, screenshots, onboarding, Community Standards, and actual age gates do not contradict the submitted age-rating answer.
- [ ] Do not market TycoonX as unrestricted for younger users if the product is configured to block social features for them.
- [ ] If the age rating changes, re-check advertising/marketing, parental controls, regional storefront treatment, and any age-dependent feature rules.

## 3. If social-media capabilities are disabled for users under 13

Apple currently allows developers to indicate that social-media capabilities exist but are disabled for users under 13. If CK-Labs selects that configuration:

- [ ] Use Apple’s **Declared Age Range API at a minimum** to check users’ age ranges before enabling the social-media capabilities for a user.
- [ ] Do not rely only on a self-entered birthday or a checkbox if Apple’s applicable regulatory feature requires the Declared Age Range API.
- [ ] Treat a declined/unavailable age-range response conservatively where necessary to avoid exposing age-restricted social functionality without a valid basis.
- [ ] Ensure under-13 restrictions are enforced in the actual app behavior, not merely described in Terms or Community Standards.
- [ ] Verify all relevant entry points are covered, including deep links, push-notification destinations, profile/community shortcuts, and restored sessions.
- [ ] Test the restriction on a fresh account, an existing account, and an account whose age/permission state changes.

Apple states that this under-13-disabled configuration is not placed in the Social Media Time Allowance category for those users under 13, while the app remains in the Social Media category for users 13 and above.

## 4. Declared Age Range privacy and data minimization

The TycoonX Privacy Policy already permits processing limited age, age-range, parental-authorization, or platform age-control information where reasonably necessary for legal/platform compliance and age-appropriate social-feature restrictions.

Implementation checks:

- [ ] Store only the minimum age-range/eligibility state actually needed for the feature and legal obligation.
- [ ] Do not convert an Apple-provided age range into an invented exact birth date.
- [ ] Do not use age-range data for unrelated profiling, advertising, pricing, or other secondary purposes unless separately lawful and transparently disclosed.
- [ ] Restrict access to age-control data to systems and personnel that need it.
- [ ] Document retention/deletion behavior for age-control state and keep it consistent with the TycoonX Privacy Policy.

## 5. Significant app changes

Apple’s current Declared Age Range documentation says that in some regulatory contexts a significant app change can require adult notification or parental consent before continued use.

Before shipping a significant change affecting age rating, social interaction, data practices, direct messaging, location sharing, or another materially age-relevant feature:

- [ ] Determine whether the change is “significant” under the applicable law and Apple regulatory feature state.
- [ ] Check the Declared Age Range regulatory-feature response rather than hard-coding one global legal assumption.
- [ ] If `significantAppChangeRequiresAdultNotification` applies, present Apple’s required acknowledgment flow before continued use.
- [ ] If `significantAppChangeRequiresParentalConsent` applies, use PermissionKit / the applicable Apple consent flow with a concise, understandable description of what changed.
- [ ] Keep evidence of the change description, rollout date, and applicable consent/notification behavior.

Do not use a generic Terms-update banner as a substitute where Apple or applicable law requires the dedicated age-assurance/parental-consent flow.

## 6. Parent/guardian consent withdrawal

Apple provides an App Store server notification for consent withdrawal, including the `RESCIND_CONSENT` notification type in its current age-assurance guidance.

Where TycoonX relies on Apple parental approval or age-assurance state:

- [ ] Configure and test the relevant App Store server notification handling.
- [ ] Treat a valid consent withdrawal as authoritative for the Apple-controlled permission state.
- [ ] Do not continue to rely on a stale cached “parent approved” flag after a valid withdrawal event.
- [ ] Reconcile the server-side TycoonX feature state so age-restricted social functionality is not left available through another device/session merely because a local cache was not refreshed.
- [ ] Keep minimal audit evidence needed to show the permission state was updated, without retaining unnecessary child data.

Apple’s current support guidance states that when a parent or guardian revokes consent for a child’s access to an app, Apple prevents the app from launching. Server notification handling is still useful for keeping TycoonX’s own server-side state consistent and avoiding stale permissions.

## 7. Community moderation and child safety remain separate duties

Correct age-rating/age-range configuration does not replace moderation obligations.

Before release, continue to verify:

- [ ] in-app reporting for objectionable content and users where required;
- [ ] blocking for abusive users and relevant one-to-one interactions;
- [ ] effective moderation and timely response handling;
- [ ] child sexual abuse/exploitation prohibitions and escalation/reporting duties where applicable;
- [ ] no anonymous/random-chat feature is introduced without a fresh Apple/Google child-safety review;
- [ ] age-gated users cannot bypass community restrictions through unsupported app versions or alternative clients.

## 8. Founder-protective implementation rules

Subject to mandatory law and platform rules, CK-Labs should preserve the ability to:

- disable or redesign a social/community feature for an age group where safety, law, or platform requirements justify it;
- use platform-provided age-range categories rather than collecting exact birth dates where exact dates are unnecessary;
- temporarily restrict a feature while age/permission state is being verified;
- update age gates when law or platform classifications change; and
- avoid promising that a particular social feature will remain available to every age group indefinitely.

These protections must not be used to discriminate unlawfully, misrepresent the product’s age rating, or remove mandatory consumer/privacy rights.

## 9. Release evidence to retain

For each relevant App Store submission, retain:

- [ ] App Store Connect age-rating questionnaire answer screenshot/export;
- [ ] current TycoonX community/social feature inventory;
- [ ] Declared Age Range implementation test result if the under-13-disabled option is used or a regional law requires it;
- [ ] Significant Change / PermissionKit test result where applicable;
- [ ] consent-withdrawal notification test result where applicable;
- [ ] current Community Standards and moderation-flow evidence; and
- [ ] release date/build number tied to the evidence.

## 10. Current status for TycoonX

- [x] Public Terms preserve age-gating and platform-compliance flexibility.
- [x] Public Privacy Policy already covers limited age, age-range, parental-authorization, and platform age-control processing.
- [x] Public Community Standards preserve child-safety and feature-restriction flexibility.
- [x] Existing community moderation release checklist covers Apple/Google report/block/moderation duties.
- [ ] **P0 before the September 2026 App Store submission:** classify the actual shipped TycoonX community features under Apple’s current Social Media definition and answer the new App Store Connect question accurately.
- [ ] **P0 if CK-Labs selects “social media disabled under 13”:** implement and verify the Declared Age Range API before enabling those social features.
- [ ] **P1 where applicable:** implement significant-change notification/consent and consent-withdrawal reconciliation.

## Official Apple references checked 2026-08-28

- Apple, “What’s new in App Store” — Social Media Time Allowances and September 2026 submission requirement.
- Apple, “Age ratings values and definitions” — Social Media and “Social Media Disabled for Users Under 13” definitions.
- Apple, Declared Age Range documentation — age-range requests, significant-change regulatory features, PermissionKit flows, and consent withdrawal handling.
- Apple, Age assurance developer Q&A — Declared Age Range availability and `RESCIND_CONSENT` server-notification guidance.
