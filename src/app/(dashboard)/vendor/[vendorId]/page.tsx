import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DollarSign,
  ShoppingCart,
  Package,
  Users,
  TrendingUp,
  TrendingDown,
  Plus,
} from "lucide-react";
import { VerificationBanner } from "@/components/dashboard/VerificationBanner";
import { VendorVerification } from "@/components/dashboard/VendorVerification";

interface PageProps {
  params: Promise<{ vendorId: string }>;
}

export default async function VendorDashboard({ params }: PageProps) {
  const { vendorId } = await params;
  console.log("Vendor ID:", vendorId);

  return (
    <div className="p-6 space-y-6">
      <VendorVerification vendorId={vendorId} />

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Overview</h1>
          <p className="text-sm text-gray-500">
            Welcome back! Here's your store overview.
          </p>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,345</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="w-3 h-3 mr-1" />
              +12% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-zinc-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="w-3 h-3 mr-1" />
              +8% from last week
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Products</CardTitle>
            <Package className="h-4 w-4 text-zinc-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <div className="flex items-center text-xs text-gray-500">
              3 added this week
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customers</CardTitle>
            <Users className="h-4 w-4 text-zinc-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <div className="flex items-center text-xs text-red-600">
              <TrendingDown className="w-3 h-3 mr-1" />
              -2% from last week
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recent Orders</CardTitle>
            <CardDescription>Your latest customer orders</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  id: "#1234",
                  customer: "John Doe",
                  amount: "$89.99",
                  status: "Completed",
                },
                {
                  id: "#1235",
                  customer: "Jane Smith",
                  amount: "$45.50",
                  status: "Processing",
                },
                {
                  id: "#1236",
                  customer: "Mike Johnson",
                  amount: "$156.75",
                  status: "Shipped",
                },
              ].map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between py-2"
                >
                  <div>
                    <p className="font-medium text-sm">{order.id}</p>
                    <p className="text-xs text-gray-500">{order.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-sm">{order.amount}</p>
                    <p className="text-xs text-gray-500">{order.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Top Products</CardTitle>
            <CardDescription>Your best-selling items</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Summer Dress", sales: 45, revenue: "$2,250" },
                { name: "Wireless Headphones", sales: 32, revenue: "$1,920" },
                { name: "Coffee Mug Set", sales: 28, revenue: "$840" },
              ].map((product) => (
                <div
                  key={product.name}
                  className="flex items-center justify-between py-2"
                >
                  <div>
                    <p className="font-medium text-sm">{product.name}</p>
                    <p className="text-xs text-gray-500">
                      {product.sales} sold
                    </p>
                  </div>
                  <p className="font-medium text-sm">{product.revenue}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-20">
        <CardHeader></CardHeader>
        <CardContent>
          <div className="space-y-4">
            <span className="text-xl mx-auto text-emerald-800">
              Here might go tips for businesses
            </span>
            <h2 className="text-indigo-400 text-justify max-h-60 overflow-auto border-4 rounded-2xl px-8 py-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              soluta nostrum voluptate sunt sit rem enim fuga placeat, molestiae
              ad qui aliquid, minus eius iusto quas et corporis aspernatur
              facere? Maiores atque adipisci, totam quam cumque temporibus magni
              sunt quisquam assumenda quis, ab soluta qui tenetur, unde
              laudantium officia. Similique beatae impedit a itaque ipsam ab
              tempora quibusdam molestias nemo? Ea fugiat nobis, aperiam et
              dicta adipisci rerum, quidem ullam voluptatum nam similique
              laborum excepturi officiis accusantium porro placeat. Et iure illo
              beatae explicabo reiciendis doloribus enim cumque eius vitae.
              Consectetur, magnam numquam iusto, dolorum omnis quae iste beatae
              itaque soluta vitae unde quam animi pariatur fugit deleniti
              dolores architecto voluptate ex adipisci? Aperiam optio
              voluptatibus et praesentium ipsum officiis! Sapiente ex magnam ut
              numquam cupiditate repudiandae enim autem blanditiis iure modi
              praesentium expedita voluptates, libero provident ab dignissimos
              commodi ratione deserunt officiis delectus quidem assumenda.
              Repellat nisi eaque voluptates! Blanditiis totam nostrum nisi,
              quaerat eos ut provident repellendus distinctio accusantium
              ducimus et. Aspernatur sed dolore earum maiores quibusdam nihil
              facere consequuntur? Impedit facilis illo in, doloremque aperiam
              mollitia sunt. Animi nulla explicabo sed. Eveniet et quasi quia
              dolore tempora quam magni aut ab delectus qui adipisci sed beatae
              amet consectetur debitis quos, dignissimos sint animi laboriosam
              iusto itaque. Nisi. Cum iusto explicabo tempore odio nam aliquid
              consequuntur atque ad at sunt! Voluptatum optio magnam quisquam
              nobis exercitationem quos repellat, quasi ad laborum esse omnis.
              Inventore pariatur aliquid perferendis consequatur? Neque id amet
              excepturi quae at quod, suscipit ea quos laudantium corporis ab
              dolorum commodi nemo vitae eum mollitia dicta reiciendis libero
              optio a? Cumque obcaecati labore ab repellendus ut? Odio harum
              placeat reiciendis mollitia consectetur eligendi recusandae
              consequatur? Dicta nobis corporis consequatur praesentium aperiam
              nostrum ipsa optio unde debitis, voluptates quo necessitatibus
              soluta! Assumenda ipsam repudiandae odit delectus voluptates.
            </h2>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
