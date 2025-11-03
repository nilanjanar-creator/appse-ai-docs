---
id: using-functions
title: Using Functions
sidebar_position: 6
description: Built-in functions for arrays, strings, math, and data manipulation.
keywords: [functions, built-in, array functions, string functions, math]
slug: /platform/key-concepts/expressions/using-functions
---

# Using Functions

Built-in functions for common data manipulation tasks in APPSeAI expressions.

## Example Data

```json
{
  "orderId": "ORD-001",
  "customerName": "alice johnson",
  "items": [
    { "name": "Laptop", "price": 1200, "qty": 1 },
    { "name": "Mouse", "price": 25, "qty": 2 },
    { "name": "Keyboard", "price": 75, "qty": 1 }
  ],
  "tags": ["electronics", "office", "electronics", "hardware"]
}
```

## Array Functions

| Function | Expression | Output | Use Case |
|----------|------------|--------|----------|
| `length()` | `{{ length($payload.items) }}` | `3` | Count items |
| `sum()` | `{{ sum($payload.items[*].price) }}` | `1300` | Total prices |
| `avg()` | `{{ avg($payload.items[*].price) }}` | `433.33` | Average price |
| `max()` | `{{ max($payload.items[*].price) }}` | `1200` | Highest price |
| `min()` | `{{ min($payload.items[*].price) }}` | `25` | Lowest price |
| `sort()` | `{{ sort($payload.items[*].price) }}` | `[25,75,1200]` | Sort ascending |
| `reverse()` | `{{ reverse($payload.items[*].name) }}` | Reversed array | Reverse order |
| `unique()` | `{{ unique($payload.tags) }}` | `["electronics","office","hardware"]` | Remove duplicates |

## String Functions

| Function | Expression | Output | Use Case |
|----------|------------|--------|----------|
| `upper()` | `{{ upper($payload.customerName) }}` | `"ALICE JOHNSON"` | Uppercase |
| `lower()` | `{{ lower($payload.orderId) }}` | `"ord-001"` | Lowercase |
| `join()` | `{{ join(', ', $payload.items[*].name) }}` | `"Laptop, Mouse, Keyboard"` | Concat array |
| `contains()` | `{{ contains($payload.orderId, 'ORD') }}` | `true` | Check substring |
| `starts_with()` | `{{ starts_with($payload.orderId, 'ORD') }}` | `true` | Check prefix |
| `ends_with()` | `{{ ends_with($payload.orderId, '001') }}` | `true` | Check suffix |

## Type Functions

| Function | Expression | Output | Use Case |
|----------|------------|--------|----------|
| `to_string()` | `{{ to_string($payload.items[0].price) }}` | `"1200"` | Convert to string |
| `to_number()` | `{{ to_number('123') }}` | `123` | Convert to number |
| `type()` | `{{ type($payload.items) }}` | `"array"` | Get data type |
| `not_null()` | `{{ $payload.items[?not_null(discount)] }}` | Items with discount | Filter nulls |

## Math Functions

| Function | Expression | Output | Use Case |
|----------|------------|--------|----------|
| `abs()` | `{{ abs(`-10`) }}` | `10` | Absolute value |
| `ceil()` | `{{ ceil(`10.3`) }}` | `11` | Round up |
| `floor()` | `{{ floor(`10.9`) }}` | `10` | Round down |
| `round()` | `{{ round(`10.5`) }}` | `11` | Round nearest |

## Real-World Examples

### Example 1: Order Summary with Functions

```js
{
  "orderRef": "{{ upper($payload.orderId) }}",
  "customerName": "{{ upper($payload.customerName) }}",
  "productList": "{{ join(', ', $payload.items[*].name) }}",
  "totalItems": "{{ length($payload.items) }}",
  "subtotal": "{{ sum($payload.items[*].price) }}",
  "averagePrice": "{{ round(avg($payload.items[*].price)) }}",
  "highestPrice": "{{ max($payload.items[*].price) }}",
  "lowestPrice": "{{ min($payload.items[*].price) }}"
}
```

**Output:**
```json
{
  "orderRef": "ORD-001",
  "customerName": "ALICE JOHNSON",
  "productList": "Laptop, Mouse, Keyboard",
  "totalItems": 3,
  "subtotal": 1300,
  "averagePrice": 433,
  "highestPrice": 1200,
  "lowestPrice": 25
}
```

### Example 2: Data Validation

```js
{
  "hasItems": "{{ length($payload.items) > `0` }}",
  "hasValidEmail": "{{ contains($payload.email, '@') }}",
  "isHighValue": "{{ sum($payload.items[*].price) > `500` }}",
  "uniqueCategories": "{{ length(unique($payload.tags)) }}"
}
```

### Example 3: String Manipulation

```js
{
  "orderId": "{{ upper($payload.orderId) }}",
  "searchKey": "{{ lower($payload.customerName) }}",
  "displayName": "{{ upper($payload.customerName) }}",
  "productSummary": "{{ join(' | ', $payload.items[*].name) }}"
}
```

### Example 4: Sorting and Filtering

```js
{
  "pricesSorted": "{{ sort($payload.items[*].price) }}",
  "pricesDescending": "{{ reverse(sort($payload.items[*].price)) }}",
  "topPrices": "{{ reverse(sort($payload.items[*].price))[0:2] }}",
  "uniqueTags": "{{ unique($payload.tags) }}"
}
```

## Combining Functions

Chain multiple functions together:

```js
{{ join(', ', sort($payload.items[*].name)) }}
{{ upper(join(' ', $payload.items[*].name)) }}
{{ round(avg($payload.items[?price > `50`][*].price)) }}
{{ length(unique($payload.tags)) }}
```

## Functions with Filters

Use functions on filtered data:

```js
{{ sum($payload.items[?price > `100`][*].price) }}
{{ avg($payload.items[?qty > `1`][*].price) }}
{{ length($payload.items[?contains(name, 'top')]) }}
{{ join(', ', $payload.items[?price > `50`][*].name) }}
```

## Common Patterns

### Calculate Totals
```js
{{ sum($payload.items[*].price) }}
{{ sum($payload.items[*].(price * qty)) }}
```

### Format Display
```js
{{ upper($payload.status) }}
{{ join(' - ', $payload.tags) }}
{{ to_string($payload.totalAmount) }}
```

### Validate Data
```js
{{ length($payload.items) > `0` }}
{{ contains($payload.email, '@') }}
{{ starts_with($payload.orderId, 'ORD-') }}
```

### Get Statistics
```js
{{ avg($payload.items[*].price) }}
{{ max($payload.items[*].qty) }}
{{ min($payload.items[*].price) }}
```

## Tips

**Pipe syntax:** Use `|` for function chaining
```js
{{ $payload.items[*].price | sort(@) | reverse(@) }}
```

**@ symbol:** Refers to current element in pipes
```js
{{ $payload.items | length(@) }}
```

**Combine with projections:**
```js
{{ $payload.items[*].{name: name, total: sum(price)} }}
```

## Next Steps

- [Common Patterns](./common-patterns) - Real-world function examples
- [Cheat Sheet](./10-cheat-sheet.md) - Complete function reference

