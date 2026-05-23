'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Spinner } from '@/components/ui/spinner';
import { AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';

type AnalysisResult = {
  status: 'spam' | 'safe' | 'suspicious';
  confidence: number;
  reasons: string[];
} | null;

export default function SMSAnalyzer() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult>(null);
  const [error, setError] = useState('');

  const handleAnalyze = async () => {
    if (!message.trim()) {
      setError('Please enter a message to analyze');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      // Simulate API call to Flask backend 
  const response = await fetch('https://spamsmsdetection-r49y.onrender.com/predict',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({message: message})
  })
  if(!response.ok){
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  

  setResult({
  status: data.prediction === 'spam' ? 'spam' : 'safe',
  confidence: data.confidence,
  reasons:
    data.prediction === 'spam'
      ? [
          'Suspicious keywords detected',
          'AI model classified this as spam',
        ]
      : [
          'Message appears legitimate',
          'No strong spam indicators found',
        ],
});


    } catch (err) {
      setError('Failed to analyze message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'spam':
        return <AlertCircle className="w-6 h-6 text-red-500" />;
      case 'safe':
        return <CheckCircle className="w-6 h-6 text-primary" />;
      case 'suspicious':
        return <AlertTriangle className="w-6 h-6 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'spam':
        return 'border-red-500/30 bg-red-500/10';
      case 'safe':
        return 'border-primary/30 bg-primary/10';
      case 'suspicious':
        return 'border-yellow-500/30 bg-yellow-500/10';
      default:
        return '';
    }
  };

  return (
    <section id="analyzer" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 -left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-30"></div>
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Analyze Your Messages
          </h2>
          <p className="text-lg text-foreground/70">
            Paste any SMS message below to get instant AI-powered analysis
          </p>
        </div>

        <Card className="border border-border bg-card/50 backdrop-blur p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Enter SMS Message
              </label>
              <Textarea
                placeholder="Paste your SMS message here... Example: Click here to confirm your bank account: https://malicious-link.com"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={loading}
                className="min-h-32 resize-none bg-card border-border text-foreground placeholder:text-foreground/40"
              />
            </div>

            <div className="flex gap-3">
              <Button
                onClick={handleAnalyze}
                disabled={loading || !message.trim()}
                className="flex-1 bg-linear-to-r from-primary to-accent text-primary-foreground hover:opacity-90 disabled:opacity-50"
                size="lg"
              >
                {loading ? (
                  <>
                    <Spinner className="mr-2 h-5 w-5" />
                    Analyzing...
                  </>
                ) : (
                  'Analyze Message'
                )}
              </Button>
              <Button
                onClick={() => {
                  setMessage('');
                  setResult(null);
                  setError('');
                }}
                variant="outline"
                className="border-border hover:bg-card"
                size="lg"
              >
                Clear
              </Button>
            </div>

            {error && (
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                {error}
              </div>
            )}

            {result && (
              <div className={`p-6 rounded-xl border-2 transition-all ${getStatusColor(result.status)}`}>
                <div className="flex items-start gap-4">
                  <div className="pt-1">
                    {getStatusIcon(result.status)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white capitalize">
                        {result.status === 'spam' ? '⚠️ Likely Spam' : result.status === 'safe' ? '✅ Safe Message' : '⚡ Suspicious'}
                      </h3>
                      <span className="text-sm font-semibold text-foreground/70">
                        {result.confidence}% Confidence
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 mb-4 overflow-hidden">
                      <div
                        className={`h-full transition-all ${
                          result.status === 'spam'
                            ? 'bg-red-500'
                            : result.status === 'safe'
                            ? 'bg-primary'
                            : 'bg-yellow-500'
                        }`}
                        style={{ width: `${result.confidence}%` }}
                      ></div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Detection Reasons:</p>
                      <ul className="space-y-1">
                        {result.reasons.map((reason, idx) => (
                          <li key={idx} className="text-sm text-foreground/70 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                            {reason}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
}
