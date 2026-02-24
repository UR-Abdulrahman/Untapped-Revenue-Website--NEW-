'use client'

import { createContext, useCallback, useContext, useState } from 'react'

type ModalType = 'booking' | 'form' | null

interface ModalContextValue {
  activeModal: ModalType
  openBooking: () => void
  openForm: () => void
  close: () => void
}

const ModalContext = createContext<ModalContextValue | null>(null)

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [activeModal, setActiveModal] = useState<ModalType>(null)

  const openBooking = useCallback(() => setActiveModal('booking'), [])
  const openForm = useCallback(() => setActiveModal('form'), [])
  const close = useCallback(() => setActiveModal(null), [])

  return (
    <ModalContext.Provider value={{ activeModal, openBooking, openForm, close }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal(): ModalContextValue {
  const ctx = useContext(ModalContext)
  if (!ctx) throw new Error('useModal must be used within ModalProvider')
  return ctx
}
