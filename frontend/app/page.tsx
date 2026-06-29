'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Hero from '@/components/hero';
import SMSAnalyzer from '@/components/sms-analyzer';
import Features from '@/components/features';
import About from '@/components/about';
import Footer from '@/components/footer';
import FeedbackModal from '@/components/feedback-modal';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <div className="py-8 text-center">
          <Link href="/features" className="text-primary hover:underline font-medium">
            View All Features
          </Link>
        </div>
        <SMSAnalyzer />
        <Features />
        <About />
      </main>
      <Footer />
      <FeedbackModal />
    </div>
  );
}