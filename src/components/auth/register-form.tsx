"use client";

import { ChangeEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Mail, Lock, Store } from "lucide-react";
import { registerVendor } from "@/lib/actions/auth/registerActions";
import ErrorAlert from "../ui/ErrorAlert";

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string } | null>(null);
  const [success, setSuccess] = useState<{ [key: string]: string } | null>(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateField = (name: string, value: string) => {
    const newErrors: { [key: string]: string } = { ...(errors || {}) };

    if (name === "email" && !value) {
      newErrors.email = "Email is required";
    } else if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      newErrors.email = "Invalid email format";
    } else if (name === "email") {
      delete newErrors.email;
    }

    if (name === "password" && !value) {
      newErrors.password = "Password is required";
    } else if (name === "password") {
      delete newErrors.password;
    }

    if (name === "confirmPassword" && value !== password) {
      newErrors.confirmPassword = "Passwords do not match";
    } else if (name === "confirmPassword") {
      delete newErrors.confirmPassword;
    }

    setErrors(newErrors);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "password") {
      setPassword(value);
      validateField("confirmPassword", confirmPassword);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }

    validateField(name, value);
  };

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setErrors({});
    setSuccess(null);

    const formData = new FormData(event.currentTarget);

    try {
      const result = await registerVendor(formData);

      if (result.success) {
        setSuccess({ message: "Registration successful!" });
      } else {
        setErrors({ email: result.error || "Registration failed" });
      }
    } catch (error) {
      setErrors({ email: error instanceof Error ? error.message : "An unexpected error occurred." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleRegister} className="space-y-4">
      {errors && Object.keys(errors).length > 0 && (
        <ErrorAlert error={Object.values(errors).join(", ")} />
      )}

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium">Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            className={`pl-10 h-11 ${errors?.email ? "border-red-500" : "focus:ring-indigo-500 focus:border-indigo-500"}`}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="storeName" className="text-sm font-medium">Store Name (Optional)</Label>
        <div className="relative">
          <Store className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="storeName"
            name="storeName"
            type="text"
            placeholder="Your store name"
            className="pl-10 h-11 focus:ring-indigo-500 focus:border-indigo-500"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-sm font-medium">Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Create a password"
            className={`pl-10 h-11 ${errors?.password ? "border-red-500" : "focus:ring-indigo-500 focus:border-indigo-500"}`}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword" className="text-sm font-medium">Confirm Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            className={`pl-10 h-11 ${errors?.confirmPassword ? "border-red-500" : "focus:ring-indigo-500 focus:border-indigo-500"}`}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full h-11 bg-indigo-600 hover:bg-indigo-700"
        disabled={isLoading || (errors ? Object.keys(errors).length > 0 : false)}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating account...
          </>
        ) : "Create Account"}
      </Button>
    </form>
  );
}
