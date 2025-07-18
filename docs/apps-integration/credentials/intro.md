---
title: "Credentials"
slug : /credentials
sidebar_position: 2.1
---

In APPSe AI, credentials are the secure connection details that enable your automations to interact with external applications. As an integration platform (iPaaS), APPSe AI leverages these credentials to facilitate seamless data flow between various systems — whether it’s your AI, ERP, CRM, eCommerce, or other apps.

Properly configured credentials are essential for building robust and reliable process flows within your automation pipeline.

---
## How to Create a Credential

To create a new credential in APPSe AI, follow these simple steps:

1. **Click the "Add Credential" button** located in the Credentials section.
<img src="\img\credentials\credentials-start-button.png" alt="Credentials Start Button" width="700"/>
---
2. **Select the Application** you want to connect to (e.g., Shopify, SAP B1, Salesforce).
<img src="\img\credentials\credentials-select-app.png" alt="Credentials Select App" width="700"/>
---
3. **Choose the Authentication Type** offered by the application — for example, OAuth 2.0, Basic Auth, API Key, etc.
<img src="\img\credentials\credentials-authentication-types.png" alt="Credentials Authentication Types" width="700"/>
---
4. Once selected, **Dynamic Fields will appear** based on the authentication method chosen. Enter the required details.
<img src="\img\credentials\credentials-configuration-screen.png" alt="Credentials Configuration Screen" width="700"/>
---
5. Click **Save**. You should see your credential on top of the listing screen. 
<img src="\img\credentials\credentials-in-listing-screen.png" alt="credentials in Listing Screen" width="700"/>

> ⚙️ The platform will automatically **validate** the credentials before saving. If the connection is successful, the credential will be securely stored and available for use in your process flows.
---
### Post-Creation Actions

After creating a credential, you can perform the following actions:

- **Edit**: Modify the existing credential details and revalidate them.
- **Rename**: Change only the **Connection Name** (this does not trigger any validation).
- **Delete**: Permanently remove the credential from your workspace.
---
### Credential Status Indicator

Each credential is accompanied by a **status icon** that provides a quick visual cue about its validity:

- **Green Tick Icon**: Indicates that the credential is valid and has passed the latest verification.
- **Red Exclamation Icon**: Signals an issue with the credential — it may be expired, revoked, or misconfigured.
<img src="\img\credentials\credentials-modify-status.png" alt="APPSeAI Credential Modify & Status" width="700"/>

> ✅ To know more about how to configure the credentials for specific applications, check out the applications listed under this section.
---
## Need Help?

If you’re unsure about anything discussed on this page, reach out to our support team at [support@appseai.com](mailto:support@appseai.com).


