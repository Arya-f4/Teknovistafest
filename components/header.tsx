"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container flex h-16 max-w-screen-xl items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Teknovistafest Logo" width={40} height={40} />
            <span className="font-semibold text-lg text-foreground hidden sm:inline-block">Teknovistafest</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-primary focus:outline-none">
                Competition
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border-border">
                <DropdownMenuItem asChild>
                  <Link href="/competition" className="cursor-pointer">UI/UX Design</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="border-secondary text-secondary bg-transparent hover:bg-secondary/20 hover:text-white"
          >
            Hubungi Panitia
          </Button>
          <Button className="bg-secondary hover:bg-primary/90 text-primary-foreground font-semibold">
            Daftar Sekarang
          </Button>
        </div>
      </div>
    </header>
  )
}
