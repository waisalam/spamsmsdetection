import {
  Shield,
  MessageSquare,
  MousePointerClick,
  BrainCircuit,
  Eye,
  Zap,
  BarChart3,
  Lock,
  Globe,
  CheckCircle,
  Timer,
  ThumbsUp,
} from 'lucide-react';
import Link from 'next/link';
import Header from '../../components/header';
import Footer from '../../components/footer';

/* -------------------------------------------------------------------------- */
/*  Feature data                                                              */
/* -------------------------------------------------------------------------- */
const features = [
  {
    Icon: Zap,
    title: 'Instant Analysis',
    description: 'Get real-time spam verdicts in milliseconds—no waiting, no delays.',
  },
  {
    Icon: BarChart3,
    title: 'Confidence Scoring',
    description: 'Every result includes a 0–100% confidence score so you know how certain the prediction is.',
  },
  {
    Icon: Lock,
    title: 'Privacy First',
    description: 'Your SMS content is processed securely and never stored or shared.',
  },
  {
    Icon: Globe,
    title: 'Multi-Language Support',
    description: 'The model handles common spam patterns across multiple languages and character sets.',
  },
  {
    Icon: CheckCircle,
    title: 'Accurate ML Model',
    description: 'Trained on thousands of real SMS messages for high accuracy and low false positives.',
  },
  {
    Icon: Timer,
    title: 'Lightweight & Fast',
    description: 'Optimized for speed—works great even on low-end devices and slow connections.',
  },
];

/* -------------------------------------------------------------------------- */
/*  Step data                                                                 */
/* -------------------------------------------------------------------------- */
const steps = [
  {
    number: 1,
    Icon: MessageSquare,
    title: 'Enter Your SMS',
    description:
      'Paste or type the SMS message you received into the text area on the analyzer page.',
  },
  {
    number: 2,
    Icon: MousePointerClick,
    title: 'Analyze the Message',
    description:
      'Click the “Check for Spam” button to send the message to our backend for processing.',
  },
  {
    number: 3,
    Icon: BrainCircuit,
    title: 'Text Preprocessing & Feature Extraction',
    description:
      'The backend cleans the text (removes punctuation, stopwords, URLs) and converts it into a TF‑IDF vector that capture the importance of each word.',
  },
  {
    number: 4,
    Icon: Shield,
    title: 'Spam Prediction',
    description:
      'A pre‑trained logistic regression model classifies the message as spam or safe, and also outputs a confidence score between 0 and 100%.',
  },
  {
    number: 5,
    Icon: Eye,
    title: 'Instant Result',
    description:
      'The verdict and confidence score appear immediately, so you know whether the message is trustworthy.',
  },
];

/* -------------------------------------------------------------------------- */
/*  Timeline step component                                                   */
/* -------------------------------------------------------------------------- */
function Step({
  number,
  Icon,
  title,
  description,
  isLast,
}: {
  number: number;
  Icon: React.ElementType;
  title: string;
  description: string;
  isLast?: boolean;
}) {
  return (
    <div className="flex gap-6">
      {/* Vertical timeline indicator */}
      <div className="flex flex-col items-center">
        {/* Circular badge with icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary border-4 border-background shadow-sm">
          <Icon className="h-5 w-5" />
        </div>
        {!isLast && (
          <div className="h-full w-0.5 bg-border mt-2 mb-2" />
        )}
      </div>

      {/* Content */}
      <div className={`pb-10 ${isLast ? 'pb-0' : ''}`}>
        <div className="inline-flex items-center gap-2 mb-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Step {number}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-1 text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page component                                                            */
/* -------------------------------------------------------------------------- */
export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background text-foreground">
        <main className="flex-1 container mx-auto px-4 py-8">
          {/* Hero section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-muted rounded-full mb-6">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              How It Works
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our spam detector uses a machine learning model trained on
              thousands of real SMS messages. Here’s the step‑by‑step process
              that happens behind the scenes.
            </p>
          </div>

          {/* Features grid */}
          <section id="features" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Key Features
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to quickly and accurately detect spam SMS messages.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl border bg-card p-6 shadow-sm transition hover:shadow-md"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <feature.Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Steps timeline */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                How It Works
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                The step‑by‑step process behind every spam check.
              </p>
            </div>
            <div className="relative">
              {steps.map((step, idx) => (
                <Step
                  key={step.number}
                  number={step.number}
                  Icon={step.Icon}
                  title={step.title}
                  description={step.description}
                  isLast={idx === steps.length - 1}
                />
              ))}
            </div>
          </section>

          {/* Call‑to‑action */}
          <div className="mt-16 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <MessageSquare className="h-4 w-4" />
              Try the Analyzer Now
            </Link>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}