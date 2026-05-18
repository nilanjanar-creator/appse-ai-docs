---
title: "Notion"
slug: /app-integrations/notion/
---

Notion is an all-in-one workspace platform for notes, documents, wikis, and project management. Integrating Notion into appse ai enables you to automate page creation, database management, content updates, and more — directly within your workflows.

## Set Up Credential

:::info

You will generate the required Integration Token during the steps below — no prior setup required.

:::

### Required Fields

Fill in the following fields:

| Field              | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| Connection Name    | A name to help you identify this connection                  |
| Integration Token  | The Internal Integration Token from your Notion integration  |

---

### Step-by-Step Guide

#### 1. Open the Credential Form

Click **Select a Credential** and choose **Notion** from the application list. Add your **Connection Name**.
<img src="/img/credentials/notion/create-new-cred.png" alt="appse ai Notion select credential screen" width="700"/>

#### 2. Go to Notion Integrations

Navigate to [Notion Integrations](https://www.notion.so/profile/integrations) (log in to Notion if prompted) and click **"New integration"**.

#### 3. Set Integration Type to Internal

Under integration type, select **"Internal"** — this provides a Bearer Token that can be used directly to authenticate API requests. Click **"Create a new integration"** to proceed.

<img src="/img/credentials/notion/create-new-cred-notion.png" alt="appse ai Notion integration type selection screen" width="700"/>

#### 4. Fill in Integration Details

Fill in the following:

- **Name**: Give your integration a recognisable name.
- **Associated Workspace**: Select the Notion workspace you want this integration to access. This is the top-level Notion account your pages and databases belong to.

Click **"Create"** once done.

The form to fill in your integration name and workspace is shown below:
<img src="/img/credentials/notion/click-save-cred-notion.png" alt="appse ai Notion integration name and workspace form" width="700"/>

After clicking Create, your integration will be saved and you will be taken to its settings:
<img src="/img/credentials/notion/configure-cred-notion.png" alt="appse ai Notion integration settings page after creation" width="700"/>

#### 5. Copy Your Integration Token

After saving, copy the **Internal Integration Token** (shown as "Secret" on the Notion settings page) from the Integration Settings page.

<img src="/img/credentials/notion/copy-integration-key.png" alt="appse ai Notion copy integration token from settings" width="700"/>

#### 6. Paste the Token in appse ai

Return to the appse ai credential form. Paste the **Integration Token** into the respective field and click **"Save"** to store and validate your credential.

Paste your token into the Integration Token field as shown:
<img src="/img/credentials/notion/enter-your-integration-token.png" alt="appse ai Notion paste integration token into credential form" width="700"/>

Once saved, your credential will appear as connected in appse ai:
<img src="/img/credentials/notion/create-credentials-notion-appseai.png" alt="appse ai Notion credential successfully created" width="700"/>

:::info
 
If the connection fails, verify your Integration Token is correct and has not been deactivated in Notion.
 
:::

:::warning

After connecting in appse ai, go back to Notion and grant your integration access to the specific pages or databases you want to work with:

1. Open the relevant Notion page or database.
2. Click the **"..."** menu (top right).
3. Go to **"Connections"**.
4. Find and add your integration by name.

Without this step, your integration will have no data to access.

:::

---

## Triggers and Actions

Here is a list of the available triggers and actions for Notion:

### Triggers

:::info
 
Both triggers require a **Database ID** — you can find this in the Notion database URL.
 
:::

- **On Page Added to Database** — Triggers whenever a new page is added to a specified Notion database. Use this trigger to start a workflow automatically when a new database entry is created.

- **On Page Updated in Database** — Triggers whenever an existing page inside a specified Notion database is updated. Use this trigger to react to changes in database records in real time.

### Actions

| Action | Description |
| ------ | ----------- |
| **Append Block** | Appends one or more new content blocks (such as paragraphs, headings, bullet points, code blocks, or callouts) to the end of an existing Notion page or block. Useful for adding content to a page without overwriting existing data. |
| **Archive Page** | Archives a specified Notion page, removing it from active view without permanently deleting it. The page can be restored later from Notion's archive. |
| **Create Page in Database** | Creates a new page inside a specified Notion database with the provided properties, content blocks, icon, cover, and optional template support. Use this to programmatically add new records or entries to a database. |
| **Get Child Blocks By BlockId** | Retrieves all child blocks nested inside a specified Notion page or block. Use this to read the full content structure of a page. |
| **Get Database by ID** | Fetches the metadata and schema of a specified Notion database, including its properties and column definitions. |
| **Get Page by PageId** | Retrieves the properties and metadata of a specified Notion page by its ID. Use this to read the current state of a page before updating it. |
| **Get User by ID** | Fetches the details of a specific Notion user by their user ID, including their name and email address. |
| **Get Users** | Retrieves a list of all members in your Notion workspace. Useful for assigning tasks or filtering content by user. |
| **Query Database** | Queries a Notion database with optional filters and sorting to retrieve matching pages. Use this to search for specific records within a database. |
| **Update Page** | Updates the properties, icon, cover, or archive status of an existing Notion page. Use this to edit database record fields, change page titles, or update any other page-level properties. |

---

## Support

Need help? Contact our support team at [hello@appse.ai](mailto:hello@appse.ai)
