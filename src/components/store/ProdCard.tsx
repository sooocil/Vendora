// components/store/ProdCard.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
};

type ProdCardProps = {
  product: Product;
};

const ProdCard: React.FC<ProdCardProps> = ({ product }) => {

const router = useRouter();
  

  const handleRouter = (productId: number) => {
    // Implement your routing logic here
    console.log(`Navigating to product with ID: ${productId}`);
    router.push(`/store/[storeId]/products/${productId}`);
  };
  
  
  
  return (
    <div
      onClick={() => handleRouter(product.id)}
      className="hover:cursor-pointer bg-white border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 flex flex-col"
    >
      <div className="relative group overflow-hidden h-80 bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow p-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2">
            {product.description}
          </p>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-teal-600 text-lg font-bold">
            रु {product.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProdCard;
