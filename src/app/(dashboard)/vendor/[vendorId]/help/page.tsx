"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const VerificationHelp = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-lg shadow-lg border border-indigo-100">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-indigo-600 flex items-center gap-2">
              <AlertCircle className="w-6 h-6" />
              Vendor Verification Help
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Verification Required
              </h3>
              <p className="text-gray-600 mt-2">
                Complete your profile to become a verified vendor.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900ස_0_0">Why Verify?</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5" />
                  Build trust with secure and verified vendor status.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5" />
                  Get your store listed and visible to customers.
                </li>
                <li className="flex  items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5" />
                  Get your store Link{" "}
                  <strong className="p-1 bg-indigo-100 ">
                    https://vendora.com/yourstore
                  </strong>
                </li>
                <li className="flex align-middle items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5" />
                  For Paid{" "}
                  <strong className="p-1 bg-indigo-100 ">
                    https://yourstore.com
                  </strong>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5" />
                  Make your store public and accessible to customers.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5" />
                  Design and customize your storefront.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5" />
                  Build trust with secure and verified vendor status.
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Steps to Verify:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5" />
                  Update business info: name, address, contact.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5" />
                  Upload ID documents (e.g., business license, tax ID).
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5" />
                  Submit for review (1-2 business days).
                </li>
              </ul>
            </div>
            <Button
              className="w-full bg-indigo-600 hover:bg-indigo-700"
              onClick={() => (window.location.href = "/profile/edit")}
            >
              Complete Profile
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default VerificationHelp;
