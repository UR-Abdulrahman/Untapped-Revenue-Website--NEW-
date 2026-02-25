'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useModal } from '@/components/modals/ModalContext'
import { NAV_LINKS } from '@/config/site'
import { cn } from '@/lib/utils'

const ease = [0.22, 1, 0.36, 1] as const

export default function Header() {
  const { openBooking } = useModal()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-400',
        scrolled
          ? 'bg-navy-dark/96 backdrop-blur-xl shadow-2xl py-3 border-b border-white/6'
          : 'bg-navy-dark/80 backdrop-blur-sm py-5'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <Link
              href="/"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
              className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-md"
            >
              <Image
                src="/brand/ur-logo.png"
                alt="Untapped Revenue"
                width={320}
                height={64}
                className="h-14 w-auto object-contain"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link, i) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease, delay: 0.1 + i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={cn(
                      'relative px-3 py-2 text-sm font-medium rounded-md transition-colors group',
                      isActive ? 'text-white' : 'text-white/65 hover:text-white hover:bg-white/8'
                    )}
                  >
                    {link.label}
                    {/* Active underline */}
                    <span
                      className={cn(
                        'absolute bottom-0 left-3 right-3 h-px transition-all duration-300',
                        isActive
                          ? 'bg-ember opacity-100'
                          : 'bg-ember opacity-0 group-hover:opacity-50 scale-x-0 group-hover:scale-x-100 origin-left'
                      )}
                    />
                  </Link>
                </motion.div>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <motion.div
            className="hidden md:flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
          >
            <motion.button
              onClick={openBooking}
              whileHover={{ scale: 1.05, boxShadow: '0 0 28px rgba(232,55,27,0.4)' }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              className="relative group bg-ember text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-ember-dark transition-colors shadow-lg overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-600 bg-linear-to-r from-transparent via-white/15 to-transparent skew-x-12" />
              <span className="relative">Book a Free Call</span>
            </motion.button>
          </motion.div>

          {/* Mobile hamburger */}
          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 text-white rounded-md hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileOpen ? (
                <path d="M18 6 6 18M6 6l12 12"/>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <line x1="3" y1="12" x2="21" y2="12"/>
                  <line x1="3" y1="18" x2="21" y2="18"/>
                </>
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              key="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
              style={{ overflow: 'hidden' }}
              className="md:hidden border-t border-white/10 mt-3"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col gap-1 pt-3 pb-4">
                {NAV_LINKS.map((link, i) => {
                  const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, ease, delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => { setMobileOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                        className={cn(
                          'block px-4 py-3 rounded-md transition-colors text-sm font-medium',
                          isActive
                            ? 'text-white bg-white/10 border-l-2 border-ember'
                            : 'text-white/70 hover:text-white hover:bg-white/8'
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  )
                })}
                <motion.button
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, ease, delay: NAV_LINKS.length * 0.05 }}
                  onClick={() => { setMobileOpen(false); openBooking() }}
                  className="mt-2 bg-ember text-white font-semibold text-sm px-4 py-3 rounded-lg hover:bg-ember-dark transition-colors text-left"
                >
                  Book a Free Strategy Call →
                </motion.button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
