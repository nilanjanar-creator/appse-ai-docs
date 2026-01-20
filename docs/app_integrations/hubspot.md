---
title: "HubSpot"
slug : /app-integrations/hubspot/
---

**HubSpot CRM** is a cloud-based customer relationship management platform that helps businesses manage leads, track interactions, and grow customer relationships efficiently. It provides a unified space for sales, marketing, and support teams to collaborate and stay aligned.

## Set Up Credential

Before you can set up your HubSpot credential in **appse ai**, you need to have a **HubSpot Developer Account**.

This account gives you access to the **HubSpot Developer Dashboard**, where you can create and manage apps, generate the `Client ID` and `Client Secret`, and configure authorization settings required for connecting HubSpot with appse ai.


### 1. Sign In / Create an account in HubSpot

   Sign in or create a HubSpot account using your email address.  
   [https://app.hubspot.com/login](https://app.hubspot.com/login)

<img src="\img\credentials\hubspot\write-email.png" alt="write email screen" width="700"/>

### 2. Enter Password

   Type in the password for your HubSpot account.  

<img src="\img\credentials\hubspot\set-password.png" alt="set password screen" width="700"/>

### 3. Enter Verification code

   Enter the verification code sent to your email.

<img src="\img\credentials\hubspot\enter-verification-code.png" alt="enter verification code screen" width="700"/>
   

### 4. Click on ‘Create App’

   After logging in to your HubSpot account, click on ‘Create App’.  

<img src="\img\credentials\hubspot\click-on-create-app.png" alt="click on create app button" width="700"/>

### 5. Write the Public App name

   Enter a name for your public app.

<img src="\img\credentials\hubspot\write-public-app-name.png" alt="write public app name" width="700"/>

### 6. Auth Settings

   Go to the Auth settings

<img src="\img\credentials\hubspot\go-to-auth.png" alt="go to auth settings screen" width="700"/>

### 7. Redirect URL

   You need to add the Redirect URL. For this, go back to your HubSpot credential form in appse ai and look for the Redirect URL.  
   (If you don’t know how to add a credential in appse ai, refer to the documentation on how to  [add a credential](https://docs.appse.ai/platform/key-concepts/credentials/add-a-credential) )   

<img src="\img\credentials\hubspot\redirect-url.png" alt="redirect url screen" width="500"/>

   Copy it and paste it in the Redirect URL field in HubSpot.

<img src="\img\credentials\hubspot\add-redirect-url.png" alt="add redirect url screen" width="700"/>

### 8. Scope 

You need to ensure that these scopes are added to the HubSpot to connect the credentials.

<img src="\img\credentials\hubspot\add-new-scope.png" alt="add new scope screen" width="700"/>

#### Scopes to select 

`crm.objects.companies.read` `crm.objects.companies.write` `crm.objects.contacts.read` `crm.objects.contacts.write` `crm.objects.deals.read` `crm.objects.deals.write` `crm.objects.line_items.read` `crm.objects.line_items.write` `oauth`

### 9. Create app

   After setting the scopes correctly, click on ‘Create App’.

<img src="\img\credentials\hubspot\now-create-app.png" alt="now create app screen" width="700"/>
     
   

### 10. App created

A confirmation message will appear, indicating that your app has been created successfully.

<img src="\img\credentials\hubspot\success-toaster.png" alt="success toaster" width="700"/>

### 11. Copy the credentials

Go to Auth, copy the ‘Client ID’ and ‘Client Secret’ from HubSpot.

<img src="\img\credentials\hubspot\copy-credentials.png" alt="copy credentials screen" width="700"/>

### 12. Setting credentials in appse ai

Go back to the Credentials page of appse ai [https://reimagine.insync.pro/credentials](https://reimagine.insync.pro/credentials)

Paste ‘Client ID’ and ‘Client Secret’ in their respective fields.

<img src="\img\credentials\hubspot\client-id.png" alt="client ID screen" width="700"/>

<img src="\img\credentials\hubspot\client-secret.png" alt="client secret screen" width="700"/>

### 13. Save & Authorize

Click on **‘Save & Authorize’** to connect your credentials. After this, if you have multiple accounts, a list will appear — select the account you want to connect to and continue.

(Note: Developer accounts cannot be used to authorize HubSpot credentials for your app, as they are meant for app development and testing only. Please select a live HubSpot account to complete the connection.)

<img src="\img\credentials\hubspot\select-live-app.png" alt="select live app screen" width="700"/>

### 14. Connect App

Click on Connect App to connect the credential.

<img src="\img\credentials\hubspot\connect-app.png" alt="connect app screen" width="700"/>

---

## Support

Need help? Contact our support team at hello@appse.ai