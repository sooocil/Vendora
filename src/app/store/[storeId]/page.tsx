"use client";

import React, { useState } from "react";
import NavBar from "@/components/store/NavBar";
import { Button } from "@/components/ui/button";
import VendoraFooter from "@/components/Vendora/VendoraFooter";

const page = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Classic T-Shirt",
      description: "Comfortable cotton t-shirt for everyday wear",
      image: "https://shorturl.at/73D0A",
      price: 1900,
      isFeatured: true,
    },
    {
      id: 2,
      name: "Denim Jeans",
      description: "Stylish slim-fit jeans with perfect stretch",
      image: "https://i.pinimg.com/736x/6a/39/2b/6a392b326f869c0505174e66a7b2206f.jpg",
      price: 2500,
      isFeatured: true,
    },
    {
      id: 3,
      name: "Essentials Cotton Sweatshirt",
      description: "Essentials Sweatshirt perfect for cool weather",
      image: "https://i.pinimg.com/736x/db/37/e2/db37e277c3e9b04a677e5e936fe6c497.jpg",
      price: 1850,
      isFeatured: true,
    },
    {
      id: 4,
      name: "Blues Tank Top",
      description: "Light floral dress for warm summer days",
      image: "https://shorturl.at/eQmIl",
      price: 1500,
      isFeatured: false,
    },
    {
      id: 5,
      name: "Beak Formal Blazer",
      description: "Professional blazer for business occasions",
      image: "https://i.pinimg.com/736x/3c/9b/a7/3c9ba7673905758172df2b9aefac87f3.jpg",
      price: 3500,
      isFeatured: false,
    },
    {
      id: 6,
      name: "Alo Athletic Shorts",
      description: "Breathable shorts for sports and workouts",
      image: "https://shorturl.at/MFJ12",
      price: 1200,
      isFeatured: false,
    },
    {
      id: 7,
      name: "Carhartt Winter Jacket",
      description: "Insulated jacket to keep you warm in cold weather",
      image: "https://i.pinimg.com/736x/3a/c1/4d/3ac14d17776c2e950213a3b89cbcf3bc.jpg",
      price: 4500,
      isFeatured: false,
    },
    {
      id: 8,
      name: "Adidas Samba",
      description: "Comfortable sneakers for everyday activities",
      image: "https://i.pinimg.com/736x/f1/73/b6/f173b6c7ecbda4c25c2b3182fcb4349c.jpg",
      price: 5500,
      isFeatured: false,
    },
  ]);

  const featuredProducts = products.filter((prod) => prod.isFeatured);
  const allProducts = products;

  return (
    <div>
      <NavBar />
      <main className="flex-1">
        <section className="relative bg-gradient-to-br from-white via-teal-50 to-white py-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Made In <span className="text-teal-600">Nepal</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Discover handcrafted excellence from the heart of Nepal — shop
              authentic, high-quality products made by local artisans.
            </p>
            <a href="#products">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 text-lg rounded-xl shadow-md hover:shadow-xl transition duration-300 flex items-center gap-2 mx-auto">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h18M9 3v18m0 0l7-7m-7 7l-7-7"
                  />
                </svg>
                Shop Now
              </Button>
            </a>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-10 text-gray-800">
              Featured Products
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 flex flex-col"
                >
                  <div className="relative group overflow-hidden h-80 bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform ease duration-300 group-hover:scale-105"
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
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50" id="products">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-10 text-gray-800">
              All Products
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {allProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 flex flex-col"
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
