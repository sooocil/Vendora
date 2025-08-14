import type { Metadata } from "next";
import { Headland_One } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/components/dashboard/QueryProvider";
import { Toaster } from "sonner";

const headlandOne = Headland_One({
  subsets: ["latin"],
  variable: "--font-headland-one",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Vendora",
  description: "Vendora - Your E-commerce Solution",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${headlandOne.variable} antialiased scroll-smooth`}
        suppressHydrationWarning
      >
        <QueryProvider>
          <Toaster
            richColors
            position="top-center"
            toastOptions={{
              duration: 3000,
              className: "text-gray-800 dark:text-white",
            }}
          />

          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
