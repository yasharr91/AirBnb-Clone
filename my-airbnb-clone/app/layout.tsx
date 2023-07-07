"use client"
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Navrbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
      {/* for hydration error 
        <Toaster/> require at least one parent 
      */}
        <ClientOnly> 
          <ToasterProvider/>
          <RegisterModal/>
          <Navbar />
        </ClientOnly>

        {children}
      </body>
    </html>
  );
}
