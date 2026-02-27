"use client"

import { useProducts } from "@/lib/store"
import { ProductCard } from "./product-card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export function FeaturedProducts() {
  const { products } = useProducts()
  const featured = products.filter((p) => p.status !== "out_of_stock").slice(0, 4)

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
      <AnimatedSection variant="fade-up">
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Curated Selection
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Featured Textiles
            </h2>
          </div>
          <Link href="/catalog" className="hidden md:block">
            <Button variant="ghost" className="group text-sm text-muted-foreground">
              View all
              <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </AnimatedSection>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((product, index) => (
          <AnimatedSection
            key={product.id}
            variant="fade-up"
            delay={index * 100}
          >
            <ProductCard product={product} />
          </AnimatedSection>
        ))}
      </div>
      <AnimatedSection variant="fade-up" delay={400}>
        <div className="mt-6 text-center md:hidden">
          <Link href="/catalog">
            <Button variant="outline">
              View All Products
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </AnimatedSection>
    </section>
  )
}
