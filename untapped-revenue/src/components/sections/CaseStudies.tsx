'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
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
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  useEffect(() => {
    if (!activeVideo) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActiveVideo(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeVideo])

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
              className="relative rounded-2xl flex flex-col overflow-hidden"
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
                style={{ background: `linear-gradient(90deg, transparent, ${accents[i].border} 50%, transparent)` }}
              />

              {/* Card top glow */}
              <div
                aria-hidden
                className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${accents[i].glow} 0%, transparent 80%)` }}
              />

              {/* Header — badge, then photo + name */}
              <div className="px-4 sm:px-6 pt-5 sm:pt-6 pb-4 sm:pb-5 relative z-10">
                <Badge variant="ember" className="mb-4">{study.studioType}</Badge>
                <div className="flex items-center gap-3">
                  {study.photo && (
                    <div className="relative shrink-0">
                      <Image
                        src={study.photo}
                        alt={study.name}
                        width={48}
                        height={48}
                        className="rounded-full object-cover w-12 h-12 ring-2 ring-white/15"
                      />
                      <span className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-navy-dark" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-white font-bold text-xl leading-snug">{study.name}</h3>
                    <p className="text-white/40 text-sm">{study.timeframe}</p>
                  </div>
                </div>
              </div>

              {/* Headline metric — BIG */}
              <div className="px-4 sm:px-6 py-4 sm:py-5 border-y border-white/8 relative z-10">
                <p className="text-xs text-white/40 uppercase tracking-wider font-semibold mb-1">Key Result</p>
                <p className="text-ember font-black text-2xl leading-tight">
                  <AnimatedCounter value={study.headline} className="tabular-nums" />
                </p>
              </div>

              {/* Metrics */}
              <div className="px-4 sm:px-6 py-4 sm:py-5 space-y-3 flex-1 relative z-10">
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

              {/* Quote + Watch Video */}
              <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-3 sm:pt-4 border-t border-white/8 relative z-10">
                <svg className="w-5 h-5 text-ember/60 mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <blockquote className="text-white/55 text-sm italic leading-relaxed">
                  {study.quote}
                </blockquote>
                <p className="text-white/30 text-xs mt-2">— {study.name}, {study.studioType}</p>

                {study.videoUrl && (
                  <button
                    onClick={() => setActiveVideo(study.videoUrl!)}
                    className="mt-4 flex items-center gap-2 text-ember text-xs font-semibold hover:text-ember/80 transition-colors group"
                  >
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-ember/15 group-hover:bg-ember/25 transition-colors">
                      <svg className="w-3 h-3 translate-x-px" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M5.5 3.5l7 4.5-7 4.5V3.5z"/>
                      </svg>
                    </span>
                    Watch {study.name}&apos;s Story
                  </button>
                )}
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

      {/* ── Video Lightbox ── */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            key="video-lightbox"
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveVideo(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

            {/* Video container */}
            <motion.div
              className="relative z-10 w-full max-w-3xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.25, ease }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-4 -right-4 z-20 w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
                aria-label="Close video"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M1 1l12 12M13 1L1 13"/>
                </svg>
              </button>

              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-video">
                <video
                  src={activeVideo}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover bg-black"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
