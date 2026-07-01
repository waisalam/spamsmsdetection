'use client';

import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

interface PricingCardProps {
  plan: string;
  price: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  highlighted?: boolean;
}

export default function PricingCard({
  plan,
  price,
  description,
  features,
  ctaText,
  ctaHref,
  highlighted = false,
}: PricingCardProps) {
  return (
    <Card className={highlighted ? 'border-primary shadow-lg' : ''}>
      <CardHeader>
        <CardTitle>{plan}</CardTitle>
        <div className="mt-2 text-3xl font-bold">{price}</div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <a href={ctaHref}>{ctaText}</a>
        </Button>
      </CardFooter>
    </Card>
  );
}