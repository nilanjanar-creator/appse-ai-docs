---
title: Introduction
sidebar_position: 1
description: Discover how to save and manage workflows in APPSeAI for future use and modification.
slug: /platform/key-concepts/workflow/introduction/
---

# Workflow Designer

The **Workflow Designer** in appse ai enables you to create, connect, and manage automation workflows visually.

It provides an interactive canvas where you can bring together **triggers**, **application nodes**, **built-in nodes**, and **AI agents** to define how data and actions move across your systems.

With the Workflow Designer, you can:

 **1. Design workflows from scratch** using a simple drag-and-connect interface.  
 **2. Connect multiple apps and built-in nodes** to automate complex, multi-step processes.  
 **3. Combine different**   
   - [node types](https://docs.google.com/document/d/1txLpd9GK971pvPpNLx7-R0DM34KUxplKe6E_KWRFpCQ/edit?tab=t.o9b8z0l5m6a4),   
   - data transformation, and   
   - AI-driven steps into one cohesive workflow.

This visual approach helps teams build and manage integrations effortlessly, without writing a single line of code.

## Exploring the Workflow Designer

The Workflow Designer interface is designed to be clean, intuitive, and easy to navigate. Each element on the canvas serves a specific purpose, from managing workflow actions to adjusting your view.

Let’s go through what each numbered section in the image represents :

<img src="\img\platform\key-concepts\workflow\introduction\workflow-designer.png" alt="workflow designer screen" width="700"/>

### 1. Workflow name 

<img src="\img\platform\key-concepts\workflow\introduction\rename-workflow.png" alt="rename workflow" width="300"/>

When you create a new workflow, appse ai automatically assigns it a default name, for example, **“Workflow 1.”**  
The numbering increases each time you create a new one (Workflow 2, Workflow 3, and so on), so you can easily identify them later. You can rename your workflow at any time by simply **clicking on the workflow name** at the top of the canvas.

Type a new name that best describes what your workflow does, such as *“Order Sync – Shopify to SAP”* or *“Daily Data Backup.”*

This helps keep your workspace organized, especially when you’re managing multiple workflows.

### 2. Save 

<img src="\img\platform\key-concepts\workflow\introduction\save-button.png" alt="save button" width="300"/>

After making changes to your workflow, you can save your progress by clicking the ‘Save’ button at the top of the screen. This ensures all your edits are stored, so you don’t lose any work.

If you forget to save your changes and try to leave the page or navigate away, appse ai will prompt you with a pop-up asking if you want to save the changes or leave without saving. This gives you a chance to confirm and save your work before exiting.

This feature ensures you don’t lose any progress on your workflow\!

### 3. Run once

<img src="\img\platform\key-concepts\workflow\introduction\run-once.png" alt="run once" width="300"/>

The **Run Once** button lets you **manually run the entire workflow** from start to finish, without having to activate or deploy it. This is useful for testing or previewing your workflow in its current state.

When you click ‘**Run Once’**, appse ai executes all the nodes in the workflow, just as if it were triggered automatically. However, keep in mind that **it will still sync actual data** and could **cause changes in the connected applications**, so use it with caution.

This allows you to test your workflow without fully activating it, providing flexibility to make adjustments before going live.

### 4. Inactive/Active Toggle 

<img src="\img\platform\key-concepts\workflow\introduction\inactive-active-toggle.png" alt="inactive or active toggle" width="300"/>

The Inactive/Active toggle is used to activate or deactivate your workflow. Clicking the toggle will switch it to Active, which means your workflow will begin continuously syncing data as per the defined triggers or schedules. Once activated, you can toggle it back to Inactive at any time to stop the automation.

### 5. Get started

<img src="\img\platform\key-concepts\workflow\introduction\get-started.png" alt="get started button" width="300"/>

The **Get Started** button takes you to a **selection screen** where you can choose your **trigger node**. A trigger node defines **how** and **when** your workflow should start. You can choose from **Trigger Manually**, **On Schedule**, or **Webhook** triggers,  or **In-app triggers**, depending on your workflow needs.

This step is essential to define what starts the workflow, and it gives you the flexibility to choose the most relevant trigger for your use case.

### 6. Apps

<img src="\img\platform\key-concepts\workflow\introduction\apps.png" alt="apps button" width="300"/>

When you click the **Apps** button, it will open a **selection screen** where you can choose from a list of available apps.  
This allows you to select the app you want to connect to and start creating a workflow based on your chosen app.

It’s the easiest way to integrate and automate tasks between your apps directly within the workflow designer.

### 7. Actions

<img src="\img\platform\key-concepts\workflow\introduction\actions.png" alt="actions button" width="300"/>

Clicking the Action button opens a selection screen where you can choose from various action nodes.  
These include nodes like **Trigger Manually, Webhook, On Schedule, Filter, Decision, Merge, Code, Loop, HTTP, JSON Converter, Splitter, and Base64 Decode.**

These nodes define the actions and logic that shape the flow of your workflow 

### 8. Notes

<img src="\img\platform\key-concepts\workflow\introduction\notes.png" alt="notes button" width="300"/>

Notes are used to **add text annotations** directly on the workflow canvas.  
You can use them to write descriptions, instructions, or reminders that help explain parts of your workflow.  
They don’t affect the workflow’s execution, they’re simply for documentation and better organization.

### 9. Import Workflow 

<img src="\img\platform\key-concepts\workflow\introduction\import-workflow.png" alt="import workflow option" width="300"/>

The Import Workflow feature allows users to import workflows by uploading a JSON file. This makes it easy to share workflows across teams or organizations, eliminating the need to recreate them from scratch.

### 10. Export Workflow

<img src="\img\platform\key-concepts\workflow\introduction\export-workflow.png" alt="export workflow option" width="300"/>

The **Export Workflow** feature allows you to download your workflow from the Workflow Designer as a **JSON file**. 

This is particularly useful for sharing workflows across teams or organizations, enabling others to easily reuse or collaborate on the same workflow without having to recreate it. It also serves as a great way to keep a backup of your workflows for safekeeping or version control. Additionally, you can move workflows between different appse ai accounts or environments, streamlining the process of transferring workflows without the need to rebuild them from scratch.

### 11. Click to start

<img src="\img\platform\key-concepts\workflow\introduction\click-to-start.png" alt="click to start button" width="300"/>

The **Click to Start** area encourages users to begin creating their workflow by adding a node. When you click on the **plus icon** in the center of the canvas, it takes you to a **selection screen** where you can choose the first node to start building your automation. This is the first step in designing your workflow, where you’ll define how your automation begins and set the foundation for the entire process.

### 

### 12. Undo

<img src="\img\platform\key-concepts\workflow\introduction\undo.png" alt="undo button" width="300"/>

The **Undo** button allows you to quickly **reverse** your most recent action. If you make a mistake or want to try a different approach, simply click **Undo** to revert to the previous step. This is a handy tool for experimenting with your workflow without the worry of permanent changes.

### 13. Redo

<img src="\img\platform\key-concepts\workflow\introduction\redo.png" alt="redo button" width="300"/>

The **Redo** button allows you to **reinstate** an action that was previously undone. If you’ve used the Undo button and decide you want to bring back your most recent change, click **Redo** to restore it. This gives you flexibility to step forward after undoing an action, ensuring you can adjust your workflow as needed.

### 14. Zoom In

<img src="\img\platform\key-concepts\workflow\introduction\zoom-in.png" alt="zoom in button" width="300"/>

The **Zoom In** button allows you to **increase the canvas view by 5%** each time you click it. This helps you focus on specific areas of your workflow by making the nodes and connections appear larger, allowing for a more detailed view. You can click it multiple times to zoom in progressively as needed.

### 15. Zoom Out 

<img src="\img\platform\key-concepts\workflow\introduction\zoom-out.png" alt="zoom out button" width="300"/>

The **Zoom Out** button allows you to **decrease the canvas view by 5%** each time you click it. This helps you get a broader view of your workflow, making it easier to see the entire canvas and how different nodes connect. You can click it multiple times to zoom out progressively as needed.

### 16. Fit to screen 

<img src="\img\platform\key-concepts\workflow\introduction\fit-to-screen.png" alt="fit to screen button" width="300"/>

The **Fit to Screen** button automatically adjusts the canvas view to **fit the entire workflow** within the screen. This allows you to see your whole workflow at once, making it easier to get an overview of the entire process and ensure all nodes and connections are visible.

### 17. Tidy Up

<img src="\img\platform\key-concepts\workflow\introduction\tidy-up.png" alt="tidy up button" width="300"/>

The **Tidy Up** button automatically **arranges and aligns** the nodes on the canvas in a clean, organized layout. It ensures that your workflow is visually neat, with consistent spacing between nodes and a structured flow, making it easier to read and manage.

---