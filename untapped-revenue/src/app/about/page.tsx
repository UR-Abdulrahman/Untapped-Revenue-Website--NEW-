import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Badge from '@/components/ui/Badge'
import FinalCTA from '@/components/sections/FinalCTA'
import { BookingCTA } from '@/components/ui/BookingCTA'
import { IDEAL_CLIENT } from '@/config/site'
import PageHero from '@/components/ui/PageHero'
import { GlowingEffect } from '@/components/ui/glowing-effect'

export const metadata: Metadata = {
  title: 'About — The Only Agency Built Exclusively for Fitness Studios',
  description:
    'Untapped Revenue: 8 years in fitness marketing, $46.3M generated for 100+ studios. Exclusively serves class-based fitness studios — yoga, Pilates, CrossFit, HIIT, MMA, and more.',
  alternates: { canonical: '/about' },
}

// TODO: Replace with actual team member data from Alec
const team = [
  {
    name: 'Alec',
    role: 'Founder & CEO',
    bio: '8 years managing fitness marketing. Directed millions in ad spend across 100+ class-based fitness studios. Built the sprint testing and algorithmic bias systems from the ground up.',
  },
  { name: 'TODO', role: 'Client Success', bio: '// TODO: Add bio from Alec' },
  { name: 'TODO', role: 'Lead Designer', bio: '// TODO: Add bio from Alec' },
  { name: 'TODO', role: 'Operations', bio: '// TODO: Add bio from Alec' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="Our Story"
        title={<>The Only Agency{' '}<span className="text-ember">Built Exclusively</span>{' '}for Fitness Studios</>}
        description="We don't work with restaurants, e-commerce, or real estate. Every system we've built is engineered specifically for class-based fitness studios — and nothing else."
        variant="about"
      />

      {/* Founder section */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="ember" className="mb-4">Founder</Badge>
              <h2 className="text-4xl font-black text-navy mb-6">
                Built by Someone Who&apos;s Been in the Trenches
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Alec founded Untapped Revenue after 8 years managing marketing for fitness studios — directing millions of dollars in ad spend and watching firsthand how generic agencies repeatedly failed the studios they were supposed to be helping.
                </p>
                <p>
                  The pattern was always the same: an agency serving 12 different industries would apply a recycled playbook to a yoga studio or CrossFit gym. The ads would generate leads for 2–3 weeks, then collapse. The agency would blame the market. The studio owner would cancel and try someone else.
                </p>
                <p>
                  Untapped Revenue was built to solve that problem at the root: with systems engineered specifically for how fitness studios acquire, convert, and retain members.
                </p>
                <p className="font-semibold text-navy">
                  $46.3 million in client revenue later, the results speak for themselves.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '8', unit: ' Years', label: 'In Fitness Marketing' },
                { value: '$46.3M', unit: '', label: 'Revenue Generated' },
                { value: '100+', unit: '', label: 'Studios Served' },
                { value: '17', unit: ' Months', label: 'Documented Results' },
              ].map((stat, i) => (
                <div key={i} className="relative bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center">
                  <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                  <div className="text-3xl font-black text-ember mb-1">
                    {stat.value}<span className="text-xl">{stat.unit}</span>
                  </div>
                  <div className="text-slate-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Mission */}
      <Section navy>
        <Container narrow>
          <div className="text-center">
            <Badge variant="ember" className="mb-4">Our Mission</Badge>
            <blockquote className="text-3xl sm:text-4xl font-black text-white leading-tight">
              &ldquo;Help 200 gym and fitness studio owners double their memberships while giving them back their time — so they can stop wearing every hat in their business and start running it like a real company.&rdquo;
            </blockquote>
          </div>
        </Container>
      </Section>

      {/* Why fitness-only */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-4">
              <Badge variant="navy" className="mb-2">Why Fitness-Only?</Badge>
              <h2 className="text-4xl font-black text-navy mb-4">
                Specialization Is Why Our Results Don&apos;t Decline
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Generalist agencies serving 12 different industries will never understand your business the way we do. We know your seasonality, common objections, membership pricing models, trial conversion benchmarks, and MindBody/Zenplanner integrations.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Every script, every automation, every ad template, every reporting framework — built specifically for one industry. That depth is why our clients&apos; results improve month over month.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="font-black text-navy text-xl mb-6">Studios we work with:</h3>
              <div className="grid grid-cols-2 gap-2">
                {['Yoga', 'Pilates', 'CrossFit', 'HIIT', 'MMA', 'Kickboxing', 'Barre', 'Dance Fitness'].map((type) => (
                  <div key={type} className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-slate-100 text-sm">
                    <span className="w-2 h-2 rounded-full bg-ember" />
                    <span className="text-slate-600 font-medium">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Team */}
      <Section className="bg-slate-50">
        <Container>
          <div className="text-center mb-12">
            <Badge variant="ember" className="mb-4">The Team</Badge>
            <h2 className="text-4xl font-black text-navy mb-4">Who&apos;s Behind the System</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <div key={i} className="relative bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                <div className="w-14 h-14 rounded-full bg-navy/10 flex items-center justify-center mb-4 text-2xl font-black text-navy">
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-bold text-navy text-lg mb-0.5">{member.name}</h3>
                <p className="text-ember text-xs font-semibold uppercase tracking-wider mb-3">{member.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Who we work with */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Badge variant="ember" className="mb-4">We Work With</Badge>
              <h3 className="text-2xl font-black text-navy mb-5">The Right Fit</h3>
              <ul className="space-y-3">
                {IDEAL_CLIENT.weWorkWith.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-ember mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-slate-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Badge variant="neutral" className="mb-4">We Don&apos;t Work With</Badge>
              <h3 className="text-2xl font-black text-navy mb-5">Not the Right Fit</h3>
              <ul className="space-y-3">
                {IDEAL_CLIENT.weDontWorkWith.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-slate-300 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                    <span className="text-slate-500 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <BookingCTA label="See If We're a Fit — Book a Free Call" size="lg" />
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  )
}
