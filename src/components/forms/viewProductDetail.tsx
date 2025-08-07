import React from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Label } from "@radix-ui/react-label";
import { Select } from "@radix-ui/react-select";
import { Input } from "../ui/input";

interface Product {
  id: number;
  name: string;
  price: string;
  stock: number;
  status: string;
  sales: number;
}

interface ViewProductDetail {
  onSubmit?: (data: any) => void;
  onCancel?: () => void;
  products: Product[];
  selectedidprops: number;
}

const ViewProductDetail = ({
  onSubmit,
  selectedidprops,
  onCancel,
  products,
}: ViewProductDetail) => {
  // const productDetails = [
  //   { name: "Summer Dress", sales: 45, revenue: "$2,250" },
  // ];

  const productDetails = products;
  console.log(selectedidprops);

  return (
    <div>
      {productDetails.map((product) => (
        <div key={selectedidprops} className="space-y-1">
          <div className="flex space-y-1 gap-2">
            <div className="flex space-y-1">
              <Label htmlFor="name" className="text-xs font-medium">
                <p>Product Name :</p>
              </Label>
              <Label htmlFor="name" className="text-xs font-medium">
                <p>{product.name}</p>
              </Label>
            </div>
            <div className="space-y-1">
              <Label htmlFor="name" className="text-xs font-medium">
                <p>Price :</p>
              </Label>
              <Label htmlFor="name" className="text-xs font-medium">
                <p>{product.price}</p>
              </Label>
            </div>
            <div className="space-y-1">
              <Label htmlFor="name" className="text-xs font-medium">
                <p>{product.stock}</p>
              </Label>
            </div>
            <div className="space-y-1">
              <Label htmlFor="name" className="text-xs font-medium">
                <p>{product.status}</p>
              </Label>
            </div>
            <div className="space-y-1">
              <Label htmlFor="name" className="text-xs font-medium">
                <p>{product.sales}</p>
              </Label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewProductDetail;
