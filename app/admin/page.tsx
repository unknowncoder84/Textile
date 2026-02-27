"use client"

import { useState } from "react"
import { useProducts } from "@/lib/store"
import { AdminStockTable } from "@/components/admin-stock-table"
import { ProductForm } from "@/components/product-form"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Package, AlertTriangle, XCircle, TrendingUp, Plus } from "lucide-react"
import { AnimatedSection, AnimatedCounter } from "@/components/animated-section"
import { motion } from "framer-motion"

export default function AdminPage() {
  const { products } = useProducts()
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  const totalProducts = products.length
  const inStock = products.filter((p) => p.status === "in_stock").length
  const lowStock = products.filter((p) => p.status === "low_stock").length
  const outOfStock = products.filter((p) => p.status === "out_of_stock").length
  const totalValue = products.reduce(
    (sum, p) => sum + p.price_per_meter * p.quantity,
    0
  )

  const stats = [
    {
      label: "Total Products",
      value: totalProducts,
      icon: Package,
      color: "text-zinc-900 dark:text-zinc-100",
      bgColor: "bg-zinc-100 dark:bg-zinc-800",
      trend: "+12%",
    },
    {
      label: "In Stock",
      value: inStock,
      icon: TrendingUp,
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-950",
      trend: "+8%",
    },
    {
      label: "Low Stock",
      value: lowStock,
      icon: AlertTriangle,
      color: "text-amber-600 dark:text-amber-400",
      bgColor: "bg-amber-50 dark:bg-amber-950",
      trend: "-3%",
    },
    {
      label: "Out of Stock",
      value: outOfStock,
      icon: XCircle,
      color: "text-red-600 dark:text-red-400",
      bgColor: "bg-red-50 dark:bg-red-950",
      trend: "-15%",
    },
  ]

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <AnimatedSection variant="fade-up">
          <div className="mb-8 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="h-1 w-12 bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 rounded-full" />
              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Admin Dashboard
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                  Inventory Management
                </h1>
                <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
                  Manage your textile inventory, add new products, and track stock levels.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} variant="fade-up" delay={index * 100}>
              <Card className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-2">
                      <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                        {stat.label}
                      </span>
                      <span className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                        <AnimatedCounter target={stat.value} duration={1200} />
                      </span>
                      <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                        {stat.trend} from last month
                      </span>
                    </div>
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${stat.bgColor} transition-transform duration-300 hover:scale-110`}
                    >
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection variant="fade-up" delay={400}>
          <Card className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <CardContent className="p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                    Product Inventory
                  </h2>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                    Total stock value: ₹{totalValue.toLocaleString("en-IN")}
                  </p>
                </div>
                <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Product
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Add New Product</DialogTitle>
                    </DialogHeader>
                    <ProductForm onSuccess={() => setIsAddDialogOpen(false)} />
                  </DialogContent>
                </Dialog>
              </div>
              <AdminStockTable />
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Floating Action Button */}
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <motion.div
              className="fixed bottom-8 right-8 z-50"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
            >
              <Button
                size="lg"
                className="h-14 w-14 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
              >
                <Plus className="h-6 w-6" />
              </Button>
            </motion.div>
          </DialogTrigger>
        </Dialog>
      </div>
    </div>
  )
}
