import Header from '@/components/header';
import Footer from '@/components/footer';
import SMSAnalyzer from '@/components/sms-analyzer';

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