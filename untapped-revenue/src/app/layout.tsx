import type { Metadata } from 'next'
import { Barlow_Condensed, DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ModalProvider } from '@/components/modals/ModalContext'
import BookingModal from '@/components/modals/BookingModal'
import FormModal from '@/components/modals/FormModal'
import ScrollProgress from '@/components/ui/ScrollProgress'
import { BRAND, SITE_URL } from '@/config/site'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: '%s | Untapped Revenue',
    default: 'Untapped Revenue — Done-For-You Fitness Studio Marketing',
  },
  description:
    '$46.3 million generated for 100+ fitness studios in 17 months. Done-for-you marketing system: ads, AI follow-up, CRM, and booking — starting at $197/month.',
  keywords: [
    'fitness studio marketing',
    'gym marketing agency',
    'yoga studio ads',
    'pilates studio marketing',
    'CrossFit gym advertising',
    'fitness studio leads',
    'gym member acquisition',
    'done-for-you fitness marketing',
  ],
  authors: [{ name: BRAND.name, url: SITE_URL }],
  creator: BRAND.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: BRAND.name,
    title: 'Untapped Revenue — Done-For-You Fitness Studio Marketing',
    description:
      '$46.3 million generated for 100+ fitness studios in 17 months. The Self-Sustaining AI Member Accelerator.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Untapped Revenue — $46.3M Generated for 100+ Fitness Studios',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Untapped Revenue — Done-For-You Fitness Studio Marketing',
    description: '$46.3M generated for 100+ fitness studios in 17 months.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: BRAND.name,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/logo.png`,
  description: BRAND.description,
  contactPoint: {
    '@type': 'ContactPoint',
    email: BRAND.email,
    contactType: 'customer service',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${barlowCondensed.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        <ModalProvider>
          <ScrollProgress />
          <Header />
          <main>{children}</main>
          <Footer />
          <BookingModal />
          <FormModal />
        </ModalProvider>
      </body>
    </html>
  )
}
