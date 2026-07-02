export interface TestimonialCardProps {
  quote: string;
  authorName: string;
  role: string;
  avatarInitial: string;
}

export default function TestimonialCard({
  quote,
  authorName,
  role,
  avatarInitial,
}: TestimonialCardProps) {
  return (
    <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
        {avatarInitial}
      </div>
      <blockquote className="italic text-gray-600 dark:text-gray-300 mb-4 text-center">
        “{quote}”
      </blockquote>
      <div className="text-center">
        <p className="font-semibold text-gray-900 dark:text-white">{authorName}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
      </div>
    </div>
  );
}