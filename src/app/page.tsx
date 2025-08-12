import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
import {
  Store,
  ShoppingBag,
  Zap,
  Shield,
  BarChart3,
  CreditCard,
  Smartphone,
  ArrowRight,
  Layout,
  Package,
  Users,
  Type,
  ImageIcon,
  Star,
  ShoppingCart,
  Grip,
  Settings,
  Eye,
} from "lucide-react";
import HomeNav from "@/components/home/homeNav";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-100">
      <HomeNav />

      <section className="py-16  bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto  leading-tight">
            <div className="w-16 h-16 mx-auto bg-indigo-600 rounded-lg flex items-center justify-center">
              <Store className="h-10 w-10 text-white" />
            </div>
            Build your online store without code
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create, customize, and launch your e-commerce store in minutes. No
            technical skills required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Button
              asChild
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 px-8"
            >
              <Link href="/register">Start Free Trial</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 bg-transparent"
            >
              <Link href="#">Watch Demo</Link>
            </Button>
          </div>
          <p className="text-sm text-gray-500">
            14-day free trial • No credit card required
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-t from-indigo-200 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Design your store visually
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Drag, drop, and customize every element. See your changes in
              real-time as you build your perfect store.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto">
            <div className="col-span-12 lg:col-span-3">
              <Card className="h-[600px] border-0 shadow-lg">
                <div className="p-4 border-b border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Intuitive Store Builder
                  </h3>
                  <p className="text-sm text-gray-500">
                    Drag elements to your store
                  </p>
                </div>

                <div className="p-4 border-b border-gray-100">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Elements
                  </h4>
                  <div className="space-y-2">
                    {[
                      {
                        icon: Layout,
                        name: "Header",
                        color: "bg-blue-100 text-blue-600",
                      },
                      {
                        icon: Package,
                        name: "Product Grid",
                        color: "bg-green-100 text-green-600",
                      },
                      {
                        icon: Type,
                        name: "Text Block",
                        color: "bg-purple-100 text-purple-600",
                      },
                    ].map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center space-x-3 p-2 rounded-lg border border-gray-200 bg-white hover:shadow-sm cursor-grab active:cursor-grabbing transition-shadow"
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center ${item.color}`}
                        >
                          <item.icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium">{item.name}</span>
                        <Grip className="w-4 h-4 text-gray-400 ml-auto" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Store Editor
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 p-2 bg-indigo-50 rounded border border-indigo-200">
                      <Layout className="w-4 h-4 text-indigo-600" />
                      <span className="text-sm font-medium text-indigo-900">
                        Header Section
                      </span>
                      <Badge variant="secondary" className="ml-auto text-xs">
                        Active
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded cursor-pointer">
                      <Package className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">Product Grid</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded cursor-pointer">
                      <Type className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">Hero Text</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <Card className="h-[600px] border-0 shadow-xl overflow-hidden">
                <div className="h-full bg-white">
                  <div className="bg-indigo-600 p-4 border-b-2 border-indigo-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                          <Store className="w-5 h-5 text-indigo-600" />
                        </div>
                        <div>
                          <h3 className="text-white font-bold">Your Store</h3>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <nav className="hidden md:flex space-x-4 text-white text-sm">
                          <span className="hover:text-indigo-200 cursor-pointer">
                            Home
                          </span>
                          <span className="hover:text-indigo-200 cursor-pointer">
                            Products
                          </span>
                        </nav>
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                          <ShoppingCart className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-6 overflow-y-auto h-[calc(100%-80px)]">
                    <div className="text-center py-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Summer Collection 2024
                      </h2>
                      <p className="text-gray-600 mb-4">
                        Discover our latest trending products
                      </p>
                      <Button className="bg-indigo-600 hover:bg-indigo-700">
                        Shop Now
                      </Button>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Featured Products
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                          <div
                            key={i}
                            className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow"
                          >
                            <div className="w-full h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-3 flex items-center justify-center">
                              <Package className="w-8 h-8 text-gray-400" />
                            </div>
                            <h4 className="font-medium text-sm text-gray-900 mb-1">
                              Product {i}
                            </h4>
                            <div className="flex items-center justify-between">
                              <span className="text-indigo-600 font-bold text-sm">
                                ${(29.99 + i * 10).toFixed(2)}
                              </span>
                              <div className="flex items-center">
                                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                <span className="text-xs text-gray-500 ml-1">
                                  4.{5 + i}
                                </span>
                              </div>
                            </div>
                            <Button
                              size="sm"
                              className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-xs"
                            >
                              Add to Cart
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        What Our Customers Say
                      </h3>
                      <div className="space-y-4">
                        {[
                          { name: "Tata", rating: 5, review: "Ramro Lagyo!" },
                          {
                            name: "Ambani",
                            rating: 5,
                            review: "Sasto Tara Ramro.",
                          },
                        ].map((review, i) => (
                          <div key={i} className="bg-white p-4 rounded-lg">
                            <div className="flex items-center mb-2">
                              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                                <Users className="w-4 h-4 text-indigo-600" />
                              </div>
                              <div className="ml-3">
                                <p className="font-medium text-sm">
                                  {review.name}
                                </p>
                                <div className="flex">
                                  {[...Array(review.rating)].map((_, j) => (
                                    <Star
                                      key={j}
                                      className="w-3 h-3 text-yellow-400 fill-current"
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600">
                              "{review.review}"
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="col-span-12 lg:col-span-3 ">
              <Card className="h-[600px] border-0 shadow-lg">
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Properties</h3>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <Settings className="w-3 h-3" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <Eye className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">Header Section</p>
                </div>

                <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-80px)]">
                  <div>
                    <Label className="text-sm font-medium text-gray-700">
                      Store Name
                    </Label>
                    <Input defaultValue="Your Amazing Store" className="mt-1" />
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700">
                      Tagline
                    </Label>
                    <Input
                      defaultValue="Premium Quality Products"
                      className="mt-1"
                    />
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">
                      Style
                    </h4>

                    <div className="space-y-3">
                      <div>
                        <Label className="text-sm text-gray-600">
                          Background Color
                        </Label>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="w-8 h-8 bg-indigo-600 rounded border border-gray-200"></div>
                          <Input defaultValue="#4F46E5" className="flex-1" />
                        </div>
                      </div>

                      <div>
                        <Label className="text-sm text-gray-600">
                          Text Color
                        </Label>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="w-8 h-8 bg-white rounded border border-gray-200"></div>
                          <Input defaultValue="#FFFFFF" className="flex-1" />
                        </div>
                      </div>

                      <div>
                        <Label className="text-sm text-gray-600">
                          Font Size
                        </Label>
                        <Select defaultValue="lg">
                          <SelectTrigger className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sm">Small</SelectItem>
                            <SelectItem value="md">Medium</SelectItem>
                            <SelectItem value="lg">Large</SelectItem>
                            <SelectItem value="xl">Extra Large</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-t from-indigo-400 to-indigo-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to help you create, manage, and grow
              your online business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "No-Code Builder",
                description:
                  "Create stunning stores with our drag-and-drop interface",
              },
              {
                icon: ShoppingBag,
                title: "Inventory Management",
                description: "Track products and manage orders seamlessly",
              },
              {
                icon: CreditCard,
                title: "Payment Processing",
                description: "Accept payments with Stripe, PayPal, and more",
              },
              {
                icon: BarChart3,
                title: "Analytics & Insights",
                description:
                  "Understand your customers with detailed reporting",
              },
              {
                icon: Smartphone,
                title: "Mobile Optimized",
                description: "All stores work perfectly on mobile devices",
              },
              {
                icon: Shield,
                title: "Secure & Reliable",
                description: "Enterprise-grade security with 99.9% uptime",
              },
            ].map((feature) => (
              <Card
                key={feature.title}
                className="border-0 shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-indigo-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to launch your store?
          </h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of entrepreneurs building successful businesses with
            Vendora
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-indigo-600 hover:bg-gray-100"
          >
            <Link href="/auth/register">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
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
