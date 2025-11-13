---
title: "Qdrant"
slug : /app-integrations/qdrant
---

Qdrant is a vector search engine designed to handle high-dimensional data and machine learning models efficiently. By integrating Qdrant with appse ai, you can automate vector data processing, connect AI-driven workflows, and perform advanced search operations, allowing you to leverage powerful machine learning capabilities in your automated processes.

---

## Setup Credential

Follow the steps below to quickly set up your credential.

### Required Fields

You’ll be asked to fill in the following details:

| Field             | Description                                      |
|------------------|--------------------------------------------------|
| Connection Name   | A name to help you identify this connection      |
| Endpoint     | Your Qdrant cluster endpoint          |
| API Key  | Your personal API token from Qdrant      |

### Step-by-Step Guide

#### 1. Add Connection Name

- Think of a meaningful name to identify this connection.
- This name is used purely for display purposes within our platform and does not affect your Qdrant account.

#### 2. Find Your Qdrant Endpoint

- Log in to your **Qdrant** account.
- In the sidebar, click on Clusters → Select the Cluster Name

<img src="/img/credentials/qdrant/qdrant-cred-clusters.png" alt="APPSeAI Qdrant clusters" width="700"/>

- In the Overview tab, you will find the Endpoint.
<img src="/img/credentials/qdrant/qdrant-cred-endpoint.png" alt="APPSeAI Qdrant Endpoint" width="700"/>

#### 3. Find Your Qdrant API Key

- From the same dashboard. Click on API Keys → Create.
<img src="/img/credentials/qdrant/qdrant-cred-api-keys-1.png" alt="APPSeAI Qdrant Create API Key" width="700"/>

- You can give a name to your API Key. Make sure the allowed operations is set to *Read, Write and Manage Operations*. Once completed click on `Create`
<img src="/img/credentials/qdrant/qdrant-cred-api-keys-2.png" alt="APPSeAI Qdrant API Key Setup" width="700"/>

- You will see a new window called *API Key Created*, the **API key** will be shown in the highlighted field below. Make sure you copy and store it somewhere, this is shown to you only once. Once you have your **API Key**, add it to the credentials form.

<img src="/img/credentials/qdrant/qdrant-cred-api-keys-3.png" alt="APPSeAI Qdrant API Key Copy" width="700"/>

`Note`: Treat your API key like a password. Do not share it publicly.

### Save Your Credential

Once you've filled in the necessary fields, click **"Save"** to store and verify your setup.

- If successful, your Qdrant credential will show a "✓" icon. Now you can use this application for your integrations.
- If it fails, you will be displayed a "!" icon. In that case, please recheck your API Key and Domain or contact support.

---

## Triggers and Actions

Every application has a pre-defined set of triggers and actions that allow users to perform application specific activities within the platform. Here is a list of all the actions and triggers available:

### Actions

> Points Actions

- Count Points
- Retrieve Points
- Upsert Points
- Delete Points
- Batch Update Points
- Scroll Points

> Collections Actions

- List Collections
- Create Collection
- Delete Collection
- Get Collection Info

---

## Need Help?

If you’re unsure about any field or face connection issues, reach out to our support team at hello@appse.ai

