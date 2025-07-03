"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import { Award, Lightbulb, Rocket, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        icon: <Rocket className="h-10 w-10 text-accent2" />,
        title: "Luncurkan Orbit Karirmu",
        description: "Jadikan kompetisi ini sebagai launchpad untuk memasuki galaksi industri desain profesional.",
    },
    {
        icon: <Award className="h-10 w-10 text-accent1" />,
        title: "Raih Hadiah Kosmik",
        description: "Rebut total hadiah puluhan juta rupiah dan pengakuan sebagai bintang desainer UI/UX berbakat.",
    },
    {
        icon: <Users className="h-10 w-10 text-secondary" />,
        title: "Bangun Konstelasi Jaringan",
        description: "Terhubung dengan para ahli industri, mentor, dan sesama desainer dari seluruh penjuru semesta.",
    },
    {
        icon: <Lightbulb className="h-10 w-10 text-accent2" />,
        title: "Nyalakan Supernova Kreatifmu",
        description: "Tantang dirimu dengan studi kasus nyata dan dapatkan masukan berharga dari para juri ahli.",
    },
];

const FeaturesSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".feature-card");

        cards.forEach((card) => {
            gsap.fromTo(card,
                { autoAlpha: 0, y: 100, scale: 0.9 },
                {
                    autoAlpha: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.7,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full py-24 md:py-32 bg-transparent overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Jelajahi Alam Semesta Peluang</h2>
                    <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Setiap fitur adalah sebuah dunia baru yang menanti untuk Anda taklukkan.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card bg-card/50 p-8 rounded-2xl border border-border/20 shadow-2xl shadow-black/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-accent1/20 hover:border-accent1/40">
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
