import type { Metadata } from "next";
import HomeNav from "@/components/home/homeNav";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about our company and values.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function AboutUsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="pt-16 pb-0 bg-gradient-to-br from-indigo-50 to-white min-h-screen">
      <script
        data-name="BMC-Widget"
        data-cfasync="false"
        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        data-id="soocil"
        data-description="Support me on Buy me a coffee!"
        data-message=""
        data-color="#5F7FFF"
        data-position="Right"
        data-x_margin="18"
        data-y_margin="18"
      ></script>
      <HomeNav />
      {children}
    </div>
  );
}
