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
              <p>Deleting your account may permanently remove account-linked profile data, gameplay progress, social data, inventory, consumed or account-held virtual value, and other account state associated with TycoonX.</p>
              <p>Account deletion is separate from a payment refund. Deleting an account does not automatically refund Apple App Store, Google Play, Xsolla, or other purchases.</p>
              <p>CK-Labs may retain the minimum records that law permits or requires for tax, accounting, fraud prevention, security, dispute handling, legal claims, or verification and restoration of a valid non-consumable paid entitlement. The TycoonX Privacy Policy explains these retention rules in more detail.</p>
            </div>
          </section>

          <section className="rounded-xl border border-white/10 bg-[#111111] p-6">
            <h2 className="text-lg font-semibold text-white mb-3">Before submitting</h2>
            <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
              <p>Use an email address that you can access. CK-Labs may ask for reasonable verification to make sure the request relates to the correct account and does not allow another person to delete your account.</p>
              <p>If you have a payment dispute or want a refund instead of account deletion, use the payment provider's refund process or TycoonX Support.</p>
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
