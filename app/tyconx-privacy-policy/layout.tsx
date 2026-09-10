import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import TransferRiskPrivacyNotice from '../tycoonx-legal/TransferRiskPrivacyNotice';

export const metadata: Metadata = {
  title: 'TycoonX Privacy Policy | CK-Labs',
  description:
    'Official TycoonX Privacy Policy from CK-Labs, covering account, gameplay, purchase, security, support, moderation, analytics, data-protection rights, and personal-data-breach handling.',
};

export default function TycoonXPrivacyPolicyLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <TransferRiskPrivacyNotice />
    </>
  );
}
