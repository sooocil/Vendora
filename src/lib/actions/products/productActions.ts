"use server"
import z from "zod";
import { db } from "@/lib/auth/db";


export async function createProduct(formData: FormData): Promise<void> {
  try {
    const product = {
      name: String(formData.get("name") || ""),
      description: String(formData.get("description") || ""),
      price: parseFloat(formData.get("price") as string) || 0,
      stock: parseInt(formData.get("stock") as string, 10) || 0,
      picture: String(formData.get("picture") || ""),
      pageno: parseInt(formData.get("pageno") as string, 10) || 0,
      category: String(formData.get("category") || ""),
      colors: formData.getAll("colors").map(color => String(color)),
      ratings: parseFloat(formData.get("ratings") as string) || 0,
    };

    await db.product.create({
      data: product,
    });

  } catch (error) {
    console.error("Error creating product:", error);
  }
}

