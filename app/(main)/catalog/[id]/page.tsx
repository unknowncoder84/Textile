"use client"

import { use } from "react"
import Image from "next/image"
import Link from "next/link"
import { useProducts } from "@/lib/store"
import { StockBadge } from "@/components/stock-badge"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, MessageCircle, Mail, Ruler, Weight, Layers } from "lucide-react"

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const { getProduct } = useProducts()
  const product = getProduct(id)

  if (!product) {
    return (
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-foreground">Product Not Found</h1>
        <p className="text-muted-foreground">
          The product you are looking for does not exist or has been removed.
        </p>
        <Link href="/catalog">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Catalog
          </Button>
        </Link>
      </div>
    )
  }

  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in "${product.name}" (Rs.${product.price_per_meter}/meter). Could you share more details?`
  )
  const emailSubject = encodeURIComponent(`Inquiry: ${product.name}`)
  const emailBody = encodeURIComponent(
    `Hello,\n\nI'm interested in "${product.name}" priced at Rs.${product.price_per_meter}/meter.\n\nPlease share availability and bulk pricing details.\n\nThank you.`
  )

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
      <AnimatedSection variant="fade-right">
        <Link
          href="/catalog"
          className="mb-6 inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="mr-1 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Catalog
        </Link>
      </AnimatedSection>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        <AnimatedSection variant="fade-right" delay={100}>
          <div className="relative aspect-square overflow-hidden rounded-lg bg-muted group">
            <Image
              src={product.image_url}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </AnimatedSection>

        <div className="flex flex-col gap-6">
          <AnimatedSection variant="fade-left" delay={200}>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{product.category}</Badge>
                <StockBadge status={product.status} />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground">
                {product.name}
              </h1>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-foreground">
                  {'Rs.'}{product.price_per_meter.toLocaleString("en-IN")}
                </span>
                <span className="text-base text-muted-foreground">/meter</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="fade" delay={300}>
            <Separator />
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={350}>
            <p className="text-base leading-relaxed text-muted-foreground">
              {product.description}
            </p>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={400}>
            <div className="grid grid-cols-3 gap-4">
              {product.gsm && (
                <div className="flex flex-col items-center gap-1 rounded-lg border border-border bg-muted/50 p-3 transition-all duration-300 hover:bg-muted hover:shadow-sm">
                  <Weight className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-semibold text-foreground">{product.gsm} GSM</span>
                  <span className="text-xs text-muted-foreground">Weight</span>
                </div>
              )}
              {product.width && (
                <div className="flex flex-col items-center gap-1 rounded-lg border border-border bg-muted/50 p-3 transition-all duration-300 hover:bg-muted hover:shadow-sm">
                  <Ruler className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-semibold text-foreground">{product.width}</span>
                  <span className="text-xs text-muted-foreground">Width</span>
                </div>
              )}
              <div className="flex flex-col items-center gap-1 rounded-lg border border-border bg-muted/50 p-3 transition-all duration-300 hover:bg-muted hover:shadow-sm">
                <Layers className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-semibold text-foreground">{product.material}</span>
                <span className="text-xs text-muted-foreground">Type</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={450}>
            <div className="flex flex-col gap-2 rounded-lg border border-border bg-muted/50 p-4">
              <span className="text-sm font-medium text-foreground">Availability</span>
              <span className="text-sm text-muted-foreground">
                {product.quantity > 0
                  ? `${product.quantity} ${product.unit} currently in stock`
                  : "Currently out of stock. Contact us for restock timelines."}
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="fade" delay={500}>
            <Separator />
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={550}>
            <div className="flex flex-col gap-3">
              <span className="text-sm font-medium text-foreground">Interested? Get in touch:</span>
              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/15552345678?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="w-full bg-[#25D366] text-[#ffffff] hover:bg-[#25D366]/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                </a>
                <a
                  href={`mailto:hello@loomcraft.com?subject=${emailSubject}&body=${emailBody}`}
                  className="flex-1"
                >
                  <Button variant="outline" className="w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Us
                  </Button>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}
