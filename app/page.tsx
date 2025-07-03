"use client"

import FeaturesSection from "@/components/features-section"
import ParallaxHero from "@/components/ParallaxHero";
import SponsorSlider from "@/components/sponsor-slider"
import StarryBackground from "@/components/StarryBackground";
import { useGLTF } from "@react-three/drei"; // Import useGLTF
import { useEffect, useRef } from "react"

export default function HomePage() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Preload the 3D model once when the page loads
    useEffect(() => {
        useGLTF.preload('/owl.glb')
    }, [])

    return (
        <div ref={scrollContainerRef} className="relative w-full bg-background">
            <StarryBackground />

            <div className="relative z-10">
                <ParallaxHero />

                <div className="relative bg-background">
                    <FeaturesSection />
                </div>
            </div>

            <SponsorSlider />
        </div>
    )
}
