---
title: "Airtable"
slug : /app-integrations/airtable/
description: Learn how to setup and use Airtable on appse ai.
---

Airtable is a cloud-based collaboration platform that combines the simplicity of a spreadsheet with the power of a database. With appse ai, you can seamlessly connect your Airtable account to automate data workflows, create and update records, and integrate your bases into your automation processes — enabling efficient data management and process automation across your business operations.

---

## Setup Credential

Follow the steps below to quickly set up your Airtable credential using a Personal Access Token.

### Required Fields

You'll be asked to fill in the following details:

| Field           | Description                                 |
|----------------|---------------------------------------------|
| Connection Name | A name to identify the connection           |
| API Token       | Your Airtable Personal Access Token         |

### Step-by-Step Guide

#### 1. Log in to Airtable

Log in to your **Airtable** account at [https://airtable.com](https://airtable.com).

#### 2. Go to Builder Hub

Click on your **Profile menu** (top right) and select **Builder hub**.

<img src="/img/credentials/airtable/airtable-builder-hub.png" alt="Airtable Builder Hub" width="700"/>

#### 3. Create Personal Access Token

Navigate to **Personal Access Token** section and click on **Create new token** to generate a new token.

<img src="/img/credentials/airtable/airtable-create-token.png" alt="Airtable Create Token" width="700"/>

#### 4. Configure Token Scopes and Access

In the **Create new token** screen, you'll need to configure:

**a) Add Scopes:**
- At minimum, add the following scopes to ensure you can read and write to your databases:
  - `data.records:read` - Read records from your bases
  - `data.records:write` - Create and update records in your bases

<img src="/img/credentials/airtable/airtable-configure-create-token.png" alt="Airtable Configure Token" width="700"/>

**b) Choose Access Resources:**
- You have two options:
  1. **Specific Base (recommended)**: Add only the specific base or bases that appse ai needs to access. This follows the principle of least privilege and limits the impact if the token is ever compromised.
  2. **All Bases (higher risk)**: Select "All current and future bases in all current and future workspaces" only if you explicitly require the token to access any database in your account and understand the security trade-offs.

:::tip Choosing Access Level

For better security, we recommend granting access only to the specific base(s) required for your appse ai workflows. Using "All current and future bases in all current and future workspaces" is more convenient but significantly broadens access if the token is leaked or misused, so treat it as an advanced option and use it only when strictly necessary.

:::

#### 5. Copy the Token

Once the token is created, click on the **Copy** button to copy your Personal Access Token.

<img src="/img/credentials/airtable/airtable-token-created.png" alt="Airtable Token Created" width="700"/>

:::warning

Make sure you copy and save your token immediately. For security reasons, you won't be able to see the token again after leaving this page.

:::

#### 6. Configure Credential in appse.ai

Go to appse.ai and create a new Airtable credential. Paste the copied token in the **API Token** field.

<img src="/img/credentials/airtable/airtable-configure-new-credential.png" alt="Airtable Configure Credential" width="700"/>

### Save Your Credential

Once you've filled in the necessary fields, click **"Save"** to store and verify your setup.

- If successful, your Airtable credential will show a "✓" icon. Now you can use this application for your integrations.
- If it fails, you will be displayed a "!" icon. In that case, please recheck your API Token or contact support.

---

## Working with Airtable Actions

Airtable integration in appse.ai provides various actions to interact with your bases and records.

### Understanding Base and Table Structure

Each Airtable workspace contains bases, and each base contains tables. You'll need to specify:
- **Base ID**: The unique identifier for your Airtable base
- **Table Name**: The name of the table you want to work with

<img src="/img/credentials/airtable/airtable-database-table.png" alt="Airtable Database Table" width="700"/>

### Creating Records

When creating a record in Airtable, each record is passed as a JSON object where:
- **Key**: The field name (column name) in your Airtable table
- **Value**: The value you want to insert in that field

**Example:**

```json
{
  "Name": "John Doe",
  "Email": "john@example.com",
  "Status": "Active",
  "Count": 25
}
```

<img src="/img/credentials/airtable/airtable-create-record.png" alt="Airtable Create Record" width="700"/>

:::note Field Types

Make sure the values you provide match the field types in your Airtable table:
- Text fields: Use strings
- Number fields: Use numbers
- Single/Multiple select: Use the exact option names
- Date fields: Use ISO format (YYYY-MM-DD)
- Checkbox: Use `true` or `false`

:::

### Available Actions

With your Airtable credential configured, you can perform various operations:
- **List Records**: Retrieve all records from a table
- **Get Record**: Fetch a specific record by ID
- **Create Record**: Add new records to your table
- **Update Record**: Modify existing records
- **Delete Record**: Remove records from your table
- **Search Records**: Find records based on specific criteria

---

## Need Help?

If you're unsure about any field or face connection issues, reach out to our support team at hello@appse.ai
