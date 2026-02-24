'use client'

import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.96 }}
        whileHover={{ scale: variant === 'primary' ? 1.03 : 1.01 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className={cn(
          // Base
          'inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',

          // Variants
          variant === 'primary' &&
            'bg-[#E8371B] text-white hover:bg-[#c42e15] shadow-lg hover:shadow-ember/30',
          variant === 'secondary' &&
            'bg-white text-[#1E3A5F] border-2 border-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white',
          variant === 'ghost' &&
            'bg-transparent text-white border-2 border-white/40 hover:border-white hover:bg-white/10',
          variant === 'outline' &&
            'bg-transparent text-[#E8371B] border-2 border-[#E8371B] hover:bg-[#E8371B] hover:text-white',

          // Sizes
          size === 'sm' && 'text-sm px-4 py-2',
          size === 'md' && 'text-base px-6 py-3',
          size === 'lg' && 'text-lg px-8 py-4',

          className
        )}
        {...(props as React.ComponentProps<typeof motion.button>)}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export default Button
