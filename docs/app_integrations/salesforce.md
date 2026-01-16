---
title: "Salesforce"
slug : /app-integrations/salesforce/
---

Salesforce is a leading customer relationship management (CRM) platform that helps businesses manage their sales, marketing, and customer support operations efficiently. With appse ai, you can seamlessly connect your Salesforce account to automate data synchronization, manage leads, opportunities, and contacts, and streamline your end-to-end CRM workflows—enhancing productivity and ensuring data consistency across your business processes.

---

## Setup Credential

Follow the steps below to quickly set up your credential.

### Required Fields

You’ll be asked to fill in the following details:

| Field             | Description                                      |
|------------------|--------------------------------------------------|
| Connection Name   | A name to help you identify this connection      |
| Consumer Key     | Consumer Key from your Salesforce App          |
| Consumer Secret  | Consumer Secret from your Salesforce App      |

### Step-by-Step Guide

#### 1. Go to Setup

Log into your [Salesforce](https://login.salesforce.com/) account. From the Home Screen, go to Setup.

<img src="\img\credentials\salesforce\setup.png" alt="salesforce setup" width="700"/>

#### 2. Go to External Client App

Search for App Manager and click on New External Client App.

<img src="\img\credentials\salesforce\new-external-client-app.png" alt="salesforce new external client app" width="700"/>

#### 3. Add App name and Email & Enable OAuth

Fill in the basic details like App Name and Email, then go to API (Enable OAuth Settings) and check the box for Enable OAuth. You will find new fields down below.

<img src="\img\credentials\salesforce\app-details-and-enable-oauth.png" alt="salesforce app details and enable oauth" width="700"/>

#### 4. Add callback URL from appse ai

First, you need to add the Callback URL. For this, go back to your Salesforce credential form in appse ai and look for the Redirect URL. Copy it and paste it in the Callback URL field in Salesforce.

<img src="\img\credentials\salesforce\callback-url.png" alt="appse ai salesforce callback url" width="500"/>

#### 5. Add Scopes

Next, you need to add OAuth Scopes in Salesforce. Select the following scopes:

- Manage user data via APIs (api)
- Perform requests at any time (refresh_token, offline_access)

<img src="\img\credentials\salesforce\add-scopes.png" alt="salesforce add scopes" width="700"/>

#### 6. Make additional adjustments

Next, go to Flow Enablement and make sure the following fields are:

| Field             | Status                                      |
|------------------|--------------------------------------------------|
| Enable Authorization Code and Credentials Flow   | Enabled |
| Require Proof Key for Code Exchange (PKCE) extension for Supported Authorization Flows    | Disabled         |

> **Note:** All other fields / child fields should stay default.

#### 7. Create the app

Once it’s done, the fields should look like the image above. At this point, you are done setting up the app. Go ahead and click the Create button. Your app should be created.

#### 8. Search for External Client App Manager

Now, search for External Client App Manager and click on the app you just created.

<img src="\img\credentials\salesforce\external-client-app-manager.png" alt="Salesforce external client app manager" width="700"/>

#### 9. Go to Settings and find Consumer Key and Secret

Go to the Settings tab and find the link to view your "Consumer Key and Secret". You will receive a verification link on your account’s email. Add the same here and you should have your Consumer Key and Consumer Secret.

<img src="\img\credentials\salesforce\find-consumer-key-and-secret.png" alt="Salesforce Consumer Key and secret" width="700"/>

#### 10. Add the Key and Secret back in appse ai
Paste both back in appse ai. If you followed all the steps right, your credential should be connected!

---

## Support

Need help? Contact our support team at hello@appse.ai