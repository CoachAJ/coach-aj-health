import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://ajhealthcoach.com'),
  title: {
    default: 'Coach AJ - Certified Wholistic Health Coach | AO Scan Technology',
    template: '%s | Coach AJ Health'
  },
  description: 'Empowering you with AO Scan Technology, FREE personalized health evaluations, and foundational nutritional guidance. Transform your health with Coach AJ, CWHC.',
  keywords: 'AO Scan Technology, holistic health coach, nutritional deficiency, epigenetics, mighty 90 essential nutrients, triangle of disease, leaky gut, dysglycemia, health evaluation, frequency optimization, bio-frequencies, homeostasis, CWHC, Certified Wholistic Health Coach',
  authors: [{ name: 'Coach AJ', url: 'https://ajhealthcoach.com' }],
  creator: 'Coach AJ',
  publisher: 'Coach AJ Health & Wellness',
  
  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ajhealthcoach.com',
    siteName: 'Coach AJ Health & Wellness',
    title: 'Coach AJ - Certified Wholistic Health Coach | Transform Your Health',
    description: 'FREE Health Evaluations, AO Scan Technology, and personalized nutritional guidance. Certified Wholistic Health Coach (CWHC) empowering you to take control of your health.',
    images: [
      {
        url: '/images/logo-full.png',
        width: 1200,
        height: 630,
        alt: 'Coach AJ Health & Wellness - Wholistic Health Coaching',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Coach AJ - Certified Wholistic Health Coach',
    description: 'FREE Health Evaluations, AO Scan Technology, and personalized nutritional guidance. Transform your health naturally.',
    images: ['/images/logo-full.png'],
    creator: '@DailywithDoc',
  },
  
  // Apple Mobile Web App
  appleWebApp: {
    capable: true,
    title: 'Coach AJ Health',
    statusBarStyle: 'default',
  },
  
  // Verification and other
  verification: {
    google: 'your-google-verification-code', // You can add this later
  },
  
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  
  // Canonical URL
  alternates: {
    canonical: 'https://ajhealthcoach.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
