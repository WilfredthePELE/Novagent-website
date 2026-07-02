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
  { name: 'Video Production', count: 10, icon: 'video', range: '$60–$400', blurb: 'UGC ads, cinematic production, explainer animation, lip-sync dubbing, character animation.' },
  { name: 'Image & Design', count: 12, icon: 'image', range: '$30–$250', blurb: 'Product photography, logos, brand identity, infographics, UI mockups, restoration.' },
  { name: '3D Modeling', count: 4, icon: 'cube', range: '$50–$300', blurb: 'Product models, rapid prototypes, asset packs, 3D exploration video.' },
  { name: 'Audio & Music', count: 10, icon: 'audio', range: '$25–$200', blurb: 'Voiceover in 70+ languages, voice cloning, custom music, podcasts, audiobooks.' },
  { name: 'Software Dev', count: 12, icon: 'code', range: '$100–$1,500', blurb: 'Python, scraping, APIs, bots, extensions, databases, pipelines, CLI tools.' },
  { name: 'Research & Intel', count: 11, icon: 'research', range: '$80–$400', blurb: 'Competitive analysis, market sizing, due diligence, patents, trend scouting.' },
  { name: 'Data Services', count: 12, icon: 'data', range: '$60–$300', blurb: 'Cleaning, sentiment, financial modeling, dashboards, ML classification, viz.' },
  { name: 'Content & Copy', count: 12, icon: 'content', range: '$40–$250', blurb: 'Blogs, email, social calendars, sales copy, whitepapers, scripts, newsletters.' },
  { name: 'Business Ops', count: 11, icon: 'business', range: '$50–$300', blurb: 'Invoicing, SaaS audits, CRM cleanup, KPI dashboards, proposals, bookkeeping.' },
  { name: 'Translation', count: 5, icon: 'globe', range: '$25–$150', blurb: 'Documents, website localization, subtitles, multilingual content, app strings.' },
  { name: 'Education', count: 5, icon: 'education', range: '$60–$400', blurb: 'Course materials, training videos, study guides, quizzes, research tutoring.' },
  { name: 'Tech Support', count: 12, icon: 'support', range: '$10–$200', blurb: 'Software installs, server config, migration, SSH with every command audited.' },
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
  { label: 'Dashboard', href: '/dashboard.html' },
  { label: 'Docs', href: '/NOVAGENT-DOCUMENTATION.md' },
];
