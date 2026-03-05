---
title: "Google Sheets"
slug: /app-integrations/googlesheets
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
## Step 1: Open the Google Sheet Credential Form
1. Login to the **appse ai** portal.
2. Click on the Credentials option from the Sidebar menu.
3. Click Add Credentials button.
4. Select Google Sheets App from the Applist.
5. Google Sheets credential form should be displayed
6. Note the `Callback API URL` value. You will need this later.

## Step 2: Create a Google Cloud Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Click the **Project selector** (top-left).
   <img src="\img\credentials\google-sheets\GS1.png"  width="700"/>
3. Click **New Project**.
   <img src="\img\credentials\google-sheets\GS2.png"  width="700"/>
4. Enter:
   - **Project name**
   - **Location**
5. Click **Create**.
   <img src="\img\credentials\google-sheets\GS3.png"  width="700"/>

---

<a id="navigate-to-apis-services"></a>

## Step 3: Navigate to APIs & Services section in Google Cloud Console

1. In the Google Cloud Console header, click the **Google Cloud** text/logo (top-left).
      <img src="\img\credentials\google-sheets\GS36.png" width="700"/>
2. From the **Quick access** panel, click **APIs & Services**.
3. You will now be on the **APIs & Services** dashboard.

---

## Step 4: Enable Required APIs

### Enable Google Sheets API

1. Go to **[APIs & Services](#navigate-to-apis-services) → Library**.
   <img src="\img\credentials\google-sheets\GS4.png"  width="700"/>
   <img src="\img\credentials\google-sheets\GS5.png"  width="700"/>
2. Search for **Google Sheets API**.
   <img src="\img\credentials\google-sheets\GS6.png"  width="700"/>
3. Click **Enable**.
   <img src="\img\credentials\google-sheets\GS7.png"  width="700"/>

### Enable Google Drive API

1. In the API Library, search for **Google Drive API**.
2. Click **Enable**.
   <img src="\img\credentials\google-sheets\GS8.png"  width="700"/>

> **Note:** Enabling the Google Drive API is mandatory to automatically fetch and display all spreadsheets linked to your Google Drive in the Select Spreadsheet dropdown during action configuration.

---

## Step 5: Configure OAuth Consent Screen

1. Go to **[APIs & Services](#navigate-to-apis-services) → OAuth consent screen**.
   <img src="\img\credentials\google-sheets\GS9.png"  width="700"/>
2. You will see the message: **“Google Auth Platform not configured yet”**
3. Click **Get started**.
   <img src="\img\credentials\google-sheets\GS10.png"  width="700"/>

---

### Step 5.1: App Information

Fill in the following details:

- **App name**
- **User support email**
   <img src="\img\credentials\google-sheets\GS11.png"  width="700"/>

Click **Next**.

---

### Step 5.2: Audience

Select:

- **External:** Selecting External allows your Google Sheets integration to be authorized by any Google account, not just users within a single Google Workspace organization.
   <img src="\img\credentials\google-sheets\GS12.png"  width="700"/>

Click **Next**.

---

### Step 5.3: Contact Information

- Enter **Contact email**
   <img src="\img\credentials\google-sheets\GS13.png"  width="700"/>

Click **Next**.

---

### Step 5.4: Finish Initial Setup

- Make sure to check the box “I agree to the Google API Services: User Data Policy” to proceed. This confirms that your application complies with Google’s data usage and privacy requirements and is mandatory to continue the OAuth setup.
- Click **Continue**
- Click **Create**
   <img src="\img\credentials\google-sheets\GS14.png"  width="700"/>

---

## Step 6: Add Test Users

1. Go to **[APIs & Services](#navigate-to-apis-services)** → OAuth consent screen.
2. Open the Audience section.
   <img src="\img\credentials\google-sheets\GS38.png" width="700"/>
3. Under Test users, click Add users.
4. Add one or more Google email addresses
5. Only users added here will be able to successfully authorize and validate the credential.
6. Click Save to apply the changes.
   <img src="\img\credentials\google-sheets\GS16.png" width="700"/>

---

## Step 7: Configure OAuth Scopes

1. Go to **[APIs & Services](#navigate-to-apis-services) → OAuth consent screen**
2. Open **Data Access**
   <img src="\img\credentials\google-sheets\GS17.png" width="700"/>
3. Click **Add or remove scopes**
   <img src="\img\credentials\google-sheets\GS18.png" width="700"/>

   ### Select the following scopes:

   - https://www.googleapis.com/auth/spreadsheets
      <img src="\img\credentials\google-sheets\GS19.png" width="700"/>

   - https://www.googleapis.com/auth/drive
      <img src="\img\credentials\google-sheets\GS20.png" width="700"/>

      
   > **Note:** Selecting the required scopes ensures that linked Google Sheets are properly fetched and displayed during configuration.   

4. Click **Update**
   <img src="\img\credentials\google-sheets\GS21.png" width="700"/>
5. Click **Save**
   <img src="\img\credentials\google-sheets\GS22.png" width="700"/>
---

## Step 8: Create OAuth Client ID & Client Secret

1. Go to **[APIs & Services](#navigate-to-apis-services) → Credentials**
   <img src="\img\credentials\google-sheets\GS23.png" width="700"/>
2. Click **Create Credentials**
3. Select **OAuth client ID**
   <img src="\img\credentials\google-sheets\GS39.png" width="700"/>

### Application Type

- Select **Web application**
- Add **Name**
   <img src="\img\credentials\google-sheets\GS25.png" width="700"/>

### Configure Authorized Redirect URI

Add our application’s callback URL:

> This **must exactly match** the Callback API URL used in our platform.
> Get this from the Google Sheets credential form as mentioned in Step 1.
   <img src="\img\credentials\google-sheets\GS_credform.png" width="700"/>
   <img src="\img\credentials\google-sheets\GS37.png" width="700"/>

4. Click **Create**

---

## Step 9: Credential Generation

After successful creation, Google will display:

- **Client ID**
- **Client Secret**
   <img src="\img\credentials\google-sheets\GS27.png" width="700"/>

Copy these values and store them securely  
Also, you can download the JSON file clicking on the Download JSON button to store the credential
   <img src="\img\credentials\google-sheets\GS28.png" width="700"/>
---

## Step 10: Add Credential in appse ai platform

1. Navigate back to Google Sheets credential form
2. Use the Default Connection name or customize as required
3. Paste the Client ID in the Client ID field
4. Paste the Client Secret in the Client Secret field
5. Click on Save & Authorize button
   <img src="\img\credentials\google-sheets\GS29.png" width="700"/>
6. Provide the Google account email (Added as test user in Step 6)
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

## Google Sheet Actions
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

Copy this value and paste it into the Spreadsheet ID field in the action configuration wherever required.

---

## 1. Get Rows from Google Sheet

The **Get Rows from Google Sheet** action retrieves data from a specified range in a Google Sheet and returns each row as a structured object.  
This action is commonly used to **read spreadsheet data**, **fetch records**, or **use Google Sheets as a data source** in workflows.
> **Note:** Regardless of the configured Start Cell and End Cell, the first row of the spreadsheet is always treated as the header row. The column names in this row are used as the JSON field names in the output array of objects.

---

### Configuration Fields

| Field          | Description |
|---------------|------------|
| Select Spreadsheet | Select the required spreadsheet from the dropdown |
| Sheet Name     | The name of the sheet (tab) inside the spreadsheet |
| Start Cell     | The starting cell of the range to fetch. (e.g., `A1`) |
| End Cell       | The ending cell of the range (Recommended: `ZZ` This allows the engine to read data until the last populated cell automatically) |

---

### Example Configuration
   <img src="\img\credentials\google-sheets\GS40.png" width="700"/>

---

### Result
   <img src="\img\credentials\google-sheets\GS50.png" width="700"/>

---

## 2. Create New Sheet in Spreadsheet

The **Create New Sheet in Spreadsheet** action, creates a **new sheet (tab)** inside an existing Google Spreadsheet.  
This action is commonly used to **initialize data structures**, **generate reports**, or **prepare sheets for downstream write operations**.

---

### Configuration Fields

| Field | Description |
|------|------------|
| Select Spreadsheet | Select the required spreadsheet from the dropdown where the new sheet will be created |
| Sheet Name | The name of the new sheet (tab) to be created. This field appears dynamically after adding an item under **Sheet Creation Requests** |

> **Note:** You can create multiple sheets by adding multiple items under Sheet Creation Requests.

---

### Example Configuration
   <img src="\img\credentials\google-sheets\GS41.png" width="700"/>

---

### Result
   <img src="\img\credentials\google-sheets\GS42.png" width="700"/>

---

## 3. Append Row to Google Sheet

The **Append Row to Google Sheet** action adds a new row of data to an existing Google Sheet.  
This action is commonly used to **insert new records**, **log workflow outputs**, or **store transactional data** without affecting existing rows.

---

### Configuration Fields

| Field | Description |
|------|------------|
| Select Spreadsheet | Select the required spreadsheet from the dropdown |
| Sheet Name | The name of the sheet (tab) where the row will be appended |
| Append Range | Specifies the column range for the row (e.g., `A1:E1`). Data will be appended to the **next available row** within this range |
| Value Input Mode | Determines how the values are interpreted (`Raw` or `User Entered`). Use **User Entered** when inserting formulas or formatted values |
| Insert Behavior | Controls whether new data is inserted as a new row or overwrites existing data |
| Row Values | Defines the values to be written into each cell of the new row. Ensure that the number of `Cell Value` fields added matches the number of columns in the append range |

---

### Example Configuration
   <img src="\img\credentials\google-sheets\GS43.png" width="700"/>

   <img src="\img\credentials\google-sheets\GS44.png" width="700"/>

---

### Result
   <img src="\img\credentials\google-sheets\GS45.png" width="700"/>

---

## 4. Update Row in Google Sheet

This action allows you to update an existing row in a Google Sheet by matching a specific value in a chosen column and then updating one or more column values in that row.

---

### Configuration Fields

| Field | Description |
|------|------------|
| Select Spreadsheet | Select the required spreadsheet from the dropdown where the row needs to be updated. |
| Sheet Name | The name of the sheet (tab) within the selected Google Spreadsheet where the update operation will be performed. |
| Row Match Condition | Defines the criteria used to identify the exact row that should be updated.<br />**Match Column** – Enter the exact column header name (for example: `Employee ID`, `Name`).<br />**Match Value** – Enter the value to match against the selected column. The row containing this value will be identified and updated. |
| Updated Column Values | Clicking **Add Additional Property** displays a key–value pair UI. Each key represents a column header, and the corresponding value represents the new data to be updated in that column. |

---

### Example Configuration
   <img src="\img\credentials\google-sheets\GS46.png" width="700"/>

---

### Result
   <img src="\img\credentials\google-sheets\GS47.png" width="700"/>

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

### Example Configuration
   <img src="\img\credentials\google-sheets\GS48.png" width="700"/>

---

### Result
   <img src="\img\credentials\google-sheets\GS49.png" width="700"/>

---

## Support
 
Need help? Contact our support team at hello@appse.ai
