---
id: filtering-data
title: Filtering Data
sidebar_position: 4
description: Filter arrays and objects using conditions and comparison operators.
keywords: [filtering, conditions, queries, where clause]
slug: /platform/key-concepts/expressions/filtering-data
---

# Filtering Data

Filter arrays to find items that match specific conditions using the `[?condition]` syntax.

## Example Data

```json
{
  "orderId": "ORD-001",
  "items": [
    { "name": "Laptop", "price": 1200, "qty": 1, "category": "electronics" },
    { "name": "Mouse", "price": 25, "qty": 2, "category": "electronics" },
    { "name": "Desk", "price": 350, "qty": 1, "category": "furniture" },
    { "name": "Chair", "price": 200, "qty": 2, "category": "furniture" }
  ]
}
```

## Basic Filters

| Expression | Output | Use Case |
|------------|--------|----------|
| `{{ $payload.items[?price > `100`] }}` | Items over $100 | Filter expensive items |
| `{{ $payload.items[?qty > `1`] }}` | Items with qty > 1 | Find multi-quantity items |
| `{{ $payload.items[?category == 'electronics'] }}` | Electronics only | Filter by category |
| `{{ $payload.items[?price < `100`] }}` | Items under $100 | Find affordable items |

## Comparison Operators

| Operator | Meaning | Example |
|----------|---------|---------|
| `==` | Equal to | `[?status == 'active']` |
| `!=` | Not equal | `[?status != 'cancelled']` |
| `>` | Greater than | `[?price > `100`]` |
| `>=` | Greater or equal | `[?price >= `50`]` |
| `<` | Less than | `[?qty < `10`]` |
| `<=` | Less or equal | `[?qty <= `5`]` |

## Combining Conditions

### AND Conditions (both must be true)

| Expression | Output | Use Case |
|------------|--------|----------|
| `{{ $payload.items[?price > `100` && qty > `1`] }}` | Chair only | Multiple conditions |
| `{{ $payload.items[?category == 'electronics' && price < `100`] }}` | Mouse only | Electronics under $100 |

### OR Conditions (either can be true)

| Expression | Output | Use Case |
|------------|--------|----------|
| `{{ $payload.items[?price > `500` \|\| qty > `1`] }}` | Laptop, Mouse, Chair | High price OR multi-qty |
| `{{ $payload.items[?category == 'electronics' \|\| category == 'furniture'] }}` | All items | Multiple categories |

## Filter with Projections

Combine filtering with property extraction:

| Expression | Output | Use Case |
|------------|--------|----------|
| `{{ $payload.items[?price > `100`][*].name }}` | `["Laptop","Desk","Chair"]` | Names of expensive items |
| `{{ $payload.items[?qty > `1`][*].price }}` | `[25, 200]` | Prices of multi-qty items |
| `{{ $payload.items[?category == 'electronics'][*].{product: name, cost: price} }}` | Transformed electronics | Reshape filtered results |

## Real-World Examples

### Example 1: Find High-Value Items

```js
{
  "highValueItems": "{{ $payload.items[?price > `200`][*].name }}",
  "highValueCount": "{{ length($payload.items[?price > `200`]) }}",
  "highValueTotal": "{{ sum($payload.items[?price > `200`][*].price) }}"
}
```

**Output:**
```json
{
  "highValueItems": ["Laptop", "Desk"],
  "highValueCount": 2,
  "highValueTotal": 1550
}
```

### Example 2: Category-Based Filtering

```js
{
  "electronics": "{{ $payload.items[?category == 'electronics'][*].name }}",
  "furniture": "{{ $payload.items[?category == 'furniture'][*].name }}",
  "electronicTotal": "{{ sum($payload.items[?category == 'electronics'][*].price) }}"
}
```

### Example 3: Complex Business Logic

```js
{
  "bulkOrders": "{{ $payload.items[?qty > `1` && price > `50`][*].name }}",
  "discountEligible": "{{ $payload.items[?price > `100` || qty > `1`][*].{product: name, price: price} }}"
}
```

### Example 4: Filter Previous Node Data

```js
{{ $('apiCall').payload.data[?status == 'active'][*].userId }}
{{ $('dbQuery').payload.results[?createdAt > `2024-01-01`][*].orderId }}
```

## String Filtering

| Expression | Use Case |
|------------|----------|
| `{{ $payload.items[?starts_with(name, 'L')] }}` | Names starting with 'L' |
| `{{ $payload.items[?contains(name, 'top')] }}` | Names containing 'top' |
| `{{ $payload.items[?ends_with(category, 'ics')] }}` | Categories ending with 'ics' |

## Common Patterns

### Find Active/Valid Items
```js
{{ $payload.orders[?status == 'active'] }}
{{ $payload.users[?isVerified == `true`] }}
{{ $payload.products[?inStock == `true` && price > `0`] }}
```

### Range Filters
```js
{{ $payload.items[?price >= `50` && price <= `500`] }}
{{ $payload.orders[?totalAmount > `100` && totalAmount < `1000`] }}
```

### Exclude Items
```js
{{ $payload.items[?status != 'cancelled'] }}
{{ $payload.users[?role != 'admin'] }}
{{ $payload.orders[?!contains(notes, 'test')] }}
```

### Check Existence
```js
{{ $payload.items[?not_null(discount)] }}
{{ $payload.users[?not_null(email)] }}
```

## Tips

**Use backticks for literals:** Numbers and booleans need backticks in filters
```js
{{ $payload.items[?price > `100`] }}  // Correct
{{ $payload.items[?price > 100] }}    // Wrong
```

**Combine with aggregations:**
```js
{{ length($payload.items[?price > `100`]) }}
{{ sum($payload.items[?category == 'electronics'][*].price) }}
```

**Safe filtering with defaults:**
```js
{{ ($payload.items || [])[?price > `100`] }}
```

## Next Steps

- [Transforming Data](./05-transforming-data.md) - Reshape filtered results
- [Using Functions](./06-using-functions.md) - More filter functions
- [Common Patterns](./common-patterns) - Real-world filter examples
- [Cheat Sheet](./10-cheat-sheet.md) - Quick reference

