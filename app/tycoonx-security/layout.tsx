import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'TycoonX Security & Vulnerability Reporting | CK-Labs',
  description:
    'Official TycoonX security and vulnerability reporting information from CK-Labs, including responsible reporting and account-security guidance.',
};

export default function TycoonXSecurityLayout({ children }: { children: ReactNode }) {
  return children;
}
