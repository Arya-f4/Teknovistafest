"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

// Data testimoni baru dengan gambar full-size
const testimonials = [
  {
    name: "Tim Juara 1",
    title: "Web Design Competition 2023",
    quote:
      "Pengalaman di Teknovistafest sangat luar biasa. Kami belajar banyak tentang kerja tim, manajemen waktu, dan tentu saja, mengasah skill desain kami hingga ke batasnya.",
    image: "/testimonials/juara1.jpg", // Ganti dengan path gambar Anda, misal: /testimonials/DSC_5356.jpg
  },
  {
    name: "Alya Safitri",
    title: "Finalis UI/UX Competition",
    quote:
      "Mendapatkan feedback langsung dari para praktisi industri adalah bagian terbaik dari kompetisi ini. Sangat membuka wawasan dan memotivasi.",
    image: "/testimonials/finalis1.jpg", 
  },
  {
    name: "Rian Hidayat",
    title: "Peserta Workshop",
    quote:
      "Workshop yang diadakan sangat relevan dengan kebutuhan industri saat ini. Saya mendapatkan banyak ilmu baru yang bisa langsung diterapkan.",
    image: "/testimonials/peserta1.jpg",
  },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Pin seksi testimoni dan animasikan scroll horizontal
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        start: "top top",
        end: () => `+=${scroller.scrollWidth - window.innerWidth}`,
        scrub: 1.5,
        invalidateOnRefresh: true,
      }
    });

    tl.to(scroller, {
      x: () => -(scroller.scrollWidth - window.innerWidth),
      ease: "none"
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden">
      <div className="absolute top-16 left-1/2 -translate-x-1/2 z-20 text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Gema dari Galaksi Teknovista</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Dengarkan apa kata para bintang yang telah bersinar di kompetisi kami.</p>
      </div>

      <div ref={scrollerRef} className="flex h-full w-max items-center px-[5vw]">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative mx-4 flex h-[70vh] w-[80vw] max-w-md flex-shrink-0 flex-col justify-end overflow-hidden rounded-2xl border border-border/20 shadow-2xl shadow-black/50 md:w-[30vw]"
          >
            <Image
              src={testimonial.image}
              alt={`Testimoni dari ${testimonial.name}`}
              layout="fill"
              className="object-cover z-0"
              onError={(e) => { e.currentTarget.src = `https://placehold.co/600x800/0e112a/9097b8?text=Image+Not+Found` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
            <div className="relative z-20 p-6 text-white">
              <blockquote className="text-lg font-medium italic mb-3">
                "{testimonial.quote}"
              </blockquote>
              <h4 className="font-bold text-xl text-accent">{testimonial.name}</h4>
              <p className="text-foreground/80">{testimonial.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
