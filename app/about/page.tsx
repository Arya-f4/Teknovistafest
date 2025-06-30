"use client"

import ParallaxHeader from "@/components/parallax-header"
import { motion } from "framer-motion"
import { Building, SparklesIcon, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <ParallaxHeader />
      <div id="content" className="content-section text-foreground relative z-10">
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent1 text-glow">
            Tentang Teknovistafest
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Mengenal lebih dekat visi, misi, dan semangat di balik kompetisi desain UI/UX paling bergengsi di Indonesia.
          </p>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:mb-20 grid md:grid-cols-1 gap-10 md:gap-16 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 flex items-center">
              <Target className="w-10 h-10 mr-4 text-accent1" /> Visi & Misi Kami
            </h2>
            <p className="text-lg text-foreground/95 mb-4 leading-relaxed">
              Teknovistafest bertujuan menjadi katalisator utama dalam menemukan dan mengasah talenta-talenta desainer
              UI/UX muda di Indonesia. Kami percaya bahwa desain yang baik adalah kunci inovasi teknologi yang berdampak
              positif bagi masyarakat.
            </p>
            <ul className="space-y-3 text-muted-foreground text-md">
              {[
                "Menjadi platform kompetisi desain UI/UX terdepan dan paling inspiratif di Indonesia.",
                "Mendorong standar kualitas desain antarmuka dan pengalaman pengguna ke tingkat global.",
                "Menghubungkan talenta desainer muda dengan industri, mentor, dan peluang karir.",
                "Menginspirasi inovasi berkelanjutan melalui desain yang berpusat pada pengguna dan etis.",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <SparklesIcon className="w-5 h-5 mr-3 mt-1 text-accent2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="bg-primary/40 p-8 md:p-12 rounded-xl shadow-2xl mb-16 md:mb-20 border border-border/30"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-accent2 mb-8 flex items-center">
            <Building className="w-10 h-10 mr-4 text-accent2" /> Penyelenggara: D4 Teknik Informatika
            Universitas Airlangga
          </h2>
          <p className="text-lg text-foreground/95 mb-4 leading-relaxed">
            Program Studi D4 Teknik Informatika di Universitas Airlangga berkomitmen untuk menghasilkan lulusan yang
            unggul dan kompetitif dalam bidang teknologi informasi, termasuk pengembangan perangkat lunak cerdas,
            keamanan siber, kecerdasan buatan, dan tentu saja, desain antarmuka pengguna yang inovatif.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Melalui Teknovistafest, kami berupaya memberikan kontribusi nyata dalam pengembangan ekosistem digital
            Indonesia dengan memfasilitasi pertumbuhan para desainer muda. Kami percaya pada kekuatan kolaborasi
            antara akademisi, industri, dan komunitas untuk menciptakan masa depan teknologi yang lebih inklusif dan
            berdampak.
          </p>
        </motion.section>
      </div>
    </>
  )
}
