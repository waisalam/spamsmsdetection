import { Card } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gray-400/10 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                  About SpamSMSAnalyzer
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  SpamSMSAnalyzer is a cutting-edge AI-powered platform designed to protect you from SMS-based threats. In an era where mobile phishing and SMS fraud continue to evolve, we provide instant, intelligent analysis to keep you safe.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">What We Do</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our advanced machine learning models analyze incoming SMS messages in real-time, evaluating:
                </p>
                <ul className="space-y-3">
                  {[
                    'Sender authentication and phone number validation',
                    'Content analysis for phishing keywords and malicious patterns',
                    'URL detection and reputation checking',
                    'Social engineering attack patterns',
                    'Spam database matching and threat intelligence',
                    'Behavioral analysis and anomaly detection'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Why Choose Us?</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: '99.2%', desc: 'Detection Accuracy' },
                    { title: '<100ms', desc: 'Response Time' },
                    { title: '0%', desc: 'Data Logging' },
                    { title: '24/7', desc: 'Support Available' }
                  ].map((stat, idx) => (
                    <Card key={idx} className="border border-gray-600/50 bg-gray-800/50 shadow-md shadow-gray-900/50 p-4">
                      <p className="text-2xl font-bold text-gray-200 mb-1">{stat.title}</p>
                      <p className="text-sm text-gray-400">{stat.desc}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="border-2 border-gray-600/30 bg-gradient-to-br from-gray-800/50 to-gray-900/20 p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-400/10 via-transparent to-gray-400/10"></div>
              <div className="relative space-y-6">
                <div className="text-center">
                  <div className="inline-block mb-4">
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-gray-500 to-gray-400 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">✓</span>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Mission: Your Safety</h4>
                  <p className="text-gray-300">
                    We&apos;re committed to making SMS communication safer for everyone.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-white">Technology Stack</h4>
                  <div className="space-y-2">
                    {[
                      'Neural Network-based Text Classification',
                      'Real-time Threat Intelligence',
                      'Multi-factor Risk Scoring',
                      'Continuous Model Improvements',
                      'Enterprise-grade Security'
                    ].map((tech, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-300">
                        <span className="w-2 h-2 rounded-full bg-gray-400/50"></span>
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-700">
                  <p className="text-sm text-gray-400 text-center">
                    Trusted by thousands of users worldwide to protect their digital safety.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}