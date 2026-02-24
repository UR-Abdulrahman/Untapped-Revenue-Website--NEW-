'use client'

import { motion } from 'framer-motion'

import type { Variants } from 'framer-motion'

type VariantName = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right'

interface SectionRevealProps {
  children: React.ReactNode
  className?: string
  variant?: VariantName
  delay?: number
  /** When true, wraps children in a stagger container */
  stagger?: boolean
  staggerDelay?: number
}

const variantMap: Record<VariantName, Variants> = {
  'fade-up': {
    hidden:  { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  'fade-in': {
    hidden:  { opacity: 0 },
    visible: { opacity: 1 },
  },
  'slide-left': {
    hidden:  { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  'slide-right': {
    hidden:  { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
}

/** Standard easing for all reveals — feels crisp + premium */
const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

/**
 * Wrap any block to animate it in when it enters the viewport.
 * Use `stagger` to cascade children one-by-one.
 */
export function SectionReveal({
  children,
  className,
  variant = 'fade-up',
  delay = 0,
  stagger = false,
  staggerDelay = 0.1,
}: SectionRevealProps) {
  const selected: Variants = variantMap[variant]

  if (stagger) {
    return (
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: staggerDelay, delayChildren: delay } },
        }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={selected}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Child item for use inside a `<SectionReveal stagger>` container.
 */
export function RevealItem({
  children,
  className,
  variant = 'fade-up',
}: {
  children: React.ReactNode
  className?: string
  variant?: VariantName
}) {
  const selected = variantMap[variant]

  return (
    <motion.div
      className={className}
      variants={selected}
      transition={{ duration: 0.65, ease }}
    >
      {children}
    </motion.div>
  )
}
