import { Github, Instagram, Linkedin, Rocket, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const footerLinks = [
    { 
      title: "Kompetisi", 
      links: [
        { label: "Detail Lomba", href: "/competition#details" },
        { label: "Linimasa", href: "/competition#details" },
        { label: "Peraturan", href: "/competition#rules" },
        { label: "Daftar", href: "#" },
      ] 
    },
    { 
      title: "Tentang Kami", 
      links: [
        { label: "Visi & Misi", href: "/about" },
        { label: "Penyelenggara", href: "/about" },
        { label: "Tim Kami", href: "/about" },
      ] 
    },
    { 
      title: "Sumber Daya", 
      links: [
        { label: "FAQ", href: "/contact" },
        { label: "Hubungi Panitia", href: "/contact" },
        { label: "Sponsor", href: "#" },
      ] 
    },
  ]

  const socialLinks = [
      { icon: Twitter, href: "#", name: "Twitter" },
      { icon: Instagram, href: "#", name: "Instagram" },
      { icon: Github, href: "#", name: "Github" },
      { icon: Linkedin, href: "#", name: "LinkedIn" },
  ]

  return (
    <footer className="relative w-full border-t border-primary/50 pt-16 text-muted-foreground overflow-hidden" style={{ backgroundColor: '#1c0522' }}>
        {/* Glow effect */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent1 to-transparent opacity-50"></div>

        <div className="container mx-auto max-w-screen-xl px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="col-span-2 lg:col-span-1 mb-8 md:mb-0">
                <Link href="/" className="flex items-center space-x-2">
                <Rocket className="h-8 w-8 text-accent2" />
                <span className="font-semibold text-lg text-white">Teknovistafest</span>
                </Link>
                <p className="mt-4 text-sm leading-relaxed">
                    Diselenggarakan oleh D4 Teknik Informatika Universitas Airlangga. Mendorong batas-batas inovasi desain.
                </p>
                <div className="mt-6 flex space-x-4">
                    {socialLinks.map(social => (
                        <Link key={social.name} href={social.href} className="text-muted-foreground hover:text-accent2 transition-colors">
                            <social.icon className="h-5 w-5"/>
                            <span className="sr-only">{social.name}</span>
                        </Link>
                    ))}
                </div>
            </div>

            {footerLinks.map((section) => (
                <div key={section.title}>
                <h3 className="font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-3">
                    {section.links.map((link) => (
                    <li key={link.label}>
                        <Link href={link.href} className="hover:text-accent2 hover:underline transition-colors underline-offset-4">
                        {link.label}
                        </Link>
                    </li>
                    ))}
                </ul>
                </div>
            ))}
            </div>
            <div className="mt-16 border-t border-primary/50 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Teknovistafest. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}
