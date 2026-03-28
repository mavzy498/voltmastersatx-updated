import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VoltMasters ATX | Austin EV Charger Installation',
  description:
    "Austin's #1 EV charger installer. Level 2, Tesla Wall Connector, panel upgrades & Austin Energy rebate filing. Licensed, bonded, insured. Get a free quote today.",
  keywords:
    'EV charger installation Austin TX, Level 2 charger Austin, Tesla Wall Connector install, Austin Energy EV rebate, electrician Austin',
  openGraph: {
    title: 'VoltMasters ATX | Austin EV Charger Installation',
    description:
      "End-to-end EV charger installation. Charger, install & Austin Energy rebate filing — all included.",
    url: 'https://www.voltmastersatx.com',
    siteName: 'VoltMasters ATX',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VoltMasters ATX | Austin EV Charger Installation',
    description:
      "Austin's #1 EV charger installer. Free quotes. Austin Energy rebate filing included.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
