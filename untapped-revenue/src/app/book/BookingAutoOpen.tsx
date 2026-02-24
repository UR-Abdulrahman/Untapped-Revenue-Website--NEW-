'use client'

import { useEffect } from 'react'
import { useModal } from '@/components/modals/ModalContext'

export default function BookingAutoOpen() {
  const { openBooking } = useModal()

  useEffect(() => {
    const timer = setTimeout(openBooking, 400)
    return () => clearTimeout(timer)
  }, [openBooking])

  return null
}
