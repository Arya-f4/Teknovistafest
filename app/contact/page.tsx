import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="bg-deepspace text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-accent2-DEFAULT to-accent1-DEFAULT">
            Hubungi Kami
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Punya pertanyaan, saran, atau ingin berkolaborasi? Tim Teknovistafest siap membantu Anda.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-secondary-DEFAULT mb-6">Informasi Kontak Resmi</h2>
              <div className="space-y-4 text-foreground/90 text-md">
                <p className="flex items-start">
                  <Mail className="w-6 h-6 mr-4 mt-1 text-accent2-DEFAULT flex-shrink-0" />
                  <span>
                    Email:{" "}
                    <a
                      href="mailto:info@teknovistafest.unair.ac.id"
                      className="hover:text-accent1-DEFAULT transition-colors"
                    >
                      info@teknovistafest.unair.ac.id
                    </a>{" "}
                    (Contoh)
                  </span>
                </p>
                <p className="flex items-start">
                  <Phone className="w-6 h-6 mr-4 mt-1 text-accent2-DEFAULT flex-shrink-0" />
                  <span>
                    Telepon/WA:{" "}
                    <a href="tel:+6281234567890" className="hover:text-accent1-DEFAULT transition-colors">
                      +62 812 3456 7890
                    </a>{" "}
                    (Contoh)
                  </span>
                </p>
                <p className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 mt-1 text-accent2-DEFAULT flex-shrink-0" />
                  <span>
                    Alamat: Gedung D4 Teknik Informatika, Kampus C Universitas Airlangga, Surabaya, Jawa Timur,
                    Indonesia (Contoh)
                  </span>
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-secondary-DEFAULT mb-6">
                Jam Operasional Panitia
              </h2>
              <p className="text-foreground/90 text-md">Senin - Jumat: 09:00 - 17:00 WIB</p>
              <p className="text-muted-foreground text-sm">
                Diluar jam operasional, kami sarankan untuk mengirimkan email. Kami akan merespons secepatnya.
              </p>
            </div>
          </div>

          {/* DeleteFile */}
        </div>
      </div>
    </div>
  )
}
