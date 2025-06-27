import Footer from "@/components/footer"
import Header from "@/components/header"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Teknovistafest - Kompetisi Desain UI/UX",
  description: "Wadah bagi para desainer berbakat di Indonesia untuk bersaing dan menjadi yang terbaik.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="dark">
      <body className={cn("min-h-screen bg-gh-dark-blue font-sans antialiased", inter.variable)}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
