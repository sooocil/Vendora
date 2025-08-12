import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RegisterForm } from "@/components/auth/register-form"
import Link from "next/link"
import { Store, ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"



export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="mb-6">
          <Button variant="ghost" asChild className="text-gray-600 hover:text-gray-900">
            <Link href="/" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 gap-6"> 
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                <Store className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900 ml-3">Vendora</span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">Start your online store</h1>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of entrepreneurs building successful businesses with Vendora.
            </p>

            <div className="space-y-4">
              {["14-day free trial", "No setup fees", "24/7 support", "Professional themes"].map((benefit) => (
                <div key={benefit} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-3" />
                  <span className="text-zinc-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-center text-lg">Create Your Account</CardTitle>
              </CardHeader>
              <CardContent>
                <RegisterForm />
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link href="/login" className="text-indigo-600 hover:text-indigo-700 font-medium">
                      Sign in
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
