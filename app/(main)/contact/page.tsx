"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, MessageCircle, Send, Clock } from "lucide-react"
import { toast } from "sonner"
import { AnimatedSection } from "@/components/animated-section"

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      toast.success("Your message has been sent. We will get back to you within 24 hours.")
      setSubmitting(false)
      ;(e.target as HTMLFormElement).reset()
    }, 1000)
  }

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@loomcraft.com",
      href: "mailto:hello@loomcraft.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 234-5678",
      href: "tel:+15552345678",
      description: "Mon-Fri from 9am to 6pm",
    },
    {
      icon: MapPin,
      label: "Office",
      value: "Bhiwandi Textile Hub, Mumbai, Maharashtra, India",
      description: "Visit our showroom",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat with us instantly",
      href: "https://wa.me/15552345678",
      description: "Quick response guaranteed",
    },
  ]

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <AnimatedSection variant="fade-up">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 px-4 py-1.5 backdrop-blur-sm">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                Get in Touch
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Ready to source premium textiles for your business? Our team is here to help with samples, pricing, and bulk orders.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection variant="fade" delay={200}>
          <Separator className="my-16" />
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <AnimatedSection variant="fade-right" delay={200}>
              <div className="flex flex-col gap-6">
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Reach Out Directly</h2>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {contactMethods.map((method, index) => (
                    <AnimatedSection key={method.label} variant="fade-up" delay={250 + index * 100}>
                      <div className="group flex flex-col gap-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800 transition-transform duration-300 group-hover:scale-110">
                          <method.icon className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{method.label}</span>
                          <span className="text-xs text-zinc-500 dark:text-zinc-500">{method.description}</span>
                          {method.href ? (
                            <a
                              href={method.href}
                              target={method.href.startsWith("http") ? "_blank" : undefined}
                              rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors break-words"
                            >
                              {method.value}
                            </a>
                          ) : (
                            <span className="text-sm text-zinc-600 dark:text-zinc-400 break-words">{method.value}</span>
                          )}
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fade-up" delay={600}>
              <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-800 p-6 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-950">
                    <Clock className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">For B2B Inquiries</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      Looking for bulk orders, custom weaving, or exclusive fabric sourcing? Our B2B team specializes in large-scale textile procurement and can provide competitive pricing with dedicated account management.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection variant="fade-left" delay={300}>
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 transition-all duration-500 hover:shadow-2xl">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Send a Message</h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Fill out the form below and we will respond within 24 hours.
              </p>
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="firstName" className="text-zinc-700 dark:text-zinc-300">First Name</Label>
                    <Input 
                      id="firstName" 
                      required 
                      placeholder="John" 
                      className="bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700 transition-all duration-200 focus:scale-[1.01]" 
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="lastName" className="text-zinc-700 dark:text-zinc-300">Last Name</Label>
                    <Input 
                      id="lastName" 
                      required 
                      placeholder="Doe" 
                      className="bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700 transition-all duration-200 focus:scale-[1.01]" 
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email" className="text-zinc-700 dark:text-zinc-300">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    required 
                    placeholder="john@company.com" 
                    className="bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700 transition-all duration-200 focus:scale-[1.01]" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="company" className="text-zinc-700 dark:text-zinc-300">Company Name</Label>
                  <Input 
                    id="company" 
                    placeholder="Your company (optional)" 
                    className="bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700 transition-all duration-200 focus:scale-[1.01]" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="message" className="text-zinc-700 dark:text-zinc-300">Message</Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell us about your textile requirements, preferred materials, quantities, etc."
                    className="bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700 transition-all duration-200 focus:scale-[1.01] resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={submitting} 
                  className="w-full bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg h-12"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white dark:border-zinc-900 border-t-transparent" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}
