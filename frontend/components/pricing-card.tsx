'use client';

import Link from 'next/link';

interface PricingCardProps {
  plan: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonLabel: string;
  buttonHref: string;
  highlighted?: boolean;
}

const CheckIcon = () => (
  <span className="mr-2 inline-flex items-center justify-center text-green-500" aria-hidden="true">
    ✔
  </span>
);

export default function PricingCard({
  plan,
  price,
  period,
  description,
  features,
  buttonLabel,
  buttonHref,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={`border border-border rounded-lg bg-card text-card-foreground shadow-sm p-6 flex flex-col gap-4 ${
        highlighted ? 'ring-2 ring-primary' : ''
      }`}
    >
      <h3 className="text-lg font-semibold">{plan}</h3>
      {highlighted && (
        <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
          Popular
        </span>
      )}
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-bold">{price}</span>
        <span className="text-muted-foreground">{period}</span>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
      <ul className="flex flex-col gap-2 text-sm">
        {features.map((feature) => (
          <li key={feature} className="flex items-start">
            <CheckIcon />
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href={buttonHref}
        className="mt-auto inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground h-10 px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors"
      >
        {buttonLabel}
      </Link>
    </div>
  );
}