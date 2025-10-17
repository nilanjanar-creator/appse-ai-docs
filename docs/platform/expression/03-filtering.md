---
id: filtering-conditions
title: Filtering and Conditions
sidebar_position: 3
description: Techniques for filtering JSON arrays and objects using JMESPath in APPSeAI workflows.
keywords: [filtering, conditions, JMESPath, APPSeAI]
---

Master data filtering techniques to extract exactly the information you need in APPSeAI workflows. Learn to write precise queries that return only the data matching your criteria.

---

## 🔹 Why Filtering is Essential in APPSeAI

In workflow nodes, you rarely need all available data. Filtering allows you to:

- **Reduce Noise** - Process only relevant records for the current workflow step
- **Improve Performance** - Work with smaller datasets for faster execution
- **Create Dynamic Logic** - Different processing paths based on data conditions
- **Implement Business Rules** - Apply filtering criteria and constraints
- **Enhance User Experience** - Show personalized, contextual information

---

## 🔹 The Filter Mindset

Think of filtering as asking questions about your workflow data:
- "Which customers are from London?"
- "What orders cost more than $500?"
- "Who has placed more than 5 orders?"

Each question becomes a filter expression that returns matching items.

### **Filter Syntax**
```
array[?condition]
```

The `?` symbol means "where" - as in "give me users WHERE age > 30".

---

## 🔹 Basic Filtering

Filter arrays using the `[?condition]` syntax:

| **Expression** | **Output** | **APPSeAI Use Case** |
|---|---|---|
| `{{ users[?age > `30`].name }}` | `["Bob"]` | Filter mature customers for premium offers |
| `{{ users[?city == 'London'].name }}` | `["Alice"]` | Target users in specific geographic regions |
| `{{ users[?age < `30`].name }}` | `["Alice"]` | Identify young customers for youth campaigns |

---

## 🔹 Comparison Operators

| **Operator** | **Description** | **Example** |
|---|---|---|
| `==` | Equal to | `field == 'value'` |
| `!=` | Not equal to | `field != 'value'` |
| `>` | Greater than | `age > `25`` |
| `>=` | Greater than or equal | `age >= `18`` |
| `<` | Less than | `price < `100`` |
| `<=` | Less than or equal | `score <= `90`` |

---

## 🔹 Logical Operators

| **Operator** | **Description** | **Example** |
|---|---|---|
| `&&` | AND | `age > `25` && city == 'London'` |
| `\|\|` | OR | `city == 'London' \|\| city == 'Paris'` |
| `!` | NOT | `!contains(name, 'Test')` |

---

## 🔹 Complex Filtering Examples

### **Multiple Conditions (AND)**
```
{{ users[?age < `30` && city == 'London'].name }}
```
**Output:** `["Alice"]`

### **Multiple Conditions (OR)**
```
{{ users[?age > `30` || city == 'London'].name }}
```
**Output:** `["Alice", "Bob"]`

### **Nested Property Filtering**
```
{{ users[*].orders[?amount > `500`] }}
```
**Output:** 
```json
[
  [{"id":101,"product":"Laptop","amount":1200}], 
  [{"id":103,"product":"Phone","amount":800}]
]
```

---

## 🔹 String Filtering

### **Contains Check**
```
{{ users[?contains(name, 'Al')] }}
```

### **Starts With**
```
{{ users[?starts_with(city, 'New')] }}
```

### **Ends With**
```
{{ users[?ends_with(name, 'ice')] }}
```

---

## 🔹 Advanced Filtering

### **Filter by Array Contents**
```
{{ users[?contains(orders[*].product, 'Laptop')].name }}
```
**Output:** `["Alice"]`
**Description:** Users who have ordered a Laptop

### **Filter by Array Length**
```
{{ users[?length(orders) > `1`].name }}
```
**Output:** `["Alice"]`
**Description:** Users with more than 1 order

### **Filter with Calculations**
```
{{ users[?sum(orders[*].amount) > `1000`].name }}
```
**Output:** `["Alice"]`
**Description:** Users who spent more than $1000

---

## 🔹 Null and Empty Checks

### **Check for Non-Empty Arrays**
```
{{ users[?length(orders) > `0`] }}
```

### **Check for Specific Values**
```
{{ users[?city != null && city != ''] }}
```

---

## 🔹 Filter Patterns

### **1. Simple Value Filter**
```
{{ items[?field == 'value'] }}
```

### **2. Range Filter**
```
{{ items[?price >= `10` && price <= `100`] }}
```

### **3. Text Search**
```
{{ items[?contains(description, 'keyword')] }}
```

### **4. Complex Logic**
```
{{ items[?(category == 'electronics' && price < `500`) || featured == `true`] }}
```

---

## 🔹 Important Notes

1. **Use backticks** for literal values: `` `30`, `'text'`, `true` ``
2. **String literals** need quotes: `'London'`, `"New York"`
3. **Numbers** don't need quotes: `` `30`, `100.5` ``
4. **Booleans** use: `` `true`, `false` ``

---

## 🔹 Next Steps

- **[Transformations](./04-transformations.md)** - Learn to reshape filtered data
- **[Functions Reference](./05-functions.md)** - Explore filtering functions