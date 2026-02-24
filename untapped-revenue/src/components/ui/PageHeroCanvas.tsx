'use client'

import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const ref = useRef<THREE.Points>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouseRef.current.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  const positions = useMemo(() => {
    const count = 600
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = Math.random() * 2.8 + 0.3
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
    }
    return pos
  }, [])

  useFrame((state) => {
    if (!ref.current) return
    const time = state.clock.elapsedTime
    ref.current.rotation.x = time * 0.04 + mouseRef.current.y * 0.10
    ref.current.rotation.y = time * 0.07 + mouseRef.current.x * 0.10
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#E8371B"
        size={0.014}
        sizeAttenuation
        depthWrite={false}
        opacity={0.70}
      />
    </Points>
  )
}

function Ring({
  args,
  rotateX,
  rotateY,
  rotateZ,
  color,
  opacity,
}: {
  args: [number, number, number, number]
  rotateX?: (t: number) => number
  rotateY?: (t: number) => number
  rotateZ?: (t: number) => number
  color: string
  opacity: number
}) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    if (rotateX) ref.current.rotation.x = rotateX(t)
    if (rotateY) ref.current.rotation.y = rotateY(t)
    if (rotateZ) ref.current.rotation.z = rotateZ(t)
  })

  return (
    <mesh ref={ref}>
      <torusGeometry args={args} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  )
}

export default function PageHeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3.8], fov: 62 }}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.4} />
      <ParticleField />
      {/* Ring 1 — thick ember, strong presence */}
      <Ring
        args={[1.8, 0.010, 16, 120]}
        rotateX={(t) => Math.PI / 4 + t * 0.09}
        rotateY={(t) => t * 0.12}
        color="#E8371B"
        opacity={0.35}
      />
      {/* Ring 2 — mid white */}
      <Ring
        args={[2.5, 0.006, 16, 100]}
        rotateY={(t) => -t * 0.07}
        rotateX={(t) => Math.PI / 6 + t * 0.04}
        color="#ffffff"
        opacity={0.15}
      />
      {/* Ring 3 — outer gold accent */}
      <Ring
        args={[3.1, 0.004, 16, 80]}
        rotateY={(t) => t * 0.05}
        rotateZ={(t) => Math.PI / 5 + t * 0.03}
        color="#F0B429"
        opacity={0.12}
      />
    </Canvas>
  )
}
