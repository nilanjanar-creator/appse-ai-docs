---
title: "Pipedrive"
slug: /app-integrations/pipedrive/
---

Pipedrive is a sales CRM tool designed to help teams manage and close deals efficiently. With appse ai, you can connect your Pipedrive account, automate sales processes, and synchronize data between apps to optimize lead management, improve sales pipeline visibility, and enhance team productivity across your workflows.
By following this step-by-step guide, you’ll have your Pipedrive integration ready to go in no time.

---

## Setup Credential

Follow the steps below to quickly set up your credential.

### Required Fields

You’ll be asked to fill in the following details:

| Field            | Description                                              |
| ---------------- | -------------------------------------------------------- |
| Connection Name  | A name to help you identify this connection              |
| API Token        | Your personal API token from Pipedrive                   |
| Pipedrive Domain | Your unique Pipedrive domain (e.g. `acme`.pipedrive.com) |

### Step-by-Step Guide

#### 1. Add Connection Name

- Think of a meaningful name to identify this connection.
- This name is used purely for display purposes within our platform and does not affect your Pipedrive account.

#### 2. Find Your API Token

- Log in to your **Pipedrive** account.
- Click your profile icon (top right) → **Personal preferences** → **API**.
  <img src="/img/credentials/pipedrive/pipedrive-cred-app-preferences.png" alt="Pipedrive profile menu showing Personal Preferences option" width="700"/>

- Copy the **API token** provided under the "API" section.

:::note

**Example**
API Token: `d5a1234e5678abcde9012345fghij6789klm0n`

:::
<br/>

<img src="/img/credentials/pipedrive/pipedrive-cred-api-key.png" alt="Pipedrive Personal Preferences API section displaying the API token" width="700"/>
<br/><br/>
:::tip
Treat your API key like a password. Do not share it publicly.
:::

#### 3. Find Your Pipedrive Domain

- From the same dashboard. Click your profile icon (top right) → **Company Settings**.
  <img src="/img/credentials/pipedrive/pipedrive-cred-company-settings.png" alt="Pipedrive profile menu showing Company Settings option" width="700"/>

- You will be able to see a field with your **Company Domain** in it.
  <img src="/img/credentials/pipedrive/pipedrive-cred-company-domain.png" alt="Pipedrive Company Settings page showing the Company Domain field" width="700"/>

> **Example**:
>
> - Domain: `nefariusinc`

### Save Your Credential

Once you've filled in the necessary fields, click **"Save"** to store and verify your setup.

<img src="/img/credentials/pipedrive/pipedrive-save-credential.png" alt="appse ai Pipedrive credential form with Save button" width="700"/>

- If successful, your Pipedrive credential will show a "✓" icon. Now you can use this application for your integrations.
- If it fails, you will be displayed a "!" icon. In that case, please recheck your API Key and Domain or contact support.

---

## Triggers

Here is the list of available triggers in Pipedrive:

| Trigger                       | Description                                                                                                                                    |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **New Deal Created**          | Retrieves events when a new deal is added to your Pipedrive pipeline, allowing you to instantly kick off follow-up workflows.                  |
| **New Organizations Created** | Retrieves events when a new organization (company) is created in Pipedrive, enabling automatic onboarding or enrichment flows.                 |
| **Organizations Updated**     | Retrieves events when an existing organization's details are modified, keeping downstream systems in sync with the latest company data.        |
| **New Person Created**        | Retrieves events when a new contact (person) is added to Pipedrive, so you can trigger welcome emails or CRM sync actions immediately.         |
| **Person Updated**            | Retrieves events when a contact's information is changed in Pipedrive, ensuring connected apps always have up-to-date contact records.         |
| **New Lead Created**          | Retrieves events when a new lead is added in Pipedrive, allowing you to route or nurture leads automatically as soon as they enter the system. |

## Actions

Here is the list of available actions in Pipedrive:

| Action                                  | Description                                                                                                                       |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Create an Organization**              | Create a new organization (company) record in Pipedrive with details such as name, address, and custom fields.                    |
| **Update an Organization**              | Update the details of an existing organization in Pipedrive, such as name, address, owner, or custom field values.                |
| **Create a Person**                     | Create a new contact (person) record in Pipedrive, including details such as name, email, phone, and linked organization.         |
| **Get Person by Organization ID**       | Retrieve all persons (contacts) associated with a specific organization, identified by its unique organization ID.                |
| **Get Deals Products**                  | Retrieve the list of products attached to one or more deals in Pipedrive, useful for order or revenue reporting workflows.        |
| **Search Records by ID**                | Look up a specific record in Pipedrive — such as a deal, person, or organization — using its unique record ID.                    |
| **Create a New Product**                | Create a new product entry in your Pipedrive product catalog with details such as name, price, and description.                   |
| **Update Product**                      | Update the details of an existing product in Pipedrive's catalog, such as name, price, currency, or tax percentage.               |
| **Search Products**                     | Search your Pipedrive product catalog using keywords or filters and return matching product records.                              |
| **Create a New Deal**                   | Create a new deal in Pipedrive's pipeline with attributes such as title, value, currency, stage, and owner.                       |
| **Update a Deal**                       | Update the properties of an existing deal, such as its stage, value, close date, owner, or custom field values.                   |
| **Create a New Lead**                   | Create a new lead in Pipedrive with details such as title, owner, associated person or organization, and expected close date.     |
| **Get Notes by Deal ID**                | Retrieve all notes attached to a specific deal, identified by its deal ID, for logging or reporting purposes.                     |
| **Get Products Attached to a Deal**     | Retrieve the list of products linked to a specific deal, including quantity, price, and discount information.                     |
| **Get Participants Attached to a Deal** | Retrieve all persons marked as participants in a specific deal, enabling contact-level visibility into deal involvement.          |
| **Get Files Attached to a Deal**        | Retrieve all files and attachments associated with a specific deal, allowing documents to be accessed or forwarded in a workflow. |

---

## Support

Need help? Contact our support team at [hello@appse.ai](mailto:hello@appse.ai)
