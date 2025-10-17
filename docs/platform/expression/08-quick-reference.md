---
id: quick-reference
title: Quick Reference
sidebar_position: 8
description: Concise cheat sheet of common JMESPath expression patterns used within APPSeAI workflows.
keywords: [quick reference, cheat sheet, jmespath]
---

Essential syntax and patterns for quick lookup.

---

## 🔹 Basic Syntax

| **Pattern** | **Description** | **Example** |
|---|---|---|
| `{{ expression }}` | Expression wrapper | `{{ users[0].name }}` |
| `[index]` | Array access | `[0]`, `[1]`, `[-1]` |
| `[*]` | All array elements | `users[*]` |
| `.property` | Property access | `.name`, `.age` |
| `[?condition]` | Filter array | `[?age > `25`]` |

---

## 🔹 Operators

| **Type** | **Operators** | **Example** |
|---|---|---|
| **Comparison** | `==`, `!=`, `>`, `>=`, `<`, `<=` | `age > `25`` |
| **Logical** | `&&`, `\|\|`, `!` | `age > `25` && city == 'London'` |
| **Arithmetic** | `+`, `-`, `*`, `/` | `price * `1.1`` |

---

## 🔹 Essential Functions

| **Function** | **Purpose** | **Example** |
|---|---|---|
| `length()` | Count items | `length(users)` |
| `sum()` | Add numbers | `sum(orders[*].amount)` |
| `max()` / `min()` | Extremes | `max(ages)` |
| `sort()` | Sort array | `sort(names)` |
| `contains()` | String search | `contains(name, 'Al')` |

---

## 🔹 Common Patterns

### **Get All Values**
```
{{ items[*].property }}
```

### **Filter Items**
```
{{ items[?condition] }}
```

### **Transform Objects**
```
{{ items[*].{newName: oldName, calculated: field1 + field2} }}
```

### **Sort and Take Top**
```
{{ sort_by(items, &field)[-5:] }}
```

---

## 🔹 Data Types

| **Type** | **Syntax** | **Example** |
|---|---|---|
| **String** | `'text'` | `'London'` |
| **Number** | `` `123` `` | `` `25`, `3.14` `` |
| **Boolean** | `` `true`/`false` `` | `` `true` `` |
| **Null** | `null` | `null` |

---

## 🔹 Filtering Quick Guide

```
// Basic filter
{{ users[?age > `25`] }}

// Multiple conditions
{{ users[?age > `25` && city == 'London'] }}

// String contains
{{ users[?contains(name, 'Al')] }}

// Array contains
{{ users[?contains(orders[*].product, 'Laptop')] }}
```

---

## 🔹 Projection Quick Guide

```
// Rename fields
{{ users[*].{Name: name, Age: age} }}

// Add calculated field
{{ users[*].{name: name, orderCount: length(orders)} }}

// Nested projection
{{ users[*].{
    user: name,
    summary: {orders: length(orders), total: sum(orders[*].amount)}
} }}
```

---

## 🔹 Function Cheat Sheet

```
// Array operations
length(array)
reverse(array)
sort(array)
unique(array)
flatten(array)

// Aggregations
sum(numbers)
avg(numbers)
max(numbers)
min(numbers)

// Sorting
sort_by(array, &field)
max_by(array, &field)
min_by(array, &field)

// Strings
contains(string, substring)
starts_with(string, prefix)
ends_with(string, suffix)
to_string(value)

// Math
abs(number)
ceil(number)
floor(number)
```

---

## 🔹 Template Integration

```json
// String template
{
  "message": "Hello {{ name }}, you have {{ count }} items"
}

// Object template
{
  "data": "{{ users[*].{name: name, total: sum(orders[*].amount)} }}"
}

// Conditional
{
  "status": "{{ count > `0` && 'active' || 'inactive' }}"
}
```

---

## 🔹 Common Mistakes

| **Mistake** | **Correct** | **Wrong** |
|---|---|---|
| Literals need backticks | `` `25`, `'text'` `` | `25`, `'text'` |
| String literals need quotes | `'London'` | `London` |
| Field references use & | `&fieldName` | `fieldName` |
| Current item reference | `@` | `this` |

---

## 🔹 Performance Tips

1. **Filter early**: `items[?condition].property`
2. **Combine operations**: Single expression vs multiple
3. **Use specific paths**: `items[0]` vs `items[*][0]`
4. **Cache calculations**: Store in variables when possible

---

## 🔹 Debugging Tips

1. **Test parts separately**: Break complex expressions
2. **Check data structure**: Verify input format
3. **Use simple expressions first**: Build complexity gradually
4. **Validate syntax**: Check brackets and quotes

---

## 🔹 Examples by Use Case

### **Data Summary**
```
{{ {
    total: length(items),
    sum: sum(items[*].value),
    average: avg(items[*].value)
} }}
```

### **Top N Items**
```
{{ sort_by(items, &score)[-5:] }}
```

### **Group by Category**
```
{{ items[*].{
    category: category,
    items: @[?category == category]
} | unique_by(@, &category) }}
```

### **Search and Filter**
```
{{ items[?contains(name, 'search') || contains(description, 'search')] }}
```

---

This quick reference covers the most commonly used patterns and syntax. For detailed explanations, refer to the specific topic documents.