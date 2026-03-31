---
id: accessing-data
title: Accessing Data
sidebar_position: 2
description: Learn how to access properties and nested data in APPSeAI expressions.
keywords: [data access, properties, nested data, dot notation]
slug: /platform/key-concepts/expressions/accessing-data
---

# Accessing Data

Access properties and nested values from your workflow data using simple dot notation.

## Example Data
⚠️ This is a simplified JSON representation for understanding purposes.
```json
{
  "orderId": "ORD-001",
  "customerName": "Alice Johnson",
  "email": "alice@example.com",
  "shipping": {
    "address": "123 Main St",
    "city": "Seattle",
    "zip": "98101"
  },
  "items": [
    { "name": "Laptop", "price": 1200 },
    { "name": "Mouse", "price": 25 },
    { "name": "Keyboard", "price": 300 }
  ]
}
```
> 💡 Notes:
> - `$payload` refers to data from the immediately preceding node.
## Simple Property Access

| Expression | Output | Use Case |
|------------|--------|----------|
| `{{ $payload.orderId }}` | `"ORD-001"` | Get order ID |
| `{{ $payload.customerName }}` | `"Alice Johnson"` | Get customer name |
| `{{ $payload.email }}` | `"alice@example.com"` | Get email address |

## Nested Property Access

| Expression | Output | Use Case |
|------------|--------|----------|
| `{{ $payload.shipping.address }}` | `"123 Main St"` | Get street address |
| `{{ $payload.shipping.city }}` | `"Seattle"` | Get city |
| `{{ $payload.shipping.zip }}` | `"98101"` | Get ZIP code |
| `{{ $payload.items[0].name }}` | `"Laptop"` | Get first item name |
| `{{ $payload.items[0].price }}` | `1200` | Get first item price |

## Accessing Previous Node Data

Use `$('nodeName').payload` to access data from a previous workflow node:

> 💡 Notes:
> - `$('nodeName')` refers to data from a specific previous node in the same workflow branch (not the immediate one).
> - `all[]` returns all records from a node.
> - `matchedPayload[]` returns filtered records.

The following examples demonstrate how to use `$('nodeName')` to access data from different nodes.  
These are syntax examples showing how expressions are written in workflows.

| Expression | Description |
|------------|-------------|
| `{{ $('getCustomer').payload.fullName }}` | Customer name from previous node |
| `{{ $('apiCall').payload.data.userId }}` | User ID from API response |
| `{{ $('dbQuery').payload.results[0].email }}` | Email from database result |
| `{{ $('nodeName').all[].name }}` | Access all records from a node |
| `{{ $('nodeName').matchedPayload[].items[?name == 'Mouse'].price[] }}` | Access filtered records |


> 💡 These examples show how to access different types of data from a previous node, including simple fields, nested values, arrays, and filtered records.

| Expression | Output | Use Case |
|------------|--------|----------|
| `{{ $('nodeName').payload.orderId }}` | `"ORD-001"` | Get order ID |
| `{{ $('nodeName').payload.customerName }}` | `"Alice Johnson"` | Get customer name |
| `{{ $('nodeName').payload.email }}` | `"alice@example.com"` | Get email address |
| `{{ $('nodeName').payload.shipping.address }}` | `"123 Main St"` | Get street address |
| `{{ $('nodeName').payload.items[0].name }}` | `"Laptop"` | Get first item name |
| `{{ $('nodeName').all[].name }}` | `["Laptop", "Mouse", "Keyboard"]` | Get all records from a node |
| `{{ $('nodeName').matchedPayload[].items[?name == 'Mouse'].price[] }}` | `[25]` | Get filtered records from a node |

## Real-World Examples

### Example 1: Extract Order Information

```js
{
  "orderReference": "{{ $payload.orderId }}",
  "customer": "{{ $payload.customerName }}",
  "deliveryCity": "{{ $payload.shipping.city }}"
}
```

**Output:**
```json
{
  "orderReference": "ORD-001",
  "customer": "Alice Johnson",
  "deliveryCity": "Seattle"
}
```

### Example 2: Access API Response Data

```js
{
  "userId": "{{ $('getUserData').payload.data.id }}",
  "userName": "{{ $('getUserData').payload.data.name }}",
  "userEmail": "{{ $('getUserData').payload.data.email }}"
}
```

### Example 3: Safe Property Access with Defaults

```js
{{ $payload.email || 'no-email@example.com' }}
{{ $payload.shipping.phone || 'Not provided' }}
{{ ($payload.items[0] || {}).name || 'No items' }}
```

## Common Patterns

### Multi-Level Nesting
```js
{{ $payload.customer.contact.primary.email }}
```

### Dynamic Field Selection
```js
{{ $payload.shipping.{street: address, location: city} }}
```

### Combining Values
```js
{{ $payload.shipping.city }}, {{ $payload.shipping.zip }}
```

## Next Steps

- [Working with Arrays](./03-working-with-arrays.md) - Learn array operations
- [Filtering Data](./04-filtering-data.md) - Query with conditions
- [Cheat Sheet](./10-cheat-sheet.md) - Quick reference
