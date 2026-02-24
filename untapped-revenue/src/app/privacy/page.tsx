import type { Metadata } from 'next'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Untapped Revenue.',
  robots: { index: false, follow: false },
}

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-20">
      <Container narrow>
        <h1 className="text-4xl font-black text-[#1E3A5F] mb-4">Privacy Policy</h1>
        <p className="text-slate-400 text-sm mb-10">Last updated: February 2026</p>

        {/* TODO: Replace with actual privacy policy copy from legal counsel */}
        <div className="prose prose-lg prose-headings:text-[#1E3A5F] prose-p:text-slate-600 max-w-none">
          <p className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-700 text-sm not-prose">
            <strong>TODO:</strong> Replace this placeholder with your actual Privacy Policy. Consult with legal counsel to ensure compliance with applicable laws (GDPR, CCPA, etc.).
          </p>

          <h2>Information We Collect</h2>
          <p>
            Untapped Revenue collects information you provide directly to us when you book a strategy call, complete a contact form, or otherwise interact with our services. This may include your name, email address, phone number, and information about your fitness studio.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to communicate with you about our services, respond to your inquiries, and provide the marketing services you have requested.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at hello@untapped-revenue.com.
          </p>
        </div>
      </Container>
    </section>
  )
}
