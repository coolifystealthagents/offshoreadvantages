import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://offshoreadvantages.com'),
  title: { default: 'Offshore Advantages | Plan a Philippines staffing role', template: '%s | Offshore Advantages' },
  description: 'Independent guidance for planning Philippines staffing roles, handoffs, access, and quality review with Filipino talent.',
  openGraph: { title: 'Offshore Advantages', description: 'Plan the work before you hire Filipino talent.', url: 'https://offshoreadvantages.com', siteName: 'Offshore Advantages', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
