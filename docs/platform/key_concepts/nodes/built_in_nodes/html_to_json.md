---
slug: /platform/key-concepts/nodes/built-in/html-to-json
title: HTML to JSON Node
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The HTML to JSON node in Appse AI is a built-in node that helps extract structured data from raw HTML content using CSS selectors.  
It converts unstructured or semi-structured HTML into clean JSON output, making it easier for downstream nodes to process and map the data.

This node is commonly used when working with:
- Web page HTML responses
- HTML email bodies

---

## Configuration Options

- **Source** – Specifies the field that contains the raw HTML string.
    - If you are entering the value manually as text, specify the property that exists inside the JSON object that contains HTML value returned by the previous node (for example: html_content).
    - If you are using drag and drop, simply drag the property that exists inside the JSON object that contains HTML value from the previous node's output. It will automatically be added as an expression.
- **Extraction Rules**
  
  **Item #1** – Extraction rule for a single output field
  - **Key** – Defines the output JSON key where the extracted value will be stored.
  - **CSS Selector** – A CSS selector used to find elements within the HTML.
  - **Return Type**
    - **Text** – Extracts visible text content.
    - **HTML** – Extracts inner HTML of the selected element.
    - **Attribute** – Extracts a specific attribute value (e.g., `href`, `src`, `class`, `value`).
      - **Attribute Name** – The name of the attribute to extract.
    - **Value** – Extracts the value of form elements (`input`, `textarea`, `select`).
  - **Optionals**
    - **Return Array** – Returns multiple extracted values as an array.
    - **Skip Selectors** (available only for Text return type) – Ignores specified child elements during text extraction.
- **Optionals**
  - **Trim Values** – Removes leading and trailing whitespace.
  - **Clean Up Text** – Normalizes text by removing extra spaces, line breaks, and HTML entities.

---

## Steps to Use HTML to JSON Node

### 1. Select HTML to JSON Node
Select **HTML to JSON** from the node selection screen.

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\select_html_to_json.png" width="700"/>

---

### 2. Connect it to a Node Returning HTML
Connect the HTML to JSON node to a node that returns HTML (for example, an HTTP GET request).

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\connect_node.png" alt="connect html source" width="700"/>

---

### 3. Configure the Source Field
Under **Source**, provide the field path that contains the HTML string.

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\source_field_configuration.png" alt="configure source field" width="700"/>

---

### 4. Configure Based on Return Type

Select the appropriate tab below based on your desired **Return Type** (Text, HTML, Attribute, or Value), then follow the configuration steps:

<Tabs>

<TabItem value="Attribute" label="Attribute">

#### Add an Extraction Rule
Configure the following fields:

**Key** – Defines the output JSON key where the extracted value will be stored.

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\attribute_key_field_configuration.png" width="700"/>

**CSS Selector** – Specify the CSS selector for the target HTML element.

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\attribute_css_selector_field_configuration.png" width="700"/>

**Return Type** – Choose return type as Attribute.

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\attribute_return_type_field_configuration.png" width="700"/>

**Attribute Name** – Provide the name of the attribute to extract.

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\attribute_name_field_configuration.png" width="700"/>

**Configure Optional Extraction Rule**

**Return Array** – If set to true, multiple extracted values are returned as an array and if set to false, only a single value is returned.

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\return_array_field_configuration.png" width="700"/>

---

#### Configure Optional Settings

**Trim Values** – Select True to remove leading and trailing spaces from extracted values.

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\optional_field_trim_value.png" width="700"/>

**Clean Up Text** – Select True to normalize text by removing extra spaces, line breaks, and HTML entities.

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\optional_field_clean_up_text.png" width="700"/>

---

#### Click Continue to Move to the Next Step

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\attribute_continue_button.png" alt="continue button" width="700"/>

---

#### Click Run to Execute the HTML to JSON Node

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\run_button.png" alt="run button" width="700"/>

After **execution**, this HTML to JSON node processes the input HTML using the defined extraction rules and outputs structured JSON data.

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\attribute_html_to_json_output.png" alt="after execution" width="700"/>

</TabItem>

<TabItem value="HTML" label="HTML">

#### Add an Extraction Rule
Configure the following fields:

**Key** – Defines the output JSON key where the extracted value will be stored.

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\html_key_field_configuration.png" width="700"/>

**CSS Selector** – Specify the CSS selector for the target HTML element.

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\html_css_selector_field_configuration.png" width="700"/>

**Return Type** – Choose return type as HTML.

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\html_return_type_field_configuration.png" width="700"/>

**Configure Optional Extraction Rule**

**Return Array** – If set to true, multiple extracted values are returned as an array and if set to false, only a single value is returned.

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\return_array_field_configuration.png" width="700"/>

---

#### Configure Optional Settings

**Trim Values** – Select True to remove leading and trailing spaces from extracted values.

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\optional_field_trim_value.png" width="700"/>

**Clean Up Text** – Select True to normalize text by removing extra spaces, line breaks, and HTML entities.

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\optional_field_clean_up_text.png" width="700"/>

---

#### Click Continue to Move to the Next Step

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\html_continue_button.png" alt="continue button" width="700"/>

---

#### Click Run to Execute the HTML to JSON Node

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\run_button.png" alt="run button" width="700"/>

After **execution**, this HTML to JSON node processes the input HTML using the defined extraction rules and outputs structured JSON data.

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\html_html_to_json_output.png" alt="after execution" width="700"/>

</TabItem>

<TabItem value="Text" label="Text">

#### Add an Extraction Rule
Configure the following fields:

**Key** – Defines the output JSON key where the extracted value will be stored.

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\key_field_configuration.png" width="700"/>

**CSS Selector** – Specify the CSS selector for the target HTML element.

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\css_selector_field_configuration.png" width="700"/>

**Return Type** – Choose return type as Text.

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\return_type_field_configuration.png" width="700"/>

**Configure Optional Extraction Rule**

**Skip Selectors** – If required to exclude child elements such as a, span, or img from text extraction.

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\skip_selector.png" width="700"/>

**Return Array** – If set to true, multiple extracted values are returned as an array and if set to false, only a single value is returned.

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\true_return_array_field_configuration.png" width="700"/>

---

#### Configure Optional Settings

**Trim Values** – Select True to remove leading and trailing spaces from extracted values.

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\optional_field_trim_value.png" width="700"/>

**Clean Up Text** – Select True to normalize text by removing extra spaces, line breaks, and HTML entities.

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\optional_field_clean_up_text.png" width="700"/>

---

#### Click Continue to Move to the Next Step

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\continue_button.png" alt="continue button" width="700"/>

---

#### Click Run to Execute the HTML to JSON Node

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\run_button.png" alt="run button" width="700"/>

After **execution**, this HTML to JSON node processes the input HTML using the defined extraction rules and outputs structured JSON data.

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\html_to_json_output.png" alt="after execution" width="700"/>

</TabItem>

<TabItem value="Value" label="Value">

#### Add an Extraction Rule
Configure the following fields:

**Key** – Defines the output JSON key where the extracted value will be stored.

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\value_key_field_configuration.png" width="700"/>

**CSS Selector** – Specify the CSS selector for the target HTML element.

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\value_css_selector_field_configuration.png" width="700"/>

**Return Type** – Choose return type as Value.

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\value_return_type_field_configuration.png" width="700"/>

**Configure Optional Extraction Rule**

**Return Array** – If set to true, multiple extracted values are returned as an array and if set to false, only a single value is returned.

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\return_array_field_configuration.png" width="700"/>

---

#### Configure Optional Settings

**Trim Values** – Select True to remove leading and trailing spaces from extracted values.

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\optional_field_trim_value.png" width="700"/>

**Clean Up Text** – Select True to normalize text by removing extra spaces, line breaks, and HTML entities.

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\optional_field_clean_up_text.png" width="700"/>

---

#### Click Continue to Move to the Next Step

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\value_continue_button.png" alt="continue button" width="700"/>

---

#### Click Run to Execute the HTML to JSON Node

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\run_button.png" alt="run button" width="700"/>

After **execution**, this HTML to JSON node processes the input HTML using the defined extraction rules and outputs structured JSON data.

<img src="\img\platform\key-concepts\nodes\built-in\html_to_json\value_html_to_json_output.png" alt="after execution" width="700"/>

</TabItem>

</Tabs>