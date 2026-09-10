import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'TycoonX Apple Custom EULA | CK-Labs',
  description:
    'Official TycoonX Apple Custom End User License Agreement from CK-Labs, supplementing applicable Apple terms and mandatory consumer rights.',
};

export default function TycoonXEulaLayout({ children }: { children: ReactNode }) {
  return children;
}
