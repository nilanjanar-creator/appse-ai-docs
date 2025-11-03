---
slug: /platform/key-concepts/nodes/trigger/manual-trigger
title: Manual Trigger 
position: 1
---

# Trigger Manually

The **Trigger Manually** node allows users to initiate a workflow manually from within the APPSe AI workflow designer. It is primarily used for testing and debugging workflows without needing an external event or schedule to start execution.

This is a trigger node and therefore has **no input channels**. It has a **single output channel** that passes either the user-provided JSON payload or an empty dataset to subsequent nodes.

## Configuration

<img src="\img\platform\platform-tour\workflow-designer\action-nodes\manual-trigger\manual-trigger-configuration-screen.png" alt="APPSe AI Manual Trigger Configuration" width="700"/>
The configuration screen does not have mandatory fields.

- **Custom JSON payload (Optional):** Users can define sample data in JSON format that will be sent to subsequent nodes whenever the node is triggered.

<img src="\img\platform\platform-tour\workflow-designer\action-nodes\manual-trigger\manual-trigger-mock-data.png" alt="APPSe AI Manual Trigger Mock data" width="700"/>

- **Output:** The output will be showcased and will be used as an input for the next node.

<img src="\img\platform\platform-tour\workflow-designer\action-nodes\manual-trigger\manual-trigger-output.png" alt="APPSe AI Manual Trigger Output" width="700"/>

- If mock data is omitted, the node will output an empty dataset when executed.

> Note: This node does **not** require any credentials to operate.

---

## Output
Here's how the outputs will be showcased:

- If **mock data** is configured, the output will exactly match the JSON provided by the user.


- If **mock data** is not configured, the output will be an **empty dataset** with a confirmation that the node was triggered successfully along with a timestamp.

<img src="\img\platform\platform-tour\workflow-designer\action-nodes\manual-trigger\manual-trigger-empty-output.png" alt="APPSe AI Manual Trigger Empty Output" width="700"/>

---

## Limitations / Notes

- This node can **only** be triggered manually from within the workflow designer, meaning - this trigger does not support scheduled or event-based execution.

- If it is the **only trigger node** in the workflow, the **Active/Inactive** toggle will remain disabled, the workflow must be started manually from this node each time.
---