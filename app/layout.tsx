import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Coach AJ - Holistic Health & Wellness Coaching',
  description: 'Empowering you with AO Scan Technology, personalized health evaluations, and foundational nutritional guidance. Transform your health with Coach AJ, CWHC.',
  keywords: 'AO Scan Technology, holistic health coach, nutritional deficiency, epigenetics, mighty 90 essential nutrients, triangle of disease, leaky gut, dysglycemia, health evaluation, frequency optimization, bio-frequencies, homeostasis, CWHC, Certified Wholistic Health Coach',
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
