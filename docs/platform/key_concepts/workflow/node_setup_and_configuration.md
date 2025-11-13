---
title: Node Setup and Configuration
sidebar_position: 2
description: Learn the basics of all the steps involved in configuring any node.
slug: platform/key-concepts/workflow/node-setup-and-configuration
---

# Node Setup and Configuration

The Node Setup and Configuration guide outlines the process for adding, configuring, and testing nodes in a workflow. It covers selecting a node, configuring credentials and actions, setting necessary parameters, testing the setup, and reviewing the output to ensure everything is set up correctly before proceeding.


## 1. Select the Node
Begin by choosing a node to add to your workflow. This can be an app or an action. The available nodes are categorized for easy navigation. You can find the most popular apps and actions at the top, like SAP, Zoho CRM, Google Sheets, etc.

<img src="\img\platform\key-concepts\workflow\node-setup-and-configuration\selection-screen.jpeg" alt="appse ai selection screen" width="700"/>

---

## 2. Select Credentials and Actions
After selecting a node, you need to configure it with the appropriate credentials and actions.
- Choose the account to use for the selected app (e.g., SAP Business One account).
- Select the action event for the node, such as creating a new item or fetching data.

<img src="\img\platform\key-concepts\workflow\node-setup-and-configuration\credential-screen-selected.jpeg" alt="appse ai credentials screen" width="700"/>

---

## 3. Configure the Node
Configure the selected action by setting necessary parameters and options.
- Provide filters or limits for the data you need (e.g., limit the number of records, specify date/time filters).
- You can also select specific fields that you want to fetch (e.g., ItemCode, ItemName, etc.).

<img src="\img\platform\key-concepts\workflow\node-setup-and-configuration\configure-screen.jpeg" alt="appse ai configure screen" width="700"/>

---

## 4. Run Step
After configuring the node, you can manually trigger the action to test if everything is set up correctly.
- If the test is successful, you'll see the output and can move on to the next step in the workflow.

<img src="\img\platform\key-concepts\workflow\node-setup-and-configuration\output-screen.jpeg" alt="appse ai output screen" width="700"/>

---

## 5. View Output and Continue
Once the action has run, you'll see the output in a table format with the fetched data (e.g., ItemCode, ItemName).
- If you're satisfied with the results, click "Continue" to finalize the setup.