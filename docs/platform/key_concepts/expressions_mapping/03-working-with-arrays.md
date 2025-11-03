---
id: working-with-arrays
title: Working with Arrays
sidebar_position: 3
description: Master array operations including indexing, projections, and aggregations.
keywords: [arrays, indexing, projection, wildcard, APPSeAI]
slug: /platform/key-concepts/expressions/working-with-arrays
---

# Working with Arrays

Master array operations to extract, transform, and analyze array data in your workflows.

## Example Data

```json
{
  "orderId": "ORD-001",
  "items": [
    { "name": "Laptop", "price": 1200, "qty": 1 },
    { "name": "Mouse", "price": 25, "qty": 2 },
    { "name": "Keyboard", "price": 75, "qty": 1 }
  ]
}
```

## Array Indexing

| Pattern | Expression | Output | Use Case |
|---------|------------|--------|----------|
| First element | `{{ $payload.items[0] }}` | `{"name":"Laptop",...}` | Get first item |
| Second element | `{{ $payload.items[1] }}` | `{"name":"Mouse",...}` | Get second item |
| Last element | `{{ $payload.items[-1] }}` | `{"name":"Keyboard",...}` | Get last item |
| Second to last | `{{ $payload.items[-2] }}` | `{"name":"Mouse",...}` | Get second last |

## Array Projections (Wildcard)

Get specific properties from all array elements:

| Expression | Output | Use Case |
|------------|--------|----------|
| `{{ $payload.items[*].name }}` | `["Laptop","Mouse","Keyboard"]` | List all product names |
| `{{ $payload.items[*].price }}` | `[1200, 25, 75]` | List all prices |
| `{{ $payload.items[*].qty }}` | `[1, 2, 1]` | List all quantities |

## Array Aggregations

| Function | Expression | Output | Use Case |
|----------|------------|--------|----------|
| Count | `{{ length($payload.items) }}` | `3` | Count items |
| Sum | `{{ sum($payload.items[*].price) }}` | `1300` | Total price |
| Average | `{{ avg($payload.items[*].price) }}` | `433.33` | Average price |
| Maximum | `{{ max($payload.items[*].price) }}` | `1200` | Highest price |
| Minimum | `{{ min($payload.items[*].price) }}` | `25` | Lowest price |

## Array Slicing

| Expression | Output | Description |
|------------|--------|-------------|
| `{{ $payload.items[0:2] }}` | First 2 items | Slice from index 0 to 2 |
| `{{ $payload.items[1:] }}` | Items from index 1 onwards | Slice from index 1 to end |
| `{{ $payload.items[:2] }}` | First 2 items | Slice from start to index 2 |

## Array Sorting

| Expression | Output | Description |
|------------|--------|-------------|
| `{{ sort($payload.items[*].price) }}` | `[25, 75, 1200]` | Sort prices ascending |
| `{{ reverse(sort($payload.items[*].price)) }}` | `[1200, 75, 25]` | Sort prices descending |
| `{{ sort($payload.items[*].name) }}` | `["Keyboard","Laptop","Mouse"]` | Sort names alphabetically |

## Real-World Examples

### Example 1: Extract Product List

```js
{
  "orderRef": "{{ $payload.orderId }}",
  "productNames": "{{ $payload.items[*].name }}",
  "productCount": "{{ length($payload.items) }}",
  "orderTotal": "{{ sum($payload.items[*].price) }}"
}
```

**Output:**
```json
{
  "orderRef": "ORD-001",
  "productNames": ["Laptop", "Mouse", "Keyboard"],
  "productCount": 3,
  "orderTotal": 1300
}
```

### Example 2: Get First and Last Items

```js
{
  "firstProduct": "{{ $payload.items[0].name }}",
  "lastProduct": "{{ $payload.items[-1].name }}",
  "highestPrice": "{{ max($payload.items[*].price) }}",
  "lowestPrice": "{{ min($payload.items[*].price) }}"
}
```

### Example 3: Access Nested Arrays from Previous Node

```js
{{ $('apiCall').payload.data[*].orders[*].items[*].productId }}
```

This flattens nested arrays to get all product IDs from all orders.

## Common Patterns

### Get All Values for a Property
```js
{{ $payload.items[*].name }}
{{ $payload.users[*].email }}
{{ $payload.orders[*].orderId }}
```

### Calculate Totals
```js
{{ sum($payload.items[*].price) }}
{{ sum($payload.items[*].qty) }}
{{ avg($payload.reviews[*].rating) }}
```

### Count and Check
```js
{{ length($payload.items) }}
{{ length($payload.items) > `0` }}
{{ length($payload.errors || []) == `0` }}
```

### Combine with Other Operations
```js
{{ $payload.items[*].{product: name, total: price} }}
{{ $payload.items[?price > `50`][*].name }}
{{ reverse($payload.items)[0].name }}
```

## Tips

**Empty Array Safety:** Always provide defaults for potentially empty arrays
```js
{{ length($payload.items || []) }}
{{ ($payload.items[0] || {}).name || 'No items' }}
```

**Chaining Operations:** Use pipe `|` to chain multiple operations
```js
{{ $payload.items[*].price | sort(@) | reverse(@) }}
```

## Next Steps

- [Filtering Data](./04-filtering-data.md) - Filter arrays with conditions
- [Transforming Data](./05-transforming-data.md) - Reshape array structures
- [Using Functions](./06-using-functions.md) - More array functions
- [Cheat Sheet](./10-cheat-sheet.md) - Quick reference
