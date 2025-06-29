"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react';

const ParallaxHeader = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="parallax-section">
      <Image
        src="/parallax/stars.png"
        alt="Stars"
        width={1920}
        height={1080}
        id="stars"
        style={{ left: `${offsetY * 1.25}px` }}
      />
      <Image
        src="/parallax/moon.png"
        alt="Moon"
        width={1920}
        height={1080}
        id="moon"
        style={{ top: `${offsetY * 1.5}px` }}
      />
      <Image
        src="/parallax/mountains_behind.png"
        alt="Mountains Behind"
        width={1920}
        height={1080}
        id="mountains_behind"
        style={{ top: `${offsetY * 0.5}px` }}
      />
      <h2 id="text" style={{ marginRight: `${offsetY * 4}px`, marginTop: `${offsetY * 0.5}px` }}>
        Teknovistafest
      </h2>
      <a href="#content" id="btn-explore" style={{ marginTop: `${offsetY * 1.5}px` }}>
        Explore
      </a>
      <Image
        src="/parallax/mountains_front.png"
        alt="Mountains Front"
        width={1920}
        height={1080}
        id="mountains_front"
        style={{ top: `${offsetY * 0}px` }}
      />
    </section>
  );
};

export default ParallaxHeader;