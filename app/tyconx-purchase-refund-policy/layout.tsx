import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'TycoonX Purchases & Refunds | CK-Labs',
  description:
    'Official TycoonX Purchases & Refunds Policy from CK-Labs, covering Diamonds, one-time 30-Day VIP, limited-time Lifetime VIP, Apple, Google Play, Xsolla, refunds, chargebacks, pricing, and mandatory consumer rights.',
};

export default function TycoonXPurchasesLayout({ children }: { children: ReactNode }) {
  return children;
}
