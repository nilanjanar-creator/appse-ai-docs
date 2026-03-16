---
slug: /platform/key-concepts/nodes/built-in/code
title: Code Node
---

The **Code Node** allows you to run custom code to transform data, perform complex logic, or aggregate information that standard nodes can't handle. It provides a secure, sandboxed environment for data manipulation.

This might be helpful in situations such as:
*   Transforming JSON structures (e.g., renaming fields, restructuring objects)
*   Filtering items based on complex conditions
*   Aggregating data (e.g., summing up order totals)
*   Merging data from multiple previous nodes

## Configuration

<img src="\img\platform\key-concepts\nodes\built-in\code\configuration.png" alt="Code Node Configuration" width="700"/>

### Modes of Execution


The Code Node operates in two modes, which determine how input data is processed:

1.  **Run Once for All Items** (Default):
    *   **Input**: The `$input` variable receives an **Array** of all items from the previous node.
    *   **Output**: Must return an **Array** of object.
    *   **Ideal for**: Aggregation, sorting, filtering, or merging data.
    
    ```javascript
    // Input (`$input`): [
    //  { "product": "A", "price": 10 },
    //  { "product": "B", "price": 25 },
    //  { "product": "C", "price": 5 }
    // ]

    // Filter items over $5 and sort by price descending
    const filtered = $input
      .filter(item => item.price > 5)
      .sort((a, b) => b.price - a.price);

    return [{ result: filtered }];
    // Output: [
    //  { "result": [
    //      { "product": "B", "price": 25 }, 
    //      { "product": "A", "price": 10 }
    //    ] 
    //  }
    // ]
    ```

2.  **Run for Each Item**:
    *   **Behavior**: Automatically iterates over the incoming list of items. Your code is executed once for **every** item in the payload.
    *   **Input**: The `$input` variable receives a **Single Object** representing the current item being processed.
    *   **Output**: Your code must return a **Single Object** (the transformed version of that item).
        *   *Note:* Returning an Array in this mode (e.g. `return [1, 2]`) or returning the whole input array (e.g. `return $input.all()`) will trigger an error, as this mode strictly expects a single object per iteration.
    *   **Ideal for**: Mapping fields, formatting values, or adding new properties to items independently without writing a manual loop.

    ```javascript
    // Input (`$input`): { 
    // "firstName": "John", 
    // "lastName": "Doe", 
    // "price": 100 
    // }

    const taxRate = 0.18;
    return {
      fullName: `${$input.firstName} ${$input.lastName}`,
      originalPrice: $input.price,
      finalPrice: parseFloat(($input.price * (1 + taxRate)).toFixed(2))
    };
    // Output: { 
    // "fullName": "John Doe", 
    // "originalPrice": 100, 
    // "finalPrice": 118 
    // }
    ```

### Language


Currently, the Code Node supports **JavaScript** only. You can write standard ES6+ JavaScript to manipulate your data.

### Code


This is where you write your custom code for data transformation. 

<img src="\img\platform\key-concepts\nodes\built-in\code\code-editor.png" alt="Code Node Autocomplete" width="700"/>

*   The code must return a valid JSON output (Array or Object depending on the [mode](#modes-of-execution)).

## Code Editor Features

The built-in code editor provides several tools to help you write and debug your logic:

*   **Autocomplete**: Type `$` to see suggestions for previous nodes (e.g., `$('Get Users')`), type `$input` to access the current item's data, or start typing a variable name or method name to see suggestions for standard JavaScript methods. Suggestions from previous nodes are available once those nodes have been executed. Use `Ctrl` + `Space` for toggling the suggestion tooltip on or off.
*   **Code Formatting**: Use **Alt** + **Shift** + **F** to automatically format your code with proper indentation and spacing. This is a native editor feature that helps keep your transformation logic clean and readable.
*   **Real-time Linting**: Flags errors immediately, such as syntax issues or attempts to modify read-only data. Warnings will appear if data from previous nodes is not available — this typically means those nodes have not been executed yet.
*   **Console Output**: Use `console.log()` to print messages to your browser's developer console for debugging.
*   **Syntax Highlighting**: Colors your code for better readability.

## Accessing Data

<img src="\img\platform\key-concepts\nodes\built-in\code\autocomplete.png" alt="Code Node Autocomplete" width="700"/>

### `$input`

<img src="\img\platform\key-concepts\nodes\built-in\code\immediate-parent.png" alt="Code Node Input" width="700"/>

This is the main variable containing your input data.

*   **In "Run Once for All Items" mode**:
    `$input` is an **Array** containing **all items** returned by the previous node. You have access to the entire dataset at once.
    *   *Example:* `[ { "id": 1, "name": "Ali" }, { "id": 2, "name": "Bob" } ]`

*   **In "Run for Each Item" mode**:
    `$input` is a **Single Object** representing **one item** from the list. The code runs individually for each item in the dataset.
    *   *Example:* `{ "id": 1, "name": "Ali" }` (First execution) -> `{ "id": 2, "name": "Bob" }` (Second execution)

### `$input.all()`

<img src="\img\platform\key-concepts\nodes\built-in\code\input-all.png" alt="Code Node Previous Node" width="700"/>

When running in **"Run for Each Item"** mode, you can still access the entire array of all incoming items by calling `$input.all()`. This returns the full array of input objects, which is useful when you need context from other items while processing a single item.
*   *Warning:* Do not return the result of `.all()` directly (e.g., `return $input.all()`) in "Run for Each Item" mode, as this will result in a type error. You must still return a single object representing the transformed item.

### `$('Node Name')`

<img src="\img\platform\key-concepts\nodes\built-in\code\descendants.png" alt="Code Node Previous Node" width="700"/>

Access output from any previous node by name. In the figure above, **SAP Business One** is the node name.

*   **Syntax**: `$('Node Name').all()`
*   The `$('Node Name')` function returns a wrapper object with the node's properties.
*   In "Run for Each Item" mode, use `$('Node Name').all()` to retrieve the *entire array* of outputs from that specific node, instead of just the corresponding single item.

**Example:**
```javascript
// Access the entire array of data from a previous "Get Users" node
const allUsers = $('Get Users').all(); 
const matchingUser = allUsers.find(u => u.id === $input.userId);
```

## Steps to Use the Code Node

1.  Select the **Code Node** from the node selection screen.
<img src="\img\platform\key-concepts\nodes\built-in\code\selection.png" alt="Code Node Selection" width="700"/>

---

2.  Connect it to a node that provides data (e.g., an HTTP Request Node or App Node).
<img src="\img\platform\key-concepts\nodes\built-in\code\connection.png" alt="Code Node Connection" width="700"/>

---

3.  Open the **Configuration** tab and select your **Mode** (Run Once or Run Each).

---

4.  Write your JavaScript logic in the **Code** section. Utilize `$input` to access input data.
<img src="\img\platform\key-concepts\nodes\built-in\code\js-code.png" alt="Code Node JS Code" width="700"/>

---

5.  Use `console.log()` to debug if needed.

---

6.  Click **Run** to test your code and see the output.

---

### Example: Calculate Total with Tax

**Scenario**: You have a list of orders and want to format the date and calculate the total price including tax.

**Mode**: Run for Each Item

```javascript
// Input: { "price": 100, "date": "2023-10-01" }

const taxRate = 0.2;
const total = $input.price * (1 + taxRate);

return {
  originalPrice: $input.price,
  finalPrice: parseFloat(total.toFixed(2)),
  processedAt: moment().toISOString(),
  status: "Processed"
};
```

## Output Behavior

*   **Success**: The Output panel will show the transformed data (Array or Object depending on mode).
*   **Errors**: Syntax errors are pointed out in the editor itself via real-time linting (highlighted with red squiggly lines). If code with errors is executed, or if runtime exceptions occur, they will be shown in the output section. You may also find additional error details in your browser's developer console.
    *   *Type Errors:* The editor's linter will warn you if you attempt to return the wrong type of data. Most notably, **you cannot return an Array in "Run for Each Item" mode**. If you try to return `[ ... ]` or `$input.all()`, the linter will block it with a squiggly line.
*   **Important**: Input data is **Read-Only**. Always return a **new** object or array. Do not directly modify `$input`, `$input.all()`, or `$('Node Name')`.

## Supported & Restricted Features

### Supported ✅

| Category | Details |
| :--- | :--- |
| **Standard Objects** | `Math`, `Date`, `JSON`, `RegExp`, `String`, `Number`, `Boolean`, `Array`, `Object`, `Error`, `TypeError` |
| **Collections** | `Map`, `Set` |
| **Iterators** | `Symbol.iterator`, `for...of` loops, `keys()`, `values()`, `entries()` |
| **Utilities** | `structuredClone()`, `atob()`, `btoa()`, `parseInt()`, `parseFloat()`, `isNaN()`, `isFinite()`, `Object.fromEntries()`, `Object.assign()`, `Object.keys()`, `Object.values()`, `Object.entries()` |
| **URI Encoding** | `encodeURIComponent()`, `decodeURIComponent()`, `encodeURI()`, `decodeURI()` |
| **Console** | `console.log()`, `console.warn()`, `console.error()`, `console.info()`, `console.debug()`, `console.table()` |
| **Libraries** | `moment` (date/time manipulation), `crypto` (`randomUUID()`, `getRandomValues()`) |
| **Syntax** | ES6+ features: arrow functions, destructuring, spread operator, template literals, optional chaining (`?.`), nullish coalescing (`??`), `for...of` loops |

### Not Supported / Restricted ❌

| Category | Details | Alternative |
| :--- | :--- | :--- |
| **Network Requests** | `fetch`, `XMLHttpRequest`, `http`, `https` | Use the **HTTP Request Node** |
| **Async Operations** | `async/await`, `Promise`, `setTimeout`, `setInterval` | Code runs synchronously |
| **Browser APIs** | `window`, `document`, DOM access | Not applicable |
| **File System** | `fs`, file read/write | Use dedicated nodes |
| **Modules** | `import`, `require`, `module.exports` | Use built-in libraries only |
| **Data Mutation** | Direct modification of `$input`, `$input.all()`, or node data `$('Node name')` | Return a new object using the spread operator (`...`) |

#### These will cause errors ❌: 
```javascript
$input.status = "Active";             // ❌ Cannot assign to read-only property
$input.push({ id: 3 });               // ❌ Cannot use mutating array methods (push, pop, splice, sort, etc.) on input data
delete $input.name;                   // ❌ Cannot delete properties of $input
$('Get Users').all()[0].age = 30;    // ❌ Cannot modify referenced node data
Object.assign($input, { a: 1 });      // ❌ Cannot mutate $input with Object methods
```

#### Instead, return new objects ✅:
```javascript
// Spread into a new object
return { ...$input, status: "Active" };

// Use non-mutating array methods (on arrays like $input.all() or in Run Once mode)
const filtered = $input.all().filter(item => item.active);
const mapped = $input.all().map(item => ({ ...item, seen: true }));
```
### Code Node Use Case Examples

Select the appropriate tab below based on your Code Node mode use case: **Run Once for All Items** or **Run Once for Each Item**.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="run-all" label="Run Once for All Items">

#### Use Case: Daily SAP SL Order Summary

**Scenario**:  
A company using **SAP Business One** exposes Sales Order data through the **SAP Business One**.
Through **appse ai**, daily Sales Orders are fetched from **SAP Business One** in bulk (as an array payload).
Management requires a daily summarized report including:
- Total number of Sales Orders created
- Total revenue (converted to USD if required)
- Count of international orders
- Top-selling product (based on quantity sold)

Instead of exporting data to Excel and manually calculating data, the Code Node processes the **SAP Business One** payload and generates a consolidated daily report automatically.
Here ERP data is summarized before being:
- Posted to Microsoft Teams

<img src="\img\platform\key-concepts\nodes\built-in\code\orderSummaryFlow.png" alt="connect html source" width="700"/>

---

#### Why Run Once for All Items?

- `$input` is an **Array of all orders**
- The code runs **only once**
- Since aggregation is required (summing totals, counting, finding max product), we must manually loop through all records.

> Aggregation requires iterating through the entire dataset.

---

> Below is a sample **SAP Business One** bulk order payload:

<div
  style={{
    maxHeight: '350px',
    overflow: 'auto',
    border: '1px solid #ddd',
    padding: '12px',
    borderRadius: '6px'
  }}
>
<pre>
<code>
```JSON
[
  {
    "_pair_index": 0,
    "DocTotal": 3549,
    "DocCurrency": "$",
    "TaxExtension": {
      "CountryS": null
    },
    "DocumentLines": [
      {
        "ItemCode": "33",
        "ItemDescription": "Biker Jacket",
        "Quantity": 100
      }
    ]
  },
  {
    "_pair_index": 0,
    "DocTotal": 4147.27,
    "DocCurrency": "$",
    "TaxExtension": {
      "CountryS": null
    },
    "DocumentLines": [
      {
        "ItemCode": "1959677000000064297",
        "ItemDescription": "BoltCharge Power Bank",
        "Quantity": 1
      },
      {
        "ItemCode": "1959677000000167002",
        "ItemDescription": "Coffeecup",
        "Quantity": 1
      }
    ]
  }
]
```
</code>
</pre>
</div>

---

#### Code

```javascript
let totalRevenue = 0;
let internationalCount = 0;
let productSales = [];
let currency = "$";

// Single loop to handle everything
for (let order of $input) {
    if (!order) continue;
    // 1. Revenue & Currency
    if (order.DocTotal) {
      const docTotal = order.DocTotal; 
      if(order.DocCurrency="$"){
        totalRevenue +=  Math.round(docTotal) || 0;
      }
      else{
        totalRevenue +=  Math.round(docTotal)/82 || 0
      }
  }
    // 2. International Check
    // Using optional chaining to prevent errors if TaxExtension is missing
    let country = order.TaxExtension?.CountryS || "";
    if(country == null || country == ""){
      country = "US";
    }  
    if (country !== "US") {
        internationalCount++;
    }
    // 3. Product Sales
    if (order.DocumentLines) {
        for (let line of order.DocumentLines) {
            let productName = line.ItemDescription || line.ItemCode || "Unknown";
            let qty = line.Quantity || 0;
            productSales[productName] = (productSales[productName] || 0) + qty;
        }
    }
    else{
      continue
    }
}
// Find Top Product
let topProduct = "";
let maxQty = 0;
for (let [name, qty] of Object.entries(productSales)) {
    if (qty > maxQty) {
        maxQty = qty;
        topProduct = name;
    }
}
// ... rest of your message and return logic 
var message =
    "<b>Daily Report:</b><br><br>" +
    "We processed " + $input.length +
    " orders today for a total of " + currency + totalRevenue + ".<br>" +
    "International orders: " + internationalCount + ".<br>" +
    "Top Product: " + topProduct + " (" + maxQty + " units).";
;
return [{
        json: {
            total_orders: $input.length,
            total_revenue: totalRevenue,
            international_orders: internationalCount,
            top_selling_product: topProduct,
            top_product_quantity: maxQty,
            message: message
        }
    }];

```

**Code Node Output**
```JSON
[
  {
    "_pair_index": 0,
    "json": {
      "total_orders": 2,
      "total_revenue": 7696,
      "international_orders": 0,
      "top_selling_product": "Biker Jacket",
      "top_product_quantity": 100,
      "message": "<b>Daily Report:</b><br><br>We processed 2 orders today for a total of $7696.<br>International orders: 0.<br>Top Product: Biker Jacket (100 units)."
    }
  }
]
```
---

> The message sent to **Microsoft Teams** will appear as:

```Text
Daily Report:
We processed 2 orders today for a total of $7696.
International orders: 0.
Top Product: Biker Jacket (100 units).
```

</TabItem>

<TabItem value="run-each" label="Run Once for Each Item">

#### Use Case 1: Convert Currency Symbols to ISO Codes

In **SAP Business One**, item prices are stored using **currency symbols** such as:

- `$`
- `€`
- `£`
- `₹`

However, when creating or updating products in **Pipedrive**, the API does **not accept currency symbols**.  
Instead, it requires **ISO currency codes**, such as:

- `USD`
- `EUR`
- `GBP`
- `INR`

To ensure compatibility and data consistency, we transform currency symbols from SAP into ISO currency codes before sending the data to Pipedrive.

---

#### Data Flow Overview

```
SAP Service Layer
        ↓
Currency Symbol ($)
        ↓
Transformation Layer (Code Node)
        ↓
ISO Currency Code (USD)
        ↓
Pipedrive Product Creation API
```

---

<img src="\img\platform\key-concepts\nodes\built-in\code\convertCurrencySymbolWorkflow.png" alt="convert currency workflow" width="700"/>

---

#### Why Run Once for Each Item?

- `$input` is a **Single Object**
- The engine automatically runs the code once per item
- No manual loop over all items is required
- Ideal for record-level transformation

> This mode is best when modifying one record independently of others.

---

> Below is a sample SAP Business One item payload.

**Note:** The Currency field is displayed as `"Currency": "$"`.

<div
  style={{
    maxHeight: '350px',
    overflow: 'auto',
    border: '1px solid #ddd',
    padding: '12px',
    borderRadius: '6px'
  }}
>
<pre>
<code>
```JSON
[
  {
    "_pair_index": 0,
    "ItemCode": "K10011179155765",
    "ItemName": "Honda Shine",
    "ItemPrices": [
      {
        "PriceList": 1,
        "Price": 4544.45,
        "Currency": "$"
      },
      {
        "PriceList": 2,
        "Price": 0,
        "Currency": ""
      }
    ]
  }
]
```
</code>
</pre>
</div>

---

#### Code

```javascript
const item = $input;
if (Array.isArray(item.ItemPrices)) {
  item.ItemPrices = item.ItemPrices.map(price => {
    if (price.Currency) {
      switch (price.Currency.trim()) {
        case "$":
          price.Currency = "USD";
          break;
        case "€":
          price.Currency = "EUR";
          break;
        case "£":
          price.Currency = "GBP";
          break;
        case "₹":
          price.Currency = "INR";
          break;
        default:
          // keep original currency
          break;
      }
    }
    return price;
  });
}
return item;
```

---

#### Code Node Output

**Note:** The Currency field is transformed as `"Currency": "USD"`.
```json
[
  {
    "_pair_index": 0,
    "ItemCode": "K10011179155765",
    "ItemName": "Honda Shine",
    "ItemPrices": [
      {
        "PriceList": 1,
        "Price": 4544.45,
        "Currency": "USD"
      }
    ]
  }
]
```

> Below is a sample **Pipedrive** output payload:

The **Currency** value **$** is converted to **USD** in the Code Node, as mentioned above, and is then utilized in the Pipedrive Node..

<div
  style={{
    maxHeight: '350px',
    overflow: 'auto',
    border: '1px solid #ddd',
    padding: '12px',
    borderRadius: '6px'
  }}
>
<pre>
<code>
```JSON
[
  {
    "_pair_index": 0,
    "success": true,
    "data": {
      "id": 190,
      "name": "Honda Shine",
      "prices": [
        {
          "product_id": 190,
          "price": 5847,
          "currency": "USD"
        }
      ]
    }
  }
]
```
</code>
</pre>
</div>
 ---

 #### Use Case 2: ShipStation Order Processing

An eCommerce platform (such as Shopify, WooCommerce, or Magento) sends **order data** into the workflow whenever a customer places an order.

Before creating the shipment in **ShipStation**, the raw order data must be **validated, enriched, and transformed** to match ShipStation's API requirements.

The eCommerce platform may:

- Store item weights in **kilograms (kg)**
- Not explicitly classify shipments as Domestic or International
- Not calculate international shipping surcharges

However, ShipStation requires:

- Weight in **grams**
- Proper shipment classification
- Accurate shipping cost calculations

To ensure successful order creation and accurate shipping charges, we transform the order data before sending it to ShipStation.

---

#### Data Flow Overview

```
eCommerce Platform
        ↓
Order Data (kg, raw address, base shipping cost)
        ↓
Transformation Layer (Code Node)
        ↓
Converted Weight (grams)
Shipment Type (Domestic/International)
Shipping Surcharge (if applicable)
        ↓
ShipStation Order Creation API
```
<img src="\img\platform\key-concepts\nodes\built-in\code\shipstationWorkflow.png" alt="connect html source" width="700"/>

---

#### Why Run Once for Each Item?

- `$input` represents **one order**
- The code runs once per order
- No aggregation across multiple orders is required
- Each order is processed independently

> This mode is ideal when enriching or formatting a single record before sending it to another system.

---

> Below is a sample **Ecommerce** order payload:

<div
  style={{
    maxHeight: '350px',
    overflow: 'auto',
    border: '1px solid #ddd',
    padding: '12px',
    borderRadius: '6px'
  }}
>
<pre>
<code>
```JSON
[
  {
    "_pair_index": 0,
    "id": "gid://shopify/Order/7234327052597",
     "customer": {
          "id": "gid://shopify/Customer/10123615863093",
          "email": "john12@gmail.com",
          "lastName": "Hixon",
          "firstName": "John"
     },
    "items": [
      {
        "shippingAddress": {
          "country": "India"
        },
        "lineItems": {
          "nodes": [
            {
              "name": "Armani Boots",
              "weight": 3.55
            }
          ]
        }
      }
    ]
  }
]
```
</code>
</pre>
</div>

---

#### Code

```javascript
const data = $input;
if (!Array.isArray(data.items) || data.items.length === 0) {
  return {};
}
const order = data.items[0];
const country = order.shippingAddress?.country || "";
if (!Array.isArray(order.lineItems?.nodes)) {
  return {};
}
const processedLineItems = order.lineItems.nodes.map(item => {
  const weightKg = item.weight || 0;
  const weightGrams = Math.round(weightKg * 1000);
  let shipping_category = "Domestic";
  let international_surcharge = 0;
  if (country !== "USA") {
    shipping_category = "International";
    international_surcharge = 20 + (5 * weightKg);
  }
  return {
    ...item,
    weight_grams: weightGrams,
    shipping_category,
    international_surcharge,
    shipping_country: country
  };
});
return { processedLineItems };
```
**Code Node Output**
```JSON
[
   {
      "_pair_index":0,
      "processedLineItems":[
         {
            "id":"gid://shopify/LineItem/17761653424437",
            "sku":"AB5353",
            "weight":3.55,
            "quantity":1,
            "title":"Armani Boots",
            "name":"Armani Boots",
            "originalUnitPriceSet":{
               "presentmentMoney":{
                  "amount":"34343.43"
               }
            },
            "weight_grams":3550,
            "shipping_category":"International",
            "international_surcharge":37.75,
            "shipping_country":"India"
         }
      ]
   }
]
```

> Below is a sample **Shipstation** output payload:

<div
  style={{
    maxHeight: '350px',
    overflow: 'auto',
    border: '1px solid #ddd',
    padding: '12px',
    borderRadius: '6px'
  }}
>
<pre>
<code>
```JSON
[
  {
    "items": [
      {
        "sku": "AB5353",
        "name": "Armani Boots",
        "weight": {
          "units": "grams",
          "value": 3560,
          "WeightUnits": 2
        },
        "quantity": 1,
        "productId": 20813116,
        "unitPrice": 34343.43
      }
    ],
    "orderId": 243325993,
    "orderKey": "NW-US-1388"
  }
]
```
</code>
</pre>
</div>

</TabItem>

</Tabs>
 
