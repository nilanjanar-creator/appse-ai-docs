---
title: "BigCommerce"
slug : /app-integrations/bigcommerce
---

BigCommerce is a leading e-commerce platform that helps businesses create and manage online stores. appse ai enables you to connect with your BigCommerce account, automate order processing, inventory management, and other e-commerce operations, allowing for smoother and more efficient business management through automated workflows.

---

## Setup Credential

Follow the steps below to quickly set up your credential.

### Required Fields

The following fields are required to authenticate your BigCommerce account:

| Field        | Description                                      |
|--------------|--------------------------------------------------|
| Store Hash   | Unique identifier for your BigCommerce store     |
| API Token    | Token used to authenticate API requests          |

### Step-by-Step Guide

#### 1. Find Your Store Hash

- Log in to your BigCommerce admin dashboard.  
- In your browser's address bar, you will see a URL like:  
   `https://store-abc123.mybigcommerce.com/manage/dashboard`

<img src="/img/credentials/big-commerce/bigcommerce-cred-store-hash.png" alt="APPSeAI BigCommerce Store Hash" width="700"/>

- The value after `store-` is your **Store Hash**.  
   Example: `abc123`

#### 2. Generate Your Access Token

- Navigate to **Settings** → **Store-level API accounts** → Click **Create API Account**.

<img src="/img/credentials/big-commerce/bigcommerce-cred-access-token-1.png" alt="APPSeAI BigCommerce Store Level API Accounts" width="700"/>

<img src="/img/credentials/big-commerce/bigcommerce-cred-access-token-2.png" alt="APPSeAI BigCommerce Store Create API Account" width="700"/>

- Enter a **Name** and select the required **OAuth scopes**.

Here is a recommended table for the required OAuth scopes:

| OAuth Scope                                       | Access     |
|--------------------------------------------------|------------|
| Content                                           | None       |
| Checkout Content                                 | None       |
| Customers                                         | modify     |
| Coustomers login                                 | None       |
| Information & settings                           | None       |
| Marketing                                         | None       |
| Orders                                            | modify     |
| Order transactions                               | modify     |
| Create payments                                  | create     |
| Get Payment methods                              | read-only  |
| Stored Payment Instruments                       | None       |
| Products                                          | modify     |
| Themes                                            | None       |
| Carts                                             | None       |
| Checkouts                                         | None       |
| Sites & routes                                   | None       |
| Channel settings                                 | None       |
| Channel listings                                 | None       |
| Storefront API tokens                            | None       |
| Storefront API customer impersonation tokens     | None       |
| Store Locations                                  | modify     |
| Store Inventory                                  | modify     |
| Fulfillment Methods                              | modify     |
| Order Fulfillment                                | modify     |
| Metafield Ownership                              | None       |
| Metafields Access                                | full       |


- Click **Save** to generate the token.

<img src="/img/credentials/big-commerce/bigcommerce-cred-access-token-3.png" alt="APPSeAI BigCommerce Save API" width="700"/>

- Copy and securely store the **Access Token** — it will not be shown again.

<img src="/img/credentials/big-commerce/bigcommerce-cred-access-token-4.png" alt="APPSeAI BigCommerce Access Token" width="700"/>

You will now have your **Access Token** for use within the APPSe AI platform.

### Test Your Credential

Once both **Store Hash** and **API Token** are entered into the credential form, use the **Save** button to store your configurations.

- If successful, your BigCommerce integration will be ready to use.
- If unsuccessful, try the following solutions:
   * Ensure your Store Hash and token are correct and that the scopes are properly set.
   * Ensure that your API token has the required scope for the Customers endpoint. Missing or insufficient permissions may result in authentication or data access errors. Refer to the OAuth scope recommendation table above.

---

## Triggers and Actions

Every application has a pre-defined set of triggers and actions that allow users to perform application specific activities within the platform. Here is a list of all the actions and triggers available:

### Actions

> Customers Actions

- Create Customer
- Get a list of customers
- Update an existing customer

> Products Actions

- Create Product
- Get All Products
- Update Product

> Order Products Actions

- Get Order Products

> Orders Actions

- Get All Orders

> Categories Actions

- Get List Categories

> Order Shipping Addresses Actions

- Get Order Shipping Addresses

---

## Need Help?

If you’re unsure about any field or face connection issues, reach out to our support team at hello@appse.ai