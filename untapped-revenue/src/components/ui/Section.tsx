import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  dark?: boolean
  navy?: boolean
}

export default function Section({ children, className, id, dark, navy }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-20 md:py-28',
        dark && 'bg-slate-900 text-white',
        navy && 'bg-[#1E3A5F] text-white',
        className
      )}
    >
      {children}
    </section>
  )
}
