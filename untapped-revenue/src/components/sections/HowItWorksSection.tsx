'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Badge from '@/components/ui/Badge'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { HOW_IT_WORKS } from '@/config/site'

const ease = [0.22, 1, 0.36, 1] as const

export default function HowItWorksSection() {
  return (
    <Section className="bg-slate-50 bg-grid-light relative overflow-hidden">
      {/* Subtle navy top glow */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-64 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(30,58,95,0.06) 0%, transparent 70%)',
        }}
      />

      <Container className="relative z-10">
        <SectionReveal variant="fade-up" className="text-center mb-16">
          <Badge variant="ember" className="mb-4">How It Works</Badge>
          <h2 className="text-4xl sm:text-5xl font-black text-navy leading-tight mb-5">
            From Strategy Call to{' '}
            <span className="text-ember">25+ New Bookings/Month</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Most clients hit their revenue targets within 60–90 days. Here&apos;s exactly how.
          </p>
        </SectionReveal>

        <div className="relative">
          {/* Animated vertical connector line (desktop only) */}
          <motion.div
            className="hidden lg:block absolute left-[calc(50%-1px)] top-8 bottom-8 w-px origin-top"
            style={{ background: 'linear-gradient(180deg, #E8371B 0%, rgba(30,58,95,0.3) 50%, #E8371B 100%)' }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.6, ease }}
          />

          <div className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-14">
            {HOW_IT_WORKS.map((step, i) => {
              const isLeft = i % 2 === 0
              const delay = (i % 2) * 0.1 + Math.floor(i / 2) * 0.15
              return (
                <motion.div
                  key={step.step}
                  className={`relative flex gap-5 ${isLeft ? 'lg:text-right lg:flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.65, ease, delay }}
                >
                  {/* Step circle with ghost number behind it */}
                  <motion.div
                    className="shrink-0 relative"
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 220,
                      damping: 18,
                      delay: delay + 0.1,
                    }}
                  >
                    {/* Outer pulse ring on entry */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-ember/20"
                      initial={{ scale: 1, opacity: 0.6 }}
                      whileInView={{ scale: 1.8, opacity: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 1, ease: 'easeOut', delay: delay + 0.35 }}
                    />
                    {/* Circle */}
                    <div className="w-13 h-13 rounded-full bg-navy border-2 border-ember/40 text-white font-black text-lg flex items-center justify-center shadow-lg relative z-10"
                      style={{ width: 52, height: 52 }}>
                      {step.step}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className={`flex-1 ${isLeft ? 'lg:flex lg:flex-col lg:items-end' : ''}`}>
                    {/* Ghost large step number in background */}
                    <div className="relative">
                      <span
                        aria-hidden
                        className={`absolute text-stroke-navy font-black leading-none select-none pointer-events-none ${isLeft ? 'lg:right-0' : 'left-0'} -top-4`}
                        style={{ fontSize: '72px', fontFamily: 'var(--font-display)', zIndex: 0 }}
                      >
                        {String(step.step).padStart(2, '0')}
                      </span>
                      <div className="relative z-10">
                        <h3 className="text-navy font-bold text-lg mb-1">{step.title}</h3>
                        {step.timeframe && (
                          <p className="text-ember text-xs font-semibold uppercase tracking-wider mb-2">
                            {step.timeframe}
                          </p>
                        )}
                        <p className="text-slate-500 text-sm leading-relaxed max-w-sm">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}
