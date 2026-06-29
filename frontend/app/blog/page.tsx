import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";

const posts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build modern web applications with Next.js and explore its powerful features.",
    date: "2025-03-15",
    author: "Jane Doe",
    slug: "getting-started-with-nextjs",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    excerpt: "A comprehensive guide to utility-first CSS and how to build beautiful designs efficiently.",
    date: "2025-03-10",
    author: "John Smith",
    slug: "mastering-tailwind-css",
  },
  {
    id: 3,
    title: "Design Systems in 2025",
    excerpt: "Why consistent design matters and how to create a scalable design system for your team.",
    date: "2025-03-08",
    author: "Alex Johnson",
    slug: "design-systems-2025",
  },
  {
    id: 4,
    title: "Server Components Deep Dive",
    excerpt: "Understanding React Server Components and how they change the way we build applications.",
    date: "2025-03-05",
    author: "Jane Doe",
    slug: "server-components-deep-dive",
  },
  {
    id: 5,
    title: "Animating with Framer Motion",
    excerpt: "Add delightful animations to your React apps with the simple yet powerful Framer Motion library.",
    date: "2025-02-28",
    author: "Michael Chen",
    slug: "animating-with-framer-motion",
  },
  {
    id: 6,
    title: "Building an Accessible UI",
    excerpt: "Best practices for creating inclusive interfaces that work for all users, regardless of ability.",
    date: "2025-02-22",
    author: "Sara Williams",
    slug: "building-accessible-ui",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-gray-900 via-slate-800 to-gray-800 py-24 px-4 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Blog
            </h1>
            <p className="mt-5 text-lg text-white/80 sm:text-xl">
              Insights, tutorials, and stories from our team.
            </p>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card
                key={post.id}
                className="flex flex-col bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
              >
                <CardHeader className="space-y-1 p-6">
                  <CardTitle className="text-xl font-semibold leading-tight text-gray-900 dark:text-gray-100">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                    {" by "}
                    <span className="font-medium text-gray-700 dark:text-gray-300">{post.author}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 px-6 pb-4">
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-50"
                  >
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}