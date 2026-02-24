// ============================================================
// UNTAPPED REVENUE — CENTRAL SITE CONFIGURATION
// All CTAs, URLs, copy data, and brand tokens live here.
// ============================================================

export const SITE_URL = 'https://www.untapped-revenue.com'
export const BOOKING_URL = 'https://link.untapped-revenue.com/widget/booking/wTGfHV6q8ftOpa60t0Mg'
export const JOTFORM_SCRIPT_SRC = 'https://form.jotform.com/jsform/252446531988064'
export const JOTFORM_CONTAINER_ID = 'jotform-embed-container'

// ── Navigation ────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Results', href: '/results' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
]

// ── CTAs ──────────────────────────────────────────────────
export const CTA = {
  primary: { label: 'Book a Free Strategy Call', action: 'booking' as const },
  secondary: { label: 'Apply Now', action: 'form' as const },
  hero: { label: 'Book Your Free Strategy Call', action: 'booking' as const },
  heroSecondary: { label: 'Get Started Today', action: 'form' as const },
}

// ── Brand ─────────────────────────────────────────────────
export const BRAND = {
  name: 'Untapped Revenue',
  tagline: 'The Self-Sustaining AI Member Accelerator',
  description:
    'Done-for-you marketing agency exclusively serving class-based fitness studios. We handle ads, follow-up, and booking — you close trials into members.',
  email: 'hello@untapped-revenue.com',
  colors: {
    navy: '#1E3A5F',
    ember: '#E8371B',
  },
}

// ── Headline Stats (hero, social proof, etc.) ─────────────
export const STATS = [
  { value: '$46.3M', label: 'Revenue Generated for Clients', numeric: 46.3, unit: 'M+' },
  { value: '150+', label: 'Fitness Studios Served', numeric: 150, unit: '+' },
  { value: '17', label: 'Months of Documented Results', numeric: 17, unit: '' },
  { value: '~$10', label: 'Avg Cost Per Paid Lead', numeric: 10, unit: '' },
  { value: '60%', label: 'of Members from Organic (Free)', numeric: 60, unit: '%' },
  { value: '30–40%', label: 'Trial-to-Membership Conversion', numeric: 40, unit: '%' },
]

// ── KPI Benchmarks ────────────────────────────────────────
export const KPI_BENCHMARKS = [
  { metric: 'Response Rate', target: '80%+', note: '' },
  { metric: 'Booking Rate', target: '65%+', note: '' },
  { metric: 'Show-Up Rate', target: '80%+', note: '' },
  { metric: 'Trial-to-Membership Conversion', target: '30–40%', note: 'vs. 20% industry avg.' },
  { metric: 'Cost Per Lead', target: '~$10', note: 'vs. $15–$30 industry avg.' },
  { metric: 'Lead Follow-Up Speed', target: '1–10 min', note: '#1 driver of conversion' },
  { metric: 'New Bookings Per Month', target: '25+', note: 'within first 60 days' },
]

// ── Case Studies ──────────────────────────────────────────
export const CASE_STUDIES = [
  {
    id: 'shawna',
    name: 'Shawna',
    studioType: 'Fitness Studio',
    timeframe: '3 months',
    headline: '70 New Members in 3 Months',
    metrics: [
      { label: 'New Members Added', value: '70' },
      { label: 'Members: Before → After', value: '122 → 192' },
    ],
    quote:
      "We were looking for a whole whack of new people in our doors and that's exactly what happened! We started at 122 members and are now at 192 members.",
    category: 'fitness',
  },
  {
    id: 'dan',
    name: 'Dan',
    studioType: 'Multi-Location Yoga Studio',
    timeframe: 'First 30 days',
    headline: '163 Trial Sign-Ups in 30 Days',
    metrics: [
      { label: 'Trial Sign-Ups (Month 1)', value: '163' },
      { label: 'Trial-to-Member Conversion', value: '50%+' },
      { label: 'New Members (Month 1)', value: '80+' },
    ],
    quote:
      'Within the first month of switching over to Untapped Revenue I generated 163 trialers and converted over 50% onto membership.',
    category: 'yoga',
  },
  {
    id: 'hailey',
    name: 'Hailey',
    studioType: 'Fitness Studio',
    timeframe: 'First month',
    headline: '190 Trials & 30 New Members in 1 Month',
    metrics: [
      { label: 'New Trials (Month 1)', value: '190' },
      { label: 'New Members (Month 1)', value: '30' },
    ],
    quote:
      'Within the first month I had 190 new bodies in my doors and 30 new members. My favorite part is how they take the workload off my hands — ads, follow-up, and booking first-time visitors.',
    category: 'fitness',
  },
]

// ── Written Testimonials ───────────────────────────────────
export const TESTIMONIALS = [
  {
    name: 'Kerry Daponte',
    role: 'Gym Owner',
    quote:
      'Each summer month with Untapped has brought 100+ new paid trialers—June, July, and August.',
  },
  {
    name: 'Kim',
    role: 'Studio Owner',
    quote:
      '145 first visits in July and our revenue is up 190% from this time last year! Thank you. Please keep that coming and even more for the fall!',
  },
  {
    name: 'Elliott',
    role: 'Studio Owner',
    quote:
      'Next rep we did 117 new clients, and 156 at Deprivation. Generally at about $499 a pop. Next rep we brought in $49,220.87 between mid-December and February 28th, and Deprivation did $119,647.40.',
  },
  {
    name: 'Victor Bhatia',
    role: 'Fitness Studio Owner',
    quote:
      'Since partnering with Untapped, our new-client flow is 3–4× what it was, April was our best sales month ever, and a review push added 200+ mostly five-star Google reviews.',
  },
  {
    name: 'Sherry Bureau',
    role: 'Gym Owner',
    quote:
      'Three months after switching to Untapped, we added 100 new members and doubled autopays past 200. They are unreal at what they do!',
  },
  {
    name: 'Hailey De Lisser',
    role: 'Gym Owner',
    quote:
      'Month one with Untapped: 190 trials and 30 new members, while they handled ads, follow-up, and booking.',
  },
]

// ── Video Testimonials (direct MP4) ───────────────────────
export const VIDEO_TESTIMONIALS = [
  {
    src: 'https://assets.cdn.filesafe.space/O6Vdh0xyR6yPRKM3SLpT/media/637fadcfa1a2e1eacca50b64.mp4',
    headline: '42 Trial Memberships After 1 Week!',
    quote: '142 leads for a $17 trial — 42 memberships in 6 days with just $77 in ad spend.',
    name: 'James',
  },
  {
    src: 'https://assets.cdn.filesafe.space/O6Vdh0xyR6yPRKM3SLpT/media/65a973fa28a68bfe2abff551.mp4',
    headline: 'From 20 to 120 First Visits/Month!',
    quote: 'Within the first month Amber went from 20 new people to 120 — now she travels freely.',
    name: 'Amber',
  },
  {
    src: 'https://assets.cdn.filesafe.space/O6Vdh0xyR6yPRKM3SLpT/media/65f35dca8fbeae5f6e47a1f7.mp4',
    headline: '200 First Visits Every Month!',
    quote: '"You guys are such a hidden gem. We wouldn\'t be able to grow without you."',
    name: 'Dimitri',
  },
  {
    src: 'https://assets.cdn.filesafe.space/O6Vdh0xyR6yPRKM3SLpT/media/6598741ad37c93060225bf96.mp4',
    headline: '$7,000 Autopay Increase in 3 Months!',
    quote: '220 Google reviews, $5K revenue in one weekend, $7K added in monthly autopays.',
    name: 'Rachel',
  },
  {
    src: 'https://assets.cdn.filesafe.space/O6Vdh0xyR6yPRKM3SLpT/media/65a97c0798a1bea63d1867b6.mp4',
    headline: '70 New Members in 3 Months!',
    quote: '"We started at 122 members and hit 192. Exactly what we asked for."',
    name: 'Shawna',
  },
  {
    src: 'https://assets.cdn.filesafe.space/O6Vdh0xyR6yPRKM3SLpT/media/65f35ffec391401dfc53c867.mp4',
    headline: '15K Added in Autopays in 6 Months!',
    quote: '"The only company we\'ve actually seen results from."',
    name: 'Lindsey',
  },
]

// ── Service Tiers ─────────────────────────────────────────
export const SERVICE_TIERS = [
  {
    id: 'base',
    name: 'Base Service',
    tagline: 'Website & CRM Management',
    priceLabel: '$197/mo USD · $297/mo CAD',
    priceUSD: '$197',
    priceCAD: '$297',
    popular: false,
    features: [
      'Unlimited website adjustments and changes',
      'Full GoHighLevel system access',
      'Monthly performance reports',
      'Technical GHL platform support',
      'Website hosting and maintenance',
      'Form and automation management',
    ],
    bestFor: 'Studios that handle their own lead follow-up and advertising.',
    cta: 'Book a Call to Get Started',
  },
  {
    id: 'ai-followup',
    name: '+ AI Follow-Up',
    tagline: 'Base + Automated Lead Response',
    priceLabel: '$297/mo USD · $447/mo CAD',
    priceUSD: '$297',
    priceCAD: '$447',
    popular: false,
    features: [
      'Everything in Base Service',
      'AI-powered lead response (1-min response time)',
      'Automated appointment booking',
      'Lead nurturing sequences',
      '24/7 coverage for inbound communication',
      'Response rate tracking and optimization',
    ],
    bestFor: 'Studios running their own ads who want professional follow-up.',
    cta: 'Book a Call to Get Started',
  },
  {
    id: 'fb-ig-ads',
    name: 'FB/IG Ads',
    tagline: 'Complete Done-For-You System ⭐',
    priceLabel: '$600/mo USD · $700/mo CAD',
    priceUSD: '$600',
    priceCAD: '$700',
    popular: true,
    features: [
      'Everything in Base + AI Follow-Up',
      'Complete Facebook & Instagram ad management',
      'Daily ad optimization (scale winners, cut losers)',
      'Sprint testing: 15–20 offers tested for ~$30',
      'Canva creative development',
      'Weekly automated performance reports',
      'Monthly Loom/Zoom strategy calls',
    ],
    bestFor:
      'Studios that want completely hands-off marketing — our signature Self-Sustaining AI Member Accelerator.',
    cta: 'Book a Call to Get Started',
  },
  {
    id: 'google-ads',
    name: '+ Google Ads',
    tagline: 'Multi-Channel Domination',
    priceLabel: '$900/mo USD · $1,100/mo CAD',
    priceUSD: '$900',
    priceCAD: '$1,100',
    popular: false,
    features: [
      'Everything in FB/IG Ads tier',
      'Google search and display campaign management',
      'Keyword research and targeting',
      'Search intent capture (high-conversion traffic)',
      'Daily campaign monitoring and optimization',
      'Unified cross-channel reporting',
    ],
    bestFor: 'Established studios ready to dominate their local market on all channels.',
    cta: 'Book a Call to Get Started',
  },
]

// ── Differentiators ───────────────────────────────────────
export const DIFFERENTIATORS = [
  {
    id: 'targeting',
    icon: 'Target',
    title: 'Hyper-Specific Audience Targeting',
    subtitle: 'When you speak to everyone, you speak to no one.',
    description:
      'We build separate campaigns for distinct audience avatars: postpartum moms, men 35–55, athletes, Silver Sneakers, busy professionals. Each with messaging that speaks directly to their unique pain points. The result: higher-intent leads who actually convert.',
  },
  {
    id: 'algorithmic-bias',
    icon: 'Shield',
    title: 'Algorithmic Bias Solution',
    subtitle: 'We fixed what Facebook does to gym ad accounts.',
    description:
      'Facebook secretly optimizes for whoever clicks your ads — even broke, no-show leads. Our three-part fix: Conversion API pixel (optimizes for bookings, not clicks), hyper-specific messaging, and lead form filtration. Your lead quality improves every month. Other agencies watch results collapse after 4–6 weeks.',
  },
  {
    id: 'sprint-testing',
    icon: 'Zap',
    title: 'Sprint Testing System',
    subtitle: '15–20 offers tested for ~$30 total.',
    description:
      'Traditional method: pick one offer, spend $200–$400, wait 10 days, hope it works. Our method: test 15–20 offer variations simultaneously for ~$30 using color-block Canva ads. Automated rules shut off losers at 400 impressions. Winner identified by click-through rate. 10–15x more data per dollar.',
  },
  {
    id: 'hands-off',
    icon: 'HandMetal',
    title: '100% Hands-Off System',
    subtitle: 'You close trials. We handle everything else.',
    description:
      'From the moment a lead opts in: immediate AI response within 60 seconds, conversation management, appointment booking, pre-visit reminders, reactivation campaigns for cold leads, and weekly automated performance reports. The only thing we need from you: show up and close.',
  },
  {
    id: 'dual-channel',
    icon: 'TrendingUp',
    title: 'Dual-Channel Lead Generation',
    subtitle: 'Paid ads + organic SEO working together.',
    description:
      "Most agencies do one or the other. We do both — and engineer them to compound. Paid ads generate immediate leads and simultaneously drive branded searches and direct traffic. That organic traffic converts 15–25% better than cold ad traffic. You're not just running ads into a leaky bucket — you're building a long-term lead engine.",
  },
  {
    id: 'fitness-exclusive',
    icon: 'Dumbbell',
    title: 'Fitness-Exclusive Expertise',
    subtitle: 'We only work with class-based studios. By design.',
    description:
      "We don't work with restaurants, e-commerce, or real estate. Every system, script, automation, and reporting framework is built specifically for gym and studio owners. We know your seasonality, common objections, pricing models, trial conversion benchmarks, and MindBody/Zenplanner integrations.",
  },
]

// ── How It Works Steps ────────────────────────────────────
export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Book a Free Strategy Call',
    description:
      "We learn about your studio, your current member count, your goals, and what has or hasn't worked in the past. If we're a fit, we'll map out exactly which service tier makes sense for your situation.",
  },
  {
    step: 2,
    title: 'Website Build & System Setup',
    timeframe: 'Days 1–14',
    description:
      'We build your GoHighLevel website from scratch — fully branded, SEO-optimized, and integrated with your CRM and follow-up automations. You review, approve, and we go live. Your digital infrastructure is now built to convert visitors into leads and leads into members.',
  },
  {
    step: 3,
    title: 'Offer Testing & Ad Launch',
    timeframe: '48–72 Hours to First Winner',
    description:
      'We run our sprint testing system: 15–20 color block offer variations tested simultaneously for approximately $30 total. Within 48–72 hours we know exactly which offer your local market responds to. That winner becomes the foundation of your lead generation campaign.',
  },
  {
    step: 4,
    title: 'AI Follow-Up Handles the Conversations',
    description:
      'The moment a lead opts in, our AI-powered system responds within 60 seconds. It asks qualifying questions, handles objections, offers class times, and books the appointment directly into your calendar — all without you lifting a finger.',
  },
  {
    step: 5,
    title: 'You Get Weekly Reports, We Handle the Rest',
    description:
      'Every week you receive an automated performance report tracking every stage of your funnel: leads in, responses, bookings, show-ups, and membership conversions. Monthly strategy calls keep you in the loop on what we\'re optimizing.',
  },
  {
    step: 6,
    title: 'Scale What\'s Working',
    timeframe: '60–90 Days to Revenue Target',
    description:
      'Once your campaign consistently hits 25+ bookings per month, we methodically scale ad spend by 20–30% every 3 days to grow volume without disrupting the algorithm. Most clients hit their revenue targets within 60–90 days.',
  },
]

// ── FAQs ──────────────────────────────────────────────────
export const FAQS = [
  {
    question: 'How do I know I will see a return on my investment?',
    answer:
      "Because we are the only agency that puts our money where our mouth is and we make BIG guarantees that no one else makes. Go check out our service packages for more information on what guarantees we offer.",
  },
  {
    question: 'Do you work with all gyms and fitness studios?',
    answer:
      "No. We work with class-based fitness studios that actually give a shit about growth. Specifically: studios with memberships over $100/month and over 50 active members. No budget gyms. No hobby studios. No tire-kickers.",
  },
  {
    question: 'Why is Untapped Revenue the best digital marketing agency for fitness studios?',
    answer:
      "While other agencies are busy working with dentists, plumbers, and whoever else has a credit card, we eat, sleep, and breathe fitness studios. We've spent 8+ years and $10+ million perfecting ONE thing: filling fitness classes. Our team manages $500K+ monthly in fitness studio ad spend. We guarantee profit or your money back. We've tested 100's of different strategies. And our 95% client retention rate WITHOUT any long term contracts proves one thing — our shit works. Period. You stay because you're getting results, not because you're locked into a contract.",
  },
  {
    question: 'Can you guarantee results?',
    answer:
      "We offer guarantees for our services. No excuses. No \"well, technically...\" No fine print fuckery. That's why we turn down more clients than we accept — we only work with fitness studios we KNOW we can get results for. Most agencies make promises. We make guarantees.",
  },
  {
    question: "What's involved with your digital marketing services?",
    answer:
      "Everything you hate doing and suck at. We handle your entire lead-show up machine: strategic ad campaigns that actually convert, daily optimization to squeeze every penny of ROI, an 18-hour follow-up team that books leads while you sleep, conversion tracking that tells you exactly where your money goes, and weekly reports in plain English (not marketing gibberish). You focus on delivering killer classes. We focus on filling them. It's that simple.",
  },
  {
    question: 'How can you offer a free website?',
    answer:
      "We use proven, high-converting templates refined across 150+ gyms, then customize to your taste. You get the \"membership\" pricing model — we build it, you pay only for the ongoing services. The website cost is absorbed into the system. No hidden catch.",
  },
  {
    question: "What's the catch with the free website?",
    answer:
      "There isn't one. We build it, optimize it for SEO, and hand you the keys. You own it. If you want our ongoing services, great. If not, you still keep the site. We build it because a great website makes our ad campaigns work better — which means you stay and keep paying us longer.",
  },
  {
    question: "What if it doesn't work for my gym?",
    answer:
      "You're month-to-month. If you don't see results, cancel anytime. But our track record speaks for itself — 150+ gyms trust us because it works. The past 17 months we've added $43.6M in revenue for them. We've never had a client who followed our system not see meaningful growth.",
  },
  {
    question: 'Do I need to sign a contract?',
    answer:
      "Yes. Month-to-month only. Cancel anytime. We believe our results should keep you — not a contract. Most clients stay for 12+ months because they're growing, not because they're locked in.",
  },
]

// ── Ideal Client ──────────────────────────────────────────
export const IDEAL_CLIENT = {
  weWorkWith: [
    'Yoga, Pilates, CrossFit, HIIT, barre, and similar class-based fitness studios',
    'Martial arts & combat sports studios: MMA, kickboxing, jiu-jitsu, Muay Thai, karate, and similar',
    'Dance fitness studios: Zumba, dance cardio, dance fitness, and similar class-based formats',
    'Studios charging $100+ per month for membership (premium positioning)',
    'Studios generating $10,000+ in monthly revenue with 50+ active members',
    'Owners burned by generic agencies with no fitness expertise who are ready to grow',
  ],
  weDontWorkWith: [
    'Brand-new studios with fewer than 50 members or under $10K monthly revenue',
    'Big-box gyms and franchises with in-house marketing teams (franchise partnership agreements are available — ask on the call)',
    'Personal trainers or solo operators without a physical studio location',
    'Any fitness business outside the class-based studio model',
  ],
}

// ── Footer Links ──────────────────────────────────────────
export const FOOTER_LINKS = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Book a Call', href: '/book' },
  ],
  services: [
    { label: 'Services Overview', href: '/services' },
    { label: 'Results & Case Studies', href: '/results' },
    { label: 'How It Works', href: '/how-it-works' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}
