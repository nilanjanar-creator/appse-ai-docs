---
title: "Shopify"
slug : /app-integrations/shopify/
---

Shopify is a powerful e-commerce platform that enables businesses to build, customize, and manage their online stores with ease. With appse ai, you can connect your Shopify account to automate key operations such as order management, customer data synchronization, and product updates. This integration helps streamline your e-commerce workflows, reduce manual effort, and ensure that your online store runs efficiently across all connected systems.

---

## Setup Credential

Follow the steps below to quickly set up your Shopify credential.

### Required Fields

You’ll be asked to fill in the following details:

| Field       | Description                                  |
|-------------|----------------------------------------------|
| Connection name   | A name to help you identify this connection.  |
| Store Subdomain        | Your shopify store ID |
| Admin API Access Token    | Create a custom app in order to obtain this.  |

First things first - Log in to your [Shopify account](https://accounts.shopify.com/select?rid=539d146c-195f-4011-97ab-fe776d9c0e58). Then follow the Step-by-step guide.

## Step-by-Step Guide

### Find your Store Subdomain

<img src="\img\credentials\shopify\settings.png" alt="appse ai Shopify Settings" width="700"/>

Go to settings, and under your store name, you will find your Shopify store subdomain.


<img src="\img\credentials\shopify\store-id.png" alt="appse ai shopify store id" width="700"/>

> `For example`: If your Shopify Subdomain looks like “5bazzn-ja.myshopify.com”, you only need to paste 5bazzn-ja in the credential form.

### Find your Admin API access token

<img src="\img\credentials\shopify\develop-apps.png" alt="appse ai shopify develop apps" width="700"/>

In the settings section, navigate to “Apps and Sales Channels” and then “Develop Apps”.

#### Enable Custom Legacy app button

<img src="\img\credentials\shopify\allow-legacy-custom-app-development.png" alt="appse ai allow custom legacy apps shopify" width="400"/>

<img src="\img\credentials\shopify\allow-legacy-custom-app-development-2.png" alt="appse ai allow custom legacy app development shopify 2" width="400"/>

Click on “Allow custom legacy app development” then click on “Allow custom app development”.

<img src="\img\credentials\shopify\allow-legacy-custom-app-development-3.png" alt="appse ai allow custom legacy app development shopify 3" width="400"/>

<img src="\img\credentials\shopify\create-legacy-app.png" alt="appse ai shopify create legacy app" width="400"/>

You should see a “Create a custom legacy app” button, click on it.

### Create app

<img src="\img\credentials\shopify\create-app-name.png" alt="appse ai shopify create app name" width="700"/>

Set up a name for your custom app and click on the “Create app button”.

### Configure Scopes

<img src="\img\credentials\shopify\choose-scopes-button.png" alt="appse ai shopify choose scopes button" width="700"/>

Click on Configure Admin API scopes and tick off the scopes mentioned below:

`read_all_orders`  `read_customers`  `write_customers`  `read_fulfillments`  `write_fulfillments`  `read_inventory`  `write_inventory`  `read_locations`  `write_locations`  `read_orders`  `write_orders`  `read_products`  `write_products`  `read_publications`  `write_publications`  `read_discounts`  `write_discounts`  `read_shipping`  `write_shipping`

<img src="\img\credentials\shopify\choose-scopes.png" alt="appse ai shopify choose scopes" width="700"/>

Once you have all the scopes selected, click “Save”.

### Install App

<img src="\img\credentials\shopify\install-app.png" alt="appse ai shopify install app" width="700"/>

Return to the Overview tab and click on the “Install” button.

### Find Admin API Access token

<img src="\img\credentials\shopify\admin-api-access-token.png" alt="appse ai shopify admin api access token" width="700"/>

In the API credentials tab, you will have your Admin API Access Token.

Click on the “reveal token once button”. Copy the token and store it somewhere secure; you will not be able to see it again.

> `Note`: The Admin API access token is shown only once. If you lost, you will have to create a custom app again.

### Add the fields to appse ai

Add Store Subdomain and Admin API access token in appse ai. And click on the “save” button.

If you followed all the steps correctly, your credential should be connected.

---

Need help? Contact our support team at hello@appse.ai
