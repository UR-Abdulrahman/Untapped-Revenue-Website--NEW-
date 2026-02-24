'use client'

import { motion } from 'framer-motion'

const items = [
  '$46.3M Revenue Generated',
  '150+ Studios Served',
  '17 Months of Documented Results',
  '~$10 Avg Cost Per Paid Lead',
  '60% of Members from Organic (Free)',
  '30–40% Trial Conversion',
  '25+ New Bookings/Month',
  '$46.3M Revenue Generated',
  '150+ Studios Served',
  '17 Months of Documented Results',
  '~$10 Avg Cost Per Paid Lead',
  '60% of Members from Organic (Free)',
  '30–40% Trial Conversion',
  '25+ New Bookings/Month',
]

export default function StatsBar() {
  return (
    <motion.div
      className="bg-ember py-3 overflow-hidden"
      initial={{ opacity: 0, scaleX: 0.96 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="flex items-center animate-ticker whitespace-nowrap"
        style={{ width: 'max-content' }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-6 text-white font-semibold text-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
