'use client';

import { useState } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';

const inputClass =
  'w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-base';

export default function DeleteAccountForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [identifier, setIdentifier] = useState('');
  const [details, setDetails] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const submit = async () => {
    if (!name.trim() || !validEmail || !identifier.trim() || !turnstileToken) return;

    setLoading(true);
    setError('');

    const message = [
      '[TycoonX Account Deletion Request]',
      '',
      `TycoonX account identifier / nickname: ${identifier.trim()}`,
      'Request: Delete my TycoonX account and the personal data associated with the account, subject to legally permitted retention described in the TycoonX Privacy Policy.',
      details.trim() ? `Additional information: ${details.trim()}` : '',
    ].filter(Boolean).join('\n');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message,
          turnstileToken,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Unable to submit the deletion request.');

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to submit the deletion request.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-6">
        <h2 className="text-lg font-semibold text-white mb-2">Deletion request received</h2>
        <p className="text-sm leading-relaxed text-zinc-300">
          CK-Labs will review the request and may contact you at <span className="text-white font-medium">{email}</span> if reasonable identity verification is needed before deletion.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-white/10 bg-[#111111] p-6">
      <h2 className="text-lg font-semibold text-white mb-2">Request account deletion</h2>
      <p className="text-sm leading-relaxed text-zinc-400 mb-6">
        Use this form to request deletion of your TycoonX account and account-linked personal data. Do not send your password, full payment-card number, or authentication codes.
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-zinc-300 mb-2">Name</label>
          <input className={inputClass} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
        </div>

        <div>
          <label className="block text-sm text-zinc-300 mb-2">Email address</label>
          <input className={inputClass} type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
        </div>

        <div>
          <label className="block text-sm text-zinc-300 mb-2">TycoonX nickname or account identifier</label>
          <input className={inputClass} value={identifier} onChange={(e) => setIdentifier(e.target.value)} placeholder="Nickname or account identifier" />
        </div>

        <div>
          <label className="block text-sm text-zinc-300 mb-2">Additional information (optional)</label>
          <textarea className={`${inputClass} resize-none`} rows={4} value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Anything that helps us locate the correct account" />
        </div>

        <Turnstile siteKey="0x4AAAAAACxrQEHugGkQcOI6" onSuccess={setTurnstileToken} />

        {error && <p className="text-sm text-red-400">{error}</p>}

        <button
          type="button"
          onClick={submit}
          disabled={!name.trim() || !validEmail || !identifier.trim() || !turnstileToken || loading}
          className="bg-red-600 hover:bg-red-500 disabled:bg-red-900 disabled:text-red-400 text-white font-medium px-5 py-3 rounded-lg text-sm transition"
        >
          {loading ? 'Submitting…' : 'Request account deletion'}
        </button>
      </div>
    </div>
  );
}
