'use client'

import { useState } from 'react'
import Modal from './Modal'
import { useModal } from './ModalContext'
import { BOOKING_URL } from '@/config/site'

export default function BookingModal() {
  const { activeModal, close } = useModal()
  const [loaded, setLoaded] = useState(false)

  const isOpen = activeModal === 'booking'

  return (
    <Modal
      isOpen={isOpen}
      onClose={close}
      title="Book Your Free Strategy Call"
      fullscreen
    >
      <div className="flex flex-col h-full">
        {/* Thin branded header bar */}
        <div className="shrink-0 px-6 py-3 border-b border-slate-100 flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-ember animate-pulse" />
          <div>
            <h2 className="text-sm font-bold text-navy leading-none">Book Your Free Strategy Call</h2>
            <p className="text-xs text-slate-400 mt-0.5">30 minutes · no commitment · instant confirmation</p>
          </div>
        </div>

        {/* Iframe area */}
        <div className="flex-1 relative min-h-0">
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-2 border-navy/20 border-t-ember rounded-full animate-spin" />
                <p className="text-sm text-slate-400">Loading calendar…</p>
              </div>
            </div>
          )}
          <iframe
            src={BOOKING_URL}
            title="Book a Free Strategy Call"
            className="w-full h-full border-0"
            style={{ display: loaded ? 'block' : 'none' }}
            onLoad={() => setLoaded(true)}
            allow="camera; microphone; autoplay; encrypted-media"
          />
        </div>
      </div>
    </Modal>
  )
}
