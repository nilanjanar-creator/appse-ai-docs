---
title: "Magento 2"
slug: /app-integrations/magento2/
---

Magento 2 is a robust, open-source e-commerce platform that offers flexible shopping cart systems and control over the look, content, and functionality of your online store. With appse ai, you can seamlessly connect your Magento 2 store to automate orders, products, and customer data management, enhancing operational efficiency.

## Setup Credential

To setup your Magento 2 credential, you can choose between two authentication methods:

1.  **Integration Token**: Uses an Access Token generated via Magento Integrations (Recommended).
2.  **Session Authentication**: Uses your Magento Admin username and password.

<img src="/img/credentials/magento2/magento-auth-selection.png" alt="Magento Authentication Selection" width="700"/>

### Method 1: Integration Token

Select **Integration Token** in the authentication type selection screen.

#### Required Fields

| Field           | Description                                                      |
| --------------- | ---------------------------------------------------------------- |
| Connection name | A name to help you identify this connection.                     |
| Store Domain    | The domain of your Magento store (e.g., `test.templatebar.com`). |
| Access Token    | The API access token generated from Magento Admin.               |

<img src="/img/credentials/magento2/magento-credential-modal.png" alt="Magento Integration Token Fields" width="700"/>

#### Step-by-Step Guide

**1. Prerequisite: Configure OAuth Settings**

Before creating an integration, you must enable standalone Bearer tokens.

- Log in to Magento Admin.
- Navigate to **Stores > Settings > Configuration > Services > OAuth**.
- Expand **Consumer Settings**.
- Set **Allow OAuth Access Tokens to be used as standalone Bearer tokens** to **Yes**.
- Click **Save Config**.

<img src="/img/credentials/magento2/magento-oauth-config.png" alt="Magento OAuth Configuration" width="700"/>

**2. Create an Integration**

- Navigate to **System > Extensions > Integrations** and click **Add New Integration**.

<img src="/img/credentials/magento2/magento-integrations-grid.png" alt="Magento Integrations Grid" width="700"/>

**3. Configure Integration Details**

- Enter a **Name** (e.g., `appseai`) and your **Password** in "Basic Settings".

<img src="/img/credentials/magento2/magento-new-integration.png" alt="Magento New Integration Form" width="700"/>

**4. Set API Permissions**

- Switch to the **API** tab, set **Resource Access** to **All**, and click **Save**.

<img src="/img/credentials/magento2/magento-api-permissions.png" alt="Magento API Permissions" width="700"/>

**5. Get Access Token**

- Click **Activate** on the new integration, then **Allow**.
- Copy the **Access Token**.

<img src="/img/credentials/magento2/magento-access-token.png" alt="Magento Access Tokens" width="700"/>

**6. Connect to appse ai**

- In appse ai, enter your **Store Domain** and paste the **Access Token**.
- Click **Save**.

---

### Method 2: Session Authentication

Select **Session Authentication** in the authentication type selection screen.

#### Required Fields

| Field           | Description                                                      |
| --------------- | ---------------------------------------------------------------- |
| Connection name | A name to help you identify this connection.                     |
| Store Domain    | The domain of your Magento store (e.g., `test.templatebar.com`). |
| Admin Username  | Your Magento Admin panel username.                               |
| Admin Password  | Your Magento Admin panel password.                               |

<img src="/img/credentials/magento2/magento-session-auth-modal.png" alt="Magento Session Authentication Fields" width="700"/>

#### Step-by-Step Guide

1.  **Select Authentication**: Choose **Session Authentication** when adding a credential.
2.  **Enter Details**:
    - **Store Domain**: Enter your store's base domain (e.g., `magento.example.com`).
    - **Admin Username**: Enter the username you use to log in to the Magento Admin.
    - **Admin Password**: Enter your admin password.
    - _Note: Ensure the user has API access permissions._
3.  **Connect**: Click **Save** to verify and connect.

---

## Triggers and Actions

Here is a list of the available actions and triggers for Magento 2:

### Triggers

- **Customers updated** - Trigger when customers are updated in Magento.
- **New customers created** - Trigger when new customers are created in Magento.
- **New orders created** - Trigger when new orders are created in Magento.
- **New products created** - Trigger when new products are created in Magento.

### Actions

> Customer Actions

- **Create a customer** - Create a new customer in Magento.
- **Get customer by email address** - Get customer by email address.
- **Update a customer** - Update an existing customer in Magento.

> Product Actions

- **Create a product** - Create a new product in Magento.
- **Get product by SKU** - Get product by SKU.
- **Update a product** - Update an existing product in Magento.

> Shipment Actions

- **Create shipment** - This action creates a shipment for a Magento order.

---

## Need Help?

If you’re unsure about any field or face connection issues, reach out to our support team at [hello@appse.ai](mailto:hello@appse.ai)
