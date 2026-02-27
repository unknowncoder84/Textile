"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CATEGORIES, MATERIALS, Product, ProductFormData } from "@/lib/types"
import { useProducts } from "@/lib/store"
import { toast } from "sonner"

interface ProductFormProps {
  product?: Product
  onSuccess?: () => void
}

export function ProductForm({ product, onSuccess }: ProductFormProps) {
  const { addProduct, updateProduct } = useProducts()
  const [formData, setFormData] = useState<ProductFormData>({
    name: product?.name ?? "",
    description: product?.description ?? "",
    quantity: product?.quantity ?? 0,
    category: product?.category ?? "Cotton",
    material: product?.material ?? "100% Natural",
    price_per_meter: product?.price_per_meter ?? 0,
    image_url: product?.image_url ?? "/images/products/cotton-white.jpg",
    unit: product?.unit ?? "meters",
    gsm: product?.gsm ?? 0,
    width: product?.width ?? "",
  })

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        description: product.description,
        quantity: product.quantity,
        category: product.category,
        material: product.material,
        price_per_meter: product.price_per_meter,
        image_url: product.image_url,
        unit: product.unit,
        gsm: product.gsm,
        width: product.width,
      })
    }
  }, [product])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    
    if (product) {
      updateProduct(product.id, formData)
      toast.success("Product updated successfully")
    } else {
      addProduct(formData)
      toast.success("Product added successfully")
    }
    
    onSuccess?.()
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Product Name</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          required
          placeholder="e.g., Royal Blue Mulberry Silk"
          className="bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          required
          rows={3}
          placeholder="Detailed product description including material specs..."
          className="bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="category">Category</Label>
          <Select
            value={formData.category}
            onValueChange={(val) =>
              setFormData({ ...formData, category: val })
            }
          >
            <SelectTrigger className="bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {CATEGORIES.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="material">Material</Label>
          <Select
            value={formData.material}
            onValueChange={(val) =>
              setFormData({ ...formData, material: val })
            }
          >
            <SelectTrigger className="bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {MATERIALS.map((mat) => (
                <SelectItem key={mat} value={mat}>
                  {mat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="price">Price per Meter (₹)</Label>
          <Input
            id="price"
            type="number"
            min={0}
            value={formData.price_per_meter}
            onChange={(e) =>
              setFormData({
                ...formData,
                price_per_meter: Number(e.target.value),
              })
            }
            required
            className="bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="quantity">Quantity ({formData.unit})</Label>
          <Input
            id="quantity"
            type="number"
            min={0}
            value={formData.quantity}
            onChange={(e) =>
              setFormData({
                ...formData,
                quantity: Number(e.target.value),
              })
            }
            required
            className="bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="gsm">GSM</Label>
          <Input
            id="gsm"
            type="number"
            min={0}
            value={formData.gsm ?? ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                gsm: Number(e.target.value),
              })
            }
            placeholder="e.g., 120"
            className="bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="width">Width</Label>
          <Input
            id="width"
            value={formData.width ?? ""}
            onChange={(e) =>
              setFormData({ ...formData, width: e.target.value })
            }
            placeholder="e.g., 60 inches"
            className="bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="image_url">Image URL</Label>
        <Select
          value={formData.image_url}
          onValueChange={(val) =>
            setFormData({ ...formData, image_url: val })
          }
        >
          <SelectTrigger className="bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700">
            <SelectValue placeholder="Select product image" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="/images/products/silk-royal.jpg">Silk Royal</SelectItem>
            <SelectItem value="/images/products/cotton-white.jpg">Cotton White</SelectItem>
            <SelectItem value="/images/products/linen-natural.jpg">Linen Natural</SelectItem>
            <SelectItem value="/images/products/velvet-emerald.jpg">Velvet Emerald</SelectItem>
            <SelectItem value="/images/products/chiffon-blush.jpg">Chiffon Blush</SelectItem>
            <SelectItem value="/images/products/wool-charcoal.jpg">Wool Charcoal</SelectItem>
            <SelectItem value="/images/products/satin-gold.jpg">Satin Gold</SelectItem>
            <SelectItem value="/images/products/denim-indigo.jpg">Denim Indigo</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center justify-end gap-2 pt-4">
        <Button 
          type="submit"
          className="bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          {product ? "Update Product" : "Add Product"}
        </Button>
      </div>
    </form>
  )
}
