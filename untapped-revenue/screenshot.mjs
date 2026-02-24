import puppeteer from 'puppeteer'
import { existsSync, mkdirSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const url = process.argv[2] || 'http://localhost:3001'
const label = process.argv[3] || null

const outDir = join(__dirname, 'temporary screenshots')
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })

// Auto-increment: find next available screenshot-N.png
const existing = readdirSync(outDir)
  .map((f) => {
    const m = f.match(/^screenshot-(\d+)\.png$/)
    return m ? parseInt(m[1], 10) : 0
  })
  .filter(Boolean)
const next = existing.length > 0 ? Math.max(...existing) + 1 : 1
const filename = label ? `screenshot-${next}-${label}.png` : `screenshot-${next}.png`
const outPath = join(outDir, filename)

const browser = await puppeteer.launch({ headless: true })
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900 })

console.log(`Navigating to ${url} ...`)
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 })

// Wait a moment for animations to settle
await new Promise((r) => setTimeout(r, 1200))

await page.screenshot({ path: outPath, fullPage: true })
await browser.close()

console.log(`Saved: ${outPath}`)
