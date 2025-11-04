---
slug: /platform/key-concepts/nodes/trigger/webhook
title: On Webhook Trigger
position: 4
dscription: Launches a workflow when an external system sends an HTTP request to a specific URL.
---

# On Webhook Node

The **On Webhook** is a trigger node in appse ai. Once configured, this node listens to a specific URL endpoint and automatically triggers the workflow whenever a valid request is received.

## 1. How It Works

When you add the On Webhook node as a trigger in your workflow, **appse ai** automatically creates a unique URL that can receive data from other systems. 

You can use this URL to connect to APIs, web services, or any application capable of sending HTTP requests.

Each incoming request is captured and passed as structured output data to the next node in the workflow, allowing you to automate responses based on that data.


## 2. Credentials

Currently, no authentication options are available to set up the Webhook node. 

## 3. Configuration

The configuration screen includes the following fields:

<img src="\img\platform\key-concepts\nodes\triggers\webhook\webhook-configuration.png" alt="appse ai webhook configuration" width="700"/>


#### a. HTTP Method

Defines which HTTP method your webhook will accept. Commonly used: `POST` for sending data.

#### b. Set Webhook Path

A unique identifier automatically generated for your webhook endpoint. You can edit this path to create a meaningful URL.

<img src="\img\platform\key-concepts\nodes\triggers\webhook\webhook-set-path.png" alt="appse ai webhook set path" width="700"/>

> Example: `order-created`


#### c. Preview URLs

Based on the “Webhook path” field, the URLs will dynamically change. Once set, appse ai provides two types of webhook URLs — **Test** and **Production** — to support different stages of your workflow lifecycle. 

Test URL: appse ai automatically starts listening for a test webhook when you select “Start Listening” or “Run Once” on a workflow that isn’t active. When you trigger this webhook, the incoming data is displayed directly in the Workflow Output area, allowing you to verify the payload structure and integration behavior during setup.

Production URL: A production webhook URL continuously listens for requests when the workflow is activated.

> Note: Data sent to the production URL isn’t displayed in the workflow output area. Instead, you can review production webhook executions in the Execution History.

—

## 4. Listening for Events

When you **run** the webhook node, **appse ai** starts “listening” for incoming HTTP requests on the defined URL.

<img src="\img\platform\key-concepts\nodes\triggers\webhook\webhook-listening.png" alt="appse ai webhook listening" width="700"/>


---

## 5. Output

After a successful request is received, the On Webhook node provides the body sent as output to be used in subsequent workflow nodes.

> **Note:** Ensure your workflow is set to **Active** for the Production URL to work.

### Sending Request via Postman

Here is a postman sample where the previously configured URL is used: `https://webhook.insync.pro/webhooks/test/order-created`

<img src="\img\platform\key-concepts\nodes\triggers\webhook\webhook-postman.png" alt="appse ai webhook postman" width="700"/>


### Generated Output

Calling this URL will generate the following output:

<img src="\img\platform\key-concepts\nodes\triggers\webhook\webhook-output.png" alt="appse ai webhook output" width="700"/>

---