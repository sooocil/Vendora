"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Ghost, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import HomeNavProfileDropdown from "./ProfileDropdown";

export default function HomeNav() {
  return (
    <div>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 right-0 left-0 h-16 mb-20 inset-0 border-b border-white/20 backdrop-blur-sm "
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            {/* logo */}
            <div className="flex items-center space-x-2 flex-1">
              <Link href="/" className="flex items-center space-x-2 group">
                <span className="text-2xl font-bold">Vendora.</span>
              </Link>
            </div>

            {/* Middle contents */}
            <div className="flex items-center space-x-4">
              <Button variant="link" asChild>
                <Link href="/pricing">Pricing</Link>
              </Button>
              <Button variant="link" asChild>
                <Link href="/about">About us</Link>
              </Button>
            </div>

            {/* Right buttons */}
            <div className="flex items-center space-x-4 flex-1 justify-end">
              <HomeNavProfileDropdown />
            </div>
          </div>
        </div>
      </motion.nav>
    </div>
  );
}
