import type {Metadata} from "next";
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
}:Readonly<{children:React.ReactNode;}>) {
  return(
    <>
    <HomeNav />
    {children}
    </>
  )
}