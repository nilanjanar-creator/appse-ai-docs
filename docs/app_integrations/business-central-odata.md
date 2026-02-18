---
title: "Dynamics 365 Business Central oData Rest"
slug: /app-integrations/dynamics365businesscentralodata
---

Dynamics 365 Business Central is an all-in-one business management solution designed to help organizations streamline their financials, operations, and customer relationships. With appse ai, you can easily connect your Dynamics 365 Business Central account, automate business processes, and integrate data seamlessly across your workflows, enhancing efficiency and accuracy in your operations.

---

## Setup Credential

Follow the steps below to quickly set up your credential.

### Required Fields

You’ll need to provide:

| Field           | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| Connection Name | A name to identify the connection                            |
| Tenant ID       | Your Azure Active Directory tenant ID                        |
| Company Name    | The Name of the Business Central company you're working with |

---

### Step-by-Step Guide

#### 1. Add Connection Name

- Enter a user-friendly name to identify this connection (e.g., `BC Finance`, `D365 Europe Instance`).
- This is only for reference within our platform.

---

#### 2. Locate Your Tenant ID

- Go to the [Azure Portal](https://portal.azure.com).
  <img src="/img/credentials/business-central-odata/business-central-cred-azure-dashboard.png" alt="APPSeAI Business Central Azure Dashboard" width="700"/>

- Search for **Microsoft Entra ID** → **Overview**.
  <img src="/img/credentials/business-central-odata/business-central-cred-tenant-id.png" alt="APPSeAI Business Central Tenant ID" width="700"/>

- Copy the **Tenant ID** from the overview page.

> **Example**: `e3f75f41-xxxx-4a70-9b5c-xxxxxxxxxxxx`

---

#### 3. Find Your Company Name

- Log in to your [Business Central](https://www.microsoft.com/en-in/dynamics-365/products/business-central/sign-in) account.

- Click on the **Search** icon → Search "Companies" → Click on Companies.
  <img src="/img/credentials/business-central-odata/business-central-company-id-1.png" alt="APPSeAI Business Central Companies Search" width="700"/>

- Select Your Company Name from the list.
  <img src="/img/credentials/business-central-odata/business-central-company-id-2.png" alt="APPSeAI Business Central Select Company name" width="700"/>

> **Example**: `CRONUS IN`

- Copy **Company Name** and paste it in the credential form → Click on Save and Authorize.

<img src="/img/credentials/business-central-odata/save-cred.png" alt="APPSeAI Business Central Microsoft Login" width="700"/>

---

#### 4. Log in to your Business Central Account

- You will be showcased a pop-up that prompts you to login to your Business Central account using your Microsoft account credentials.

<img src="/img/credentials/business-central-odata/business-central-cred-microsoft-login.png" alt="APPSeAI Business Central Microsoft Login" width="700"/>

- If you followed all the steps correctly, your Business Central credential should be connected to our platform.

---

### Save Your Credential

Once you've filled in the necessary fields, click **"Save"** to store and verify your setup.

- If successful, your credential will show a "✓" icon. Now you can use this application for your integrations.
- If it fails, you will be displayed a "!" icon. In that case, please recheck your API Key and Domain or contact support.

---

## Web Services Configuration

To use Dynamics 365 Business Central oData supporetd Rest APIs with appse ai, you must publish the required objects as web services inside Business Central. This allows external systems to securely access your Business Central data through OData endpoints.

Follow the steps below to configure web services:

---

### Step-by-Step: Add Web Services in Business Central

#### 1. Open Web Services Page

- Log in to your Business Central account.
- Click the **Search 🔍 icon**.
- Type **Web Services** and open it.

---

#### 2. Create a New Web Service

- Click **New**.
- Fill in the required fields:

| Field        | Value                   |
| ------------ | ----------------------- |
| Object Type  | Page / Query / Codeunit |
| Object ID    | ID of the object        |
| Service Name | Unique API name         |
| Published    | ✔ Enable                |

---

#### 3. Choose the Correct Object Type

Select based on your use case:

| Object Type | Use Case                             |
| ----------- | ------------------------------------ |
| Page        | Create, Read, Update, Delete records |
| Query       | Read-only data access                |
| Codeunit    | Custom logic or automation           |

:::info
For integrations with **appse ai**, you should publish **Page** objects. Page web services support full CRUD operations, filtering, sorting, and pagination, making them the most flexible and widely supported option for external integrations such as APIs, middleware, and automation platforms.
:::

---

#### 4. Publish the Service

- Check the **Published** checkbox.
- Once enabled, Business Central will automatically generate:

- **OData V4 URL**
- **SOAP URL**

You will use the **OData V4 URL** for integrations.

- Example format: https://api.businesscentral.dynamics.com/v2.0/{tenant}/Production/ODataV4/Company('CRONUSIN')/{ServiceName}

---

### Web Services to Publish

For using appse ai actions, make sure to publish these pages:

| Object Name                 | Service Name             |
| --------------------------- | ------------------------ |
| Customers                   | Customers                |
| Contacts                    | contacts                 |
| Item Card                   | Item                     |
| Sales Order                 | SalesOrder               |
| Posted Sales Shipments      | Shipments                |
| Item Ledger Entries         | Item Ledger Entries      |
| Posted Sales Shipment Lines | postedsalesshipmentlines |
| Posted Sales Shipment       | PostedSalesShipment      |
| Sales Prices                | salesprices              |
| Ship-to Address             | shiptoaddress            |
| Lines                       | SalesLines               |
| Sales Quote                 | SalesQuote               |
| Item Journals               | ItemJournal              |

---

### Best Practice Recommendations

- Use **OData V4** instead of SOAP whenever possible.
- Always use **API pages** if available for production integrations.
- Use descriptive **Service Names** to easily identify endpoints.
- Restrict permissions for integration users for better security.
- Test endpoints using Postman before connecting to appse ai.

---

✔ Once your web services are published and accessible, your Business Central environment is ready for integration with appse ai.

---

## Actions

Here is a list of the available actions for Business Central oData Rest:

> **Ship To Address Actions**

- **Get customer ship to address** - Create a new item journal entry record.
- **Create customer ship to address** - Create a new shipping address record for a customer.

> **Item Ledger Entry Actions**

- **Get Item Ledger Entry by Location Code** - Search for records based on specified filters or criteria.

> **Item Journal Actions**

- **Create Item Journal Entry** - Create a new item journal entry record.

> **Generic Actions**

- **Search Records** - Search for records based on specified filters or criteria.

## Support

Need help? Contact our support team at hello@appse.ai
