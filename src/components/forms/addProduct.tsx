'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Upload, X, ImageIcon, DollarSign } from 'lucide-react'
import { motion } from 'framer-motion'

interface AddProductFormProps {
  onSubmit?: (data: any) => void
  onCancel?: () => void
}

export function AddProductForm({ onSubmit, onCancel }: AddProductFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    stock: '',
    description: '',
    category: '',
    status: 'active'
  })
  const [images, setImages] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    onSubmit?.(formData)
    setIsSubmitting(false)
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    const newImages = files.map(file => URL.createObjectURL(file))
    setImages(prev => [...prev, ...newImages].slice(0, 3)) // Max 3 images
  }

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="space-y-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Compact Image Upload */}
      <div className="space-y-2">
        <Label className="text-xs font-medium text-muted-foreground">Images (Max 3)</Label>
        <div className="flex space-x-2">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <img 
                src={image || "/placeholder.svg"} 
                alt={`Product ${index + 1}`}
                className="w-16 h-16 object-cover rounded-md border"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white rounded-full flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-2 h-2" />
              </button>
            </div>
          ))}
          
          {images.length < 3 && (
            <label className="w-16 h-16 border-2 border-dashed border-muted-foreground/30 rounded-md flex flex-col items-center justify-center cursor-pointer hover:border-muted-foreground/50 transition-colors">
              <ImageIcon className="w-4 h-4 text-muted-foreground mb-1" />
              <span className="text-xs text-muted-foreground">Add</span>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          )}
        </div>
      </div>

      {/* Product Name */}
      <div className="space-y-1">
        <Label htmlFor="name" className="text-xs font-medium">Product Name *</Label>
        <Input 
          id="name" 
          placeholder="Enter product name"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="h-8 text-sm"
          required
        />
      </div>

      {/* Price and Stock - Inline */}
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <Label htmlFor="price" className="text-xs font-medium">Price *</Label>
          <div className="relative">
            <DollarSign className="absolute left-2 top-2 h-3 w-3 text-muted-foreground" />
            <Input 
              id="price" 
              placeholder="0.00" 
              type="number" 
              step="0.01"
              value={formData.price}
              onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
              className="h-8 text-sm pl-7"
              required
            />
          </div>
        </div>

        <div className="space-y-1">
          <Label htmlFor="stock" className="text-xs font-medium">Stock *</Label>
          <Input 
            id="stock" 
            placeholder="0" 
            type="number"
            value={formData.stock}
            onChange={(e) => setFormData(prev => ({ ...prev, stock: e.target.value }))}
            className="h-8 text-sm"
            required
          />
        </div>
      </div>

      {/* Category and Status - Inline */}
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <Label className="text-xs font-medium">Category</Label>
          <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
            <SelectTrigger className="h-8 text-sm">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="clothing">Clothing</SelectItem>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="home">Home & Garden</SelectItem>
              <SelectItem value="books">Books</SelectItem>
              <SelectItem value="sports">Sports</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          <Label className="text-xs font-medium">Status</Label>
          <Select value={formData.status} onValueChange={(value) => setFormData(prev => ({ ...prev, status: value }))}>
            <SelectTrigger className="h-8 text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Active</span>
                </div>
              </SelectItem>
              <SelectItem value="draft">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Draft</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Compact Description */}
      <div className="space-y-1">
        <Label htmlFor="description" className="text-xs font-medium">Description</Label>
        <Textarea 
          id="description" 
          placeholder="Brief product description..."
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          rows={2}
          className="text-sm resize-none"
        />
      </div>

      {/* Compact Action Buttons */}
      <div className="flex space-x-2 pt-2">
        <Button 
          type="submit" 
          className="flex-1 h-9 bg-indigo-600 hover:bg-indigo-700 text-sm"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Saving...' : 'Save Product'}
        </Button>
        {onCancel && (
          <Button 
            type="button" 
            variant="outline" 
            onClick={onCancel}
            className="h-9 px-4 text-sm"
          >
            Cancel
          </Button>
        )}
      </div>

      {/* Quick Tips */}
      <div className="bg-muted/30 rounded-md p-3 mt-4">
        <p className="text-xs text-muted-foreground">
          💡 <strong>Quick tip:</strong> Add high-quality images and detailed descriptions to increase sales.
        </p>
      </div>
    </motion.form>
  )
}
