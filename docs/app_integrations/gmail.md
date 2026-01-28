---
title: Gmail
description: Step-by-step guide to set up Gmail credentials for Appse.ai integration
slug: /app-integrations/gmail/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction

Gmail is Google’s email service that allows users to send, receive, search, and manage emails efficiently. By integrating Gmail with Appse.ai, you can automate email-based workflows such as sending notifications, reading inbox messages, monitoring threads, and triggering actions based on email events. This guide explains how to configure **Gmail OAuth 2.0 credentials** so Appse.ai can securely connect to your Gmail account.

---

## Key Features

- **Send Emails**: Automatically send emails using Gmail.
- **Read Inbox Messages**: Fetch incoming emails and threads.
- **Search Emails**: Query emails using Gmail search operators.
- **Attachment Handling**: Download and upload email attachments.
- **Workflow Automation**: Trigger workflows based on email activity.
- **Secure OAuth Access**: Uses Google OAuth 2.0 for safe authentication.

---

## Setup Credential

Follow the steps below to configure Gmail credentials in Appse.ai.

### Required Fields

The following fields are required to connect Gmail with Appse.ai.

| Field             | Description                                             |
| ----------------- | ------------------------------------------------------- |
| Authorization URL | Google OAuth authorization endpoint                     |
| Token URL         | Google OAuth token endpoint                             |
| Client ID         | OAuth Client ID generated from Google Cloud Console     |
| Client Secret     | OAuth Client Secret generated from Google Cloud Console |
| API Access Scope  | Gmail API scopes required for email access              |
| Base API URL      | Gmail API base endpoint                                 |

:::info
All required fields must be configured correctly to successfully authorize Gmail with Appse.ai.
:::

---

## Step-by-Step Guide

To get started, click **Select a credential** and choose **Create New Credential**.

<img src="/img/credentials/gmail/new_credential.png" alt="Create Gmail credential" width="700"/>

This opens the Gmail credential configuration form.

<img src="/img/credentials/gmail/credential_form.png" alt="Gmail credential form" width="700"/>

---

## Step 1: Create a Google Cloud Project

1. Open **Google Cloud Console**  
   https://console.cloud.google.com/

2. Click the **project selector** in the top-left corner.

3. Click **New Project**.

4. Enter the following details:
   - **Project Name**  
     Example: `AppseAI Gmail Integration`
   - **Organization** (optional)
   - **Billing Account** (recommended for production use)

5. Click **Create**.

6. Wait until the project is created and selected.

---

## Step 2: Enable the Gmail API

1. In Google Cloud Console, go to:

   **APIs & Services → Library**

2. Search for **Gmail API**.

3. Click **Gmail API**.

4. Click **Enable**.

:::info
The Gmail API must be enabled before OAuth authentication can work.
:::

---

## Step 3: Configure OAuth Consent Screen

The OAuth consent screen defines what users see when granting Gmail access.

---

### 3.1 Choose User Type

1. Navigate to:

   **APIs & Services → OAuth consent screen**

2. Select **External**.

3. Click **Create**.

:::note
External is required for SaaS and client-facing applications like Appse.ai.
:::

---

### 3.2 App Information

Fill in the following details:

- **App name**  
  (Displayed to users during Gmail authorization)

- **User support email**

- **Developer contact email**

Click **Save and Continue**.

---

### 3.3 Configure Gmail Scopes

1. Click **Add or Remove Scopes**.

2. Search for **Gmail API**.

3. Select the following required scope:

4. Click **Update**.

5. Click **Save and Continue**.

:::warning
The `https://mail.google.com/` scope provides full Gmail access and is required for sending and reading emails.
:::

---

### 3.4 Add Test Users

While the app is in **Testing mode**, only test users can authorize it.

1. Navigate to:

   **APIs & Services → OAuth consent screen**

2. Scroll to the **Audience** section.

3. Locate **Test users**.

4. Click **Add Users**.

5. Enter one or more Gmail addresses.

:::important
You must add your own Gmail address (or the user connecting Gmail).  
If your email is not added here, OAuth login will fail.
:::

6. Click **Save**.

---

## Step 4: Create OAuth 2.0 Credentials

1. Go to:

   **APIs & Services → Credentials**

2. Click **Create Credentials**.

3. Select **OAuth Client ID**.

---

### 4.1 Configure OAuth Client

Fill in the following details:

- **Application type**: `Web application`
- **Name**: `AppseAI Gmail Client`

#### Authorized Redirect URI

Add the callback URL exactly as shown below:

:::warning
The redirect URI must match exactly.  
Any mismatch will cause OAuth authorization failure.
:::

4. Click **Create**.

---

### 4.2 Copy OAuth Credentials

After creation, Google will generate:

- **Client ID**
- **Client Secret**

Copy and store them securely.

<img src="/img/credentials/gmail/client_credentials.png" alt="Gmail client credentials" width="700"/>

---

## Configure Credential in Appse.ai

Return to Appse.ai and enter:

- **Client ID**
- **Client Secret**
- **Authorization URL**
- **Token URL**
- **Base API URL**
- **Scopes**

Then click **Save and Authorize**.

---

## Final Authorization

1. Sign in with your Gmail account.
2. Review requested permissions.
3. Click **Allow**.

If the configuration is correct, Appse.ai will complete authorization and securely store the credential.

---

## Common Gmail OAuth URLs

| Type              | URL                                          |
| ----------------- | -------------------------------------------- |
| Authorization URL | https://accounts.google.com/o/oauth2/v2/auth |
| Token URL         | https://oauth2.googleapis.com/token          |
| Base API URL      | https://gmail.googleapis.com                 |

---

## Support

Need help? Contact our support team at hello@appse.ai

---
