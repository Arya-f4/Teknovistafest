import Footer from "@/components/footer"
import Header from "@/components/header"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Teknovistafest - Kompetisi Desain UI/UX",
  description: "Wadah bagi para desainer berbakat di Indonesia untuk bersaing dan menjadi yang terbaik di panggung nasional.",
  keywords: "Teknovistafest, kompetisi, desain, UI/UX, Indonesia, teknologi, festival, mahasiswa, D4 Teknik Informatika, Universitas Airlangga",
  authors: [{ name: "Teknovistafest" }],
  creator: "Teknovistafest",
  publisher: "Teknovistafest",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://teknovistafest.com", // Ganti dengan URL Anda
    title: "Teknovistafest - Kompetisi Desain UI/UX",
    description: "Wadah bagi para desainer berbakat di Indonesia untuk bersaing dan menjadi yang terbaik di panggung nasional.",
    siteName: "Teknovistafest",
    images: [{
      url: "https://teknovistafest.com/og-image.png", // Ganti dengan URL gambar Anda
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@teknovistafest", // Ganti dengan akun Twitter Anda
    creator: "@teknovistafest",
    title: "Teknovistafest - Kompetisi Desain UI/UX",
    description: "Wadah bagi para desainer berbakat di Indonesia untuk bersaing dan menjadi yang terbaik di panggung nasional.",
    images: "https://teknovistafest.com/twitter-image.png", // Ganti dengan URL gambar Twitter Anda
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="dark">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        {/* Menambahkan library GSAP dan Anime.js dari CDN */}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js" strategy="beforeInteractive" />
      </body>
    </html>
  )
}
