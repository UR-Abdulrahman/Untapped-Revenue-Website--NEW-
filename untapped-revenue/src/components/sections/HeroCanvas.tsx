'use client'

import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const ref = useRef<THREE.Points>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  // Fix: add event listener with cleanup
  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouseRef.current.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  // Reduced from 1200 → 900 for better performance
  const positions = useMemo(() => {
    const count = 900
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = Math.random() * 2.5 + 0.5
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
    ref.current.rotation.x = time * 0.04 + mouseRef.current.y * 0.08
    ref.current.rotation.y = time * 0.06 + mouseRef.current.x * 0.08
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#E8371B"
        size={0.013}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

function Ring({ args, rotateX, rotateY, rotateZ, color, opacity }: {
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

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 60 }}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.3} />
      <ParticleField />
      <Ring
        args={[1.6, 0.008, 16, 120]}
        rotateX={(t) => t * 0.15}
        rotateZ={(t) => t * 0.08}
        color="#E8371B"
        opacity={0.22}
      />
      <Ring
        args={[2.2, 0.005, 16, 120]}
        rotateY={(t) => t * 0.1}
        rotateX={(t) => Math.PI / 3 + t * 0.05}
        color="#ffffff"
        opacity={0.09}
      />
      <Ring
        args={[2.8, 0.004, 16, 100]}
        rotateY={(t) => -t * 0.06}
        rotateX={(t) => Math.PI / 5 + t * 0.03}
        color="#E8371B"
        opacity={0.07}
      />
    </Canvas>
  )
}
