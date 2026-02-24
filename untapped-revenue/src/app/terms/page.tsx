import type { Metadata } from 'next'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Untapped Revenue.',
  robots: { index: false, follow: false },
}

export default function TermsPage() {
  return (
    <section className="pt-32 pb-20">
      <Container narrow>
        <h1 className="text-4xl font-black text-[#1E3A5F] mb-4">Terms of Service</h1>
        <p className="text-slate-400 text-sm mb-10">Last updated: February 2026</p>

        {/* TODO: Replace with actual terms of service from legal counsel */}
        <div className="prose prose-lg prose-headings:text-[#1E3A5F] prose-p:text-slate-600 max-w-none">
          <p className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-700 text-sm not-prose">
            <strong>TODO:</strong> Replace this placeholder with your actual Terms of Service. Consult with legal counsel.
          </p>

          <h2>Acceptance of Terms</h2>
          <p>
            By accessing or using the Untapped Revenue website or services, you agree to be bound by these Terms of Service.
          </p>

          <h2>Services</h2>
          <p>
            Untapped Revenue provides done-for-you marketing services for class-based fitness studios. Specific service terms are outlined in individual service agreements.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these Terms? Contact us at hello@untapped-revenue.com.
          </p>
        </div>
      </Container>
    </section>
  )
}
