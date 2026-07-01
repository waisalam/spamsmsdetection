'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export interface PricingCardProps {
  planName: string;
  price: string;
  description: string;
  features: string[];
  ctaText: string;
  link: string;
}

export default function PricingCard({
  planName,
  price,
  description,
  features,
  ctaText,
  link,
}: PricingCardProps) {
  return (
    <Card className="p-6 space-y-6">
      <div>
        <h3 className="text-lg font-semibold">{planName}</h3>
        <div className="mt-2 text-2xl font-bold">{price}</div>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>

      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button asChild className="w-full">
        <Link href={link}>{ctaText}</Link>
      </Button>
    </Card>
  );
}