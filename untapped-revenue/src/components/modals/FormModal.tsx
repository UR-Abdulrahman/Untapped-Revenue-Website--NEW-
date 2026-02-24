'use client'

import { useState } from 'react'
import Modal from './Modal'
import { useModal } from './ModalContext'

const JOTFORM_URL = 'https://form.jotform.com/252446531988064'

export default function FormModal() {
  const { activeModal, close } = useModal()
  const [loaded, setLoaded] = useState(false)

  const isOpen = activeModal === 'form'

  return (
    <Modal
      isOpen={isOpen}
      onClose={close}
      title="Apply to Work with Untapped Revenue"
      fullscreen
    >
      <div className="flex flex-col h-full">
        {/* Thin branded header bar */}
        <div className="shrink-0 px-6 py-3 border-b border-slate-100 flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-ember animate-pulse" />
          <div>
            <h2 className="text-sm font-bold text-navy leading-none">Apply to Work With Us</h2>
            <p className="text-xs text-slate-400 mt-0.5">Tell us about your studio — takes 2 minutes</p>
          </div>
        </div>

        {/* Iframe area */}
        <div className="flex-1 relative min-h-0">
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-2 border-navy/20 border-t-ember rounded-full animate-spin" />
                <p className="text-sm text-slate-400">Loading form…</p>
              </div>
            </div>
          )}
          <iframe
            src={JOTFORM_URL}
            title="Apply to Work with Untapped Revenue"
            className="w-full h-full border-0"
            style={{ display: loaded ? 'block' : 'none' }}
            onLoad={() => setLoaded(true)}
            allowFullScreen
            allow="geolocation; microphone; camera"
          />
        </div>
      </div>
    </Modal>
  )
}
