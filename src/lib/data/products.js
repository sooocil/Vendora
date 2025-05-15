import { type } from "os";
export const products = [
  {
    id: 1,
    name: "Classic T-Shirt",
    description: "Comfortable cotton t-shirt for everyday wear",
    longDescription:
      "Our Classic T-Shirt is made from 100% breathable cotton, ensuring comfort throughout the day. Designed for casual wear, it fits well on every body type.",
    image: "https://shorturl.at/73D0A",
    images: {
      domains: ["https://shorturl.at/73D0A"],
    },
    price: 1900,
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Gray"],
    category: "tops",
    rating: 4.3,
    reviews: 27,
    inStock: true,
    isFeatured: true,
    specifications: {
      Material: "100% Cotton",
      Fit: "Regular",
      Sleeve: "Short",
      Care: "Machine Wash",
    },
  },
  {
    id: 2,
    name: "Denim Jeans",
    description: "Stylish slim-fit jeans with perfect stretch",
    longDescription:
      "Denim Jeans with a classic slim fit and stretchable material, offering both comfort and durability for everyday use.",
    image:
      "https://i.pinimg.com/736x/6a/39/2b/6a392b326f869c0505174e66a7b2206f.jpg",
    images: {
      domains: [
        "https://i.pinimg.com/736x/6a/39/2b/6a392b326f869c0505174e66a7b2206f.jpg",
      ],
    },
    price: 2500,
    sizes: ["30", "32", "34", "36"],
    colors: ["Blue", "Black"],
    category: "bottoms",
    rating: 4.5,
    reviews: 34,
    inStock: true,
    isFeatured: false,
    specifications: {
      Material: "Denim",
      Fit: "Slim",
      Stretch: "Yes",
      Closure: "Zipper",
    },
  },
  {
    id: 3,
    name: "Essentials Cotton Sweatshirt",
    description: "Essentials Sweatshirt perfect for cool weather",
    longDescription:
      "Made from premium cotton, this sweatshirt provides warmth and comfort for chilly days without sacrificing style.",
    image:
      "https://i.pinimg.com/736x/db/37/e2/db37e277c3e9b04a677e5e936fe6c497.jpg",
    images: {
      domains: [
        "https://i.pinimg.com/736x/db/37/e2/db37e277c3e9b04a677e5e936fe6c497.jpg",
      ],
    },
    price: 1850,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gray", "Navy"],
    category: "tops",
    rating: 4.7,
    reviews: 19,
    inStock: true,
    isFeatured: false,

    specifications: {
      Material: "Cotton Blend",
      Type: "Pullover",
      Sleeve: "Long",
      Lining: "Fleece",
    },
  },
  {
    id: 4,
    name: "Blues Tank Top",
    description: "Light floral dress for warm summer days",
    longDescription:
      "This floral tank top is ideal for summer. Lightweight and breathable, perfect for layering or wearing alone.",
    image: "https://shorturl.at/eQmIl",
    images: { domains: ["https://shorturl.at/eQmIl"] },
    price: 1500,
    sizes: ["S", "M", "L"],
    colors: ["Blue", "White"],
    category: "tops",
    rating: 4.1,
    reviews: 10,
    inStock: true,
    isFeatured: true,

    specifications: {
      Material: "Cotton",
      Pattern: "Floral",
      Fit: "Relaxed",
      Neck: "Round",
    },
  },
  {
    id: 5,
    name: "Beak Formal Blazer",
    description: "Professional blazer for business occasions",
    longDescription:
      "Tailored for perfection, the Beak Formal Blazer adds class to your business outfit. Pairs well with both formal trousers and jeans.",
    image:
      "https://i.pinimg.com/736x/3c/9b/a7/3c9ba7673905758172df2b9aefac87f3.jpg",
    images: {
      domains: [
        "https://i.pinimg.com/736x/3c/9b/a7/3c9ba7673905758172df2b9aefac87f3.jpg",
      ],
    },
    price: 3500,
    sizes: ["M", "L", "XL"],
    colors: ["Black", "Navy"],
    category: "tops",
    rating: 4.6,
    reviews: 21,
    inStock: true,
    isFeatured: true,

    specifications: {
      Material: "Polyester Blend",
      Lining: "Satin",
      Closure: "Button",
      Fit: "Tailored",
    },
  },
  {
    id: 6,
    name: "Alo Athletic Shorts",
    description: "Breathable shorts for sports and workouts",
    longDescription:
      "Made for movement, these Alo shorts feature moisture-wicking fabric and a lightweight design for performance training.",
    image: "https://shorturl.at/MFJ12",
    images: { domains: ["https://shorturl.at/MFJ12"] },
    price: 1200,
    sizes: ["M", "L", "XL"],
    colors: ["Black", "Olive"],
    category: "bottoms",
    rating: 4.0,
    reviews: 15,
    inStock: true,
    isFeatured: false,

    specifications: {
      Material: "Polyester",
      Length: "Above Knee",
      Waistband: "Elastic",
      Features: "Quick Dry",
    },
  },
  {
    id: 7,
    name: "Carhartt Winter Jacket",
    description: "Insulated jacket to keep you warm in cold weather",
    longDescription:
      "Stay warm in harsh weather with the Carhartt Winter Jacket. Its thick insulation and rugged design ensure protection and comfort.",
    image:
      "https://i.pinimg.com/736x/3a/c1/4d/3ac14d17776c2e950213a3b89cbcf3bc.jpg",
    images: {
      domains: [
        "https://i.pinimg.com/736x/3a/c1/4d/3ac14d17776c2e950213a3b89cbcf3bc.jpg",
      ],
    },
    price: 4500,
    sizes: ["L", "XL"],
    colors: ["Brown", "Black"],
    category: "tops",
    rating: 4.8,
    reviews: 42,
    inStock: true,
    isFeatured: false,
    specifications: {
      Material: "Canvas",
      Insulation: "Polyester Fill",
      Closure: "Zipper + Button",
      Hood: "Yes",
    },
  },
  {
    id: 8,
    name: "Adidas Samba",
    description: "Comfortable sneakers for everyday activities",
    longDescription:
      "Classic Adidas sneakers that blend streetwear style with athletic comfort. Versatile for any casual outfit.",
    image:
      "https://i.pinimg.com/736x/f1/73/b6/f173b6c7ecbda4c25c2b3182fcb4349c.jpg",
    images: {
      domains: [
        "https://i.pinimg.com/736x/f1/73/b6/f173b6c7ecbda4c25c2b3182fcb4349c.jpg",
      ],
    },
    price: 5500,
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["White", "Black"],
    category: "footwear",
    rating: 4.9,
    reviews: 51,
    inStock: true,
    isFeatured: true,
    specifications: {
      Material: "Leather",
      Sole: "Rubber",
      Closure: "Laces",
      Type: "Sneakers",
    },
  },
];
