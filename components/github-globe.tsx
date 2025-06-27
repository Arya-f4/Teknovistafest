"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useMemo, useRef } from "react"
import * as THREE from "three"

// Vertex shader
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

// Fragment shader
const fragmentShader = `
  uniform float u_time;
  uniform vec3 u_color1;
  uniform vec3 u_color2;
  varying vec2 vUv;

  // 2D Random function
  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
  }

  // 2D Noise function
  float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.y * u.x;
  }

  void main() {
    vec2 uv = vUv;
    float n = noise(uv * 4.0 + u_time * 0.1);
    vec3 color = mix(u_color1, u_color2, n);
    
    float border = smoothstep(0.4, 0.5, length(uv - 0.5));
    float alpha = 1.0 - border;

    // Add some shimmering
    alpha *= (0.8 + 0.2 * sin(uv.y * 20.0 + u_time * 2.0));

    gl_FragColor = vec4(color, alpha);
  }
`

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const uniforms = useMemo(
    () => ({
      u_time: { value: 0.0 },
      u_color1: { value: new THREE.Color("#4f46e5") }, // Indigo
      u_color2: { value: new THREE.Color("#14b8a6") }, // Teal
    }),
    [],
  )

  useFrame((state) => {
    const { clock } = state
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001
      // @ts-ignore
      meshRef.current.material.uniforms.u_time.value = clock.getElapsedTime()
    }
  })

  return (
    <mesh ref={meshRef} scale={2.5}>
      <sphereGeometry args={[1, 64, 64]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  )
}

export default function GithubGlobe() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30 animate-hero-glow">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Globe />
      </Canvas>
    </div>
  )
}
