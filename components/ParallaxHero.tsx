"use client";

import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';
import Interactive3dObject from './interactive-3d-object';
import { Button } from './ui/button';
import { Input } from './ui/input';

gsap.registerPlugin(ScrollTrigger);

const ParallaxHero = () => {
    const heroRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: heroRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: 1.5, // Membuat scrub lebih halus
            },
        });

        // Mengurangi pergerakan untuk efek yang lebih halus dan tidak terlalu cepat
        tl.to('.parallax-bg', { y: '30%', scale: 1.2, opacity: 0.5 }, 0);
        tl.to('.parallax-mid', { y: '20%', scale: 1.15 }, 0);
        tl.to('.parallax-fore', { y: '10%', scale: 1.1 }, 0);
        
        // Animasi untuk konten (teks dan 3D) agar bergerak ke atas saat scroll
        tl.to('.hero-text-content', { y: '-40%', opacity: 0 }, 0);
        tl.to('.hero-3d-object', { y: '-35%', opacity: 0 }, 0);

    }, { scope: heroRef });

    return (
        <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
            {/* Lapisan Parallax dengan z-index yang benar */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/home-parallax/aurora.png"
                    alt="Latar Belakang Aurora Penuh"
                    layout="fill"
                    className="parallax-bg object-cover"
                    priority
                />
                <Image
                    src="/home-parallax/midmountain.png"
                    alt="Pegunungan Latar Tengah"
                    layout="fill"
                    className="parallax-mid object-cover"
                />
                <Image
                    src="/home-parallax/rock.png"
                    alt="Bebatuan Latar Depan"
                    layout="fill"
                    className="parallax-fore object-cover"
                />
            </div>

            {/* Konten Hero dengan z-index lebih tinggi */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full h-full container mx-auto px-4">
                {/* Teks di Kiri */}
                <div className="hero-text-content w-full md:w-1/2 text-center md:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tighter"
                        style={{ textShadow: '0 0 30px hsl(var(--secondary)/0.8)' }}
                    >
                        Kompetisi Desain UI/UX Tahunan
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
                            Teknovistafest
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-6 max-w-xl mx-auto md:mx-0 text-lg text-foreground/80"
                    >
                        Wadah bagi para desainer berbakat di Indonesia untuk bersaing, berinovasi, dan menjadi yang terbaik di panggung nasional.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
                    >
                        <Input
                            type="email"
                            placeholder="Masukkan email Anda"
                            className="w-full sm:w-auto max-w-xs bg-input/70 border-border focus:ring-2 focus:ring-ring h-11 placeholder:text-muted-foreground/70 text-white"
                        />
                        <Button
                            size="lg"
                            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold w-full sm:w-auto h-11"
                        >
                            Daftar Sekarang
                        </Button>
                    </motion.div>
                </div>

                {/* Objek 3D Burung Hantu di Kanan */}
                <div className="hero-3d-object w-full md:w-1/2 h-full flex items-center justify-center">
                    <div className="w-full h-full">
                         <Interactive3dObject scrollYProgress={null} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ParallaxHero;
