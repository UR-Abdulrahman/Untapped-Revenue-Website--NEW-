import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPost, getAllSlugs } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'
import Container from '@/components/ui/Container'
import Badge from '@/components/ui/Badge'
import { SITE_URL } from '@/config/site'

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}

  const { frontmatter } = post
  return {
    title: frontmatter.title,
    description: frontmatter.excerpt,
    authors: [{ name: frontmatter.author }],
    openGraph: {
      type: 'article',
      title: frontmatter.title,
      description: frontmatter.excerpt,
      publishedTime: frontmatter.date,
      authors: [frontmatter.author],
      images: frontmatter.coverImage ? [{ url: frontmatter.coverImage }] : [{ url: '/og-image.png' }],
    },
    alternates: { canonical: `/blog/${slug}` },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const { frontmatter, content } = post

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: frontmatter.title,
    description: frontmatter.excerpt,
    author: { '@type': 'Organization', name: frontmatter.author },
    datePublished: frontmatter.date,
    publisher: {
      '@type': 'Organization',
      name: 'Untapped Revenue',
      url: SITE_URL,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="bg-[#1E3A5F] pt-32 pb-16">
        <Container narrow>
          <div className="mb-4">
            <Link
              href="/blog"
              className="text-white/50 hover:text-white/80 text-sm flex items-center gap-2 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
              </svg>
              Back to Blog
            </Link>
          </div>
          <Badge variant="ember" className="mb-4">
            {frontmatter.category.replace('-', ' ')}
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            {frontmatter.title}
          </h1>
          <div className="flex items-center gap-3 text-white/50 text-sm">
            <span>{frontmatter.author}</span>
            <span>·</span>
            <span>{formatDate(frontmatter.date)}</span>
          </div>
        </Container>
      </section>

      {/* Article body */}
      <section className="py-16">
        <Container narrow>
          <article className="prose prose-lg max-w-none prose-headings:text-[#1E3A5F] prose-a:text-[#E8371B] prose-strong:text-slate-800 prose-li:text-slate-600 prose-p:text-slate-600 prose-p:leading-relaxed">
            <MDXRemote source={content} />
          </article>

          {/* CTA at end of post */}
          <div className="mt-16 bg-[#1E3A5F] rounded-2xl p-8 text-center">
            <p className="text-[#E8371B] font-semibold uppercase tracking-wider text-sm mb-2">Ready to grow?</p>
            <h3 className="text-2xl font-black text-white mb-3">
              Put These Strategies to Work in Your Studio
            </h3>
            <p className="text-white/60 mb-6 max-w-md mx-auto">
              Book a free strategy call and we&apos;ll map out exactly what it would take to add 25+ new members to your studio every month.
            </p>
            <Link
              href="/book"
              className="inline-block bg-[#E8371B] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-[#c42e15] transition-all active:scale-95"
            >
              Book a Free Strategy Call
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
