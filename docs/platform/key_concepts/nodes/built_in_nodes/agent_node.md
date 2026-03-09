---
slug: /platform/key-concepts/nodes/built-in/ai-agent
title: AI Agent Node
---

# AI Agent Node

## Overview

The **AI Agent Node** enables workflows to incorporate **AI-driven decision making and intelligent automation**. This node allows the workflow to process incoming data using **Large Language Models (LLMs)** and optionally interact with **tools from other applications** to perform actions. A key capability of the AI Agent Node is its ability to **use external tools as part of the AI reasoning process**, allowing it to fetch data, trigger actions, and generate structured responses.

The node processes input data with the help of three sub-nodes:

- **[Language Model Node](#language-model-node)**
- **[Tools Node](#tools-node)**
- **[Output Parser Node](#output-parser-node)**

These sub-nodes allow the AI Agent to generate responses, use external capabilities, and return outputs in a structured format.

---

## Node Structure

The **AI Agent Node** consists of the following sub-nodes:

| Sub-node | Requirement | Description |
|--------|--------|--------|
| Language Model | Mandatory | Defines the LLM used by the AI Agent to process prompts |
| Tools | Optional | Allows the AI Agent to use tools from other applications |
| Output Parser | Optional | Formats and structures the AI Agent output |

---

## Agent Node

### Steps to add an Agent node
> **Note:** An AI Agent node can only be added in a non-trigger position. Please add the Trigger node first, then try adding the AI Agent node.

1. Open the select node popup by clicking on the plus icon from the workflow designer. Alternatively, you can click any navigation button in the top-right section (e.g., Most Popular, Apps, etc.).
2. Navigate to the **AI Agent, LLM and Tools** section.
    <img src="\img\platform\key-concepts\nodes\built-in\ai-agent\agent1.png"  width="700"/>
3. Select **AI Agent Node**.
   <img src="\img\platform\key-concepts\nodes\built-in\ai-agent\agent2.png"  width="700"/>

### Field Details 
| Fieldname | Requirement | Description |
|--------|--------|--------|
| Prompt | Mandatory | This field allows users to define the **main prompt** that the AI Agent will process. The prompt acts as the **primary instruction** for the AI model and determines how the input data should be interpreted. |
| Preliminary Instructions for the AI | Optional | This field allows users to provide **additional context or behavioral instructions** to guide the AI Agent. |

### Example Configuration
<img src="\img\platform\key-concepts\nodes\built-in\ai-agent\agent3.png"  width="700"/>

---

## Language Model Node

The **Language Model node** allows users to select a **Large Language Model (LLM)** that will process the prompt defined in the AI Agent. This node is **mandatory** for the AI Agent Node. Only **one Language Model** can be connected to an AI Agent Node.

### Steps to add Language Model node
1. Click on the designated port labeled as Model
    <img src="\img\platform\key-concepts\nodes\built-in\ai-agent\agent4.png"  width="700"/>
2. Select the required Language Model
    <img src="\img\platform\key-concepts\nodes\built-in\ai-agent\agent5.png"  width="700"/>
3. Configure the fields displayed and continue
   <img src="\img\platform\key-concepts\nodes\built-in\ai-agent\agent6.png"  width="700"/>

### Field Details

| Field | Description |
|------|-------------|
| Credential | Select the credential required to access the selected LLM |
| Model | Choose the specific model version |
| Temperature (Optional) | Controls randomness of the output. <br/>• `Low (0.0–0.3)` – Deterministic and consistent responses <br/>• `Medium (0.4–0.7)` – Balanced creativity and consistency <br/>• `High (0.8–1.0)` – More creative and varied responses |

### Example Configuration 
<img src="\img\platform\key-concepts\nodes\built-in\ai-agent\agent7.png"  width="700"/>
---

## Tools Node
The **Tools node** allows the AI Agent to access **external tools and application actions**. These tools enable the AI Agent to perform actions such as:
- Fetching external data
- Interacting with connected systems

> **Note:** Multiple tools can be added to the AI Agent Node.

### Steps to add Tools Node
1. Click on the designated port labeled as Tools
    <img src="\img\platform\key-concepts\nodes\built-in\ai-agent\agent8.png"  width="700"/>
2. Select the required Tool
    <img src="\img\platform\key-concepts\nodes\built-in\ai-agent\agent9.png"  width="700"/>
3. Configure the fields displayed
   <img src="\img\platform\key-concepts\nodes\built-in\ai-agent\agent10.png"  width="700"/>

### Field Details

Tool configuration is divided into two tabs.<br/>
**Tab 1: Credential**

| Fieldname | Description |
|------|-------------|
| Account | Select the credential required to access the tool |
| Tool Name | Define a name for the tool |
| Action Event | Select the action the tool will perform |
| Tool Description | Describe what the tool does so the AI Agent can decide when to use it |

**Tab 2: Configure**

The **Configure tab** contains fields required to execute the selected tool action. These fields are **dynamically generated** based on:
- The **selected application**
- The **chosen action event**

### Example Configuration
<img src="\img\platform\key-concepts\nodes\built-in\ai-agent\agent11.png"  width="700"/>
---

## Output Parser Node 

The **Output Parser node** allows users to enforce a **structured output format** for the AI Agent response. This ensures the response generated by the AI Agent follows a **consistent JSON structure**, which can be used reliably by downstream nodes in the workflow.

### Steps to add Output Parser Node
1. Click on the designated port labeled as Output Parser
    <img src="\img\platform\key-concepts\nodes\built-in\ai-agent\agent12.png"  width="700"/>
2. Provide the required JSON in the JSON Example field 
    <img src="\img\platform\key-concepts\nodes\built-in\ai-agent\agent13.png"  width="700"/>

### Field Details
| Fieldname | Description |
|------|-------------|
| JSON Example | Users provide a **sample JSON structure** that defines the expected output format. The AI Agent will attempt to **generate responses that follow this structure**. |

### Example Configuration
<img src="\img\platform\key-concepts\nodes\built-in\ai-agent\agent14.png"  width="700"/>
---

## Sample Execution
### Input Configurations
The workflow configuration used to execute the AI Agent Node.
<img src="\img\platform\key-concepts\nodes\built-in\ai-agent\agent15.png"  width="700"/>

### Output Generated
The response produced by the AI Agent after processing the input configuration.
<img src="\img\platform\key-concepts\nodes\built-in\ai-agent\agent16.png"  width="700"/>
