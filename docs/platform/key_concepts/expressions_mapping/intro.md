---
id: intro
title: Expression Language Overview
sidebar_position: 0
description: Transform and query workflow data using expressions in APPSeAI nodes.
keywords: [expressions, JMESPath, APPSeAI, workflow, data transformation]
slug: /platform/key-concepts/expressions/overview
---

# Expression Language in APPSeAI

Transform and query JSON data as it flows through your workflow nodes using simple expressions.

## What Are Expressions?

Expressions use JMESPath syntax inside double curly braces to access and transform data:

```js
{{ $payload.orderId }}
{{ $payload.items[*].name }}
{{ $('nodeName').payload.email }}
{{ $('nodeName').matchedPayload[] }}
{{ $('nodeName').all[] }}
```

## Key Concepts

| Concept | Syntax | Description |
|---------|--------|-------------|
| Current node data | `$payload` | Access data flowing into this node |
| Previous node data | `$('nodeName').payload` | Access output from a previous node |
| Property access | `.property` | Get a field value |
| Matched data from a node | `$('nodeName').matchedPayload[]` | Access only matched/filtered items from a node |
| All data from a node | `$('nodeName').all[]` | Access complete output (all items) from a node |
| Array operations | `[*]` | Work with all array elements |
| Filtering | `[?condition]` | Select items matching criteria |

## Quick Examples

> ⚠️ Note:
> This sample JSON is a simplified representation for understanding purposes.
> - `$payload` refers to the data received from the immediately preceding node.
> - `$('nodeName').payload` refers to data from any specific previous node in the same workflow branch (not the immediate one).
> 
> In actual workflows, these come from different nodes, but are shown together here for easier understanding.

```JSON{
  "orderId": "ORD-001",
  "items": [
    { "name": "Laptop", "price": 1000 },
    { "name": "Mouse", "price": 225 }
  ],
  "crmLeads": [
    { "name": "Alice", "email": "a@abc.com", "status": "Qualified" },
    { "name": "Bob", "email": "b@abc.com", "status": "Lost Lead" },
    { "name": "Charlie", "email": "c@abc.com", "status": "Qualified" }
  ]
}
```

| What You Want | Expression | Output |
|---------------|------------|--------|
| Get order ID | `{{ $payload.orderId }}` | `"ORD-001"` |
| List product names | `{{ $payload.items[*].name }}` | `["Laptop", "Mouse"]` |
| Count items | `{{ length($payload.items) }}` | `2` |
| Calculate total | `{{ sum($payload.items[*].price) }}` | `1225` |
| Get all records from a node | `{{ $('nodeName').all[].email }}` | `["a@abc.com", "b@abc.com", "c@abc.com"]` |
| Get filtered records from a node | `{{ $('nodeName').matchedPayload[].crmLeads[?status == 'Qualified'].name[] }}` | `["Alice", "Charlie"]` |

## Get Started

Choose your path:

**New to expressions?**  
Start here: [Quick Start Guide](./01-quick-start.md) - Learn by doing in 3 minutes

**Need a specific pattern?**  
Jump to: [Cheat Sheet](./10-cheat-sheet.md) - All operators and functions

**Ready to learn systematically?**  
Follow the complete guide:
1. [Accessing Data](./02-accessing-data.md) - Properties and nested data
2. [Working with Arrays](./03-working-with-arrays.md) - Array operations
3. [Filtering Data](./04-filtering-data.md) - Conditions and queries
4. [Transforming Data](./05-transforming-data.md) - Reshape structures
5. [Using Functions](./06-using-functions.md) - Built-in functions
6. [Common Patterns](./common-patterns) - Real-world examples

