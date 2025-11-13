---
title: "SAP Business One"
slug : /app-integrations/sap-b1
---

SAP Business One (SAP B1) is an integrated enterprise resource planning (ERP) solution designed for small and medium-sized businesses. With appse ai, you can seamlessly connect SAP B1 to your workflows, automating processes like inventory management, financial reporting, and customer relationship management to improve business performance and agility.

---

## Setup Credential

Follow the steps below to quickly set up your credential.

### Required Fields

You’ll be asked to fill in the following details:

| Field       | Description                                  |
|-------------|----------------------------------------------|
| Host URL    | The server URL where your SAP B1 is hosted   |
| Port        | The port number for the SAP B1 service layer |
| Username    | Your SAP B1 username                         |
| Password    | Your SAP B1 password                         |
| Company DB  | The company database name used in SAP B1     |

### Step-by-Step Guide

#### 1. Add Connection Name

Provide a name for your credential in the `Connection Name` field. This will be showcased in the credential listing page.

#### 2. Find Your Host URL and Port

- Open the SAP Business One **Service Layer** configuration or ask your SAP B1 administrator.
   - It will look something like: `https://{localip}:50000/ControlCenter/`
   - You should see page titled - `System Landscape Directory`

- Login to the platform using your **System Landscape Directory Credentials**.
<img src="/img/credentials/sap-b1/sap-b1-cred-sld-login.png" alt="APPSeAI SAP Business One Credentials System Landscape Directory Login" />

- Locate the base URL used to access the Service Layer API. Go to _Services_ → _Service Layer_
<img src="/img/credentials/sap-b1/sap-b1-cred-host-url.png" alt="APPSeAI SAP Business One Credentials Url and Port" />

- Add your Host URL and Port. With respect to the image you will be adding:
> - **Host URL**: `https://10.0.2.68`
> - **Port**: `50000`

#### 3. Find Your Company DB Name

- In the same **System Landscape Directory**
- Go to _DB Instances and Companies_ → Click on Your Server Name
<img src="/img/credentials/sap-b1/sap-b1-cred-db-name.png" alt="APPSeAI SAP Business One Credentials DB Instances and Companies" />

- Copy the **Schema Name**, this is your `Database Name`

<img src="/img/credentials/sap-b1/sap-b1-cred-db-name2.png" alt="APPSeAI SAP Business One Credentials Database Name" />

> **Note**: Depending on your setup, you might see `https://insync.pro` instead of `https://10.0.2.68`. Either can be used as your Host URL input.

#### 4. Get Your Username and Password
<img src="/img/credentials/sap-b1/sap-b1-credentials.png" alt="APPSeAI SAP Business One Credentials" width="602" height="306" />

- Use your **SAP B1 client login credentials**.
- Make sure the user has sufficient API permissions for integration.

### Save Your Credential

Once you've filled in the necessary fields, click **"Save"** to store and verify your setup.

- If successful, your Pipedrive credential will show a "✓" icon. Now you can use this application for your integrations.
- If it fails, you will be displayed a "!" icon. In that case, please recheck your API Key and Domain or contact support.

---

## Triggers and Actions

Every application has a pre-defined set of triggers and actions that allow users to perform application specific activities within the platform. Here is a list of all the actions and triggers available:

### Triggers

- on New Items Created

### Actions

> Quotations Actions

- Get list of Quotations with filtering and sorting options

> Invoices Actions

- Create AR Invoice
- Create AR Reserve Invoice

> Drafts Actions

- Create Drafts
- Update an existing Draft
- Get list of Drafts with filtering and sorting options
- Delete Draft

> Orders Actions

- Get list of Orders with filtering and sorting options
- Update an existing Sales Order
- Create a Sales Order

> Down Payments Actions

- Update an existing Down Payment
- Create a new Down Payment Invoice
- Get list of Down Payments with filtering and sorting options

> Invoice Actions

- Create an Invoice
- Update an existing Invoice

> Business Partners Actions

- Get list of BusinessPartners with filtering and sorting options
- Create a new BusinessPartner
- Update an existing BusinessPartner

> Items Actions

- Delete Item
- Update Item
- Create a new Item
- Get list of Items

> Credit Notes Actions

- Create AR Credit Memo

---

## Need Help?

If you’re unsure about any field or face connection issues, reach out to our support team at hello@appse.ai

