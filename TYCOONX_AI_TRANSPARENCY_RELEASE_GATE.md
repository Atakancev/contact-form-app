# TycoonX AI Transparency Release Gate

Last reviewed: August 27, 2026

Purpose: prevent TycoonX from shipping user-facing AI, AI-assisted support/moderation, or generative-content features that conflict with the EU AI Act, Apple App Review rules, Google Play User Data rules, or the existing TycoonX Privacy Policy.

This is a release/implementation gate. It does not state that every listed AI feature currently exists in TycoonX.

## P0 before September 1 release

- [ ] Inventory every TycoonX feature that uses AI or a third-party AI service, including support assistants, in-game assistants, moderation, translation, recommendations, content generation, fraud/security analysis, and developer-configured AI tools exposed to players.
- [ ] For each feature, record whether CK-Labs is acting as the provider of an AI system, a deployer using another provider's AI system, or both. Do not assume that using a third-party model automatically removes CK-Labs' downstream obligations.
- [ ] If an AI system communicates directly with a natural person in the EU, ensure the user is clearly informed that they are interacting with AI from the start of the first interaction unless it is genuinely obvious to a reasonably well-informed, observant user.
- [ ] The AI-interaction notice must be clear, distinguishable, accessible, and visible in the actual interface. A clause buried only in Terms or Privacy is not sufficient for a direct-interaction transparency duty.
- [ ] Do not present an automated support or game assistant as a human employee, moderator, developer, or another real person.
- [ ] If AI operates only in the background and does not directly communicate with the user, do not add a misleading chatbot-style disclosure solely because AI is used internally. Keep the Privacy Policy and moderation disclosures accurate instead.
- [ ] If personal data is sent from the Apple app to a third-party AI service, verify that the sharing is clearly disclosed and that explicit permission is obtained before sharing where Apple's rules or applicable law require it.
- [ ] For Google Play, verify that every third-party AI SDK/service follows the User Data policy, including limited use, accurate disclosure, required consent, security, deletion/retention behavior, and consistency with the Data Safety form.
- [ ] Do not add emotion recognition, biometric categorisation, face inference, or similar sensitive AI functionality without a separate legal/platform review before implementation.
- [ ] If TycoonX itself provides an AI system that generates or manipulates text, image, audio, or video, separately assess the AI Act Article 50 machine-readable marking/detectability obligations and the limited transition rule for systems placed on the market before August 2, 2026.
- [ ] If TycoonX deploys AI-generated or manipulated deepfake content, emotion-recognition output, biometric-categorisation output, or AI-generated text on matters of public interest without human editorial control, complete a separate Article 50 deployer-labelling assessment before publishing it to users.
- [ ] Keep the existing TycoonX Privacy Policy language on third-party AI accurate. If a new AI provider receives personal data, update the actual privacy disclosures and consent flow before production use.
- [ ] Record the user-facing disclosure text/version and the date it went live for any direct-interaction AI feature so CK-Labs can demonstrate what users were shown.

## EU AI Act checkpoint

Article 50 transparency obligations apply from August 2, 2026. Current European Commission guidance says providers of AI systems that interact directly with natural persons, such as chatbots, agents, and avatars, must ensure people are informed they are interacting with AI. The information should be given from the start of the first interaction in a clear and distinguishable manner, unless the AI nature of the interaction is obvious.

The Commission also distinguishes direct user interaction from AI that operates only in the background or through machine-to-machine processing. Background AI does not trigger the same direct-interaction notice merely because AI is involved.

The limited transition until December 2, 2026 concerns the Article 50(2) marking/detectability duty for certain AI systems placed on the market before August 2, 2026. It is not a general delay of the direct-interaction transparency obligation.

## Apple checkpoint

Apple's current App Review privacy rules require apps to disclose where personal data is shared with third parties, including third-party AI, and to obtain explicit permission before sharing where required. TycoonX must not rely on a Privacy Policy alone if the applicable Apple rule requires an in-product permission before transmitting personal data to the AI provider.

## Google Play checkpoint

Google Play's User Data policy explicitly applies to third-party AI integrations. CK-Labs remains responsible for the behavior of embedded or connected third-party AI services, including disclosure, consent, limited use, security, and consistency with the Play Console Data Safety declaration.

## Practical TycoonX patterns

Safe pattern for a direct AI assistant:

`TycoonX AI Assistant` is visibly identified as AI at the start of the conversation, and any personal-data sharing with the AI provider follows the required disclosure/permission flow.

Safe pattern for AI-assisted human support:

An internal AI tool can summarize a ticket for a human support operator without pretending that the AI is the human. If the final communication is actually written/sent by a human and the AI never directly interacts with the player, assess it as background deployment rather than automatically treating the player as directly interacting with AI.

Unsafe pattern:

A bot sends player-facing messages under a human-looking support identity without telling EU users that the interaction is automated/AI-based.

## Source-of-truth rule

This gate supplements, and does not replace, the TycoonX Terms of Service, Privacy Policy, Community Standards, Apple Custom EULA, platform rules, or mandatory law. If an AI feature materially changes personal-data processing or player-facing legal meaning, update the canonical English legal source first and then refresh every affected localization before release.