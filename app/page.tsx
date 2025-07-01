"use client"

import Interactive3dObject from "@/components/interactive-3d-object"
import SponsorSlider from "@/components/sponsor-slider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Award, Lightbulb, Rocket, Users } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import React from "react"
import AnimatedDigitalBackground from "@/components/AnimatedDigitalBackground" // Import komponen baru

// Komponen Kartu Fitur dengan gaya baru
const FeatureCard = ({ icon, title, description, index }: { icon: React.ElementType, title: string, description: string, index: number }) => (
  <motion.div 
    className="bg-primary/20 backdrop-blur-md border border-border/50 rounded-xl p-8 text-center h-full group transition-all duration-300 hover:border-secondary hover:bg-secondary/10 hover:shadow-[0_0_30px_hsl(var(--secondary)/0.3)]"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
  >
    <div className="mx-auto mb-6 inline-block rounded-full bg-primary p-4 border-2 border-border group-hover:border-secondary transition-colors duration-300">
      {React.createElement(icon, { className: "h-10 w-10 text-secondary group-hover:text-accent2 transition-colors duration-300" })}
    </div>
    <h3 className="mb-3 text-2xl font-bold text-white">{title}</h3>
    <p className="text-muted-foreground text-md leading-relaxed">{description}</p>
  </motion.div>
)

export default function HomePage() {
  const features = [
    { icon: Rocket, title: "Luncurkan Karirmu", description: "Jadikan kompetisi ini sebagai batu loncatan untuk memasuki industri desain profesional." },
    { icon: Award, title: "Hadiah Spektakuler", description: "Rebut total hadiah puluhan juta rupiah dan pengakuan sebagai desainer UI/UX berbakat." },
    { icon: Users, title: "Jaringan Profesional", description: "Terhubung dengan para ahli industri, mentor, dan sesama desainer dari seluruh Indonesia." },
    { icon: Lightbulb, title: "Asah Keterampilan", description: "Tantang dirimu dengan studi kasus nyata dan dapatkan masukan berharga dari para juri ahli." },
  ]

  return (
    <div className="relative w-full overflow-hidden bg-background">
      <AnimatedDigitalBackground />
      
      <div className="relative z-10 container mx-auto px-4 pt-16 pb-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[80vh]">
          <div className="text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tighter"
              style={{ textShadow: '0 0 20px hsl(var(--secondary)/0.5)' }}
            >
              Kompetisi Desain UI/UX Tahunan
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent1">
                Teknovistafest
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl mx-auto md:mx-0 text-lg text-muted-foreground"
            >
              Wadah bagi para desainer berbakat di Indonesia untuk bersaing, berinovasi, dan menjadi yang terbaik di
              panggung nasional.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
            >
              <Input
                type="email"
                placeholder="Masukkan email Anda"
                className="w-full sm:w-auto max-w-xs bg-primary/70 border-border focus:ring-2 focus:ring-accent h-11 placeholder:text-muted-foreground/70"
              />
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full sm:w-auto h-11"
              >
                Daftar Sekarang
              </Button>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-4 text-sm text-muted-foreground"
            >
              Atau{" "}
              <Link href="/competition#details" className="text-secondary hover:underline">
                Lihat Detail Lomba
              </Link>
            </motion.p>
          </div>
          
          <div className="w-full h-[400px] md:h-[500px] lg:h-full">
            <Interactive3dObject />
          </div>
        </div>

        <section className="py-24 my-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">Kenapa Ikut Teknovistafest?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <FeatureCard key={feature.title} {...feature} index={index} />
                ))}
            </div>
        </section>

      </div>
      
      <SponsorSlider />
    </div>
  )
}
