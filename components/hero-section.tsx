"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent dark:from-zinc-900/80" />
      
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-20 text-center lg:px-8 lg:py-32">
        <AnimatedSection variant="fade-down" delay={100}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 px-4 py-1.5 backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
              Premium B2B Textile Solutions
            </span>
          </div>
        </AnimatedSection>
        <AnimatedSection variant="fade-up" delay={200}>
          <h1 className="max-w-4xl text-balance text-5xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-100 md:text-6xl lg:text-7xl">
            Premium Textile Solutions
          </h1>
        </AnimatedSection>
        <AnimatedSection variant="fade-up" delay={400}>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-xl">
            Source exceptional fabrics from certified mills worldwide. Silk, cotton, linen, and premium blends — curated for discerning businesses.
          </p>
        </AnimatedSection>
        <AnimatedSection variant="fade-up" delay={600}>
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Link href="/catalog">
              <Button
                size="lg"
                className="bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-all duration-300 hover:scale-105 hover:shadow-xl group px-8 h-12 text-base"
              >
                Browse Collection
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-300 dark:border-zinc-700 bg-transparent hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-300 hover:scale-105 px-8 h-12 text-base"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </AnimatedSection>
        
        <AnimatedSection variant="fade-up" delay={800}>
          <div className="mt-16 grid grid-cols-3 gap-8 md:gap-12">
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">500+</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Premium Fabrics</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">30+</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Countries</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">15+</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Years Experience</div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
