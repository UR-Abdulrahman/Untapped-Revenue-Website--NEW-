import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import { BookingCTA } from '@/components/ui/BookingCTA'
import BookingAutoOpen from './BookingAutoOpen'
import { BOOKING_URL, STATS } from '@/config/site'

export const metadata: Metadata = {
  title: 'Book a Free Strategy Call',
  description:
    'In 30 minutes, we\'ll map out exactly what it would take to add 25+ new members to your studio every month. No commitment, no sales pitch.',
  alternates: { canonical: '/book' },
}

export default function BookPage() {
  return (
    <section className="bg-[#1E3A5F] min-h-screen pt-28">
      <BookingAutoOpen />
      <Container>
        <div className="max-w-3xl mx-auto text-center py-20">
          <h1 className="text-5xl font-black text-white mb-6">
            Book Your Free Strategy Call
          </h1>
          <p className="text-xl text-white/60 mb-4">
            In 30 minutes, we&apos;ll map out exactly what it would take to add 25+ new members to your studio every month.
          </p>
          <p className="text-white/40 text-sm mb-12">
            No commitment. No sales pitch. Just a clear plan for your studio.
          </p>

          {/* Stats reminder */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {STATS.slice(0, 3).map((stat, i) => (
              <div key={i} className="bg-white/10 border border-white/20 rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-[#E8371B]">{stat.value}</div>
                <div className="text-white/50 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <BookingCTA label="Open Booking Calendar" size="lg" className="mb-10" />

          {/* Fallback direct embed */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-slate-100 px-5 py-3 border-b border-slate-200">
              <p className="text-slate-500 text-sm text-left">
                Or book directly below:
              </p>
            </div>
            <iframe
              src={BOOKING_URL}
              title="Book a Free Strategy Call"
              className="w-full border-0"
              style={{ height: '700px' }}
              allow="camera; microphone; autoplay; encrypted-media"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
