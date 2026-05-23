import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl opacity-50"></div>
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm text-foreground/80">AI-Powered SMS Security</span>
          </div>
          <h1 className="text-balance text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Detect Spam SMS
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Instantly
            </span>
          </h1>
          <p className="text-balance text-lg sm:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Protect yourself from suspicious messages with our advanced AI analysis. Identify phishing attempts, spam, and malicious texts before they cause harm.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Analyze Message Now
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-card">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
