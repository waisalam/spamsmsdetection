'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/header';
import Hero from '@/components/hero';
import SMSAnalyzer from '@/components/sms-analyzer';
import Features from '@/components/features';
import About from '@/components/about';
import Footer from '@/components/footer';
import FeedbackModal from '@/components/feedback-modal';

export default function Home() {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href="/features"]');
      if (link) {
        e.preventDefault();
        e.stopPropagation();
        featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
    };
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <SMSAnalyzer />
        <div ref={featuresRef}>
          <Features />
        </div>
        <About />
      </main>
      <Footer />
      <FeedbackModal />
    </div>
  );
}