import Link from "next/link"

export default function Navbar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Competition", href: "/competition" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="relative z-50 bg-gradient-to-r from-background/90 via-primary/60 to-background/90 backdrop-blur-md border-b border-accent1-DEFAULT/20 shadow-lg shadow-accent1-DEFAULT/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-accent1-DEFAULT to-accent2-DEFAULT rounded-lg flex items-center justify-center shadow-lg shadow-accent1-DEFAULT/25">
              <span className="text-white font-bold text-lg">🦉</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-accent1-DEFAULT via-secondary-DEFAULT to-accent2-DEFAULT bg-clip-text text-transparent">
              AyamGaming
            </span>
          </div>
          <div className="flex items-center space-x-4 sm:space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition-colors hover:text-accent2-DEFAULT text-foreground/80 px-2 py-1 rounded-md hover:bg-accent2-DEFAULT/10"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}