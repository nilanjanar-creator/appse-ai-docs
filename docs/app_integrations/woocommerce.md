---
title: "WooCommerce"
slug: /app-integrations/woocommerce/
---

WooCommerce is a powerful open-source e-commerce platform that transforms WordPress into a fully functional online store. With appse ai, you can connect your WooCommerce store to automate critical operations such as order management, customer synchronization, product updates, and inventory tracking. This integration helps streamline your e-commerce workflows, reduce manual data entry, and ensure seamless synchronization between your WooCommerce store and other business systems.

## Setup Credential

To set up your WooCommerce credential, you can choose between two authentication methods:

1. **API Key Authentication**: Authentication is performed using the Consumer Key and Consumer Secret from WooCommerce (Recommended), provided as query parameters in API requests.
2. **Basic Authentication**: Uses the Consumer Key and Consumer Secret generated from WooCommerce settings, passed as the Basic Auth username and password in API requests.

<img src="\img\credentials\woocommerce\woocommerce_cred_form.png" alt="appse ai WooCommerce Dashboard" width="700"/>

## Method 1: API Key Authentication

Select **API Key Authentication** in the authentication type selection screen.

#### Required Fields

| Field           | Description                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Connection name | A name to help you identify this connection.                                                                              |
| Store Address   | The store address of your WooCommerce store present in the store url (e.g., 'dev.yourstore' in https://dev.yourstore.com) |
| Consumer Key    | API consumer key generated from WooCommerce settings                                                                      |
| Consumer Secret | API consumer secret generated from WooCommerce settings                                                                   |

<img src="\img\credentials\woocommerce\api_key_cred.png" alt="appse ai WooCommerce Dashboard" width="700"/>

### Step-by-Step Guide

Before setting up your WooCommerce credential in appse ai, ensure the following:

**Install WooCommerce Plugin**: If not already installed, you need to install and activate the WooCommerce plugin from the WordPress plugin repository.

To install the woocommerce plugin and retrive woocommerce credentials, follow the steps below:

**1. Login to your WooCommerce Store**

Log in to your WordPress admin dashboard where WooCommerce is installed.

**2. Install Woocommerce Plugin**

Navigate to **Plugin** section in the left sidebar menu and searche for **Woocommerce** you can see the required plugin, click to install and activate the plugin.

<img src="\img\credentials\woocommerce\select-woocommerce-plugin.png" alt="appse ai WooCommerce Dashboard" width="700"/>

**3. Access WooCommerce Settings**

Now, navigate to **WooCommerce** in the left sidebar menu and click on **Settings**.

<img src="\img\credentials\woocommerce\settings.png" alt="appse ai WooCommerce Dashboard" width="700"/>

**4. Navigate to REST API Settings**

Click on the **Advanced** tab and then select **REST API**.

<img src="\img\credentials\woocommerce\advanced_settings.png" alt="appse ai WooCommerce Advanced Tab" width="700"/>

**5. Create API Key**

On the REST API settings page, click on **Add key** button.

<img src="\img\credentials\woocommerce\add_key.png" alt="appse ai WooCommerce Settings Menu" width="700"/>

**6. Configure API Permissions**

Fill in the API key details:

- **Description**: Enter a descriptive name for this API key (e.g., "appse ai Integration")
- **User**: Select the WordPress user account that will be associated with this API key. It should have administrator or appropriate permissions.
- **Permissions**: Select the permission level required:
  - **Read**: Allows reading data from your store
  - **Write**: Allows modifying data in your store
  - **Read/Write**: Allows both reading and modifying data (recommended for full integration)

<img src="\img\credentials\woocommerce\add-api-key.png" alt="appse ai WooCommerce REST API" width="700"/>

Click **Generate API key** to proceed.

**7. Copy Credentials**

Once the API key is generated, copy the **Consumer Key** and **Consumer Secret**. Note that the Consumer Secret is shown only once.

<img src="\img\credentials\woocommerce\client-key-secret.png" alt="appse ai WooCommerce REST API" width="700"/>

> `Note`: The Consumer Secret is shown only once. If you lose it, you will need to regenerate the API key.

**8. Configure permalink**

Before connecting, verify that your WordPress permalinks are configured correctly so WooCommerce REST API requests resolve properly.

- Go to **Settings > Permalinks** in your WordPress admin.

<img src="\img\credentials\woocommerce\select-permalink.png" alt="appse ai WooCommerce Dashboard" width="700"/>

- Select a non-default permalink structure such as **Post name**.
- Click **Save Changes** even if the current setting is already selected.

This refreshes your permalink rules and helps ensure the WooCommerce REST API endpoints function correctly.

**9. Connect to appse ai**

In appse ai, enter your **Store Address**, **Consumer Key**, and **Consumer Secret**.

<img src="\img\credentials\woocommerce\save_authorize.png" alt="appse ai WooCommerce Basic Cred" width="700"/>

Click **Save** to establish the connection.

---

## Method 2: Basic Authentication

Select **Basic Authentication** in the authentication type selection screen.

### Required Fields

| Field           | Description                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Connection name | A name to help you identify this connection.                                                                              |
| Store Address   | The store address of your WooCommerce store present in the store url (e.g., 'dev.yourstore' in https://dev.yourstore.com) |
| Consumer Key    | API consumer key generated from WooCommerce settings                                                                      |
| Consumer Secret | API consumer secret generated from WooCommerce settings                                                                   |

<img src="\img\credentials\woocommerce\basic_cred.png" alt="appse ai WooCommerce Basic Cred" width="700"/>

### Step-by-Step Guide

Basic Authentication allows you to connect using your WooCommerce Consumer Key and Consumer Secret as username and password.

Follow the same steps as mentioned above for API key authentication to generate and configure your credentials in WooCommerce.

## Triggers and Actions

## Triggers

Here is the list of available triggers in Woocommerce:

- **New Customers Created**
- **Customers Updated**
- **New Products Created**
- **Products Updated**
- **New Orders Created**
- **Orders Updated**

## Actions

- **Create Customer**
- **Update Customer**
- **Create Product**
- **Update Product**
- **Create Customer**
- **Get Product by SKU**
- **Get Order Refund by Order ID**
- **Create Order Refund**

Here is the list of available actions in Woocommerce:

## Support

Need help? Contact our support team at hello@appse.ai
