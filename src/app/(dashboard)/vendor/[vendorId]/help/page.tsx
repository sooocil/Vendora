"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  HelpCircle,
  CheckCircle2,
  AlertCircle,
  Search,
  Store,
  Package,
  Users,
  BarChart3,
  Shield,
  Globe,
  MessageCircle,
  BookOpen,
  Video,
  Mail,
  ExternalLink,
  ArrowRight,
  Zap,
  Star,
} from "lucide-react"
import { motion } from "framer-motion"

export default function VendorHelpPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const quickActions = [
    {
      title: "Complete Verification",
      description: "Get your store verified and live",
      icon: Shield,
      href: "/dashboard/vendor/verification",
      color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      title: "Add Products",
      description: "Start building your inventory",
      icon: Package,
      href: "/dashboard/vendor/products",
      color: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      title: "Customize Store",
      description: "Design your storefront",
      icon: Store,
      href: "/dashboard/vendor/design",
      color: "bg-purple-50 text-purple-700 border-purple-200",
    },
    {
      title: "View Analytics",
      description: "Track your performance",
      icon: BarChart3,
      href: "/dashboard/vendor/analytics",
      color: "bg-orange-50 text-orange-700 border-orange-200",
    },
  ]

  const verificationSteps = [
    {
      step: 1,
      title: "Business Information",
      description: "Complete your business profile with accurate details",
      items: ["Business name and description", "Contact information", "Business address", "Tax identification"],
    },
    {
      step: 2,
      title: "Document Upload",
      description: "Provide required verification documents",
      items: [
        "Business license or registration",
        "Tax ID certificate",
        "Bank account details",
        "Identity verification",
      ],
    },
    {
      step: 3,
      title: "Review Process",
      description: "Our team reviews your submission",
      items: [
        "Document verification (1-2 business days)",
        "Background check",
        "Compliance review",
        "Approval notification",
      ],
    },
  ]

  const faqs = [
    {
      question: "How long does verification take?",
      answer:
        "Verification typically takes 1-2 business days. You'll receive an email notification once your account is approved.",
    },
    {
      question: "What documents do I need for verification?",
      answer:
        "You'll need a business license, tax ID, bank account details, and government-issued ID for identity verification.",
    },
    {
      question: "Can I start selling before verification?",
      answer:
        "No, verification is required before your store goes live. However, you can set up products and customize your store while waiting.",
    },
    {
      question: "What are the fees for using Vendora?",
      answer:
        "Vendora charges a small transaction fee on each sale. Check our pricing page for detailed information about our fee structure.",
    },
    {
      question: "How do I get my custom domain?",
      answer:
        "Custom domains are available with our paid plans. Once verified, you can connect your domain in the store settings.",
    },
    {
      question: "Can I integrate with other platforms?",
      answer:
        "Yes, Vendora supports integrations with popular tools like inventory management systems, accounting software, and marketing platforms.",
    },
  ]

  const benefits = [
    {
      icon: Shield,
      title: "Verified Badge",
      description: "Build customer trust with verified status",
    },
    {
      icon: Globe,
      title: "Custom Store URL",
      description: "Get your branded store link",
    },
    {
      icon: Zap,
      title: "Advanced Features",
      description: "Access premium tools and analytics",
    },
    {
      icon: Star,
      title: "Priority Support",
      description: "Get faster help when you need it",
    },
  ]

  return (
    <Card className="min-h-screen bg-zinc-50/50 rounded-none p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <HelpCircle className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-900">Help Center</h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about setting up and managing your Vendora store
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-md mx-auto"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 border-gray-200 focus:border-indigo-300 focus:ring-indigo-200"
            />
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Card
                key={index}
                className={`cursor-pointer hover:shadow-md transition-all duration-200 border ${action.color}`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <action.icon className="w-5 h-5 mt-0.5" />
                    <div className="space-y-1">
                      <h3 className="font-medium text-sm">{action.title}</h3>
                      <p className="text-xs opacity-80">{action.description}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-60" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Tabs defaultValue="verification" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 lg:w-fit lg:grid-cols-4">
              <TabsTrigger value="verification" className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Verification
              </TabsTrigger>
              <TabsTrigger value="getting-started" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Getting Started
              </TabsTrigger>
              <TabsTrigger value="faq" className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                FAQ
              </TabsTrigger>
              <TabsTrigger value="contact" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Contact
              </TabsTrigger>
            </TabsList>

            {/* Verification Tab */}
            <TabsContent value="verification" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-indigo-600">
                    <AlertCircle className="w-5 h-5" />
                    Vendor Verification Required
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-amber-800">Action Required</h3>
                        <p className="text-amber-700 text-sm mt-1">
                          Complete your verification to activate your store and start selling.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Why Get Verified?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                          <benefit.icon className="w-5 h-5 text-indigo-600 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-gray-900 text-sm">{benefit.title}</h4>
                            <p className="text-gray-600 text-xs mt-1">{benefit.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Store URLs */}
                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-900">Your Store URLs</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 p-3 bg-indigo-50 rounded-lg">
                        <Globe className="w-4 h-4 text-indigo-600" />
                        <span className="text-sm text-gray-700">Free:</span>
                        <code className="bg-white px-2 py-1 rounded text-sm font-mono">vendora.com/yourstore</code>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg">
                        <Star className="w-4 h-4 text-purple-600" />
                        <span className="text-sm text-gray-700">Premium:</span>
                        <code className="bg-white px-2 py-1 rounded text-sm font-mono">yourstore.com</code>
                        <Badge variant="secondary" className="text-xs">
                          Paid Plan
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Verification Steps */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Verification Process</h3>
                    <div className="space-y-4">
                      {verificationSteps.map((step, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-semibold">
                              {step.step}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900">{step.title}</h4>
                            <p className="text-gray-600 text-sm mt-1">{step.description}</p>
                            <ul className="mt-2 space-y-1">
                              {step.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-center gap-2 text-sm text-gray-600">
                                  <CheckCircle2 className="w-3 h-3 text-indigo-600" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                    <Shield className="w-4 h-4 mr-2" />
                    Start Verification Process
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Getting Started Tab */}
            <TabsContent value="getting-started" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Video className="w-5 h-5 text-indigo-600" />
                      Video Tutorials
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <Button variant="ghost" className="w-full justify-start h-auto p-3">
                        <div className="text-left">
                          <div className="font-medium text-sm">Setting Up Your Store</div>
                          <div className="text-xs text-gray-500">5 min tutorial</div>
                        </div>
                        <ExternalLink className="w-4 h-4 ml-auto" />
                      </Button>
                      <Button variant="ghost" className="w-full justify-start h-auto p-3">
                        <div className="text-left">
                          <div className="font-medium text-sm">Adding Your First Product</div>
                          <div className="text-xs text-gray-500">3 min tutorial</div>
                        </div>
                        <ExternalLink className="w-4 h-4 ml-auto" />
                      </Button>
                      <Button variant="ghost" className="w-full justify-start h-auto p-3">
                        <div className="text-left">
                          <div className="font-medium text-sm">Managing Orders</div>
                          <div className="text-xs text-gray-500">4 min tutorial</div>
                        </div>
                        <ExternalLink className="w-4 h-4 ml-auto" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-indigo-600" />
                      Quick Guides
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <Button variant="ghost" className="w-full justify-start h-auto p-3">
                        <div className="text-left">
                          <div className="font-medium text-sm">Store Customization</div>
                          <div className="text-xs text-gray-500">Design your storefront</div>
                        </div>
                        <ArrowRight className="w-4 h-4 ml-auto" />
                      </Button>
                      <Button variant="ghost" className="w-full justify-start h-auto p-3">
                        <div className="text-left">
                          <div className="font-medium text-sm">Payment Setup</div>
                          <div className="text-xs text-gray-500">Configure payment methods</div>
                        </div>
                        <ArrowRight className="w-4 h-4 ml-auto" />
                      </Button>
                      <Button variant="ghost" className="w-full justify-start h-auto p-3">
                        <div className="text-left">
                          <div className="font-medium text-sm">Shipping Configuration</div>
                          <div className="text-xs text-gray-500">Set up shipping options</div>
                        </div>
                        <ArrowRight className="w-4 h-4 ml-auto" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* FAQ Tab */}
            <TabsContent value="faq">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Contact Tab */}
            <TabsContent value="contact">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-indigo-600" />
                      Get Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Live Chat Support
                    </Button>
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Support
                    </Button>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>
                        <strong>Response Time:</strong> Within 24 hours
                      </p>
                      <p>
                        <strong>Support Hours:</strong> Mon-Fri, 9AM-6PM EST
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Community</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                      <Users className="w-4 h-4 mr-2" />
                      Vendor Community Forum
                    </Button>
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Knowledge Base
                    </Button>
                    <div className="text-sm text-gray-600">
                      <p>Connect with other vendors, share tips, and get answers from the community.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </Card>
  )
}
