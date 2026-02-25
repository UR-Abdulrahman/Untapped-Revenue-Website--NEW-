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

type TeamMember = {
  initial: string
  photo?: string
  imgPosition?: string
  photos?: { src: string; name: string }[]
  name: string
  role: string
  bio: string
}

const team: TeamMember[] = [
  {
    initial: 'A',
    photo: '/brand/team/Alec.png',
    name: 'Alec',
    role: 'Co-Founder & CEO',
    bio: "Alec leads sales and marketing at Untapped Revenue. With 8+ years in fitness studio marketing and client success, he's helped shape our ad strategies, delivery systems, and the GoHighLevel framework that powers our client results.",
  },
  {
    initial: 'D',
    photo: '/brand/team/Derek.jpg',
    name: 'Derek Vervoorn',
    role: 'Co-Founder & Operations Lead',
    bio: "Derek leads operations and delivery. He's focused on building reliable systems, improving execution quality, and ensuring clients get consistent results at scale.",
  },
  {
    initial: 'MS',
    photo: '/brand/team/Mary.png',
    name: 'Mary Smith',
    role: 'Operations & Admin',
    bio: 'Internal operations and coordination\u2014process clarity, reporting support, and keeping delivery workflows running smoothly.',
  },
  {
    initial: 'CW',
    photo: '/brand/team/Cheryl.jpg',
    name: 'Cheryl Wan',
    role: 'Client Success Manager',
    bio: 'Client support and success\u2014keeping studios on track, improving communication, and making sure deliverables stay organized and moving.',
  },
  {
    initial: 'AO',
    photos: [
      { src: '/brand/team/Jason.jpg', name: 'Jason Debruyn' },
      { src: '/brand/team/Jordon.jpg', name: 'Jordan Morris' },
    ],
    name: 'Jason Debruyn & Jordan Morris',
    role: 'Ads Operations',
    bio: 'Campaign execution and optimization\u2014managing paid media performance, reporting, and ongoing improvements across accounts.',
  },
  {
    initial: 'AH',
    photo: '/brand/team/Me.jpg',
    imgPosition: 'top',
    name: 'Abdulrahman Halabi',
    role: 'AI Automation Specialist',
    bio: 'Abdulrahman creates AI automation solutions and systems\u2014building workflows that connect tools and reduce manual work\u2014while also building high-performing websites.',
  },
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <Badge variant="ember" className="mb-4">Founder</Badge>
              <h2 className="text-4xl font-black text-navy mb-6">
                Built by Someone Who&apos;s Been in the Trenches
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Alec founded Untapped Revenue after 8 years managing marketing for fitness studios &mdash; directing millions of dollars in ad spend and watching firsthand how generic agencies repeatedly failed the studios they were supposed to be helping.
                </p>
                <p>
                  The pattern was always the same: an agency serving 12 different industries would apply a recycled playbook to a yoga studio or CrossFit gym. The ads would generate leads for 2&ndash;3 weeks, then collapse. The agency would blame the market. The studio owner would cancel and try someone else.
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
            <blockquote className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black text-white leading-tight">
              &ldquo;Help 200 gym and fitness studio owners double their memberships while giving them back their time &mdash; so they can stop wearing every hat in their business and start running it like a real company.&rdquo;
            </blockquote>
          </div>
        </Container>
      </Section>

      {/* Why fitness-only */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-4">
              <Badge variant="navy" className="mb-2">Why Fitness-Only?</Badge>
              <h2 className="text-4xl font-black text-navy mb-4">
                Specialization Is Why Our Results Don&apos;t Decline
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Generalist agencies serving 12 different industries will never understand your business the way we do. We know your seasonality, common objections, membership pricing models, trial conversion benchmarks, and MindBody/Zenplanner integrations.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Every script, every automation, every ad template, every reporting framework &mdash; built specifically for one industry. That depth is why our clients&apos; results improve month over month.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((member, i) => (
              <div key={i} className="relative bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />

                {/* Avatar — dual photos, single photo, or initial fallback */}
                {member.photos ? (
                  <div className="flex -space-x-3 mb-4">
                    {member.photos.map((p) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={p.name}
                        src={p.src}
                        alt={p.name}
                        className="w-14 h-14 rounded-full object-cover ring-2 ring-white"
                      />
                    ))}
                  </div>
                ) : member.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-slate-100 mb-4"
                    style={member.imgPosition ? { objectPosition: member.imgPosition } : undefined}
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-navy/10 flex items-center justify-center mb-4 font-black text-navy text-lg">
                    {member.initial}
                  </div>
                )}

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
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
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
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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
