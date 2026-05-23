'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Hero from '@/components/hero';
import SMSAnalyzer from '@/components/sms-analyzer';
import Features from '@/components/features';
import About from '@/components/about';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <SMSAnalyzer />
        <Features />
        <About />
      </main>
      <Footer />
    </div>
  );
}
