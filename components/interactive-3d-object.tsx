"use client"

import { Html, OrbitControls, useAnimations, useGLTF } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense, useRef } from "react"
import type * as THREE from "three"

function Model({ modelPath, ...props }: { modelPath: string; [key: string]: any }) {
  const group = useRef<THREE.Group>(null!)
  const { scene, animations } = useGLTF(modelPath)
  const { actions } = useAnimations(animations, group)

  // Example: Play the first animation if available
  // useEffect(() => {
  //   if (actions && Object.keys(actions).length > 0) {
  //     const firstAnimationName = Object.keys(actions)[0];
  //     actions[firstAnimationName]?.play();
  //   }
  // }, [actions]);

  useFrame((state, delta) => {
    if (group.current) {
      // Simple hover animation or continuous rotation
      group.current.rotation.y += delta * 0.1
    }
  })

  return <primitive ref={group} object={scene} {...props} />
}

// Preload the model
useGLTF.preload("/assets/3d/duck.glb") // Placeholder, replace with your owl model path

export default function Interactive3dObject() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] animate-hero-glow rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#BB63FF" />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#56E1E9" />
        <Suspense
          fallback={
            <Html center>
              <p className="text-white">Memuat model 3D...</p>
            </Html>
          }
        >
          {/* 
            IMPORTANT: Replace "/assets/3d/duck.glb" with the actual path to your owl GLB file.
            Make sure your owl.glb file is in the public/assets/3d/ folder.
            For example, if your owl model is named "owl.glb", the path would be "/assets/3d/owl.glb".
          */}
          <Model modelPath="/assets/3d/duck.glb" scale={1.5} position={[0, -0.5, 0]} />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center p-2 bg-black/30 rounded-md">
        <p className="text-xs text-muted-foreground">Model 3D Interaktif (Placeholder: Bebek)</p>
        <p className="text-xs text-accent2-DEFAULT">Ganti dengan model burung hantu Anda!</p>
      </div>
    </div>
  )
}
