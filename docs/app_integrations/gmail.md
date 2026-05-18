---
title: Gmail
description: Step-by-step guide to set up Gmail credentials for Appse.ai integration
slug: /app-integrations/gmail/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction

Gmail is Google’s email service that allows users to send, receive, search, and manage emails efficiently. By integrating Gmail with appse ai, you can automate email-based workflows such as sending notifications, reading inbox messages, monitoring threads, and triggering actions based on email events. This guide explains how to configure **Gmail OAuth 2.0 credentials** so appse ai can securely connect to your Gmail account.

---

## Key Features

- **Send Emails**: Automatically send emails using Gmail.
- **Read Inbox Messages**: Fetch incoming emails and threads.
- **Search Emails**: Query emails using Gmail search operators.
- **Workflow Automation**: Trigger workflows based on email activity.
- **Secure OAuth Access**: Uses Google OAuth 2.0 for safe authentication.

---

## Setup Credential

Follow the steps below to configure Gmail credentials in appse ai.

### Required Fields

The following fields are required to connect Gmail with appse ai.

| Field             | Description                                             |
| ----------------- | ------------------------------------------------------- |
| Connection Name   | A user-defined name to identify the credential within the platform.                                                                     |
| Client ID         | OAuth Client ID generated from Google Cloud Console     |
| Client Secret     | OAuth Client Secret generated from Google Cloud Console |
| API Access Scope  | Gmail API scopes required for email access              |
| Callback API URL      | Authorized Redirect URI                             |

:::info
All required fields must be configured correctly to successfully authorize Gmail with appse ai.
:::

---

## Step-by-Step Guide

# Gmail Credential Setup Guide

## Step 1: Open the Gmail Credential Form

1. Login to the **appse ai** portal  
2. Click on the **Credentials** option from the Sidebar menu  
3. Click **Add Credentials**  
4. Select **Gmail App** from the App list  
5. Gmail credential form will be displayed  
6. **Note** the `Callback API URL` — this will be used later while configuring the OAuth Client **(Authorized Redirect URI)**  

---

## Step 2: Create and Select Google Cloud Project

Follow these steps if a Google Cloud project has not been created:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)  
   - Accept the Terms and Conditions if prompted  
   <img src="/img/credentials/gmail/gm1.png" width="700"/>

2. Click on **Select a project** (top-left)  
   <img src="/img/credentials/gmail/gm2.png" width="700"/>

3. Click **New Project**  
   <img src="/img/credentials/gmail/gm3.png" width="700"/>

4. Enter:
   - **Project Name**
   - **Parent resource** (optional)  
   <img src="/img/credentials/gmail/gm4.png" width="700"/>

5. Click **Create**  
   <img src="/img/credentials/gmail/gm5.png" width="700"/>

6. After the project is created, click on **Select a project** again (top-left)  
   <img src="/img/credentials/gmail/gm44.png" width="700"/>

7. Select the newly created project from the list  
   <img src="/img/credentials/gmail/gm45.png" width="700"/>
---

<a id="navigate-to-apis-services"></a>

## Step 3: Navigate to APIs & Services section in Google Cloud Console

1. In the Google Cloud Console header, click on the **Hamburger menu** (top-left).
   <img src="\img\credentials\gmail\gm46.png" width="700"/>
2. From the **Menu** panel, click **APIs & Services**.
   <img src="\img\credentials\gmail\gm47.png" width="700"/>
3. You will now be on the **APIs & Services** dashboard.

---

## Step 4: Enable Required APIs

### Enable Gmail API

1. Go to **[APIs & Services](#navigate-to-apis-services)** → **Enable APIs and services** 
   <img src="/img/credentials/gmail/gm8.png" width="700"/>
2. Search for **Gmail API**  
3. Select **Gmail API**
   <img src="/img/credentials/gmail/gm9.png" width="700"/>
4. Click **Enable**  
   <img src="/img/credentials/gmail/gm10.png" width="700"/>

---

## Step 5: Configure OAuth Consent Screen

1. Go to **[APIs & Services](#navigate-to-apis-services) → OAuth consent screen**  
   <img src="/img/credentials/gmail/gm11.png" width="700"/>
2. Click **Get started**  
   <img src="/img/credentials/gmail/gm12.png" width="700"/>

---

### Step 5.1: App Information

Enter:

- **App name**
- **User support email**

- Click **Next**

<img src="/img/credentials/gmail/gm13.png" width="700"/>

---

### Step 5.2: Audience

Select **External** when:

- Your application is intended for **multiple users or customers**
- Users **outside your organization/domain** need access
- You are building a **public integration or SaaS product**
- You want to allow **any Google account** to authorize (with proper permissions)

Select **Internal** when:

- The application is used **only within your organization**
- All users belong to the **same Google Workspace domain**
- You do **not need external users** to access the integration

Click **Next**

<img src="/img/credentials/gmail/gm14.png" width="700"/>

> Selecting External allows any Google account to authorize the Gmail integration.

---

### Step 5.3: Contact Information

- Enter **Contact email**
- Click **Next**

<img src="/img/credentials/gmail/gm15.png" width="700"/>

---

### Step 5.4: Finish Setup

- Accept **Google API Services: User Data Policy**  
- Click **Continue**

<img src="/img/credentials/gmail/gm16.png" width="700"/>

- Click on **Create**
<img src="/img/credentials/gmail/gm17.png" width="700"/>

---

**Note**: When configuring the OAuth Consent Screen, the app operates in two modes:

- **Test Users (Testing Mode):**  
  Access is restricted to only the users added under Test Users. This is used during development and testing. No need to publish the app.

- **Publish App (Production Mode):**  
  Required when the app needs to be accessible to all users. Once published, any user can authorize the app (subject to Google verification if required).

> **Choose the appropriate tab below based on your preference**

---

<Tabs>
  <TabItem value="test-users" label="Test Users">

  ## Step 6: Add Test Users (Testing Mode)

  1. Go to **[APIs & Services](#navigate-to-apis-services) → OAuth consent screen**  
     <img src="/img/credentials/gmail/gm54.png" width="700"/>
  2. Open the **Audience** section  
     <img src="/img/credentials/gmail/gm18.png" width="700"/>
  3. Under **Test users**, click **Add users**  
     <img src="/img/credentials/gmail/gm19.png" width="700"/>
  4. Add one or more Gmail addresses  
  5. Click **Save**
      <img src="/img/credentials/gmail/gm20.png" width="700"/>
  6. Review the added test users
      <img src="/img/credentials/gmail/gm53.png" width="700"/>


  > **Note:**  
  > - Only added users can authorize the app  
  > - App publishing is not required in this mode  

  </TabItem>

  <TabItem value="publish-app" label="Publish App">

  ## Step 6: Publish App (Production Mode)

  1. Go to **[APIs & Services](#navigate-to-apis-services) → OAuth consent screen** 
     <img src="/img/credentials/gmail/gm54.png" width="700"/>
  2. Open the **Audience** section  
     <img src="/img/credentials/gmail/gm18.png" width="700"/> 
  3. Click on **Publish App**  
      <img src="/img/credentials/gmail/gm42.png" width="700"/>
  4. Confirm to move the app to **Production**
      <img src="/img/credentials/gmail/gm43.png" width="700"/>

  > **Note:**  
  > - Required for allowing access to all users  
  > - Unverified apps may show warning screens  

  </TabItem>
</Tabs>

---

## Step 7: Configure OAuth Scopes

1. Go to **[APIs & Services](#navigate-to-apis-services) → OAuth consent screen**  
2. Open **Data Access**  
   <img src="/img/credentials/gmail/gm21.png" width="700"/>
3. Click **Add or remove scopes**  
   <img src="/img/credentials/gmail/gm22.png" width="700"/>

### Search and Add the following scopes:

- https://mail.google.com/ 
   <img src="/img/credentials/gmail/gm23.png" width="700"/>

- https://www.googleapis.com/auth/gmail.modify 
   <img src="/img/credentials/gmail/gm24.png" width="700"/>

- https://www.googleapis.com/auth/gmail.readonly 
   <img src="/img/credentials/gmail/gm25.png" width="700"/>

- https://www.googleapis.com/auth/gmail.send
   <img src="/img/credentials/gmail/gm26.png" width="700"/>

> **Note:** These scopes are required for reading, sending, and modifying emails.

4. Click **Update**  
   <img src="/img/credentials/gmail/gm27.png" width="700"/>

5. Click **Save** after confirming that the selected scopes are correct.
   <img src="/img/credentials/gmail/gm28.png" width="700"/>

---

## Step 8: Create OAuth Client ID & Secret

1. Go to **[APIs & Services](#navigate-to-apis-services) → Credentials**  
   <img src="/img/credentials/gmail/gm29.png" width="700"/>
2. Click **Create Credentials → OAuth client ID**  
   <img src="/img/credentials/gmail/gm30.png" width="700"/>

### Application Type

- Select **Web application**  
- Add **Name**

<img src="/img/credentials/gmail/gm31.png" width="700"/>

### Authorized Redirect URI

- Add the **Callback API URL**  
- **Note** - As mentioned above in Step 1, the Callback API URL must exactly match the value used in the **Authorized Redirect URI** configuration of appse ai platform. Refer to the image below for the Callback URL.

<img src="/img/credentials/gmail/gm32.png" width="300" height="300"/>

3. Click **Create**
   <img src="/img/credentials/gmail/gm33.png" width="700"/>

---

## Step 9: Credential Generation

After creation, you will get:

- **Client ID**
- **Client Secret**

<img src="/img/credentials/gmail/gm34.png" width="300" height="300"/>

- Copy and store them securely.  
- You can also download the JSON file.  

<img src="/img/credentials/gmail/gm35.png" width="300" height="300"/>

---

## Step 10: Add Credential in appse ai

1. Go back to the Gmail credential form in appse ai platform.
2. Enter:
      - **Connection Name**  
      A user-defined name to identify the credential within the platform.

      - **Client ID**  
      Enter the generated Client ID as generated in Step 9 above. It is used to identify your application during the OAuth process.

      - **Client Secret**  
      Enter the generated Client Secret as generated in Step 9 above.

      - **API Access Scope**  
      Defines the level of access requested from Gmail.  
      **Keep this unchanged** to ensure proper functionality of Gmail operations.
3. Click **Save & Authorize**

<img src="/img/credentials/gmail/gm36.png" width="300" height="300"/>

---

After clicking **Save & Authorize**, a Google authorization popup will appear.

> Choose the tab below based on the mode you selected earlier.

---

<Tabs>
  <TabItem value="test-users" label="Test Users (Testing Mode)">

## Step 11: Authorize Gmail Access

1. Select your Gmail account  

   <img src="/img/credentials/gmail/gm37.png" width="300" height="300"/>

2. Click **Continue**  

   <img src="/img/credentials/gmail/gm38.png" width="300" height="300"/>

3. Click on all the checkbox of the Scopes
4. Click **Continue**  

   <img src="/img/credentials/gmail/gm57.png" width="300" height="300"/>

</TabItem>
<TabItem value="publish-app" label="Publish App (Production Mode)">

  ### Steps to Authorize

  ⚠️ You may see a warning screen: **"This app isn’t verified"**.  
   - This warning indicates that the app has not been reviewed by Google. This is expected in case of custom or private applications.

  #### To Proceed:

  3. Click **Advanced**

      <img src="/img/credentials/gmail/gm48.png" width="300" height="300"/>

  4. Click **Go to appse.ai (unsafe)**  

      <img src="/img/credentials/gmail/gm49.png" width="300" height="300"/>

  5. Click on all the checkboxes of the Scopes. 
  6. Click **Continue**

      <img src="/img/credentials/gmail/gm57.png" width="300" height="300"/>

  > ⚠️ **Notes:**
  > - This occurs if the app is not verified by Google  
  > - Expected behavior in early production setup  

  </TabItem>
</Tabs>

---

## Step 12: Verify Credential

- Ensure the credential shows **Successfully Validated**

<img src="/img/credentials/gmail/gm51.png" width="700"/>

---

## ✅ Notes

- OAuth scopes must be configured correctly.  
- Callback URL must match exactly.  

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
