import { Shield, MessageSquare, MousePointerClick, BrainCircuit, Eye } from 'lucide-react';
import Link from 'next/link';

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
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 border-4 border-white shadow-sm">
          <Icon className="h-5 w-5" />
        </div>
        {!isLast && (
          <div className="h-full w-0.5 bg-indigo-200 mt-2 mb-2" />
        )}
      </div>

      {/* Content */}
      <div className={`pb-10 ${isLast ? 'pb-0' : ''}`}>
        <div className="inline-flex items-center gap-2 mb-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-500">
            Step {number}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page component                                                            */
/* -------------------------------------------------------------------------- */
export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Hero section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-indigo-50 rounded-full mb-6">
            <Shield className="h-8 w-8 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            How It Works
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Our spam detector uses a machine learning model trained on
            thousands of real SMS messages. Here’s the step‑by‑step process
            that happens behind the scenes.
          </p>
        </div>

        {/* Steps timeline */}
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

        {/* Optional call‑to‑action */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
          >
            <MessageSquare className="h-4 w-4" />
            Try the Analyzer Now
          </Link>
        </div>
      </div>
    </div>
  );
}