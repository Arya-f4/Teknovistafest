"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Building, SparklesIcon, Target } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"

function ParallaxImage({
  src,
  alt,
  width,
  height,
  className,
}: { src: string; alt: string; width: number; height: number; className?: string }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])

  return (
    <div ref={ref} className="overflow-hidden rounded-xl">
      <motion.div style={{ y }}>
        <Image src={src || "/placeholder.svg"} alt={alt} width={width} height={height} className={className} />
      </motion.div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <div className="bg-transparent text-foreground py-16 md:py-24 relative z-10">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-accent2-DEFAULT to-accent1-DEFAULT text-glow">
            Tentang Teknovistafest
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Mengenal lebih dekat visi, misi, dan semangat di balik kompetisi desain UI/UX paling bergengsi di Indonesia.
          </p>
        </header>

        <section className="mb-16 md:mb-20 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-DEFAULT mb-6 flex items-center">
              <Target className="w-10 h-10 mr-4 text-accent1-DEFAULT" /> Visi & Misi Kami
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
                  <SparklesIcon className="w-5 h-5 mr-3 mt-1 text-accent2-DEFAULT flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <ParallaxImage
              src="/placeholder.svg?width=550&height=400&text=Event+Highlight"
              alt="Suasana Teknovistafest atau Ilustrasi Futuristik"
              width={550}
              height={400}
              className="rounded-xl shadow-2xl shadow-secondary-DEFAULT/40"
            />
          </div>
        </section>

        <section className="bg-primary-DEFAULT/40 p-8 md:p-12 rounded-xl shadow-2xl mb-16 md:mb-20 border border-secondary-DEFAULT/30">
          <h2 className="text-3xl md:text-4xl font-bold text-accent2-DEFAULT mb-8 flex items-center">
            <Building className="w-10 h-10 mr-4 text-accent2-DEFAULT" /> Penyelenggara: D4 Teknik Informatika
            Universitas Airlangga
          </h2>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
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
            </div>
            <div className="flex justify-center md:justify-end">
              <ParallaxImage
                src="/placeholder.svg?width=250&height=250&text=Logo+Unair"
                alt="Logo Universitas Airlangga atau Prodi TI"
                width={250}
                height={250}
                className="rounded-full bg-deepspace p-3 shadow-xl shadow-accent2-DEFAULT/50"
              />
            </div>
          </div>
        </section>

        {/* Other sections can also have parallax images */}
      </div>
    </div>
  )
}
