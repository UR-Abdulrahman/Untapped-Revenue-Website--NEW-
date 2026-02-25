'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { TESTIMONIALS } from '@/config/site'
import { GlowingEffect } from '@/components/ui/glowing-effect'

const ease = [0.22, 1, 0.36, 1] as const

function StarRow() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials({
  count,
  showLink = false,
}: {
  count?: number
  showLink?: boolean
}) {
  const items = count ? TESTIMONIALS.slice(0, count) : TESTIMONIALS

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="inline-block bg-ember/10 text-ember text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Client Voices
          </span>
          <h2 className="text-4xl font-black text-[#1E3A5F] mb-4">What Our Clients Say</h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Real gym and studio owners. Real results.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease, delay: i * 0.07 }}
              className="relative bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col"
            >
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              <StarRow />

              <blockquote className="border-l-2 border-ember pl-4 text-slate-600 text-sm leading-relaxed italic flex-1 mb-5">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="border-t border-slate-100 pt-4 flex items-center gap-3">
                {/* Avatar — photo if available, else initial */}
                {'photo' in t && t.photo ? (
                  <Image
                    src={t.photo as string}
                    alt={t.name}
                    width={36}
                    height={36}
                    className="w-9 h-9 rounded-full object-cover ring-2 ring-slate-100 shrink-0"
                  />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-navy flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-sm">{t.name.charAt(0)}</span>
                  </div>
                )}
                <div>
                  <div className="text-[#1E3A5F] font-bold text-sm leading-tight">{t.name}</div>
                  <div className="text-slate-400 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See all link */}
        {showLink && (
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/results"
              className="inline-flex items-center gap-2 text-[#1E3A5F] font-semibold text-sm hover:text-ember transition-colors"
            >
              See other case studies & testimonials
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}
