# ---
id: functions-reference
title: Functions Reference
sidebar_position: 5
description: Reference for built-in and custom JMESPath functions available in APPSeAI expressions.
keywords: [functions, jmespath, date, math]
---

Complete reference of built-in functions available in expressions.

---

## 🔹 Array Functions

| **Function** | **Example** | **Output** | **Description** |
|---|---|---|---|
| `length()` | `{{ length(users) }}` | `2` | Count array elements |
| `reverse()` | `{{ reverse(users[*].name) }}` | `["Bob","Alice"]` | Reverse array order |
| `sort()` | `{{ sort(users[*].age) }}` | `[28,35]` | Sort array ascending |
| `unique()` | `{{ unique([1,2,2,3]) }}` | `[1,2,3]` | Remove duplicates |
| `flatten()` | `{{ flatten([[1,2],[3,4]]) }}` | `[1,2,3,4]` | Flatten nested arrays |

---

## 🔹 Aggregation Functions

| **Function** | **Example** | **Output** | **Description** |
|---|---|---|---|
| `sum()` | `{{ sum(users[*].orders[*].amount) }}` | `2025` | Sum numeric values |
| `avg()` | `{{ avg(users[*].age) }}` | `31.5` | Average of numbers |
| `max()` | `{{ max(users[*].age) }}` | `35` | Maximum value |
| `min()` | `{{ min(users[*].orders[*].amount) }}` | `25` | Minimum value |

---

## 🔹 Sorting Functions

| **Function** | **Example** | **Output** | **Description** |
|---|---|---|---|
| `sort_by()` | `{{ sort_by(users, &age)[*].name }}` | `["Alice","Bob"]` | Sort by field |
| `max_by()` | `{{ max_by(users[*].orders[*], &amount) }}` | `{"id":101,"product":"Laptop","amount":1200}` | Item with max field value |
| `min_by()` | `{{ min_by(users[*].orders[*], &amount) }}` | `{"id":102,"product":"Mouse","amount":25}` | Item with min field value |

---

## 🔹 String Functions

| **Function** | **Example** | **Output** | **Description** |
|---|---|---|---|
| `contains()` | `{{ contains(users[0].city, 'Lon') }}` | `true` | Check substring |
| `starts_with()` | `{{ starts_with(users[1].city, 'New') }}` | `true` | Check prefix |
| `ends_with()` | `{{ ends_with(users[0].name, 'ice') }}` | `true` | Check suffix |
| `to_string()` | `{{ to_string(users[0].age) }}` | `"28"` | Convert to string |

---

## 🔹 Math Functions

| **Function** | **Example** | **Output** | **Description** |
|---|---|---|---|
| `abs()` | `{{ abs(-5) }}` | `5` | Absolute value |
| `ceil()` | `{{ ceil(2.3) }}` | `3` | Round up |
| `floor()` | `{{ floor(2.9) }}` | `2` | Round down |
| `round()` | `{{ round(2.7) }}` | `3` | Round to nearest |

---

## 🔹 Type Conversion Functions

| **Function** | **Example** | **Description** |
|---|---|---|
| `to_string()` | `{{ to_string(123) }}` | Convert any value to string |
| `to_number()` | `{{ to_number('123') }}` | Convert string to number |
| `to_array()` | `{{ to_array('single') }}` | Convert single item to array |

---

## 🔹 Conditional Functions

### **Conditional Logic**
```
{{ users[*].{name: name, status: age > `30` && 'senior' || 'junior'} }}
```

### **Null Coalescing**
```
{{ users[*].{name: name, city: city || 'Unknown'} }}
```

---

## 🔹 Advanced Function Usage

### **Nested Function Calls**
```
{{ sort_by(users[?age > `25`], &name)[*].name }}
```
**Description:** Filter users over 25, sort by name, get names

### **Function Composition**
```
{{ max(users[*].orders[*].amount) - min(users[*].orders[*].amount) }}
```
**Description:** Calculate range of order amounts

### **Functions in Projections**
```
{{ users[*].{
    name: name,
    avgOrderValue: avg(orders[*].amount),
    orderCount: length(orders)
} }}
```

---

## 🔹 Custom Functions (Available in Your System)

### **Date Functions**
| **Function** | **Example** | **Description** |
|---|---|---|
| `now()` | `{{ now() }}` | Current timestamp |
| `date_diff()` | `{{ date_diff(date1, date2) }}` | Difference between dates |

---

## 🔹 Function Combinations

### **Complex Aggregations**
```
{{ sum(users[*].orders[?amount > `100`].amount) }}
```
**Description:** Sum of orders over $100

### **Sorting with Calculations**
```
{{ sort_by(users, &sum(orders[*].amount))[*].name }}
```
**Description:** Sort users by total spending

### **String Processing**
```
{{ users[?contains(to_string(name), 'A')].name }}
```
**Description:** Users whose name contains 'A'

---

## 🔹 Function Reference Patterns

### **1. Array Processing**
```
{{ function_name(array_expression) }}
```

### **2. Field Reference**
```
{{ sort_by(items, &field_name) }}
```

### **3. Conditional Functions**
```
{{ condition && value1 || value2 }}
```

### **4. Nested Functions**
```
{{ outer_function(inner_function(data)) }}
```

---

## 🔹 Performance Tips

1. **Filter before aggregating** for better performance
2. **Use specific field references** (`&field`) in sorting
3. **Combine operations** in single expressions when possible
4. **Cache complex calculations** if used multiple times

---

## 🔹 Next Steps

- **[Advanced Patterns](./06-advanced-patterns.md)** - Complex function combinations
- **[Template Integration](./07-template-integration.md)** - Using functions in templates