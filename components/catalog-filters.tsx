"use client"

import { Search, SlidersHorizontal, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CATEGORIES } from "@/lib/types"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"

export interface FilterState {
  search: string
  category: string
  material: string
  priceRange: [number, number]
  sortBy: string
}

interface CatalogFiltersProps {
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
  totalResults: number
}

export function CatalogFilters({
  filters,
  onFiltersChange,
  totalResults,
}: CatalogFiltersProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeFilters =
    (filters.category !== "all" ? 1 : 0) +
    (filters.material !== "all" ? 1 : 0) +
    (filters.priceRange[0] > 0 || filters.priceRange[1] < 5000 ? 1 : 0)

  function resetFilters() {
    onFiltersChange({
      search: "",
      category: "all",
      material: "all",
      priceRange: [0, 5000],
      sortBy: "newest",
    })
  }

  const filterContent = (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Category
        </label>
        <Select
          value={filters.category}
          onValueChange={(val) =>
            onFiltersChange({ ...filters, category: val })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {CATEGORIES.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Material
        </label>
        <Select
          value={filters.material}
          onValueChange={(val) =>
            onFiltersChange({ ...filters, material: val })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="All Materials" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Materials</SelectItem>
            <SelectItem value="100% Natural">100% Natural</SelectItem>
            <SelectItem value="Blended">Blended</SelectItem>
            <SelectItem value="Organic">Organic</SelectItem>
            <SelectItem value="Recycled">Recycled</SelectItem>
            <SelectItem value="Premium Grade">Premium Grade</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-3">
        <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Price Range (Rs./meter)
        </label>
        <Slider
          min={0}
          max={5000}
          step={100}
          value={filters.priceRange}
          onValueChange={(val) =>
            onFiltersChange({
              ...filters,
              priceRange: val as [number, number],
            })
          }
        />
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{'Rs.'}{filters.priceRange[0].toLocaleString("en-IN")}</span>
          <span>{'Rs.'}{filters.priceRange[1].toLocaleString("en-IN")}</span>
        </div>
      </div>

      {activeFilters > 0 && (
        <Button variant="ghost" size="sm" onClick={resetFilters} className="text-xs">
          <X className="mr-1 h-3 w-3" />
          Clear all filters
        </Button>
      )}
    </div>
  )

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search textiles..."
            value={filters.search}
            onChange={(e) =>
              onFiltersChange({ ...filters, search: e.target.value })
            }
            className="pl-9"
          />
        </div>

        <Select
          value={filters.sortBy}
          onValueChange={(val) =>
            onFiltersChange({ ...filters, sortBy: val })
          }
        >
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="name">Name: A-Z</SelectItem>
          </SelectContent>
        </Select>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon" className="relative shrink-0">
              <SlidersHorizontal className="h-4 w-4" />
              {activeFilters > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                  {activeFilters}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80">
            <SheetTitle className="text-base font-semibold">Filters</SheetTitle>
            <div className="mt-6">{filterContent}</div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">
          {totalResults} {totalResults === 1 ? "product" : "products"} found
        </span>
        {activeFilters > 0 && (
          <div className="flex items-center gap-1">
            {filters.category !== "all" && (
              <Badge variant="secondary" className="text-xs">
                {filters.category}
                <button
                  onClick={() =>
                    onFiltersChange({ ...filters, category: "all" })
                  }
                  className="ml-1"
                  aria-label={`Remove ${filters.category} filter`}
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {filters.material !== "all" && (
              <Badge variant="secondary" className="text-xs">
                {filters.material}
                <button
                  onClick={() =>
                    onFiltersChange({ ...filters, material: "all" })
                  }
                  className="ml-1"
                  aria-label={`Remove ${filters.material} filter`}
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
          </div>
        )}
      </div>

      <div className="hidden lg:block">{filterContent}</div>
    </div>
  )
}
