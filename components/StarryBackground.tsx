"use client";

import { useEffect, useRef } from 'react';

const StarryBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = document.body.scrollHeight;
        let stars: { x: number, y: number, radius: number, alpha: number, vy: number }[] = [];
        const starCount = 400; // Jumlah bintang yang dioptimalkan

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = document.body.scrollHeight;
            stars = []; // Reset bintang saat ukuran berubah
            createStars();
        };

        window.addEventListener('resize', handleResize);

        function createStars() {
            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    radius: Math.random() * 1.2,
                    alpha: Math.random() * 0.5 + 0.5,
                    vy: Math.random() * 0.2 + 0.1,
                });
            }
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';

            stars.forEach(star => {
                star.y += star.vy;
                if (star.y > height) {
                    star.y = 0;
                    star.x = Math.random() * width;
                }

                ctx.globalAlpha = star.alpha;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(animate);
        }

        createStars();
        animate();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-[-1]" />;
};

export default StarryBackground;
