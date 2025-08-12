import { BasePlan, PlusPlan, ProPlan } from "@/components/home/Plans";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionItem } from "@radix-ui/react-accordion";
import { Check, Store } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Choose the perfect plan for your business. All plans include
            lifetime access and free updates.
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-indigo-600" />
              <span>One-time payment</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-indigo-600" />
              <span>Lifetime access</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-indigo-600" />
              <span>Free updates</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-indigo-600" />
              <span>No monthly fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
            <BasePlan />
            <PlusPlan />
            <ProPlan />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 mb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion
              type="single"
              collapsible

              defaultValue="item-0"
              className="space-y-4 hover:cursor-pointer"
            >
              {[
                {
                  question: "Is there a free trial?",
                  answer:
                    "Yes, we offer a 14-day free trial with full access to all features. No credit card required.",
                },
                {
                  question: "What's included in the lifetime access?",
                  answer:
                    "You get access to all current and future features, updates, and improvements to Vendora with no additional cost.",
                },
                {
                  question: "Can I upgrade my plan later?",
                  answer:
                    "Yes, you can upgrade at any time and only pay the difference between your current plan and the new one.",
                },
                {
                  question: "Do you offer refunds?",
                  answer:
                    "We offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your purchase.",
                },
              ].map((faq, index) => (
                <AccordionItem className="bg-indigo-100 p-2 px-6 rounded-2xl" key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-indigo-600 hover:cursor-pointer ">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Store className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">Vendora</span>
              </div>
              <p className="text-gray-400">
                Build your online store without code
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/features" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/templates" className="hover:text-white">
                    Templates
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/status" className="hover:text-white">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Vendora. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
