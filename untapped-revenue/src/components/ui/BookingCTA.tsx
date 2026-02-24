'use client'

import { useModal } from '@/components/modals/ModalContext'
import { cn } from '@/lib/utils'

interface BookingCTAProps {
  label?: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary'
}

export function BookingCTA({
  label = 'Book a Free Strategy Call',
  className,
  size = 'md',
  variant = 'primary',
}: BookingCTAProps) {
  const { openBooking } = useModal()
  return (
    <button
      onClick={openBooking}
      className={cn(
        'inline-flex items-center justify-center font-bold rounded-xl transition-all duration-200 active:scale-95',
        variant === 'primary' && 'bg-[#E8371B] text-white hover:bg-[#c42e15] shadow-lg hover:shadow-xl',
        variant === 'secondary' && 'bg-white/10 text-white border border-white/20 hover:bg-white/20',
        size === 'sm' && 'text-sm px-5 py-2.5',
        size === 'md' && 'text-base px-7 py-3.5',
        size === 'lg' && 'text-lg px-10 py-4',
        className
      )}
    >
      {label}
    </button>
  )
}

export function FormCTA({
  label = 'Apply Now',
  className,
  size = 'md',
}: BookingCTAProps) {
  const { openForm } = useModal()
  return (
    <button
      onClick={openForm}
      className={cn(
        'inline-flex items-center justify-center font-semibold rounded-xl border-2 border-[#E8371B] text-[#E8371B] hover:bg-[#E8371B] hover:text-white transition-all duration-200 active:scale-95',
        size === 'sm' && 'text-sm px-5 py-2.5',
        size === 'md' && 'text-base px-7 py-3.5',
        size === 'lg' && 'text-lg px-10 py-4',
        className
      )}
    >
      {label}
    </button>
  )
}
