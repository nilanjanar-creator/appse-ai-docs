---
title: "Google Gemini"
slug: /app-integrations/google-gemini/
---

Google Gemini provides advanced multimodal AI models capable of understanding and generating text, code, images, and audio. Integrating Google Gemini into appse ai enables you to build sophisticated agents and workflows with state-of-the-art reasoning capabilities.

## Set Up Credential

:::info

Before you create a credential for Google Gemini using appse ai, ensure you have a Google Cloud project or use Google AI Studio where the API is enabled.

:::

### Required Fields

You’ll be asked to fill in the following details:

| Field           | Description                                 |
| --------------- | ------------------------------------------- |
| Connection Name | A name to help you identify this connection |
| API Key         | Your API Key from Google AI Studio          |

### Step-by-Step Guide

#### 1. Sign In to Google AI Studio

Go to [Google AI Studio](https://aistudio.google.com/) and sign in with your Google account.

#### 2. Create API Key

Click on the "Get API key" button in the sidebar. Then click on "Create API key".

<img src="\img\credentials\google-gemini\get-api-key.png" alt="appse ai Google Gemini Get API Key" width="700"/>
<br/>

You can choose to create a key in a new project or an existing Google Cloud project.

<img src="\img\credentials\google-gemini\create-new-key.png" alt="appse ai Google Gemini Create New Key" width="700"/>

#### 3. Copy and store your API key

Once generated, copy the API key string. Paste it into the **API Key** field in the appse ai credential form and click "Save".

<img src="\img\credentials\google-gemini\copy-api-key.png" alt="appse ai Google Gemini Copy API Key" width="700"/>

<br/>

:::warning

Keep your API key secure. Do not share it publicly.

## :::

## Triggers and Actions

Here is a list of the available actions and triggers for Google Gemini:

### Actions

- **Generate Content with Google Search** - Generate content with Gemini 2.5 Flash using Google Search. Requires **Text** content and the **Gemini Model** name.
- **Generate Text Content** - Generate text content with Gemini 2.5 Flash. Requires **Text** content and the **Gemini Model** name.

---

## Need Help?

If you’re unsure about any field or face connection issues, reach out to our support team at [hello@appse.ai](mailto:hello@appse.ai)
