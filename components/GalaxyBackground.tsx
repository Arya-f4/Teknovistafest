"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

const CustomStars = () => {
    const ref = useRef<THREE.Points>(null);

    // Membuat posisi dan warna bintang sekali saja untuk performa
    const [positions, colors] = useMemo(() => {
        const count = 10000; // Jumlah bintang yang dioptimalkan
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const color = new THREE.Color();
        const radius = 100;

        for (let i = 0; i < count; i++) {
            // Posisi bintang dalam bentuk spiral galaksi
            const r = Math.random() * radius;
            const spinAngle = r * 0.5;
            const branchAngle = (i % 3) / 3 * 2 * Math.PI;

            const randomX = Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? 1 : -1) * 0.5;
            const randomY = Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? 1 : -1) * 0.5;
            const randomZ = Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? 1 : -1) * 0.5;

            positions[i * 3] = Math.cos(branchAngle + spinAngle) * r + randomX;
            positions[i * 3 + 1] = randomY;
            positions[i * 3 + 2] = Math.sin(branchAngle + spinAngle) * r + randomZ;

            // Warna bintang yang sesuai dengan palet
            color.setHSL(0.55 + Math.random() * 0.1, 0.9, 0.6 + Math.random() * 0.2);
            colors.set([color.r, color.g, color.b], i * 3);
        }

        return [positions, colors];
    }, []);

    // Animasi rotasi galaksi
    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * 0.05;
        }
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={colors.length / 3}
                    array={colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.1}
                sizeAttenuation
                vertexColors
                transparent
                opacity={0.9}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
};


const GalaxyBackground = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-[-1]">
            <Canvas
                camera={{ position: [0, 20, 80], fov: 60 }}
                dpr={[1, 1.5]} // Mengoptimalkan pixel ratio untuk performa
            >
                <ambientLight intensity={0.1} />
                <CustomStars />
            </Canvas>
        </div>
    );
};

export default GalaxyBackground;
