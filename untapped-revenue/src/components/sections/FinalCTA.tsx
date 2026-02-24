'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { useModal } from '@/components/modals/ModalContext'

const ease = [0.22, 1, 0.36, 1] as const

export default function FinalCTA() {
  const { openBooking, openForm } = useModal()

  return (
    <section
      id="dark-section-final-cta"
      className="relative bg-navy-dark py-28 overflow-hidden noise"
    >
      {/* ── Background: large outline text ── */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none"
      >
        <span
          className="text-stroke-white font-black leading-none"
          style={{
            fontSize: 'clamp(120px, 20vw, 260px)',
            fontFamily: 'var(--font-display)',
            opacity: 1,
          }}
        >
          GROW
        </span>
      </div>

      {/* ── Aurora blobs ── */}
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="animate-blob absolute -top-24 -left-24 w-96 h-96 rounded-full bg-ember/12 blur-3xl" />
        <div className="animate-blob animation-delay-2000 absolute -bottom-24 -right-16 w-80 h-80 rounded-full bg-navy-light/20 blur-3xl" />
        <div className="animate-blob animation-delay-4000 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gold/6 blur-3xl" />
      </div>

      {/* ── Diagonal grid overlay ── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 40px)',
        }}
      />

      <Container narrow className="relative z-10">
        <SectionReveal variant="fade-up" className="text-center">
          <motion.div
            className="inline-flex items-center gap-2 text-ember text-sm font-bold uppercase tracking-[0.2em] mb-6"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
          >
            <span className="w-8 h-px bg-ember" />
            Ready to grow?
            <span className="w-8 h-px bg-ember" />
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
            Let&apos;s Build Your{' '}
            <span className="text-ember">Member Acquisition System</span>
          </h2>

          <p className="text-white/55 text-xl mb-4 max-w-xl mx-auto leading-relaxed">
            In 30 minutes, we&apos;ll map out exactly what it would take to add 25+ new members to your studio every month.
          </p>
          <p className="text-white/35 text-sm mb-12">
            $46.3M generated for 100+ studios in 17 months. No long-term contracts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={openBooking}
              whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(232,55,27,0.6)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              className="group relative bg-ember text-white font-bold text-lg px-10 py-4 rounded-xl hover:bg-ember-dark transition-colors shadow-2xl overflow-hidden"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/15 to-transparent skew-x-12" />
              <span className="relative">Book Your Free Strategy Call</span>
            </motion.button>
            <motion.button
              onClick={openForm}
              whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.16)', borderColor: 'rgba(255,255,255,0.45)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              className="bg-white/8 text-white font-semibold text-lg px-10 py-4 rounded-xl border border-white/18 hover:border-white/40 transition-colors"
            >
              Apply Now →
            </motion.button>
          </div>

          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-6 text-white/35 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {['100+ fitness studios served', '$3–$6 average cost per lead', 'Results within 60 days'].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="w-4 h-px bg-ember/60" />
                {item}
              </span>
            ))}
          </motion.div>
        </SectionReveal>
      </Container>
    </section>
  )
}
