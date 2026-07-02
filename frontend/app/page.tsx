'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Hero from '@/components/hero';
import SMSAnalyzer from '@/components/sms-analyzer';
import Features from '@/components/features';
import About from '@/components/about';
import TestimonialCard from '@/components/testimonial-card';
import Footer from '@/components/footer';
import FeedbackModal from '@/components/feedback-modal';

export default function Home() {
  const testimonials = [
    {
      quote: "This app has completely transformed how I manage my messages. The scam detection alone has saved me from multiple phishing attempts. Highly recommended!",
      author: "Sarah Johnson",
      role: "Freelance Designer",
      avatarInitial: "S"
    },
    {
      quote: "I love the sentiment analysis. It's so accurate and helpful for quickly identifying important messages. The UI is clean and intuitive.",
      author: "Michael Chen",
      role: "Software Engineer",
      avatarInitial: "M"
    },
    {
      quote: "A must-have tool for anyone drowning in SMS clutter. The categorization feature helps me stay organized, and the writing assistance is a game-changer.",
      author: "Emily Rodriguez",
      role: "Marketing Manager",
      avatarInitial: "E"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <SMSAnalyzer />
        <Features />
        <About />

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  avatarInitial={testimonial.avatarInitial}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FeedbackModal />
    </div>
  );
}