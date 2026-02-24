import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import { formatDate } from '@/lib/utils'
import type { PostMeta } from '@/lib/mdx'

const CATEGORY_LABELS: Record<string, string> = {
  'gym-growth': 'Gym Growth',
  'marketing': 'Marketing',
  'operations': 'Operations',
  'retention': 'Retention',
  'sales': 'Sales',
  'industry': 'Industry',
}

export default function PostCard({ post }: { post: PostMeta }) {
  const { slug, frontmatter } = post

  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-200 h-full">
        {/* Placeholder cover */}
        <div className="bg-gradient-to-br from-[#1E3A5F] to-[#2a4f7f] aspect-video flex items-center justify-center p-6">
          {frontmatter.coverImage ? (
            <img
              src={frontmatter.coverImage}
              alt={frontmatter.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-white/20 text-5xl font-black">UR</span>
          )}
        </div>

        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <Badge variant="ember" className="text-xs">
              {CATEGORY_LABELS[frontmatter.category] ?? frontmatter.category}
            </Badge>
            <span className="text-slate-400 text-xs">{formatDate(frontmatter.date)}</span>
          </div>

          <h2 className="text-[#1E3A5F] font-bold text-lg leading-snug mb-2 group-hover:text-[#E8371B] transition-colors">
            {frontmatter.title}
          </h2>

          <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">{frontmatter.excerpt}</p>

          <div className="mt-4 flex items-center gap-2 text-[#E8371B] font-semibold text-sm">
            Read article
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </div>
        </div>
      </article>
    </Link>
  )
}
