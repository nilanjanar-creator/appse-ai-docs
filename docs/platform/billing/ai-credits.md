---
title: AI Credits
slug: /platform/billing/ai-credits
sidebar_position: 1
description: Learn what AI Credits are, how they are consumed by AI nodes and Agents, and what happens when they run out.
---

**AI Credits** are the unit of resource consumption for AI-powered features on the appse ai platform. Every time an AI-Enabled Node processes data inside a workflow, or an AI Agent handles a task, AI Credits are deducted from your monthly allowance.

---

## Monthly AI Credit Allowance

Each plan includes a fixed number of AI Credits that reset every month.

| Plan       | Monthly AI Credits |
| ---------- | ------------------ |
| Free       | 20 credits         |
| Starter    | 1,000 credits      |
| Growth     | 1,000 credits      |
| Enterprise | 1,500 credits      |

You can monitor your current usage at any time by navigating to **Subscriptions → Usage → AI Credits**.

<img src="/img/platform/billing/ai-credits-usage.png" alt="AI Credits usage screen showing exhausted state" width="700"/>

---

## What Happens When AI Credits Are Exhausted

:::warning
When your AI Credits are fully consumed, **only the nodes that use AI Credits will stop working**. The rest of your workflow continues to run without interruption.
:::

- AI-Enabled Nodes (e.g., nodes using an AI model, AI Agents) will fail to execute until credits are replenished.
- Non-AI nodes in the same workflow are unaffected and will continue processing normally.
- To resume AI-Enabled Node execution, either wait for your monthly credits to reset or purchase an AI Credit pack.

---

## Extra AI Credits

If you need more AI Credits before your monthly allowance resets, you can purchase a one-time credit pack.

### Available Credit Packs

| Pack         | Credits        | Price             |
| ------------ | -------------- | ----------------- |
| Starter Pack | 4,000 credits  | $20               |
| Growth Pack  | 10,000 credits | $50 (Recommended) |
| Pro Pack     | 20,000 credits | $100              |

:::info
Credit packs are **not** monthly. Purchased credits are valid until your annual subscription renews — they do not roll over to the next subscription period.
:::

### How Credits Are Consumed

Credits are always drawn in the following order:

1. **Monthly allowance first** — your plan's monthly credits are used up before any pack credits are touched.
2. **Credit pack next** — once your monthly allowance is exhausted, AI nodes automatically draw from your purchased pack (if one exists).

### How to Buy a Credit Pack

1. Navigate to **Subscriptions → Usage** in the platform.
2. Scroll to the **AI Credits** section and click **Buy more**.
3. Select your preferred credit pack from the dropdown.
4. Review the **Total due today** summary, agree to the Terms & Conditions, and click **Proceed to Checkout**.

<img src="/img/platform/billing/buy-extra-ai-credits.png" alt="Buy extra AI credits modal showing pack options and pricing" width="700"/>

---

## Support

If you have questions about your AI Credits or billing, reach out to our support team at [hello@appse.ai](mailto:hello@appse.ai)
