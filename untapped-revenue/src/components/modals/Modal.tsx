'use client'

import { useEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/utils'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
  fullscreen?: boolean
  title?: string
}

export default function Modal({
  isOpen,
  onClose,
  children,
  className,
  fullscreen = false,
  title,
}: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Lock body scroll — restore position instantly (no smooth-scroll jump)
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      return () => {
        document.body.style.overflow = ''
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        // Use 'instant' to avoid the visible animated scroll-back caused by
        // global scroll-behavior: smooth
        window.scrollTo({ top: scrollY, behavior: 'instant' as ScrollBehavior })
      }
    }
  }, [isOpen])

  // ESC to close
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Focus trap
  useEffect(() => {
    if (!isOpen || !contentRef.current) return
    const focusable = contentRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    }

    document.addEventListener('keydown', trapFocus)
    first?.focus()
    return () => document.removeEventListener('keydown', trapFocus)
  }, [isOpen])

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlayRef.current) onClose()
    },
    [onClose]
  )

  if (!isOpen) return null

  return createPortal(
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={title ?? 'Modal'}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 modal-backdrop"
      onClick={handleBackdropClick}
    >
      <div
        ref={contentRef}
        className={cn(
          'relative bg-white rounded-2xl shadow-2xl w-full overflow-hidden',
          'animate-in fade-in zoom-in-95 duration-200',
          fullscreen
            ? 'max-w-full max-h-[100dvh] h-[100dvh] sm:max-w-4xl sm:h-[92vh] sm:max-h-[92vh]'
            : 'max-w-2xl max-h-[90vh]',
          className
        )}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-3 z-10 p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-[#E8371B] focus-visible:outline-none"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>

        {children}
      </div>
    </div>,
    document.body
  )
}
