"use client"

import { Html, OrbitControls, Sparkles, useAnimations, useGLTF } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense, useRef, useEffect } from "react"
import * as THREE from "three"
import { MotionValue } from "framer-motion"

function Model({ modelPath, scrollYProgress, ...props }: { modelPath: string; scrollYProgress: MotionValue<number>; [key: string]: any }) {
  const group = useRef<THREE.Group>(null!)
  const { scene, animations } = useGLTF(modelPath) 
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    const animationName = Object.keys(actions)[0]
    if (actions[animationName]) {
      actions[animationName]?.play();
    }
  }, [actions]);

  // useFrame untuk menganimasikan model pada setiap frame
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const scrollValue = scrollYProgress.get(); 

    if (group.current) {
      // Animasi mengambang yang sudah ada
      group.current.position.y = -2 + Math.sin(t * 0.5) * 0.1;

      // Target rotasi berdasarkan scroll
      const targetRotationY = scrollValue * (-Math.PI / 2); // Rotasi 90 derajat
      const targetRotationX = Math.sin(scrollValue * Math.PI) * 0.1; // Sedikit anggukan
      
      // Interpolasi halus (lerp) untuk transisi yang mulus
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotationY, 0.05);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetRotationX, 0.05);
      
      // Pastikan kamera selalu melihat ke arah burung hantu
      state.camera.lookAt(0, -1, 0);
    }
  });

  return <primitive ref={group} object={scene} {...props} />
}

useGLTF.preload("/owl.glb") 

export default function Interactive3dObject({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  return (
    <div className="relative w-full h-full p-4">
      {/* Posisi kamera dikembalikan ke nilai yang wajar untuk memperbaiki zoom */}
      <Canvas camera={{ position: [0, 0, 240], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <hemisphereLight intensity={0.6} groundColor="hsl(var(--primary))" />
        <pointLight position={[10, 10, 10]} intensity={2.5} color="#56E1E9" />
        <pointLight position={[-10, -5, 5]} intensity={2.5} color="#BB63FF" />
        <directionalLight position={[0, -10, 0]} intensity={0.8} color="#5B58EB" />
        {/* Skala sparkles disesuaikan kembali */}
        <Sparkles count={50} scale={25} size={15} speed={0.4} color="#BB63FF" />

        <Suspense
          fallback={
            <Html center>
              <p className="text-white">Memuat model 3D...</p>
            </Html>
          }
        >
          {/* Skala model dikembalikan ke nilai semula */}
          <Model modelPath="/owl.glb" scale={2.2} position={[0, -2, 0]} scrollYProgress={scrollYProgress} />
        </Suspense>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={false} 
        />
      </Canvas>
    </div>
  )
}
