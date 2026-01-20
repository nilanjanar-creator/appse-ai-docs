---
title: Apollo.io
description: Step-by-step guide to set up Apollo.io credentials for Appse.ai integration
slug: /app-integrations/apollo-io/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction

Apollo.io is a B2B sales intelligence and engagement platform that helps teams discover leads, enrich contacts, and automate outbound sales workflows. By integrating Apollo.io with Appse.ai, you can securely access people and organization data to power automated sales, enrichment, and CRM workflows.

---

## Key Features

- **Lead Discovery**: Find targeted B2B prospects using advanced search filters.
- **Data Enrichment**: Enrich contacts and companies with verified contact and firmographic data.
- **Sales Automation**: Automate outbound emails, follow-ups, and engagement sequences.
- **Intent Signals**: Identify accounts showing buying interest.
- **CRM Sync**: Sync leads and contacts with connected CRM systems.
- **Integrations**: Connect seamlessly with Appse.ai and other third-party tools.

---

## Setup Credential

Follow the steps below to configure Apollo.io credentials in Appse.ai.

### Required Fields

The following fields are required to configure Apollo credentials in Appse.ai.

| Field           | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| Connection Name | A name to help you identify this Apollo.io connection within Appse.ai       |
| API Key        | Your personal Apollo.io API key used to authenticate API requests           |

:::info
All required fields must be filled correctly to successfully authorize Apollo with Appse.ai.
:::

## Step-by-Step Guide

To get started with Apollo.io, click **Select a Credential** and choose **Apollo.io** from the application list.

<img src="/img/credentials/apollo-io/add_credential.png" alt="Create Apollo.io credential" width="700"/>

This opens the Apollo.io credential form.

<img src="/img/credentials/apollo-io/configure_credential.png" alt="Apollo.io credential form" width="700"/>

---

### Step 1: Add Connection Name

- Enter a meaningful **Connection Name**.
- This is for identification purposes only inside Appse.ai and does not affect your Apollo.io account.

<img src="/img/credentials/apollo-io/connection_key.png" alt="Apollo.io connection name field" width="600"/>

---

### Step 2: Log in to Apollo.io

- Open a new tab and log in to your **Apollo.io** account.

<img src="/img/credentials/apollo-io/login_page.png" alt="Apollo.io login page" width="700"/>

Sign in to your **Apollo.io** account.

Or create an account if you don’t already have one:

<img src="/img/credentials/apollo-io/signup_page.png" alt="Apollo.io login page" width="700"/>

:::note
You must have an active Apollo.io account in order to use Apollo.io for integration in the APPSe AI.
:::

After successful login, you will able to access your Apollo.io account.

<img src="/img/credentials/apollo-io/apollo_dashboard.png" alt="Apollo.io login page" width="700"/>

---

### Step 3: Navigate to API Settings

- Click on your **Profile icon** (top-right corner) on your Apollo.io account.
- Select **Admin Settings** from the dropdown menu.
- In the Settings menu, navigate to **Integrations** → **API**.

<img src="/img/credentials/apollo-io/admin_settings.png" alt="Apollo.io login page" width="700"/>

<img src="/img/credentials/apollo-io/apisection.png" alt="Apollo.io API settings" width="700"/>

- Click on API Key section.

<img src="/img/credentials/apollo-io/Api_key.png" alt="Apollo.io API key" width="700"/>

---

### Step 4: Generate and copy API Key

- Click on **Create New Key**.

<img src="/img/credentials/apollo-io/create_new_key.png" alt="Apollo.io API key" width="700"/>

- A form will open, where you need to add key name and other details.

<img src="/img/credentials/apollo-io/enter_key_name.png" alt="Enter Api key name" width="700"/>

- You can add the key as master key by enabling **Set as master key**, which automatically gives you access to all apollo api endpoint.

<img src="/img/credentials/apollo-io/set_as_master_key.png" alt="Save as master key" width="700"/>

- Or, you can add api endpoints as per you requirement by clicking the api dropdown section and clicking check boxes.

<img src="/img/credentials/apollo-io/apilist_dropdown.png" alt="Apollo.io API settings" width="700"/>

- After filling the details, click on the **Create API Key** button to create the api key.

<img src="/img/credentials/apollo-io/save_create_new_apikey.png" alt="Create new api key" width="700"/>

- Once the key is generated, copy the key to use it for your integration.

<img src="/img/credentials/apollo-io/copy_api_key.png" alt="Copy Api Key" width="700"/>

:::warning
Treat your API key like a password. Do not share it publicly or commit it to source control.
:::

---

### Step 5: Paste API Key in Appse.ai

- Return to the Appse.ai credential form.
- Paste the copied **API Key** into the **API Key** field.

<img src="/img/credentials/apollo-io/appseai_apikey.png" alt="Paste Apollo.io API key" width="700"/>

---

### Step 6: Save Credential

- Click **Save** to store and validate your credential.

<img src="/img/credentials/apollo-io/save_credential.png" alt="Save Apollo.io credential" width="600"/>

---

## Support

Need help? Contact our support team at **hello@appse.ai**