"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Send, Loader2 } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setSubmitted(true)
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background border-b">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Have a question or project? We&apos;d love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Form and Info within a styled card */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <Card className="max-w-6xl mx-auto shadow-lg border-0 rounded-xl">
            <CardContent className="p-6 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left Column: Contact Form */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none"
                      >
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium leading-none"
                      >
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="How can we help?"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project..."
                        rows={5}
                        required
                      />
                    </div>

                    {error && (
                      <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                        {error}
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={loading || submitted}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : submitted ? (
                        "Message Sent!"
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>

                {/* Right Column: Contact Information and Map */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Our Office</h2>
                    <div className="space-y-5">
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-0.5 h-5 w-5 text-muted-foreground flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Address</p>
                          <p className="text-sm text-muted-foreground">
                            1234 Innovation Drive
                            <br />
                            San Francisco, CA 94107
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Phone className="mt-0.5 h-5 w-5 text-muted-foreground flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Phone</p>
                          <p className="text-sm text-muted-foreground">
                            +1 (555) 123-4567
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Mail className="mt-0.5 h-5 w-5 text-muted-foreground flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Email</p>
                          <p className="text-sm text-muted-foreground">
                            hello@acmeinc.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Map Placeholder */}
                  <div className="h-64 rounded-lg bg-muted flex items-center justify-center border border-border shadow-inner">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="mx-auto h-8 w-8 mb-2 opacity-50" />
                      <p className="text-sm">Interactive map coming soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </>
  )
}