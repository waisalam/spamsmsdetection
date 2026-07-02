import Header from '@/components/header';
import Footer from '@/components/footer';
import PricingCard from '@/components/pricing-card';

const plans = [
  {
    plan: 'Free',
    price: '$0',
    period: '/month',
    description: 'Basic SMS analysis',
    features: [
      'Basic SMS analysis',
      'Limited daily requests',
      'Email support',
    ],
    buttonLabel: 'Get Started',
    buttonHref: '/sign-up',
  },
  {
    plan: 'Pro',
    price: '$9.99',
    period: '/month',
    description: 'Unlimited analysis',
    features: [
      'Unlimited analysis',
      'Priority support',
      'Detailed reports',
    ],
    buttonLabel: 'Subscribe',
    buttonHref: '/subscribe-pro',
  },
  {
    plan: 'Enterprise',
    price: 'Custom pricing',
    period: '',
    description: 'Dedicated support',
    features: [
      'Dedicated support',
      'Custom integration',
      'SLA',
    ],
    buttonLabel: 'Contact Us',
    buttonHref: '/contact',
  },
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
              Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <PricingCard
                  key={plan.plan}
                  plan={plan.plan}
                  price={plan.price}
                  period={plan.period}
                  description={plan.description}
                  features={plan.features}
                  buttonLabel={plan.buttonLabel}
                  buttonHref={plan.buttonHref}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}