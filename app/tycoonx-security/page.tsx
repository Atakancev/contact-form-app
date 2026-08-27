export default function TycoonXSecurity() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
          <span className="text-indigo-400 text-xs font-medium tracking-wide">TycoonX · CK-Labs</span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight mb-3">Security & Vulnerability Reporting</h1>
        <p className="text-zinc-400 text-sm leading-relaxed mb-10">
          A private contact point for reporting security issues that may affect TycoonX accounts, data, purchases, entitlements, infrastructure, or users.
        </p>

        <div className="space-y-6">
          <section className="rounded-xl border border-white/10 bg-[#111111] p-6">
            <h2 className="text-xl font-semibold mb-4">Report a security issue privately</h2>
            <p className="text-zinc-300 leading-relaxed mb-3">
              Please send security reports to{' '}
              <a href="mailto:cevikdev@gmail.com?subject=TycoonX%20Security" className="text-indigo-400 hover:text-indigo-300 transition">
                cevikdev@gmail.com
              </a>{' '}
              with the subject <strong className="text-white">TycoonX Security</strong>.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Do not post exploit details, credentials, private user data, access tokens, or unreleased security information in public chat, app reviews, social media, public issue trackers, or community channels.
            </p>
          </section>

          <section className="rounded-xl border border-white/10 bg-[#111111] p-6">
            <h2 className="text-xl font-semibold mb-4">What to include</h2>
            <ul className="list-disc pl-5 space-y-2 text-zinc-300 leading-relaxed">
              <li>The affected TycoonX platform and app version, where known.</li>
              <li>A concise description of the issue and its potential security impact.</li>
              <li>Minimal reproduction steps that CK-Labs can use to verify the issue safely.</li>
              <li>Relevant timestamps, request IDs, screenshots, or logs with secrets and unrelated personal data removed.</li>
              <li>Whether you believe the issue is being actively exploited or is causing an ongoing security incident.</li>
            </ul>
          </section>

          <section className="rounded-xl border border-white/10 bg-[#111111] p-6">
            <h2 className="text-xl font-semibold mb-4">Safe testing expectations</h2>
            <p className="text-zinc-300 leading-relaxed mb-3">
              A good-faith report does not require proving impact by harming another player or extracting real user data. Stop testing once you have enough information to demonstrate the issue safely.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-zinc-300 leading-relaxed">
              <li>Do not access, alter, delete, transfer, or publish another person&apos;s account or data.</li>
              <li>Do not use denial-of-service, destructive automation, spam, social engineering, credential stuffing, malware, or physical attacks.</li>
              <li>Do not create fraudulent purchases, abusive chargebacks, payment disputes, entitlement duplication, or economy transfers as a security test.</li>
              <li>Do not retain secrets, tokens, credentials, payment data, private messages, or other personal data beyond what is strictly necessary to report the issue.</li>
              <li>Do not demand payment or threaten disclosure, disruption, or data release.</li>
            </ul>
            <p className="text-zinc-400 text-sm leading-relaxed mt-3">
              This page does not authorize access to third-party systems, conduct prohibited by law, or activity outside systems CK-Labs is entitled to authorize.
            </p>
          </section>

          <section className="rounded-xl border border-white/10 bg-[#111111] p-6">
            <h2 className="text-xl font-semibold mb-4">How CK-Labs handles reports</h2>
            <p className="text-zinc-300 leading-relaxed mb-3">
              CK-Labs may validate, reproduce, contain, remediate, document, and monitor a reported issue, and may temporarily restrict a vulnerable TycoonX feature where reasonably necessary to protect users, purchases, game integrity, or infrastructure.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-3">
              Security-related account, purchase, or entitlement corrections are reconciled against authoritative TycoonX, Apple, Google, Xsolla, and other relevant provider records where applicable. Mandatory consumer and data-protection rights remain unaffected.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Where law requires security reporting or user notification, CK-Labs may provide necessary information to the competent authority, CSIRT, ENISA, platform, payment provider, affected user, or other legally relevant recipient, while limiting personal data and sensitive exploit details to what is necessary and lawful.
            </p>
          </section>

          <section className="rounded-xl border border-white/10 bg-[#111111] p-6">
            <h2 className="text-xl font-semibold mb-4">No automatic bounty</h2>
            <p className="text-zinc-300 leading-relaxed">
              CK-Labs does not promise a cash reward, Diamond reward, VIP entitlement, credit, or other compensation for a report unless a specific reward or bug-bounty arrangement was expressly offered in advance. A voluntary thank-you or goodwill reward in one case does not create a right to the same reward in another case.
            </p>
          </section>

          <section className="rounded-xl border border-white/10 bg-[#111111] p-6">
            <h2 className="text-xl font-semibold mb-4">Other TycoonX support</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              For ordinary account recovery, billing, refunds, gameplay issues, moderation, or privacy requests that are not security vulnerabilities, use the normal TycoonX support and legal routes.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <a href="/tyconx-support" className="text-indigo-400 hover:text-indigo-300 transition">Support</a>
              <a href="/tyconx-terms-of-service" className="text-indigo-400 hover:text-indigo-300 transition">Terms of Service</a>
              <a href="/tyconx-privacy-policy" className="text-indigo-400 hover:text-indigo-300 transition">Privacy Policy</a>
              <a href="/tyconx-purchase-refund-policy" className="text-indigo-400 hover:text-indigo-300 transition">Purchases & Refunds</a>
              <a href="/tycoonx-impressum" className="text-indigo-400 hover:text-indigo-300 transition">Impressum / Legal Notice</a>
            </div>
          </section>
        </div>

        <p className="text-zinc-600 text-xs mt-8">Last updated: August 28, 2026</p>
      </div>
    </main>
  );
}
