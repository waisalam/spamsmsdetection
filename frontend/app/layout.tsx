import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import Link from 'next/link'

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
          <nav className="border-b border-border bg-card px-4 py-3">
            <div className="container mx-auto flex items-center justify-between">
              <Link href="/" className="text-lg font-bold">
                SpamSMS
              </Link>
              <div className="flex gap-6">
                <Link href="/" className="text-sm hover:text-primary transition-colors">
                  Home
                </Link>
                <Link href="/#features" className="text-sm hover:text-primary transition-colors">
                  Features
                </Link>
                <Link href="/how-it-works" className="text-sm hover:text-primary transition-colors">
                  How It Works
                </Link>
              </div>
            </div>
          </nav>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </body>
      </ClerkProvider>
    </html>
  )
}