import type { ReactNode } from 'react';
import TransferRuleNotice from '../tycoonx-legal/TransferRuleNotice';

export default function TycoonXTermsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <TransferRuleNotice />
    </>
  );
}
