---
id: expression-basics
title: Expression Basics
sidebar_position: 1
description: Core concepts and simple examples for APPSeAI expression syntax and usage.
keywords: [expressions, JMESPath, APPSeAI, basics]
---

### Introduction
Learn the fundamental concepts of writing expressions for APPSeAI workflow nodes. This guide covers core syntax and simple examples to get you started with dynamic data mapping.

---

## 🔹 What are Expressions?

In APPSeAI workflow nodes, expressions are written between double curly braces `{{}}` and use **JMESPath** syntax to query and transform JSON data as it flows through your workflows.

### **Syntax Pattern**
```
{{ jmespath_expression }}
```

### **How It Works in APPSeAI**
1. **Data Input** - Node receives JSON data from previous workflow steps
2. **Expression Evaluation** - `{{}}` expressions are processed with the input data
3. **Dynamic Output** - Transformed results flow to the next node

---

## 🔹 Example Data Structure

Throughout these guides, we'll use this sample data representing typical workflow data:

```json
{
  "users": [
    {
      "id": 1,
      "name": "Alice",
      "age": 28,
      "city": "London",
      "orders": [
        { "id": 101, "product": "Laptop", "amount": 1200 },
        { "id": 102, "product": "Mouse", "amount": 25 }
      ]
    },
    {
      "id": 2,
      "name": "Bob",
      "age": 35,
      "city": "New York",
      "orders": [
        { "id": 103, "product": "Phone", "amount": 800 }
      ]
    }
  ]
}
```

---

## 🔹 Simple Examples

### **Get a Single Value**
```
{{ users[0].name }}
```
**Output:** `"Alice"`
**Use Case:** Extract a specific user's name for display or processing

### **Get a Number**
```
{{ users[1].age }}
```
**Output:** `35`
**Use Case:** Access numeric data for calculations or filtering

### **Count Items**
```
{{ length(users) }}
```
**Output:** `2`
**Use Case:** Count records for pagination or reporting

---

## 🔹 Expression Output Types

Understanding what your expressions will return:

| **Expression Result** | **Output Type** | **Example** | **APPSeAI Usage** |
|---|---|---|---|
| Single string | String | `"Alice"` | Field mapping, display text |
| Single number | Number | `28` | Calculations, comparisons |
| Single boolean | Boolean | `true` | Conditional logic, flags |
| Array | JSON Array | `["Alice", "Bob"]` | List processing, iterations |
| Object | JSON Object | `{"name":"Alice","age":28}` | Structured data mapping |
| Complex structure | Nested JSON | `[{"User":"Alice","Orders":[...]}]` | Complete data transformations |

---

## 🔹 Key Concepts for APPSeAI

### **1. Dot Notation for Field Mapping**
Access nested properties to map between different data structures:
```
{{ users[0].name }}          // Map to 'customerName' field
{{ users[0].orders[0].id }}  // Extract order ID for processing
```

### **2. Array Indexing for Data Selection**
```
{{ users[0] }}    // First user record
{{ users[1] }}    // Second user record  
{{ users[-1] }}   // Last user (useful for recent data)
```

### **3. Wildcards for Bulk Operations**
```
{{ users[*] }}         // All user records
{{ users[*].name }}    // All user names for dropdown lists
```

---

## 🔹 Common APPSeAI Scenarios

### **Field Mapping Between Nodes**
```json
{
  "customerName": "{{ users[0].name }}",
  "customerEmail": "{{ users[0].email }}",
  "totalOrders": "{{ length(users[0].orders) }}"
}
```

### **Dynamic Configuration**
```json
{
  "apiUrl": "{{ baseUrl }}/users/{{ users[0].id }}",
  "batchSize": "{{ length(users) }}"
}
```

### **Status Determination**
```json
{
  "processingStatus": "{{ length(users) > `0` && 'ready' || 'waiting' }}"
}
```

---

## 🔹 Expression Evaluation Context

In APPSeAI workflow nodes:

- **Input Data** - Available as root object for expressions
- **Node Configuration** - Dynamic fields support expressions  
- **Runtime Evaluation** - Expressions process with actual workflow data
- **Type Preservation** - Output types match expression results

---

## 🔹 Best Practices for APPSeAI

1. **Test with Sample Data** - Verify expressions before deploying workflows
2. **Use Meaningful Field Names** - Make mappings clear and maintainable
3. **Handle Empty Data** - Plan for cases when arrays or objects are empty
4. **Keep Simple Expressions Readable** - Complex logic can go in advanced patterns
5. **Document Complex Mappings** - Add comments for intricate transformations

---

## 🔹 Next Steps

Now that you understand the basics, explore more advanced capabilities:

- **[Data Access Patterns](./02-data-access.md)** - Learn property access and array operations
- **[Filtering Data](./03-filtering.md)** - Filter data with conditions
- **[Functions Reference](./05-functions.md)** - Explore built-in functions
- **[Quick Reference](./08-quick-reference.md)** - Essential syntax cheat sheet

Ready to start mapping data dynamically in your APPSeAI workflows!

## 🔹 Next Steps

- **[Data Access Patterns](./02-data-access.md)** - Learn property access and array operations
- **[Filtering](./03-filtering.md)** - Filter data with conditions
- **[Functions Reference](./05-functions.md)** - Explore built-in functions