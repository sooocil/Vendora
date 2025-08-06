"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Store } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomeNav() {
  return (
    <div>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed h-16 mb-20 inset-0 border-b border-white/20 backdrop-blur-sm "
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 group">
              <span className="text-2xl font-bold text-black z-20 bg-clip-text ">
                Vendora.
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild className="hover:bg-indigo-50">
                <Link href="/login">Sign In</Link>
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg"
              >
                <Link href="/register">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>
    </div>
  );
}
