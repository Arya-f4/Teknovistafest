"use client"

import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Competition", href: "/competition" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-deepspace/80 backdrop-blur-lg border-b border-primary/50">
      <div className="container flex h-16 max-w-screen-xl items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-accent2-DEFAULT" />
            <span className="font-semibold text-lg text-white hidden sm:inline-block">Teknovistafest</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground transition-colors hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="border-secondary-DEFAULT text-secondary-DEFAULT bg-transparent hover:bg-secondary-DEFAULT/20 hover:text-white"
          >
            Hubungi Panitia
          </Button>
          <Button className="bg-accent2-DEFAULT hover:bg-accent2-DEFAULT/90 text-accent2-foreground font-semibold">
            Daftar Sekarang
          </Button>
        </div>
      </div>
    </header>
  )
}
