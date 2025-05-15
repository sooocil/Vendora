"use client";

import React, { useState } from "react";
import NavBar from "@/components/store/NavBar";
import { Button } from "@/components/ui/button";
import VendoraFooter from "@/components/Vendora/VendoraFooter";
import ProdCard from "@/components/store/ProdCard";
import { IoIosArrowDown } from "react-icons/io";
import { products } from "@/lib/data/products.js";

const page = () => {

  
  const featuredProducts = products.filter((prod) => prod.isFeatured);
  const allProducts = products;

  return (
    <div >
      <NavBar />
      <main className="flex-1">
        <div className="container mx-auto px-6 text-center mt-20 mb-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Made In <span className="text-teal-600">Nepal</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Discover handcrafted excellence from the heart of Nepal — shop
            authentic, high-quality products made by local artisans.
          </p>
          <a href="#products" className="inline-block transitoin duration-300">
            <Button className=" hover:cursor-pointer bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 text-lg rounded-xl shadow-md hover:shadow-xl transition duration-300 flex items-center gap-2 mx-auto">
              <IoIosArrowDown />
              Shop Now
            </Button>
          </a>
        </div>
      
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-10 text-gray-800">
              Featured Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredProducts.map((product) => (
                <ProdCard  key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* All Products */}
        <section className="py-12 bg-gray-50" id="products">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-10 text-gray-800">
              All Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {allProducts.map((product) => (
                <ProdCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <VendoraFooter />
    </div>
  );
};

export default page;
