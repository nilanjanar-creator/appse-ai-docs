---
title: "SAP Business One"
slug : /credentials/sap-b1-credential
---

Welcome to the SAP Business One (SAP B1) credential setup guide!

This guide will walk you through each detail you need to retrieve from your SAP B1 environment, ensuring a smooth and secure connection with our platform.

---

## Required Fields

You’ll be asked to fill in the following details:

| Field       | Description                                  |
|-------------|----------------------------------------------|
| Host URL    | The server URL where your SAP B1 is hosted   |
| Port        | The port number for the SAP B1 service layer |
| Username    | Your SAP B1 username                         |
| Password    | Your SAP B1 password                         |
| Company DB  | The company database name used in SAP B1     |
---

## Step-by-Step Guide

### 1. Add Connection Name

Provide a name for your credential in the `Connection Name` field. This will be showcased in the credential listing page.

### 2. Find Your Host URL and Port

1. Open the SAP Business One **Service Layer** configuration or ask your SAP B1 administrator.
   - It will look something like: `https://{localip}:50000/ControlCenter/`
   - You should see page titled - `System Landscape Directory`

2. Login to the platform using your **System Landscape Directory Credentials**.
<img src="/img/credentials/sap-b1-cred-sld-login.png" alt="APPSeAI SAP Business One Credentials System Landscape Directory Login" />

3. Locate the base URL used to access the Service Layer API. Go to _Services_ → _Service Layer_
<img src="/img/credentials/sap-b1-cred-host-url.png" alt="APPSeAI SAP Business One Credentials Url and Port" />

4. Add your Host URL and Port. With respect to the image you will be adding:
> - **Host URL**: `https://10.0.2.68`
> - **Port**: `50000`


---

### 3. Find Your Company DB Name

1. In the same **System Landscape Directory**
2. Go to _DB Instances and Companies_ → Click on Your Server Name
<img src="/img/credentials/sap-b1-cred-db-name.png" alt="APPSeAI SAP Business One Credentials DB Instances and Companies" />

3. Copy the **Schema Name**, this is your `Database Name`

<img src="/img/credentials/sap-b1-cred-db-name2.png" alt="APPSeAI SAP Business One Credentials Database Name" />

> **Note**: Depending on your setup, you might see `https://insync.pro` instead of `https://10.0.2.68`. Either can be used as your Host URL input.

---

### 4. Get Your Username and Password
<img src="/img/credentials/sap-b1-credentials.png" alt="APPSeAI SAP Business One Credentials" width="602" height="306" />

1. Use your **SAP B1 client login credentials**.
2. Make sure the user has sufficient API permissions for integration.

---

## Save Your Credential

Once you've filled in the necessary fields, click **"Save"** to store and verify your setup.

- If successful, your Pipedrive credential will show a "✓" icon. Now you can use this application for your integrations.
- If it fails, you will be displayed a "!" icon. In that case, please recheck your API Key and Domain or contact support.

---

## Need Help?


If you’re unsure about any field or face connection issues, reach out to our support team at support@appseai.com.

