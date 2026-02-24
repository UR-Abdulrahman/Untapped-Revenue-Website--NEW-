'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Badge from '@/components/ui/Badge'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { CASE_STUDIES } from '@/config/site'
import { useModal } from '@/components/modals/ModalContext'
import { GlowingEffect } from '@/components/ui/glowing-effect'

const ease = [0.22, 1, 0.36, 1] as const

/** Accent colors per card */
const accents = [
  { border: 'rgba(232,55,27,0.7)', glow: 'rgba(232,55,27,0.15)' },
  { border: 'rgba(240,180,41,0.7)', glow: 'rgba(240,180,41,0.12)' },
  { border: 'rgba(42,79,127,0.9)',  glow: 'rgba(42,79,127,0.20)'  },
]

export default function CaseStudies() {
  const { openBooking } = useModal()

  return (
    <section
      id="dark-section-case-studies"
      className="relative bg-navy-dark py-20 md:py-28 overflow-hidden noise"
    >
      {/* ── Background decorative elements ── */}
      <div aria-hidden className="absolute inset-0 bg-grid-dark opacity-80 pointer-events-none" />
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(232,55,27,0.10) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-0 w-100 h-75"
          style={{ background: 'radial-gradient(ellipse at 100% 100%, rgba(240,180,41,0.07) 0%, transparent 70%)' }} />
      </div>

      <Container className="relative z-10">
        <SectionReveal variant="fade-up" className="text-center mb-16">
          <Badge variant="ember" className="mb-4">Real Results</Badge>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
            Documented. Verified.{' '}
            <span className="text-ember">Not Projections.</span>
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            These numbers are pulled directly from client MindBody accounts, CRM pipelines, and ad dashboards.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CASE_STUDIES.map((study, i) => (
            <motion.div
              key={study.id}
              className="relative rounded-2xl flex flex-col"
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
              initial={{ opacity: 0, y: 64, rotateX: -12 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease, delay: i * 0.12 }}
              whileHover={{
                y: -8,
                boxShadow: `0 32px 64px rgba(0,0,0,0.5), 0 0 0 1px ${accents[i].border}`,
              }}
            >
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} variant="white" />
              {/* Top accent bar */}
              <div
                className="h-0.75 w-full"
                style={{ background: `linear-gradient(90deg, ${accents[i].border}, transparent)` }}
              />

              {/* Card top glow */}
              <div
                aria-hidden
                className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${accents[i].glow} 0%, transparent 80%)` }}
              />

              {/* Header */}
              <div className="px-6 pt-6 pb-5 relative z-10">
                <Badge variant="ember" className="mb-3">{study.studioType}</Badge>
                <h3 className="text-white font-bold text-xl leading-snug">{study.name}</h3>
                <p className="text-white/40 text-sm mt-1">{study.timeframe}</p>
              </div>

              {/* Headline metric — BIG */}
              <div className="px-6 py-5 border-y border-white/8 relative z-10">
                <p className="text-xs text-white/40 uppercase tracking-wider font-semibold mb-1">Key Result</p>
                <p className="text-ember font-black text-2xl leading-tight">
                  <AnimatedCounter value={study.headline} className="tabular-nums" />
                </p>
              </div>

              {/* Metrics */}
              <div className="px-6 py-5 space-y-3 flex-1 relative z-10">
                {study.metrics.map((m, mi) => (
                  <motion.div
                    key={mi}
                    className="flex justify-between items-center gap-4"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease, delay: i * 0.12 + mi * 0.07 + 0.3 }}
                  >
                    <span className="text-white/45 text-sm">{m.label}</span>
                    <span className="text-white font-bold text-sm tabular-nums">
                      <AnimatedCounter value={m.value} />
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <div className="px-6 pb-6 pt-4 border-t border-white/8 relative z-10">
                <svg className="w-5 h-5 text-ember/60 mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <blockquote className="text-white/55 text-sm italic leading-relaxed">
                  {study.quote}
                </blockquote>
                <p className="text-white/30 text-xs mt-2">— {study.name}, {study.studioType}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
        >
          <p className="text-white/30 text-sm mb-6">
            These are 3 of hundreds of documented case studies.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/results"
              className="inline-flex items-center justify-center gap-2 bg-white/8 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/14 border border-white/12 hover:border-white/25 transition-all text-sm"
            >
              See All Case Studies →
            </Link>
            <motion.button
              onClick={openBooking}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              className="inline-flex items-center justify-center gap-2 bg-ember text-white font-semibold px-6 py-3 rounded-lg hover:bg-ember-dark transition-colors text-sm"
            >
              Get Results Like These
            </motion.button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
