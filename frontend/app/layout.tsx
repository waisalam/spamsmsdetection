import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'


const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'SpamSMSAnalyzer - AI Spam SMS Detector',
  description: 'Detect suspicious SMS messages instantly with advanced AI analysis. Protect yourself from spam, phishing, and malicious texts.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">

      <ClerkProvider>
      
      <body className="font-sans antialiased bg-background text-foreground">
      
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
      </ClerkProvider>
    </html>
  )
}
