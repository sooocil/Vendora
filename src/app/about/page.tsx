import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Store, Coffee, Heart, Star, Github, ExternalLink } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Vendora
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Empowering entrepreneurs to build beautiful online stores without
            code. Simple, powerful, and designed for everyone.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We believe that everyone should have the power to create and
                sell online, regardless of their technical background. Vendora
                makes e-commerce accessible to all by providing intuitive tools
                that turn ideas into thriving businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center border-0 shadow-sm">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Store className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Simple</h3>
                <p className="text-gray-600 text-sm">
                  No coding required. Build your store with our intuitive
                  drag-and-drop interface.
                </p>
              </Card>

              <Card className="p-6 text-center border-0 shadow-sm">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Powerful</h3>
                <p className="text-gray-600 text-sm">
                  Enterprise-grade features that scale with your business from
                  day one.
                </p>
              </Card>

              <Card className="p-6 text-center border-0 shadow-sm">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Beautiful</h3>
                <p className="text-gray-600 text-sm">
                  Professional designs that make your products shine and convert
                  visitors.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Built with passion
            </h2>

            <Card className="p-8 border-0 shadow-sm">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">👨‍💻</span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Developed by Sushil Regmi
              </h3>

              <p className="text-gray-600 mb-6">
                Passionate developer creating tools that empower entrepreneurs
                to build their dreams without technical barriers.
              </p>

              {/* Support Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  className="flex items-center space-x-2 bg-transparent"
                  asChild
                >
                  <Link
                    href="https://buymeacoffee.com/soocil"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Coffee className="h-4 w-4" />
                    <span>Buy me a coffee</span>
                    
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  className="flex items-center space-x-2 bg-transparent"
                  asChild
                >
                  <Link
                    href="https://github.com/sooocil/vendora"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    <span>Star on GitHub</span>
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </Button>

                <Button
                  className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700"
                  asChild
                >
                  <Link
                    href="https://paypal.me/sushilregmi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Heart className="h-4 w-4" />
                    <span>Donate</span>
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </Card>
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
