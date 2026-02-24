'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useModal } from '@/components/modals/ModalContext'
import { FOOTER_LINKS, BRAND } from '@/config/site'

const ease = [0.22, 1, 0.36, 1] as const

export default function Footer() {
  const { openBooking } = useModal()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-dark text-white relative overflow-hidden">
      {/* Decorative diagonal lines */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 44px)',
        }}
      />

      {/* Top ember line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, #E8371B 30%, #F0B429 70%, transparent 100%)' }}
      />

      {/* CTA Banner */}
      <motion.div
        className="relative border-b border-white/8 py-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-ember text-sm font-bold uppercase tracking-[0.18em] mb-2">Ready when you are</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Add 25+ members/month to your studio.
            </h2>
          </div>
          <motion.button
            onClick={openBooking}
            whileHover={{ scale: 1.05, boxShadow: '0 0 36px rgba(232,55,27,0.45)' }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 22 }}
            className="shrink-0 group relative bg-ember text-white font-bold text-base px-8 py-3.5 rounded-xl hover:bg-ember-dark transition-colors shadow-lg overflow-hidden"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/15 to-transparent skew-x-12" />
            <span className="relative">Book a Free Strategy Call →</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Main footer grid */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease }}
          >
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/brand/logo.png"
                alt="Untapped Revenue"
                width={160}
                height={40}
                className="h-9 w-auto object-contain animate-float"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6">
              Done-for-you marketing agency exclusively serving class-based fitness studios.
              $46.3M in revenue generated for 150+ studios in 17 months.
            </p>
            {/* Mini stats row */}
            <div className="flex flex-wrap gap-5">
              {[
                { value: '150+', label: 'Gyms Served' },
                { value: '$46.3M', label: 'Generated' },
                { value: '60%', label: 'Organic' },
                { value: '~$10', label: 'Avg Lead Cost' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-white font-black text-lg leading-none">{stat.value}</div>
                  <div className="text-white/35 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Company links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease, delay: 0.1 }}
          >
            <h3 className="text-white/80 font-semibold text-xs uppercase tracking-widest mb-5">Company</h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-white/45 hover:text-white text-sm transition-colors"
                  >
                    <span className="w-3 h-px bg-ember/40 group-hover:w-5 group-hover:bg-ember transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease, delay: 0.18 }}
          >
            <h3 className="text-white/80 font-semibold text-xs uppercase tracking-widest mb-5">Services</h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-white/45 hover:text-white text-sm transition-colors"
                  >
                    <span className="w-3 h-px bg-ember/40 group-hover:w-5 group-hover:bg-ember transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease, delay: 0.26 }}
          >
            <h3 className="text-white/80 font-semibold text-xs uppercase tracking-widest mb-5">Contact</h3>
            <div className="space-y-3 mb-6">
              {/* Email */}
              <a
                href="mailto:info@untapped-revenue.com"
                className="flex items-center gap-2.5 text-white/45 hover:text-white text-sm transition-colors group"
              >
                {/* Default envelope — hidden on hover */}
                <svg className="w-4 h-4 text-ember/60 group-hover:text-ember transition-colors shrink-0 group-hover:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                {/* Gmail icon — revealed on hover */}
                <svg className="w-4 h-4 shrink-0 hidden group-hover:block" viewBox="0 0 24 24" aria-hidden="true">
                  <defs>
                    <clipPath id="gmail-icon-clip">
                      <rect x="2" y="4.5" width="20" height="15" rx="1.5" />
                    </clipPath>
                  </defs>
                  {/* White envelope body */}
                  <rect x="2" y="4.5" width="20" height="15" rx="1.5" fill="white" />
                  {/* Blue — left side panel */}
                  <path d="M2 6.2L2 19L9.8 12Z" fill="#4285F4" clipPath="url(#gmail-icon-clip)" />
                  {/* Green — right side panel */}
                  <path d="M22 6.2L22 19L14.2 12Z" fill="#34A853" clipPath="url(#gmail-icon-clip)" />
                  {/* Yellow — bottom */}
                  <path d="M2 19L9.8 12L12 13.8L14.2 12L22 19Z" fill="#FBBC05" clipPath="url(#gmail-icon-clip)" />
                  {/* Red — top M/V flap */}
                  <path d="M2 4.5L12 13L22 4.5Z" fill="#EA4335" clipPath="url(#gmail-icon-clip)" />
                </svg>
                <span>info@untapped-revenue.com</span>
              </a>
              {/* Address */}
              <a
                href="https://www.google.com/maps/place/Untapped+Revenue/@43.4977745,-80.1888719,17z/data=!3m1!5s0x882b83621f1569e1:0x8849195b5c8fa105!4m15!1m8!3m7!1s0x882b83621ee31fe7:0xcf73951cce774221!2s332+Gosling+Gardens,+Guelph,+ON+N1L+0P8,+Canada!3b1!8m2!3d43.4977745!4d-80.186297!16s%2Fg%2F11g_rbn1ky!3m5!1s0xa9119fd6b36fa9ad:0x7d3ecf1ae3771304!8m2!3d43.497799!4d-80.1863078!16s%2Fg%2F11sc8jd___?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-2.5 text-white/45 hover:text-white text-sm transition-colors"
              >
                {/* Default map pin — visible when not hovered */}
                <svg className="w-4 h-4 text-ember/60 group-hover:text-ember shrink-0 mt-0.5 group-hover:hidden transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {/* Google Maps pin — revealed on hover */}
                <svg className="w-4 h-4 shrink-0 mt-0.5 hidden group-hover:block" viewBox="0 0 24 24" aria-hidden="true">
                  <defs>
                    <clipPath id="gmaps-pin-clip">
                      <path d="M12 2C7.58 2 4 5.58 4 10.5C4 17.64 12 21.75 12 21.75S20 17.64 20 10.5C20 5.58 16.42 2 12 2Z" />
                    </clipPath>
                  </defs>
                  {/* Blue — NW */}
                  <rect x="0" y="0" width="12" height="10.5" fill="#4285F4" clipPath="url(#gmaps-pin-clip)" />
                  {/* Red — NE */}
                  <rect x="12" y="0" width="12" height="10.5" fill="#EA4335" clipPath="url(#gmaps-pin-clip)" />
                  {/* Yellow — SW */}
                  <rect x="0" y="10.5" width="12" height="11.25" fill="#FBBC05" clipPath="url(#gmaps-pin-clip)" />
                  {/* Green — SE */}
                  <rect x="12" y="10.5" width="12" height="11.25" fill="#34A853" clipPath="url(#gmaps-pin-clip)" />
                  {/* White centre dot */}
                  <circle cx="12" cy="10.5" r="3" fill="white" clipPath="url(#gmaps-pin-clip)" />
                </svg>
                <span>332 Gosling Gardens, Guelph,<br />Ontario, N1L0P8</span>
              </a>
            </div>

            {/* Social links */}
            <h4 className="text-white/40 font-semibold text-xs uppercase tracking-widest mb-3">Follow Us</h4>
            <div className="flex flex-wrap gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/untappedrevenue_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="relative group w-8 h-8 rounded-lg overflow-hidden border border-white/10 hover:border-transparent flex items-center justify-center transition-all duration-250"
              >
                <span className="absolute inset-0 bg-white/8 group-hover:opacity-0 transition-opacity duration-250" />
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-250"
                  style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' }}
                />
                <svg className="w-4 h-4 text-white/45 group-hover:text-white relative z-10 transition-colors duration-250" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              {/* X / Twitter */}
              <a
                href="https://x.com/UntappedRevenue"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="relative group w-8 h-8 rounded-lg overflow-hidden border border-white/10 hover:border-transparent flex items-center justify-center transition-all duration-250"
              >
                <span className="absolute inset-0 bg-white/8 group-hover:opacity-0 transition-opacity duration-250" />
                <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-250" />
                <svg className="w-4 h-4 text-white/45 group-hover:text-white relative z-10 transition-colors duration-250" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A11697065&keywords=untapped%20revenue%20-%20membership%20growth%20for%20gyms%20%26%20fitness%20studios&origin=RICH_QUERY_SUGGESTION&position=1&searchId=65d45655-1a14-493a-95c6-1dbf84d0bed1&sid=h%3BF&spellCorrectionEnabled=false"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="relative group w-8 h-8 rounded-lg overflow-hidden border border-white/10 hover:border-transparent flex items-center justify-center transition-all duration-250"
              >
                <span className="absolute inset-0 bg-white/8 group-hover:opacity-0 transition-opacity duration-250" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-250" style={{ background: '#0A66C2' }} />
                <svg className="w-4 h-4 text-white/45 group-hover:text-white relative z-10 transition-colors duration-250" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@untapped-revenue"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="relative group w-8 h-8 rounded-lg overflow-hidden border border-white/10 hover:border-transparent flex items-center justify-center transition-all duration-250"
              >
                <span className="absolute inset-0 bg-white/8 group-hover:opacity-0 transition-opacity duration-250" />
                <span className="absolute inset-0 bg-[#FF0000] opacity-0 group-hover:opacity-100 transition-opacity duration-250" />
                <svg className="w-4 h-4 text-white/45 group-hover:text-white relative z-10 transition-colors duration-250" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {year} {BRAND.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {FOOTER_LINKS.legal.map((link) => (
              <Link key={link.href} href={link.href} className="text-white/30 hover:text-white/70 text-xs transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
