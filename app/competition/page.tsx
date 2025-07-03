"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { motion, useScroll } from "framer-motion"
import {
  Award,
  CalendarDays,
  CheckCircle,
  FileText,
  GanttChartSquare,
  Users,
  UserPlus,
  Upload,
  Megaphone,
  ClipboardList,
  Trophy,
  Camera,
} from "lucide-react"
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
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
      className={`relative mb-8 flex w-full items-center justify-between md:mb-12 ${isOdd ? "md:flex-row-reverse" : ""}`}
    >
      <div className="hidden w-5/12 md:block"></div>
      <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-accent shadow-lg border-2 border-background">
        <item.icon className="h-7 w-7 text-white" />
      </div>
      <div className="w-full rounded-xl bg-gradient-to-br from-card/60 to-card/40 p-6 shadow-xl backdrop-blur-sm border border-border/50 hover:shadow-2xl transition-all duration-300 md:w-5/12">
        <p className="mb-2 text-lg font-bold text-accent">{item.date}</p>
        <h3 className="mb-3 text-xl font-semibold text-white leading-tight">{item.event}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  )
}

export default function CompetitionPage() {
  const timelineData = [
    {
      phase: "Fase 1",
      date: "3 Juli - 26 Juli 2025",
      event: "Pendaftaran Gelombang 1",
      icon: UserPlus,
      description:
        "Periode pendaftaran awal untuk peserta yang ingin bergabung lebih dulu. Dapatkan kesempatan persiapan yang lebih matang!",
    },
    {
      phase: "Fase 2",
      date: "27 Juli - 20 Agustus 2025",
      event: "Pendaftaran Gelombang 2",
      icon: Users,
      description:
        "Kesempatan terakhir untuk mendaftar! Jangan sampai terlewat untuk menjadi bagian dari kompetisi bergengsi ini.",
    },
    {
      phase: "Fase 3",
      date: "3 Juli - 26 Agustus 2025",
      event: "Pengumpulan Karya",
      icon: Upload,
      description:
        "Periode pengumpulan karya desain UI/UX. Tunjukkan kreativitas dan inovasi terbaikmu dalam menyelesaikan tantangan desain.",
    },
    {
      phase: "Fase 4",
      date: "31 Agustus 2025",
      event: "Pengumuman Finalis",
      icon: Megaphone,
      description:
        "Momen yang ditunggu-tunggu! Tim-tim terbaik akan diumumkan dan berhak melaju ke tahap final kompetisi.",
    },
    {
      phase: "Fase 5",
      date: "31 Agustus - 2 September 2025",
      event: "Registrasi Tahap Final",
      icon: ClipboardList,
      description: "Finalis melakukan konfirmasi keikutsertaan dan registrasi untuk mengikuti tahap final kompetisi.",
    },
    {
      phase: "Fase 6",
      date: "3 September 2025",
      event: "Technical Meeting (TM)",
      icon: CalendarDays,
      description: "Briefing teknis untuk finalis mengenai aturan, format presentasi, dan persiapan grand final.",
    },
    {
      phase: "Fase 7",
      date: "17 September 2025",
      event: "Pengumpulan Karya Tahap Final",
      icon: FileText,
      description: "Finalis mengumpulkan karya final yang telah disempurnakan untuk dipresentasikan di grand final.",
    },
    {
      phase: "Final",
      date: "21 September 2025",
      event: "Grand Final dan Talkshow",
      icon: Trophy,
      description:
        "Puncak kompetisi! Presentasi final, talkshow dengan para ahli, dan pengumuman juara Teknovistafest 2025.",
    },
  ]

  const criteriaData = [
    {
      title: "Inovasi dan Kreativitas",
      icon: GanttChartSquare,
      description:
        "Seberapa unik dan orisinal solusi desain yang ditawarkan? Apakah ada elemen kebaruan yang membedakannya dari yang lain?",
    },
    {
      title: "Fungsionalitas dan Pengalaman Pengguna (UX)",
      icon: Users,
      description:
        "Apakah desain mudah digunakan, intuitif, dan secara efektif memecahkan masalah pengguna yang ditargetkan?",
    },
    {
      title: "Estetika dan Antarmuka Pengguna (UI)",
      icon: Award,
      description:
        "Penilaian terhadap aspek visual, termasuk penggunaan warna, tipografi, konsistensi, dan daya tarik visual secara keseluruhan.",
    },
    {
      title: "Penyelesaian Masalah",
      icon: CheckCircle,
      description:
        "Seberapa baik desain mengatasi studi kasus atau masalah yang diberikan? Apakah solusi yang diajukan relevan dan efektif?",
    },
  ]

  // Ganti bagian ini sesuai dengan nama file foto Anda
  const photos2024 = [
    "/DSC_5257.JPG", // sesuaikan dengan nama file asli
    "/DSC_5352.jpg",
    "/DSC_5366.jpg",
    "/DSC_5328.jpg",
    // Tambahkan lebih banyak foto jika ada
  ]

  // Atau jika foto ada di subfolder, contoh:
  // const photos2024 = [
  //   "/images/teknovista2024/opening.jpg",
  //   "/images/teknovista2024/workshop.jpg",
  //   "/images/teknovista2024/presentation.jpg",
  //   "/images/teknovista2024/awarding.jpg",
  //   "/images/teknovista2024/group1.jpg",
  //   "/images/teknovista2024/group2.jpg",
  //   "/images/teknovista2024/networking.jpg",
  //   "/images/teknovista2024/closing.jpg",
  // ]

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
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
          >
            Linimasa Kompetisi
          </motion.h2>

          <div className="relative mx-auto max-w-5xl px-4">
            <div className="absolute left-6 h-full w-0.5 origin-top bg-border/30 md:left-1/2 md:-translate-x-1/2"></div>
            <motion.div
              className="absolute left-6 h-full w-0.5 origin-top bg-gradient-to-b from-secondary via-accent to-secondary md:left-1/2 md:-translate-x-1/2"
              style={{ scaleY: scrollYProgress }}
            />

            <div className="space-y-4 md:space-y-0">
              {timelineData.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16 md:mb-20 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
          >
            Kriteria Penilaian
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion
              type="single"
              collapsible
              className="w-full bg-gradient-to-br from-card/40 to-card/20 rounded-xl p-4 border border-border/50 backdrop-blur-sm"
            >
              {criteriaData.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="border-b-border/30 last:border-b-0">
                  <AccordionTrigger className="text-lg hover:no-underline font-medium text-white px-4 py-6 hover:bg-card/20 rounded-lg transition-all duration-200">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-full bg-secondary/20">
                        <item.icon className="w-5 h-5 text-secondary" />
                      </div>
                      <span className="text-left">{item.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-6 text-muted-foreground leading-relaxed">
                    <div className="ml-12">{item.description}</div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </section>

        <section className="mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-4"
          >
            Recap Teknovistafest 2024
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            Momen-momen seru dari Teknovistafest tahun lalu
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {photos2024.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-card/60 to-card/40 border border-border/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={photo || "/placeholder.svg"}
                    alt={`Teknovistafest 2024 - ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback ke placeholder jika foto tidak ditemukan
                      e.currentTarget.src = `/placeholder.svg?height=300&width=300&text=Photo${index + 1}`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-8"
          >

          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-br from-card/30 to-card/10 py-16 rounded-2xl border border-border/50 backdrop-blur-sm shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Siap Bergabung?</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Jangan lewatkan kesempatan untuk menunjukkan bakat desainmu, belajar dari para ahli, dan menangkan hadiah
            menarik!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-secondary to-accent text-white hover:from-secondary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-xl px-12 py-8 rounded-xl font-bold"
          >
            <Link href="#">Daftar Sekarang Juga!</Link>
          </Button>
          <p className="mt-8 text-sm text-muted-foreground">
            Pendaftaran Gelombang 2 dibuka hingga 20 Agustus 2025.{" "}
            <Link href="/contact" className="underline hover:text-accent transition-colors duration-200">
              Hubungi kami
            </Link>{" "}
            jika ada pertanyaan.
          </p>
        </motion.section>
      </div>
    </div>
  )
}
