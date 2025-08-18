"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Package, Edit, Trash2, Eye, Search } from "lucide-react";
import { SwipablePopupSheet } from "@/components/ui/swipablePopupSheet";
import { AddProductForm } from "@/components/forms/addProduct";
import { Input } from "@/components/ui/input";
import ViewProductDetail from "@/components/forms/viewProductDetail";

interface Product {
  id: number;
  name: string;
  price: string;
  stock: number;
  status: string;
  sales: number;
}

interface ProductsClientProps {
  products: Product[];
}

export function ProductsClient({ products }: ProductsClientProps) {
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);
  const [isViewProductOpen, setIsViewProductOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number>(0);

  const handleAddProduct = (data: any) => {
    console.log("Adding product:", data);
    setIsAddProductOpen(false);
  };

  const handleViewProduct = (productId : number) => {
    const id = productId;
    setSelectedId(id);
    setIsViewProductOpen(true);
  };

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input placeholder="Search products..." className="pl-10 z-0" />
          </div>
        </div>
        <Button
          onClick={() => setIsAddProductOpen(true)}
          className=" bg-indigo-600 hover:bg-indigo-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Product Inventory</CardTitle>
          <CardDescription>{products.length} products in total</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Package className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">{product.name}</h3>
                    <div className="flex gap-2   row-auto">
                      <p className="text-sm text-zinc-600">
                        {product.sales} sold
                      </p>

                      <p className="text-sm text-zinc-600">
                        {product.stock} in stock
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="font-medium">{product.price}</p>
                    <p className="text-sm text-zinc-600">
                      Total : {product.sales + product.stock}
                    </p>
                  </div>
                  <Badge
                    variant={
                      product.status === "Active"
                        ? "default"
                        : product.status === "Out of Stock"
                        ? "destructive"
                        : "secondary"
                    }
                  >
                    {product.status}
                  </Badge>
                  <div className="flex space-x-2">
                    <Button
                      onClick={(e) => {
                        handleViewProduct(product.id);
                      }}
                      variant="ghost"
                      size="sm"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <SwipablePopupSheet
        open={isAddProductOpen}
        onOpenChange={setIsAddProductOpen}
        title="Add New Product"
        description="Create a new product for your store"
        maxHeight="80vh"
      >
        <AddProductForm
          onSubmit={handleAddProduct}
          onCancel={() => setIsAddProductOpen(false)}
        />
      </SwipablePopupSheet>

      <SwipablePopupSheet
        open={isViewProductOpen}
        onOpenChange={setIsViewProductOpen}
        title="View Product Details"
      >
        <ViewProductDetail
          onSubmit={handleAddProduct}
          onCancel={() => setIsAddProductOpen(false)}
          products={products}
          selectedidprops = {selectedId}
        />
      </SwipablePopupSheet>
    </>
  );
}
