---
title: "Dynamics 365 Finance and Operations"
description: "Step-by-step guide to set up Dynamics 365 Finance and Operations credentials for Appse.ai integration"
slug: /app-integrations/d365fo/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Microsoft Dynamics 365 Finance and Operations helps organizations manage finance, supply chain, and core business processes in one integrated system. It provides real-time visibility, stronger control, and scalable operations across business functions. This guide explains how to configure credentials in Appse.ai using the available authentication options.

## Setup Credential
Follow the steps below to quickly set up your Dynamics 365 Finance and Operations credential.

## Required Fields
You’ll be asked to fill in the following details:

| Field | Description | Applies To |
|------|-------------|------------|
| Environment Name | If your D365FO login URL is, for example: `https://testenv.operations.dynamics.com/data`, then enter `testenv` in this field | Production / Sandbox |
| Environment Name | If your D365 Finance & Operations login URL is, for example: `https://usnconeboxax1aos.cloud.onebox.dynamics.com`, enter `usnconeboxax1aos` in this field | OneBox (Developer VM) |
| Tenant Id | Microsoft Entra ID | Tenant ID |

## Authentication Methods

<Tabs>
<TabItem value="envchoice" label="Environment Choice">

#### Step 1: Choose Environment Type
<img src="\img\credentials\dynamics-365-finance-and-operations\credentialchoice.png" alt="choice" width="500"/>
#### Step 2: Add Connection Name
Enter a **Connection Name** to help you identify this Dynamics 365 Finance and Operations Production or Sandbox credential within Appse.ai.

#### Step 3: Enter Environment Name

If your D365FO login URL is, for example:  
`https://testenv.operations.dynamics.com/data`, enter `testenv`.

The prefix `https://` and suffix `.operations.dynamics.com` are automatically applied by Appse.ai.

If your D365FO login URL is, for example:  
`https://testenv.operations.dynamics.com/data`, enter `testenv`.

The prefix `https://` and suffix `.operations.dynamics.com` are automatically applied by Appse.ai.

:::note
The base URL and API access scope are automatically generated using the environment name you provide.
:::

</TabItem>

<TabItem value="prod" label="Production / Sandbox" default>

#### Step 1: Add Connection Name
Enter a **Connection Name** to help you identify this Dynamics 365 Finance and Operations Production or Sandbox credential within Appse.ai.

#### Step 2: Enter Environment Name
Enter the **Environment Name** portion of your Dynamics 365 Finance and Operations Production or Sandbox URL.

If your D365FO login URL is, for example:  
`https://testenv.operations.dynamics.com/data`, enter `testenv`.

:::note
The base URL and API access scope are automatically generated using the environment name you provide.
:::

<img src="\img\credentials\dynamics-365-finance-and-operations\credential.png" alt="credential" width="500"/>

#### Save Your Credential
Click **Save & Authorize** to complete the setup.

- ✓ **Success:** The credential is saved and automatically verified by Appse.ai.  
- ! **Failure:** Verify that the environment name matches your Production or Sandbox URL and try again.

</TabItem>
</Tabs>

## Troubleshooting

- **Credential verification fails:**  
  Ensure the environment name entered matches the subdomain of the corresponding Dynamics 365 Finance and Operations URL for the selected credential option.

## Frequently Asked Questions

**Do I need to enter the full Dynamics 365 Finance and Operations URL?**  
No. Only the environment name is required. Appse.ai automatically constructs the full base URL.

**Do I need to configure OAuth details manually?**  
No. OAuth 2.0 authorization is handled internally by Appse.ai for both credential options.

## Support

Need help? Contact our support team at hello@appse.ai