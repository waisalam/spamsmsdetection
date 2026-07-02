'use client';

import TestimonialCard from './testimonial-card';

const testimonials = [
  {
    quote:
      'This tool helped me avoid a sophisticated phishing attempt. I feel much safer online now.',
    authorName: 'Sarah Johnson',
    role: 'Freelance Designer',
    avatarInitial: 'S',
  },
  {
    quote:
      'The AI analysis is incredibly accurate. It flagged a message that looked completely legitimate to me.',
    authorName: 'Marcus Chen',
    role: 'Small Business Owner',
    avatarInitial: 'M',
  },
  {
    quote:
      'I integrated the SMS checker into my daily workflow. It’s a must-have for anyone who values security.',
    authorName: 'Priya Patel',
    role: 'Cybersecurity Analyst',
    avatarInitial: 'P',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.authorName} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}