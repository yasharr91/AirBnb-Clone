"use client"
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
import Navbar from "./components/navbar/Navrbar";
import "./globals.css";
import { Nunito } from "next/font/google";

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
      {/* for hydration error */}
        <ClientOnly> 
          <Modal actionLabel="Submit" title="Modal of Mine" isOpen/>
          <Navbar />
        </ClientOnly>

        {children}
      </body>
    </html>
  );
}
