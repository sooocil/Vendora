"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Mail, Lock, Store } from "lucide-react";
import { registerVendor } from "@/lib/actions/auth/registerActions";
import ErrorAlert from "../ui/ErrorAlert";
import z from "zod";
import { StoreNameField } from "./StoreNameField";
import RegistrationSuccessfull from "./RegistrationSuccessfull";

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [success, setSuccess] = useState<{ [key: string]: string } | null>(
    null
  );
  const [storeName, setStoreName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordSchema = z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character"
    );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Update state
    if (name === "password") setPassword(value);
    if (name === "confirmPassword") setConfirmPassword(value);

    // Inline validation for this field
    setErrors((prev) => {
      const newErrors = { ...prev };

      if (name === "email") {
        if (!value) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(value))
          newErrors.email = "Invalid email format";
        else delete newErrors.email;
      }

      if (name === "password") {
        try {
          passwordSchema.parse(value);
          delete newErrors.password;
        } catch (err) {
          if (err instanceof z.ZodError) {
            newErrors.password = err.issues[0].message;
          }
        }

        // Also validate confirmPassword
        if (confirmPassword && confirmPassword !== value) {
          newErrors.confirmPassword = "Passwords do not match";
        } else {
          delete newErrors.confirmPassword;
        }
      }

      if (name === "confirmPassword") {
        if (value !== password)
          newErrors.confirmPassword = "Passwords do not match";
        else delete newErrors.confirmPassword;
      }

      return newErrors;
    });
  };

  const validateAllFields = (formData: FormData) => {
    const newErrors: { [key: string]: string } = {};

    const email = formData.get("email")?.toString() || "";
    const pwd = formData.get("password")?.toString() || "";
    const confirmPwd = formData.get("confirmPassword")?.toString() || "";

    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Invalid email format";

    if (!pwd) newErrors.password = "Password is required";
    if (confirmPwd !== pwd)
      newErrors.confirmPassword = "Passwords do not match";

    return newErrors;
  };

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setSuccess(null);

    const formData = new FormData(event.currentTarget);
    const fieldErrors = validateAllFields(formData);

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);

      // Focus first invalid field
      const firstField = Object.keys(fieldErrors)[0];
      const element = document.getElementsByName(
        firstField
      )[0] as HTMLInputElement;
      if (element) element.focus();

      setIsLoading(false);
      return;
    }

    try {
      const result = await registerVendor(formData);

      if (result.success) {
        setErrors({});
        setSuccess({ message: "Registration successful!" });
      } else {
        setErrors({ email: result.error || "Registration failed" });
      }
    } catch (error) {
      setErrors({
        email:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleRegister} className="space-y-4">
      {Object.keys(errors).length > 0 && (
        <ErrorAlert error={Object.values(errors).join(", ")} />
      )}
      {success && <RegistrationSuccessfull />}

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            className={`pl-10 h-11 ${
              errors.email
                ? "border-red-500"
                : "focus:ring-indigo-500 focus:border-indigo-500"
            }`}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <StoreNameField
        value={storeName}
        handleInputChange={(e: ChangeEvent<HTMLInputElement>) => {
          setStoreName(e.target.value);
          handleInputChange(e);
        }}
        setError={(msg) => {
          setErrors((prev) => {
            const newErrors = { ...prev };
            if (msg) newErrors.storeName = msg;
            else delete newErrors.storeName;
            return newErrors;
          });
        }}
      />

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Create a password"
            className={`pl-10 h-11 ${
              errors.password
                ? "border-red-500"
                : "focus:ring-indigo-500 focus:border-indigo-500"
            }`}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            className={`pl-10 h-11 ${
              errors.confirmPassword
                ? "border-red-500"
                : "focus:ring-indigo-500 focus:border-indigo-500"
            }`}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full h-11 bg-indigo-600 hover:bg-indigo-700 shadow-lg"
        disabled={
          isLoading || (errors ? Object.keys(errors).length > 0 : false)
        }
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating account...
          </>
        ) : (
          "Create Account"
        )}
      </Button>
    </form>
  );
}
