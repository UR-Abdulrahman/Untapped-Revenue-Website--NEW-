import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export interface PostFrontmatter {
  title: string
  date: string
  excerpt: string
  author: string
  category: string
  coverImage?: string
}

export interface Post {
  slug: string
  frontmatter: PostFrontmatter
  content: string
}

export interface PostMeta {
  slug: string
  frontmatter: PostFrontmatter
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx') && !f.startsWith('_'))

  const posts = files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '')
      const filePath = path.join(BLOG_DIR, filename)
      const raw = fs.readFileSync(filePath, 'utf-8')
      const { data } = matter(raw)
      return {
        slug,
        frontmatter: data as PostFrontmatter,
      }
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
    )

  return posts
}

export function getPost(slug: string): Post | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  return {
    slug,
    frontmatter: data as PostFrontmatter,
    content,
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx') && !f.startsWith('_'))
    .map((f) => f.replace(/\.mdx$/, ''))
}
