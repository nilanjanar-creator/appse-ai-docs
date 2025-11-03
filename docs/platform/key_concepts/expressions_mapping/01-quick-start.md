---
id: quick-start
title: Quick Start Guide
sidebar_position: 1
description: Get started with expressions in 3 minutes - copy-paste ready examples for immediate results.
keywords: [quick start, expressions, examples, tutorial, APPSeAI]
slug: /platform/key-concepts/expressions/quick-start
---

# Quick Start Guide

Get productive with APPSeAI expressions in 3 minutes. Copy, paste, and see results immediately.

## Example Data

Throughout this guide, we'll use this sample order data:

```json
{
  "orderId": "ORD-001",
  "customerName": "Alice Johnson",
  "items": [
    { "name": "Laptop", "price": 1200, "qty": 1 },
    { "name": "Mouse", "price": 25, "qty": 2 }
  ],
  "status": "pending",
  "totalAmount": 1250
}
```

## 5 Essential Patterns

### 1. Get a Simple Property

**Expression:**
```js
{{ $payload.orderId }}
```

**Output:** `"ORD-001"`

**Use Case:** Extract order ID for tracking or logging

---

### 2. Get All Array Values

**Expression:**
```js
{{ $payload.items[*].name }}
```

**Output:** `["Laptop", "Mouse"]`

**Use Case:** List all product names in an order

---

### 3. Filter Array Items

**Expression:**
```js
{{ $payload.items[?price > `100`] }}
```

**Output:**
```json
[{ "name": "Laptop", "price": 1200, "qty": 1 }]
```

**Use Case:** Find expensive items for special handling

---

### 4. Transform Data Structure

**Expression:**
```js
{{ $payload.items[*].{product: name, total: price} }}
```

**Output:**
```json
[
  { "product": "Laptop", "total": 1200 },
  { "product": "Mouse", "total": 25 }
]
```

**Use Case:** Reshape data for external API or database

---

### 5. Calculate Values

**Expression:**
```js
{{ sum($payload.items[*].price) }}
```

**Output:** `1225`

**Use Case:** Calculate order subtotal for pricing logic

---

## Common Real-World Examples

### E-commerce Order Processing

```js
{
  "orderRef": "{{ $payload.orderId }}",
  "customer": "{{ $payload.customerName }}",
  "itemCount": "{{ length($payload.items) }}",
  "orderTotal": "{{ sum($payload.items[*].price) }}"
}
```

### API Response Mapping

```js
{{ $('apiCall').payload.data[*].{id: userId, email: userEmail} }}
```

### Conditional Logic

```js
{{ $payload.items[?qty > `1`][*].name }}
```

---

## Next Steps

### Learn Core Concepts
- [Accessing Data](./02-accessing-data.md) - Property and nested data access
- [Working with Arrays](./03-working-with-arrays.md) - Array operations and indexing
- [Filtering Data](./04-filtering-data.md) - Filter conditions and patterns

### Quick Reference
- [Cheat Sheet](./10-cheat-sheet.md) - All operators and functions at a glance
- [Common Patterns](./common-patterns) - Ready-to-use workflow patterns

---

**Tip:** Start with simple property access, then progressively add array operations and filters as needed.

