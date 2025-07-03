"use client"

import { Html, OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";

function Model({ modelPath, ...props }: { modelPath: string; [key: string]: any }) {
  const group = useRef<THREE.Group>(null!)
  const { scene, animations } = useGLTF(modelPath) 
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (group.current) {
      group.current.rotation.y = -Math.PI / 8;
    }
    const animationName = Object.keys(actions)[0]
    if (actions[animationName]) {
      actions[animationName]?.play();
    }
  }, [actions]);

  useFrame(() => {
    if (group.current) {
      const t = performance.now() / 1000;
      group.current.position.y = -2 + Math.sin(t * 0.5) * 0.1;
    }
  });

  return (
    <group ref={group} {...props}>
        <primitive object={scene} />
        {/* FIX: Posisi dialog diubah agar lebih jauh dan tepat di atas */}
        <Html position={[0.5, 3.5, 0]} center>
            <div className="relative bg-white/90 text-primary font-semibold px-4 py-2 rounded-lg shadow-lg backdrop-blur-sm animate-pulse">
                <span>kenapa ya?</span>
                {/* FIX: Ekor dialog diposisikan di tengah */}
                <div 
                    className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-0 h-0"
                    style={{
                        borderLeft: '8px solid transparent',
                        borderRight: '8px solid transparent',
                        borderTop: '10px solid rgba(255, 255, 255, 0.9)',
                    }}
                ></div>
            </div>
        </Html>
    </group>
  )
}

useGLTF.preload("/owl.glb") 

export default function FeaturesOwl() {
  return (
    <div className="relative z-50 w-full h-full">
      <Canvas camera={{ position: [0, 0, 240], fov: 50 }}>
        <ambientLight intensity={1.5} />
        <hemisphereLight intensity={1.2} groundColor="hsl(var(--primary))" />
        <pointLight position={[10, 10, 10]} intensity={4.0} color="#56E1E9" />
        <pointLight position={[-10, -5, 5]} intensity={4.0} color="#BB63FF" />
        <directionalLight position={[0, -10, 0]} intensity={1.5} color="#5B58EB" />
        <Suspense fallback={null}>
          <Model modelPath="/owl.glb" scale={2.2} position={[0, -2, 0]} />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  )
}
