"use client"

import Image from "next/image"

const sponsors = [
  { name: "Sponsor 1", logo: "/placeholder.svg?width=150&height=60&text=Sponsor+A", url: "#" },
  { name: "Sponsor 2", logo: "/placeholder.svg?width=150&height=60&text=Sponsor+B", url: "#" },
  { name: "Sponsor 3", logo: "/placeholder.svg?width=150&height=60&text=Sponsor+C", url: "#" },
  { name: "Sponsor 4", logo: "/placeholder.svg?width=150&height=60&text=Sponsor+D", url: "#" },
  { name: "Sponsor 5", logo: "/placeholder.svg?width=150&height=60&text=Sponsor+E", url: "#" },
  { name: "Sponsor 6", logo: "/placeholder.svg?width=150&height=60&text=Sponsor+F", url: "#" },
  { name: "Sponsor 7", logo: "/placeholder.svg?width=150&height=60&text=Sponsor+G", url: "#" },
  { name: "Sponsor 8", logo: "/placeholder.svg?width=150&height=60&text=Sponsor+H", url: "#" },
]

// Duplicate sponsors for seamless loop
const duplicatedSponsors = [...sponsors, ...sponsors]

export default function SponsorSlider() {
  return (
    <div className="w-full py-12 bg-primary/30 overflow-hidden">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Didukung Oleh</h2>
        <p className="text-muted-foreground mt-2">
          Terima kasih kepada para sponsor yang telah mendukung Teknovistafest.
        </p>
      </div>
      <div className="relative w-full h-20 group flex overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex items-center justify-around flex-nowrap animate-slide group-hover:animation-pause">
          {duplicatedSponsors.map((sponsor, index) => (
            <a
              key={`${sponsor.name}-${index}`}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-6 flex-shrink-0"
            >
              <Image
                src={sponsor.logo || "/placeholder.svg"}
                alt={sponsor.name}
                width={150}
                height={60}
                className="object-contain h-12 filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
