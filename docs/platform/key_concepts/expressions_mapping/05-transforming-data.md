---
id: transforming-data
title: Transforming Data
sidebar_position: 5
description: Reshape and transform data structures using projections and mappings.
keywords: [transformation, projection, mapping, reshape]
slug: /platform/key-concepts/expressions/transforming-data
---

# Transforming Data

Reshape and transform data structures to match your target format using projections.

## Example Data

```json
{
  "orderId": "ORD-001",
  "customerName": "Alice Johnson",
  "email": "alice@example.com",
  "items": [
    { "name": "Laptop", "price": 1200, "qty": 1 },
    { "name": "Mouse", "price": 25, "qty": 2 }
  ],
  "totalAmount": 1250
}
```

## Object Projections

Rename and restructure object properties:

| Expression | Output | Use Case |
|------------|--------|----------|
| `{{ $payload.{id: orderId, customer: customerName} }}` | `{"id":"ORD-001","customer":"Alice Johnson"}` | Rename fields |
| `{{ $payload.{order: orderId, total: totalAmount, itemCount: length(items)} }}` | With computed field | Add calculations |
| `{{ $payload.{ref: orderId, contact: email} }}` | `{"ref":"ORD-001","contact":"alice@example.com"}` | Select & rename |

## Array Projections

Transform all items in an array:

| Expression | Output | Use Case |
|------------|--------|----------|
| `{{ $payload.items[*].{product: name, price: price} }}` | Array of transformed objects | Rename array fields |
| `{{ $payload.items[*].{item: name, total: price} }}` | `[{"item":"Laptop","total":1200}...]` | Consistent naming |
| `{{ $payload.items[*].{product: name, inStock: qty > `0`} }}` | With computed boolean | Add logic |

## Multi-Select Projections

Select multiple properties as arrays:

| Expression | Output | Use Case |
|------------|--------|----------|
| `{{ $payload.items[*].[name, price] }}` | `[["Laptop",1200],["Mouse",25]]` | Pair values |
| `{{ $payload.items[*].[name, price, qty] }}` | `[["Laptop",1200,1],...]` | Multiple values |

## Computed Fields

Add calculated or derived fields:

| Expression | Output | Use Case |
|------------|--------|----------|
| `{{ $payload.{orderId: orderId, itemCount: length(items), avgPrice: avg(items[*].price)} }}` | With averages | Add statistics |
| `{{ $payload.items[*].{name: name, total: price * qty} }}` | Calculated totals | Multiply values |
| `{{ $payload.{order: orderId, hasItems: length(items) > `0`} }}` | Boolean logic | Add conditions |

## Real-World Examples

### Example 1: API Response Transformation

**Transform internal data for external API:**

```js
{
  "orderId": "{{ $payload.orderId }}",
  "customerEmail": "{{ $payload.email }}",
  "lineItems": "{{ $payload.items[*].{
    productName: name,
    unitPrice: price,
    quantity: qty,
    lineTotal: price * qty
  } }}",
  "orderTotal": "{{ sum($payload.items[*].price) }}"
}
```

**Output:**
```json
{
  "orderId": "ORD-001",
  "customerEmail": "alice@example.com",
  "lineItems": [
    {
      "productName": "Laptop",
      "unitPrice": 1200,
      "quantity": 1,
      "lineTotal": 1200
    },
    {
      "productName": "Mouse",
      "unitPrice": 25,
      "quantity": 2,
      "lineTotal": 50
    }
  ],
  "orderTotal": 1225
}
```

### Example 2: Database Record Mapping

```js
{
  "records": "{{ $payload.items[*].{
    product_name: name,
    unit_price: price,
    quantity_ordered: qty,
    order_reference: $payload.orderId
  } }}"
}
```

### Example 3: Flatten Nested Structure

```js
{{ $('apiResponse').payload.data[*].{
  userId: user.id,
  userName: user.name,
  userEmail: user.contact.email,
  orderCount: length(orders)
} }}
```

### Example 4: Filter and Transform

```js
{{ $payload.items[?price > `50`][*].{
  productName: name,
  discountedPrice: price * `0.9`,
  savings: price * `0.1`
} }}
```

## Nested Transformations

Transform nested arrays and objects:

```js
{{ $payload.{
  orderInfo: {id: orderId, customer: customerName},
  products: items[*].{name: name, cost: price},
  summary: {total: totalAmount, count: length(items)}
} }}
```

## Common Patterns

### Rename All Fields
```js
{{ $payload.items[*].{
  productName: name,
  productPrice: price,
  productQty: qty
} }}
```

### Add Standard Fields
```js
{{ $payload.items[*].{
  id: name,
  value: price,
  timestamp: '2024-01-01',
  source: 'order-system'
} }}
```

### Combine Multiple Sources
```js
{
  "orderId": "{{ $payload.orderId }}",
  "customerData": "{{ $('getCustomer').payload.{name: fullName, email: email} }}",
  "orderItems": "{{ $payload.items[*].{product: name, price: price} }}"
}
```

### Conditional Transformation
```js
{{ $payload.items[*].{
  name: name,
  price: price,
  status: qty > `0` && 'In Stock' || 'Out of Stock',
  priority: price > `500` && 'High' || 'Normal'
} }}
```

## Tips

**Keep transformations simple:** Break complex transformations into multiple steps

**Use consistent naming:** Follow your API/database naming conventions

**Test incrementally:** Build transformations step by step

**Combine with filters:**
```js
{{ $payload.items[?price > `100`][*].{product: name, price: price} }}
```

## Next Steps

- [Using Functions](./06-using-functions.md) - Functions for transformations
- [Common Patterns](./common-patterns) - Real-world transformation examples
- [Cheat Sheet](./10-cheat-sheet.md) - Quick reference

