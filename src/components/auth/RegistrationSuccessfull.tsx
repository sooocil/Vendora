import React from 'react'
import { Check, Home, LogIn } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

const RegistrationSuccessfull = () => {
  const handleGoHome = () => {
    window.location.href = '/'
  }

  const handleGoToLogin = () => {
    window.location.href = '/login'
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-4">
            <Check className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Successfully Registered</h2>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <p className="text-gray-600">
            Thanks for registering, let's create something great
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={handleGoHome} variant="outline" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Home
            </Button>
            <Button onClick={handleGoToLogin} className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700">
              <LogIn className="w-4 h-4" />
              Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default RegistrationSuccessfull


// make popup with absolute position, bg blur, use accent color indigo-600, use shadcnui as you want, add a check from lucide react, header 
// "Successfully Registered", paragraph "Thanks for registering, let create something great", then two buttons (Lucide react icons) for going to "/" & "login"