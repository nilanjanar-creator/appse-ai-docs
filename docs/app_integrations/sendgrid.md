---
title: "SendGrid"
slug: /app-integrations/sendgrid/
---

SendGrid is a cloud-based email delivery platform that provides reliable transactional and marketing email services. Integrating SendGrid enables automated email notifications and communication flows.

## Set Up Credential

:::info

To create credentials for SendGrid, you must have a SendGrid account.

:::

### Required Fields

You’ll be asked to fill in the following details:

| Field           | Description                                 |
| --------------- | ------------------------------------------- |
| Connection Name | A name to help you identify this connection |
| API Key         | Your personal API Key from SendGrid         |

### Step-by-Step Guide

#### 1. Sign In to SendGrid

Go to [sendgrid.com](https://sendgrid.com/) and log in to your account.

#### 2. Navigate to API Keys

In the left sidebar, click on **Settings** and then select **API Keys**.

<img src="\img\credentials\sendgrid\api-keys-menu.png" alt="APPSeAI SendGrid API Keys Menu" width="700"/>
<br/>

#### 3. Create API Key

Click on the **Create API Key** button in the top right corner.

<img src="\img\credentials\sendgrid\create-api-key.png" alt="APPSeAI SendGrid Create Button" width="700"/>
<br/>

#### 4. Configure Key

Give your API Key a name. Select **Full Access** (or customize permissions as needed) to ensure proper functionality. Then click **Create & View**.

<img src="\img\credentials\sendgrid\api-key-permissions.png" alt="APPSeAI SendGrid Key Permissions" width="700"/>
<br/>

#### 5. Copy and store your API key

Your API Key will be displayed. This is the **only time** it will be shown. Copy it immediately and paste it into the **API Key** field in the appse ai credential form.

<img src="\img\credentials\sendgrid\copy-api-key.png" alt="APPSeAI SendGrid Copy Key" width="700"/>

<br/>

:::warning

Make sure to copy your API key now. You will not be able to see it again once you leave this page.

:::

### Verify Sender Identity

Before you can send emails, SendGrid requires you to verify your sender identity.

1.  In the SendGrid settings sidebar, go to **Sender Authentication**.
2.  Click on **Verify a Single Sender**.
3.  Fill in the required details (From Name, From Email, Reply To, etc.).
4.  SendGrid will send a verification email to the address you provided. Open the email and click the link to verify.

<img src="\img\credentials\sendgrid\sender-verification.png" alt="APPSeAI SendGrid Sender Verification" width="700"/>

---

## Triggers and Actions

Here is a list of the available actions and triggers for SendGrid:

### Actions

- **Send Email** - Send an email using SendGrid. This action supports advanced features like multiple personalizations.
- **Send Email Message** - Send an email message to recipients. A simpler action for sending emails.

---

## Need Help?

If you’re unsure about any field or face connection issues, reach out to our support team at [hello@appse.ai](mailto:hello@appse.ai)
