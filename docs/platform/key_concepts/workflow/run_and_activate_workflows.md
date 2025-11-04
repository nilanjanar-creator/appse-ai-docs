---
title: Run and Activate Workflows
sidebar_position: 4
description: Learn how to run and activate workflows in APPSeAI to automate processes effectively.
slug: /platform/key-concepts/workflow/run-and-activate-workflows/
---

# Run & Activate Workflow

## Run Workflow

<img src="\img\platform\key-concepts\workflow\run-and-activate-workflow\run-once-active.png" alt="run once active screen" width="400"/>

The Run Once button lets you run the entire workflow to check if it’s working correctly. It allows you to run each node within the workflow in its current state without deploying it. Running the workflow will still sync real data and may cause changes in the connected applications.

<img src="\img\platform\key-concepts\workflow\run-and-activate-workflow\run-once-disabled.png" alt="run once disabled screen" width="400"/>

The Run Once button will remain disabled in the following cases:

1. When no nodes are present on the canvas.  
2. When there is only a single action node on the canvas.

## Activate Workflows

<img src="\img\platform\key-concepts\workflow\run-and-activate-workflow\toggle-active.png" alt="toggle active screen" width="400"/>

- The Activate Workflow toggle enables continuous syncing of data.

<img src="\img\platform\key-concepts\workflow\run-and-activate-workflow\toggle-inactive.png" alt="toggle inactive screen" width="400"/>

- When the toggle is turned on, the workflow becomes active and runs automatically based on its defined triggers or schedule.
---

<!--
The **Activate Workflow** toggle remains **disabled** in the following cases:

1. When **no nodes** are added to the canvas.  
2. When **Trigger Manually** is the only node present on the canvas.
-->

