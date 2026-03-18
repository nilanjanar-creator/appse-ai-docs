---
title: Microsoft Outlook
description: Step-by-step guide to set up Microsoft Outlook credentials for appse.ai integration
slug: /app-integrations/microsoft-outlook/
---

**Microsoft Outlook** is a widely used email and calendar service from Microsoft that helps individuals and organizations manage emails, schedules, and communication efficiently. It is commonly used as part of Microsoft 365 for business and enterprise communication.
This guide walks you through the process of adding **Microsoft Outlook credentials** within Appse AI, enabling integration with secure access to mailboxes and related Outlook features for users.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Key Features

- **Email Integration**: Read, send, reply, and manage Outlook emails securely.
- **Calendar Management**: Access and manage calendar events, meetings, and schedules.
- **Microsoft Graph Support**: Uses Microsoft Graph APIs for reliable and secure communication.
- **Organization-Level Consent**: Allows admins to grant permissions once for all users.
- **Secure OAuth 2.0 Authentication**: Ensures token-based authentication without sharing passwords.
- **Workflow Automation**: Integrate Outlook seamlessly with CRMs, ERPs, and other business applications through Appse AI.

---

## Setup Credential

Follow the steps below to quickly set up your Microsoft Outlook credential.

## Step-by-Step Guide

To get started with Microsoft Outlook, you need to set credentials for it. Go to the credential page of appse.ai.

<img src="/img/credentials/microsoft-outlook/home_page.png" alt="Create a new credential" width="700"/>

Click on **Add credentials**, search for Microsoft Outlook and select it to create a new credential.

<img src="/img/credentials/microsoft-outlook/add_new_cred.png" alt="Create a new credential" width="700"/>

Or you can also do it while creating workflow by clicking on **Create a new credential**.

<img src="/img/credentials/microsoft-outlook/new_credpage.png" alt="Create a new credential" width="700"/>

Which leads to a pop-up:

<img src="/img/credentials/microsoft-outlook/credential_form.png" alt="Enter credential details to add credential" width="700"/>

### Step 1. Choose Your Account

To add an Outlook credential, simply enter a connection name and click the Save and Authorize button.

This will open a pop-up window displaying a list of your Microsoft accounts, from which you can select the account you want to use.
Then you can proceed by selecting the **Microsoft account or organization** you want to connect with Appse AI.

<img src="/img/credentials/microsoft-outlook/choose_account.png" alt="APPSeAI microsoft outlook choose account" width="700"/>

If the required account is not already added, click **Use another account**. This will redirect you to the Microsoft sign-in page to authenticate using a different account.

<img src="/img/credentials/microsoft-outlook/sign_in_page.png" alt="APPSeAI microsoft sign in page" width="700"/>

Enter your Outlook email id and click **Next** to continue.

<img src="/img/credentials/microsoft-outlook/sign_in.png" alt="Enter email" width="700"/>

Enter password and click **Sign In** button to continue.

<img src="/img/credentials/microsoft-outlook/enter_password.png" alt="Enter password" width="700"/>

Once the sign-in is successful, the authorization window will automatically close, and your Outlook account will be securely connected.

You are now ready to use Outlook in your Appse AI workflows.

## Triggers and Actions

Here is a list of the available actions and triggers for Outlook:

### Triggers

- **Get messages** — Triggered when a new product is created.
- **Get inbox emails** — Triggered when an existing product is updated.
- **Get inbox email for a specific sender email** — Triggered when a new order is created.

---

### Actions

### Attachment Actions

- **Get Mail message attachment** — Read attachment of a mail.

### Common setup

#### Step-by-Step Guide to Use "Get Mail Message Attachment" in Outlook

1. **Use Get Messages Trigger**
   - Set up the **Get Messages** trigger to activate when a **new message is received** in your inbox.

2. **Extract Message ID**
   - From the trigger, extract the **Message ID** of the incoming email. This ID will be used to fetch the attachments.

3. **Get Mail Message Attachment**
   - Use the **Get Mail Message Attachment** action, passing the **Message ID** from the previous step to retrieve details about any attachments in the email.

4. **Extract Content-Type Data**
   - In the attachment details, look for the **Content-Type** field to get information about the attachment type.

5. **Base64 Conversion**
   - Take the **Base64 string** from the **Content-Type** field and use a **Base64 to file converter** to convert the string into a usable file (e.g., image, PDF, etc.).

---

## Support

Need help? Contact our support team at hello@appse.ai
