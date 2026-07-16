# NOVAGENT — Autonomous AI Agency
### *Intelligence That Delivers*

**Version:** 2.0 (Hackathon Final)
**Built on:** Hermes Agent (+54 skills)
**Security:** 3-Layer Stack (NemoClaw + Tool Trust + Spend Gates)
**Live URL:** [http://129.80.58.90](http://129.80.58.90)
**Backend Repo:** https://github.com/WilfredthePELE/Novagent
**Website Repo:** https://github.com/WilfredthePELE/Novagent-website
**Hackathon:** Hermes Agent Accelerated Business Hackathon — June 2026

---

## Table of Contents

1. [Brand & Identity](#1-brand--identity)
2. [Architecture Overview](#2-architecture-overview)
3. [Website & Frontend](#3-website--frontend)
4. [54 Skills Reference](#4-54-skills-reference)
5. [12 Service Categories — 116 Services](#5-12-service-categories--116-services)
6. [Security Architecture — 3 Layers](#6-security-architecture--3-layers)
7. [Business Documentation System — 6 Documents](#7-business-documentation-system--6-documents)
8. [Tools & Integrations — 14+ Tools](#8-tools--integrations--14-tools)
9. [Pricing Model](#9-pricing-model)
10. [Core Workflow — 17-Step Job Lifecycle](#10-core-workflow--17-step-job-lifecycle)
11. [Operator Commands](#11-operator-commands)
12. [Video Demo](#12-video-demo)
13. [Infrastructure & Deployment](#13-infrastructure--deployment)
14. [Chat System — Telegram Integration](#14-chat-system--telegram-integration)
15. [GitHub Repositories](#15-github-repositories)
16. [Submission Checklist](#16-submission-checklist)

---

## 1. Brand & Identity

| Attribute | Value |
|-----------|-------|
| **Name** | Novagent |
| **Tagline** | "Intelligence That Delivers" |
| **Primary Color** | #6366F1 (Indigo) |
| **Secondary Color** | #22D3EE (Cyan) |
| **Success** | #34D399 (Emerald) |
| **Warning** | #FBBF24 (Amber) |
| **Danger** | #EF4444 (Red) |
| **Background** | #0A0A0F (Deep near-black) |
| **Surface** | #12121A (Card backgrounds) |
| **Text Primary** | #F1F5F9 (Near-white) |
| **Text Secondary** | #94A3B8 (Muted gray-blue) |
| **Text Tertiary** | #64748B (Dim labels) |
| **Typography Headlines** | Inter 800, -0.03em letter-spacing |
| **Typography Body** | Inter 400 |
| **Typography Data** | JetBrains Mono 600 |
| **Typography Labels** | Inter 500, uppercase, 0.75rem |
| **Motion Easing** | cubic-bezier(0.4, 0, 0.2, 1) |
| **Fade Duration** | 0.6s |
| **Slide Duration** | 0.8s |
| **Stagger Delay** | 0.12s |

---

## 2. Architecture Overview

```
                    ┌──────────────────────────────────┐
                    │         NOVAGENT GATEWAY          │
                    │        (Hermes Agent Core)        │
                    │   Telegram · Website · WhatsApp   │
                    └──────────────┬───────────────────┘
                                   │
         ┌─────────────────────────┼─────────────────────────┐
         │                         │                         │
         ▼                         ▼                         ▼
┌─────────────────┐   ┌─────────────────────┐   ┌─────────────────────┐
│   JOB MANAGER    │   │   LEAD SYSTEM        │   │   SECURITY STACK    │
│  (17-step cycle) │   │  (Prospecting +      │   │   (3-Layer)          │
│                   │   │   Outreach Engine)  │   │                      │
│ • smart-onboard  │   │                      │   │ • tool-trust (Tier) │
│ • reasoning      │   │ • lead-prospector    │   │ • spend-gates ($)   │
│ • dynamic-price  │   │ • outreach-engine    │   │ • kill-switch (⚡)  │
│ • business-docs  │   │ • free sample gen    │   │ • vault-cleanup    │
│ • job-dispatcher │   │ • follow-up          │   │ • nda-compliance   │
│ • specialist sub │   │                      │   │                      │
│ • pnl-tracker    │   │                      │   │                      │
│ • feedback/refer │   │                      │   │                      │
└─────────────────┘   └─────────────────────┘   └─────────────────────┘
         │                         │                         │
         └─────────────────────────┼─────────────────────────┘
                                   │
         ┌─────────────────────────┼─────────────────────────┐
         │                         │                         │
         ▼                         ▼                         ▼
┌─────────────────┐   ┌─────────────────────┐   ┌─────────────────────┐
│  SPECIALIST      │   │   DASHBOARD          │   │   PUBLIC WEBSITE    │
│  SUB-AGENTS      │   │   & MISSION CONTROL  │   │   (Vercel + Server) │
│                  │   │                      │   │                      │
│ • video-spec     │   │ • real-time KPIs    │   │ • index.html        │
│ • creative-spec  │   │ • P&L tracking      │   │ • dashboard.html    │
│ • code-spec      │   │ • cron monitor      │   │ • login.html        │
│ • research-spec  │   │ • alert system      │   │ • chat API /api/    │
│ • data-spec      │   │ • job history       │   │ • NOVAGENT-DOCS.md  │
│ • remote-install │   │ • lead pipeline     │   │                      │
└─────────────────┘   └─────────────────────┘   └─────────────────────┘
```

### Communication Channels

| Channel | Status | Notes |
|---------|--------|-------|
| **Telegram** | ✅ Live | Primary channel — bot connected to Hermes gateway |
| **Website Chat** | ✅ Live | `/api/chat` endpoint → forwards to Telegram |
| **WhatsApp** | 🔧 Configurable | Via Business API |
| **SMS** | 🔧 Configurable | Via Twilio |
| **Phone** | 🔧 Configurable | Via Twilio voice |

---

## 3. Website & Frontend

### 3.1 Landing Page (`index.html`)
- **URL:** `http://129.80.58.90/`
- Hero section with NOVAGENT logo and tagline
- 12 service category cards with icons and descriptions
- Key stats: 54 Skills, 116 Services, 12 Categories
- Dashboard link, Documentation link, Login link
- Tech stack badges: Hermes Agent, NVIDIA Nemotron, Stripe, NemoClaw, FAL.ai
- Animated grid background with pulsing opacity

### 3.2 Dashboard (`dashboard.html`)
- **URL:** `http://129.80.58.90/dashboard.html`
- Real-time KPI cards: Revenue, Expenses, Profit, ROI, MRR, Jobs
- Agent status indicators
- Job history table
- Lead pipeline
- Financial overview
- Mission control panel
- Data from `dashboard-state.json` (auto-updated every 30 min)

### 3.3 Login Page (`login.html`)
- **URL:** `http://129.80.58.90/login.html`
- Dark theme matching brand
- Email/password form
- Demo credentials: `Configure demo secret in protected config` / `Keep demo password out of docs`
- 3-attempt lockout with Telegram redirect
- "Sign in with Telegram" button
- Session timeout: 30 minutes

### 3.4 Chat System
- **API:** `POST http://129.80.58.90/api/chat`
- **Health:** `GET http://129.80.58.90/api/health`
- **Port:** 8080 (proxied through nginx)
- **Server:** `chat-server.py` (Python, no dependencies)
- **Data persistence:** `chat-messages.json` (last 100 messages)
- **Telegram forwarding:** Every message forwarded to operator

---

## 4. 54 Skills Reference

### 4.1 Core Workflow (17 skills)

| # | Skill | Purpose |
|---|-------|---------|
| 1 | **job-manager** | Master workflow — manages every job from intake to delivery to cleanup. 10-phase lifecycle. |
| 2 | **smart-onboarding** | Warm welcome for new clients. Generates a free sample, explains the 5-stage preview process. |
| 3 | **reasoning-engine** | Forces transparent step-by-step reasoning for all complex decisions. Three effort levels. |
| 4 | **dynamic-pricing** | Calculates quotes based on complexity, tools, and historical cost data. Learns over time. |
| 5 | **client-preview** | Shows previews at every stage before full production. Client approves before expensive generation. |
| 6 | **business-docs** | Generates Proposals, Invoices, Receipts, Job Reports, and User Manuals for every job. |
| 7 | **nda-compliance** | Presents data handling commitments before work begins. Ensures informed consent. |
| 8 | **decision-audit** | Logs every significant decision with full reasoning. Permanent audit trail. |
| 9 | **job-dispatcher** | Routes jobs to specialist sub-agents for parallel execution. |
| 10 | **vault-cleanup** | Post-job data purging and audit certificate generation. Ensures no client data persists. |
| 11 | **pnl-tracker** | Tracks all revenue, costs, investments, and margins. Updates dashboard. |
| 12 | **client-feedback** | Sends rating request 24h after delivery. Routes to referral system. |
| 13 | **referral-system** | Offers referral program (discounts for both parties). |
| 14 | **recurring-revenue** | Proposes subscription pricing for recurring needs. |
| 15 | **dashboard-updater** | Updates dashboard-state.json with KPIs, agent status, job data, lead pipeline. |
| 16 | **resilience** | Prevents crashing, stalling, or silent failure. Always active. |
| 17 | **mission-control** | Real-time status overview of all operations, finances, and sub-agents. |

### 4.2 Specialist Sub-Agent Skills (7 skills)

| # | Skill | Domain |
|---|-------|--------|
| 18 | **video-specialist** | Complete video production pipeline — UGC, cinematic, animation, lip-sync. |
| 19 | **creative-specialist** | Image, design, 3D modeling, and audio/music production. |
| 20 | **code-specialist** | Software development for all code and automation jobs. |
| 21 | **research-specialist** | Deep research and intelligence pipeline. |
| 22 | **data-specialist** | Complete data analysis and visualization pipeline. |
| 23 | **ugc-campaign-creator** | Full UGC ad campaigns with multiple variants and A/B testing. |
| 24 | **remote-install-service** | Remote software installation, configuration, and tech support. |

### 4.3 Business Development (4 skills)

| # | Skill | Purpose |
|---|-------|---------|
| 25 | **lead-prospector** | Autonomously finds businesses that need Novagent services. Runs daily. |
| 26 | **outreach-engine** | Creates free samples and sends personalized outreach to qualified leads. |
| 27 | **self-investment** | Data-driven decisions about purchasing tools using earnings. |
| 28 | **api-credit-purchaser** | Autonomously purchases API credits when running low. |

### 4.4 Security & Governance (5 skills)

| # | Skill | Purpose |
|---|-------|---------|
| 29 | **tool-trust** | Verifies every tool call against signed trust passports before execution. 4 tiers. |
| 30 | **spend-gates** | Hard spend limits enforced before every financial action. 4 gate levels + daily cap. |
| 31 | **kill-switch** | Instant shutdown — freezes spending, stops sub-agents, preserves state. |
| 32 | **nda-compliance** | Data handling commitment presented before every job. Mandatory. |
| 33 | **vault-cleanup** | Post-job data purging and audit certificate generation. |

### 4.5 Platform & Integration Skills (9 skills)

| # | Skill | Purpose |
|---|-------|---------|
| 34 | **computer-use** | Desktop interaction — clicking, typing, navigating in the background. |
| 35 | **dogfood** | Exploratory QA of web apps: find bugs, evidence, reports. |
| 36 | **email** | Email sending, receiving, and management via terminal CLI. |
| 37 | **github** | GitHub repository management, PRs, issues, code review. |
| 38 | **note-taking** | Note-taking and information management in Obsidian vault. |
| 39 | **social-media** | Social media content posting and management via API. |
| 40 | **data-science** | Jupyter notebooks, data exploration, statistical analysis. |
| 41 | **mlops** | Model evaluation, benchmarks, experiment tracking, HuggingFace hub. |
| 42 | **research** | ArXiv search, blog monitoring, literature review. |

### 4.6 Creative Skills (7 skills)

| # | Skill | Purpose |
|---|-------|---------|
| 43 | **creative** | Architecture diagrams, ASCII art, Excalidraw, p5.js, sketch, music generation. |
| 44 | **media** | GIF search, YouTube transcripts, audio visualization. |
| 45 | **productivity** | Airtable, Google Workspace, Notion, PowerPoint, OCR, PDF editing. |
| 46 | **manim-video** | 3Blue1Brown-style math/algo animations. |
| 47 | **comfyui** | Image/video/audio generation with ComfyUI. |
| 48 | **popular-web-designs** | 54 real design systems as HTML/CSS templates. |
| 49 | **architecture-diagram** | Dark-themed SVG architecture/cloud/infra diagrams. |
| 50 | **ascii-video** | ASCII video: video/audio to colored ASCII MP4/GIF. |

### 4.7 Communication & Platform Skills (4 skills)

| # | Skill | Purpose |
|---|-------|---------|
| 51 | **yuanbao** | WeChat-style group management — @mentions, member queries. |
| 52 | **smart-home** | Philips Hue lights, scenes, rooms control via OpenHue. |
| 53 | **maps** | Geocode, POIs, routes, timezones via OpenStreetMap/OSRM. |
| 54 | **excalidraw** | Hand-drawn Excalidraw diagrams. |

---

## 5. 12 Service Categories — 116 Services

### 1. Video Production (10 services)
UGC ads, product promos, talking heads, cinematic production, explainer animations, style transfer, logo animation, multi-shot editing, lip-sync dubbing, character animation
**Price range:** $60–$400

### 2. Image & Design (12 services)
Product photography, logo design, social media graphics, brand identity, infographics, UI mockups, photo editing, architecture visualization, book covers, textures/patterns, photo restoration, memes
**Price range:** $30–$250

### 3. 3D Modeling (4 services)
Product models, rapid prototypes, asset packs, 3D exploration video
**Price range:** $50–$300

### 4. Audio & Music (10 services)
Voiceover (70+ languages), voice cloning, custom music, podcast production, audiobooks, SFX, multilingual dubbing, audio branding, transcription, song creation
**Price range:** $25–$200

### 5. Software Development (12 services)
Python scripts, web scraping, APIs, bots, Chrome extensions, databases, WordPress, GitHub automation, data pipelines, code review, CLI tools, spreadsheet automation
**Price range:** $100–$1,500

### 6. Research & Intelligence (11 services)
Competitive analysis, market sizing, due diligence, patents, literature review, pricing strategy, trends, real estate, tech scouting, background checks, industry reports
**Price range:** $80–$400

### 7. Data Services (12 services)
Data cleaning, sentiment analysis, financial modeling, dashboards, surveys, PDF extraction, web aggregation, A/B tests, ML classification, visualization, resume parsing, translation
**Price range:** $60–$300

### 8. Content & Copywriting (12 services)
Blog posts, email campaigns, social calendars, product descriptions, sales copy, technical docs, whitepapers, press releases, grants, scripts, resume optimization, newsletters
**Price range:** $40–$250

### 9. Business Operations (11 services)
Invoicing, expense categorization, SaaS audit, CRM cleanup, meeting prep, KPI dashboards, competitor monitoring, proposals, bookkeeping, onboarding, market monitoring
**Price range:** $50–$300

### 10. Translation & Localization (5 services)
Document translation, website localization, subtitle translation, multilingual content, app string localization
**Price range:** $25–$150

### 11. Education & Training (5 services)
Course materials, training videos, study guides, quizzes, research tutoring
**Price range:** $60–$400

### 12. Tech Support & Remote Installation (12 services)
Software installation, server configuration, environment setup, troubleshooting, migration, SSH with guided terminal sharing, every command logged and audited
**Price range:** $10–$200

---

## 6. Security Architecture — 3 Layers

### Layer 1 — NemoClaw OpenShell (Kernel-Level)
- ✅ Kernel-level sandbox isolation
- ✅ Credential proxy injection (agent never sees raw credentials)
- ✅ Filesystem and network policy enforcement
- ✅ Prevents agent escape

### Layer 2 — Tool Trust Passports (Application-Level)
- ✅ Every tool call verified against a signed **trust passport** before execution
- ✅ **4 trust tiers:**
  - **Tier 1:** Fully Trusted (read-file, write-file, terminal)
  - **Tier 2:** Verified External (web-search, browser)
  - **Tier 3:** Community Tools (approved by operator)
  - **Tier 4:** ⛔ Unknown Tools (blocked by default)
- ✅ Pre-call verification checklist (6 checks)
- ✅ Tool call logging for every Tier 2+ action
- ✅ Trust revocation on failure or budget overrun

### Layer 3 — Spend Gates (Financial-Level)
- ✅ **4 gate levels:** Micro ($0-1), Standard ($1-10), Significant ($10-50), Major ($50+)
- ✅ Daily spend cap: **$200**
- ✅ Per-job budget tracking with margin alerts
- ✅ Hard stop at 80% margin erosion
- ✅ Kill switch integration for instant spending freeze

### Kill Switch
**Trigger words:** `KILL`, `STOP`, `HALT`, `SHUTDOWN`, `FREEZE`, `ABORT`
- Immediate freeze of all spending and API calls
- Stop all sub-agents
- Save all state
- Report full status within 60 seconds
- Resume with `RESUME`
- Partial kills: `STOP SPENDING`, `STOP OUTREACH`, `STOP CRONS`, `STOP CLIENTS`

---

## 7. Business Documentation System — 6 Documents

### Sent to Client:

| Document | When | Format |
|----------|------|--------|
| **PROPOSAL** | After scoping | Scope, pricing, timeline, data handling commitment |
| **INVOICE** | After approval | Itemized bill with Stripe payment link |
| **RECEIPT** | After payment | Proof of payment with transaction ID |
| **USER MANUAL** | At delivery (technical jobs) | Instructions for using what was built |
| **THANK YOU** | After delivery confirmed | Warm closing with referral offer |

### Sent to Operator (internal):

| Document | When | Format |
|----------|------|--------|
| **JOB REPORT** | After delivery | Internal metrics, costs, margin, methodology |
| **AUDIT CERTIFICATE** | After cleanup | Security log, tools used, data handling proof |

### Document ID Format
`[TYPE]-[YYYYMMDD]-[SEQ]` — e.g., `PROP-20260627-001`, `INV-20260627-001`

---

## 8. Tools & Integrations — 17+ Tools

| Tool | Purpose | Status |
|------|---------|--------|
| **FAL.ai MCP** | 1000+ generative models — video, image, 3D, music, voice, lip-sync | ✅ Integrated |
| **Stripe MCP** | Payments receiving + self-provisioning tools | ✅ Integrated |
| **GitHub MCP** | Website deployment + code delivery | ✅ Integrated |
| **NVIDIA Nemotron 3 Ultra** | Core LLM inference via OpenRouter | ✅ Active |
| **Web Search** | Real-time information retrieval | ✅ Active |
| **Browser Automation** | Web interaction, form filling, data extraction | ✅ Active |
| **Code Execution** | Python sandboxed execution environment | ✅ Active |
| **Terminal** | SSH, shell commands, remote server access | ✅ Active |
| **File Tools** | Read/write/search files across the filesystem | ✅ Active |
| **Vision** | Image analysis and understanding (11 models) | ✅ Active |
| **Image Gen** | FLUX, Stable Diffusion, DALL-E, etc. | ✅ Active |
| **TTS** | Edge, ElevenLabs, OpenAI, Google — 10 providers | ✅ Active |
| **Memory** | Persistent cross-session memory and user profiles | ✅ Active |
| **Cron Scheduling** | Recurring jobs, health checks, scheduled outreach | ✅ Active |
| **Sub-Agent Delegation** | Parallel task execution via isolated workers | ✅ Active |
| **HyperFrames** | Video rendering and composition framework | ✅ Active |
| **Telegram API** | Bot messaging and gateway communication | ✅ Active |

---

## 9. Pricing Model

### Service Pricing Ranges

| Service Type | Price Range |
|-------------|-------------|
| Quick Fix (single install/config) | $10 – $25 |
| Full Setup (complete environment) | $25 – $75 |
| Complex Migration | $75 – $200 |
| Ongoing Maintenance (monthly) | $30 – $100/month |
| Standard Creative Services | $50 – $250 |
| Premium/UGC Campaigns | $100 – $500 |
| Enterprise/Complex Projects | Custom quote |

### Pricing Formula
```
Price = (estimated cost × 3.5) + complexity premium
```

### Daily Financial Controls
- **Daily spend cap:** $200
- **Per-transaction limit:** $50 (auto) / $50+ (requires operator approval)
- **Profit-first rule:** No spend without confirmed revenue
- **Investment rule:** Only when P&L profit ≥ $500 AND projected ROI > 2x

---

## 10. Core Workflow — 17-Step Job Lifecycle

### The 4-Step Process (Client View)
1. **💬 Client Messages** — Telegram, website, WhatsApp, SMS, email, or phone
2. **👁️ Preview & Approve** — 5-stage preview ladder, approve every step
3. **💳 Pay via Stripe** — Secure checkout, work starts after confirmation
4. **📦 Get Everything** — Deliverables + 6 professional documents

### The Full 17-Step Lifecycle (System View)

| Step | Action | Skill Used |
|------|--------|------------|
| 1 | Receive client request | gateway |
| 2 | If new → generate free sample + explain process | smart-onboarding |
| 3 | Present NDA/data handling commitment | nda-compliance |
| 4 | Scope work: complexity, tools, time, cost | reasoning-engine |
| 5 | Generate PROPOSAL and send | business-docs |
| 6 | Quote price | dynamic-pricing |
| 7 | Generate INVOICE with Stripe link | business-docs |
| 8 | Generate RECEIPT after payment | business-docs |
| 9 | Log decision with full reasoning | decision-audit |
| 10 | Show client previews at each stage | client-preview |
| 11 | Delegate complex jobs to sub-agents | job-dispatcher |
| 12 | Deliver work + generate JOB REPORT + USER MANUAL | business-docs |
| 13 | Send THANK YOU with referral offer | referral-system |
| 14 | Run vault-cleanup: audit cert, purge data | vault-cleanup |
| 15 | Log job in P&L | pnl-tracker |
| 16 | Update dashboard | dashboard-updater |
| 17 | 24h later: request feedback, offer referral | client-feedback |

### Parallel Systems (Always Running)

| System | Schedule | Purpose |
|--------|----------|---------|
| **lead-prospector** | Daily (8:00 AM) | Find new business opportunities |
| **outreach-engine** | After prospecting | Send samples to qualified leads |
| **resilience** | Every 6 hours | Health check and self-repair |
| **mission-control** | Every 30 min | Dashboard auto-update |
| **tool-trust** | Before every call | Security verification |
| **spend-gates** | Before every payment | Financial control |

---

## 11. Operator Commands

| Command | Action |
|---------|--------|
| `STATUS` | Full mission control report — all systems, finances, pipeline |
| `PNL` | Financial summary — revenue, expenses, profit, margins |
| `LEADS` | Lead pipeline status — active, contacted, converted |
| `JOBS` | Active jobs list — in progress, pending, completed |
| `KILL` | 🚨 Emergency stop — freeze all operations |
| `STOP SPENDING` | Freeze spend gates only |
| `STOP OUTREACH` | Stop lead prospecting and outreach campaigns |
| `STOP CRONS` | Stop all scheduled jobs |
| `STOP CLIENTS` | Stop accepting new client requests |
| `RESUME` | Resume after kill — everything recovers |
| `GOAL [description] BUDGET $[X]` | Set new autonomous business goal |
| `HELP` | Show all available commands |

---

## 12. Video Demo

The Novagent demo video was built using **HyperFrames** and **GSAP**, rendered at 1920×1080 @ 30fps.

### Final Video
- **Output:** `novagent-final-2-45.mp4` (~165 seconds, ~9.9 MB, 1920×1080)
- **Audio:** Original voice narration + violin background music mixed in
- **Source:** `novagent-final.mp4` with violin overlay

### Scene Breakdown

| Scene | Duration | Content |
|-------|----------|---------|
| Scene 1 — The Hook | 25s | Logo, tagline, stat cards (116 services, 12 categories, 54 AI skills), tech badges |
| Scene 2 — Process | 30s | 4-step client process, 6 document types, gradient transitions |
| Scene 3 — Capabilities | 30s | Service capabilities, metrics, capability projections |
| Scene 4 — Security | 30s | 3-layer security stack (Kernel, Application, Financial) |
| Scene 5 — Business | 30s | 12 categories grid, pricing model, P&L overview |
| Scene 6 — Closing | 15s | Tagline, contact CTA, hackathon credit |

### HyperFrames Project
- **Project:** `C:\Users\HP\novagent-demo`
- **Compositions:** 6 standalone scenes in `compositions/scene-01.html` through `scene-06.html`
- **Render:** Each scene rendered individually, then merged with tight transitions
- **Toolchain:** HyperFrames 0.7.18, Edge browser for rendering, ffmpeg for final merge

---

## 13. Infrastructure & Deployment

### Production Server
- **Host:** Oracle Cloud VM
- **IP:** `129.80.58.90`
- **OS:** Ubuntu 22.04
- **Web Server:** nginx 1.18.0
- **App Server:** Python chat-server.py (systemd service `novagent-chat`)
- **Ports:** 80 (HTTP), 8080 (API proxy)
| **SSH Key:** `ssh -i <your-local-key>` to server host |
| **Note:** The real key path and token values are kept out of docs on purpose. |

### Frontend — Vercel Deployment
- **Repo:** https://github.com/WilfredthePELE/Novagent-website
- **Framework:** Vite
- **Build:** `npm run build`
- **Output:** `dist/`
- **Local dev:** `npm run dev`

### Remote Server Files
- **Web root:** `/home/ubuntu/novagent-website`
- **Dashboard:** `dashboard.html` served at `/`
- **Index:** `index.html` served at `/`
- **Vercel build artifacts:** deployed via GitHub → Vercel

### Vercel Auto-Deployment Steps
1. Connect GitHub repo `WilfredthePELE/Novagent-website` in Vercel
2. Framework preset: **Vite**
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy

---

## 14. Chat System — Telegram Integration

| Component | Value |
|-----------|-------|
| **API Endpoint** | `POST /api/chat` |
| **Health Check** | `GET /api/health` |
| **Local Port** | 8080 |
| **Host Process** | `chat-server.py` (systemd: `novagent-chat`) |
| **Messages File** | `chat-messages.json` |
| **Telegram Bot** | `@novagent_bot` |
| **Proxy** | nginx forwards `/api/*` to `127.0.0.1:8080` |

### Chat Flow
1. User submits message via website chat widget
2. nginx proxies to `chat-server.py`
3. Message saved to `chat-messages.json`
4. Message forwarded to Telegram bot (`@novagent_bot`)
5. Operator replies via Telegram
6. Reply saved back to `chat-messages.json`
7. Website widget displays conversation

---

## 15. GitHub Repositories

| Repo | URL | Purpose |
|------|-----|---------|
| **Backend** | https://github.com/WilfredthePELE/Novagent | Core Novagent system, business logic |
| **Website** | https://github.com/WilfredthePELE/Novagent-website | Frontend site (Vite + Vercel) |

### Local Paths
- Backend: `C:\Users\HP\novagent-repo`
- Frontend: `C:\Users\HP\Downloads\novagent-website`
- Video project: `C:\Users\HP\novagent-demo`

---

## 16. Submission Checklist

| Item | Status | Notes |
|------|--------|-------|
| Public website | ✅ | Live at `http://129.80.58.90` |
| Vite build passing | ✅ | `npm run build` → `dist/` |
| GitHub push | ✅ | `Novagent-website` repo pushed |
| Vercel deployment ready | ✅ | Vite config in place |
| Chat API connected | ✅ | `/api/chat` → Telegram bot |
| Security layers | ✅ | 3-layer stack active |
| Demo video | ✅ | 165s final with violin audio |
| Documentation | ✅ | Business docs auto-generated |
| Operators | ✅ | 17-step workflow operational |
| Skills | ✅ | 54 skills across 12 categories |
| Services | ✅ | 116 services ready to deliver |

---

## 17. License

This project is part of the Hermes Agent Accelerated Business Hackathon (June 2026).
Proprietary — all rights reserved.
