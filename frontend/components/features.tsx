import { Card } from '@/components/ui/card';
import { Shield, Zap, Brain, Eye, Lock, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Detection',
    description: 'Advanced machine learning algorithms analyze SMS patterns, sender information, and content to identify threats.',
    color: 'from-secondary to-accent'
  },
  {
    icon: Zap,
    title: 'Instant Analysis',
    description: 'Get real-time results in seconds. Analyze unlimited messages with our lightning-fast processing engine.',
    color: 'from-primary to-secondary'
  },
  {
    icon: Shield,
    title: 'Advanced Protection',
    description: 'Protect against phishing, malware links, financial fraud, and social engineering attacks.',
    color: 'from-accent to-primary'
  },
  {
    icon: Eye,
    title: 'Pattern Recognition',
    description: 'Identifies suspicious patterns including spoofed numbers, common phishing keywords, and malicious URLs.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Lock,
    title: 'Privacy First',
    description: 'Your messages are analyzed locally. We never store or share your personal data.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: TrendingUp,
    title: 'Threat Intelligence',
    description: 'Powered by real-time threat databases and continuously updated spam signatures.',
    color: 'from-pink-500 to-red-500'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Our comprehensive SMS analysis platform provides industry-leading detection capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Card
                key={idx}
                className="group relative border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 hover:bg-card/60 transition-all duration-300 p-6 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <div className="relative">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.color} mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
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
