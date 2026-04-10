---
title: "Freshsales"
slug: /app-integrations/freshsales/
---

Freshsales is an AI-powered CRM platform by Freshworks that helps businesses manage contacts, accounts, deals, tasks, and products in one place. Integrating Freshsales into appse ai enables you to automate your sales workflows — from triggering actions when new contacts, accounts, or deals are created, to managing tasks and products directly from your workflows and agents.

---

## Set Up Credential

:::info

Before you create a credential for Freshsales using appse ai, make sure you have access to your Freshsales account and that your API key has been generated from your Profile Settings.

:::

### Required Fields

You'll be asked to fill in the following details:

| Field             | Description                                                        |
|------------------|--------------------------------------------------------------------|
| Connection Name   | A name to help you identify this connection                        |
| Domain            | Your Freshsales subdomain (e.g. `yourcompany`)                     |
| API Key           | Your personal API key from Freshsales                              |

---

### Step-by-Step Guide

#### 1. Open the Credential Form

Click **Select a Credential** and choose **Freshsales** from the application list.

<img src="\img\credentials\freshsales\freshsales-create-new-connection.png" alt="APPSeAI Freshsales Select Credential" width="700"/>

<br/>

This opens the Freshsales credential form. Add your **Connection Name**.

<img src="\img\credentials\freshsales\freshsales-connection-name.png" alt="APPSeAI Freshsales Connection Name" width="700"/>

#### 2. Sign In / Create an account in Freshsales

Go to [Freshsales](https://www.freshworks.com/freshsales-crm/) and sign in or sign up. New accounts can start managing contacts, deals, and pipelines right away.

#### 3. Retrieve your API Key and domain

Once logged in, follow these steps to find your API key:

1. Click on your **profile avatar** in the top-right corner of the Freshsales dashboard.
2. Select **Personal Settings** from the dropdown.
<img src="\img\credentials\freshsales\dashboard.png" alt="APPSeAI Freshsales dashboard" width="700"/>

3. Scroll down to the **API Settings** section. 
<img src="\img\credentials\freshsales\api-setting.png" alt="APPSeAI Freshsales api-setting" width="700"/>

And authenticate the captcha.

4. Your **API Key** will be displayed. Click **Copy** to copy it.

:::info

API keys in Freshsales are created at the user level. Your key can only access data within your Freshsales account based on your user permissions.

:::

5. Find your Domain

Your Freshsales domain is the subdomain in your Freshsales URL. For example, if your Freshsales URL is `https://yourcompany.myfreshworks.com`, your domain is `yourcompany`.

<img src="\img\credentials\freshsales\api-key.png" alt="APPSeAI Freshsales API Key" width="700"/>

#### 5. Paste Credentials in appse ai

Return to the appse ai credential form. Paste the copied API key into the **API Key** field, enter your **Domain**, and click **"Save"** to store and validate your credential.

<img src="\img\credentials\freshsales\credential-form.png" alt="APPSeAI Freshsales Credential Form" width="700"/>

<br/>

:::warning

Make sure you save your **API key** somewhere safe. Treat it like a password — do not share it publicly or commit it to version control.

:::

---

## Triggers and Actions

Here is a list of the available triggers and actions for Freshsales:

### Triggers

- **New Contact** — Triggers a workflow whenever a new contact is created in Freshsales. Returns a list of contacts filtered by creation date and time.

- **New Account** — Triggers a workflow whenever a new account is created in Freshsales. Returns a list of accounts filtered by creation date and time.

- **New Deal** — Triggers a workflow whenever a new deal is created in Freshsales. Returns a list of deals filtered by creation date and time.

- **New Product** — Triggers a workflow whenever a new product is created in Freshsales CPQ module. Polls periodically and returns products sorted by creation date.

### Actions

#### Contacts

- **Create Contact** — Create a new contact in Freshsales CRM. Supports adding name, email, phone, location, and other contact details.

- **Update Contact** — Update the details of an existing contact in Freshsales CRM using the contact's unique ID.

- **Get Contact** — Retrieve the details of a specific contact using their unique ID.

- **Get Contacts** — Retrieve a list of contacts from a specific view in Freshsales CRM.

- **Get Contact by View** — Fetch contacts from a specific saved view in Freshsales CRM.

#### Accounts

- **Create Account** — Create a new account (company) in Freshsales CRM.

- **Update Account** — Update the details of an existing account using the account's unique ID.

- **Get Account** — Retrieve the details of a specific account using its unique ID.

- **Get Accounts** — Retrieve a list of accounts from Freshsales CRM.

- **Get Account by View** — Fetch accounts from a specific saved view in Freshsales CRM.

#### Deals

- **Create Deal** — Create a new deal in Freshsales CRM. Supports associating the deal with contacts, accounts, and pipelines.

- **Update Deal** — Update the details of an existing deal using the deal's unique ID.

- **Get Deals** — Retrieve a list of deals from Freshsales CRM.

- **Get Deals by View** — Fetch deals from a specific saved view in Freshsales CRM.

- **Get Deal Stages** — Retrieve all available deal stages in your Freshsales pipeline.

- **Get Deal Types** — Retrieve all available deal types configured in your Freshsales account.

#### Tasks

- **Create Task** — Create a new task in Freshsales CRM. Supports linking the task to a contact, account, or deal.

- **Update Task** — Update the details of an existing task using the task's unique ID.

- **Get All Tasks** — Fetch a list of all tasks from Freshsales CRM.

- **Get Tasks** — Fetch a list of tasks filtered by status (Open or Completed).

- **Mark Task as Done** — Mark an existing task as completed using the task's unique ID.

#### Products

- **Create Product** — Create a new product in Freshsales CPQ module. Supports adding name, description, SKU, and other product details.

- **Update Product** — Update the details of an existing product using the product's unique ID.

- **Add Price to Product** — Add pricing information to an existing product. Supports one-time and subscription pricing types with multiple currencies.

- **Update Price of Product** — Update existing pricing of a product using the pricing entry's unique ID.

- **Add Product to a Deal** — Associate one or more products with an existing deal in Freshsales CRM.

#### Utilities

- **Get Owners** — Retrieve a list of all users (owners) in your Freshsales account. Useful for assigning records to specific team members.

- **Get Currencies** — Retrieve all available currencies configured in your Freshsales account. Useful for setting prices in the correct currency.

- **Get Views** — Retrieve all saved views available in your Freshsales account.

---

## Support

Need help? Contact our support team at [hello@appse.ai](mailto:hello@appse.ai)