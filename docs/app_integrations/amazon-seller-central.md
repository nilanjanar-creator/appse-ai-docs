---
title: "Amazon Seller Central"
slug: /app-integrations/amazon-seller-central/
---

Amazon Seller Central is the marketplace for managing your Amazon selling account. It allows you to list products, manage inventory, fulfill orders, and track your business performance. Integrating Amazon Seller Central into appse ai enables you to automate order management, feed submissions, financial reporting, and more — directly within your AI-powered workflows.

---

## Set Up Credential

:::info

Before you create a credential for Amazon Seller Central using appse ai, ensure you have an Amazon Seller Central account and have registered as a developer (or authorized a developer app). You can register at the [Amazon SP-API Developer Registration page](https://developer.amazonservices.com/).

:::

### Required Fields

| Field | Description |
|---|---|
| **Connection Name** | A label to identify this credential within appse ai. |
| **Marketplace Region** | The Amazon region your seller account operates in (e.g., North America, Europe, Far East). |

:::note
You will also need your Amazon Seller Central login credentials and access to your registered two-step verification device during the authorization flow.
:::

### Step-by-Step Guide

#### 1. Open the Credential Form

Click **Select a Credential** and choose **Amazon Seller Central** from the application list.

<img src="/img/credentials/amazon-seller-central/create-new-credential-appseai-amazon-seller-central.png" alt="appse ai Amazon Seller Central Connection Name" width="700"/>

This opens the Amazon Seller Central credential form. Add your **Connection Name**.

#### 2. Select Your Region / Marketplace

Select the correct Amazon marketplace region for your seller account (e.g., North America, Europe, Far East). Choosing the wrong region will prevent appse ai from accessing your account data.

<img src="/img/credentials/amazon-seller-central/select-region-seller-central.png" alt="appse ai Amazon Seller Central region and marketplace selector" width="700"/>

#### 3. Authorize the App and Complete Two-Step Verification

Log in to your Amazon Seller Central account and complete the two-step verification process.

Follow the Log in with Amazon (LWA) flow to authorize your application against your Seller account. LWA is Amazon's OAuth-based authorization system used to grant appse ai access to your Seller account.

Enter your Amazon account password to proceed.

<img src="/img/credentials/amazon-seller-central/enter-password-seller-central.png" alt="appse ai Amazon Seller Central enter password" width="700"/>

Enter the one-time password (OTP) sent to your registered device.

<img src="/img/credentials/amazon-seller-central/enter-otp-seller-central.png" alt="appse ai Amazon Seller Central enter OTP" width="700"/>

Select your country from the dropdown.

<img src="/img/credentials/amazon-seller-central/select-country-seller-central.png" alt="appse ai Amazon Seller Central select country" width="700"/>

Click **Confirm** to complete the verification process.

<img src="/img/credentials/amazon-seller-central/click-confirm-seller-central.png" alt="appse ai Amazon Seller Central click confirm" width="700"/>

Click **Save and Authorize** in appse ai to complete the connection.

<img src="/img/credentials/amazon-seller-central/click-save-authorize-appseai-amazon-seller-central.png" alt="appse ai Amazon Seller Central save and authorize button" width="700"/>

Once the verification is successfully completed, your credentials will be validated and saved within appse ai. You will see a confirmation message once the connection is successful.

:::tip
If the authorization flow fails, ensure your Amazon account has Seller Central access and that your developer app has been approved for SP-API.
:::

---

## Triggers and Actions

Here is a list of the available triggers and actions for Amazon Seller Central:

### Triggers

- **Feed Created or Updated** — Initiates the workflow when a feed is submitted or its processing status changes. This trigger is useful for monitoring the outcome of bulk data uploads in real time.

- **New Sales Order Financial Event** — Initiates the workflow when a new sales order financial event is recorded in your account, such as a charge, refund, or fee associated with a completed order.

- **New Return Financial Event** — Initiates the workflow when a return-related financial event is logged, such as a customer refund or return adjustment that impacts your account balance.

### Actions

| Action | Description |
|---|---|
| **Create Feed Document** | Creates a new feed document and returns a secure upload URL. This is the required first step before submitting a feed to Amazon. A **Content Type** for the feed data must be specified. |
| **Create Feed** | Submits a feed to Amazon Seller Central for processing. To be performed after uploading your data to the URL returned by the **Create Feed Document** action. Requires a **Feed Type** and the **Feed Document ID**. |
| **Get Feed** | Retrieves the details and current processing status of a specific feed. Requires a **Feed ID** returned from the **Create Feed** action. |
| **Get Order Items** | Retrieves the line items associated with a specific order, including product details, quantities, and pricing information. Requires an **Order ID**. |
| **Get Order Buyer Info** | Retrieves buyer information associated with a specific order, such as the buyer's name and email address. Requires an **Order ID**. |
| **Get Orders** | Retrieves a list of orders based on specified filters such as order status, marketplace, and date range. Useful for monitoring recent sales activity across your account. |
| **Get Order Address** | Retrieves the shipping address associated with a specific order. Requires an **Order ID**. Note: address data may be obfuscated for certain marketplace regions in accordance with Amazon's data protection policies. |
| **Get Shipment Items** | Retrieves the items included in a specific inbound shipment to an Amazon fulfillment center. Requires a **Shipment ID**. |

---

## Support

Need help? Contact our support team at [hello@appse.ai](mailto:hello@appse.ai)
