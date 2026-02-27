"use client"

import { Package, Globe, Award, Users } from "lucide-react"
import { AnimatedSection, AnimatedCounter } from "./animated-section"

const stats = [
  { icon: Package, value: 500, suffix: "+", label: "Fabric Variants" },
  { icon: Globe, value: 30, suffix: "+", label: "Countries Served" },
  { icon: Award, value: 15, suffix: "+", label: "Years of Excellence" },
  { icon: Users, value: 2000, suffix: "+", label: "Business Partners" },
]

export function StatsSection() {
  return (
    <section className="border-y border-border bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <AnimatedSection
              key={stat.label}
              variant="fade-up"
              delay={index * 150}
            >
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/5 transition-colors duration-300 hover:bg-primary/10">
                  <stat.icon className="h-6 w-6 text-muted-foreground" />
                </div>
                <span className="text-2xl font-bold text-foreground md:text-3xl">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
