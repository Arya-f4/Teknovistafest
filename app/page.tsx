"use client"

import FeaturesSection from "@/components/features-section"
import ParallaxHero from "@/components/ParallaxHero"; // Menggunakan hero parallax baru
import SponsorSlider from "@/components/sponsor-slider"
import StarryBackground from "@/components/StarryBackground"; // Menggunakan background bintang baru
import { useRef } from "react"

export default function HomePage() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={scrollContainerRef} className="relative w-full bg-background">
            <StarryBackground />

            <div className="relative z-10">
                <ParallaxHero />

                {/* Konten setelah hero */}
                <div className="relative bg-background">
                    <FeaturesSection />
                </div>
            </div>

            <SponsorSlider />
        </div>
    )
}
