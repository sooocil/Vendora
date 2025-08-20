"use client";

import { useRef, useState } from "react";
import { Mail, Lock, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { login } from "@/lib/actions/auth/loginActions";
import { sendVerificationEmail } from "@/lib/actions/auth/EmailVerification";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ErrorAlert from "@/components/ui/ErrorAlert";
import SuccessAlert from "../ui/SuccessAlert";

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isEmailUnverified, setIsEmailUnverified] = useState(false);
  const [success, setSuccess] = useState<string>("");

  const emailRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    setIsEmailUnverified(false);

    const formData = new FormData(event.currentTarget);

    try {
      const result = await login(formData);

      if (!result.success) {
        setError(result.error || "Login failed");
        if (result.error?.includes("Email not verified")) {
          setIsEmailUnverified(true);
        }
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleResendVerification() {
    if (!emailRef.current?.value) return;
    setIsLoading(true);
    try {
      const email = emailRef.current.value;

      // await sendVerificationEmail(email);
      setSuccess("Verification email sent!");
      toast.success("Verification email sent!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to send verification email");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <ErrorAlert error={error} />}
      {success && <SuccessAlert successMessage={success} />}

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium">
          Email
        </Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            ref={emailRef}
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            className="pl-10 h-11 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-sm font-medium">
          Password
        </Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            className="pl-10 h-11 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full h-11 bg-indigo-600 hover:bg-indigo-700"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Logging in...
          </>
        ) : (
          "Login"
        )}
      </Button>

      {isEmailUnverified && (
        <Button
          type="button"
          onClick={handleResendVerification}
          variant="outline"
          className="w-full border-dashed border-indigo-600 h-11 hover:bg-indigo-400 hover:text-white"
          disabled={isLoading}
        >
          Resend Verification Email
        </Button>
      )}
    </form>
  );
}
