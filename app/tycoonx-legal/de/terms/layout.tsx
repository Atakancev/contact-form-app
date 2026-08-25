import type { ReactNode } from 'react';

export default function GermanTermsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <section className="bg-[#0a0a0a] text-white px-4 pb-16" lang="de" dir="ltr">
        <div className="max-w-3xl mx-auto rounded-xl border border-white/10 bg-[#111111] p-6">
          <div className="text-xs text-zinc-600 font-mono mb-2">35</div>
          <h2 className="text-white font-semibold mb-3">Kontakt</h2>
          <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
            <p>TycoonX wird von CK-Labs betrieben.</p>
            <p>Bei Fragen zu Konto, Käufen, Sicherheit, Durchsetzungsmaßnahmen oder rechtlichen Themen nutze den TycoonX Support oder schreibe an <a className="text-indigo-300 hover:text-indigo-200" href="mailto:cevikdev@gmail.com">cevikdev@gmail.com</a>.</p>
            <p>Bei Erstattungen, die vom Zahlungsanbieter gesteuert werden, kann zusätzlich das offizielle Verfahren von Apple, Google oder Xsolla erforderlich sein.</p>
          </div>
        </div>
      </section>
    </>
  );
}
