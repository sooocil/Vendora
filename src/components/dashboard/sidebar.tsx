"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Store,
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Settings,
  Palette,
  CreditCard,
  HelpCircle,
  LogOut,
  ChevronLeft,
  Shield,
  Database,
  User,
} from "lucide-react";
import SignoutConfirm from "./SignoutConfirm";


interface SidebarProps {
  userRole: "VENDOR" | "ADMIN";
  vendorId?: string;
}

export function Sidebar({ userRole, vendorId }: SidebarProps) {
  
  const [collapsed, setCollapsed] = useState(false);
  const [signoutModal, setSignoutModal] = useState(false);
  const pathname = usePathname();


  const vendorNavItems = [
    {
      title: "Dashboard",
      href: `/vendor/${vendorId}`,
      icon: LayoutDashboard,
    },
    {
      title: "Products",
      href: `/vendor/${vendorId}/products`,
      icon: Package,
      badge: "24",
    },
    {
      title: "Orders",
      href: `/vendor/${vendorId}/orders`,
      icon: ShoppingCart,
      badge: "3",
    },
    {
      title: "Customers",
      href: `/vendor/${vendorId}/customers`,
      icon: Users,
    },
    {
      title: "Analytics",
      href: `/vendor/${vendorId}/analytics`,
      icon: BarChart3,
    },
    {
      title: "Store Design",
      href: `/vendor/${vendorId}/design`,
      icon: Palette,
    },
    {
      title: "Payments",
      href: `/vendor/${vendorId}/payments`,
      icon: CreditCard,
    },
    {
      title: "Settings",
      href: `/vendor/${vendorId}/settings`,
      icon: Settings,
    },
    //  {
    //   title: "Profile",
    //   href: `/vendor/${vendorId}/profile`,
    //   icon: User,
    // },
  ];

  const adminNavItems = [
    {
      title: "Dashboard",
      href: "/dashboard/admin",
      icon: LayoutDashboard,
    },
    {
      title: "Vendors",
      href: "/dashboard/admin/vendors",
      icon: Users,
      badge: "1.2K",
    },
    {
      title: "Stores",
      href: "/dashboard/admin/stores",
      icon: Store,
      badge: "987",
    },
    {
      title: "Analytics",
      href: "/dashboard/admin/analytics",
      icon: BarChart3,
    },
    {
      title: "Payments",
      href: "/dashboard/admin/payments",
      icon: CreditCard,
    },
    {
      title: "Security",
      href: "/dashboard/admin/security",
      icon: Shield,
    },
    {
      title: "System",
      href: "/dashboard/admin/system",
      icon: Database,
    },
    {
      title: "Settings",
      href: "/dashboard/admin/settings",
      icon: Settings,
    },
  ];

  const navItems = userRole === "VENDOR" ? vendorNavItems : adminNavItems;

  return (
    <div
      className={cn(
        "flex flex-col h-screen bg-indigo-50 border-r border-zinc-300 transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Store className="w-4 h-4 text-white" />
            </div>
            <span className="select-none font-semibold text-gray-900">
              Vendora.
            </span>
          </div>
        )}
        <Button
          variant="default"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="hover:cursor-pointer h-8 w-8 p-0"
        >
          <ChevronLeft
            className={cn(
              "h-4 w-4 transition-transform",
              collapsed && "rotate-180"
            )}
          />
        </Button>
      </div>

      <nav className=" flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <Button
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start h-10 px-3 ",
                  isActive &&
                    "bg-indigo-600 text-white hover:bg-indigo-600 hover:cursor-pointer",
                  !isActive && "hover:bg-indigo-100",
                  collapsed && "px-0 justify-center hover:cursor-pointer"
                )}
              >
                <item.icon className={cn("h-8 w-8", !collapsed && "mr-3")} />
                {!collapsed && (
                  <>
                    <span className="flex-1 text-left">{item.title}</span>
                    {item.badge && (
                      <Badge
                        variant="destructive"
                        className="ml-auto bg-gray-100 text-gray-600 text-xs"
                      >
                        {item.badge}
                      </Badge>
                    )}
                  </>
                )}
              </Button>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-100 space-y-1">
        {
          
          <Link href={`/vendor/${vendorId}/help/`}>
          {/* instead of making help as differnet route "/help" there will be popup component in where
           user can take quick tour and can contact me/developer as well for better ui/ux  */}
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start h-10 px-3",
              collapsed && "px-0 justify-center"
              
              
            )}
          >
            <HelpCircle className={cn("h-4 w-4", !collapsed && "mr-3")} />
            {!collapsed && "Help & Support"}
          </Button>
        </Link>}
        <Button
          variant="ghost"
          onClick={() => {
            setSignoutModal(!signoutModal);
          }}
          className={cn(
            "w-full justify-start h-10 px-3 text-red-600 hover:text-red-700 hover:bg-red-50",
            collapsed && "px-0 justify-center"
          )}
        >
          <LogOut className={cn("h-4 w-4", !collapsed && "mr-3")} />
          {!collapsed && "Sign Out"}
        </Button>
      </div>
      {signoutModal && <SignoutConfirm open={signoutModal} onOpenChange={setSignoutModal} />}
    </div>
  );
}
