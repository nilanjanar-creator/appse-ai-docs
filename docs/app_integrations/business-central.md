---
title: "Dynamics 365 Business Central"
slug: /app-integrations/dynamics-365-business-central
---

Dynamics 365 Business Central is an all-in-one business management solution designed to help organizations streamline their financials, operations, and customer relationships. With appse ai, you can easily connect your Dynamics 365 Business Central account, automate business processes, and integrate data seamlessly across your workflows, enhancing efficiency and accuracy in your operations.

---

## Setup Credential

Follow the steps below to quickly set up your credential.

### Required Fields

You’ll need to provide:

| Field           | Description                                                |
| --------------- | ---------------------------------------------------------- |
| Connection Name | A name to identify the connection                          |
| Tenant ID       | Your Azure Active Directory tenant ID                      |
| Company ID      | The ID of the Business Central company you're working with |

---

### Step-by-Step Guide

#### 1. Add Connection Name

- Enter a user-friendly name to identify this connection (e.g., `BC Finance`, `D365 Europe Instance`).
- This is only for reference within our platform.

---

#### 2. Locate Your Tenant ID

- Go to the [Azure Portal](https://portal.azure.com).
  <img src="/img/credentials/business-central/business-central-cred-azure-dashboard.png" alt="APPSeAI Business Central Azure Dashboard" width="700"/>

- Search for **Microsoft Entra ID** → **Overview**.
  <img src="/img/credentials/business-central/business-central-cred-tenant-id.png" alt="APPSeAI Business Central Tenant ID" width="700"/>

- Copy the **Tenant ID** from the overview page.

> **Example**: `e3f75f41-xxxx-4a70-9b5c-xxxxxxxxxxxx`

---

#### 3. Find Your Company ID

- Log in to your [Business Central](https://www.microsoft.com/en-in/dynamics-365/products/business-central/sign-in) account.

- Click on the **Search** icon → Search "Companies" → Click on Companies.
  <img src="/img/credentials/business-central/business-central-company-id-1.png" alt="APPSeAI Business Central Companies Search" width="700"/>

- Select Your Company Name from the list.
  <img src="/img/credentials/business-central/business-central-company-id-2.png" alt="APPSeAI Business Central Select Company name" width="700"/>

> **Example**: `CRONUS USA, Inc.`

- Press Ctrl+Alt+F1 → A Side Panel titled **Page Inspection** will open → Click on Table Fields → Under **Id (8000, GUID)** field, you will find the **Company ID** → Copy this and paste it in the credential form → Click on Save and Authorize.
  <img src="/img/credentials/business-central/business-central-company-id-3.png" alt="APPSeAI Business Central Find Company ID" width="700"/>

---

#### 4. Log in to your Business Central Account

- You will be showcased a pop-up that prompts you to login to your Business Central account using your Microsoft account credentials.

<img src="/img/credentials/business-central/business-central-cred-microsoft-login.png" alt="APPSeAI Business Central Microsoft Login" width="700"/>

- If you followed all the steps correctly, your Business Central credential should be connected to our platform.

---

### Save Your Credential

Once you've filled in the necessary fields, click **"Save"** to store and verify your setup.

- If successful, your credential will show a "✓" icon. Now you can use this application for your integrations.
- If it fails, you will be displayed a "!" icon. In that case, please recheck your API Key and Domain or contact support.

---

## Support

Need help? Contact our support team at hello@appse.ai
