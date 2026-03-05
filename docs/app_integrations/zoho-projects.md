---
title: "Zoho Projects"
description: Step-by-step guide to set up Zoho Projects credentials for appse.ai integration
slug: /app-integrations/zoho-projects/
---
Zoho Projects is a cloud-based project management software that helps teams plan, track, and collaborate on projects. It enables organizations to manage tasks, milestones, resources, and timesheets in a unified platform with powerful collaboration tools.

---
### Key Features:
- **Task Management**: Create, assign, and track tasks with dependencies and priorities.
- **Gantt Charts**: Visualize project timelines and dependencies.
- **Time Tracking**: Monitor time spent on tasks and generate timesheets.
- **Collaboration**: Share documents, communicate via forums, and collaborate in real-time.
- **Issue Tracking**: Track and resolve bugs and issues efficiently.
- **Reports and Analytics**: Generate detailed reports on project progress and resource utilization.
- **Integrations**: Connect seamlessly with other Zoho apps and third-party tools.

## Set Credential

To get started with Zoho Projects, you need to set credentials for it. Click on 'Select a credential' to create a new credential.

<img src="\img\credentials\zoho-projects\create_a_new_credential.png" alt="create a new credential screen" width="700"/>

The credential popup will open with various options.

### Regional Configuration

**Select Authorization URL, Token URL and Base URL based on your Zoho Account region:**
<img src="\img\credentials\zoho-projects\authorization_url.png" alt="authorize url" width="700"/>
Choose all URLs (Authorization URL, Token URL, and Base URL) from the same Region, to ensure the API works perfectly. 

After you choose these URLs using dropdowns, you can finally go to find the Client ID and Client Secret. 

<img src="\img\credentials\zoho-projects\credential_form.png" alt="credential form" width="700"/>

## How to Get Client ID and Client Secret

### Step 1: Access Zoho Projects
Sign in to your [Zoho Projects account](https://accounts.zoho.com/signin?servicename=ZohoProjects) (or use your region’s Zoho Accounts domain, such as `accounts.zoho.eu`, `accounts.zoho.in`, etc.).

<img src="\img\credentials\zoho-projects\sign_in.png" alt="sign in" width="700"/>

Or create an account if you don't have one:

<img src="\img\credentials\zoho-projects\fill_in_your_details.png" alt="fill in your details" width="700"/>

### Step 2: Complete Setup
After signing in, complete your Zoho Projects setup by entering your organization details in the Zoho Projects onboarding screen. Typically, you will need to provide:
- **Organization Name** (for example, your company or team name)
- **Organization URL/Domain** (if requested)
- **Time Zone and Locale** so project dates and times are accurate
- Any additional basic profile information Zoho requires to create your workspace

### Step 3: Access Developer Console
Click on the [link](https://accounts.zoho.com/signin?servicename=AaaServer&context=&serviceurl=https%3A%2F%2Fapi-console.zoho.com%2F) to access the Zoho Developer's Console:

Alternatively, you can:

1. Go to Zoho Projects' [Documentation](https://www.zoho.com/projects/help/rest-api/zohoprojectsapi.html)
2. Find OAuth Authentication in the API documentation
3. Click on the Zoho Developer Console link

<img src="\img\credentials\zoho-projects\click_on_zoho_developer_console.png" alt="click on Zoho developer console" width="700"/>

### Step 4: Sign In to Developer Console
Sign in with the same account you used to create a Zoho Projects account:

<img src="\img\credentials\zoho-projects\sign_in.png" alt="sign in with your details" width="700"/>

### Step 5: Get Started
Click on 'Get started':

<img src="\img\credentials\zoho-projects\get_started.png" alt="get started" width="700"/>

### Step 6: Choose Client Type
Select 'Server-based applications':

<img src="\img\credentials\zoho-projects\choose_a_client_type.png" alt="server based applications" width="700"/>

### Step 7: Configure Application
1. Write 'App name' and 'Homepage URL'
2. Copy 'Callback API URL' from appse.ai's Zoho Projects credential form
3. Paste it in 'Authorized Redirect URIs'
4. Click 'Create' after filling in all fields

<img src="\img\credentials\zoho-projects\callback_url.png" alt="callback URL" width="700"/>
<img src="\img\credentials\zoho-projects\create_new_client.png" alt="create new client" width="700"/>

### Step 8: Copy Credentials
Copy 'Client ID' and 'Client secret':

<img src="\img\credentials\zoho-projects\copy_client_id_secret.png" alt="copy client id and secret" width="700"/>

### Step 9: Paste Credentials
Paste the credentials in appse.ai's Zoho Projects credential form:

<img src="\img\credentials\zoho-projects\paste_client_id_secret.png" alt="paste client id and client secret" width="700"/>

### Step 10: Configure Multi-Data Center Settings
Go to settings and make sure to select the checkbox for 'Use the same OAuth credentials for all data centers':

<img src="/img/credentials/zoho-projects/select_all.png" alt="select all" width="700"/>

Click on 'Ok' to use the same credentials for all data centers:

<img src="/img/credentials/zoho-projects/ok_multi_dc.png" alt="ok multi dc" width="700"/>

## Final Authorization

### Step 11: Save and Authorize
Go to appse.ai's [credential page](https://workflow.appse.ai/credentials) and select Zoho Projects' credential. Click on 'Save & Authorise' to continue:

<img src="/img/credentials/zoho-projects/save_authorise.png" alt="save & authorize" width="700"/>

### Step 12: Grant Permissions
Select the checkbox to allow your app to access the following data from your Zoho account:

<img src="/img/credentials/zoho-projects/accept_allow.png" alt="accept & allow" width="700"/>

## Completion

If you followed all the steps correctly, your Zoho Projects credential should be successfully saved.

---

## Triggers and Actions

Every application has a pre-defined set of triggers and actions that allow users to perform application specific activities within the platform. Here is a list of all the actions and triggers available:

### Actions

> Projects Actions

- Get Projects
- Get a Project
- Create a Project
- Update a Project

> Tasks Actions

- Get Tasks
- Get a Task
- Create a Task
- Update a Task

> Milestones Actions

- Get Milestones
- Get a Milestone
- Create a Milestone
- Update a Milestone

> Users Actions

- Get Users
- Get a User

---

## Need Help?

If you're unsure about any field or face connection issues, reach out to our support team at hello@appse.ai
