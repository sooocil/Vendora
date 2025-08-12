"use server"
import z from "zod";
import { db } from "@/lib/auth/db";


export async function createProduct(formData: FormData): Promise<void> {
  try {
    const product = {
      name: formData.get("name"),
      description: formData.get("description"),
      price: parseFloat(formData.get("price") as string),
      stock: parseInt(formData.get("stock") as string, 10),
      picture: formData.get("picture"),
      pageno: parseInt(formData.get("pageno") as string, 10),
      category: formData.get("category"),
      colors: formData.getAll("colors"),
      ratings: parseFloat(formData.get("ratings") as string),
    };

    // prisma
    await db.product.create({
      data: product,
    });

  } catch (error) {
    console.error("Error creating product:", error);
  }
}

