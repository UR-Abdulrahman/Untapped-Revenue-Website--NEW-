import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  className?: string
  variant?: 'ember' | 'navy' | 'neutral'
}

export default function Badge({ children, className, variant = 'ember' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider',
        variant === 'ember' && 'bg-[#E8371B]/10 text-[#E8371B]',
        variant === 'navy' && 'bg-[#1E3A5F]/10 text-[#1E3A5F]',
        variant === 'neutral' && 'bg-slate-100 text-slate-600',
        className
      )}
    >
      {children}
    </span>
  )
}
