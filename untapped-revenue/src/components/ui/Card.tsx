'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  /** 3D perspective tilt on mouse move */
  tilt?: boolean
}

export default function Card({ children, className, hover = false, tilt = false }: CardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const xSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 })
  const rotateX = useTransform(ySpring, [-0.5, 0.5], ['6deg', '-6deg'])
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ['-6deg', '6deg'])

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!tilt || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tilt ? { rotateX, rotateY, transformPerspective: 1000 } : undefined}
      whileHover={hover ? { y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={cn(
        'rounded-2xl bg-white shadow-sm border border-slate-100 p-6',
        className
      )}
    >
      {children}
    </motion.div>
  )
}
