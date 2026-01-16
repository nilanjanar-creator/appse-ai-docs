---
title: Zoho Recruit
description: Step-by-step guide to set up Zoho Recruit credentials for Appse.ai integration
slug: /app-integrations/zohorecruit/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction

Zoho Recruit is an applicant tracking system used to manage candidates, job openings, interviews, and recruitment workflows. This guide explains how to configure Zoho Recruit authentication credentials in Appse.ai so the platform can securely connect to your Zoho Recruit account.

## Key Features

- **Candidate Management**: Track and manage candidates throughout the hiring lifecycle.
- **Job Opening Management**: Create, publish, and manage job openings.
- **Recruitment Automation**: Automate interview scheduling, notifications, and candidate status updates.
- **Reports and Analytics**: Gain insights into recruitment performance and hiring metrics.
- **Integrations**: Seamlessly integrate with other Zoho apps and third-party tools.

## Setup Credential

Follow the steps below to quickly set up your Zoho Recruit credential.

### Required Fields

The following fields are required to configure Zoho Recruit credentials in Appse.ai.

| Field | Description |
|------|------------|
| Authorization URL | Select your Zoho Recruit authorization url based on where your Zoho account region. |
| Token URL | Select your Zoho Recruit token url based on where your Zoho account region. |
| Client ID | Login to Zoho API Console based on your region and create a client to get Client ID. |
| Client Secret | Copy Client Secret from Zoho API Console along with Client ID. |
| API Access Scope | Set required Zoho Recruit scopes like ZohoRecruit.modules.ALL in your developer console APP. |
| Base API URL | Select your Zoho Recruit base api url based on where your Zoho account region. |

:::info
All required fields must be filled correctly to successfully authorize Zoho Recruit with Appse.ai.
:::

## Step-by-Step Guide

To get started with Zoho Recruit, you need to set credentials for it. Click on **Select a credential** to create a new credential.

<img src="/img/credentials/zohorecruit/new_credpage.png" alt="Create a new credential" width="700"/>

Which leads to a pop-up:

<img src="/img/credentials/zohorecruit/credential_form.png" alt="Enter credential details to add credential" width="700"/>

:::note
The credential form is where you will provide OAuth and regional configuration details.
:::

### Regional Configuration

You must select the correct regional URLs based on your **Zoho Recruit account region**.

:::warning
Selecting an incorrect region may cause authentication failures or API request errors.
:::

### Authorization URL

Select the **Authorization URL** based on your Zoho account region.

<img src="/img/credentials/zohorecruit/auth_url.png" alt="Zoho Recruit auth url" width="700"/>

<img src="/img/credentials/zohorecruit/authurl_dropdown.png" alt="Zoho Recruit auth url dropdown" width="700"/>

:::info
The Authorization URL determines where users are redirected for OAuth consent.
:::

### Token URL

Select the **Token URL** based on your Zoho account region.

<img src="/img/credentials/zohorecruit/token_url.png" alt="Zoho Recruit token url" width="700"/>

<img src="/img/credentials/zohorecruit/tokenurl_dropdown.png" alt="Zoho Recruit token url dropdown" width="700"/>

:::info
The Token URL is used by Appse.ai to exchange the authorization code for access and refresh tokens.
:::

### Base API URL

Select the **Base API URL** based on your Zoho account region.

<img src="/img/credentials/zohorecruit/base_url.png" alt="Zoho Recruit base url" width="700"/>

<img src="/img/credentials/zohorecruit/baseurl_dropdown.png" alt="Zoho Recruit base url dropdown" width="700"/>

:::note
The Base API URL ensures all API calls are routed to the correct Zoho data center.
:::

## How to Get Client ID and Client Secret

<Tabs>
  <TabItem value="zohorecruit_oauth2" label="OAuth 2.0">

### Step 1: Access Zoho Recruit

Sign in to your **Zoho Recruit** account.

<img src="/img/credentials/zohorecruit/login_page.png" alt="Sign in to Zoho Recruit" width="700"/>

Or create an account if you don’t already have one:

<img src="/img/credentials/zohorecruit/sign_up_page.png" alt="Sign Up to create a new zoho recruit account" width="700"/>

:::note
You must have an active Zoho Recruit account before creating OAuth credentials.
:::

---

### Step 2: Access Developer Console

You need to create a new client application to obtain OAuth credentials for Zoho Recruit.

Click on the [Zoho Developer Console](https://api-console.zoho.com/).

:::info
The Zoho Developer Console is used to register OAuth clients and manage credentials.
:::

Alternatively, you can:

- Go to [Zoho Recruit Api Documentation](https://www.zoho.com/recruit/developer-guide/apiv2/)
- Locate OAuth Authentication
- Navigate to Step 1: Registering a Client
- Click the Zoho Developer Console link

<img src="/img/credentials/zohorecruit/zohorecruit_apidoc.png" alt="Zoho Recruit api documentation" width="700"/>

---

### Step 3: Sign in to Zoho Developer Console

Sign in with the same account details you used to create a Zoho Recruit account:

<img src="/img/credentials/zohorecruit/sign_in_page.png" alt="Zoho Recruit api console sign in page" width="700"/>

---

### Step 4: Get Started

Click on **Get started**:

<img src="/img/credentials/zohorecruit/get_started.png" alt="Get Started" width="700"/>

---

### Step 5: Choose Client Type

Select **Server-based applications**:

<img src="/img/credentials/zohorecruit/client_based_app.png" alt="Choose the client type" width="700"/>

:::tip
Server-based applications are recommended for backend integrations like Appse.ai.
:::

---

### Step 6: Configure Application

1. Enter **App Name** and **Homepage URL**
2. Copy the **Callback API URL** from Appse.ai's Zoho Recruit credential form
3. Paste it into **Authorized Redirect URIs**
4. Click **Create**

<img src="/img/credentials/zohorecruit/createnewclient.png" alt="Create new client" width="700"/>

:::warning
The Callback API URL must exactly match the value provided by Appse.ai, otherwise authorization will fail.
:::

---

### Step 7: Configure Multi-Data Center Settings

Go to **Settings** and enable **Use the same OAuth credentials for all data centers**:

<img src="/img/credentials/zohorecruit/data_center_settings.png" alt="data_center_settings" width="700"/>

Click **OK** to confirm:

<img src="/img/credentials/zohorecruit/save_data_center_settings.png" alt="save_data_center_settings" width="700"/>

:::info
This setting allows the same OAuth credentials to work across Zoho data centers.
:::

---

### Step 8: Copy Credentials

Copy the generated **Client ID** and **Client Secret**:

<img src="/img/credentials/zohorecruit/client_credential.png" alt="client_credentials" width="700"/>

:::warning
Keep your Client Secret secure and do not share it publicly.
:::

---

### Step 9: Paste Credentials

Paste the **Client ID** and **Client Secret** into Appse.ai’s Zoho Recruit credential form:

<img src="/img/credentials/zohorecruit/paste_clientid_clientsecret.png" alt="Paste client id and client secret" width="700"/>

---

### Final Authorization

### Step 10: Save and Authorize

Click **Save and Authorize** to continue.

<img src="/img/credentials/zohorecruit/save_authorise.png" alt="Save and authorize" width="700"/>

---

### Step 11: Grant Permissions

Select the checkbox to grant access and click **Accept**.

<img src="/img/credentials/zohorecruit/grant_permissions.png" alt="Grant Permissions" width="700"/>

:::info
Granting permissions allows Appse.ai to access Zoho Recruit data based on the configured scope.
:::

If the details are valid, Appse.ai will complete the OAuth authorization flow and save the credential successfully.  

If validation fails, an error message will be displayed so you can correct the configuration and try again.

  </TabItem>
</Tabs>

## Support

Need help? Contact our support team at hello@appse.ai
