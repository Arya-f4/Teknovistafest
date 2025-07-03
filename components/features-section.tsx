"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Briefcase, Lightbulb, Trophy, Users } from "lucide-react"
import { useRef } from "react"
import FeaturesOwl from "./FeaturesOwl"

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: <Trophy className="h-8 w-8 text-secondary" />,
    title: "Uji Skill & Menangkan Hadiah",
    description: "Tantang dirimu dengan studi kasus nyata dari industri dan raih total hadiah puluhan juta rupiah.",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-secondary" />,
    title: "Portofolio Kelas Dunia",
    description: "Hasil karyamu akan menjadi portofolio yang memukau untuk dilirik oleh perusahaan-perusahaan teknologi ternama.",
  },
  {
    icon: <Users className="h-8 w-8 text-secondary" />,
    title: "Networking Luas",
    description: "Bertemu dan terhubung dengan para mentor ahli, juri profesional, dan sesama desainer berbakat dari seluruh Indonesia.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-secondary" />,
    title: "Wawasan Industri Terkini",
    description: "Dapatkan masukan berharga dan ilmu terbaru langsung dari para praktisi yang berpengalaman di bidang UI/UX.",
  },
]

export default function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          end: "center 70%",
          scrub: 1,
        },
      })

      tl.to(".cards-container", { width: "60%", ease: "power2.inOut" }, 0)
      tl.to(".owl-container", { width: "40%", ease: "power2.inOut" }, 0)
      tl.from(".owl-container", { opacity: 0, ease: "power1.in" }, 0)

    },
    { scope: containerRef }
  )

  return (
    <section ref={containerRef} className="relative w-full py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center mb-12 sm:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Kenapa Harus Mengikuti Teknovistafest?
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Ini bukan sekadar lomba. Ini adalah kesempatan emas untuk melesatkan karirmu di industri teknologi.
          </p>
        </div>

        <div className="flex w-full items-center" style={{ minHeight: '550px' }}>
          <div className="cards-container w-full">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col items-start rounded-lg bg-card/50 p-5 shadow-lg backdrop-blur-sm">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold leading-7 text-white">{feature.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="owl-container w-0 h-[500px] lg:h-[600px] flex-shrink-0 overflow-hidden">
            <FeaturesOwl />
          </div>
        </div>
      </div>
    </section>
  )
}
