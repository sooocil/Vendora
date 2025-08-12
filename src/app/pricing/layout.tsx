import type { Metadata } from "next";
import HomeNav from "@/components/home/homeNav";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Vendora - Your E-commerce Solution",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function PricingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gradient-to-t from-indigo-100 to-white pt-16 min-h-screen flex flex-col">
      <HomeNav />
      {children}
    </div>
  );
}
