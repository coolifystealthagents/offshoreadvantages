import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://offshoreadvantages.com'), title: { default: 'Offshore Advantages | Offshore outsourcing guides', template: '%s | Offshore Advantages' }, description: 'Stealth Agents-style guides for offshore advantages: pricing, services, onboarding, and provider questions.', openGraph: { title: 'Offshore Advantages', description: 'Practical outsourcing guides for business teams.', url: 'https://offshoreadvantages.com', siteName: 'Offshore Advantages', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
