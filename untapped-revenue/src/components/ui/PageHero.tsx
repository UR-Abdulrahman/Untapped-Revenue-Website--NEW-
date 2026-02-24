'use client'

import { Suspense, lazy, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Container from '@/components/ui/Container'

const PageHeroCanvas = lazy(() => import('./PageHeroCanvas'))

const ease = [0.22, 1, 0.36, 1] as const

interface PageHeroProps {
  badge: string
  title: React.ReactNode
  description: React.ReactNode
  children?: React.ReactNode
  /** 'results' = punchier/bolder entry. 'about' = softer/slower. 'default' = standard. */
  variant?: 'default' | 'results' | 'about'
}

export default function PageHero({
  badge,
  title,
  description,
  children,
  variant = 'default',
}: PageHeroProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // Parallax: blobs drift up, content drifts down gently — identical pattern to homepage
  const blobY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 40])

  const dur = variant === 'about' ? 0.72 : 0.58
  const titleInitial =
    variant === 'results'
      ? { opacity: 0, y: 36, scale: 0.96 }
      : { opacity: 0, y: 30 }

  return (
    <section ref={sectionRef} className="bg-navy pt-32 pb-20 relative overflow-hidden noise">

      {/* ── Animated aurora blobs — parallax ── */}
      <motion.div
        aria-hidden
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ y: blobY }}
      >
        <div className="animate-blob animation-delay-0 absolute -top-28 -left-24 w-130 h-130 rounded-full bg-ember/20 blur-[60px]" />
        <div className="animate-blob animation-delay-2000 absolute top-1/3 -right-32 w-105 h-105 rounded-full bg-ember/10 blur-[50px]" />
        <div className="animate-blob animation-delay-4000 absolute -bottom-32 left-1/3 w-95 h-95 rounded-full bg-ember/16 blur-[55px]" />
        {/* Top-center ember crown — much brighter */}
        <div className="animate-blob animation-delay-2000 absolute -top-16 left-1/2 -translate-x-1/2 w-175 h-80 rounded-full bg-ember/18 blur-[70px]" />
        {/* Extra deep-center glow */}
        <div className="animate-blob animation-delay-4000 absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-gold/10 blur-[60px]" />
      </motion.div>

      {/* ── Grid overlay ── */}
      <div aria-hidden className="absolute inset-0 bg-grid-dark opacity-70 pointer-events-none" />

      {/* ── 3D canvas (particles + rings) — lazy loaded ── */}
      <Suspense fallback={null}>
        <PageHeroCanvas />
      </Suspense>

      {/* ── Gradient overlays — lighter so background shows through ── */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-navy/5 to-navy/30 pointer-events-none" />


      {/* ── Content — parallax ── */}
      <motion.div style={{ y: contentY }} className="relative z-10">
        <Container>
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -18, scale: 0.86 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 280, damping: 20, delay: 0.1 }}
              className="mb-5"
            >
              <span className="inline-flex items-center gap-2 bg-ember/12 text-ember text-xs font-bold tracking-[0.14em] uppercase px-4 py-1.5 rounded-full border border-ember/22">
                <span className="w-1.5 h-1.5 rounded-full bg-ember animate-pulse" />
                {badge}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-5xl sm:text-6xl font-black text-white leading-tight mb-5"
              initial={titleInitial}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: dur, ease, delay: 0.22 }}
            >
              {title}
            </motion.h1>


{/* Description */}
            <motion.p
              className="text-xl text-white/62 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur, ease, delay: 0.36 }}
            >
              {description}
            </motion.p>

            {/* Optional children (CTAs, stat cards, pills…) */}
            {children && (
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: dur, ease, delay: 0.54 }}
              >
                {children}
              </motion.div>
            )}
          </div>
        </Container>
      </motion.div>
    </section>
  )
}
