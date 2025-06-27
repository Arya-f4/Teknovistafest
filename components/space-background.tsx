"use client"

import { Cloud, Sparkles, Stars } from "@react-three/drei"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useMemo, useRef } from "react"
import * as THREE from "three"

function InteractiveStars() {
  const { mouse, viewport } = useThree()
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((state, delta) => {
    const x = (mouse.x * viewport.width) / 2.5
    const y = (mouse.y * viewport.height) / 2.5
    groupRef.current.rotation.set(-y * 0.02, -x * 0.02, 0)
    groupRef.current.position.set(x * 0.1, y * 0.1, 0)
  })

  return (
    <group ref={groupRef}>
      <Stars radius={150} depth={60} count={7000} factor={4} saturation={1} fade speed={1} />
    </group>
  )
}

function Asteroid() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [position, size, speed, rotationSpeed] = useMemo(() => {
    const x = THREE.MathUtils.randFloatSpread(200)
    const y = THREE.MathUtils.randFloatSpread(200)
    const z = THREE.MathUtils.randFloatSpread(150) - 100
    const s = THREE.MathUtils.randFloat(0.05, 0.3)
    const sp = THREE.MathUtils.randFloat(0.005, 0.01)
    const rs = new THREE.Vector3(
      THREE.MathUtils.randFloat(-0.1, 0.1),
      THREE.MathUtils.randFloat(-0.1, 0.1),
      THREE.MathUtils.randFloat(-0.1, 0.1),
    )
    return [new THREE.Vector3(x, y, z), s, sp, rs]
  }, [])

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * rotationSpeed.x
      meshRef.current.rotation.y += delta * rotationSpeed.y
      meshRef.current.rotation.z += delta * rotationSpeed.z
      meshRef.current.position.z += speed
      if (meshRef.current.position.z > state.camera.far / 3) {
        meshRef.current.position.z = -state.camera.far / 3
        meshRef.current.position.x = THREE.MathUtils.randFloatSpread(200)
        meshRef.current.position.y = THREE.MathUtils.randFloatSpread(200)
      }
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <icosahedronGeometry args={[size, 0]} />
      <meshStandardMaterial color="#44475A" roughness={0.9} metalness={0.1} flatShading />
    </mesh>
  )
}

export default function SpaceBackground() {
  const numAsteroids = 80
  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", zIndex: -1 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[20, 30, 40]} intensity={2.5} color="#BB63FF" distance={300} decay={2} />
        <pointLight position={[-20, -10, 20]} intensity={2} color="#56E1E9" distance={200} decay={2} />
        <fog attach="fog" args={["#0A2353", 20, 150]} />

        <InteractiveStars />

        <Sparkles count={200} scale={[10, 10, 4]} size={6} speed={0.3} color="#56E1E9" opacity={0.8} />
        <Sparkles count={100} scale={[15, 15, 5]} size={8} speed={0.2} color="#BB63FF" opacity={0.6} />

        <Cloud
          position={[-15, -10, -50]}
          speed={0.2}
          opacity={0.2}
          color="#5B58EB"
          segments={30}
          width={30}
          depth={-15}
        />
        <Cloud
          position={[15, 10, -70]}
          speed={0.2}
          opacity={0.15}
          color="#BB63FF"
          segments={30}
          width={25}
          depth={-10}
        />

        {Array.from({ length: numAsteroids }).map((_, i) => (
          <Asteroid key={i} />
        ))}
      </Canvas>
    </div>
  )
}
