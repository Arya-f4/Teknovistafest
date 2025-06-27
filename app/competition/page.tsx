import { Button } from "@/components/ui/button"
import { CalendarDays, FileText, Trophy, Users } from "lucide-react"
import Link from "next/link"

export default function CompetitionPage() {
  const timelineData = [
    { date: "1 Agustus - 30 Agustus 2025", event: "Pendaftaran Peserta", icon: FileText },
    { date: "1 September - 15 September 2025", event: "Babak Penyisihan (Online)", icon: Users },
    { date: "20 September 2025", event: "Pengumuman Finalis", icon: CalendarDays },
    { date: "1 Oktober 2025", event: "Grand Final & Pengumuman Pemenang", icon: Trophy },
  ]

  const prizeData = [
    {
      rank: "Juara 1",
      prize: "Rp 10.000.000 + Sertifikat + Merchandise Eksklusif",
      icon: Trophy,
      color: "text-yellow-400",
    },
    { rank: "Juara 2", prize: "Rp 7.000.000 + Sertifikat + Merchandise", icon: Trophy, color: "text-gray-300" },
    { rank: "Juara 3", prize: "Rp 5.000.000 + Sertifikat + Merchandise", icon: Trophy, color: "text-orange-400" },
    { rank: "Harapan 1 & 2", prize: "Sertifikat + Merchandise", icon: Users, color: "text-accent2-DEFAULT" },
  ]

  return (
    <div className="bg-deepspace text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-accent2-DEFAULT to-accent1-DEFAULT">
            Detail Kompetisi Teknovistafest
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Semua yang perlu Anda ketahui untuk menjadi bagian dari kompetisi desain UI/UX paling seru tahun ini!
          </p>
        </header>

        <section id="details" className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-DEFAULT mb-10 text-center">
            Linimasa Kompetisi
          </h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary-foreground/20 transform -translate-x-1/2 hidden md:block"></div>
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`mb-8 flex md:items-center w-full ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="hidden md:block w-1/2"></div>
                <div className="hidden md:block relative">
                  <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-accent1-DEFAULT rounded-full border-4 border-deepspace transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div className="w-full md:w-1/2 bg-primary-DEFAULT/30 p-6 rounded-lg shadow-lg md:ml-4 md:mr-4">
                  <div className="flex items-center mb-2">
                    <item.icon className="w-6 h-6 mr-3 text-accent2-DEFAULT" />
                    <h3 className="text-xl font-semibold text-accent1-DEFAULT">{item.event}</h3>
                  </div>
                  <p className="text-md text-muted-foreground">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-DEFAULT mb-10 text-center">Hadiah Pemenang</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prizeData.map((item, index) => (
              <div
                key={index}
                className="bg-primary-DEFAULT/30 p-8 rounded-lg shadow-xl text-center transform hover:scale-105 transition-transform duration-300 hover:shadow-accent1-DEFAULT/30"
              >
                <item.icon className={`w-16 h-16 mx-auto mb-6 ${item.color}`} />
                <h3 className={`text-2xl font-bold mb-3 ${item.color}`}>{item.rank}</h3>
                <p className="text-md text-foreground/90">{item.prize}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-DEFAULT mb-6">Siap Bergabung?</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Jangan lewatkan kesempatan untuk menunjukkan bakat desainmu, belajar dari para ahli, dan menangkan hadiah
            menarik!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent2-DEFAULT text-accent2-foreground hover:bg-accent2-DEFAULT/90 shadow-lg hover:shadow-glow-accent2 transition-all duration-300 transform hover:scale-105 text-xl px-10 py-7 rounded-md"
          >
            <Link href="#">
              {" "}
              {/* Replace with actual registration link */}
              Daftar Sekarang Juga!
            </Link>
          </Button>
          <p className="mt-6 text-sm text-muted-foreground">
            Pendaftaran dibuka hingga 30 Agustus 2025.{" "}
            <Link href="/contact" className="underline hover:text-accent1-DEFAULT">
              Hubungi kami
            </Link>{" "}
            jika ada pertanyaan.
          </p>
        </section>
      </div>
    </div>
  )
}
