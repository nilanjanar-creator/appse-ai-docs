---
id: cheat-sheet
title: Expression Cheat Sheet
sidebar_position: 10
description: Quick reference for all expression operators, functions, and common patterns.
keywords: [cheat sheet, reference, operators, functions, quick guide]
slug: /platform/key-concepts/expressions/cheat-sheet
---

# Expression Cheat Sheet

Quick reference for APPSeAI expression syntax. Bookmark this page for instant lookup.

## Data Access

| Pattern | Example | Result |
|---------|---------|--------|
| Simple property | `{{ $payload.orderId }}` | `"ORD-001"` |
| Nested property | `{{ $payload.user.email }}` | `"user@example.com"` |
| Array element | `{{ $payload.items[0] }}` | First item object |
| Last element | `{{ $payload.items[-1] }}` | Last item object |
| All elements | `{{ $payload.items[*].name }}` | Array of all names |
| Previous node | `{{ $('nodeName').payload.field }}` | Value from previous node |

## Array Operations

| Operation | Example | Result |
|-----------|---------|--------|
| Get all values | `{{ $payload.items[*].price }}` | `[1200, 25]` |
| First item | `{{ $payload.items[0].name }}` | `"Laptop"` |
| Last item | `{{ $payload.items[-1].name }}` | `"Mouse"` |
| Slice array | `{{ $payload.items[0:2] }}` | First 2 items |
| Count items | `{{ length($payload.items) }}` | `2` |
| Reverse order | `{{ reverse($payload.items) }}` | Reversed array |

## Filtering

| Filter Type | Example | Result |
|-------------|---------|--------|
| Comparison | `{{ $payload.items[?price > `100`] }}` | Items over $100 |
| Equality | `{{ $payload.items[?status == 'active'] }}` | Active items |
| Not equal | `{{ $payload.items[?qty != `0`] }}` | Items with quantity |
| Greater/Less | `{{ $payload.items[?price >= `50`] }}` | Items $50 or more |
| AND condition | `{{ $payload.items[?price > `50` && qty > `1`] }}` | Multiple conditions |
| OR condition | `{{ $payload.items[?status == 'new' \|\| status == 'pending'] }}` | Either condition |

## Transformations

| Pattern | Example | Result |
|---------|---------|--------|
| Rename fields | `{{ $payload.{id: orderId, name: customerName} }}` | New structure |
| Select fields | `{{ $payload.items[*].{product: name, cost: price} }}` | Transformed array |
| Add computed field | `{{ $payload.{total: sum(items[*].price)} }}` | With calculation |
| Flatten nested | `{{ $payload.orders[*].items[*] }}` | Single array |
| Multi-projection | `{{ $payload.items[*].[name, price] }}` | Array of arrays |

## Math & Aggregation

| Function | Example | Result |
|----------|---------|--------|
| Sum | `{{ sum($payload.items[*].price) }}` | `1225` |
| Average | `{{ avg($payload.items[*].price) }}` | `612.5` |
| Maximum | `{{ max($payload.items[*].price) }}` | `1200` |
| Minimum | `{{ min($payload.items[*].price) }}` | `25` |
| Count | `{{ length($payload.items) }}` | `2` |

## String Functions

| Function | Example | Result |
|----------|---------|--------|
| Uppercase | `{{ upper($payload.status) }}` | `"PENDING"` |
| Lowercase | `{{ lower($payload.customerName) }}` | `"alice johnson"` |
| Concat | `{{ join(', ', $payload.items[*].name) }}` | `"Laptop, Mouse"` |
| Contains | `{{ contains($payload.status, 'pend') }}` | `true` |
| Starts with | `{{ starts_with($payload.orderId, 'ORD') }}` | `true` |
| Ends with | `{{ ends_with($payload.orderId, '001') }}` | `true` |

## Array Functions

| Function | Example | Result |
|----------|---------|--------|
| Length | `{{ length($payload.items) }}` | `2` |
| Sort | `{{ sort($payload.items[*].price) }}` | `[25, 1200]` |
| Reverse | `{{ reverse($payload.items[*].name) }}` | Reversed |
| Unique | `{{ unique($payload.tags) }}` | No duplicates |
| Flatten | `{{ $payload.orders[*].items[*] }}` | Flat array |

## Type Functions

| Function | Example | Use Case |
|----------|---------|----------|
| to_string | `{{ to_string($payload.orderId) }}` | Convert to string |
| to_number | `{{ to_number($payload.price) }}` | Convert to number |
| type | `{{ type($payload.items) }}` | Get data type |
| not_null | `{{ $payload.items[?not_null(discount)] }}` | Filter nulls |

## Comparison Operators

| Operator | Meaning | Example |
|----------|---------|---------|
| `==` | Equal to | `status == 'active'` |
| `!=` | Not equal | `qty != `0`` |
| `>` | Greater than | `price > `100`` |
| `>=` | Greater or equal | `price >= `50`` |
| `<` | Less than | `qty < `10`` |
| `<=` | Less or equal | `qty <= `5`` |

## Logical Operators

| Operator | Meaning | Example |
|----------|---------|---------|
| `&&` | AND | `price > `50` && qty > `1`` |
| `\|\|` | OR | `status == 'new' \|\| status == 'pending'` |
| `!` | NOT | `!contains(name, 'test')` |

## Common Patterns

### Safe Navigation (Avoid Errors)
```js
{{ $payload.user.email || 'no-email@example.com' }}
{{ ($payload.items[0] || {}).name || 'No items' }}
{{ length($payload.items || []) }}
```

### Conditional Logic
```js
{{ $payload.totalAmount > `1000` && 'Premium' || 'Standard' }}
{{ $payload.qty > `0` && 'In Stock' || 'Out of Stock' }}
```

### Data Reshaping
```js
{{ $payload.items[*].{
  product: name,
  total: price,
  inStock: qty > `0`
} }}
```

### Chaining Operations
```js
{{ $payload.items[?price > `50`][*].name | sort(@) }}
{{ $payload.orders[*].items[*] | length(@) }}
```

## Quick Tips

**Backticks for literals:** Use backticks for numbers and booleans: `` `100` ``, `` `true` ``

**Pipe for chaining:** Use `|` to chain operations: `{{ expression | function(@) }}`

**@ for current element:** In projections, `@` refers to current element

**|| for defaults:** Provide fallback values: `{{ field || 'default' }}`

---

**Need more details?** See the full guides:
- [Quick Start](./01-quick-start.md)
- [Accessing Data](./02-accessing-data.md)
- [Working with Arrays](./03-working-with-arrays.md)
- [Filtering Data](./04-filtering-data.md)
- [Common Patterns](./common-patterns)

