import Header from '@/components/header';
import Footer from '@/components/footer';
import PricingCard from '@/components/pricing-card';

const plans = [
  {
    name: 'Free',
    price: '$0/month',
    features: [
      'Basic SMS analysis',
      'Limited daily requests',
      'Email support',
    ],
    ctaText: 'Get Started',
    ctaLink: '/sign-up',
  },
  {
    name: 'Pro',
    price: '$9.99/month',
    features: [
      'Unlimited analysis',
      'Priority support',
      'Detailed reports',
    ],
    ctaText: 'Subscribe',
    ctaLink: '/subscribe-pro',
  },
  {
    name: 'Enterprise',
    price: 'Custom pricing',
    features: [
      'Dedicated support',
      'Custom integration',
      'SLA',
    ],
    ctaText: 'Contact Us',
    ctaLink: '/contact',
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
                  key={plan.name}
                  name={plan.name}
                  price={plan.price}
                  features={plan.features}
                  ctaText={plan.ctaText}
                  ctaLink={plan.ctaLink}
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