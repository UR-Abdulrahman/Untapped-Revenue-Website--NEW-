'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Badge from '@/components/ui/Badge'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { DIFFERENTIATORS } from '@/config/site'
import { GlowingEffect } from '@/components/ui/glowing-effect'

const ease = [0.22, 1, 0.36, 1] as const

const icons: Record<string, React.ReactNode> = {
  Target: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
    </svg>
  ),
  Shield: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 10c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286z"/>
    </svg>
  ),
  Zap: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
    </svg>
  ),
  HandMetal: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l-.001-1.5a.75.75 0 01.082-.364 4.498 4.498 0 00.573-2.481V7.575a1.575 1.575 0 00-3.15 0v3.525"/>
    </svg>
  ),
  TrendingUp: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/>
    </svg>
  ),
  Dumbbell: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"/>
    </svg>
  ),
}

export default function SolutionSection() {
  return (
    <Section navy className="noise overflow-hidden relative">
      {/* Diagonal stripe texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 40px)',
        }}
      />

      {/* Corner glows */}
      <div
        aria-hidden
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'rgba(232,55,27,0.12)' }}
      />
      <div
        aria-hidden
        className="absolute -top-20 right-0 w-96 h-96 rounded-full blur-[80px] pointer-events-none"
        style={{ background: 'rgba(240,180,41,0.06)' }}
      />

      <Container className="relative z-10">
        <SectionReveal variant="fade-up" className="text-center mb-16">
          <Badge variant="ember" className="mb-4">The Solution</Badge>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
            The{' '}
            <span className="text-ember">Self-Sustaining</span>{' '}
            AI Member Accelerator
          </h2>
          <p className="text-xl text-white/55 max-w-2xl mx-auto">
            Six reasons our clients&apos; results get stronger every month — while other agencies watch theirs collapse.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DIFFERENTIATORS.map((diff, i) => (
            <motion.div
              key={diff.id}
              className="group relative bg-white/4 backdrop-blur-sm border border-white/8 rounded-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease, delay: i * 0.09 }}
              whileHover={{
                y: -8,
                backgroundColor: 'rgba(255,255,255,0.08)',
                borderColor: 'rgba(232,55,27,0.35)',
              }}
            >
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} variant="white" />
              <div className="relative overflow-hidden rounded-2xl p-6">
                {/* Ghost number */}
                <span
                  aria-hidden
                  className="absolute -top-2 -right-1 text-stroke-white font-black leading-none select-none pointer-events-none"
                  style={{ fontSize: '80px', fontFamily: 'var(--font-display)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Ember→gold bar at top on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ background: 'linear-gradient(90deg, #E8371B, #F0B429)' }}
                />

                {/* Icon */}
                <motion.div
                  className="relative w-12 h-12 rounded-xl bg-ember/15 text-ember flex items-center justify-center mb-4 z-10"
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                >
                  <div className="absolute inset-0 rounded-xl border border-gold/0 group-hover:border-gold/40 transition-colors duration-300" />
                  {icons[diff.icon]}
                </motion.div>

                <h3 className="text-white font-bold text-lg mb-1.5 relative z-10">{diff.title}</h3>
                <p className="text-white/45 text-xs font-semibold uppercase tracking-wider mb-3 relative z-10">
                  {diff.subtitle}
                </p>
                <p className="text-white/55 text-sm leading-relaxed relative z-10">{diff.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
