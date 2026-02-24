'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Badge from '@/components/ui/Badge'
import { SectionReveal, RevealItem } from '@/components/ui/SectionReveal'
import { FAQS } from '@/config/site'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section>
      <Container narrow>
        <SectionReveal variant="fade-up" className="text-center mb-12">
          <Badge variant="navy" className="mb-4">FAQ</Badge>
          <h2 className="text-4xl sm:text-5xl font-black text-[#1E3A5F] leading-tight mb-4">
            Questions? We Have{' '}
            <span className="text-[#E8371B]">Answers.</span>
          </h2>
          <p className="text-slate-500 text-xl">
            The most common questions from studio owners before they book their first call.
          </p>
        </SectionReveal>

        <SectionReveal stagger staggerDelay={0.07} delay={0.1}>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <RevealItem key={i}>
                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <motion.button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-white hover:bg-slate-50 transition-colors"
                    aria-expanded={openIndex === i}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.15 }}
                  >
                    <span className="font-semibold text-[#1E3A5F] text-base">{faq.question}</span>
                    <motion.svg
                      animate={{ rotate: openIndex === i ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="w-5 h-5 text-[#E8371B] flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                    </motion.svg>
                  </motion.button>

                  <AnimatePresence initial={false}>
                    {openIndex === i && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.04, 0.62, 0.23, 0.98] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
                          <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </RevealItem>
            ))}
          </div>
        </SectionReveal>
      </Container>
    </Section>
  )
}
