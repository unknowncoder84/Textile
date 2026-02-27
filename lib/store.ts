"use client"

import { useSyncExternalStore, useCallback } from "react"
import { Product, ProductFormData } from "./types"
import { initialProducts, getStockStatus } from "./data"

type Listener = () => void

let products: Product[] = [...initialProducts]
let listeners: Set<Listener> = new Set()

function emitChange() {
  listeners.forEach((listener) => listener())
}

function subscribe(listener: Listener) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function getSnapshot() {
  return products
}

export function useProducts() {
  const data = useSyncExternalStore(subscribe, getSnapshot, getSnapshot)
  
  const addProduct = useCallback((formData: ProductFormData) => {
    const newProduct: Product = {
      ...formData,
      id: crypto.randomUUID(),
      status: getStockStatus(formData.quantity),
      created_at: new Date().toISOString(),
    }
    products = [newProduct, ...products]
    emitChange()
    return newProduct
  }, [])

  const updateProduct = useCallback((id: string, formData: Partial<ProductFormData>) => {
    products = products.map((p) => {
      if (p.id !== id) return p
      const updated = { ...p, ...formData }
      if (formData.quantity !== undefined) {
        updated.status = getStockStatus(formData.quantity)
      }
      return updated
    })
    emitChange()
  }, [])

  const deleteProduct = useCallback((id: string) => {
    products = products.filter((p) => p.id !== id)
    emitChange()
  }, [])

  const getProduct = useCallback(
    (id: string) => {
      return data.find((p) => p.id === id)
    },
    [data]
  )

  return {
    products: data,
    addProduct,
    updateProduct,
    deleteProduct,
    getProduct,
  }
}
