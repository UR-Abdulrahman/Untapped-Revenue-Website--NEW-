'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { VIDEO_TESTIMONIALS } from '@/config/site'

type VideoItem = { src: string; headline: string; quote: string; name: string }

function VideoCard({ item, index }: { item: VideoItem; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const playPromiseRef = useRef<Promise<void> | undefined>(undefined)

  return (
    <motion.div
      className="flex flex-col gap-0 group cursor-pointer"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }}
      onMouseEnter={() => {
        const v = videoRef.current
        if (!v) return
        v.muted = true
        playPromiseRef.current = v.play()
        playPromiseRef.current?.catch(() => {})
      }}
      onMouseLeave={() => {
        const v = videoRef.current
        if (!v) return
        if (playPromiseRef.current !== undefined) {
          playPromiseRef.current.then(() => {
            v.pause()
            v.currentTime = 0
          }).catch(() => {})
        } else {
          v.pause()
          v.currentTime = 0
        }
      }}
    >
      {/* Video player */}
      <div className="relative rounded-t-2xl overflow-hidden bg-black aspect-video shadow-lg ring-1 ring-white/10 group-hover:ring-ember/40 transition-all duration-300">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={item.src}
          controls
          preload="metadata"
          playsInline
          muted
        />
        {/* Subtle ember gradient at bottom of video bleeds into caption */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-[#0d1f33]/80 to-transparent pointer-events-none" />
      </div>

      {/* Caption card */}
      <div className="rounded-b-2xl bg-white/5 border border-t-0 border-white/10 group-hover:border-ember/20 transition-colors duration-300 px-4 pt-3.5 pb-4 flex flex-col gap-1.5">
        {/* Headline */}
        <p className="text-white font-bold text-sm leading-snug">{item.headline}</p>

        {/* Quote */}
        <p className="text-white/55 text-xs leading-relaxed italic">{item.quote}</p>

        {/* Attribution */}
        <p className="text-ember text-xs font-semibold mt-0.5">— {item.name}</p>
      </div>
    </motion.div>
  )
}

export default function VideoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {VIDEO_TESTIMONIALS.map((item, i) => (
        <VideoCard key={i} item={item as VideoItem} index={i} />
      ))}
    </div>
  )
}
