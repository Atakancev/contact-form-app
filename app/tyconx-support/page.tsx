import ContactForm from '../ContactForm';

export default function TycoonXSupport() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-3xl mx-auto px-4 pt-12">
        <div className="rounded-xl border border-white/10 bg-[#111111] p-5">
          <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">TycoonX · CK-Labs</p>
          <h1 className="text-xl font-semibold text-white mb-2">Support & Legal</h1>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">
            For account, purchase, security, privacy, moderation, community-safety, or gameplay issues, use the form below or email cevikdev@gmail.com.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="/tyconx-terms-of-service" className="text-sm text-indigo-400 hover:text-indigo-300 transition">Terms of Service</a>
            <a href="/tyconx-purchase-refund-policy" className="text-sm text-indigo-400 hover:text-indigo-300 transition">Purchases & Refunds</a>
            <a href="/tyconx-privacy-policy" className="text-sm text-indigo-400 hover:text-indigo-300 transition">Privacy Policy</a>
            <a href="/tycoonx-community-standards" className="text-sm text-indigo-400 hover:text-indigo-300 transition">Community Standards</a>
          </div>
        </div>
      </div>
      <ContactForm initialProject="TycoonX" />
    </main>
  );
}
