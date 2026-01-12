---
title: "HTTP app"
slug : /app-integrations/http/
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# HTTP App


The HTTP App in appse ai allows you to interact with any external API by making HTTP requests directly from your workflow. It’s used whenever you want to send data to an external service, retrieve data, or perform actions through an API—even if that service doesn’t have a dedicated app integration inside appse ai.

This makes the HTTP App a flexible option for connecting with virtually any system that exposes an API.


## What the HTTP App Does


The HTTP App lets you:


- Send requests (GET, POST, PUT, PATCH) to any API.
- Pass data from previous nodes as part of the request body, headers, or query parameters.
- Receive API responses and use them as input for the next node in the workflow.
- Handle custom or advanced API cases where prebuilt nodes don’t meet your requirements.


## Authentication Types


<img src="\img\credentials\http/authentication-types.png" alt="authentication types screen" width="500"/>

In an HTTP app, authentication types ensure secure and authorized communication between your workflow and external services. Here's a brief explanation of the available authentication types:


- **No Auth**: Select this option if the external service doesn't require any authentication to access its APIs. No credentials are needed.
- **OAuth 2.0**: OAuth 2.0 is used for secure access to external services, especially when handling sensitive data. This allows for token-based authentication where the service requests user consent to grant your app access.
- **API Key**: This authentication type utilizes a static key provided by the service. The key is included in API requests to authenticate the user or service.
- **Bearer Token**: A Bearer token is a form of authentication where you provide a token (usually received through OAuth) to authorize API calls.
- **Basic Auth**: Basic Authentication uses a username and password to authenticate API requests, where the credentials are sent (usually encoded) with each request to verify access.


:::note


For any business application, if you want to create an HTTP in appse ai, you need to refer to the official API documentation of that particular application, where you can find all the details related to its supported authentication types and HTTP requests.


:::

### OAuth Authentication
<details>
  <summary><strong>[Credential Setup Example]</strong> for OAuth Authentication</summary>

#### Set Credentials

<img src="\img\credentials\http/oauth2/o-auth-set-credentials.png" alt="o auth set credentials screen" width="500"/>


- HubSpot is one example of an application that supports OAuth 2.0 Authentication, providing you with a reference on how to create an OAuth 2.0-supported HTTP app node for your use in appse ai.


- For the Base API URL, you can refer to the Official API documentation of HubSpot.


- I have used HubSpot credentials for authentication purposes. To fill in the required fields (Authorization URL, Token API URL, Callback URL, and Scope), please refer to the HubSpot Credential Documentation for detailed instructions on how to properly configure the OAuth settings.


- Once you have filled in the fields according to the documentation, click **Save & Authorize** to connect your HubSpot account to the workflow securely.


- To proceed, select the action event from the dropdown. This is gonna be one of the HTTP Methods discussed with an example in the next tabs.

</details>

#### Request Examples

<Tabs>
  <TabItem value="GET" label="GET">
<img src="\img\credentials\http/oauth2/get/o-auth-get-method.png" alt="o auth get method" width="500"/>


#### Configure


##### URL Path


<img src="\img\credentials\http/oauth2/get/o-auth-get-url-path.png" alt="o auth get path" width="500"/>


The URL Path identifies the endpoint of the application that you are trying to access or modify.


You can find the URL path details in the HubSpot Developer’s documentation. The URL path shown in the examples below is specific to one HubSpot object, i.e., a contact. However, if you want to work with a different object (such as companies, deals, etc.), simply refer to the API documentation link provided.


When using the HTTP app, the final request URL is made up of two parts:


1. **Base URL**  
   This is saved in your credentials.
2. **URL Path**  
   This is entered inside the HTTP node.


Together, they form the complete API request URL.


Here we are using HubSpot as an example for creating an OAuth 2.0 Authentication-supported HTTP App in appse ai.


##### Additional Notes: Possible combinations of Base URL and API path


**Example 1:**


If you have specified your Base URL like:


<img src="\img\credentials\http\oauth2/get\o-auth-get-base-api-url.png" alt="o auth get base api url" width="500"/>


Then, you need to construct the request URL path as shown below, where 'contacts' refers to the API endpoint you want to work with.


<img src="\img\credentials\http\oauth2/get\o-auth-get-url-path.png" alt="o auth get url path" width="500"/>


**Example 2:**


Whichever part of your request URL stays the same and static for all the endpoints for your application, you can include that in the base URL while creating the credential for the HTTP node. Refer to the example below:


<img src="\img\credentials\http\oauth2/get\o-auth-get-e.g-base-api-url.png" alt="o auth get e.g base api url" width="500"/>

<img src="\img\credentials\http\oauth2/get\o-auth-get-e.g-url-path.png" alt="o auth get e.g url path" width="500"/>


This is the final URL structure (just for your reference):  
`https://api.hubapi.com/v3/objects/contacts`


#### Output


<img src="\img\credentials\http\oauth2/get\o-auth-get-output.png" alt="o auth get output" width="500"/>


After completing the configuration, click the **Run** button to execute the HTTP app. This will trigger the app to retrieve the data.


Once the app runs successfully, the output will be displayed in the results section, allowing you to view the response data for further use in your workflow.
  </TabItem>
  <TabItem value="POST" label="POST">
<img src="\img\credentials\http\oauth2/post\o-auth-post-method.png" alt="o auth post method" width="500"/>


#### Configure


##### URL Path


The URL Path identifies the endpoint of the application that you are trying to access or modify.


<img src="\img\credentials\http\oauth2/post\o-auth-post-url-path.png" alt="o auth post url path" width="500"/>


You can find the URL path details in the HubSpot Developer’s documentation. The URL path shown in the examples below is specific to one HubSpot object, i.e., a contact. However, if you want to work with a different object (such as companies, deals, etc.), simply refer to the API documentation link provided.


**Note:** How to construct URL path based on Base URL of the application has been explained above in the GET method section. Please refer to that.


##### Request Body


Request Body refers to the data sent to the server when making a POST request. It contains the information that needs to be processed or stored by the server. The request body allows you to define the data that you want to interact with in external systems via the HTTP POST method.


From the Optional dropdown, select **Request Body** to add it.


<img src="\img\credentials\http\oauth2/post\o-auth-post-select-request-body.png" alt="o auth post select request body" width="500"/>


<img src="\img\credentials\http\oauth2/post\o-auth-post-request-body.png" alt="o auth post request body" width="500"/>


#### Output


<img src="\img\credentials\http\oauth2/post\o-auth-post-output.png" alt="o auth post output" width="500"/>


After completing the configuration and clicking **Run**, the HTTP app will send a POST request to the specified API endpoint with the provided data. Upon success, the response, including details like status and returned data (e.g., created or updated contact info), will be displayed in the Output section, ready for use in the next steps of your workflow.
  </TabItem>
  <TabItem value="PATCH" label="PATCH">
<img src="\img\credentials\http\oauth2/patch\o-auth-patch-method.png" alt="o auth patch method" width="500"/>


#### Configure


##### URL Path


The URL Path identifies the endpoint of the application that you are trying to access or modify.


<img src="\img\credentials\http\oauth2/patch\o-auth-patch-url-path.png" alt="o auth patch url path" width="500"/>


You can find the URL path details in the HubSpot Developer’s documentation. The URL path shown in the examples below is specific to one HubSpot object, i.e., a contact. However, if you want to work with a different object (such as companies, deals, etc.), simply refer to the API documentation link provided.


**Note:** How to construct URL path based on Base URL of the application has been explained above in the GET method section. Please refer to that.


The ID in the URL path corresponds to the specific record you want to target. For example, in the case of `v3/objects/contacts/328766938858`, the number `328766938858` represents the unique ID of a contact. You will need to replace this ID with the ID of the contact (or any other object) you wish to retrieve, update, or interact with.


##### Request Body


The Request Body for a PATCH method refers to the data sent to the server to update an existing resource. It contains the specific fields or properties that you want to modify in the target object. The request body allows you to define the partial data that needs to be updated in external systems via the HTTP PATCH method.


<img src="\img\credentials\http\oauth2/patch\o-auth-patch-request-body.png" alt="o auth patch url path" width="500"/>


#### Output


<img src="\img\credentials\http\oauth2/patch\o-auth-patch-output.png" alt="o auth patch output" width="500"/>


After completing the configuration and clicking **Run**, the HTTP app will send a PATCH request to the specified API endpoint with the provided data. Upon success, the response, including details like the status and updated resource information (e.g., modified contact details), will be displayed in the Output section, ready for use in the next steps of your workflow.
</TabItem>
</Tabs>

---

### Bearer Token

<details>
  <summary><strong>[Credential Setup Example]</strong> for Bearer Token</summary>

#### Set Credentials

<img src="\img\credentials\http\bearer-token\bearer-token-save-credentials.png" alt="bearer token save credential screen" width="500"/>
I have used Magento credentials for authentication purposes.

#### For the Base API URL

- Sign in to your Magento account
<img src="\img\credentials\http\bearer-token\bearer-token-magento-username.png" alt="bearer token magento username screen" width="500"/>
- Go to the Magento admin panel
<img src="\img\credentials\http\bearer-token\bearer-token-magento-dashboard.png" alt="bearer token magento dashboard screen" width="500"/>
- Click on the Stores icon in the left panel
<img src="\img\credentials\http\bearer-token\bearer-token-select-stores.png" alt="bearer token select stores screen" width="500"/>
- Go to configuration
<img src="\img\credentials\http\bearer-token\bearer-token-configuration.png" alt="bearer token configuration screen" width="500"/>
- Go to the general section
<img src="\img\credentials\http\bearer-token\bearer-token-select-general.png" alt="bearer token select general screen" width="500"/>
- Click on ‘Web’, and you will be able to find the base URL
<img src="\img\credentials\http\bearer-token\bearer-token-base-url.png" alt="bearer token base url screen" width="500"/>
- Now, copy and paste it in the HTTP credential form of appse ai

#### To obtain the Bearer token

- Go to the Magento admin panel
<img src="\img\credentials\http\bearer-token\bearer-token-magento-dashboard-2.png" alt="bearer token magento dashboard screen" width="500"/>
- Click on the Systems icon in the left panel
<img src="\img\credentials\http\bearer-token\bearer-token-system.png" alt="bearer token system screen" width="500"/>
- Go to Integrations
<img src="\img\credentials\http\bearer-token\bearer-token-integrations.png" alt="bearer token integrations screen" width="500"/>
- Click on the edit options of one of the Integrations
<img src="\img\credentials\http\bearer-token\bearer-token-integration-edit.png" alt="bearer token integration edit screen" width="500"/>
- Scroll to the bottom screen, you will be able to find ‘Access token’, copy and paste it in the HTTP credential form of appse ai
<img src="\img\credentials\http\bearer-token\bearer-token-access-token.png" alt="bearer token access token screen" width="500"/>
- Once you have filled in the fields as documented, click Save & Authorize to securely connect your Magento account to the workflow.
<img src="\img\credentials\http\bearer-token\bearer-token-access-token.png" alt="bearer token access token screen" width="500"/>

- To proceed, select the action event from the dropdown.
</details>

#### Request Examples

<Tabs>
<TabItem value="GET" label="GET">

<img src="\img\credentials\http\bearer-token\get\GET.png" alt="GET method" width="500"/>

#### Configure

##### URL Path

The URL Path identifies the endpoint of the application that you are trying to access or modify. You can find the URL path details in the Official API documentation. The URL path shown in the examples below is specific to one Magento 2 (AdobeCommerce) entity, i.e., product. However, if you want to work with a different entity (such as customers, orders, etc.), simply refer to the API documentation link provided.

<img src="\img\credentials\http\bearer-token\get\url-path.png" alt="url path" width="500"/>

Here, 'products' is the endpoint.

As we are using Magento here, we have specified our example based on the search request of the Magento endpoint, where query parameters are mandatory for fetching the required set of data.

You can select 'Query parameters' from the dropdown of Optionals.

<img src="\img\credentials\http\bearer-token\get\query-parameters.png" alt="query parameter option" width="500"/>

You can refer to this documentation for setting 'Query parameters': https://developer.adobe.com/commerce/webapi/rest/use-rest/performing-searches/

Here is an example of how we have set up 'Query parameters.'

<img src="\img\credentials\http\bearer-token\get\query-parameter-item-1.png" alt="query parameter item 1" width="500"/>
<img src="\img\credentials\http\bearer-token\get\query-parameter-item-2.png" alt="query parameter item 2" width="500"/>
<img src="\img\credentials\http\bearer-token\get\query-parameter-item-3.png" alt="query parameter item 3" width="500"/>

<img src="\img\credentials\http\bearer-token\get\conditions.png" alt="conditions" width="500"/>

After configuring it properly, you can continue to get the output.

<img src="\img\credentials\http\bearer-token\get\output.png" alt="output" width="500"/>

  </TabItem>
<TabItem value="POST" label="POST">

<img src="\img\credentials\http\bearer-token\post\POST.png" alt="post method" width="500"/>

#### Configure

##### URL Path

The URL Path identifies the endpoint of the application that you are trying to access or modify. You can find the URL path details in the Official API documentation. The URL path shown in the examples below is specific to one Magento 2 (AdobeCommerce) entity, i.e., product. However, if you want to work with a different entity (such as customers, orders, etc.), simply refer to the API documentation link provided.

<img src="\img\credentials\http\bearer-token\post\url-path.png" alt="url path" width="500"/>

Here, "products" is only an example for the POST request; you can replace it with any object you want to create data for.

You can select 'Request body' from the Optionals dropdown.

<img src="\img\credentials\http\bearer-token\post\request-body-option.png" alt="request body option" width="500"/>

The Request Body is where you provide the complete data that the server should use to fully replace or update an existing resource when using the PUT method.

<img src="\img\credentials\http\bearer-token\post\request-body.png" alt="request body" width="500"/>

After configuring it properly, you can continue to get the output.

<img src="\img\credentials\http\bearer-token\post\output.png" alt="output" width="500"/>
  </TabItem>
<TabItem value="PUT" label="PUT">

<img src="\img\credentials\http\bearer-token\put\put.png" alt="put method" width="500"/>

#### Configure

##### URL Path

The URL Path identifies the endpoint of the application that you are trying to access or modify. You can find the URL path details in the Official API documentation. The URL path shown in the examples below is specific to one Magento 2 (AdobeCommerce) entity, i.e., product. However, if you want to work with a different entity (such as customers, orders, etc.), simply refer to the API documentation link provided.

<img src="\img\credentials\http\bearer-token\put\url-path.png" alt="url-path" width="500"/>

Here '1' is the ID of the product you want to update.

You can select 'Request body' from the Optionals dropdown.

<img src="\img\credentials\http\bearer-token\put\request-body-options.png" alt="request body options" width="500"/>

The Request Body is where you provide the complete data that the server should use to fully replace or update an existing resource when using the PUT method.

<img src="\img\credentials\http\bearer-token\put\request-body.png" alt="request body" width="500"/>

After configuring it properly, you can continue to get the output.

<img src="\img\credentials\http\bearer-token\put\output.png" alt="output" width="500"/>
  </TabItem>
  </Tabs>

---

### No Authentication
<details>
  <summary><strong>[Credential Setup Example]</strong> for No Authentication</summary>

#### Set Credentials

<img src="\img\credentials\http\no-auth/no-auth.png" alt="no auth save credential screen" width="500"/>

Enter the base URL for the API you are connecting to.

I have used the Base URL of the BigCommerce credentials for authentication. You can refer to the documentation: https://developer.bigcommerce.com/docs/rest-management/customers-v2#get-all-customers

And for getting 'Store hash', you need to log in to your BigCommerce account, where in the URL bar, you can get the store hash value.

<img src="\img\credentials\http\no-auth/url-bar.png" alt="url bar screen" width="500"/>

Your 'Base URL' will be something like this:

`https://store-{{store-hash}}.mybigcommerce.com/`

</details>

#### Request Examples

  <Tabs>
<TabItem value="GET" label="GET">

<img src="\img\credentials\http\no-auth\get/GET.png" alt="Get method" width="500"/>

#### Configure

##### URL Path

The URL Path identifies the endpoint of the application that you are trying to access or modify. You can find the URL path details in the Official API documentation. The URL path shown in the examples below is specific to a single BigCommerce entity, i.e., a product. However, if you want to work with a different entity (such as customers, orders, etc.), simply refer to the API documentation link provided.

<img src="\img\credentials\http\no-auth\get/url-path.png" alt="url path" width="500"/>

You can select 'Query parameters' from the Optionals dropdown.

<img src="\img\credentials\http\no-auth\get/query-parameters-options.png" alt="query parameters options" width="500"/>

You can refer to this documentation for setting 'Query parameters': https://developer.bigcommerce.com/docs/api

Here is an example of how we have set up 'Query parameters.'

<img src="\img\credentials\http\no-auth\get/query-parameters.png" alt="query parameters" width="500"/>

<img src="\img\credentials\http\no-auth\get/headers.png" alt="headers" width="500"/>

After configuring it properly, you can continue to get the output.

<img src="\img\credentials\http\no-auth\get/output.png" alt="output" width="500"/>
  </TabItem>
<TabItem value="POST" label="POST">

<img src="\img\credentials\http\no-auth\post/POST.png" alt="POST method" width="500"/>

#### Configure

##### URL Path

The URL Path identifies the endpoint of the application that you are trying to access or modify. You can find the URL path details in the Official API documentation. The URL path shown in the examples below is specific to one BigCommerce entity i.e., product. However, if you want to work with a different entity (such as customers, orders, etc.), simply refer to the API documentation link provided.

<img src="\img\credentials\http\no-auth\post/url-path.png" alt="url path" width="500"/>

You can select 'headers' and 'request body' from the Optionals dropdown.

You can refer to this documentation for setting 'headers' and 'request body': https://developer.bigcommerce.com/docs/api

Here is an example of how we have set up 'headers' and 'request body'.

<img src="\img\credentials\http\no-auth\post/headers.png" alt="headers" width="500"/>

<img src="\img\credentials\http\no-auth\post/request-body.png" alt="request body" width="500"/>

After configuring it properly, you can continue to get the output.

<img src="\img\credentials\http\no-auth\post/output.png" alt="output" width="500"/>
  </TabItem>
<TabItem value="PUT" label="PUT">

<img src="\img\credentials\http\no-auth\put/PUT.png" alt="PUT method" width="500"/>

#### Configure

##### URL Path

The URL Path identifies the endpoint of the application that you are trying to access or modify. You can find the URL path details in the Official API documentation. The URL path shown in the examples below is specific to one BigCommerce entity i.e., product. However, if you want to work with a different entity (such as customers, orders, etc.), simply refer to the API documentation link provided.

<img src="\img\credentials\http\no-auth\put/url-path.png" alt="url path" width="500"/>

You can select 'headers' and 'request body' from the Optionals dropdown.

You can refer to this documentation for setting 'headers' and 'request body': https://developer.bigcommerce.com/docs/api

Here is an example of how we have set up 'headers' and 'request body.'

<img src="\img\credentials\http\no-auth\put/headers.png" alt="headers" width="500"/>

<img src="\img\credentials\http\no-auth\put/request-body.png" alt="request body" width="500"/>

After configuring it properly, you can continue to get the output.

<img src="\img\credentials\http\no-auth\put/output.png" alt="output" width="500"/>
  </TabItem>
  </Tabs>
---

### API Key Authentication
<details>
  <summary><strong>[Credential Setup Example]</strong> for API Key Authentication</summary>

#### Set Credentials
<img src="\img\credentials\http\api-key\configure-credentials.png" alt="configure credentials" width="500"/>

Enter the base URL for the API you are connecting to. I have used the Base URL of the Shopify credentials for authentication.

Follow this pattern for Base API URL & Validation Endpoint:

`https://{store_name}.myshopify.com/admin/api/2025-10/{resource}.json`

You can refer to the documentation: https://shopify.dev/docs/api/admin-rest

**For Base API URL:**

Only enter `https://{store_name}.myshopify.com/admin/api/2025-10/` in the Base API URL, and replace `{store_name}` with your Shopify store name, which you can find in your Shopify Admin URL.

<img src="\img\credentials\http\api-key\shopify-store.png" alt="shopify store" width="500"/>

**For Validation Endpoint:**

Only write `{resource}.json` in the Validation endpoint and in place of `{resource}`, write the resource you want to use, which you can get from the API Documentation.

<img src="\img\credentials\http\api-key\validation-endpoint.png" alt="validation endpoint" width="500"/>

**For API Key name:**

<img src="\img\credentials\http\api-key\api-key-name-and-value.png" alt="api key name and key value" width="500"/>

Enter the header or parameter name where the API expects the key. Refer to the API documentation to know which one to use.

<img src="\img\credentials\http\api-key\api-key-name.png" alt="api key name" width="500"/>
</details>
#### Request Examples

  <Tabs>
<TabItem value="GET" label="GET">

<img src="\img\credentials\http\api-key\get\GET.png" alt="GET method" width="500"/>

#### Configure

##### URL Path

The URL Path identifies the endpoint of the application that you are trying to access or modify.

I've used Shopify as the example for the GET method, but you can use any application of your choice. You can find the URL path details in the official Shopify API documentation. The URL path shown in the example above is specific to one Shopify resource, i.e., customers. However, if you want to work with a different resource (such as products, orders, variants, etc.), simply refer to the Shopify API documentation link provided and copy the appropriate endpoint based on what you want to work with.

<img src="\img\credentials\http\api-key\get\url-path.png" alt="url path" width="500"/>

You can select 'Query parameters' from the Optionals dropdown.

<img src="\img\credentials\http\api-key\get\query-parameters-options.png" alt="query parameters option" width="500"/>

You can refer to this documentation for setting 'Query parameters': https://shopify.dev/docs/storefronts/themes/navigation-search/search#query-parameters

Here is an example of how we have set up 'Query parameters.'

<img src="\img\credentials\http\api-key\get\query-parameter-item-1.png" alt="query parameter item 1" width="500"/>

<img src="\img\credentials\http\api-key\get\query-parameter-item-2.png" alt="query parameter item 2" width="500"/>

After configuring it properly, you can continue to get the output.

<img src="\img\credentials\http\api-key\get\output.png" alt="output" width="500"/>
  </TabItem>
<TabItem value="POST" label="POST">

<img src="\img\credentials\http\api-key\post\POST.png" alt="POST method" width="500"/>

#### Configure

##### URL Path

The URL Path identifies the endpoint of the application that you are trying to access or modify.

I've used Shopify as the example for the POST method, but you can use any application of your choice. You can find the URL path details in the official Shopify API documentation. The URL path shown in the example above is specific to one Shopify resource, i.e., customers. However, if you want to work with a different resource (such as products, orders, variants, etc.), simply refer to the Shopify API documentation link provided and copy the appropriate endpoint based on what you want to work with.

<img src="\img\credentials\http\api-key\post\url-path.png" alt="url path" width="500"/>

You can select 'Request body' from the dropdown of Optionals.

<img src="\img\credentials\http\api-key\post\query-parameters-options.png" alt="query parameters options" width="500"/>

Here is an example of how we have set up 'Request Body.'

<img src="\img\credentials\http\api-key\post\request-body.png" alt="request body" width="500"/>

After configuring it properly, you can continue to get the output.

<img src="\img\credentials\http\api-key\post\output.png" alt="output" width="500"/>
  </TabItem>
<TabItem value="PUT" label="PUT">

<img src="\img\credentials\http\api-key\put\PUT.png" alt="PUT method" width="500"/>

#### Configure

##### URL Path

The URL Path identifies the endpoint of the application that you are trying to access or modify.

I've used Shopify as the example for the PUT method, but you can use any application of your choice. You can find the URL path details in the official Shopify API documentation. The URL path shown in the example above is specific to one Shopify resource, i.e., customers. However, if you want to work with a different resource (such as products, orders, variants, etc.), simply refer to the Shopify API documentation link provided and copy the appropriate endpoint based on what you want to work with.

<img src="\img\credentials\http\api-key\put\url-path.png" alt="url path" width="500"/>

You can select 'Request body' from the Optionals dropdown.

Here is an example of how we have set up 'Request body.'

<img src="\img\credentials\http\api-key\put\request-body.png" alt="request body" width="500"/>

After configuring it properly, you can continue to get the output.

<img src="\img\credentials\http\api-key\put\output.png" alt="output" width="500"/>
  </TabItem>
  </Tabs>
---

### Basic Authentication
<details>
  <summary><strong>[Credential Setup Example]</strong> for Basic Authentication</summary>

#### Set Credentials

<img src="\img\credentials\http\basic-auth\base-url-in-platform.png" alt="base url in platform" width="500"/>

Enter the base URL for the API you are connecting to. I have used the Base URL of the ShipStation credentials for authentication. You can refer to the documentation: https://www.shipstation.com/docs/api/customers/list/

<img src="\img\credentials\http\basic-auth\where-to-get-base-url.png" alt="where to get base url" width="500"/>

Provide a valid API endpoint that can be used to test and validate the connection (e.g., customers).

<img src="\img\credentials\http\basic-auth\validation-endpoint.png" alt="validation endpoint" width="500"/>

For the 'Basic Authentication', I'm using the credentials for an application called 'ShipStation'.

<img src="\img\credentials\http\basic-auth\username-and-password-platform.png" alt="username and password platform" width="500"/>

**To get 'Username' and 'Password':**

1. Log in to your ShipStation account.
2. Go to Settings → Account → API Settings (sometimes under "My Profile → Account → API Settings").
3. Select the API version (V1 or V2) as needed.
4. If you don't have keys yet, click "Generate API Key".
5. Immediately copy both the API Key and API Secret, as they won't be visible again after you navigate away (for security reasons).
6. When making API calls, pass the API Key as the HTTP Basic Auth username and API Secret as the password.

<img src="\img\credentials\http\basic-auth\username-and-password-shipstation.png" alt="username and password shipstation" width="500"/>
</details>
  <Tabs>
<TabItem value="GET" label="GET">

<img src="\img\credentials\http\basic-auth\get\get-method.png" alt="get method" width="500"/>

**1. URL Path**

<img src="\img\credentials\http\basic-auth\get\url-path.png" alt="url path" width="500"/>

The URL Path defines the exact API endpoint that you want to access in ShipStation. Here, we are using 'customers.' This will request a list of customers from ShipStation. If you want to work with a different resource (e.g., orders, shipments), simply refer to the official ShipStation API documentation and replace the URL path with the required endpoint.

ShipStation API Docs: https://www.shipstation.com/docs/api/

**2. Content Type**

<img src="\img\credentials\http\basic-auth\get\content-type.png" alt="content type" width="500"/>

This defines the format of the request and response body. The default value is application/json, so you can keep it as is unless the API specifically requires another format.

**3. Optionals → Query Parameters**

<img src="\img\credentials\http\basic-auth\get\optionals-query-parameters-item-one.png" alt="optionals query parameters item one" width="500"/>

<img src="\img\credentials\http\basic-auth\get\optionals-query-parameters-item-two.png" alt="optionals query parameters item two" width="500"/>

Query parameters are used to filter, paginate, or limit the data you retrieve. In this example, we are fetching only the first 5 customers from the first page. These parameters are optional and can be modified as needed.

For example:
- Increase 'pageSize' to 50 to fetch more customer records
- Change the 'page' to navigate through pages

**Tip:** Query parameters vary by endpoint — refer to the ShipStation API docs when using other endpoints.

After configuring it properly, you can continue to get the output.

<img src="\img\credentials\http\basic-auth\get\output.png" alt="output" width="500"/>

Once everything is configured correctly, run the request to fetch data from ShipStation. If the credentials and endpoint are correct, you should receive a successful JSON response containing customer records.

  </TabItem>
<TabItem value="POST" label="POST">

This method is used to create or update data in the target application. In this example, we are creating an order in ShipStation.

<img src="\img\credentials\http\basic-auth\post\post-method.png" alt="post method" width="500"/>

**1. URL Path**

Enter the API endpoint for the operation you want to perform. Here we are using:

<img src="\img\credentials\http\basic-auth\post\url-path.png" alt="url path" width="500"/>

This endpoint is responsible for creating new orders in ShipStation. If you want to perform a different operation (e.g., update shipment, purchase label), refer to the official API documentation and use the appropriate path.

ShipStation API Docs: https://www.shipstation.com/docs/api/

**2. Content Type**

<img src="\img\credentials\http\basic-auth\post\content-type.png" alt="content type" width="500"/>

ShipStation requires the request body to be sent in JSON format. The default value is application/json, so you can keep it as is unless the API specifically requires another format.

**3. Request Body**

<img src="\img\credentials\http\basic-auth\post\content-type.png" alt="content type" width="500"/>

The Request Body contains the data that will be sent to ShipStation for creating the order. It must follow the JSON structure defined in ShipStation API documentation.

In this example, values are mapped dynamically from the previous application's output using placeholders:

You can customize the structure based on the API requirements.

After configuring it properly, you can continue to get the output.

Once everything is configured correctly, click Run to execute the request. If your API credentials and endpoint are correct, you will receive a successful JSON response from ShipStation — for example, customer or order details based on the endpoint used.
  </TabItem>
<TabItem value="PUT" label="PUT">

<img src="\img\credentials\http\basic-auth\put\put-method.png" alt="put method" width="500"/>

A PUT request is used when you want to update existing data. In this example, we are updating an existing product in ShipStation.

##### URL Path

Enter the specific endpoint for the resource you want to update.

<img src="\img\credentials\http\basic-auth\put\url-path.png" alt="url path" width="500"/>

The number (20870209) represents the Product ID in ShipStation, and must be replaced dynamically when updating different products. If you need to update another type of record (e.g., shipments, orders), refer to the ShipStation API documentation and use the appropriate endpoint.

ShipStation API Docs: https://www.shipstation.com/docs/api/

##### Content Type

<img src="\img\credentials\http\basic-auth\put\content-type.png" alt="content type" width="500"/>

ShipStation requires request body data to be formatted as JSON. The default value is already application/json, so you can keep it unchanged.

##### Request Body

This section contains the updated product data. Mapped dynamic fields can be used based on the incoming payload.

<img src="\img\credentials\http\basic-auth\put\optionals-request-body.png" alt="optionals request body" width="500"/>

Modify fields based on what you want to update. Ensure required fields for the specific endpoint are included.

After configuring it properly, you can continue to get the output. After correctly configuring and running the PUT request, ShipStation will respond with a success message indicating the update was applied.

<img src="\img\credentials\http\basic-auth\put\output.png" alt="output" width="500"/>
  </TabItem>
  </Tabs>



