---
title: "Zoho Desk"
slug : /app-integrations/zoho-desk/
---
Zoho Desk is a cloud-based customer service software that helps businesses manage customer support tickets, automate workflows, and deliver exceptional customer experiences. It enables companies to streamline their customer support operations on a unified platform.

### Key Features:
- **Ticket Management**: Track and manage customer support tickets efficiently.
- **Multi-Channel Support**: Handle customer inquiries from email, phone, chat, social media, and more.
- **Automation**: Automate repetitive tasks and workflows to improve efficiency.
- **Knowledge Base**: Create self-service resources for customers.
- **Reports and Analytics**: Gain insights into support team performance and customer satisfaction.
- **Integrations**: Connect seamlessly with other Zoho apps and third-party tools.

## Set Credential

To get started with Zoho Desk, you need to set credentials for it. Click on 'Select a credential' to create a new credential.

<img src="\img\credentials\zoho-desk\create_a_new_credential.png" alt="create a new credential screen" width="700"/>

The credential popup will open with various options

### Regional Configuration

**Select Authorization URL, Token URL and Base URL based on your Zoho Account region:**
<img src="\img\credentials\zoho-desk\authorization_url.png" alt="authorize url" width="700"/>
 
Choose all Authorization URLs from the same Region, to ensure the API works perfectly. 

After you choose these URLs using dropdowns, you can finally go to find the Client ID and Client Secret. 

<img src="\img\credentials\zoho-desk\credential_form.png" alt="credential form" width="700"/>

## How to Get Client ID and Client Secret

### Step 1: Access Zoho Desk
Sign in to your [Zoho Desk account](https://desk.zoho.com/login)

<img src="\img\credentials\zoho-desk\sign_in.png" alt="sign in" width="700"/>

Or create an account if you don't have one:

<img src="\img\credentials\zoho-desk\fill_in_your_details.png" alt="fill in your details" width="700"/>

### Step 2: Complete Setup
After signing in, complete your Zoho Desk setup with your organization details:

### Step 3: Access Developer Console
Click on the [link](https://accounts.zoho.com/signin?servicename=AaaServer&context=&serviceurl=https%3A%2F%2Fapi-console.zoho.com%2F) to access the Zoho Developer's Console:

Alternatively, you can:

1. Go to Zoho Desk's [Documentation](https://desk.zoho.com/DeskAPIDocument)
2. Find OAuth Authentication in the API documentation
3. Click on the Zoho Developer Console link

<img src="\img\credentials\zoho-desk\click_on_zoho_developer_console.png" alt="click on Zoho developer console" width="700"/>

### Step 4: Sign In to Developer Console
Sign in with the same account you used to create a Zoho Desk account:

<img src="\img\credentials\zoho-desk\sign_in_with_your_details.png" alt="sign in with your details" width="700"/>

### Step 5: Get Started
Click on 'Get started':

<img src="\img\credentials\zoho-desk\get_started.png" alt="get started" width="700"/>

### Step 6: Choose Client Type
Select 'Server-based applications':

<img src="\img\credentials\zoho-desk\choose_a_client_type.png" alt="server based applications" width="700"/>

### Step 7: Configure Application
1. Write 'App name' and 'Homepage URL'
2. Copy 'Callback API URL' from appse.ai's Zoho Desk credential form
3. Paste it in 'Authorized Redirect URIs'
4. Click 'Create' after filling in all fields

<img src="\img\credentials\zoho-desk\callback_url.png" alt="call back url" width="700"/>
<img src="\img\credentials\zoho-desk\create_new_client.png" alt="create new client" width="700"/>

### Step 8: Copy Credentials
Copy 'Client ID' and 'Client secret':

<img src="\img\credentials\zoho-desk\copy_client_id_secret.png" alt="copy client id and secret" width="700"/>

### Step 9: Paste Credentials
Paste the credentials in appse.ai's Zoho Desk credential form:

<img src="\img\credentials\zoho-desk\paste_client_id_secret.png" alt="paste client id and client secret" width="700"/>

### Step 10: Configure Multi-Data Center Settings
Go to settings and make sure to select the checkbox for 'Use the same OAuth credentials for all data centers':

<img src="\img\credentials\zoho-desk\select_all.png" alt="select all" width="700"/>

Click on 'Ok' to use the same credentials for all data centers:

<img src="\img\credentials\zoho-desk\ok_multi_dc.png" alt="ok multi dc" width="700"/>

## Final Authorization

### Step 11: Save and Authorize
Go to appse.ai's [credential page](https://workflow.appse.ai/credentials) and select Zoho Desk's credential. Click on 'Save & Authorise' to continue:

<img src="\img\credentials\zoho-desk\save_authorise.png" alt="save & authorize" width="700"/>

### Step 12: Grant Permissions
Select the checkbox to allow your app to access the following data from your Zoho account:

<img src="\img\credentials\zoho-desk\accept_allow.png" alt="accept & allow" width="700"/>

## Completion

If you followed all the steps correctly, your Zoho Desk credential should be successfully saved.

---

## Triggers and Actions

Every application has a pre-defined set of triggers and actions that allow users to perform application specific activities within the platform. Here is a list of all the actions and triggers available:

### Actions

> Tickets Actions

- Get Tickets
- Get a Ticket
- Create a Ticket
- Update a Ticket

> Departments Actions

- Get Departments
- Get a Department

> Agents Actions

- Get Agents
- Get an Agent

---

## Need Help?

If you're unsure about any field or face connection issues, reach out to our support team at hello@appse.ai
