'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  isPopular?: boolean;
}

export default function PricingCard({
  title,
  price,
  period,
  features,
  ctaText,
  ctaHref,
  isPopular = false,
}: PricingCardProps) {
  return (
    <Card className={`relative p-6 ${isPopular ? 'border-primary shadow-lg' : ''}`}>
      {isPopular && (
        <span className="absolute top-4 right-4 inline-flex items-center rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
          Popular
        </span>
      )}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold">{price}</span>
          {period && <span className="text-muted-foreground">{period}</span>}
        </div>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-muted-foreground">
              <Check className="h-4 w-4 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
        <Button className="w-full" variant={isPopular ? 'default' : 'outline'} asChild>
          <a href={ctaHref}>{ctaText}</a>
        </Button>
      </div>
    </Card>
  );
}