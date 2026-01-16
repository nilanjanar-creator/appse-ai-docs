---
title: "Microsoft Teams"
slug : /app-integrations/microsoft-teams/
---

**Microsoft Teams** is a collaboration platform that integrates workplace chat, meetings, file storage, and application integration. It allows teams to communicate and collaborate effectively, making it a central hub for teamwork within organizations.

This guide walks you through the process of integrating Microsoft OAuth 2.0 credentials with Appse AI, enabling seamless login and permission management for both admin and non-admin users.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Setup Credential


### 1. Choose Your Account

<div className="boxed-tabs">

First up you will be selecting the organization you want to connect.

<img src="\img\credentials\microsoft-teams\choose-account.png" alt="APPSeAI microsoft teams choose account" width="700"/>

<br/><br/>

### 2. Grant permission to appse ai

Based on whether your account has admin access to the organization your email ID is a part of the next steps may differ.

<Tabs>
  <TabItem value="admin" label="For Admin Accounts" default>

If the account you selected was an **admin account** then:

- The user will be prompted to consent to granting appse ai bot access to the required permissions.
- Once the admin grants consent, the Microsoft account will be successfully connected to Appse AI, and the user will be able to proceed.

<img src="\img\credentials\microsoft-teams\admin-grants-permissions.png" alt="appse ai microsoft teams admin grants permissions" width="700"/>

Once accepted, the app is connected, and the admin can access the features enabled by these permissions.

  </TabItem>
  <TabItem value="non-admin" label="For Non-Admin Accounts">

If the account you selected was a **non-admin account** then:

- When a non-admin user tries to log in and connect their Microsoft Teams credentials, they will not be able to connect without prior consent from an admin.

<img src="\img\credentials\microsoft-teams\non-admin-user-alert.png" alt="appse ai microsoft teams non admin users alert" width="300"/>

- A message will prompt the non-admin user to reach out to their **organization's admin** to grant consent for the required permissions.

##### Admin Consent for Non-Admin Accounts
To allow non-admin users to connect, the organization's **admin** must grant consent for the app to access the necessary permissions:

- The admin can do this by logging into appse ai and connecting their **Teams account**.
- After the admin grants consent, the non-admin user will be able to connect their Teams account without needing further approval.

</TabItem>
</Tabs>

</div>

:::tip

- **Non-Admin User Access**: If a non-admin cannot connect, verify that the admin has provided consent for the necessary permissions as described above.
:::

## Conclusion
This OAuth 2.0 integration ensures that both admin and non-admin users can securely connect their Microsoft accounts to appse ai, with proper permission management through the consent flow.

---

For any issues or queries regarding Microsoft Credentials, feel free to reach out to hello@appseai.com

## Support

Need help? Contact our support team at hello@appse.ai