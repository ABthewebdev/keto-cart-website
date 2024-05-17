import { ClerkProvider } from "@clerk/nextjs";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import UserAuth from "@/components/UserAuth";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const Metadata = {
  title: "Keto Cart",
  description: "We make doing keto easy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <div className="text-center px-8 md:px-16 lg:px-20">
          <h2 className="font-bold text-base">Start your 3 month free trial</h2>
        </div>
        <div className="flex">
          <Nav AuthButton={<UserAuth />} />
        </div>
        {children}
        <Footer />
      </body>
    </html>
    // </ClerkProvider>
  );
}
