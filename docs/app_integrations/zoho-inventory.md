---
title: Zoho Inventory
description: Step-by-step guide to set up Zoho Inventory credentials for appse ai integration
slug: /app-integrations/zoho-inventory/
---

Zoho Inventory is an inventory and order management platform that helps businesses manage items, warehouses, sales orders, purchase orders, shipments, and stock adjustments. This guide explains how to configure Zoho Inventory OAuth credentials in appse ai so your workflows can securely connect to your Zoho account.

---

## Key Features

- **Item Management**: Create and manage products, SKUs, bundles, and pricing.
- **Order Management**: Manage sales orders, purchase orders, and invoices.
- **Warehouse & Stock Control**: Track stock levels across one or more warehouses.
- **Shipping Operations**: Handle packages, shipments, and delivery updates.
- **Automation & Integrations**: Connect inventory data with CRM, ERP, and custom workflows.

## Setup Credential

Follow the steps below to configure Zoho Inventory credentials in appse ai.

### Required Fields

The following fields are required in the Zoho Inventory credential form.

| Field | Description |
| --- | --- |
| Authorization URL | Select the OAuth authorize URL based on your Zoho account region. |
| Token URL | Select the OAuth token URL based on your Zoho account region. |
| Client ID | Generated in Zoho API Console after creating an OAuth client. |
| Client Secret | Generated together with Client ID in Zoho API Console. |
| API Access Scope | Enter `ZohoInventory.fullaccess.all` to allow full access to inventory data. |
| Base API URL | Select the Zoho Inventory API base URL based on your account region. |

:::info
All required fields must be configured correctly to complete authorization.
:::

### Recommended Region Mapping

Select regional endpoints that match your Zoho account data center.

| Region | Authorization URL | Token URL | Base API URL |
| --- | --- | --- | --- |
| US | [https://accounts.zoho.com/oauth/v2/auth](https://accounts.zoho.com/oauth/v2/auth) | [https://accounts.zoho.com/oauth/v2/token](https://accounts.zoho.com/oauth/v2/token) | [https://www.zohoapis.com/inventory/v1](https://www.zohoapis.com/inventory/v1) |
| EU | [https://accounts.zoho.eu/oauth/v2/auth](https://accounts.zoho.eu/oauth/v2/auth) | [https://accounts.zoho.eu/oauth/v2/token](https://accounts.zoho.eu/oauth/v2/token) | [https://www.zohoapis.eu/inventory/v1](https://www.zohoapis.eu/inventory/v1) |
| IN | [https://accounts.zoho.in/oauth/v2/auth](https://accounts.zoho.in/oauth/v2/auth) | [https://accounts.zoho.in/oauth/v2/token](https://accounts.zoho.in/oauth/v2/token) | [https://www.zohoapis.in/inventory/v1](https://www.zohoapis.in/inventory/v1) |
| AU | [https://accounts.zoho.com.au/oauth/v2/auth](https://accounts.zoho.com.au/oauth/v2/auth) | [https://accounts.zoho.com.au/oauth/v2/token](https://accounts.zoho.com.au/oauth/v2/token) | [https://www.zohoapis.com.au/inventory/v1](https://www.zohoapis.com.au/inventory/v1) |
| JP | [https://accounts.zoho.jp/oauth/v2/auth](https://accounts.zoho.jp/oauth/v2/auth) | [https://accounts.zoho.jp/oauth/v2/token](https://accounts.zoho.jp/oauth/v2/token) | [https://www.zohoapis.jp/inventory/v1](https://www.zohoapis.jp/inventory/v1) |
| CA | [https://accounts.zohocloud.ca/oauth/v2/auth](https://accounts.zohocloud.ca/oauth/v2/auth) | [https://accounts.zohocloud.ca/oauth/v2/token](https://accounts.zohocloud.ca/oauth/v2/token) | [https://www.zohoapis.ca/inventory/v1](https://www.zohoapis.ca/inventory/v1) |
| SA | [https://accounts.zoho.sa/oauth/v2/auth](https://accounts.zoho.sa/oauth/v2/auth) | [https://accounts.zoho.sa/oauth/v2/token](https://accounts.zoho.sa/oauth/v2/token) | [https://www.zohoapis.sa/inventory/v1](https://www.zohoapis.sa/inventory/v1) |

:::warning
If region URLs do not match your Zoho account data center, token exchange and API calls will fail.
:::

---

## Step-by-Step Guide

### Step 1: Open appse ai Credential Form

1. Go to the appse ai credentials page.
2. Click **Add credentials**.
3. Search and select **Zoho Inventory**.

You can also create the same credential directly while building a workflow by choosing **Create a new credential**.

<img src="/img/credentials/zoho-inventory/appse-ai-cred-page.png" alt="Open appse ai credentials page" width="700"/>

<img src="/img/credentials/zoho-inventory/appse-ai-cred-add.png" alt="Add new Zoho Inventory credential" width="700"/>

<img src="/img/credentials/zoho-inventory/appse-ai-cred-add-form.png" alt="Zoho Inventory credential form" width="700"/>

### Step 2: Configure Regional URLs

In the credential form, select values for:

1. **Authorization URL**
2. **Token URL**
3. **Base API URL**

Use the same region for all three fields.

<img src="/img/credentials/zoho-inventory/appse-ai-cred-form-regional-urls.png" alt="Configure Zoho Inventory regional URLs" width="700"/>

:::note
Refer to the [Recommended Region Mapping](#recommended-region-mapping) table in the Setup Credential section above to find the correct URLs for your Zoho data centre.
:::

### Step 3: Open Zoho API Console

1. Visit Zoho API Console: [https://api-console.zoho.com/](https://api-console.zoho.com/)
2. Sign in with the same Zoho account you use for Zoho Inventory.
3. Click **Get started** if prompted.

<img src="/img/credentials/zoho-inventory/zoho-api-get-started.png" alt="Open Zoho API Console Get Started" width="700"/>

<img src="/img/credentials/zoho-inventory/zoho-api-console.png" alt="Open Zoho API Console" width="700"/>

### Step 4: Create OAuth Client

1. Select **Server-based Applications**.
2. Enter:
    - **Client Name**
    - **Homepage URL**
    - **Authorized Redirect URIs**
3. Copy the **Callback API URL** from appse ai Zoho Inventory credential form.
4. Paste the callback URL exactly into **Authorized Redirect URIs**.
5. Click **Create**.

<img src="/img/credentials/zoho-inventory/zoho-api-select-app.png" alt="Create server-based OAuth client" width="700"/>

<img src="/img/credentials/zoho-inventory/appse-ai-cred-form-callback-url.png" alt="Configure authorized redirect URI" width="700"/>

:::warning
The callback URL must match exactly. Any mismatch will cause authorization failure.
:::

### Step 5: Enable Multi Data Center Option

In Zoho API Console settings, enable **Use the same OAuth credentials for all data centers**.

This helps prevent region-specific login issues for OAuth flows.

<img src="/img/credentials/zoho-inventory/zoho-api-select-data-center.png" alt="Enable multi data center setting" width="700"/>

### Step 6: Copy Client Credentials

After client creation, copy:

1. **Client ID**
2. **Client Secret**

<img src="/img/credentials/zoho-inventory/zoho-api-client-creds.png" alt="Copy Client ID and Client Secret" width="700"/>

### Step 7: Paste Credentials in appse ai

Return to appse ai and paste:

1. **Client ID**
2. **Client Secret**
3. Confirm **API Access Scope** is set to `ZohoInventory.fullaccess.all`.

<img src="/img/credentials/zoho-inventory/appse-ai-cred-form-paste-cred.png" alt="Paste credentials into appse ai form" width="700"/>

### Step 8: Save and Authorize

1. Click **Save and Authorize**.
2. Sign in to Zoho if prompted.
3. Review requested permissions.
4. Click **Accept**.

<img src="/img/credentials/zoho-inventory/appse-ai-cred-save-authorize.png" alt="Save and authorize Zoho Inventory credential" width="700"/>

<img src="/img/credentials/zoho-inventory/zoho-api-grant-permission.png" alt="Grant Zoho OAuth permissions" width="700"/>

If successful, appse ai stores the credential and the Zoho Inventory connection becomes available for workflows.

---

## Triggers

Here is the list of available triggers in Zoho Inventory:

| Trigger                  | Description                                                       |
| ------------------------ | ----------------------------------------------------------------- |
| **On New Item Created**  | Retrieves events when a new product is added to Zoho Inventory.   |

## Actions

Here is the list of available actions in Zoho Inventory:

| Action                           | Description                                                               |
| -------------------------------- | ------------------------------------------------------------------------- |
| **Create new item adjustment**   | Create a new inventory adjustment request in Zoho Inventory.              |
| **Create new item**              | Create a new item in Zoho Inventory.                                      |

---

## Troubleshooting

- **Invalid client error**: Re-check Client ID and Client Secret.
- **Invalid redirect URI**: Verify callback URL exact match in Zoho API Console.
- **Region mismatch**: Ensure Authorization URL, Token URL, and Base API URL are from the same region.
- **Scope error**: Confirm scope syntax and required permissions for the operation.

## Security Best Practices

- Keep Client Secret private and never expose it in public repositories.
- Use minimum required OAuth scopes whenever possible.
- Rotate credentials immediately if accidental exposure is suspected.

## Support

Need help? Contact the support team at [hello@appse.ai](mailto:hello@appse.ai)
