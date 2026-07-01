import Header from "@/components/header";
import Footer from "@/components/footer";
import PricingCard from "@/components/pricing-card";

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Our Pricing</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PricingCard
            title="Basic"
            price="$9/month"
            features={["1 Project", "5GB Storage", "Basic Support"]}
          />
          <PricingCard
            title="Pro"
            price="$29/month"
            features={["10 Projects", "50GB Storage", "Priority Support"]}
          />
          <PricingCard
            title="Enterprise"
            price="Custom"
            features={["Unlimited Projects", "500GB Storage", "Dedicated Support"]}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}