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
    { "name": "Mouse", "price": 25 }
  ]
}
```

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

| Expression | Description |
|------------|-------------|
| `{{ $('getCustomer').payload.fullName }}` | Customer name from previous node |
| `{{ $('apiCall').payload.data.userId }}` | User ID from API response |
| `{{ $('dbQuery').payload.results[0].email }}` | Email from database result |

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
