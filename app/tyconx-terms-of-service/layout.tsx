import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import TransferRuleNotice from '../tycoonx-legal/TransferRuleNotice';

export const metadata: Metadata = {
  title: 'TycoonX Terms of Service | CK-Labs',
  description:
    'Official TycoonX Terms of Service from CK-Labs, covering accounts, purchases, VIP, Diamonds, game integrity, enforcement, service changes, and mandatory consumer rights.',
};

export default function TycoonXTermsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <TransferRuleNotice />
    </>
  );
}
