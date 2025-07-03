"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// Daftar sponsor dengan nama yang lebih tematik
const sponsors = [
  { name: "Galactic Ventures", logo: "/placeholder.svg?width=180&height=70&text=Galactic+Ventures" },
  { name: "Nebula Corp", logo: "/placeholder.svg?width=180&height=70&text=Nebula+Corp" },
  { name: "Starlight Tech", logo: "/placeholder.svg?width=180&height=70&text=Starlight+Tech" },
  { name: "Cosmo-Innovations", logo: "/placeholder.svg?width=180&height=70&text=Cosmo-Innovations" },
  { name: "Orion Systems", logo: "/placeholder.svg?width=180&height=70&text=Orion+Systems" },
  { name: "Supernova Solutions", logo: "/placeholder.svg?width=180&height=70&text=Supernova+Solutions" },
  { name: "Astro-Dynamics", logo: "/placeholder.svg?width=180&height=70&text=Astro-Dynamics" },
  { name: "Quantum Leap", logo: "/placeholder.svg?width=180&height=70&text=Quantum+Leap" },
];

// Duplikasi untuk loop yang mulus
const duplicatedSponsors = [...sponsors, ...sponsors];

const SponsorSlider = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const scroller = scrollerRef.current;
        if (!scroller) return;

        // Pin seksi sponsor dan animasikan scroll horizontal
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                pin: true,
                start: "top top",
                end: () => `+=${scroller.scrollWidth / 2}`, // Gulir sejauh setengah dari total lebar
                scrub: 1.5,
                invalidateOnRefresh: true,
            }
        });

        tl.to(scroller, {
            xPercent: -50, // Bergerak sejauh 50% dari lebar scroller
            ease: "none"
        });

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-primary/30">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 p-4">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-shadow-lg shadow-secondary/50">
                    Didukung Oleh Para Visioner
                </h2>
                <p className="text-muted-foreground max-w-lg">
                    Terima kasih kepada para sponsor yang telah menjadi konstelasi pendukung dalam perjalanan inovasi Teknovistafest.
                </p>
            </div>
            <div ref={scrollerRef} className="flex h-full w-max items-center">
                {duplicatedSponsors.map((sponsor, index) => (
                    <div key={index} className="sponsor-logo mx-10 md:mx-16 flex-shrink-0">
                        <Image
                            src={sponsor.logo}
                            alt={sponsor.name}
                            width={180}
                            height={90}
                            className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100 hover:scale-110"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SponsorSlider;
