import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import FinalCTA from '@/components/sections/FinalCTA'
import { BookingCTA } from '@/components/ui/BookingCTA'
import { HOW_IT_WORKS } from '@/config/site'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'How It Works — From Strategy Call to 25+ New Bookings/Month',
  description:
    'Six-step process: strategy call → website build → sprint testing → AI follow-up → weekly reports → scale. Most clients hit 25+ bookings/month within 60 days.',
  alternates: { canonical: '/how-it-works' },
}

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        badge="The Process"
        title={<>From Strategy Call to{' '}<span className="text-ember">Full Member Acquisition System</span></>}
        description="Six steps. 60–90 days to your revenue target."
      >
        <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-5 py-2">
          <span className="w-2 h-2 bg-ember rounded-full animate-pulse" />
          <span className="text-white/80 text-sm font-medium">
            Most clients hit 25+ new bookings/month within 60 days
          </span>
        </div>
      </PageHero>

      {/* Steps */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.step} className="flex gap-6 mb-10 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#1E3A5F] text-white font-black text-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    {step.step}
                  </div>
                  {i < HOW_IT_WORKS.length - 1 && (
                    <div className="w-0.5 flex-1 bg-slate-200 my-3" />
                  )}
                </div>

                <div className="flex-1 pb-2">
                  <div className="flex items-start gap-3 flex-wrap mb-2">
                    <h2 className="text-[#1E3A5F] font-black text-2xl">{step.title}</h2>
                    {step.timeframe && (
                      <span className="bg-[#E8371B]/10 text-[#E8371B] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mt-1">
                        {step.timeframe}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>

                  {step.step === 3 && (
                    <div className="mt-4 bg-[#1E3A5F]/5 border border-[#1E3A5F]/20 rounded-xl p-4">
                      <p className="text-[#1E3A5F] text-sm font-semibold mb-3">
                        💡 Sprint Testing vs. Traditional Method:
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-slate-100 rounded-lg p-3">
                          <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Traditional</p>
                          <p className="text-slate-700 text-sm font-bold">$200–$400/test</p>
                          <p className="text-slate-500 text-xs">1 offer tested at a time</p>
                        </div>
                        <div className="bg-[#E8371B]/10 rounded-lg p-3">
                          <p className="text-[#E8371B] text-xs uppercase tracking-wider mb-1">Our Method</p>
                          <p className="text-[#1E3A5F] text-sm font-bold">~$30 total</p>
                          <p className="text-slate-600 text-xs">15–20 offers simultaneously</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {step.step === 6 && (
                    <div className="mt-4 bg-[#E8371B]/5 border border-[#E8371B]/20 rounded-xl p-4">
                      <p className="text-[#E8371B] text-sm font-bold">
                        🎯 Scale Protocol: 20–30% spend increase every 3 days once hitting 25+ bookings/month
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Demo video placeholder */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-black text-[#1E3A5F] mb-6">See the System in Action</h3>
            <div className="max-w-2xl mx-auto bg-slate-100 rounded-2xl aspect-video flex items-center justify-center">
              <div className="text-center text-slate-400">
                <svg className="w-16 h-16 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
                <p className="text-sm">Demo Video</p>
                <p className="text-xs mt-1">TODO: embed demo/walkthrough video here</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container narrow>
          <div className="text-center">
            <h2 className="text-4xl font-black text-[#1E3A5F] mb-4">
              Ready to See Step 1 in Action?
            </h2>
            <p className="text-slate-500 text-xl mb-8">
              Book your free strategy call. In 30 minutes, we&apos;ll map out exactly what this would look like for your studio.
            </p>
            <BookingCTA size="lg" />
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  )
}
