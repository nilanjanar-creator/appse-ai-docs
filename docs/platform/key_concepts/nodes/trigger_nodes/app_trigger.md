---
slug: /platform/key-concepts/nodes/trigger/app-trigger
title: App Trigger
position: 2
description: Starts a workflow based on an event occurring within a specified application.
---
# App Trigger

An App Trigger automatically executes a workflow when a specific event happens in a connected app. It continuously monitors the app for the defined action, and when that action occurs on the application, the workflow is automatically triggered.

## Why Use App Trigger?

The App Trigger helps automate workflows that respond instantly to events happening in connected applications. It eliminates the need for manual execution or complex scheduling, allowing real-time automation.

## Select App Trigger

### 1. Select any app

   Select any app from the selection screen  
  
  <img src="\img\platform\key-concepts\nodes\triggers\app-trigger\select-any-app.png" alt="select any app screen" width="700"/>   

### 2. Credential screen

   After selecting an app, the credential screen will appear, where you can select your credential  and choose one of the **trigger action events** from the **Action Event** dropdown.  

> Note: App triggers can be identified by a **trigger icon** displayed beside the action event, as shown in the image below.   
   
<img src="\img\platform\key-concepts\nodes\triggers\app-trigger\select-a-trigger-action-event.png" alt="select a trigger action event screen" width="700"/>   

### 3. Configure

   After selecting the **trigger action event**, you can continue to configure the App trigger  

   In an App Trigger, you’ll see these two fields. Fill them out based on the requirements of your selected trigger action event.  

<img src="\img\platform\key-concepts\nodes\triggers\app-trigger\configure-fields.png" alt="configure fields screen" width="700"/>

   - **Fetch Data Since –** This field lets you set the starting date and time from which data should be fetched. It’s used to pull records that were created or updated after the specified date.  

> Note: You can set this only once; changing it later won’t affect the workflow execution.

   - **Record Limit –** This defines the maximum number of records to be fetched in one execution. You can set a value between 1 and 50, depending on how much data you want to retrieve at once.  


### 4. Run


Running the node will fetch the relavant items based on the `date` and `limit` configuration.

<img src="\img\platform\key-concepts\nodes\triggers\app-trigger\app-trigger-output.png" alt="app trigger output" width="700"/>


In case you configure a trigger node to fetch data since a date where the number of incoming data exceeds the limit set. The workflow will execute multiple times to make sure all the data is processed.

> `For Example:` You fetch orders created since 1st January '25 from your ERP, and the limit is set to 20. Your ERP has a total of 45 orders created since the mentioned date. In this case the workflow will execute thrice with - 20, 20 and 5 items across the executions.

---

## Additional Tips

- You can select the fetch date only once, changing it later will not affect the execution process.

> `For Example:` If you are fetching data from 1st January '25, it will fetch the data as intended. However, if you tweak this date later to 1st January '24, the workflow will not execute to fetch older data. If you want to do that, you will have to add another node and set your new desired date.

---