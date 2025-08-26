"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Camera, Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProfileImageUploaderProps {
  onImageChange: (file: File | null) => void
  currentImage: File | null
}

export function ProfileImageUploader({ onImageChange, currentImage }: ProfileImageUploaderProps) {
  const [preview, setPreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        // 5MB limit
        alert("File size must be less than 5MB")
        return
      }

      if (!file.type.startsWith("image/")) {
        alert("Please select an image file")
        return
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        setPreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
      onImageChange(file)
    }
  }

  const handleRemoveImage = () => {
    setPreview(null)
    onImageChange(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
        <div
          onClick={handleClick}
          className="w-32 h-32 rounded-full border-2 border-dashed border-gray-300 hover:border-indigo-500 flex items-center justify-center cursor-pointer transition-all duration-200 overflow-hidden bg-gray-50 hover:bg-gray-100"
        >
          {preview ? (
            <img src={preview || "/placeholder.svg"} alt="Profile preview" className="w-full h-full object-cover" />
          ) : (
            <div className="flex flex-col items-center space-y-2 text-gray-400">
              <Camera className="h-8 w-8" />
              <span className="text-xs font-medium">Add Photo</span>
            </div>
          )}
        </div>

        {preview && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => {
              e.stopPropagation()
              handleRemoveImage()
            }}
            className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors duration-200"
          >
            <X className="h-4 w-4" />
          </motion.button>
        )}
      </motion.div>

      <div className="text-center">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={handleClick}
          className="text-indigo-600 border-indigo-200 hover:bg-indigo-50 bg-transparent"
        >
          <Upload className="h-4 w-4 mr-2" />
          {preview ? "Change Photo" : "Upload Photo"}
        </Button>
        <p className="text-xs text-gray-500 mt-2">JPG, PNG or GIF. Max size 5MB.</p>
      </div>

      <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileSelect} className="hidden" />
    </div>
  )
}
