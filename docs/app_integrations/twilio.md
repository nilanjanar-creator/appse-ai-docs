---
title: "Twilio"
slug: /app-integrations/twilio/
---

Twilio is a cloud communications platform that enables businesses to send SMS, WhatsApp messages, and make phone calls programmatically. Integrating Twilio allows you to automate notifications and communication flows across multiple channels.

## Set Up Credential

:::info

To create credentials for Twilio, you must have a Twilio account.

:::

### Required Fields

You'll be asked to fill in the following details:

| Field           | Description                                           |
| --------------- | ----------------------------------------------------- |
| Connection Name | A name to help you identify this connection           |
| Account SID     | Your Twilio Account SID                               |
| Auth Token      | Your Twilio Auth Token                                |

### Step-by-Step Guide

#### 1. Sign In to Twilio

Go to [twilio.com](https://www.twilio.com/) and log in to your account.

#### 2. Locate Your Account SID and Auth Token

After logging in, you will land on the **Twilio Console Dashboard**. Your **Account SID** and **Auth Token** are displayed on the main dashboard page.

<img src="\img\credentials\twilio\account-sid-auth-token.png" alt="APPSeAI Twilio Account SID and Auth Token" width="700"/>
<br/>

#### 3. Copy Your Credentials

Click the **copy** icon next to the **Account SID** and **Auth Token** fields to copy them. Paste these values into the corresponding fields in the appse ai credential form.

<img src="\img\credentials\twilio\copy-credentials.png" alt="APPSeAI Twilio Copy Credentials" width="700"/>
<br/>

:::warning

Keep your Auth Token secure. Do not share it publicly, as it grants full access to your Twilio account.

:::

### Set Up a Twilio Phone Number

Before you can send SMS, WhatsApp messages, or make phone calls, you need a Twilio phone number.

1. In the Twilio Console, navigate to **Phone Numbers** > **Manage** > **Buy a Number**.
2. Search for a number with the capabilities you need (SMS, Voice, WhatsApp).
3. Click **Buy** to purchase the number.

<img src="\img\credentials\twilio\buy-phone-number.png" alt="APPSeAI Twilio Buy Phone Number" width="700"/>
<br/>

### Enable WhatsApp (Optional)

To send WhatsApp messages, you need to set up a WhatsApp-enabled sender.

1. In the Twilio Console, navigate to **Messaging** > **Try it out** > **Send a WhatsApp message**.
2. Follow the instructions to connect your Twilio number with WhatsApp or use the Twilio Sandbox for testing.

<img src="\img\credentials\twilio\whatsapp-setup.png" alt="APPSeAI Twilio WhatsApp Setup" width="700"/>

### Create a New Connection in appse ai

Once you have your Twilio credentials ready, follow these steps to create a connection in appse ai:

#### 1. Open the Credentials Page

In the appse ai platform, navigate to the **Credentials** section and click on **Create New Credential**.

<img src="\img\credentials\twilio\create-new-credential.png" alt="APPSeAI Twilio Create New Credential" width="700"/>
<br/>

#### 2. Enter Your Twilio Credentials

Select **Twilio** from the list of available integrations. Fill in the **Connection Name**, **Account SID**, and **Auth Token** fields with the values you copied from the Twilio Console. Click **Save** to create the connection.

<img src="\img\credentials\twilio\add-credentials.png" alt="APPSeAI Twilio Add Credentials" width="700"/>
<br/>

#### 3. Use the Connection in a Workflow

Once the credential is saved, you can use it in your workflows. For example, add a Twilio node to your flow and select the credential you just created to send an SMS.

<img src="\img\credentials\twilio\send-sms.png" alt="APPSeAI Twilio Send SMS" width="700"/>
<br/>

---

## Triggers and Actions

Here is a list of the available actions for Twilio:

### Actions

- **SMS** – Send an SMS message to a specified phone number using your Twilio number.
- **WhatsApp** – Send a WhatsApp message to a recipient through your Twilio WhatsApp-enabled number.
- **Phone Call** – Initiate a phone call to a specified number using Twilio's programmable voice.

---

## Need Help?

If you're unsure about any field or face connection issues, reach out to our support team at [hello@appse.ai](mailto:hello@appse.ai)