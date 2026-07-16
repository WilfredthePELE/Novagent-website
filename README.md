# NOVAGENT — Autonomous AI Agency
### *Intelligence That Delivers*

**Version:** 2.0 (Hackathon Final)
**Built on:** Hermes Agent
**Security:** 3-Layer Stack (NemoClaw + Tool Trust + Spend Gates)
**Live URL:** [http://129.80.58.90](http://129.80.58.90)
**Backend Repo:** https://github.com/WilfredthePELE/Novagent
**Website Repo:** https://github.com/WilfredthePELE/Novagent-website
**Hackathon:** Hermes Agent Accelerated Business Hackathon — June 2026

---

## Security Note
This repo is public. Do not commit secrets, credentials, tokens, keys, or internal configuration paths. Environment-specific values live outside docs, in protected config/CI secrets.

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
- Demo credentials stored in protected config only
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
