"use client"

import { Separator } from "@/components/ui/separator"
import { Award, Globe, Leaf, Shield, Users, TrendingUp } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const values = [
  {
    icon: Award,
    title: "Quality First",
    description:
      "Every fabric in our collection passes through rigorous quality checks. We source only from certified mills with proven track records of excellence.",
  },
  {
    icon: Globe,
    title: "Global Sourcing",
    description:
      "Our network spans 30+ countries, connecting you with the finest mills in Italy, Japan, Belgium, Egypt, and India for unmatched variety.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We prioritize eco-friendly and organic textiles. Our sustainable sourcing practices support responsible manufacturing across the supply chain.",
  },
  {
    icon: Shield,
    title: "Trusted Partner",
    description:
      "With 15+ years in the industry, we have built lasting relationships with manufacturers and buyers alike. Your business is in reliable hands.",
  },
]

const stats = [
  { icon: Users, value: "1000+", label: "Happy Clients" },
  { icon: Package, value: "500+", label: "Premium Fabrics" },
  { icon: Globe, value: "30+", label: "Countries" },
  { icon: TrendingUp, value: "15+", label: "Years Experience" },
]

function Package(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <AnimatedSection variant="fade-up">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 px-4 py-1.5 backdrop-blur-sm">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                Our Story
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-5xl lg:text-6xl">
              About LoomCraft Textiles
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Founded with a passion for connecting exceptional fabrics with visionary creators, LoomCraft has grown into a trusted name in the B2B textile industry.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection variant="fade-up" delay={200}>
          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                  <stat.icon className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{stat.value}</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection variant="fade" delay={300}>
          <Separator className="my-16" />
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <AnimatedSection variant="fade-right" delay={200}>
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Our Mission</h2>
              <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                At LoomCraft, we believe that great design starts with great materials. Our mission is to simplify textile sourcing for businesses of all sizes — from independent designers to established fashion houses.
              </p>
              <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                We curate a premium collection of fabrics from the world's finest mills, ensuring every meter meets the exacting standards our partners expect. With transparent pricing, reliable stock levels, and dedicated support, we make the sourcing process seamless.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection variant="fade-left" delay={300}>
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Our Approach</h2>
              <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                We maintain direct relationships with mills across Europe, Asia, and Africa. This means no middlemen, competitive pricing, and full traceability from loom to delivery.
              </p>
              <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                Our inventory management system provides real-time stock visibility, so you always know what is available. We offer small-batch sampling for quality assurance before committing to larger orders.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection variant="fade" delay={200}>
          <Separator className="my-16" />
        </AnimatedSection>

        <AnimatedSection variant="fade-up" delay={200}>
          <div className="flex flex-col gap-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">What Defines Us</h2>
              <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
                Our core values guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <AnimatedSection
                  key={value.title}
                  variant="fade-up"
                  delay={index * 120}
                >
                  <div className="group flex flex-col gap-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-900 dark:bg-zinc-100 transition-transform duration-300 group-hover:scale-110">
                      <value.icon className="h-6 w-6 text-white dark:text-zinc-900" />
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{value.title}</h3>
                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
