import { useState, useEffect, useRef } from "react";
import { Loader2, Check, X, Store } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { checkStoreNameAvailability } from "@/lib/actions/auth/AvailabilityAction";

export function StoreNameField({
  handleInputChange,
  value,
  setError,
}: {
  handleInputChange: any;
  value: string;
  setError: (msg: string | null) => void;
}) {
  const [availability, setAvailability] = useState<'available' | 'unavailable' | 'checking' | null>(null);
  const currentValue = useRef(value); // track latest value

  useEffect(() => {
    currentValue.current = value;

    if (!value) {
      setAvailability(null);
      setError(null);
      return;
    }

    setAvailability('checking');
    const handler = setTimeout(async () => {
      const result = await checkStoreNameAvailability(value);

      // only update if value didn’t change during async call
      if (currentValue.current !== value) return;

      if (result.available) {
        setAvailability('available');
        setError(null);
      } else {
        setAvailability('unavailable');
        setError("Store Name is not available");
      }
    }, 500);

    return () => clearTimeout(handler);
  }, [value]); // removed setError from deps to prevent loop

  return (
    <div className="space-y-2">
      <Label htmlFor="storeName">Store Name (Optional)</Label>
      <div className="relative">
        <Store className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        <Input
          id="storeName"
          name="storeName"
          type="text"
          value={value}
          placeholder="Your store name"
          className={`pl-10 h-11 focus:ring-indigo-500 focus:border-indigo-500 ${
            availability === 'unavailable' ? 'border-red-500' : ''
          }`}
          onChange={handleInputChange}
        />
        <div className="absolute right-3 top-3">
          {availability === 'checking' && <Loader2 className="animate-spin h-4 w-4 text-gray-400" />}
          {availability === 'available' && <Check className="h-4 w-4 text-green-500" />}
          {availability === 'unavailable' && <X className="h-4 w-4 text-red-500" />}
        </div>
      </div>
    </div>
  );
}
