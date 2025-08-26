"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  User,
  Store,
  MapPin,
  Phone,
  Mail,
  CreditCard,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Shield,
  Star,
  Clock,
} from "lucide-react";
import { ProfileImageUploader } from "@/components/dashboard/profile/ProfileImageUploader";
import { LocationSelector } from "@/components/dashboard/profile/locationSelector";

interface FormData {
  fullName: string;
  username: string;
  email: string;
  phone: string;
  panNumber: string;
  storeName: string;
  storeDescription: string;
  businessType: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  profileImage: File | null;
}

const businessTypes = [
  "Retail Store",
  "Wholesale Business",
  "Manufacturing",
  "Service Provider",
  "Restaurant/Food",
  "Fashion/Clothing",
  "Electronics",
  "Books/Media",
  "Health/Beauty",
  "Sports/Fitness",
  "Home/Garden",
  "Other",
];

const benefits = [
  { icon: Shield, title: "Verified Badge", desc: "Build customer trust" },
  {
    icon: Store,
    title: "Make your store Public",
    desc: "Design and make your store available for public.",
  },
  {
    icon: Star,
    title: "Premium Features",
    desc: "Access advanced tools",
  },
  { icon: Clock, title: "Priority Support", desc: "Get help faster" },
];

export default function ProfileCompletePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    username: "",
    email: "",
    phone: "",
    panNumber: "",
    storeName: "",
    storeDescription: "",
    businessType: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    profileImage: null,
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 3;
  const progress = (currentStep / totalSteps) * 100;

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<FormData> = {};

    if (step === 1) {
      if (!formData.fullName.trim())
        newErrors.fullName = "Full name is required";
      if (!formData.username.trim())
        newErrors.username = "Username is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    } else if (step === 2) {
      if (!formData.storeName.trim())
        newErrors.storeName = "Store name is required";
      if (!formData.storeDescription.trim())
        newErrors.storeDescription = "Store description is required";
      if (!formData.businessType)
        newErrors.businessType = "Business type is required";
      if (!formData.panNumber.trim())
        newErrors.panNumber = "PAN number is required";
    } else if (step === 3) {
      if (!formData.address.trim()) newErrors.address = "Address is required";
      if (!formData.city.trim()) newErrors.city = "City is required";
      if (!formData.state.trim()) newErrors.state = "State is required";
      if (!formData.postalCode.trim())
        newErrors.postalCode = "Postal code is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);

    console.log("Profile verification submitted:", formData);
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleImageChange = (file: File | null) => {
    setFormData((prev) => ({ ...prev, profileImage: file }));
  };

  return (
    <div className="flex justify-start min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-6">
              <Card className="border-0 shadow-sm bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Unlock Premium</CardTitle>
                  <CardDescription className="text-indigo-100">
                    Complete verification to access
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-2 rounded-lg bg-white/10 backdrop-blur-sm"
                    >
                      <benefit.icon className="h-5 w-5 text-indigo-200" />
                      <div>
                        <p className="font-medium text-sm">{benefit.title}</p>
                        <p className="text-xs text-indigo-200">
                          {benefit.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-indigo-100 rounded-xl">
                  <User className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Complete Your Profile
                  </h1>
                  <p className="text-gray-600">
                    Get verified to unlock all features
                  </p>
                </div>
                <Badge
                  variant="secondary"
                  className="ml-auto bg-indigo-100 text-indigo-700"
                >
                  {Math.round(progress)}% Complete
                </Badge>
              </div>
              <Progress value={progress} className="h-2" />
            </motion.div>

            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    {currentStep === 1 && (
                      <User className="h-5 w-5 text-indigo-600" />
                    )}
                    {currentStep === 2 && (
                      <Store className="h-5 w-5 text-indigo-600" />
                    )}
                    {currentStep === 3 && (
                      <MapPin className="h-5 w-5 text-indigo-600" />
                    )}
                    <div>
                      <CardTitle className="text-lg">
                        {currentStep === 1 && "Personal Information"}
                        {currentStep === 2 && "Business Details"}
                        {currentStep === 3 && "Location & Address"}
                      </CardTitle>
                      <CardDescription>
                        Step {currentStep} of {totalSteps}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {currentStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                        <div className="md:col-span-1">
                          <ProfileImageUploader
                            onImageChange={handleImageChange}
                            currentImage={formData.profileImage}
                          />
                        </div>

                        <div className="md:col-span-2 space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label
                                htmlFor="fullName"
                                className="text-sm font-medium"
                              >
                                Full Name *
                              </Label>
                              <Input
                                id="fullName"
                                value={formData.fullName}
                                onChange={(e) =>
                                  updateFormData("fullName", e.target.value)
                                }
                                placeholder="Enter your full name"
                                className={`h-10 ${
                                  errors.fullName ? "border-red-500" : ""
                                }`}
                              />
                              {errors.fullName && (
                                <p className="text-xs text-red-500 flex items-center gap-1">
                                  <AlertCircle className="h-3 w-3" />
                                  {errors.fullName}
                                </p>
                              )}
                            </div>

                            <div className="space-y-2">
                              <Label
                                htmlFor="username"
                                className="text-sm font-medium"
                              >
                                Username *
                              </Label>
                              <Input
                                id="username"
                                value={formData.username}
                                onChange={(e) =>
                                  updateFormData("username", e.target.value)
                                }
                                placeholder="Choose a username"
                                className={`h-10 ${
                                  errors.username ? "border-red-500" : ""
                                }`}
                              />
                              {errors.username && (
                                <p className="text-xs text-red-500 flex items-center gap-1">
                                  <AlertCircle className="h-3 w-3" />
                                  {errors.username}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label
                                htmlFor="email"
                                className="text-sm font-medium"
                              >
                                Email Address *
                              </Label>
                              <div className="relative">
                                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <Input
                                  id="email"
                                  type="email"
                                  value={formData.email}
                                  onChange={(e) =>
                                    updateFormData("email", e.target.value)
                                  }
                                  placeholder="your@email.com"
                                  className={`pl-10 h-10 ${
                                    errors.email ? "border-red-500" : ""
                                  }`}
                                />
                              </div>
                              {errors.email && (
                                <p className="text-xs text-red-500 flex items-center gap-1">
                                  <AlertCircle className="h-3 w-3" />
                                  {errors.email}
                                </p>
                              )}
                            </div>

                            <div className="space-y-2">
                              <Label
                                htmlFor="phone"
                                className="text-sm font-medium"
                              >
                                Phone Number *
                              </Label>
                              <div className="relative">
                                <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <Input
                                  id="phone"
                                  value={formData.phone}
                                  onChange={(e) =>
                                    updateFormData("phone", e.target.value)
                                  }
                                  placeholder="+1 (555) 000-0000"
                                  className={`pl-10 h-10 ${
                                    errors.phone ? "border-red-500" : ""
                                  }`}
                                />
                              </div>
                              {errors.phone && (
                                <p className="text-xs text-red-500 flex items-center gap-1">
                                  <AlertCircle className="h-3 w-3" />
                                  {errors.phone}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-4"
                    >
                      <div className="space-y-2">
                        <Label
                          htmlFor="storeName"
                          className="text-sm font-medium"
                        >
                          Store Name *
                        </Label>
                        <Input
                          id="storeName"
                          value={formData.storeName}
                          onChange={(e) =>
                            updateFormData("storeName", e.target.value)
                          }
                          placeholder="Enter your store name"
                          className={`h-10 ${
                            errors.storeName ? "border-red-500" : ""
                          }`}
                        />
                        {errors.storeName && (
                          <p className="text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" />
                            {errors.storeName}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="storeDescription"
                          className="text-sm font-medium"
                        >
                          Store Description *
                        </Label>
                        <Textarea
                          id="storeDescription"
                          value={formData.storeDescription}
                          onChange={(e) =>
                            updateFormData("storeDescription", e.target.value)
                          }
                          placeholder="Describe what your store sells..."
                          rows={3}
                          className={
                            errors.storeDescription ? "border-red-500" : ""
                          }
                        />
                        {errors.storeDescription && (
                          <p className="text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" />
                            {errors.storeDescription}
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label
                            htmlFor="businessType"
                            className="text-sm font-medium"
                          >
                            Business Type *
                          </Label>
                          <Select
                            value={formData.businessType}
                            onValueChange={(value) =>
                              updateFormData("businessType", value)
                            }
                          >
                            <SelectTrigger
                              className={`h-10 ${
                                errors.businessType ? "border-red-500" : ""
                              }`}
                            >
                              <SelectValue placeholder="Select business type" />
                            </SelectTrigger>
                            <SelectContent>
                              {businessTypes.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {errors.businessType && (
                            <p className="text-xs text-red-500 flex items-center gap-1">
                              <AlertCircle className="h-3 w-3" />
                              {errors.businessType}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="panNumber"
                            className="text-sm font-medium"
                          >
                            PAN Number *
                          </Label>
                          <div className="relative">
                            <CreditCard className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="panNumber"
                              value={formData.panNumber}
                              onChange={(e) =>
                                updateFormData(
                                  "panNumber",
                                  e.target.value.toUpperCase()
                                )
                              }
                              placeholder="ABCDE1234F"
                              maxLength={10}
                              className={`pl-10 h-10 ${
                                errors.panNumber ? "border-red-500" : ""
                              }`}
                            />
                          </div>
                          {errors.panNumber && (
                            <p className="text-xs text-red-500 flex items-center gap-1">
                              <AlertCircle className="h-3 w-3" />
                              {errors.panNumber}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-4"
                    >
                      <div className="space-y-2">
                        <Label
                          htmlFor="address"
                          className="text-sm font-medium"
                        >
                          Street Address *
                        </Label>
                        <Input
                          id="address"
                          value={formData.address}
                          onChange={(e) =>
                            updateFormData("address", e.target.value)
                          }
                          placeholder="Enter your street address"
                          className={`h-10 ${
                            errors.address ? "border-red-500" : ""
                          }`}
                        />
                        {errors.address && (
                          <p className="text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" />
                            {errors.address}
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city" className="text-sm font-medium">
                            City *
                          </Label>
                          <Input
                            id="city"
                            value={formData.city}
                            onChange={(e) =>
                              updateFormData("city", e.target.value)
                            }
                            placeholder="City"
                            className={`h-10 ${
                              errors.city ? "border-red-500" : ""
                            }`}
                          />
                          {errors.city && (
                            <p className="text-xs text-red-500 flex items-center gap-1">
                              <AlertCircle className="h-3 w-3" />
                              {errors.city}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="state"
                            className="text-sm font-medium"
                          >
                            State *
                          </Label>
                          <LocationSelector
                            value={formData.state}
                            onChange={(value: any) =>
                              updateFormData("state", value)
                            }
                          />
                          {errors.state && (
                            <p className="text-xs text-red-500 flex items-center gap-1">
                              <AlertCircle className="h-3 w-3" />
                              {errors.state}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="postalCode"
                            className="text-sm font-medium"
                          >
                            Postal Code *
                          </Label>
                          <Input
                            id="postalCode"
                            value={formData.postalCode}
                            onChange={(e) =>
                              updateFormData("postalCode", e.target.value)
                            }
                            placeholder="12345"
                            className={`h-10 ${
                              errors.postalCode ? "border-red-500" : ""
                            }`}
                          />
                          {errors.postalCode && (
                            <p className="text-xs text-red-500 flex items-center gap-1">
                              <AlertCircle className="h-3 w-3" />
                              {errors.postalCode}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-4">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-indigo-600" />
                          <div>
                            <h4 className="font-medium text-indigo-900 text-sm">
                              Quick Verification
                            </h4>
                            <p className="text-xs text-indigo-700">
                              Review within 24-48 hours • Email confirmation
                              sent
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between mt-6 p-4 bg-white rounded-lg border shadow-sm"
            >
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="bg-transparent"
              >
                Previous
              </Button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalSteps }, (_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i + 1 <= currentStep
                        ? "bg-indigo-600 scale-125"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              {currentStep < totalSteps ? (
                <Button
                  onClick={handleNext}
                  className="bg-indigo-600 hover:bg-indigo-700"
                >
                  Next
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                >
                  {isSubmitting ? "Submitting..." : "Complete Verification"}
                  <CheckCircle className="h-4 w-4 ml-2" />
                </Button>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
