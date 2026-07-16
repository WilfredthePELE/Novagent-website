// Single source of truth for all Novagent site content.
// Pulled from NOVAGENT-DOCUMENTATION.md — Intelligence That Delivers.

export const BRAND = {
  name: 'Novagent',
  tagline: 'Intelligence That Delivers',
  telegram: 'https://t.me/novagent_bot',
  bot: '@novagent_bot',
};

export const HERO_STATS = [
  { num: 48, label: 'AI Skills', suffix: '' },
  { num: 116, label: 'Services', suffix: '' },
  { num: 12, label: 'Categories', suffix: '' },
  { num: 3, label: 'Security Layers', suffix: '' },
];

export const MARQUEE = [
  'Hermes Agent', 'NVIDIA Nemotron', 'Stripe', 'NemoClaw', 'FAL.ai',
  'Telegram', 'HyperFrames', 'GitHub', 'Vercel', 'Autonomous 24/7',
];

export const CATEGORIES = [
  { name: 'Video Production', count: 10, icon: 'video', range: '$60–$400', blurb: 'UGC ads, cinematic production, explainer animation, lip-sync dubbing, character animation.',
    services: ['UGC ads', 'Product promos', 'Talking-head videos', 'Cinematic production', 'Explainer animation', 'Style transfer', 'Logo animation', 'Multi-shot editing', 'Lip-sync dubbing', 'Character animation'] },
  { name: 'Image & Design', count: 12, icon: 'image', range: '$30–$250', blurb: 'Product photography, logos, brand identity, infographics, UI mockups, restoration.',
    services: ['Product photography', 'Logo design', 'Social media graphics', 'Brand identity', 'Infographics', 'UI mockups', 'Photo editing', 'Architecture visualization', 'Book covers', 'Textures & patterns', 'Photo restoration', 'Meme creation'] },
  { name: '3D Modeling', count: 4, icon: 'cube', range: '$50–$300', blurb: 'Product models, rapid prototypes, asset packs, 3D exploration video.',
    services: ['Product models', 'Rapid prototypes', 'Asset packs', '3D exploration video'] },
  { name: 'Audio & Music', count: 10, icon: 'audio', range: '$25–$200', blurb: 'Voiceover in 70+ languages, voice cloning, custom music, podcasts, audiobooks.',
    services: ['Voiceover (70+ languages)', 'Voice cloning', 'Custom music', 'Podcast production', 'Audiobooks', 'Sound effects', 'Multilingual dubbing', 'Audio branding', 'Transcription', 'Song creation'] },
  { name: 'Software Dev', count: 12, icon: 'code', range: '$100–$1,500', blurb: 'Python, scraping, APIs, bots, extensions, databases, pipelines, CLI tools.',
    services: ['Python scripts', 'Web scraping', 'API development', 'Bots', 'Chrome extensions', 'Databases', 'WordPress', 'GitHub automation', 'Data pipelines', 'Code review', 'CLI tools', 'Spreadsheet automation'] },
  { name: 'Research & Intel', count: 11, icon: 'research', range: '$80–$400', blurb: 'Competitive analysis, market sizing, due diligence, patents, trend scouting.',
    services: ['Competitive analysis', 'Market sizing', 'Due diligence', 'Patent search', 'Literature review', 'Pricing strategy', 'Trend analysis', 'Real-estate research', 'Tech scouting', 'Background checks', 'Industry reports'] },
  { name: 'Data Services', count: 12, icon: 'data', range: '$60–$300', blurb: 'Cleaning, sentiment, financial modeling, dashboards, ML classification, viz.',
    services: ['Data cleaning', 'Sentiment analysis', 'Financial modeling', 'Dashboards', 'Surveys', 'PDF extraction', 'Web aggregation', 'A/B testing', 'ML classification', 'Visualization', 'Resume parsing', 'Translation'] },
  { name: 'Content & Copy', count: 12, icon: 'content', range: '$40–$250', blurb: 'Blogs, email, social calendars, sales copy, whitepapers, scripts, newsletters.',
    services: ['Blog posts', 'Email campaigns', 'Social calendars', 'Product descriptions', 'Sales copy', 'Technical docs', 'Whitepapers', 'Press releases', 'Grant writing', 'Scripts', 'Resume optimization', 'Newsletters'] },
  { name: 'Business Ops', count: 11, icon: 'business', range: '$50–$300', blurb: 'Invoicing, SaaS audits, CRM cleanup, KPI dashboards, proposals, bookkeeping.',
    services: ['Invoicing', 'Expense categorization', 'SaaS audit', 'CRM cleanup', 'Meeting prep', 'KPI dashboards', 'Competitor monitoring', 'Proposals', 'Bookkeeping', 'Onboarding', 'Market monitoring'] },
  { name: 'Translation', count: 5, icon: 'globe', range: '$25–$150', blurb: 'Documents, website localization, subtitles, multilingual content, app strings.',
    services: ['Document translation', 'Website localization', 'Subtitle translation', 'Multilingual content', 'App string localization'] },
  { name: 'Education', count: 5, icon: 'education', range: '$60–$400', blurb: 'Course materials, training videos, study guides, quizzes, research tutoring.',
    services: ['Course materials', 'Training videos', 'Study guides', 'Quizzes', 'Research tutoring'] },
  { name: 'Tech Support', count: 12, icon: 'support', range: '$10–$200', blurb: 'Software installs, server config, migration, SSH with every command audited.',
    services: ['Software installation', 'Server configuration', 'Environment setup', 'Troubleshooting', 'Data migration', 'SSH guided sessions', 'Dependency setup', 'Performance tuning', 'Backup configuration', 'Security hardening', 'Remote monitoring', 'Command auditing'] },
];

export const FEATURES = [
  { icon: 'cpu', title: 'Autonomous Operation', desc: 'Finds leads, sends proposals, delivers work, collects payment, and follows up — all without human intervention.' },
  { icon: 'doc', title: 'Full Documentation', desc: 'Every job generates Proposals, Invoices, Receipts, Reports, and User Manuals. A professional paper trail.' },
  { icon: 'shield', title: '3-Layer Security', desc: 'NemoClaw kernel isolation + Tool Trust verification + Spend Gates financial controls. Kill switch included.' },
  { icon: 'gauge', title: 'Real-Time Dashboard', desc: 'Live KPI cards, P&L charts, decision feed, transaction stream, agent status, and lead pipeline.' },
  { icon: 'trend', title: 'Revenue-Generating', desc: 'Self-marketing, outreach engine, referral system, and recurring subscription revenue built in.' },
  { icon: 'target', title: 'Goal Mode', desc: 'Give it a goal and a budget — it decomposes into strategy, executes, and reports ROI in real time.' },
];

export const SECURITY_LAYERS = [
  {
    tag: 'Layer 1 · Kernel',
    title: 'NemoClaw OpenShell',
    color: '#2540FF',
    points: [
      'Kernel-level sandbox isolation',
      'Credential proxy injection — agent never sees raw secrets',
      'Filesystem & network policy enforcement',
      'Prevents agent escape',
    ],
  },
  {
    tag: 'Layer 2 · Application',
    title: 'Tool Trust Passports',
    color: '#FF5C38',
    points: [
      'Every tool call verified against a signed trust passport',
      '4 trust tiers — from fully trusted to blocked by default',
      'Pre-call verification checklist (6 checks)',
      'Trust revocation on failure or budget overrun',
    ],
  },
  {
    tag: 'Layer 3 · Financial',
    title: 'Spend Gates',
    color: '#0E9C88',
    points: [
      '4 gate levels: Micro, Standard, Significant, Major',
      'Daily spend cap of $200 enforced',
      'Per-job budget tracking with margin alerts',
      'Hard stop at 80% margin erosion',
    ],
  },
];

export const PROCESS = [
  { step: '01', icon: 'chat', title: 'Client Messages', desc: 'Reach out via Telegram, website, WhatsApp, SMS, email, or phone. The agent responds instantly.' },
  { step: '02', icon: 'eye', title: 'Preview & Approve', desc: 'A 5-stage preview ladder. You approve every step before any expensive generation begins.' },
  { step: '03', icon: 'card', title: 'Pay via Stripe', desc: 'Secure checkout with a Stripe payment link. Work starts the moment payment is confirmed.' },
  { step: '04', icon: 'box', title: 'Get Everything', desc: 'Deliverables plus six professional documents — proposal, invoice, receipt, report, manual.' },
];

export const PRICING = [
  { tier: 'Quick Fix', price: '$10–$25', desc: 'Single install or config task.', points: ['One focused deliverable', 'Same-day turnaround', 'Full audit certificate'] },
  { tier: 'Standard', price: '$50–$250', highlight: true, desc: 'Creative & professional services.', points: ['Video, design, audio, data', '5-stage preview approval', '6 business documents', 'Referral discounts'] },
  { tier: 'Premium / UGC', price: '$100–$500', desc: 'Full campaigns & complex builds.', points: ['Multi-variant UGC + A/B tests', 'Software & automation', 'Recurring subscription option'] },
  { tier: 'Enterprise', price: 'Custom', desc: 'Complex, multi-system projects.', points: ['Goal Mode with set budget', 'Parallel specialist sub-agents', 'Dedicated mission control'] },
];

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Security', href: '#security' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '/NOVAGENT-DOCUMENTATION.md' },
];

// Studio — quick prompt starters shown in the empty state.
export const STUDIO_PROMPTS = [
  'Make a 30-second UGC ad for my skincare brand',
  'Build a Python script that scrapes competitor prices daily',
  'Design a logo and brand identity for a coffee startup',
  'Research the market size for AI note-taking apps',
  'Clean this messy CSV and build a dashboard',
  'Write a 6-email launch sequence for a SaaS product',
];

// Seed feedback shown on the community wall (real submissions append to these).
export const SEED_FEEDBACK = [
  { name: 'Maya R.', role: 'Founder, Skincare DTC', rating: 5, text: 'Delivered three UGC variants overnight. One is already my best-performing ad.' },
  { name: 'Daniel K.', role: 'Indie developer', rating: 5, text: 'Asked for a scraping bot with a dashboard — got working code, a manual, and an invoice. Wild.' },
  { name: 'Priya S.', role: 'Agency owner', rating: 4, text: 'The preview-before-pay flow builds real trust with my own clients. I resell it.' },
  { name: 'Tomás L.', role: 'E-commerce', rating: 5, text: 'Product photography + localization for 4 languages in a day. The paper trail is spotless.' },
];
