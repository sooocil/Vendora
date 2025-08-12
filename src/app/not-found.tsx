"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Store, Home, ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import HomeNav from "@/components/home/homeNav"

export default function NotFound() {
  const [dots, setDots] = useState<{ x: number; y: number; left: number; top: number; delay: number }[]>([])

  useEffect(() => {
    const generated = Array.from({ length: 6 }, (_, i) => ({
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
      left: 20 + Math.random() * 60,
      top: 20 + Math.random() * 60,
      delay: i * 0.5
    }))
    setDots(generated)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 flex flex-col">
      <HomeNav />

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          className="text-center max-w-lg mx-auto"
        >
          <div className="mb-12 relative">
            <div className="flex items-center justify-center space-x-12 mb-8">
              {[0, 1].map((_, i) => (
                <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                    <motion.div
                      animate={["center", "lookLeft", "center", "lookRight", "center", "lookUp", "center"]}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                      className="w-10 h-10 bg-gradient-to-br from-indigo-700 to-indigo-900 rounded-full relative shadow-inner"
                    >
                      <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-2 shadow-sm" />
                      <div className="w-2 h-2 bg-indigo-200 rounded-full absolute top-2 left-3" />
                    </motion.div>
                  </div>
                  <motion.div
                    animate={["open", "open", "closed", "open", "open"]}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatDelay: 1.2,
                      ease: "easeInOut",
                      delay: i * 0.15
                    }}
                    className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-indigo-200 to-indigo-300 rounded-full border-4 border-white shadow-lg"
                    style={{ transformOrigin: "center bottom" }}
                  />
                </motion.div>
              ))}
            </div>

            <div className="absolute inset-0 pointer-events-none">
              {dots.map((dot, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-indigo-300 rounded-full opacity-40"
                  animate={{
                    x: [0, dot.x],
                    y: [0, dot.y],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: dot.delay
                  }}
                  style={{
                    left: `${dot.left}%`,
                    top: `${dot.top}%`
                  }}
                />
              ))}
            </div>
          </div>

          <motion.h1
            className="text-8xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent mb-4"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ backgroundSize: "200% 200%" }}
          >
            404
          </motion.h1>

          <h2 className="text-3xl font-bold text-gray-800 mb-3">Oops! Page Not Found</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto mb-10">
            The page you're looking for seems to have vanished into the digital void. Let’s get you back to building something amazing!
          </p>

          <motion.div className="space-y-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-xl text-white px-8 py-3 text-lg">
                <Link href="/">
                  <Home className="w-5 h-5 mr-2" />
                  Go to Home
                </Link>
              </Button>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button variant="ghost" asChild className="hover:bg-indigo-50 text-indigo-600">
                  <Link href="/login">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Sign In
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button variant="outline" asChild className="border-indigo-200 text-indigo-600 hover:bg-indigo-50">
                  <Link href="/register">Create Account</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.footer
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="border-t border-white/20 backdrop-blur-sm bg-white/60 py-8"
      >
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">&copy; 2024 Vendora. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  )
}
