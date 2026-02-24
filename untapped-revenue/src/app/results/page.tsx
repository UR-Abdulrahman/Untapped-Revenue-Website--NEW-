import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Badge from '@/components/ui/Badge'
import FinalCTA from '@/components/sections/FinalCTA'
import { BookingCTA } from '@/components/ui/BookingCTA'
import { CASE_STUDIES, KPI_BENCHMARKS, STATS } from '@/config/site'
import Testimonials from '@/components/sections/Testimonials'
import VideoGrid from '@/components/sections/VideoGrid'
import PageHero from '@/components/ui/PageHero'
import { GlowingEffect } from '@/components/ui/glowing-effect'

export const metadata: Metadata = {
  title: 'Results & Case Studies — $46.3M Generated for 150+ Studios',
  description:
    'Documented case studies: Shauna (+129 members, 4 months), Dan (+227 members, 11 months), Haley (+100 members, 3 months). Real numbers from real fitness studios.',
  alternates: { canonical: '/results' },
}

export default function ResultsPage() {
  return (
    <>
      <PageHero
        badge="Documented Results"
        title={<>$46.3 Million. 150+ Studios.{' '}<span className="text-ember">17 Months.</span></>}
        description="Not projections. Numbers pulled directly from client MindBody accounts, CRM pipelines, and ad dashboards."
        variant="results"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mt-4">
          {STATS.slice(0, 4).map((stat, i) => (
            <div key={i} className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} variant="white" />
              <div className="text-3xl font-black text-ember mb-1">{stat.value}</div>
              <div className="text-white/60 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </PageHero>

      {/* KPI Benchmarks */}
      <Section className="bg-slate-50">
        <Container>
          <div className="text-center mb-12">
            <Badge variant="navy" className="mb-4">Performance Benchmarks</Badge>
            <h2 className="text-4xl font-black text-[#1E3A5F] mb-4">
              The Numbers We&apos;re Held To
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Every campaign is tracked against these benchmarks.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="grid grid-cols-3 bg-[#1E3A5F] py-3 px-6">
              <div className="text-white/60 text-xs font-semibold uppercase tracking-wider">Metric</div>
              <div className="text-white/60 text-xs font-semibold uppercase tracking-wider text-center">Our Target</div>
              <div className="text-white/60 text-xs font-semibold uppercase tracking-wider text-right">Context</div>
            </div>
            {KPI_BENCHMARKS.map((kpi, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 py-4 px-6 items-center ${i % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'} border-b border-slate-100`}
              >
                <div className="text-[#1E3A5F] font-semibold text-sm">{kpi.metric}</div>
                <div className="text-[#E8371B] font-black text-lg text-center">{kpi.target}</div>
                <div className="text-slate-400 text-xs text-right">{kpi.note}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Case Studies */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <Badge variant="ember" className="mb-4">Case Studies</Badge>
            <h2 className="text-4xl font-black text-[#1E3A5F] mb-4">
              Real Studios. Real Numbers.
            </h2>
          </div>

          <div className="space-y-8">
            {CASE_STUDIES.map((study, i) => (
              <div key={study.id} className="relative rounded-2xl border border-slate-100 shadow-sm">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                <div className={`overflow-hidden rounded-2xl flex flex-col ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  <div className="bg-navy p-8 md:w-2/5 flex flex-col justify-between">
                    <div>
                      <Badge variant="ember" className="mb-3">{study.studioType}</Badge>
                      <h3 className="text-white font-black text-2xl mb-1">{study.name}</h3>
                      <p className="text-white/50 text-sm mb-4">{study.timeframe}</p>
                      <p className="text-ember font-bold text-xl leading-snug">{study.headline}</p>
                    </div>
                    <blockquote className="mt-6 border-l-2 border-ember pl-4 text-white/60 text-sm italic leading-relaxed">
                      &ldquo;{study.quote}&rdquo;
                      <footer className="text-white/40 text-xs mt-1 not-italic">— {study.name}</footer>
                    </blockquote>
                  </div>

                  <div className="bg-white p-8 md:w-3/5">
                    <div className="grid grid-cols-2 gap-4 h-full content-center">
                      {study.metrics.map((m, j) => (
                        <div key={j} className="relative bg-slate-50 rounded-xl p-4 border border-slate-100">
                          <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                          <div className="text-navy font-black text-2xl mb-1">{m.value}</div>
                          <div className="text-slate-500 text-xs">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Video Testimonials */}
      <Section className="bg-navy-dark">
        <Container>
          <div className="text-center mb-10">
            <Badge variant="ember" className="mb-4">Video Testimonials</Badge>
            <h2 className="text-4xl font-black text-white mb-4">Hear It From Our Clients</h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Unscripted. Unedited. Real studio owners sharing their experience.
            </p>
          </div>

          <VideoGrid />

          {/* "Many more" indicator */}
          <div className="mt-10 mb-2 flex flex-col items-center gap-5">
            {/* Copy */}
            <div className="text-center space-y-1.5">
              <p className="text-white/65 text-sm tracking-wide">
                You&apos;re seeing{' '}
                <span className="text-white font-semibold">6</span>{' '}
                of{' '}
                <span className="text-ember font-bold text-base">150+</span>{' '}
                documented client success stories
              </p>
              <p className="text-white/30 text-xs uppercase tracking-[0.15em]">
                Real studios · Real numbers · New results added monthly
              </p>
            </div>

            {/* Thin ember divider */}
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-ember/50 to-transparent" />
          </div>

          <div className="text-center mt-8">
            <BookingCTA label="Get Results Like These" size="lg" />
          </div>
        </Container>
      </Section>

      {/* Written Testimonials */}
      <Testimonials />

      <FinalCTA />
    </>
  )
}
