---
title: "Shopware"
slug: /app-integrations/shopware/
---

Shopware is a flexible open-source eCommerce platform designed for managing products, orders, and customers with a powerful Admin API. With appse ai, you can connect your Shopware store to automate critical e-commerce operations such as product synchronization, order processing, customer management, and inventory updates. This integration helps you streamline your e-commerce workflows, eliminate manual data entry, and ensure seamless data flow across all your business systems.

---

## Setup Credential

To get started with Shopware integration, you need to set credentials for it.

Click on **Add credentials**, search for Shopware and select it to create a new credential. Or you can also do it while creating a workflow by clicking on **Create a new credential**.

<img src="/img/credentials/shopware/add_credential.png" alt="Shopware Settings Menu" width="700"/>

This opens the Shopware credential form:

<img src="/img/credentials/shopware/credential_form_page.png" alt="Shopware Credential Form" width="700"/>

### Required Fields

Fill in the following fields:

| Field             | Description                                                                        |
| ----------------- | ---------------------------------------------------------------------------------- |
| Connection name   | A name to help you identify this connection                                        |
| Base API URL      | The root URL of your Shopware API endpoint (e.g., https://myshop.example.com/api/) |
| Access Key ID     | The client ID generated from your Shopware integration                             |
| Secret Access Key | The secret key generated from your Shopware integration                            |

## Step-by-Step Guide

### Step 1: Log in and determine your Base API URL

Log in to your Shopware admin dashboard.

<img src="/img/credentials/shopware/login.png" alt="Shopware Account Login" width="700"/>

After logging in successfully, you will see the Shopware dashboard.

<img src="/img/credentials/shopware/dashboard.png" alt="Shopware admin dashboard" width="700"/>

**How to find your Base API URL:**

1. Look at the URL in your browser's address bar (it should look like `https://yourstore.com/admin/`)
2. Replace `admin` with `api` in the URL and add a trailing slash (`/`)

**Example:** If your admin URL is `https://yourstore.com/admin/`, your Base API URL would be `https://yourstore.com/api/`

<img src="/img/credentials/shopware/admin_url.png" alt="Shopware admin URL bar showing API URL path" width="700"/>

:::info
Both HTTP and HTTPS protocols are supported, but HTTPS is recommended for security.
:::

### Step 2: Access Shopware Admin Settings

Navigate to your Shopware Admin panel and go to **Settings**.

<img src="/img/credentials/shopware/settings.png" alt="Shopware Settings Menu" width="700"/>

### Step 3: Create a New Integration

Scroll down and go to the **Integrations** and click on it.

<img src="/img/credentials/shopware/integrations.png" alt="Shopware integrations list" width="700"/>

Click on the **Add Integration** button to create a new integration for appse ai.

<img src="/img/credentials/shopware/integration_button.png" alt="Shopware Add Integration Button" width="700"/>

### Step 4: Configure Integration Details

Enter a name for your integration (e.g., "appse ai Integration") and fill in the required fields:

<img src="/img/credentials/shopware/add_integration.png" alt="Shopware Create Integration Form" width="700"/>

### Step 5: Copy the Credentials

After creating the integration, you will see the following credentials displayed:

- **Access Key ID**: Copy this value
- **Secret Access Key**: Copy this value (note: this is typically only shown once, so store it securely)

:::warning
Make sure to copy and securely store the **Secret Access Key** immediately. If you lose it, you may need to regenerate it or create a new integration.
:::

### Step 6: Add the Credentials to appse ai

1. In appse ai, create a new connection and select **Shopware**
2. Choose **OAuth 2.0 (Client Credentials)** as the authentication method
3. Fill in the following fields:
   - **Connection name**: A descriptive name for your connection (e.g., "My Shopware Store")
   - **Base API URL**: Paste the API URL from Step 1 (e.g., `https://myshop.example.com/api/`)
   - **Access Key ID**: Paste the Access Key ID from Step 5
   - **Secret Access Key**: Paste the Secret Access Key from Step 5

<img src="/img/credentials/shopware/save_credential.png" alt="Shopware Setup in appse ai" width="700"/>

### Step 7: Save and Validate

Click the **Save** button to verify that your credentials are correct.

If you followed all the steps correctly, your Shopware credential should now be connected and ready to use in your appse ai workflows.

---

## Triggers

Here is the list of available triggers in Shopware:

| Trigger                   | Description                                                  |
| ------------------------- | ------------------------------------------------------------ |
| **New Customers Created** | Retrieves events when a new customer is created in Shopware. |
| **New Products Created**  | Retrieves events when a new product is added to Shopware.    |
| **New Orders Created**    | Retrieves events when a new order is placed in Shopware.     |

## Actions

Here is the list of available actions in Shopware:

| Action                 | Description                                                            |
| ---------------------- | ---------------------------------------------------------------------- |
| **Create Product**     | Create a new product in Shopware.                                      |
| **Update Product**     | Update an existing Shopware product.                                   |
| **Get Customer by ID** | Retrieve detailed customer information using the Shopware customer ID. |
| **Update Customer**    | Update an existing Shopware customer's details.                        |
| **Get Order by ID**    | Retrieve detailed order information from Shopware by order ID.         |

---

## Support

Need help? Contact our support team at [hello@appse.ai](mailto:hello@appse.ai)
