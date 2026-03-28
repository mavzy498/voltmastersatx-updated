import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
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

const META_PIXEL_ID = '1577460146887907';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Electrician',
  name: 'VoltMasters ATX',
  image: 'https://www.voltmastersatx.com/og-image.jpg',
  url: 'https://www.voltmastersatx.com',
  telephone: '+15125375145',
  email: 'info@voltmastersatx.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Austin',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 30.2672,
    longitude: -97.7431,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '15:00',
    },
  ],
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '100',
  },
  areaServed: [
    'Austin', 'Round Rock', 'Cedar Park', 'Georgetown', 'Pflugerville',
    'Kyle', 'Buda', 'Lakeway', 'Westlake Hills', 'Bee Cave',
    'Manor', 'Hutto', 'Liberty Hill', 'Leander', 'Dripping Springs',
    'San Marcos', 'Rollingwood', 'Wimberley',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'EV Charger Installation Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Residential Level 2 EV Charger Installation',
          description: 'Level 2 home EV charger installation including charger, wiring, and Austin Energy rebate filing.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Tesla Wall Connector Installation',
          description: 'Expert Tesla Wall Connector installation for Austin homeowners.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Electrical Panel Upgrade',
          description: 'Panel upgrades from 100A to 200A+ to support EV charger installation.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial EV Charger Installation',
          description: 'Multi-port commercial EV charging solutions for businesses and HOAs in Austin.',
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* Meta Pixel */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={'https://www.facebook.com/tr?id=' + META_PIXEL_ID + '&ev=PageView&noscript=1'}
            alt=""
          />
        </noscript>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
