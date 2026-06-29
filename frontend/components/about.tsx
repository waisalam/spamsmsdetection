import { Card } from '@/components/ui/card';
import { Shield, Zap, Search, BarChart3, Lock, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Real-Time Spam Detection',
    description:
      'Instantly analyzes SMS content to detect phishing attempts, fraud, and malicious messages before you interact with them.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast Analysis',
    description:
      'Receive threat assessments in under 100ms, ensuring you can act on suspicious messages without delay.',
  },
  {
    icon: Search,
    title: 'URL & Sender Reputation',
    description:
      'Automatically scans links and verifies sender authenticity against global threat intelligence databases.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Risk Scoring',
    description:
      'Multi-factor analysis combining text patterns, metadata, and behavioral signals to generate accurate risk scores.',
  },
  {
    icon: Lock,
    title: 'Privacy First',
    description:
      'Zero data logging policy—your messages are processed anonymously and never stored or shared.',
  },
  {
    icon: Globe,
    title: 'Global Threat Coverage',
    description:
      'Powered by continuously updated machine learning models that protect against international SMS scam campaigns.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background blurs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-gray-400/10 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            SpamSMSAnalyzer combines cutting‑edge AI with real‑time threat intelligence to keep your messages safe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className="border border-gray-600/50 bg-gray-800/50 shadow-md shadow-gray-900/50 p-6 hover:border-gray-500/70 transition-colors"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-gray-600 to-gray-700">
                  <feature.icon className="w-6 h-6 text-gray-200" />
                </div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}