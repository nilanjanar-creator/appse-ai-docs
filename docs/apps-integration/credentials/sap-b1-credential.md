---
title: "SAP B1 Credential"
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
   - You should see page titled - **System Landscape Directory**

2. Locate the base URL used to access the Service Layer API. Go to _Services_ → _Service Layer_
<img src="/img/credentials/sap-b1-cred-host-url.png" alt="APPSeAI SAP Business One Credentials Url and Port" />
   - It will look something like: **https://insync.pro**

3. Check the configured port, commonly **50000**.
> *Example*:
> - **Host URL**: `https://insync.pro`
> - **Port**: `50000`

> *Tip*: If you want to access the System Landscape Directory(SLD) via Web Browser. Use the URL format below:
- **URL Format**: http://[sld-server]:[port]/sld
- **Default Port**: Usually 50000 (HTTP) or 50001 (HTTPS)
- **Example**: _http://sldserver.company.com:50000/sld_
---

### 3. Find Your Company DB Name

1. In the same **System Landscape Directory**
2. Go to _DB Instances and Companies_ → Click on Your Server Name
<img src="/img/credentials/sap-b1-cred-db-name.png" alt="APPSeAI SAP Business One Credentials DB Instances and Companies" />

3. Copy the **Schema Name**, this is your `Database Name`

<img src="/img/credentials/sap-b1-cred-db-name2.png" alt="APPSeAI SAP Business One Credentials Database Name" />

---

### 4. Get Your Username and Password
<img src="/img/credentials/sap-b1-credentials.png" alt="APPSeAI SAP Business One Credentials" width="602" height="306" />

1. Use your **SAP B1 login credentials**.
2. Make sure the user has sufficient API permissions for integration.

---

## Test Your Credential

Once you've filled out the form with the above values, it should look something like this:

<img src="/img/credentials/sap-b1.png" alt="APPSeAI SAP Business One Configuration Screen" width="487" height="525" />

Click the **"Save"** button to store validate your inputs.

- If successful, your SAP B1 connection will be established.
- If not, please double-check the credentials or consult your administrator.

---

## Need Help?

If you’re unsure about any field or face connection issues, reach out to our support team at [support@appseai.com](mailto:support@appseai.com).

---