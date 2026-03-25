---
title: "Tavily"
slug: /app-integrations/tavily/
---

Tavily is a real-time search engine built for AI agents and workflows. Integrating Tavily into appse ai enables you to build powerful agents with live web search, content extraction, site crawling, and URL mapping capabilities.

---

## Set Up Credential

:::info

Before you create a credential for Tavily using appse ai, ensure you have a Tavily account and have generated an API key from the Tavily dashboard.

:::

### Required Fields

You'll be asked to fill in the following details:

| Field           | Description                                        |
| --------------- | -------------------------------------------------- |
| Connection Name | A name to help you identify this connection        |
| API Key         | Your API Key from the Tavily dashboard             |

---

### Step-by-Step Guide

#### 1. Open the Credential Form

Click **Select a Credential** and choose **Tavily** from the application list.

<img src="/img/credentials/tavily/create-new-cred-tavily.png" alt="appse ai Tavily Select Credential" width="700"/>

<br/>

This opens the Tavily credential form. Add your **Connection Name**.

<img src="/img/credentials/tavily/enter-connection-name-tavily.png" alt="appse ai Tavily Connection Name" width="700"/>

#### 2. Sign In to the Tavily Platform

Go to [Tavily Platform](https://app.tavily.com/home) and sign in with your account (or create a free one — no credit card required).

#### 3. Copy Your API Key

Once signed in, your API key is displayed directly on the dashboard under the **API Keys** section. Your key will start with `tvly-`.

<img src="/img/credentials/tavily/copy-api-key-tavily.png" alt="appse ai Tavily Get API Key" width="700"/>

#### 4. Paste API Key in appse ai

Return to the appse ai credential form. Paste the copied API key into the **API Key** field and click **"Save"** to store and validate your credential.

<img src="/img/credentials/tavily/paste-tavily-api-key.png" alt="appse ai Tavily Save Credential" width="700"/>

<br/>

:::warning

Keep your API key secure. Do not share it publicly. If you suspect your key has been compromised, you can regenerate it from the Tavily dashboard at any time.

:::

---

## Triggers and Actions

Here is a list of the available actions for Tavily:

### Actions

- **Search** — Search the web in real-time using Tavily's AI-optimized search engine. Returns relevant, summarized results for a given query.

- **Extract** — Extract clean, structured content from one or more URLs. Useful for pulling readable text from web pages for further processing.

- **Crawl** — Crawl a website starting from a given URL. Tavily follows links and retrieves content across multiple pages of the site.

- **Map** — Generate a structured map of all URLs found on a website. Useful for discovering the full link structure of a site.

---

## Support

Need help? Contact our support team at [hello@appse.ai](mailto:hello@appse.ai)