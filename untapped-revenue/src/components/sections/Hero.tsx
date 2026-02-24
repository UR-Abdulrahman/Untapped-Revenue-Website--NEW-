'use client'

import { Suspense, lazy, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useModal } from '@/components/modals/ModalContext'
import Container from '@/components/ui/Container'

const HeroCanvas = lazy(() => import('./HeroCanvas'))

/** Split text into individual character spans with stagger */
function SplitChars({
  text,
  className,
  delay = 0,
}: {
  text: string
  className?: string
  delay?: number
}) {
  return (
    <>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          className={className}
          style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : undefined }}
          variants={{
            hidden: { opacity: 0, y: 40, rotateX: -30 },
            visible: { opacity: 1, y: 0, rotateX: 0 },
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
            delay: delay + i * 0.022,
          }}
        >
          {char}
        </motion.span>
      ))}
    </>
  )
}

/** Word-by-word spans for less dense lines */
function AnimatedWords({
  text,
  className,
  delay = 0,
}: {
  text: string
  className?: string
  delay?: number
}) {
  const words = text.split(' ')
  return (
    <>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className={className}
          style={{ display: 'inline-block' }}
          variants={{
            hidden: { opacity: 0, y: 32 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            delay: delay + i * 0.06,
          }}
        >
          {word}
          {i < words.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </>
  )
}

export default function Hero() {
  const { openBooking, openForm } = useModal()
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })

  // Parallax: blobs drift up slightly as user scrolls
  const blobY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60])

  return (
    <section
      ref={heroRef}
      id="dark-section-hero"
      className="relative min-h-screen flex items-center hero-gradient overflow-hidden noise"
    >
      {/* ── Aurora blobs — parallax ── */}
      <motion.div
        aria-hidden
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ y: blobY }}
      >
        <div className="animate-blob animation-delay-0 absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-ember/8 blur-[100px]" />
        <div className="animate-blob animation-delay-2000 absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-navy-light/25 blur-[80px]" />
        <div className="animate-blob animation-delay-4000 absolute -bottom-40 left-1/3 w-[450px] h-[450px] rounded-full bg-ember/6 blur-[90px]" />
        {/* Extra depth blob */}
        <div className="animate-blob animation-delay-2000 absolute top-0 right-1/4 w-[300px] h-[300px] rounded-full bg-gold/5 blur-[70px]" />
      </motion.div>

      {/* ── Subtle grid overlay ── */}
      <div aria-hidden className="absolute inset-0 bg-grid-dark opacity-60 pointer-events-none" />

      {/* ── 3D canvas background ── */}
      <Suspense fallback={null}>
        <HeroCanvas />
      </Suspense>

      {/* ── Gradient overlays ── */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-navy/10 to-navy-dark/80 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-navy-dark to-transparent pointer-events-none" />

      {/* ── Content ── */}
      <motion.div style={{ y: contentY }} className="relative z-10 w-full">
        <Container className="pt-28 pb-24">
          <div className="max-w-4xl mx-auto text-center">

            {/* Proof badge */}
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 240, damping: 20, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 bg-white/8 backdrop-blur-md border border-white/15 rounded-full px-5 py-2 mb-10"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ember opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-ember" />
              </span>
              <span className="text-white/80 text-sm font-medium tracking-wide">
                $46.3M Generated · 150+ Studios · 17 Months
              </span>
            </motion.div>

            {/* Headline — character-by-character on "Member Accelerator" */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.02] mb-6"
              initial="hidden"
              animate="visible"
              style={{ perspective: 800 }}
            >
              <motion.span
                className="block"
                variants={{ hidden: {}, visible: {} }}
              >
                <AnimatedWords text="The Done-For-You" delay={0.15} />
              </motion.span>
              <motion.span
                className="block"
                style={{
                  display: 'block',
                  background: 'linear-gradient(90deg, #E8371B 0%, #FF7A3D 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
                variants={{
                  hidden: { opacity: 0, y: 48, skewX: -4 },
                  visible: { opacity: 1, y: 0, skewX: 0 },
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
              >
                Member Accelerator
              </motion.span>
              <motion.span
                className="block"
                variants={{ hidden: {}, visible: {} }}
              >
                <AnimatedWords text="for Fitness Studios" delay={0.7} />
              </motion.span>
            </motion.h1>


            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.72 }}
              className="text-xl sm:text-2xl text-white/65 leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              We handle ads, AI follow-up, and booking. You show up and close trials into members.{' '}
              <strong className="text-white/90 font-semibold">Starting at $197/month.</strong>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.88 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                onClick={openBooking}
                whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(232,55,27,0.55)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                className="group relative bg-ember text-white font-bold text-lg px-9 py-4 rounded-xl hover:bg-ember-dark transition-colors shadow-2xl w-full sm:w-auto overflow-hidden"
              >
                {/* Shimmer on hover */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/15 to-transparent skew-x-12" />
                <span className="relative flex items-center justify-center gap-2">
                  Book Your Free Strategy Call
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </motion.button>

              <motion.button
                onClick={openForm}
                whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.15)', borderColor: 'rgba(255,255,255,0.45)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                className="bg-white/8 backdrop-blur-sm text-white font-semibold text-lg px-9 py-4 rounded-xl border border-white/25 hover:border-white/45 transition-colors w-full sm:w-auto"
              >
                Apply Now →
              </motion.button>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="mt-12 flex flex-wrap justify-center gap-5 text-white/50 text-sm"
            >
              {[
                'No long-term contracts',
                'Fitness-exclusive expertise',
                '25+ new bookings/month guaranteed',
              ].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-ember shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  {item}
                </span>
              ))}
            </motion.div>

            {/* ── Scroll indicator — chevrons below content ── */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="mt-10 flex flex-col items-center gap-1.5"
            >
              {[0, 1, 2].map((i) => (
                <motion.svg
                  key={i}
                  width="18"
                  height="10"
                  viewBox="0 0 18 10"
                  fill="none"
                  animate={{ opacity: [0.2, 0.9, 0.2], y: [0, 3, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.18 }}
                >
                  <path d="M1 1L9 9L17 1" stroke="url(#scrollGrad)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="scrollGrad" x1="1" y1="5" x2="17" y2="5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#E8371B"/>
                      <stop offset="1" stopColor="#F0B429"/>
                    </linearGradient>
                  </defs>
                </motion.svg>
              ))}
            </motion.div>
          </div>
        </Container>
      </motion.div>
    </section>
  )
}
