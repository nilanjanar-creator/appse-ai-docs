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
    *   **Input**: Receives an **Array** of all items from the previous node.
    *   **Output**: Must return an **Array** of object.
    *   **Ideal for**: Aggregation, sorting, filtering, or merging data.
    
    ```javascript
    // Input ($payload): [
    //  { "product": "A", "price": 10 },
    //  { "product": "B", "price": 25 },
    //  { "product": "C", "price": 5 }
    // ]

    // Filter items over $15 and sort by price descending
    const filtered = $payload
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
    *   **Input**: Receives a **Single Object** for each item. The code runs multiple times (once per item).
    *   **Output**: Must return a **Single Object**.
    *   **Ideal for**: Mapping fields, formatting values, or adding new properties to each item independently.

    ```javascript
    // Input ($payload): { 
    // "firstName": "John", 
    // "lastName": "Doe", 
    // "price": 100 
    // }

    const taxRate = 0.18;
    return {
      fullName: `${$payload.firstName} ${$payload.lastName}`,
      originalPrice: $payload.price,
      finalPrice: parseFloat(($payload.price * (1 + taxRate)).toFixed(2))
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

*   The code must return a valid JSON output (Array or Object depending on the [mode](#modes-of-execution)).

## Code Editor Features

The built-in code editor provides several tools to help you write and debug your logic:

*   **Autocomplete**: Type `$` to see suggestions for `$payload`, previous nodes (e.g., `$('Get Users')`), or start typing a variable name or method name to see suggestions for standard JavaScript methods. Suggestions from previous nodes are available once those nodes have been executed. Use `Ctrl` + `Space` for toggling the suggestion tooltip on or off.
*   **Real-time Linting**: Flags errors immediately, such as syntax issues or attempts to modify read-only data. Warnings will appear if data from previous nodes is not available — this typically means those nodes have not been executed yet.
*   **Console Output**: Use `console.log()` to print messages to your browser's developer console for debugging.
*   **Syntax Highlighting**: Colors your code for better readability.

## Accessing Data

<img src="\img\platform\key-concepts\nodes\built-in\code\autocomplete.png" alt="Code Node Autocomplete" width="700"/>

### `$payload`

<img src="\img\platform\key-concepts\nodes\built-in\code\immediate-parent.png" alt="Code Node Payload" width="700"/>

This is the main variable containing your input data.

*   **In "Run Once for All Items" mode**:
    `$payload` is an **Array** containing **all items** returned by the previous node. You have access to the entire dataset at once.
    *   *Example:* `[ { "id": 1, "name": "Ali" }, { "id": 2, "name": "Bob" } ]`

*   **In "Run for Each Item" mode**:
    `$payload` is a **Single Object** representing **one item** from the list. The code runs individually for each item in the dataset.
    *   *Example:* `{ "id": 1, "name": "Ali" }` (First execution) -> `{ "id": 2, "name": "Bob" }` (Second execution)

### `$('Node Name')`

<img src="\img\platform\key-concepts\nodes\built-in\code\descendants.png" alt="Code Node Previous Node" width="700"/>

Access output from any previous node by name. In the figure above, **Shopify** is the node name.

*   **Syntax**: `$('Node Name').payload`
*   The `$('Node Name')` function returns a wrapper object. You usually need to access the `.payload` property to get the actual data array.

**Example:**
```javascript
// Access data from a previous "Get Users" node
const users = $('Get Users').payload;
const matchingUser = users.find(u => u.id === $payload.userId);
```

| Library | Usage | Example |
| :--- | :--- | :--- |
| **moment** | Date & Time manipulation | `moment().add(7, 'days').format('YYYY-MM-DD')` |
| **crypto** | Cryptographic functions | `crypto.randomUUID()` |
| **Math** | Mathematical operations | `Math.round(10.5)` | 
| **JSON** | Parsing and stringifying JSON | `JSON.parse('{"a":1}')` |

## Steps to Use the Code Node

1.  Select the **Code Node** from the node selection screen.
<img src="\img\platform\key-concepts\nodes\built-in\code\selection.png" alt="Code Node Selection" width="700"/>

---

2.  Connect it to a node that provides data (e.g., an HTTP Request Node or App Node).
<img src="\img\platform\key-concepts\nodes\built-in\code\connection.png" alt="Code Node Connection" width="700"/>

---

3.  Open the **Configuration** tab and select your **Mode** (Run Once or Run Each).

---

4.  Write your JavaScript logic in the **Code** section. Utilize `$payload` to access input data.
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
const total = $payload.price * (1 + taxRate);

return {
  originalPrice: $payload.price,
  finalPrice: parseFloat(total.toFixed(2)),
  processedAt: moment().toISOString(),
  status: "Processed"
};
```

## Output Behavior

*   **Success**: The Output panel will show the transformed data (Array or Object depending on mode).
*   **Errors**: If your code has syntax errors or runtime exceptions, they will be shown in the output section. You may also find additional error details in your browser's developer console.
*   **Important**: Input data is **Read-Only**. Always return a **new** object or array. Do not directly modify `$payload` or `$('Node Name').payload`.

## Supported & Restricted Features

### Supported ✅

| Category | Details |
| :--- | :--- |
| **Standard Objects** | `Math`, `Date`, `JSON`, `RegExp`, `String`, `Number`, `Boolean`, `Array`, `Object`, `Error`, `TypeError` |
| **Collections** | `Map`, `Set` |
| **Utilities** | `structuredClone()`, `atob()`, `btoa()`, `parseInt()`, `parseFloat()`, `isNaN()`, `isFinite()` |
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
| **Data Mutation** | Direct modification of `$payload` or node data `$('Node name').payload` | Return a new object using the spread operator (`...`) |

#### These will cause errors ❌: 
```javascript
$payload.status = "Active";          // Cannot assign to read-only property
$payload.push({ id: 3 });            // Cannot use mutating methods
delete $payload.name;                // Cannot delete properties
$('Get Users').payload[0].age = 30;  // Cannot modify referenced node data
```

#### Instead, return new objects ✅:
```javascript
// Spread into a new object
return { ...$payload, status: "Active" };

// Use non-mutating array methods
const filtered = $payload.filter(item => item.active);
const mapped = $payload.map(item => ({ ...item, seen: true }));
```

