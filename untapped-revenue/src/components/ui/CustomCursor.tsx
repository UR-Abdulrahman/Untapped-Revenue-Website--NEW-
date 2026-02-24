'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false)
  const [isPointerDevice, setIsPointerDevice] = useState(false)
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)

  const dotX = useMotionValue(-200)
  const dotY = useMotionValue(-200)
  const ringX = useSpring(dotX, { damping: 28, stiffness: 110, mass: 0.6 })
  const ringY = useSpring(dotY, { damping: 28, stiffness: 110, mass: 0.6 })

  useEffect(() => {
    setMounted(true)
    setIsPointerDevice(window.matchMedia('(pointer: fine)').matches)
  }, [])

  useEffect(() => {
    if (!isPointerDevice || !mounted) return

    const onMove = (e: MouseEvent) => {
      dotX.set(e.clientX)
      dotY.set(e.clientY)
      if (!visible) setVisible(true)
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactive = target.closest('a, button, [role="button"], input, textarea, select, label')
      setHovering(!!interactive)
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
    }
  }, [dotX, dotY, visible, isPointerDevice, mounted])

  if (!mounted || !isPointerDevice) return null

  return (
    <>
      {/* Precise dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-ember"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: 7,
          height: 7,
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovering ? 0 : 1,
        }}
        transition={{ duration: 0.12 }}
      />

      {/* Spring-lagged ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border-2"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width: 30,
          height: 30,
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovering ? 1.65 : 1,
          borderColor: hovering
            ? 'rgba(240, 180, 41, 0.75)'
            : 'rgba(232, 55, 27, 0.45)',
        }}
        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  )
}
