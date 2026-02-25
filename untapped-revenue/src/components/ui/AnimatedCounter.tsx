'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedCounterProps {
  /** The target string, e.g. "$46.3M" or "100+" or "80%" */
  value: string
  className?: string
  duration?: number
}

/**
 * Parses a formatted string like "$46.3M", "100+", "80%", "$3–$6"
 * and animates the primary number from 0 to its target when scrolled into view.
 */
export function AnimatedCounter({ value, className, duration = 1800 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!isInView) return

    // Extract numeric part — handle decimals like 46.3
    const match = value.match(/[\d.]+/)
    if (!match) {
      setDisplay(value)
      return
    }

    const target = parseFloat(match[0])
    const isDecimal = match[0].includes('.')
    const decimals = isDecimal ? match[0].split('.')[1].length : 0

    // Prefix: everything before the first digit
    const prefix = value.slice(0, value.indexOf(match[0]))
    // Suffix: everything after the number
    const suffix = value.slice(value.indexOf(match[0]) + match[0].length)

    const start = performance.now()
    let raf: number

    function easeOutCubic(t: number) {
      return 1 - Math.pow(1 - t, 3)
    }

    function tick(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutCubic(progress)
      const current = target * eased

      const formatted = isDecimal
        ? current.toFixed(decimals)
        : Math.floor(current).toString()

      setDisplay(`${prefix}${formatted}${suffix}`)

      if (progress < 1) {
        raf = requestAnimationFrame(tick)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [isInView, value, duration])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
