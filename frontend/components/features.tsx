import { Card } from '@/components/ui/card';
import { Shield, Zap, Brain, Eye, Lock, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Detection',
    description:
      'Advanced machine learning algorithms analyze SMS patterns, sender information, and content to identify threats.',
  },
  {
    icon: Zap,
    title: 'Instant Analysis',
    description:
      'Get real-time results in seconds. Analyze unlimited messages with our lightning-fast processing engine.',
  },
  {
    icon: Shield,
    title: 'Advanced Protection',
    description:
      'Protect against phishing, malware links, financial fraud, and social engineering attacks.',
  },
  {
    icon: Eye,
    title: 'Pattern Recognition',
    description:
      'Identifies suspicious patterns including spoofed numbers, common phishing keywords, and malicious URLs.',
  },
  {
    icon: Lock,
    title: 'Privacy First',
    description:
      'Your messages are analyzed locally. We never store or share your personal data.',
  },
  {
    icon: TrendingUp,
    title: 'Threat Intelligence',
    description:
      'Powered by real-time threat databases and continuously updated spam signatures.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our comprehensive SMS analysis platform provides industry-leading detection capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Card
                key={idx}
                className="group relative border border-gray-700 bg-gray-800 hover:bg-gradient-to-br hover:from-gray-600 hover:to-gray-700 transition-all duration-300 p-6 overflow-hidden"
              >
                <div className="relative">
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-gray-600 to-gray-700 mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}