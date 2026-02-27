import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Product } from "@/lib/types"

const statusConfig: Record<
  Product["status"],
  { label: string; className: string }
> = {
  in_stock: {
    label: "In Stock",
    className: "bg-success/10 text-success border-success/20",
  },
  low_stock: {
    label: "Low Stock",
    className: "bg-warning/10 text-warning border-warning/20",
  },
  out_of_stock: {
    label: "Out of Stock",
    className: "bg-destructive/10 text-destructive border-destructive/20",
  },
}

export function StockBadge({ status }: { status: Product["status"] }) {
  const config = statusConfig[status]
  return (
    <Badge variant="outline" className={cn("text-xs font-medium", config.className)}>
      {config.label}
    </Badge>
  )
}
