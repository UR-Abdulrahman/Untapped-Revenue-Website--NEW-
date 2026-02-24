import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import StatsBar from '@/components/sections/StatsBar'
import ProblemSection from '@/components/sections/ProblemSection'
import SolutionSection from '@/components/sections/SolutionSection'
import CaseStudies from '@/components/sections/CaseStudies'
import Testimonials from '@/components/sections/Testimonials'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import PricingOverview from '@/components/sections/PricingOverview'
import FAQSection from '@/components/sections/FAQSection'
import FinalCTA from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'Done-For-You Fitness Studio Marketing — $46.3M Generated',
  description:
    '$46.3 million generated for 100+ fitness studios in 17 months. The Self-Sustaining AI Member Accelerator: ads, AI follow-up, CRM, booking — all done for you. Starting at $197/month.',
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ProblemSection />
      <SolutionSection />
      <CaseStudies />
      <Testimonials count={3} showLink />
      <HowItWorksSection />
      <PricingOverview />
      <FAQSection />
      <FinalCTA />
    </>
  )
}
