import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import PostCard from '@/components/blog/PostCard'
import { getAllPosts } from '@/lib/mdx'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Blog — Gym Growth & Marketing Insights',
  description:
    'Weekly insights for gym owners: member acquisition, marketing, retention, operations, and sales strategy from the team behind $46.3M in studio revenue.',
  alternates: { canonical: '/blog' },
}

const CATEGORIES = [
  { id: 'all', label: 'All Posts' },
  { id: 'gym-growth', label: 'Gym Growth' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'operations', label: 'Operations' },
  { id: 'retention', label: 'Retention' },
  { id: 'sales', label: 'Sales' },
]

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <PageHero
        badge="Insights"
        title={<>The Studio Owner&apos;s{' '}<span className="text-ember">Growth Playbook</span></>}
        description="Weekly insights on member acquisition, marketing, retention, and running a profitable fitness studio."
      />

      <Section>
        <Container>
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">✍️</div>
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">First post coming soon</h2>
              <p className="text-slate-400">
                Check back weekly for new insights on growing your fitness studio.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </Container>
      </Section>
    </>
  )
}
