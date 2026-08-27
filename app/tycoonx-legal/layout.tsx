import type { ReactNode } from 'react';
import LegalInlineFormatting from './LegalInlineFormatting';

export default function TycoonXLegalLayout({ children }: { children: ReactNode }) {
  return (
    <div data-tycoonx-legal-root>
      <LegalInlineFormatting />
      {children}
    </div>
  );
}
