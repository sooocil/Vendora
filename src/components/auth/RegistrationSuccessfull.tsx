import React from "react";
import { X, Check, Home, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

interface RegistrationSuccessfullProps {
  onClose?: () => void;
}

const RegistrationSuccessfull = ({ onClose }: RegistrationSuccessfullProps) => {
  const handleGoHome = () => {
    window.location.href = "/";
  };

  const handleGoToLogin = () => {
    window.open("https://mail.google.com/mail/u/0/", "_blank");
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      // Default behavior if no onClose prop is provided
      window.location.href = "/";
    }
  };

  return (
    <div className="fixed inset-0 h-full bg-black/60 backdrop-blur-md flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Card className="w-full max-w-md shadow-xl border border-indigo-100 relative">
          <Button
            onClick={handleClose}
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-gray-100"
          >
            <X className="w-4 h-4" />
          </Button>
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-4">
              <Check className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Successfully Registered
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-gray-600 text-base">
              Thanks for registering! Check your email for email verification
              and login with the link in your email.
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                onClick={handleGoHome}
                variant="outline"
                className="flex items-center gap-2 border-indigo-300 hover:bg-indigo-50"
              >
                <Home className="w-4 h-4" />
                Home
              </Button>
              <Button
                onClick={handleGoToLogin}
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700"
              >
                <LogIn className="w-4 h-4" />
                Check Your Email
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default RegistrationSuccessfull;
