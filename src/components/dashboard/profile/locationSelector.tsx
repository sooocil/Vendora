"use client"

import { MapPin } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface LocationSelectorProps {
  value: string
  onChange: (value: string) => void
}

const locations = [
  "Kathmandu",
  "Pokhara",
  "Lalitpur",
  "Bhaktapur",
  "Biratnagar",
  "Birgunj",
  "Dharan",
  "Bharatpur",
  "Janakpur",
  "Hetauda",
  "Butwal",
  "Dhangadhi",
  "Mahendranagar",
  "Nepalgunj",
  "Gorkha",
  "Chitwan",
  "Ilam",
  "Palpa",
  "Baglung",
  "Mustang",
]

export function LocationSelector({ value, onChange }: LocationSelectorProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="focus:border-indigo-500 focus:ring-indigo-500">
        <div className="flex items-center space-x-2">
          <MapPin className="h-4 w-4 text-gray-400" />
          <SelectValue placeholder="Select your location" />
        </div>
      </SelectTrigger>
      <SelectContent>
        {locations.map((location) => (
          <SelectItem key={location} value={location}>
            {location}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
