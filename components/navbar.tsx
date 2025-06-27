import Link from "next/link"
import { Rocket } from "lucide-react"

export default function Navbar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Competition", href: "/competition" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="flex items-center space-x-2 mr-6">
          <Rocket className="h-7 w-7 text-accent2-DEFAULT" />
          <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-accent2-DEFAULT to-accent1-DEFAULT">
            Teknovistafest
          </span>
        </Link>
        <nav className="ml-auto flex items-center space-x-4 sm:space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="transition-colors hover:text-accent2-DEFAULT text-foreground/80 px-2 py-1 rounded-md hover:bg-accent2-DEFAULT/10"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
