"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { motion, useScroll } from "framer-motion"
import { Award, CalendarDays, CheckCircle, FileText, GanttChartSquare, Users } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

// Komponen untuk setiap item di linimasa
function TimelineItem({ item, index }: { item: any; index: number }) {
  const isOdd = index % 2 !== 0
  const variants = {
    hidden: { opacity: 0, x: isOdd ? 100 : -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={variants}
      className={`relative mb-10 flex w-full items-center justify-between md:mb-8 ${isOdd ? "md:flex-row-reverse" : ""}`}
    >
      <div className="hidden w-5/12 md:block"></div>
      <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-secondary shadow-lg">
        <item.icon className="h-6 w-6 text-white" />
      </div>
      <div className="w-full rounded-lg bg-card/50 p-6 shadow-xl backdrop-blur-sm md:w-5/12">
        <p className="mb-2 text-lg font-bold text-secondary">{item.date}</p>
        <h3 className="mb-3 text-xl font-semibold text-white">{item.event}</h3>
        <p className="text-sm text-muted-foreground">{item.description}</p>
      </div>
    </motion.div>
  )
}

export default function CompetitionPage() {
  const timelineData = [
    { date: "1 Agustus - 30 Agustus 2025", event: "Pendaftaran Peserta", icon: FileText, description: "Buka gerbang kreativitasmu dan daftarkan tim kamu untuk menjadi bagian dari kompetisi." },
    { date: "1 September - 15 September 2025", event: "Babak Penyisihan (Online)", icon: Users, description: "Peserta akan diberikan sebuah studi kasus untuk dikerjakan dan dikumpulkan secara online." },
    { date: "20 September 2025", event: "Pengumuman Finalis", icon: CalendarDays, description: "Tim-tim terbaik akan diumumkan dan berhak melaju ke babak grand final." },
    { date: "1 Oktober 2025", event: "Grand Final & Pemenang", icon: Award, description: "Presentasi final di hadapan para juri ahli dan pengumuman sang juara Teknovistafest." },
  ]

  const prizeData = [
    {
      rank: "Juara 1",
      prize: "Rp 10.000.000",
      details: "Sertifikat + Merchandise Eksklusif + Kesempatan Magang*",
      icon: Award,
      color: "from-amber-400 to-yellow-500",
      shadow: "shadow-yellow-400/40",
    },
    { 
      rank: "Juara 2", 
      prize: "Rp 7.000.000",
      details: "Sertifikat + Merchandise",
      icon: Award,
      color: "from-slate-300 to-gray-400",
      shadow: "shadow-gray-400/40",
    },
    { 
      rank: "Juara 3", 
      prize: "Rp 5.000.000", 
      details: "Sertifikat + Merchandise",
      icon: Award,
      color: "from-amber-600 to-orange-700",
      shadow: "shadow-orange-600/40",
    },
  ]
  
  const criteriaData = [
      {
          title: "Inovasi dan Kreativitas",
          icon: GanttChartSquare,
          description: "Seberapa unik dan orisinal solusi desain yang ditawarkan? Apakah ada elemen kebaruan yang membedakannya dari yang lain?"
      },
      {
          title: "Fungsionalitas dan Pengalaman Pengguna (UX)",
          icon: Users,
          description: "Apakah desain mudah digunakan, intuitif, dan secara efektif memecahkan masalah pengguna yang ditargetkan?"
      },
      {
          title: "Estetika dan Antarmuka Pengguna (UI)",
          icon: Award,
          description: "Penilaian terhadap aspek visual, termasuk penggunaan warna, tipografi, konsistensi, dan daya tarik visual secara keseluruhan."
      },
      {
          title: "Penyelesaian Masalah",
          icon: CheckCircle,
          description: "Seberapa baik desain mengatasi studi kasus atau masalah yang diberikan? Apakah solusi yang diajukan relevan dan efektif?"
      }
  ]

  const timelineRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end end"],
  })

  return (
    <div className="bg-background text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.header 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
            Detail Kompetisi
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Semua yang perlu Anda ketahui untuk menjadi bagian dari kompetisi desain UI/UX paling seru tahun ini!
          </p>
        </motion.header>

        <section id="details" ref={timelineRef} className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            Linimasa Kompetisi
          </h2>
          <div className="relative mx-auto max-w-4xl px-4">
            {/* The static background line */}
            <div className="absolute left-4 h-full w-1 origin-top bg-border/30 md:left-1/2 md:-translate-x-1/2"></div>
            {/* The animated progress line */}
            <motion.div
              className="absolute left-4 h-full w-1 origin-top bg-secondary md:left-1/2 md:-translate-x-1/2"
              style={{ scaleY: scrollYProgress }}
            />
            <div className="space-y-4 md:space-y-0">
              {timelineData.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Hadiah Pemenang</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {prizeData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`bg-gradient-to-br ${item.color} p-8 rounded-2xl shadow-xl ${item.shadow} text-center transform hover:scale-105 transition-transform duration-300 flex flex-col`}
              >
                <item.icon className="w-16 h-16 mx-auto mb-4 text-white" />
                <h3 className="text-3xl font-bold mb-2 text-black">{item.rank}</h3>
                <p className="text-4xl font-bold text-white mb-4">{item.prize}</p>
                <p className="text-sm text-black/80 flex-grow">{item.details}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16 md:mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Kriteria Penilaian</h2>
            <Accordion type="single" collapsible className="w-full bg-card/30 rounded-lg p-2 border border-border">
                {criteriaData.map((item, index) => (
                    <AccordionItem value={`item-${index}`} key={index} className="border-b-border/50">
                        <AccordionTrigger className="text-lg hover:no-underline font-medium text-white px-4">
                            <div className="flex items-center gap-3">
                                <item.icon className="w-6 h-6 text-secondary"/>
                                {item.title}
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pt-2 text-muted-foreground">
                            {item.description}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>

        <section className="text-center bg-card/20 py-16 rounded-xl border border-border backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Siap Bergabung?</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Jangan lewatkan kesempatan untuk menunjukkan bakat desainmu, belajar dari para ahli, dan menangkan hadiah
            menarik!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg hover:shadow-glow-accent transition-all duration-300 transform hover:scale-105 text-xl px-10 py-7 rounded-md font-bold"
          >
            <Link href="#">
              Daftar Sekarang Juga!
            </Link>
          </Button>
          <p className="mt-6 text-sm text-muted-foreground">
            Pendaftaran dibuka hingga 30 Agustus 2025.{" "}
            <Link href="/contact" className="underline hover:text-accent">
              Hubungi kami
            </Link>{" "}
            jika ada pertanyaan.
          </p>
        </section>
      </div>
    </div>
  )
}
