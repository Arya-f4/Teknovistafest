"use client"

import React, { useEffect, useRef } from 'react';

const AnimatedDigitalBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const anime = (window as any).anime;
        if (!anime) {
            console.error("Anime.js is not loaded yet.");
            return;
        }

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = document.body.scrollHeight; // Set height to full page height
        const mousePosition = { x: width / 2, y: height / 2 };
        const particles: any[] = [];
        const particleCount = 50;

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = document.body.scrollHeight;
        };

        window.addEventListener('resize', handleResize);
        document.addEventListener('mousemove', (e) => {
            mousePosition.x = e.pageX;
            mousePosition.y = e.pageY;
        });

        class Particle {
            x: number;
            y: number;
            radius: number;
            color: string;
            alpha: number;
            vx: number;
            vy: number;
            
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.radius = anime.random(1, 3);
                this.color = `hsl(${anime.random(180, 280)}, 100%, 70%)`;
                this.alpha = anime.random(0.5, 1);
                this.vx = anime.random(-1, 1);
                this.vy = anime.random(-1, 1);
            }

            draw() {
                ctx!.beginPath();
                ctx!.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx!.fillStyle = this.color;
                ctx!.globalAlpha = this.alpha;
                ctx!.fill();
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const animate = () => {
            ctx!.clearRect(0, 0, width, height);
            
            particles.forEach(p => {
                p.update();
                p.draw();
                
                // Draw lines to nearby particles
                particles.forEach(p2 => {
                    const distance = Math.hypot(p.x - p2.x, p.y - p2.y);
                    if (distance < 150) {
                        ctx!.beginPath();
                        ctx!.moveTo(p.x, p.y);
                        ctx!.lineTo(p2.x, p2.y);
                        ctx!.strokeStyle = p.color;
                        ctx!.globalAlpha = (1 - (distance / 150)) * 0.5;
                        ctx!.stroke();
                    }
                });

                // Draw line to cursor
                const cursorDistance = Math.hypot(p.x - mousePosition.x, p.y - mousePosition.y);
                if (cursorDistance < 300) {
                     ctx!.beginPath();
                     ctx!.moveTo(p.x, p.y);
                     ctx!.lineTo(mousePosition.x, mousePosition.y);
                     ctx!.strokeStyle = p.color;
                     ctx!.globalAlpha = (1 - (cursorDistance / 300)) * 0.8;
                     ctx!.stroke();
                }
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-[-1]" />;
};

export default AnimatedDigitalBackground;
