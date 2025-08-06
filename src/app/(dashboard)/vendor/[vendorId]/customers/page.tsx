import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, User, Mail, Phone } from "lucide-react"

export default function VendorCustomers() {
  const customers = [
    {
      id: 1,
      name: "Hari Prasad",
      email: "hari@example.com",
      phone: "+977 9837462837",
      orders: 5,
      spent: "$450.00",
      status: "Active",
      joined: "2024-01-10",
    },
    {
      id: 2,
      name: "Prasad Hari",
      email: "prasad@example.com",
      phone: "+977 9837462837",
      orders: 3,
      spent: "$280.50",
      status: "Active",
      joined: "2024-01-08",
    },
    {
      id: 3,
      name: "Hari ko Prasad",
      email: "prasad@example.com",
      phone: "+977 9837462837",
      orders: 1,
      spent: "$89.99",
      status: "New",
      joined: "2024-01-15",
    },
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Customers</h1>
          <p className="text-sm text-gray-500">Manage your customer relationships</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-gray-500">Total Customers</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-gray-500">New This Month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">$89.50</div>
            <p className="text-xs text-gray-500">Avg Order Value</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-gray-500">Satisfaction Rate</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input placeholder="Search customers..." className="pl-10" />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Customer List</CardTitle>
          <CardDescription>Your registered customers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {customers.map((customer) => (
              <div key={customer.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">{customer.name}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Mail className="w-3 h-3 mr-1" />
                      {customer.email}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Phone className="w-3 h-3 mr-1" />
                      {customer.phone}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="font-medium">{customer.spent}</p>
                    <p className="text-sm text-gray-500">{customer.orders} orders</p>
                    <p className="text-xs text-gray-400">Joined {customer.joined}</p>
                  </div>
                  <Badge variant={customer.status === "Active" ? "default" : "secondary"}>{customer.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
