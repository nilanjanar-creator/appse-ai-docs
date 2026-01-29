---
title: "Perplexity"
slug: /app-integrations/perplexity/
---

Perplexity provides a powerful API that allows you to integrate its advanced large language models into your applications. It offers real-time web search capabilities and sophisticated reasoning.

## Set Up Credential

:::info

To use the Perplexity API, you need to have a Perplexity account and add credits to your balance.

:::

### Required Fields

You’ll be asked to fill in the following details:

| Field           | Description                                 |
| --------------- | ------------------------------------------- |
| Connection Name | A name to help you identify this connection |
| API Key         | Your personal API Key from Perplexity       |

### Step-by-Step Guide

#### 1. Sign In to Perplexity

Go to [perplexity.ai](https://www.perplexity.ai/) and sign in.

#### 2. Navigate to API Settings

Click on your profile icon in the corner and select **API** from the menu to access the API settings page.

<img src="\img\credentials\perplexity\api-settings.png" alt="appse ai Perplexity API Settings" width="700"/>
<br/>

#### 3. Add Credits (if needed)

Before generating a key, ensure you have added a payment method and purchased credits. The API requires a positive balance to function.

#### 4. Create API Group (for new users)

If you are a new user, you may need to create an **API Group** first. This helps organize your keys. Click on "Create New Group" or similar instructions if prompted, and provide the necessary details.

<img src="\img\credentials\perplexity\create-api-group.png" alt="appse ai Perplexity Create API Group" width="700"/>
<br/>

#### 5. Generate API Key

Once you have a group setup, in the API section, look for the **API Keys** card and click on "Generate".

<img src="\img\credentials\perplexity\generate-key.png" alt="appse ai Perplexity Generate Key" width="700"/>
<br/>

#### 6. Copy and store your API key

Copy the generated API key immediately. Paste it into the **API Key** field in the appse ai credential form and click "Save".

<img src="\img\credentials\perplexity\copy-key.png" alt="appse ai Perplexity Copy Key" width="700"/>

<br/>

:::warning

Your API key will only be shown once. Make sure to copy it and store it securely.

## :::

## Triggers and Actions

Here is a list of the available actions and triggers for Perplexity:

### Actions

- **Create Chat Completion** - Create a chat completion with optional streaming. This action requires a **Model** name (e.g., 'sonar-pro') and a list of **Messages**, where each message must define a 'role' (System or User) and 'content'.
- **Execute Search** - Execute a web search and retrieve structured search results. The **Query** parameter supports either a single search string or an array of strings.

---

## Need Help?

If you’re unsure about any field or face connection issues, reach out to our support team at [hello@appse.ai](mailto:hello@appse.ai)
