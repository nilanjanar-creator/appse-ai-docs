---
title: "Salesforce"
description: "Step-by-step guide to set up Salesforce credentials for appse ai integration"
slug: /app-integrations/salesforce/
---

Salesforce is a leading customer relationship management (CRM) platform that helps businesses manage their sales, marketing, and customer support operations efficiently. With appse ai, you can seamlessly connect your Salesforce account to automate data synchronization, manage leads, opportunities, and contacts, and streamline your end-to-end CRM workflows—enhancing productivity and ensuring data consistency across your business processes.

---

## Setup Credential

appse ai connects to Salesforce using the **OAuth 2.0 Client Credentials Flow**—a server-to-server authentication method that uses your app's Consumer Key and Consumer Secret, with no interactive user login required.

Follow the steps below to quickly set up your credential.

### Required Fields

You'll be asked to fill in the following details:

| Field           | Description                                                                              |
| --------------- | ---------------------------------------------------------------------------------------- |
| Connection Name | A name to help you identify this connection                                              |
| Domain URL      | Your Salesforce org's My Domain URL without https:// (e.g. yourdomain.my.salesforce.com) |
| Consumer Key    | Consumer Key from your Salesforce App                                                    |
| Consumer Secret | Consumer Secret from your Salesforce App                                                 |

### Step-by-Step Guide

#### 1. Go to Setup

Log into your [Salesforce](https://login.salesforce.com/) account. From the Home Screen, go to Setup.

<img src="/img/credentials/salesforce/setup.png" alt="salesforce setup" width="700"/>

#### 2. Go to External Client App

Search for App Manager and click on New External Client App.

<img src="/img/credentials/salesforce/new-external-client-app.png" alt="salesforce new external client app" width="700"/>

#### 3. Add App name and Email & Enable OAuth

Fill in the basic details like App Name and Email, then go to API (Enable OAuth Settings) and check the box for Enable OAuth. You will find new fields down below.

<img src="/img/credentials/salesforce/app-details-and-enable-oauth.png" alt="salesforce app details and enable oauth" width="700"/>

#### 4. Add callback URL

First, you need to add the Callback URL. Use https://embedded-ui.appse.ai/oauth-callback.html for the Redirect URL. Copy it and paste it in the Callback URL field in Salesforce.

<img src="/img/credentials/salesforce/callback_url.png" alt="appse ai salesforce callback url" width="700"/>

> **Note:** The **OAuth 2.0 Client Credentials Grant** doesn't actually use a Callback URL. However, Salesforce's External Client App setup requires this field to be filled in regardless of which OAuth flow you enable, so the URL above is added only to satisfy that mandatory field—it's never invoked during authentication.

#### 5. Add Scopes

Next, you need to add OAuth Scopes in Salesforce. Select the following scopes:

- Manage user data via APIs (api)
- Perform requests at any time (refresh_token, offline_access)

<img src="/img/credentials/salesforce/add-scopes.png" alt="salesforce add scopes" width="700"/>

#### 6. Make additional adjustments

Next, go to Flow Enablement and make sure the following fields are:

| Field                          | Status  |
| ------------------------------ | ------- |
| Enable Client Credentials Flow | Enabled |

> **Note:** All other fields / child fields should stay default.

#### 7. Create the app

Once it's done, the fields should look like the image above. At this point, you are done setting up the app. Go ahead and click the Create button. Your app should be created.

#### 8. Search for External Client App Manager

Now, search for External Client App Manager and click on the app you just created.

<img src="/img/credentials/salesforce/external-client-app-manager.png" alt="Salesforce external client app manager" width="700"/>

#### 9. Go to Policies and click Edit

On the app's detail page, stay on the **Policies** tab. Click the **Edit** button in the top-right corner to open up the policy settings for editing.

<img src="/img/credentials/salesforce/policies_tab.png" alt="Salesforce external client app policies tab" width="700"/>

#### 10. Enable Client Credentials Flow

Scroll down and expand the **OAuth Policies** section. Under **OAuth Flows and External Client App Enhancements**, check the box for **Enable Client Credentials Flow**. This reveals a **Run As (Username)** field—enter the email address of the Salesforce user whose permissions the integration should run as (this user's data access and permission set will apply to all API calls made through this connection).

<img src="/img/credentials/salesforce/policy-run-as-username.png" alt="Salesforce enable client credentials flow" width="700"/>

> **Note:** The username entered in **Run As** must belong to the Salesforce **execution (integration) user** for this integration. This user must have the **`API Enabled`** permission enabled and the required **object- and field-level** permissions configured through their assigned Profile and/or Permission Sets for the Salesforce data that Appse AI needs to read or write.

#### 11. Save your changes

Click **Save** to apply the updated OAuth Policies. Salesforce may take a minute to activate the new policy—refresh the page to confirm **Enable Client Credentials Flow** is showing as checked before moving on.

#### 12. Search for Consumer Key and Secret

Now, search for External Client App Manager and click on the app you just created (if not already open), then go to the Settings tab and find the link to view your "Consumer Key and Secret." You will receive a verification link on your account's email. Add the same here and you should have your Consumer Key and Consumer Secret.

<img src="/img/credentials/salesforce/find-consumer-key-and-secret.png" alt="Salesforce Consumer Key and secret" width="700"/>

#### 13. Add the Key and Secret back in appse ai

Paste both back in appse ai. If you followed all the steps right, your credential should be connected!

---

## Triggers

All Salesforce triggers poll for newly created or updated records and fire once per record found.

Here is the list of available triggers for Salesforce:

| Trigger                       | Description                                                        |
| ----------------------------- | ------------------------------------------------------------------ |
| **New account created**       | Triggers when a new Account record is created in Salesforce.       |
| **Accounts updated**          | Triggers when an existing Account record is updated in Salesforce. |
| **New contact created**       | Triggers when a new Contact record is created in Salesforce.       |
| **Contacts updated**          | Triggers when an existing Contact record is updated in Salesforce. |
| **New leads created**         | Triggers when a new Lead record is created in Salesforce.          |
| **New opportunities created** | Triggers when a new Opportunity record is created in Salesforce.   |
| **New orders created**        | Triggers when a new Order record is created in Salesforce.         |
| **New quotations created**    | Triggers when a new Quote record is created in Salesforce.         |
| **New case created**          | Triggers when a new Case record is created in Salesforce.          |

---

## Actions

Here is the list of available actions for Salesforce:

| Action                                                  | Description                                                                                                              |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Create a new account**                                | Creates a new account in Salesforce CRM.                                                                                 |
| **Get account by id**                                   | Retrieves Salesforce account details using the provided account id.                                                      |
| **Get account by account number**                       | Retrieves Salesforce account details using the provided account number.                                                  |
| **Get account by email**                                | Retrieves Salesforce account details using the provided email address (requires the `Email__c` custom field).            |
| **Update an account**                                   | Updates an existing account record in Salesforce CRM.                                                                    |
| **Create an asset**                                     | Creates a new Asset in Salesforce.                                                                                       |
| **Update an asset**                                     | Updates an existing Asset in Salesforce by Id.                                                                           |
| **Create a case**                                       | Creates a new case in Salesforce.                                                                                        |
| **Update a case by ID**                                 | Updates an existing case in Salesforce by its ID.                                                                        |
| **Create a new contact**                                | Creates a new contact in Salesforce CRM.                                                                                 |
| **Get contact by email**                                | Retrieves Salesforce contact details using the provided email address.                                                   |
| **Get contact by account id**                           | Retrieves Salesforce contact details using the provided account id.                                                      |
| **Update a contact**                                    | Updates an existing contact record in Salesforce CRM.                                                                    |
| **Update a contract by ID**                             | Updates an existing contract in Salesforce by its ID.                                                                    |
| **Update an invoice**                                   | Updates an existing Invoice in Salesforce.                                                                               |
| **Create a new lead**                                   | Creates a new lead in Salesforce CRM.                                                                                    |
| **Update a lead**                                       | Updates an existing lead in Salesforce CRM.                                                                              |
| **Create a new opportunity**                            | Creates a new opportunity in Salesforce CRM.                                                                             |
| **Get opportunity with line items by opportunity id**   | Retrieves Salesforce opportunity details along with associated opportunity line items using the provided opportunity id. |
| **Update an opportunity**                               | Updates an existing opportunity in Salesforce CRM.                                                                       |
| **Create opportunity line item**                        | Creates a product (line item) for an opportunity in Salesforce CRM.                                                      |
| **Update opportunity line item**                        | Updates an existing opportunity product (line item) in Salesforce CRM.                                                   |
| **Create an order**                                     | Creates a new Order in Salesforce.                                                                                       |
| **Get order by id**                                     | Retrieves Salesforce order details using the provided Order ID.                                                          |
| **Update an order**                                     | Updates an existing Order in Salesforce.                                                                                 |
| **Create an order item**                                | Creates a new Order Item in Salesforce.                                                                                  |
| **Update an order item**                                | Updates an existing Order Item in Salesforce.                                                                            |
| **Create a price book**                                 | Creates a new Price Book (Pricebook2) in Salesforce.                                                                     |
| **Get standard pricebooks**                             | Retrieves Salesforce standard pricebooks.                                                                                |
| **Update pricebook**                                    | Updates an existing Price Book (Pricebook2) in Salesforce.                                                               |
| **Create a new pricebookentry**                         | Creates a new PricebookEntry record in Salesforce.                                                                       |
| **Get pricebookentry by pricebook id and product code** | Retrieves a PricebookEntry using a pricebook id and product code.                                                        |
| **Create a new product**                                | Creates a new product (Product2) in Salesforce.                                                                          |
| **Get product by id**                                   | Retrieves Salesforce product details using the provided product id.                                                      |
| **Get product by productcode**                          | Retrieves a product using the given ProductCode.                                                                         |
| **Update a product**                                    | Updates an existing product (Product2) in Salesforce.                                                                    |
| **Create quote**                                        | Creates a new quote in Salesforce CRM.                                                                                   |
| **Update quote**                                        | Updates an existing quote in Salesforce CRM.                                                                             |
| **Create quotelines**                                   | Adds a product to a Salesforce quote.                                                                                    |
| **Get quote lines by quote id**                         | Retrieves Quote Line Items associated with a specific Quote in Salesforce.                                               |
| **Update quotelines**                                   | Updates a product in a Salesforce quote.                                                                                 |
| **Create a task**                                       | Creates a new task in Salesforce.                                                                                        |
| **Get task by id**                                      | Retrieves Salesforce task details using the provided Task ID.                                                            |
| **Create a work order**                                 | Creates a new work order in Salesforce.                                                                                  |
| **Update a WorkOrder**                                  | Updates an existing work order in Salesforce by its ID.                                                                  |
| **Get records with filter**                             | Queries Salesforce records from any object using SOQL, with dynamic field selection, filtering, sorting, and limits.     |
| **Get records by id**                                   | Fetches a specific Salesforce record from any supported object using its record ID.                                      |

---

## Support

Need help? Contact our support team at [support@appse.ai](mailto:support@appse.ai)
