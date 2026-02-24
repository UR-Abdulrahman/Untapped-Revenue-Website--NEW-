'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Badge from '@/components/ui/Badge'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { SERVICE_TIERS } from '@/config/site'
import { useModal } from '@/components/modals/ModalContext'
import { GlowingEffect } from '@/components/ui/glowing-effect'

const ease = [0.22, 1, 0.36, 1] as const

export default function PricingOverview() {
  const { openBooking } = useModal()

  return (
    <Section navy className="noise overflow-hidden">
      <Container>
        <SectionReveal variant="fade-up" className="text-center mb-14">
          <Badge variant="ember" className="mb-4">Pricing</Badge>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
            Think of It Like{' '}
            <span className="text-ember">Costco</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            One entry-point website build unlocks wholesale pricing on our full suite of services. Starting at $197/month — a fraction of what traditional agencies charge.
          </p>
        </SectionReveal>

        {/* Cards — popular card extends taller via lg:-mt-4 lg:-mb-4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 lg:items-start">
          {SERVICE_TIERS.map((tier, i) => (
            <motion.div
              key={tier.id}
              className={`rounded-2xl relative overflow-hidden flex flex-col ${
                tier.popular
                  ? 'bg-linear-to-b from-ember to-[#c42f16] border-2 border-ember/60 shadow-2xl shadow-ember/30 lg:-mt-5 lg:mb-0'
                  : 'bg-white/5 border border-white/10'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
              whileHover={{ y: tier.popular ? -10 : -7, scale: tier.popular ? 1.03 : 1.02 }}
            >
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} variant="white" />

              {/* Popular full-width banner header */}
              {tier.popular ? (
                <div className="relative flex items-center justify-center gap-2.5 px-4 py-2.5 bg-white/15 border-b border-white/25 overflow-hidden">
                  {/* Shimmer sweep */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%)',
                      animation: 'shimmer 2.8s ease-in-out infinite',
                      backgroundSize: '200% 100%',
                    }}
                  />
                  <span className="animate-spin-y text-sm leading-none relative z-10">⭐</span>
                  <span className="text-white text-[11px] font-black uppercase tracking-[0.18em] relative z-10">
                    Most Popular
                  </span>
                  <span className="animate-spin-y text-sm leading-none relative z-10" style={{ animationDelay: '1s' }}>⭐</span>
                </div>
              ) : (
                /* Subtle top accent bar for non-popular */
                <div className="h-0.5 bg-linear-to-r from-white/0 via-white/10 to-white/0" />
              )}

              {/* Glow pulse overlay on popular */}
              {tier.popular && (
                <div className="absolute inset-0 rounded-2xl animate-glow-pulse pointer-events-none opacity-60" />
              )}

              {/* Card body */}
              <div className="p-5 flex flex-col flex-1">
                {/* Tier label + name */}
                <div className="mb-4">
                  <p className={`text-[10px] font-black uppercase tracking-[0.18em] mb-1 ${
                    tier.popular ? 'text-white/50' : 'text-white/25'
                  }`}>
                    Tier {i + 1}
                  </p>
                  <h3 className="text-white font-bold text-lg leading-tight">{tier.name}</h3>
                  <p className={`text-xs mt-1 ${tier.popular ? 'text-white/75' : 'text-white/45'}`}>
                    {tier.tagline}
                  </p>
                </div>

                {/* Price block */}
                <div className={`rounded-xl px-4 py-3 mb-5 ${
                  tier.popular ? 'bg-white/20 shadow-inner' : 'bg-white/5 border border-white/10'
                }`}>
                  <div className="flex items-end gap-1.5">
                    <span className="text-4xl font-black leading-none text-white tabular-nums">
                      {tier.priceUSD}
                    </span>
                    <span className={`text-sm font-semibold mb-0.5 ${tier.popular ? 'text-white/70' : 'text-white/40'}`}>
                      /mo USD
                    </span>
                  </div>
                  <div className={`text-xs mt-1.5 font-medium ${tier.popular ? 'text-white/55' : 'text-white/30'}`}>
                    {tier.priceCAD}/mo CAD
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-5 flex-1">
                  {tier.features.map((feature, fi) => (
                    <motion.li
                      key={fi}
                      className="flex items-start gap-2 text-sm"
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, ease, delay: i * 0.1 + fi * 0.06 + 0.3 }}
                    >
                      <svg
                        className={`w-4 h-4 mt-0.5 shrink-0 ${tier.popular ? 'text-white' : 'text-ember'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className={tier.popular ? 'text-white/90' : 'text-white/60'}>
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  onClick={openBooking}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                  className={`w-full py-2.5 rounded-xl text-sm font-bold transition-all ${
                    tier.popular
                      ? 'bg-white text-ember hover:bg-white/90 shadow-lg shadow-black/20'
                      : 'bg-white/8 text-white hover:bg-white/15 border border-white/15 hover:border-white/30'
                  }`}
                >
                  Book a Call to Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-white/40 text-sm">
            Prices shown in USD. CAD pricing available — ask on the call. Month-to-month, no long-term contracts.<br className="hidden sm:block" /> Website build required as entry point ($997–$1,500 one-time USD).
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}
