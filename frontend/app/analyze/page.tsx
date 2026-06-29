import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import SMSAnalyzer from '@/components/sms-analyzer';

export const metadata: Metadata = {
  title: 'SMS Analyzer',
  description: 'Analyze your SMS messages to gain insights into your conversations, communication patterns, and more.',
};

export default function AnalyzePage() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SMSAnalyzer />
      </main>
      <Footer />
    </>
  );
}