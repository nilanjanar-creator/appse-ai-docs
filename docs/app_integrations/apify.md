---
title: "Apify"
slug : /app-integrations/apify/
description: Learn how to setup and use Apify on appse ai.
---

Apify is a platform designed for automating and scaling data workflows, offering powerful capabilities to manage and process information from various sources. With appse ai, you can easily connect your Apify account, authenticate securely, and perform a range of actions within your automation flows — enabling a smoother, more integrated experience for your data and process automation needs.

---

## Setup Credential

Follow the steps below to quickly find your bearer token and complete the credential setup.

### Required Fields

You’ll be asked to fill in the following details:

| Field           | Description                                 |
|----------------|---------------------------------------------|
| Connection Name | A name to identify the connection           |
| Bearer Token    | Your Apify API token (also called API key)  |

### Step-by-Step Guide

#### 1. Add Connection Name

- Provide a descriptive name for your connection (e.g., `Apify Scraper`, `Product Monitor Feed`).
- This helps you easily recognize the connection within our platform.

#### 2. Find Your Bearer Token

- Log in to your **Apify** account at [https://console.apify.com](https://console.apify.com).
- Go to the **Settings** page from the sidebar.
<img src="/img/credentials/apify/apify-cred-settings.png" alt="Apify Credentials Settings" width="700"/>

- Click on the **Integrations** tab. Next, under **API**, copy the **Personal API Token**.

<img src="/img/credentials/apify/apify-cred-bearer-token.png" alt="Apify Credentials Bearer Token" width="700"/>

> Example: `apify_api_o6GFG3aT3ZTfXdkKJGMPpUbdT2abcde3`

> Note: This token gives access to your Apify account. Keep it secure and do not share it publicly.

### Save Your Credential

Now configure the credential in appse.ai by adding a new Apify Credentials and Paste the **API key**

<img src="/img/credentials/apify/apify-credential-configure.png" alt="Apify Credential Configure" />

Once you've filled in the necessary fields, click **"Save"** to store and verify your setup.

- If successful, your Pipedrive credential will show a "✓" icon. Now you can use this application for your integrations.
- If it fails, you will be displayed a "!" icon. In that case, please recheck your API Key and Domain or contact support.


## Working with Actors

Actors are the core building blocks of the Apify platform. They are serverless cloud programs that can perform arbitrary web scraping, automation, or data processing tasks. Follow the steps below to work with actors in your appse.ai workflows.

### Step 1: Go to Apify Store

Navigate to the [Apify Store](https://apify.com/store) to browse and discover actors that suit your needs.

<img src="/img/credentials/apify/apify-store-access.png" alt="Apify Store Access" width="700"/>

### Step 2: Add Actor to Your Account

Search for your specific actor and add it to your Apify account. For example, you can search for web scrapers, data extractors, or automation tools.

<img src="/img/credentials/apify/apify-store-search.png" alt="Apify Store Search" width="700"/>

### Step 3: Find the Actor Name

Once you've added an actor, note down the actor name. You'll need this to reference the actor in appse.ai.

<img src="/img/credentials/apify/apify-actor-name.png" alt="Apify Actor Name" width="700"/>

### Step 4: Check Input Requirements

Review the actor's documentation to understand the input requirements needed to run it. Each actor has specific input parameters that must be provided for successful execution. Click on **JSON** to find a sample input.

<img src="/img/credentials/apify/apify-get-json.png" alt="Apify Actor Input requirements" width="700"/>

### Step 5: Add a New Node to your workflow

Go to appse.ai and add a new Apify node to your workflow.

<img src="/img/credentials/apify/apify-select-action.png" alt="Apify Select Action" width="700"/>

### Step 6: Use Get Actors to Find All Actors

Use the **Get Actors** action to retrieve a list of all actors in your Apify account. The JSON response provides the username and actor name for each actor.
The response will include details about your actors:

<img src="/img/credentials/apify/apify-get-actors.png" alt="Apify Get actors" width="700"/>

Please note the name and username from the fields in JSON. When we request an actor the format of actor name needs to be `{username}~{actor-name}`. 

### Step 7: Run an Actor

To execute an actor, select the **Run Actor** action. When selected, you'll be asked to choose an actor from your account.

<img src="/img/credentials/apify/apify-select-actor.png" alt="Apify Select Actor" width="700"/>

:::tip Manual Actor Execution

In case you want to execute the actor manually, you need to specify the actor in the format: `username~actorname`

For example: `apify~google-search-scraper`

:::

### Step 8: Configure Input and Run

Provide the required input parameters and any optional fields needed to run the actor successfully. The input structure depends on the specific actor you're using.

<img src="/img/credentials/apify/apify-actor-configure.png" alt="Apify Actor Configure" width="700"/>

Once configured, your actor will execute and return the results to your workflow.

---

## Need Help?

If you’re unsure about any field or face connection issues, reach out to our support team at hello@appse.ai

