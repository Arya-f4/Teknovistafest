"use client";

import React, { useEffect, useRef } from 'react';

const AnimatedSpaceBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        const mousePosition = { x: width / 2, y: height / 2 };
        const particles: any[] = [];
        const particleCount = 50; // Jumlah partikel dioptimalkan

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        const handleMouseMove = (e: MouseEvent) => {
            mousePosition.x = e.clientX;
            mousePosition.y = e.clientY;
        };
        window.addEventListener('mousemove', handleMouseMove);

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
                this.radius = Math.random() * 1.5 + 0.5;
                this.color = `hsl(${200 + Math.random() * 60}, 100%, 75%)`;
                this.alpha = Math.random() * 0.5 + 0.2;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
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

        let animationFrameId: number;
        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            particles.forEach(p => {
                p.update();
                p.draw();
                
                // Draw lines to nearby particles
                particles.forEach(p2 => {
                    const distance = Math.hypot(p.x - p2.x, p.y - p2.y);
                    if (distance < 150) { // Increased distance for more connections
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = p.color;
                        ctx.globalAlpha = (1 - (distance / 150)) * 0.3;
                        ctx.stroke();
                    }
                });
                 // Draw line to cursor
                 const cursorDistance = Math.hypot(p.x - mousePosition.x, p.y - mousePosition.y);
                 if (cursorDistance < 250) {
                      ctx.beginPath();
                      ctx.moveTo(p.x, p.y);
                      ctx.lineTo(mousePosition.x, mousePosition.y);
                      ctx.strokeStyle = `hsl(183, 78%, 60%)`; // accent2 color
                      ctx.globalAlpha = (1 - (cursorDistance / 250)) * 0.5;
                      ctx.stroke();
                 }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-[-1]" />;
};

export default AnimatedSpaceBackground;
