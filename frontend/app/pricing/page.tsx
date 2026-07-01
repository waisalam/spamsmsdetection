import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PricingCard } from '@/components/pricing-card'

const freeFeatures = [
  '5 SMS analyses per day',
  'Basic spam detection',
  'URL scanning',
  'Threat reports',
]

const proFeatures = [
  'Unlimited analyses',
  'Advanced threat detection',
  'Priority support',
  'Custom rules',
  'Multi-user dashboard',
  'API access',
]

const enterpriseFeatures = [
  'Unlimited analyses',
  'Dedicated support',
  'API access',
  'SLA guarantees',
  'Custom integrations',
  'On-premise option',
  'Advanced admin controls',
]

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 pb-12 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Pricing Plans
            </h1>
            <p className="text-lg text-gray-300">
              Choose the right plan to protect yourself from SMS threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              planName="Free"
              price="$0"
              description="Basic protection for individuals"
              features={freeFeatures}
              buttonText="Get Started"
              buttonLink="/sign-up?plan=free"
            />
            <PricingCard
              planName="Pro"
              price="$9.99"
              period="/month"
              description="Advanced protection for professionals"
              features={proFeatures}
              buttonText="Start Pro Trial"
              buttonLink="/sign-up?plan=pro"
              featured
            />
            <PricingCard
              planName="Enterprise"
              price="Custom"
              description="Scalable protection for organizations"
              features={enterpriseFeatures}
              buttonText="Contact Sales"
              buttonLink="/contact"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}