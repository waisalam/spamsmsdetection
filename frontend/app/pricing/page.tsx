import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PricingCard from '@/components/pricing-card'

export const metadata: Metadata = {
  title: 'Pricing - SpamSMSAnalyzer',
  description: 'Choose the right plan for your SMS spam protection needs. AI-powered spam detection for individuals, professionals, and businesses.',
}

const plans = [
  {
    planName: 'Free',
    price: '$0',
    period: '/month',
    features: [
      'Basic SMS analysis',
      '10 messages/month',
      'Email support',
    ],
    ctaText: 'Get Started',
    ctaLink: '/signup',
    popular: false,
  },
  {
    planName: 'Pro',
    price: '$9.99',
    period: '/month',
    features: [
      'Advanced AI analysis',
      'Unlimited messages',
      'Priority support',
      'Spam reports',
    ],
    ctaText: 'Start Pro Trial',
    ctaLink: '/signup?plan=pro',
    popular: true,
  },
  {
    planName: 'Enterprise',
    price: '$29.99',
    period: '/month',
    features: [
      'Everything in Pro',
      'Team management',
      'Custom integrations',
      'Dedicated support',
      'SLA',
    ],
    ctaText: 'Contact Sales',
    ctaLink: '/contact',
    popular: false,
  },
]

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Choose the perfect plan to keep your SMS secure. Whether you’re an individual or a large team, we’ve got you covered with AI-driven protection.
            </p>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <PricingCard key={plan.planName} {...plan} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}