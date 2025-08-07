import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Plus, Search, Package, Edit, Trash2, Eye } from 'lucide-react'
import { ProductsClient } from "./product-client"

export default function VendorProducts() {
  const products = [
    { id: 1, name: "Summer Dress", price: "$49.99", stock: 25, status: "Active", sales: 45 },
    { id: 2, name: "Wireless Headphones", price: "$129.99", stock: 12, status: "Active", sales: 32 },
    { id: 3, name: "Coffee Mug Set", price: "$29.99", stock: 0, status: "Out of Stock", sales: 28 },
    { id: 4, name: "Laptop Stand", price: "$79.99", stock: 8, status: "Low Stock", sales: 15 },
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Products</h1>
          <p className="text-sm text-gray-500">Manage your product inventory</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input placeholder="Search products..." className="pl-10" />
        </div>
      </div>

      <ProductsClient products={products} />
    </div>
  )
}
