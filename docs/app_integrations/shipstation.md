---
title: "ShipStation"
slug: /app-integrations/shipstation/
---

ShipStation is a multi-carrier, multi-channel shipping solution designed to expedite the shipping process for online retailers. With appse ai, you can connect your ShipStation account to automate order fulfillment, shipment tracking, and inventory management.

## Setup Credential

To connect ShipStation, you need to provide an **API Key** generated from your ShipStation account.

### Required Fields

| Field           | Description                                      |
| --------------- | ------------------------------------------------ |
| Connection name | A name to help you identify this connection.     |
| API Key         | The API key generated from ShipStation Settings. |

<img src="/img/credentials/shipstation/shipstation-credential-modal.png" alt="ShipStation Credential Fields" width="700"/>

### Step-by-Step Guide

1.  **Log in to ShipStation**: Access your ShipStation account at `https://ss.shipstation.com/`.
2.  **Navigate to API Settings**:
    - Click on the **Settings** icon (wrench/gear) in the top right corner.
    - Go to **Account > API Settings**.
3.  **Generate Keys**:

    - Look for the **API Keys** section.

    <img src="/img/credentials/shipstation/shipstation-api-settings.png" alt="ShipStation API Settings" width="700"/>

    - If no keys exist, click **Generate API Keys**.
    - You will see an **API Key** and an **API Secret**. You only need the **API Key** for this connection.

4.  **Connect to appse ai**:
    - Copy the **API Key**.
    - In appse ai, paste it into the **API Key** field.
    - Click **Save**.

---

## Triggers and Actions

Every application has a pre-defined set of triggers and actions that allow users to perform application specific activities within the platform. Here is a list of all the actions and triggers available:

### Triggers

- Fulfillments shipped - Trigger when fulfillments are shipped in ShipStation.
- New fulfillments created - Trigger when new fulfillments are created in ShipStation.
- New shipments created - Trigger when new shipments are created in ShipStation.
- Shipments modified - Trigger when shipments are modified in ShipStation.

### Actions

> Shipment Actions

- Cancel Shipment - Cancel a shipment by its ID. Any associated label must be voided first.
- Create Shipment - Create one or more shipments in ShipStation.
- Get Shipment By External ID - Get a shipment by its external (user-defined) ID.
- Get Shipment By ID - Get an individual shipment by its ShipStation ID.
- Get Shipping Rates - Get shipping rates for a shipment to compare carrier options.

> Fulfillment Actions

- Create Fulfillments - Create one or more fulfillments to mark shipments as shipped with tracking information.

> Inventory Actions

- List All Inventory Locations - Retrieve a list of all inventory locations.
- List Warehouses - Retrieve a list of warehouses associated with the ShipStation account.
- Update SKU Stock Levels - Update SKU stock levels and related properties (increment, decrement, adjust, or modify).

---

## Need Help?

If you’re unsure about any field or face connection issues, reach out to our support team at [hello@appse.ai](mailto:hello@appse.ai)
