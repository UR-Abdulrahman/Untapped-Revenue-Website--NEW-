'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Badge from '@/components/ui/Badge'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { GlowingEffect } from '@/components/ui/glowing-effect'

const ease = [0.22, 1, 0.36, 1] as const

const problems = [
  {
    num: '01',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
      </svg>
    ),
    title: 'Your ads work for 2 weeks, then collapse',
    description:
      "Facebook's algorithm quietly trains itself to deliver your ads to low-quality, no-show leads. Within weeks, you've paid to teach the algorithm to find broke, unmotivated people — and it keeps delivering more of the same.",
  },
  {
    num: '02',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "You're chasing leads manually",
    description:
      "Response speed is the #1 driver of lead conversion. Yet most studio owners are responding hours later — or not at all. By the time you follow up, they've already booked somewhere else.",
  },
  {
    num: '03',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: 'Generic "weight loss" ads attract non-buyers',
    description:
      '"People who want to lose weight" — every gym agency runs the same recycled playbook. The result: cheap leads who never show up, never convert, and train your algorithm to find more just like them.',
  },
  {
    num: '04',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75" />
      </svg>
    ),
    title: "You're paying 10× more to learn what works",
    description:
      "Traditional ad testing: pick one offer, spend $200–$400, wait 10 days, hope it works. Most studios burn months of ad spend before finding an offer that converts. There's a faster way.",
  },
]

export default function ProblemSection() {
  return (
    <Section className="bg-slate-50 bg-grid-light relative overflow-hidden">
      {/* Subtle ember radial glow top-right */}
      <div
        aria-hidden
        className="absolute top-0 right-0 w-125 h-125 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 100% 0%, rgba(232,55,27,0.06) 0%, transparent 70%)',
        }}
      />

      <Container className="relative z-10">
        <SectionReveal variant="fade-up" className="text-center mb-16">
          <Badge variant="ember" className="mb-4">The Problem</Badge>
          <h2 className="text-4xl sm:text-5xl font-black text-navy leading-tight mb-5">
            Why Most Gym Ad Accounts{' '}
            <span className="text-ember">Fail Within 6 Weeks</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            It&apos;s not your studio. It&apos;s not your offer. It&apos;s a system problem — one that most agencies are completely blind to.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
              whileHover={{
                y: -6,
                boxShadow: '0 20px 48px rgba(30,58,95,0.10)',
              }}
            >
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              {/* Ember left accent bar on hover — spans full card height */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-ember/0 group-hover:bg-ember/70 transition-all duration-300 z-10" />
              <div className="relative overflow-hidden rounded-2xl p-5 sm:p-7">
                {/* Ghost number — large background text */}
                <span
                  aria-hidden
                  className="absolute -top-3 -right-2 text-stroke-navy font-black leading-none select-none pointer-events-none"
                  style={{ fontSize: 'clamp(80px, 10vw, 120px)', fontFamily: 'var(--font-display)' }}
                >
                  {problem.num}
                </span>

                {/* Icon */}
                <motion.div
                  className="w-11 h-11 rounded-xl bg-ember/10 text-ember flex items-center justify-center mb-5 relative z-10"
                  whileHover={{ scale: 1.12, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                >
                  {problem.icon}
                </motion.div>

                <h3 className="text-lg font-bold text-navy mb-2.5 relative z-10 leading-snug">
                  {problem.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed relative z-10">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-slate-400 text-sm italic max-w-lg mx-auto">
            We call the root cause of all of this:{' '}
            <strong className="text-navy not-italic">Algorithmic Bias</strong> — and we&apos;ve spent years reverse-engineering how to fix it.
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}
