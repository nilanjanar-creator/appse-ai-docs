---
id: using-functions
title: Using Functions
sidebar_position: 6
description: Built-in functions for arrays, strings, math, and data manipulation.
keywords: [functions, built-in, array functions, string functions, type functions, date and time functions, datetime functions, utility functions, math]
slug: /platform/key-concepts/expressions/using-functions
---

# Using Functions

Built-in functions for common data manipulation tasks in APPSeAI expressions.

## Example Data

```json
{
  "orderId": "ORD-001",
  "invoiceNumber": "INV-2026-00045",
  "trackingCode": "SHIP-IN-DEL-98765",
  "created_at": "2026-01-14 12:05:20",
  "customerName": "alice johnson",
  "customerEmail": "alicejohnson@company.com",
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
| `substringBefore()` | `{{ substringBefore($payload.orderId, '-') }}` | `"ORD"` | Substring before delimiter |
| `substringAfter()` | `{{ substringAfter($payload.orderId, '-') }}` | `"001"` | Substring after delimiter |
| `split()` | `{{ split($payload.orderId, '-') }}` | `["ORD","001"]` | Split string |

## Type Functions

| Function | Expression | Output | Use Case |
|----------|------------|--------|----------|
| `to_string()` | `{{ to_string($payload.items[0].price) }}` | `"1200"` | Convert to string |
| `to_number()` | `{{ to_number('123') }}` | `123` | Convert to number |
| `type()` | `{{ type($payload.items) }}` | `"array"` | Get data type |
| `not_null()` | `{{ $payload.items[?not_null(discount)] }}` | Items with discount | Filter nulls |

## Date and Time Functions

| Function | Expression | Output | Use Case |
|----------|------------|--------|----------|
| `to_iso_utc()` | `{{ to_iso_utc($payload.created_at) }}` | `"2026-01-14T12:05:20Z"` | Convert datetime to UTC |
| `now()` | `{{ now() }}` | `2026-01-16T07:29:05.5390268Z` | Get current execution timestamp |
| `get_unix_timestamp()` | `{{ get_unix_timestamp($payload.created_at) }}` | `1768392320000` | Convert datetime field to Unix epoch (ms) |

## Utility Functions

| Function | Expression | Output | Use Case |
|----------|------------|--------|----------|
| `uniqueid()` | `{{ uniqueid() }}` | `"a3f9c8e2-7b4c-4f01-9c6e-92a1e7d10c45"` | Generate unique identifier |

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
  "productSummary": "{{ join(' | ', $payload.items[*].name) }}",
  "orderType": "{{ split($payload.orderId, '-')[0] }}",
  "orderNumber": "{{ split($payload.orderId, '-')[1] }}",
  "invoiceType": "{{ substringBefore($payload.invoiceNumber, '-') }}",
  "destinationCode": "{{ substringAfter($payload.trackingCode, 'DEL-') }}"
}
```

**Output:**
```js
{
  "orderId": "ORD-001",
  "searchKey": "alice johnson",
  "displayName": "ALICE JOHNSON",
  "productSummary": "Laptop | Mouse | Keyboard",
  "orderType": "ORD",
  "orderNumber": "001",
  "invoiceType": "INV",
  "destinationCode": "98765"
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

### Example 5: Generate Unique Id

```js
{
  "transactionId": "{{ uniqueid() }}"
}
```

**Output:**
```js
{
  "transactionId": "a3f9c8e2-7b4c-4f01-9c6e-92a1e7d10c45"
}
```

### Example 6: Date and time Operations

```js
{
  "orderCreatedAtEpoch": "{{ get_unix_timestamp($payload.created_at) }}",
  "currentTime": "{{ now() }}",
  "isOrderPast": "{{ get_unix_timestamp($payload.created_at) < get_unix_timestamp(now()) }}"
  "createdAt": "{{ to_iso_utc($payload.created_at) }}
}
```

**Output:**
```js
{
  "orderCreatedAtEpoch": "1768392320000",
  "currentTime": "2026-01-16T08:13:49.2091871Z",
  "isOrderPast": "True"
  "createdAt": "2026-01-14T12:05:20Z"
}
```

## Combining Functions

Chain multiple functions together:

```js
{{ join(', ', sort($payload.items[*].name)) }}
{{ upper(join(' ', $payload.items[*].name)) }}
{{ round(avg($payload.items[?price > `50`][*].price)) }}
{{ length(unique($payload.tags)) }}
{{ split(to_iso_utc(substringBefore($payload.created_at, ' ')), 'T')[0] }}
```

## Functions with Filters

Use functions on filtered data:

```js
{{ sum($payload.items[?price > `100`][*].price) }}
{{ avg($payload.items[?qty > `1`][*].price) }}
{{ length($payload.items[?contains(name, 'top')]) }}
{{ join(', ', $payload.items[?price > `50`][*].name) }}
{{ substringBefore($payload.orderId, '-') == 'ORD' }}
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
{{ to_iso_utc($payload.created_at) }}

```

### Validate Data
```js
{{ length($payload.items) > `0` }}
{{ contains($payload.email, '@') }}
{{ starts_with($payload.orderId, 'ORD-') }}
{{ substringAfter($payload.customerEmail, '@') == 'company.com' }}
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

