import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

//metadata put title of the page
export const metadata: Metadata = {
  title: "Vendora",
  description: "Vendora - Your E-commerce Solution",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth `}
      >
        {children}
      </body>
    </html>
  );
}
