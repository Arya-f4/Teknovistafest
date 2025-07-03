"use client";

import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';
import anime from 'animejs';

// Komponen 3D untuk Planet Saturnus (dioptimalkan)
const Saturn = () => {
    const groupRef = useRef<THREE.Group>(null);

    useFrame(({ clock }) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = clock.getElapsedTime() * 0.04;
        }
    });

    return (
        <group ref={groupRef} position={[20, -10, -50]} rotation={[0.1, -0.4, -0.1]}>
            <mesh>
                <sphereGeometry args={[6, 32, 32]} />
                <meshStandardMaterial color="hsl(35, 57%, 75%)" roughness={0.9} />
            </mesh>
            <mesh rotation-x={Math.PI / 2.2}>
                <torusGeometry args={[9, 1.8, 2, 64]} />
                <meshStandardMaterial color="hsl(35, 43%, 68%)" roughness={1} side={THREE.DoubleSide} />
            </mesh>
        </group>
    );
};

// Latar belakang utama yang menggabungkan 2D dan 3D
const CosmicBackground = () => {
    const canvas2dRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvas2dRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let w = canvas.width = window.innerWidth;
        let h = canvas.height = window.innerHeight;

        const handleResize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        const stars = Array.from({ length: 600 }, () => ({
            x: Math.random() * w,
            y: Math.random() * h,
            radius: Math.random() * 1.5,
            alpha: Math.random(),
            speed: Math.random() * 0.2 + 0.1
        }));

        const shootingStars: any[] = [];

        function createShootingStar() {
            if (Math.random() < 0.02) {
                shootingStars.push({
                    x: Math.random() * w,
                    y: Math.random() * h / 2,
                    len: Math.random() * 80 + 10,
                    speed: Math.random() * 10 + 6,
                    alpha: 1,
                });
            }
        }

        function animate() {
            ctx.clearRect(0, 0, w, h);
            
            // Draw stars
            ctx.fillStyle = 'white';
            stars.forEach(star => {
                star.y += star.speed;
                if (star.y > h) {
                    star.y = 0;
                    star.x = Math.random() * w;
                }
                ctx.globalAlpha = star.alpha;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            // Draw shooting stars
            createShootingStar();
            shootingStars.forEach((ss, index) => {
                ss.x += ss.speed;
                ss.alpha *= 0.98;

                if (ss.alpha < 0.01 || ss.x > w) {
                    shootingStars.splice(index, 1);
                }
                
                ctx.globalAlpha = ss.alpha;
                ctx.beginPath();
                ctx.moveTo(ss.x, ss.y);
                ctx.lineTo(ss.x - ss.len, ss.y);
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
                ctx.lineWidth = 1;
                ctx.stroke();
            });

            requestAnimationFrame(animate);
        }

        animate();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="absolute top-0 left-0 w-full h-full z-[-1]">
            <canvas ref={canvas2dRef} className="absolute inset-0" />
            <div className="absolute inset-0 opacity-70">
                <Canvas camera={{ position: [0, 0, 10], fov: 75 }} dpr={[1, 1.5]}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[-30, 20, 10]} intensity={3.5} color="hsl(var(--accent1))" />
                    <pointLight position={[30, -15, -20]} intensity={3} color="hsl(var(--accent2))" />
                    <Saturn />
                </Canvas>
            </div>
        </div>
    );
};

export default CosmicBackground;
