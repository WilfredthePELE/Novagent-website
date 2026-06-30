---
name: spend-gates
description: Hard spend limits enforced before any financial action. Every spend attempt is checked, logged, and either approved or blocked with the reason recorded.
trigger: ALWAYS ACTIVE — before ANY action that costs money (API calls, tool usage, self-investment, credit purchases)
---

# Spend Gates — Every Dollar Controlled

## Gate Levels

GATE 1 — MICRO SPEND (auto-approve, log):
- Amount: $0 - $1
- Examples: single image generation, web search, TTS for short text
- Action: proceed + log
- Log: SPEND_GATE | amount:$[X] | gate:micro | action:[what] | approved:auto

GATE 2 — STANDARD SPEND (auto-approve, log with reasoning):
- Amount: $1 - $10
- Examples: video generation, batch image gen, music creation, multiple API calls
- Action: proceed + log with cost justification
- Log: SPEND_GATE | amount:$[X] | gate:standard | action:[what] | justification:[why this spend is worth it] | job_revenue:$[Y] | margin_impact:[%]

GATE 3 — SIGNIFICANT SPEND (require reasoning check, auto-approve if ROI positive):
- Amount: $10 - $50
- Examples: premium video (Veo 3.1), UGC campaign batch, large research job
- Action: reasoning-engine MUST justify the spend before proceeding
- Check: Is this for a paid job? Does revenue exceed cost by 2x+?
- Log: SPEND_GATE | amount:$[X] | gate:significant | reasoning:[full justification] | approved:[yes/no]

GATE 4 — MAJOR SPEND (always require operator approval):
- Amount: $50+
- Examples: self-investment in expensive tools, large API credit purchases
- Action: BLOCK. Notify operator. Wait for explicit approval.
- Log: SPEND_GATE | amount:$[X] | gate:major | action:[what] | status:awaiting_approval

## Daily Spend Tracking

Maintain running daily total:
DAILY_SPEND | date:[today] | total:$[X] | breakdown:[list of spends] | remaining_budget:$[Y]

If daily total approaches $200 cap:
- At $150: warning logged, reduce spending to essential only
- At $180: alert operator, pause non-essential operations
- At $200: HARD STOP on all spending. Only free operations continue.

## Per-Job Spend Tracking

For each active job, track cumulative spend:
JOB_SPEND | job:[id] | total_spent:$[X] | budget_quoted:$[Y] | margin_remaining:$[Z]

If spend exceeds 60% of quoted revenue -> alert. The job is becoming unprofitable.
If spend exceeds 80% of quoted revenue -> pause and reassess. Consider cheaper alternatives.
If spend exceeds revenue -> STOP. Deliver what you have. Log the loss. Learn from it.

## Kill Switch Integration

If the operator sends "KILL" or "STOP ALL SPENDING" at any time:
1. Immediately halt ALL operations that cost money
2. Complete any in-progress deliveries using only free tools (memory, file ops)
3. Log: KILL_SWITCH | triggered_by:[operator] | active_jobs:[list] | total_saved:$[X] | timestamp:[now]
4. Report status to operator
5. Wait for "RESUME" command before spending again

## Blocked Spend Report

Every blocked spend is logged with full context:
SPEND_BLOCKED | amount:$[X] | action:[what was attempted] | gate:[which gate blocked it] | reason:[why] | alternative:[suggested cheaper approach] | timestamp:[now]

This creates a complete audit trail of financial controls.

## Scoped Purchasing Protocol

Every purchase Novagent makes follows a scoped purchasing model:

### How It Works
1. Agent identifies a need (API credits, tool subscription, outreach cost)
2. Spend-gates checks: amount gate, daily cap, P&L check
3. If approved, the purchase is SCOPED:
   - Purpose: logged (what is this purchase FOR)
   - Vendor: verified (is this vendor on the approved list)
   - Amount: exact (no open-ended charges)
   - Duration: defined (one-time or monthly with cancel date)
   - Job link: tied to a specific job ID when applicable
4. Stripe Link CLI sends approval request to operator's phone
5. Operator sees: vendor, amount, purpose, job link
6. One tap to approve or decline
7. If approved: purchase executes, logged with full audit trail
8. If declined: agent finds alternative or pauses

### Purchase Scoping Rules
- Every purchase must have a stated PURPOSE
- Every purchase must be tied to a JOB or OPERATIONAL NEED
- No open-ended subscriptions without monthly review
- Monthly subscriptions auto-flagged for renewal review on the 25th of each month
- Unused subscriptions cancelled automatically after 30 days of zero usage

### Purchase Audit Trail
PURCHASE_SCOPE | id:[unique] | vendor:[name] | amount:$[X] | purpose:[why] | job_link:[job_id or "operational"] | type:[one-time/subscription] | approved_by:[operator/auto] | cancel_date:[if subscription] | date:[today]

### Future Enhancement
Single-use virtual cards via Stripe Issuing — each purchase gets a unique card number that works only for that one transaction, then auto-expires. This prevents any vendor from charging more than approved.
