---
title: "Google Sheets"
slug: /app-integrations/google-sheets
---

Google Sheets is a powerful cloud-based spreadsheet application that allows users to create, edit, and collaborate on spreadsheets in real time. With **appse ai**, you can securely connect your Google Sheets account, automate data operations, and seamlessly integrate spreadsheet data into your workflows.

---

## Setup Credential

Follow the steps below to set up your Google Sheets credential and authorize access from our platform.

---

### Required Fields

You’ll need to provide the following details while creating the credential:

| Field             | Description                                                   |
|------------------|---------------------------------------------------------------|
| Connection Name   | A name to identify this Google Sheets connection              |
| Client ID         | OAuth 2.0 Client ID from Google Cloud Console                  |
| Client Secret     | OAuth 2.0 Client Secret from Google Cloud Console              |
| Callback API URL  | Redirect URI provided by our platform for OAuth authentication |

---

## Step 1: Create a Google Cloud Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Click the **Project selector** (top-left).
   <img src="\img\credentials\google-sheets\GS1.png" alt="appse ai microsoft outlook admin grants permissions" width="700"/>
3. Click **New Project**.
   <img src="\img\credentials\google-sheets\GS2.png" alt="appse ai microsoft outlook admin grants permissions" width="700"/>
4. Enter:
   - **Project name**
   - **Location**
5. Click **Create**.
   <img src="\img\credentials\google-sheets\GS3.png" alt="appse ai microsoft outlook admin grants permissions" width="700"/>

---

## Step 2: Enable Required APIs

### Enable Google Sheets API

1. Go to **APIs & Services → Library**.
   <img src="\img\credentials\google-sheets\GS4.png" alt="appse ai microsoft outlook admin grants permissions" width="700"/>
   <img src="\img\credentials\google-sheets\GS5.png" alt="appse ai microsoft outlook admin grants permissions" width="700"/>
2. Search for **Google Sheets API**.
   <img src="\img\credentials\google-sheets\GS6.png" alt="appse ai microsoft outlook admin grants permissions" width="700"/>
3. Click **Enable**.
   <img src="\img\credentials\google-sheets\GS7.png" alt="appse ai microsoft outlook admin grants permissions" width="700"/>

### (Recommended) Enable Google Drive API

1. In the API Library, search for **Google Drive API**.
2. Click **Enable**.
   <img src="\img\credentials\google-sheets\GS8.png" alt="appse ai microsoft outlook admin grants permissions" width="700"/>

> Enabling Google Drive API allows better file access and spreadsheet management.

---

## Step 3: Configure OAuth Consent Screen

1. Go to **APIs & Services → OAuth consent screen**.
   <img src="\img\credentials\google-sheets\GS9.png" alt="appse ai microsoft outlook admin grants permissions" width="700"/>
2. You will see the message: **“Google Auth Platform not configured yet”**
3. Click **Get started**.
   <img src="\img\credentials\google-sheets\GS10.png" alt="appse ai microsoft outlook admin grants permissions" width="700"/>

---

### Step 3.1: App Information

Fill in the following details:

- **App name**
- **User support email**
   <img src="\img\credentials\google-sheets\GS11.png" alt="appse ai microsoft outlook admin grants permissions" width="700"/>

Click **Next**.

---

### Step 3.2: Audience

Select:

- **External:** Selecting External allows your Google Sheets integration to be authorized by any Google account, not just users within a single Google Workspace organization.
   <img src="\img\credentials\google-sheets\GS12.png" alt="appse ai microsoft outlook admin grants permissions" width="700"/>

Click **Next**.

---

### Step 3.3: Contact Information

- Enter **Contact email**
   <img src="\img\credentials\google-sheets\GS13.png" alt="appse ai microsoft outlook admin grants permissions" width="700"/>

Click **Next**.

---

### Step 3.4: Finish Initial Setup

- Make sure to check the box “I agree to the Google API Services: User Data Policy” to proceed. This confirms that your application complies with Google’s data usage and privacy requirements and is mandatory to continue the OAuth setup.
- Click **Continue**
- Click **Create**
   <img src="\img\credentials\google-sheets\GS14.png" width="700"/>

---

## Step 4: Add Test Users

1. Go to APIs & Services → OAuth consent screen.
2. Open the Audience section.
   <img src="\img\credentials\google-sheets\GS15.png" width="700"/>
3. Under Test users, click Add users.
4. Add one or more Google email addresses
5. Only users added here will be able to successfully authorize and validate the credential.
6. Click Save to apply the changes.
   <img src="\img\credentials\google-sheets\GS16.png" width="700"/>

---

## Step 5: Configure OAuth Scopes

1. Go to **APIs & Services → OAuth consent screen**
2. Open **Data Access**
   <img src="\img\credentials\google-sheets\GS17.png" width="700"/>
3. Click **Add or remove scopes**
   <img src="\img\credentials\google-sheets\GS18.png" width="700"/>

   ### Add the following scopes:

   #### Required
   https://www.googleapis.com/auth/spreadsheets
      <img src="\img\credentials\google-sheets\GS19.png" width="700"/>

   #### Optional (Recommended)
   https://www.googleapis.com/auth/drive
      <img src="\img\credentials\google-sheets\GS20.png" width="700"/>

4. Click **Update**
   <img src="\img\credentials\google-sheets\GS21.png" width="700"/>
5. Click **Save**
   <img src="\img\credentials\google-sheets\GS22.png" width="700"/>
---

## Step 6: Create OAuth Client ID & Client Secret

1. Go to **APIs & Services → Credentials**
   <img src="\img\credentials\google-sheets\GS23.png" width="700"/>
2. Click **Create Credentials**
3. Select **OAuth client ID**
   <img src="\img\credentials\google-sheets\GS24.png" width="700"/>

### Application Type

- Select **Web application**
- Add **Name**
   <img src="\img\credentials\google-sheets\GS25.png" width="700"/>

### Configure Redirect URI

Add your application’s callback URL:

> This **must exactly match** the Callback API URL used in your platform.
> Copy this from the Google Sheets credential form from the platform.
   <img src="\img\credentials\google-sheets\GS_credform.png" width="700"/>
   <img src="\img\credentials\google-sheets\GS26.png" width="700"/>

4. Click **Create**

---

## Step 7: Copy Credentials

After successful creation, Google will display:

- **Client ID**
- **Client Secret**
   <img src="\img\credentials\google-sheets\GS27.png" width="700"/>

Copy these values and store them securely  
Also, you can download the JSON file clicking on the Download JSON button to store the credential
   <img src="\img\credentials\google-sheets\GS28.png" width="700"/>
---

## Step 8: Add Credential in appse ai platform

1. Open the Google Sheets credential form
2. Use the Default Connection name or customize as required
3. Paste the Client ID in the Client ID field
4. Paste the Client Secret in the Client Secret field
5. Click on Save & Authorize button
   <img src="\img\credentials\google-sheets\GS29.png" width="700"/>
6. Provide the Google account email
   <img src="\img\credentials\google-sheets\GS30.png" width="700"/>
7. Provide the password 
   <img src="\img\credentials\google-sheets\GS31.png" width="700"/>
8. Complete the Two-Step-Verification if enabled in your account
9. Click on Continue to proceed
   <img src="\img\credentials\google-sheets\GS32.png" width="700"/>
10. To continue using appse.ai with Google Sheets, you must approve this access request
   <img src="\img\credentials\google-sheets\GS33.png" width="700"/>
11. Verify that credential is successfully validated
   <img src="\img\credentials\google-sheets\GS34.png" width="700"/>
---

## Actions
1. Get Rows from Google Sheet
2. Create New Sheet in Spreadsheet
3. Append Row to Google Sheet
4. Update Row in Google Sheet
5. Create new Spreadsheet

## Common Setup

### Sample Spreadsheet

For all examples in this documentation, assume the following Google Sheet:
   <img src="\img\credentials\google-sheets\GS35.png" width="700"/>

---

### How to Get Spreadsheet ID

1. Open your browser and go to [Google Docs](https://docs.google.com)
2. From the left sidebar, click on Sheets to view all your Google Sheets.
3. Open the Google Sheet you want to use.
4. Once the sheet is open, look at the browser’s address bar.
5. The URL will look similar to this:
      https://docs.google.com/spreadsheets/d/1A2B3C4D5E6F7G8H9I0/edit#gid=0
6. The Spreadsheet ID is the highlighted portion between /d/ and /edit:
      https://docs.google.com/spreadsheets/d/🟦1A2B3C4D5E6F7G8H9I0🟦/edit#gid=0

Copy this value and paste it into the Spreadsheet ID field in the action configuration.

---

## 1. Get Rows from Google Sheet

The **Get Rows from Google Sheet** action retrieves data from a specified range in a Google Sheet and returns each row as a structured object.  
This action is commonly used to **read spreadsheet data**, **fetch records**, or **use Google Sheets as a data source** in workflows.

---

### Configuration Fields

| Field          | Description |
|---------------|------------|
| Spreadsheet ID | The unique ID of the Google Sheets file |
| Sheet Name     | The name of the sheet (tab) inside the spreadsheet |
| Start Cell     | The starting cell of the range to fetch. Make sure to include the column headers also. (e.g., `A1`) |
| End Cell       | The ending cell of the range (Recommended: `ZZ` This allows the engine to read data until the last populated cell automatically) |

---

## 2. Create New Sheet in Spreadsheet

The **Create New Sheet in Spreadsheet** action creates a **new sheet (tab)** inside an existing Google Spreadsheet.  
This action is commonly used to **initialize data structures**, **generate reports**, or **prepare sheets for downstream write operations**.

---

### Configuration Fields

| Field | Description |
|------|------------|
| Spreadsheet ID | The unique ID of the Google Sheets file where the new sheet will be created |
| Sheet Name | The name of the new sheet (tab) to be created. This field appears dynamically after adding an item under **Sheet Creation Requests** |

> **Note:** You can create multiple sheets by adding multiple items under Sheet Creation Requests.

---

## 3. Append Row to Google Sheet

The **Append Row to Google Sheet** action adds a new row of data to an existing Google Sheet.  
This action is commonly used to **insert new records**, **log workflow outputs**, or **store transactional data** without affecting existing rows.

---

### Configuration Fields

| Field | Description |
|------|------------|
| Spreadsheet ID | The unique ID of the Google Sheets file |
| Sheet Name | The name of the sheet (tab) where the row will be appended |
| Append Range | Specifies the column range for the row (e.g., `A1:E1`). Data will be appended to the **next available row** within this range |
| Value Input Mode | Determines how the values are interpreted (`Raw` or `User Entered`). Use **User Entered** when inserting formulas or formatted values |
| Insert Behavior | Controls whether new data is inserted as a new row or overwrites existing data |
| Row Values | Defines the values to be written into each cell of the new row. Ensure that the number of `Cell Value` fields added matches the number of columns in the append range |

---

## 4. Update Row in Google Sheet

This action allows you to update an existing row in a Google Sheet by matching a specific value in a chosen column and then updating one or more column values in that row.

---

### Configuration Fields

| Field | Description |
|------|------------|
| **Spreadsheet ID** | The unique ID of the Google Sheets file that contains the sheet where the row needs to be updated. |
| **Sheet Name** | The name of the sheet (tab) within the selected Google Spreadsheet where the update operation will be performed. |
| **Row Match Condition** | Defines the criteria used to identify the exact row that should be updated.<br />**Match Column** – Enter the exact column header name (for example: `Employee ID`, `Name`).<br />**Match Value** – Enter the value to match against the selected column. The row containing this value will be identified and updated. |
| **Updated Column Values** | Clicking **Add Additional Property** displays a key–value pair UI. Each key represents a column header, and the corresponding value represents the new data to be updated in that column. |

---

## 5. Create new Spreadsheet

The **Create New Spreadsheet** action allows you to create a brand-new Google Spreadsheet directly from your workflow.  
This action is useful when you need to generate spreadsheets dynamically for reports, data collection, exports, or automation use cases.

---

### Configuration Fields

| Field | Description |
|------|------------|
| **Spreadsheet Title** | The title (name) of the new Google Spreadsheet that will be created|
| **Locale** *(Optional)* | Specifies the locale for the spreadsheet (for example: `en_US`). The locale determines default formatting such as date formats, number separators, and currency symbols. |
| **Recalculation Frequency** *(Optional)* | Determines how frequently spreadsheet formulas are recalculated automatically. Select an appropriate option based on how often your data changes. |
| **Initial Sheets** *(Optional)* | Allows you to define one or more sheets (tabs) that should be created when the spreadsheet is generated.<br />**Sheet Name** Enter a name for the sheet (for example: `Sheet1`, `Leads`, `Data`)<br />**Hidden Sheet** Enable this option to create the sheet in a hidden state. Hidden sheets will not be visible by default to users opening the spreadsheet (for example: `true`, `false`)|

---

## Support
 
Need help? Contact our support team at hello@appse.ai
