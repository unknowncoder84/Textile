"use client"

import Image from "next/image"
import Link from "next/link"
import { Product } from "@/lib/types"
import { StockBadge } from "./stock-badge"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { useState } from "react"
import { ArrowUpRight, Package } from "lucide-react"

export function ProductCard({ product }: { product: Product }) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Card className="group overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-zinc-300 dark:hover:border-zinc-700">
      <Link href={`/catalog/${product.id}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          {!imageLoaded && (
            <Skeleton className="absolute inset-0" />
          )}
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onLoad={() => setImageLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="absolute left-3 top-3 flex gap-2">
            <Badge variant="secondary" className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm text-zinc-900 dark:text-zinc-100 border-0 font-medium">
              {product.category}
            </Badge>
          </div>
          
          <div className="absolute right-3 top-3">
            <StockBadge status={product.status} />
          </div>

          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
            <div className="flex items-center gap-2 text-white">
              <Package className="h-4 w-4" />
              <span className="text-sm font-medium">{product.quantity} {product.unit} available</span>
            </div>
            <Button size="sm" className="bg-white text-zinc-900 hover:bg-zinc-100 h-8 px-3">
              View Details
              <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </Link>
      
      <CardContent className="p-4">
        <Link href={`/catalog/${product.id}`}>
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold leading-tight text-zinc-900 dark:text-zinc-100 line-clamp-1 transition-colors duration-300 group-hover:text-zinc-600 dark:group-hover:text-zinc-400">
              {product.name}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 min-h-[2.5rem]">
              {product.description}
            </p>
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-zinc-100 dark:border-zinc-800">
              <div className="flex flex-col">
                <span className="text-xs text-zinc-500 dark:text-zinc-500">Price per meter</span>
                <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  ₹{product.price_per_meter.toLocaleString("en-IN")}
                </span>
              </div>
              <Badge variant="outline" className="text-xs border-zinc-200 dark:border-zinc-700">
                {product.material}
              </Badge>
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  )
}

export function ProductCardSkeleton() {
  return (
    <Card className="overflow-hidden border border-zinc-200 dark:border-zinc-800">
      <Skeleton className="aspect-[4/3] w-full" />
      <CardContent className="flex flex-col gap-2 p-4">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <div className="flex items-center justify-between mt-2 pt-2">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-5 w-16" />
        </div>
      </CardContent>
    </Card>
  )
}
