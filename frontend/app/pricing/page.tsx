import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PricingCard from '@/components/pricing-card'

export const metadata: Metadata = {
  title: 'Pricing - SpamSMSAnalyzer',
  description: 'Choose the right plan for your spam detection needs. Free, Pro, and Enterprise options.',
}

const plans = [
  {
    title: 'Free',
    price: '$0/month',
    description: 'Basic spam detection for individuals.',
    features: [
      '100 SMS analyses per month',
      'Basic spam detection',
      'Email support',
    ],
    buttonLabel: 'Get Started',
  },
  {
    title: 'Pro',
    price: '$9.99/month',
    description: 'Advanced protection for power users.',
    features: [
      '10,000 SMS analyses per month',
      'Advanced threat detection',
      'Priority support',
      'URL reputation check',
      'Custom blocklists',
    ],
    buttonLabel: 'Subscribe Now',
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    description: 'For organizations that need maximum security.',
    features: [
      'Unlimited analyses',
      'Dedicated support',
      'Real‑time API access',
      'Custom machine learning models',
      'SLA guarantees',
      'Team management',
    ],
    buttonLabel: 'Contact Sales',
  },
]

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 bg-gradient-to-b from-background to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-gray-400/10 rounded-full blur-3xl opacity-40" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl opacity-30" />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Choose the plan that best fits your spam protection needs. All plans include core AI analysis features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <PricingCard
                  key={plan.title}
                  title={plan.title}
                  price={plan.price}
                  description={plan.description}
                  features={plan.features}
                  buttonLabel={plan.buttonLabel}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}