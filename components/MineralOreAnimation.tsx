"use client"

import React, { useEffect, useRef } from 'react';

// Tidak perlu import anime.js karena akan diakses dari window object
// import anime from 'animejs';

const MineralOreAnimation = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        // Mengambil anime dari window object
        const anime = (window as any).anime;
        if (!anime) {
            console.error("Anime.js is not loaded yet.");
            return;
        }

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let w = canvas.width = window.innerWidth;
        let h = canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;

        const handleResize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        const particleCount = 40;
        const particles: any[] = [];
        const colors = ['#5B58EB', '#BB63FF', '#56E1E9', '#FFFFFF'];

        const createParticles = () => {
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    radius: anime.random(1, 4),
                    color: colors[anime.random(0, colors.length - 1)],
                    alpha: anime.random(0.3, 1),
                    vx: anime.random(-0.5, 0.5),
                    vy: anime.random(-0.5, 0.5),
                });
            }
        };

        const animateParticles = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, w, h);
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < -p.radius) p.x = w + p.radius;
                if (p.x > w + p.radius) p.x = -p.radius;
                if (p.y < -p.radius) p.y = h + p.radius;
                if (p.y > h + p.radius) p.y = -p.radius;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
                ctx.globalAlpha = p.alpha;
                ctx.fillStyle = p.color;
                ctx.fill();
            });
        };
        
        createParticles();
        const interval = setInterval(animateParticles, 1000 / 30); // 30 FPS

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />;
};

export default MineralOreAnimation;
