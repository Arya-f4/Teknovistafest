"use client"

import { Html, OrbitControls, Sparkles, useAnimations, useGLTF } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense, useRef, useEffect } from "react"
import type * as THREE from "three"

function Model({ modelPath, ...props }: { modelPath: string; [key: string]: any }) {
  const group = useRef<THREE.Group>(null!)
  const { scene, animations } = useGLTF(modelPath) 
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    const animationName = Object.keys(actions)[0]
    if (actions[animationName]) {
      actions[animationName]?.play();
    }
  }, [actions]);

  // Animasi mengambang untuk burung hantu
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.position.y = -2 + Math.sin(t * 0.5) * 0.1;
      group.current.rotation.z = Math.sin(t * 0.3) * 0.03;
      group.current.rotation.x = Math.cos(t * 0.2) * 0.02;
    }
  });

  return <primitive ref={group} object={scene} {...props} />
}

useGLTF.preload("/owl.glb") 

export default function Interactive3dObject() {
  return (
    <div className="relative w-full h-full min-h-[300px] md:min-h-[400px] rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#56E1E9" />
        <pointLight position={[-10, -5, 5]} intensity={1.5} color="#BB63FF" />
        <directionalLight position={[0, -10, 0]} intensity={0.5} color="#5B58EB" />
        <Sparkles count={50} scale={15} size={10} speed={0.4} color="#BB63FF" />

        <Suspense
          fallback={
            <Html center>
              <p className="text-white">Memuat model 3D...</p>
            </Html>
          }
        >
          {/* Pijakan telah dihapus */}
          <Model modelPath="/owl.glb" scale={2.2} position={[0, -2, 0]} />
        </Suspense>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={false} 
        />
      </Canvas>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center p-2 bg-black/40 rounded-md backdrop-blur-sm">
        <p className="text-xs text-muted-foreground">Model 3D Interaktif: Burung Hantu</p>
      </div>
    </div>
  )
}
