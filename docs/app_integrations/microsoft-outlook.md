---
title: "Microsoft Outlook"
slug : /app-integrations/microsoft-outlook/
---

**Microsoft Outlook** is a widely used email and calendar service from Microsoft that helps individuals and organizations manage emails, schedules, and communication efficiently. It is commonly used as part of Microsoft 365 for business and enterprise communication.

This guide walks you through the process of integrating **Microsoft OAuth 2.0 credentials** with Appse AI for Outlook, enabling secure access to mailboxes and related Outlook features for both admin and non-admin users.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Setup Credential

### 1. Choose Your Account

<div className="boxed-tabs">

Start by selecting the **Microsoft account or organization** you want to connect with Appse AI.

<img src="\img\credentials\microsoft-outlook\choose-account.png" alt="APPSeAI microsoft outlook choose account" width="700"/>

<br/><br/>

### 2. Grant Permission to Appse AI

Based on whether the selected Microsoft account has **admin privileges**, the authorization flow will differ.

<Tabs>
  <TabItem value="admin" label="For Admin Accounts" default>

If the selected account is an **admin account**:

- The admin will be prompted to grant consent for Appse AI to access the required **Microsoft Graph permissions**.
- Once consent is granted, Appse AI will be authorized at the organization level.
- Both admin and non-admin users can now connect Outlook without additional approval.

<img src="\img\credentials\microsoft-outlook\admin-grants-permissions.png" alt="appse ai microsoft outlook admin grants permissions" width="700"/>

After acceptance, the Outlook account is successfully connected and ready to be used in Appse AI workflows.

  </TabItem>

  <TabItem value="non-admin" label="For Non-Admin Accounts">

If the selected account is a **non-admin account**:

- The user will be blocked from completing the connection if admin consent has not been granted.
- A message will inform the user that **admin approval is required**.

<img src="\img\credentials\microsoft-outlook\non-admin-user-alert.png" alt="appse ai microsoft outlook non admin users alert" width="300"/>

##### Admin Consent for Non-Admin Accounts

To allow non-admin users to connect their Outlook account:

- An **organization admin** must log in to Appse AI.
- The admin must connect their **Microsoft Outlook account** and grant the required permissions.
- Once admin consent is granted, non-admin users can connect without further approval.

  </TabItem>
</Tabs>

</div>

:::tip

- **Non-Admin Access Issue**:  
  If a non-admin user cannot connect Outlook, ensure that an organization admin has already granted consent for the required Microsoft Graph permissions.
:::

## Conclusion

This Microsoft Outlook OAuth 2.0 integration ensures secure, organization-aware authentication within Appse AI. By leveraging Microsoft’s consent framework, both admin and non-admin users can safely connect Outlook accounts while maintaining proper permission control and compliance.

---

For any issues or queries regarding **Microsoft Outlook credentials**, feel free to reach out to **hello@appse.ai**
