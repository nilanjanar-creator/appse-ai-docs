---
title: "SAP S4Hana"
slug : /app-integrations/sap-s4hana-cloud
---

SAP S/4HANA is a cloud-based ERP system designed to help businesses manage their core operations, such as finance, procurement, manufacturing, supply chain, and sales on a single integrated platform. It enables organizations to streamline processes, improve efficiency, and make data-driven decisions with real-time insights.

## Key Features:
- Real-time Data Processing: Leverages SAP S/4HANA’s in-memory computing to deliver instant insights and faster transaction processing.
- Finance & Accounting Management: Automates financial operations such as reporting, forecasting, and reconciliation with enhanced accuracy.
- Supply Chain & Inventory Management: Optimizes planning, procurement, production, and logistics with end-to-end visibility.
- Sales & Order Management: Manages customer orders, pricing, billing, and fulfillment seamlessly across the sales cycle.
- Manufacturing & Production Planning: Supports complex production workflows with integrated scheduling, resource planning, and shop-floor control.
- Integrations: Connects smoothly with other SAP modules and external systems for a unified business ecosystem.

## Set Credential

1. To get started with SAP S/4HANA, you need to set up your credentials. Click **Select a credential** to create a new SAP S/4HANA credential.
<img src="\img\credentials\sap-s4hana\create-a-new-credential.png" alt="create a new credential screen" width="700"/>

2. This will open a credential configuration pop-up.
<img src="\img\credentials\sap-s4hana\configure-credential.png" alt="configure credential screen" width="400"/>

3. To find your Tenant ID, log in to your SAP S/4HANA Cloud account. After logging in, check the URL bar, your Tenant ID appears between https:// and -api.s4hana.cloud.sap.
<img src="\img\credentials\sap-s4hana\tenant-id.png" alt="tenant id screen" width="700"/>

4. Copy the Tenant ID and paste it into the Tenant ID field in the SAP S/4HANA credential form in Appse AI.

:::note

Only enter the portion between https:// and -api.s4hana.cloud.sap

:::

<img src="\img\credentials\sap-s4hana\tenant-id-appse-ai.png" alt="tenant id appse ai screen" width="700"/>

5. Next, to find your Communication Username, search for “Maintain Communication Users” in SAP S/4HANA.
<img src="\img\credentials\sap-s4hana\search-maintain-communication-users.png" alt="search maintain communication users screen" width="700"/>

6. Open the Maintain Communication Users section to view the list of existing communication users.

7. Click the user you want to use. You will see the User Name and Password.
<img src="\img\credentials\sap-s4hana\username-password.png" alt="username password screen" width="700"/>

8. Copy these values and paste them into the credential form in Appse AI. Now, you can save to configure your credentials.
<img src="\img\credentials\sap-s4hana\save-and-configure-credentials.png" alt="save and configure screen" width="400"/>

## Support

Need help? Contact our support team at hello@appse.ai
