export interface Product {
  id: string
  name: string
  description: string
  quantity: number
  category: string
  material: string
  price_per_meter: number
  image_url: string
  status: "in_stock" | "low_stock" | "out_of_stock"
  unit: string
  gsm?: number
  width?: string
  created_at: string
}

export type ProductFormData = Omit<Product, "id" | "status" | "created_at">

export const CATEGORIES = [
  "Silk",
  "Cotton",
  "Linen",
  "Velvet",
  "Chiffon",
  "Wool",
  "Satin",
  "Denim",
  "Synthetic",
] as const

export const MATERIALS = [
  "100% Natural",
  "Blended",
  "Organic",
  "Recycled",
  "Premium Grade",
] as const
