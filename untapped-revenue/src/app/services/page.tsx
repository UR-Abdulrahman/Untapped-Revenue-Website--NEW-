import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Badge from '@/components/ui/Badge'
import FinalCTA from '@/components/sections/FinalCTA'
import FAQSection from '@/components/sections/FAQSection'
import PricingOverview from '@/components/sections/PricingOverview'
import { BookingCTA } from '@/components/ui/BookingCTA'
import PageHero from '@/components/ui/PageHero'
import { GlowingEffect } from '@/components/ui/glowing-effect'
import { IDEAL_CLIENT } from '@/config/site'

export const metadata: Metadata = {
  title: 'Services & Pricing — Done-For-You Fitness Studio Marketing',
  description:
    'Costco-model pricing for fitness studios. Website & CRM, AI Follow-Up, Facebook/Instagram Ads, and Google Ads management — starting at $197/month.',
  alternates: { canonical: '/services' },
}

const comparisonFeatures = [
  { feature: 'Website & GHL Access', base: true, ai: true, fbig: true, google: true },
  { feature: 'Unlimited Website Changes', base: true, ai: true, fbig: true, google: true },
  { feature: 'Monthly Performance Reports', base: true, ai: true, fbig: true, google: true },
  { feature: 'Technical GHL Support', base: true, ai: true, fbig: true, google: true },
  { feature: 'AI Follow-Up System', base: false, ai: true, fbig: true, google: true },
  { feature: '24/7 Lead Management', base: false, ai: true, fbig: true, google: true },
  { feature: '1-Minute Response Time', base: false, ai: true, fbig: true, google: true },
  { feature: 'Facebook/Instagram Ads', base: false, ai: false, fbig: true, google: true },
  { feature: 'Sprint Testing (15–20 Offers)', base: false, ai: false, fbig: true, google: true },
  { feature: 'Daily Ad Optimization', base: false, ai: false, fbig: true, google: true },
  { feature: 'Creative Development', base: false, ai: false, fbig: true, google: true },
  { feature: 'Monthly Strategy Calls', base: false, ai: false, fbig: true, google: true },
  { feature: 'Google Ads Management', base: false, ai: false, fbig: false, google: true },
  { feature: 'Keyword Targeting', base: false, ai: false, fbig: false, google: true },
]

const doesntDo = [
  'Multiple simultaneous offers — one powerful, tested offer runs at a time',
  'Social media content creation or posting',
  'Custom email sequences',
  'Communication with your active members or trialers',
  'Custom landing page funnels (available as $300 one-time add-on)',
  'Mindbody/Zenplanner integration management (available in franchise model)',
]

const Check = () => (
  <svg className="w-5 h-5 text-[#E8371B] mx-auto" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
  </svg>
)
const X = () => (
  <svg className="w-4 h-4 text-slate-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
  </svg>
)

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Services & Pricing"
        title={<>The Costco Model for{' '}<span className="text-ember">Fitness Marketing</span></>}
        description="One entry-point website build unlocks wholesale pricing on our full suite of services. Pay only for what you need, month to month, no long-term commitment."
      >
        <BookingCTA size="lg" />
      </PageHero>

      {/* Required Entry Point */}
      <Section className="bg-slate-50">
        <Container>
          <div className="text-center mb-10">
            <Badge variant="ember" className="mb-4">Step 1 — Required</Badge>
            <h2 className="text-4xl font-black text-[#1E3A5F] mb-4">
              The Foundation: Website Build
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              This one-time investment creates your digital foundation and unlocks access to our full service suite at wholesale pricing.
            </p>
          </div>

          <div className="relative max-w-2xl mx-auto bg-white rounded-2xl border-2 border-navy p-8 shadow-lg">
            <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-black text-[#1E3A5F]">Website Build</h3>
                <p className="text-slate-500">One-time investment</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-black text-[#E8371B]">$997–$1,500</div>
                <div className="text-slate-400 text-sm">USD one-time</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                'Complete website build in GoHighLevel',
                'Unlimited adjustments during build',
                'On-page SEO optimization',
                'Mobile-responsive design',
                'Full GoHighLevel account setup',
                'A2P 10DLC phone registration',
                'Google Analytics + Search Console setup',
                'Integration-ready for all UR systems',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                  <svg className="w-4 h-4 text-[#E8371B] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  {item}
                </div>
              ))}
            </div>

            <BookingCTA
              label="Book a Call to Get Started →"
              className="w-full bg-[#1E3A5F] hover:bg-[#142740] border-0 rounded-xl py-3.5 text-base justify-center"
            />
          </div>
        </Container>
      </Section>

      {/* Tier Cards */}
      <PricingOverview />

      {/* Investment Scenarios */}
      <Section className="bg-slate-50">
        <Container>
          <div className="text-center mb-10">
            <Badge variant="navy" className="mb-4">Investment Overview</Badge>
            <h2 className="text-4xl font-black text-navy mb-3">What to Expect to Invest</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Every plan starts with the one-time website build, then add services as you grow.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-160 text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left py-3.5 px-5 font-semibold rounded-tl-xl">Scenario</th>
                  <th className="text-center py-3.5 px-4 font-semibold">One-Time Setup</th>
                  <th className="text-center py-3.5 px-4 font-semibold">Monthly (USD)</th>
                  <th className="text-center py-3.5 px-4 font-semibold">Monthly (CAD)</th>
                  <th className="text-center py-3.5 px-4 font-semibold rounded-tr-xl">Est. Annual Total (USD)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { scenario: 'Website & CRM Only', setup: '$997–$1,500', usd: '$197', cad: '$297', annual: '~$3,861' },
                  { scenario: '+ AI Follow-Up System', setup: '$997–$1,500', usd: '$297', cad: '$447', annual: '~$5,061' },
                  { scenario: 'Complete Social System (FB/IG Ads)', setup: '$997–$1,500', usd: '$600', cad: '$700', annual: '~$8,697', popular: true },
                  { scenario: 'Multi-Channel (FB/IG + Google)', setup: '$997–$1,500', usd: '$900', cad: '$1,100', annual: '~$12,297' },
                  { scenario: 'Franchise / Full-Service', setup: '$997–$1,500', usd: '$997', cad: '$1,300', annual: '~$13,461' },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-slate-100 ${
                      row.popular
                        ? 'bg-ember/5 font-semibold'
                        : i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'
                    }`}
                  >
                    <td className="py-3.5 px-5 text-navy font-semibold">
                      {row.popular && <span className="animate-spin-y mr-1.5">⭐</span>}
                      {row.scenario}
                    </td>
                    <td className="py-3.5 px-4 text-center text-slate-600">{row.setup}</td>
                    <td className={`py-3.5 px-4 text-center font-bold ${row.popular ? 'text-ember' : 'text-navy'}`}>{row.usd}</td>
                    <td className="py-3.5 px-4 text-center text-slate-500">{row.cad}</td>
                    <td className="py-3.5 px-4 text-center text-slate-600">{row.annual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-slate-400 text-xs mt-4">
            Annual totals include one-time setup at midpoint ($1,250) + 12 months of monthly fees. Month-to-month, no long-term contracts.
          </p>
        </Container>
      </Section>

      {/* Comparison table */}
      <Section>
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-[#1E3A5F] mb-3">Feature Comparison</h2>
            <p className="text-slate-500">See exactly what&apos;s included in each tier.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-[#1E3A5F]">
                  <th className="text-left py-3 pr-4 text-[#1E3A5F] font-bold text-sm">Feature</th>
                  <th className="text-center py-3 px-3 text-[#1E3A5F] font-bold text-sm">Base</th>
                  <th className="text-center py-3 px-3 text-[#1E3A5F] font-bold text-sm">+ AI</th>
                  <th className="text-center py-3 px-3 text-[#E8371B] font-bold text-sm">FB/IG <span className="animate-spin-y">⭐</span></th>
                  <th className="text-center py-3 px-3 text-[#1E3A5F] font-bold text-sm">+ Google</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, i) => (
                  <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-slate-50/50' : ''}`}>
                    <td className="py-3 pr-4 text-slate-600 text-sm">{row.feature}</td>
                    <td className="py-3 px-3">{row.base ? <Check /> : <X />}</td>
                    <td className="py-3 px-3">{row.ai ? <Check /> : <X />}</td>
                    <td className="py-3 px-3">{row.fbig ? <Check /> : <X />}</td>
                    <td className="py-3 px-3">{row.google ? <Check /> : <X />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* Ideal Client */}
      <Section>
        <Container>
          <div className="text-center mb-10">
            <Badge variant="ember" className="mb-4">Who We Work With</Badge>
            <h2 className="text-4xl font-black text-navy mb-3">Built for a Very Specific Studio</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              We only serve class-based fitness studios. That focus is why our results are unmatched.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* We Work With */}
            <div className="relative bg-white rounded-2xl border border-slate-100 shadow-sm p-7">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              <div className="flex items-center gap-2 mb-5">
                <span className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </span>
                <h3 className="text-navy font-bold text-lg">We Work With</h3>
              </div>
              <ul className="space-y-3">
                {IDEAL_CLIENT.weWorkWith.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* We Don't Work With */}
            <div className="relative bg-white rounded-2xl border border-slate-100 shadow-sm p-7">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              <div className="flex items-center gap-2 mb-5">
                <span className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                  <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </span>
                <h3 className="text-navy font-bold text-lg">We Don&apos;t Work With</h3>
              </div>
              <ul className="space-y-3">
                {IDEAL_CLIENT.weDontWorkWith.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-red-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-slate-500 text-sm mb-4">
              Not sure if you qualify? Book a free 15-min strategy call — we&apos;ll tell you honestly.
            </p>
            <BookingCTA label="Book a Free Strategy Call" />
          </div>
        </Container>
      </Section>

      {/* Franchise / Full-Service Tier */}
      <Section className="bg-slate-50">
        <Container narrow>
          <div className="relative bg-navy rounded-2xl p-8 md:p-10 overflow-hidden">
            <GlowingEffect spread={60} glow={true} disabled={false} proximity={80} inactiveZone={0.01} borderWidth={2} variant="white" />
            {/* Background accent */}
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full blur-[80px] pointer-events-none" style={{ background: 'rgba(232,55,27,0.15)' }} />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-1">
                <Badge variant="ember" className="mb-4">Enterprise / Franchise</Badge>
                <h2 className="text-3xl font-black text-white mb-2">Full-Service & Multi-Location</h2>
                <p className="text-white/60 mb-5">
                  Running multiple locations or a franchise? We offer white-glove onboarding, dedicated account management, Mindbody/Zenplanner integration, and multi-location operations support — all under one roof.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {[
                    'Mindbody / Zenplanner integration',
                    'White-glove onboarding',
                    'Dedicated account manager',
                    'Multi-location campaign management',
                    'Custom reporting dashboards',
                    'Priority support',
                  ].map((f, i) => (
                    <span key={i} className="bg-white/10 border border-white/15 text-white/70 text-xs px-3 py-1.5 rounded-full">
                      {f}
                    </span>
                  ))}
                </div>
                <div className="text-ember font-black text-xl">$997/mo USD · $1,300/mo CAD</div>
                <div className="text-white/40 text-xs mt-1">+ one-time website build per location</div>
              </div>
              <div className="shrink-0">
                <BookingCTA label="Talk to Us About Franchise" size="lg" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* What We Don't Do */}
      <Section className="bg-slate-900">
        <Container narrow>
          <div className="text-center mb-10">
            <Badge className="mb-4 bg-white/10 text-white/60">Transparency</Badge>
            <h2 className="text-4xl font-black text-white mb-3">What We Don&apos;t Do</h2>
            <p className="text-white/50 text-lg">
              Transparency builds trust. Here&apos;s exactly what falls outside our scope.
            </p>
          </div>
          <div className="space-y-3">
            {doesntDo.map((item, i) => (
              <div key={i} className="relative flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-3.5">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} variant="white" />
                <svg className="w-4 h-4 text-white/30 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
                <span className="text-white/60 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <FAQSection />
      <FinalCTA />
    </>
  )
}
