import DeleteAccountForm from './DeleteAccountForm';

export const metadata = {
  title: 'Delete TycoonX Account | CK-Labs',
  description: 'Request deletion of your TycoonX account and associated personal data.',
};

export default function TycoonXDeleteAccountPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-3xl mx-auto px-4 py-14">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">TycoonX · CK-Labs</p>
          <h1 className="text-3xl font-bold text-white mb-4">Delete your TycoonX account</h1>
          <p className="text-zinc-400 text-sm leading-relaxed">
            This page lets you request deletion of a TycoonX account without reinstalling or opening the app. You can also use the in-app account-deletion option where available.
          </p>
        </div>

        <div className="space-y-6 mb-8">
          <section className="rounded-xl border border-white/10 bg-[#111111] p-6">
            <h2 className="text-lg font-semibold text-white mb-3">What deletion does</h2>
            <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
              <p>Deleting your account may permanently remove account-linked profile data, gameplay progress, social data, inventory, Diamonds and other virtual value, VIP state, and other account data associated with TycoonX.</p>
              <p>CK-Labs may retain only the minimum records that law permits or requires for purposes such as tax, accounting, fraud prevention, security, dispute handling, legal claims, or verification and restoration of a valid restorable paid entitlement. The TycoonX Privacy Policy explains these retention rules in more detail.</p>
              <p>Deleting your account does not waive any refund, statutory withdrawal, conformity, or other mandatory consumer right that applicable law gives you.</p>
            </div>
          </section>

          <section className="rounded-xl border border-white/10 bg-[#111111] p-6">
            <h2 className="text-lg font-semibold text-white mb-3">Purchases, VIP, and refunds</h2>
            <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
              <p>Account deletion is separate from a payment refund or statutory withdrawal request. Deleting a TycoonX account does not itself cancel, reverse, or refund an Apple App Store, Google Play, Xsolla, or other completed payment.</p>
              <p>TycoonX currently sells Diamonds, one-time 30-Day VIP, and limited-window Lifetime VIP as one-time purchases. They are not recurring subscriptions.</p>
              <p>A valid restorable Lifetime VIP entitlement may remain restorable after account deletion where platform records, the purchase contract, or mandatory law supports restoration. Restoring such an entitlement does not recreate deleted gameplay progress, consumed Diamonds, inventory, social history, companies, assets, or transferred value.</p>
              <p>If you want a refund or want to exercise a statutory withdrawal right, use the applicable payment-provider or TycoonX support process. Where practical, submit that request before deleting the account so the transaction can be identified more easily.</p>
              <p>If TycoonX introduces a recurring product in the future, deleting the TycoonX account will not by itself cancel provider billing. Any recurring product would require a separate cancellation route and compliant notice.</p>
            </div>
          </section>

          <section className="rounded-xl border border-white/10 bg-[#111111] p-6">
            <h2 className="text-lg font-semibold text-white mb-3">Timing and confirmation</h2>
            <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
              <p>We normally aim to complete a verified account-deletion request within 30 days. If additional verification or a legally permitted extension is reasonably necessary, CK-Labs will tell you.</p>
              <p>When deletion is complete, CK-Labs will send confirmation to the contact address used for the request. Limited records that must lawfully remain are not treated as an active TycoonX account.</p>
            </div>
          </section>

          <section className="rounded-xl border border-white/10 bg-[#111111] p-6">
            <h2 className="text-lg font-semibold text-white mb-3">Before submitting</h2>
            <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
              <p>Use an email address that you can access. CK-Labs may ask for reasonable verification to make sure the request relates to the correct account and does not allow another person to delete your account.</p>
              <p>If you have a payment dispute or want a refund instead of account deletion, use the payment provider&apos;s refund process or TycoonX Support.</p>
            </div>
          </section>
        </div>

        <DeleteAccountForm />

        <div className="flex flex-wrap gap-3 mt-8">
          <a href="/tyconx-privacy-policy" className="text-sm text-indigo-400 hover:text-indigo-300 transition">Privacy Policy</a>
          <a href="/tyconx-support" className="text-sm text-indigo-400 hover:text-indigo-300 transition">TycoonX Support</a>
          <a href="mailto:cevikdev@gmail.com" className="text-sm text-indigo-400 hover:text-indigo-300 transition">cevikdev@gmail.com</a>
        </div>
      </div>
    </main>
  );
}
