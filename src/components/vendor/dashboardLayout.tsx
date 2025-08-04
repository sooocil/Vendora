import React from "react";
import { usePathname } from "next/navigation";

const DashboardLayout = () => {
  const pathname = usePathname();

  return (
    <div>
      <div className="flex min-h-screen flex-col">
        <header className="bg-white border-b border-gray-200 py-4">
          <div className="container mlx-auto px-4">
            <h1 className="text-xl font-bold">Vendor Dashboard</h1>
          </div>
        </header>

        <div className="flex flex-1">
          <aside className="w-64 bg-gray-50 border-r border-gray-200">
            <nav className="p-4">
              <ul className="space-y-2">
                <li>
                  <a
                    href="/vendor/dashboard"
                    className={`block px-4 py-2 rounded-md ${
                      pathname === "/vendor/dashboard"
                        ? "bg-blue-100 text-blue-600"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    href="/vendor/dashboard/products"
                    className={`block px-4 py-2 rounded-md ${
                      pathname.includes("/vendor/dashboard/products")
                        ? "bg-blue-100 text-blue-600"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="/vendor/dashboard/orders"
                    className={`block px-4 py-2 rounded-md ${
                      pathname.includes("/vendor/dashboard/orders")
                        ? "bg-blue-100 text-blue-600"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    Orders
                  </a>
                </li>
                <li>
                  <a
                    href="/vendor/dashboard/settings"
                    className={`block px-4 py-2 rounded-md ${
                      pathname.includes("/vendor/dashboard/settings")
                        ? "bg-blue-100 text-blue-600"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
