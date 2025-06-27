import { Rocket } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const footerLinks = [
    { title: "Kompetisi", links: ["Detail", "Jadwal", "Peraturan", "Daftar"] },
    { title: "Tentang", links: ["Visi & Misi", "Penyelenggara", "Tim Kami"] },
    { title: "Sumber Daya", links: ["FAQ", "Kontak", "Sponsor"] },
    { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
  ]

  return (
    <footer className="w-full border-t border-primary/50 bg-deepspace text-muted-foreground">
      <div className="container mx-auto max-w-screen-xl px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1 mb-8 md:mb-0">
            <Link href="/" className="flex items-center space-x-2">
              <Rocket className="h-8 w-8 text-accent2-DEFAULT" />
              <span className="font-semibold text-lg text-white">Teknovistafest</span>
            </Link>
            <p className="mt-4 text-sm">Diselenggarakan oleh D4 Teknik Informatika Universitas Airlangga.</p>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-accent1-DEFAULT hover:underline transition-colors">
                      {link}
                    </a>
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
