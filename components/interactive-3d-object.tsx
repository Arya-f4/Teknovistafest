"use client"

import { Html, OrbitControls, useAnimations, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useEffect, useRef } from "react"
import type * as THREE from "three"

function Model({ modelPath, ...props }: { modelPath: string; [key: string]: any }) {
  const group = useRef<THREE.Group>(null!)
  // IMPORTANT: Pastikan file /owl.glb ada di dalam folder public/
  const { scene, animations } = useGLTF(modelPath) 
  const { actions } = useAnimations(animations, group)

  // Memutar animasi pertama yang ada di dalam model GLB.
  useEffect(() => {
    const animationName = Object.keys(actions)[0]
    if (actions[animationName]) {
      actions[animationName]?.play();
    }
  }, [actions]);

  // Rotasi otomatis telah dihapus sesuai permintaan.
  // useFrame((state, delta) => {
  //   if (group.current) {
  //     group.current.rotation.y += delta * 0.4 
  //   }
  // })

  return <primitive ref={group} object={scene} {...props} />
}

// Preload model untuk loading yang lebih cepat
useGLTF.preload("/owl.glb") 

export default function Interactive3dObject() {
  return (
    <div className="relative w-full h-full min-h-[300px] md:min-h-[400px] rounded-lg overflow-hidden">
      {/* - CARA ZOOM OUT: Nilai Z pada `position` kamera ditingkatkan (misal, dari 8 menjadi 12).
        - Semakin tinggi nilai Z, semakin jauh kamera dari objek, memberikan efek 'zoom out'.
      */}
      <Canvas camera={{ position: [0, 0, 240], fov: 45 }}>
        <ambientLight intensity={1.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#8A2BE2" />
        <directionalLight position={[-5, -5, -5]} intensity={0.7} color="#4682B4" />
        <Suspense
          fallback={
            <Html center>
              <p className="text-white">Memuat model 3D...</p>
            </Html>
          }
        >
          {/* - Skala dan posisi disesuaikan agar seluruh badan burung hantu terlihat.
           */}
          <Model modelPath="/owl.glb" scale={2.2} position={[0, -2, 0]} />
        </Suspense>
        {/*
          - Rotasi dan zoom telah dikunci dengan mengatur `enableRotate` dan `enableZoom` menjadi `false`.
        */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={false} 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 3} 
        />
      </Canvas>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center p-2 bg-black/40 rounded-md backdrop-blur-sm">
        <p className="text-xs text-muted-foreground">Model 3D Interaktif: Burung Hantu</p>
      </div>
    </div>
  )
}
