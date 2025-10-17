---
id: data-transformations
title: Data Transformation & Projections
sidebar_position: 4
description: Reshape and transform data using projections and mappings in APPSeAI expressions.
keywords: [transformations, projections, mapping, APPSeAI]
---

Learn how to reshape and transform data using projections and mappings.

---

## 🔹 Basic Projections

Transform objects using the `{key: value}` syntax:

| **Expression** | **Output** | **Description** |
|---|---|---|
| `{{ users[*].{Name: name, Age: age} }}` | `[{"Name":"Alice","Age":28},{"Name":"Bob","Age":35}]` | Rename fields |
| `{{ users[*].{User: name, OrderCount: length(orders)} }}` | `[{"User":"Alice","OrderCount":2},{"User":"Bob","OrderCount":1}]` | Add computed fields |

---

## 🔹 Projection Syntax

### **Basic Mapping**
```
{{ items[*].{newName: oldName} }}
```

### **Multiple Fields**
```
{{ items[*].{field1: prop1, field2: prop2, field3: prop3} }}
```

### **Computed Fields**
```
{{ items[*].{name: name, total: sum(values)} }}
```

---

## 🔹 Transformation Examples

### **Rename Fields**
```
{{ users[*].{FullName: name, YearsOld: age, Location: city} }}
```
**Output:**
```json
[
  {"FullName":"Alice","YearsOld":28,"Location":"London"},
  {"FullName":"Bob","YearsOld":35,"Location":"New York"}
]
```

### **Add Calculated Fields**
```
{{ users[*].{User: name, TotalSpent: sum(orders[*].amount)} }}
```
**Output:**
```json
[
  {"User":"Alice","TotalSpent":1225},
  {"User":"Bob","TotalSpent":800}
]
```

### **Flatten Nested Data**
```
{{ users[*].orders[*].{User: @.product, Cost: amount, Category: 'Electronics'} }}
```
**Output:**
```json
[
  {"User":"Laptop","Cost":1200,"Category":"Electronics"},
  {"User":"Mouse","Cost":25,"Category":"Electronics"},
  {"User":"Phone","Cost":800,"Category":"Electronics"}
]
```

---

## 🔹 Advanced Transformations

### **Conditional Values**
```
{{ users[*].{Name: name, Status: age > `30` && 'Senior' || 'Junior'} }}
```
**Output:**
```json
[
  {"Name":"Alice","Status":"Junior"},
  {"Name":"Bob","Status":"Senior"}
]
```

### **Nested Projections**
```
{{ users[*].{
    User: name, 
    Summary: {
        Age: age, 
        City: city, 
        OrderCount: length(orders)
    }
} }}
```

### **Array Transformations**
```
{{ users[*].{User: name, Products: orders[*].product} }}
```
**Output:**
```json
[
  {"User":"Alice","Products":["Laptop","Mouse"]},
  {"User":"Bob","Products":["Phone"]}
]
```

---

## 🔹 Combining Filters and Projections

### **Filter Then Transform**
```
{{ users[?age > `25`].{Name: name, Orders: length(orders)} }}
```

### **Transform Then Filter** (using sub-expressions)
```
{{ users[*].{Name: name, Total: sum(orders[*].amount)}[?Total > `500`] }}
```

---

## 🔹 Working with Arrays

### **Transform Array Elements**
```
{{ orders[*].{Product: product, Price: amount, Tax: amount * `0.1`} }}
```

### **Group and Transform**
```
{{ users[*].{
    Customer: name,
    OrderSummary: orders[*].{Item: product, Cost: amount}
} }}
```

---

## 🔹 Data Reshaping Patterns

### **1. Simple Rename**
```
{{ items[*].{newName: oldName} }}
```

### **2. Add Computed Field**
```
{{ items[*].{name: name, calculated: field1 + field2} }}
```

### **3. Flatten Hierarchy**
```
{{ parent[*].children[*].{parentName: @.name, childData: value} }}
```

### **4. Create Summary**
```
{{ items[*].{
    name: name, 
    summary: {count: length(list), total: sum(list)}
} }}
```

---

## 🔹 Special Operators

### **Current Element (@)**
Use `@` to reference the current element in nested contexts:
```
{{ users[*].orders[*].{userName: @.name, product: product} }}
```

### **Literal Values**
Add static values to projections:
```
{{ users[*].{name: name, type: 'customer', version: `1.0`} }}
```

---

## 🔹 Best Practices

1. **Use meaningful names** for projected fields
2. **Combine related transformations** in single projections
3. **Keep projections readable** - split complex ones
4. **Use computed fields** to add business logic
5. **Leverage nested projections** for complex structures

---

## 🔹 Next Steps

- **[Functions Reference](./05-functions.md)** - Learn transformation functions
- **[Advanced Patterns](./06-advanced-patterns.md)** - Complex transformation scenarios