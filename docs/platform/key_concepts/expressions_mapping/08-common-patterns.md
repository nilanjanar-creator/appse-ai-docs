---
id: common-patterns
title: Common Patterns
sidebar_position: 8
description: Real-world patterns and examples for APPSeAI workflow expressions.
keywords: [patterns, examples, real-world, workflows]
slug: /platform/key-concepts/expressions/common-patterns
---

Real-world patterns and examples for common workflow scenarios.

---

## 🔹 Example Data Structure

**Current Node Input (Single Order Object):**

```json
{
  "orderId": "ORD-001",
  "customerId": "CUST-123",
  "customerName": "Alice Johnson",
  "items": [
    { "itemCode": "LAPTOP-001", "name": "Laptop", "qty": 1, "price": 1200 },
    { "itemCode": "MOUSE-002", "name": "Mouse", "qty": 2, "price": 25 }
  ],
  "status": "pending",
  "totalAmount": 1250
}
```

---

## 🔹 Complex Data Analysis

### **Most Expensive Item Analysis**
```js
{{ max_by($payload.items, &price).name }}
```
**Output:** `"Laptop"`
**Use Case:** Find the most expensive item in the order

### **Order Summary Dashboard**
```js
{{ $payload.{
    OrderId: orderId,
    ItemCount: length(items),
    TotalValue: sum(items[*].price),
    AvgItemPrice: avg(items[*].price) || `0`,
    TopItem: max_by(items, &price).name || 'None'
} }}
```
**Output:**
```json
{
  "OrderId": "ORD-001",
  "ItemCount": 2,
  "TotalValue": 1225,
  "AvgItemPrice": 612.5,
  "TopItem": "Laptop"
}
```
**Use Case:** Complete order analytics dashboard

---

## 🔹 Multi-Level Aggregations

### **Order Statistics**
```js
{{ {
    orderId: $payload.orderId,
    itemCount: length($payload.items),
    totalValue: sum($payload.items[*].price),
    totalQuantity: sum($payload.items[*].qty),
    avgPrice: avg($payload.items[*].price),
    highestPricedItem: max_by($payload.items, &price).name
} }}
```

### **Category Classification**
```js
{{ $payload.items[*].{
    product: name,
    price: price,
    category: contains(name, 'Laptop') && 'Computer' || 
              contains(name, 'Mouse') && 'Accessory' || 'Other'
}[?category != 'Other'] }}
```

---

## 🔹 Data Validation Patterns

### **Order Quality Checks**
```js
{{ $payload.{
    orderId: orderId,
    hasItems: length(items) > `0`,
    validTotal: totalAmount > `0`,
    hasCustomer: customerId != null && customerId != '',
    dataQuality: (length(items) > `0`) && (totalAmount > `0`) && (customerId != null) && 'Good' || 'Poor'
} }}
```

### **Missing Data Detection**
```js
{{ $payload.items[?name == null || name == '' || price == `0`] }}
```

---

## 🔹 Business Logic Implementation

### **Item Value Classification**
```js
{{ $payload.items[*].{
    product: name,
    price: price,
    valueCategory: 
        price > `1000` && 'Premium' ||
        price > `100` && 'Standard' ||
        'Budget'
} }}
```

### **Discount Calculation**
```js
{{ $payload.items[*].{
    product: name,
    originalPrice: price,
    discount: price > `1000` && price * `0.1` ||
              price > `500` && price * `0.05` ||
              `0`,
    finalPrice: price - (
        price > `1000` && price * `0.1` ||
        price > `500` && price * `0.05` ||
        `0`
    )
} }}
```
**Output:**
```json
[
  {
    "product": "Laptop",
    "originalPrice": 1200,
    "discount": 120,
    "finalPrice": 1080
  },
  {
    "product": "Mouse",
    "originalPrice": 25,
    "discount": 0,
    "finalPrice": 25
  }
]
```

---

## 🔹 Cross-Node Data Integration

### **Combine Current Order with Customer Data**
```js
{{ {
    orderId: $payload.orderId,
    customerName: $payload.customerName,
    customerEmail: $('getCustomer').payload.email,
    items: $payload.items[*].name,
    shippingAddress: $('getCustomer').payload.shippingAddress
} }}
```
**Use Case:** Merge order data with customer details from a previous node

### **Previous Node Price Lookup**
```js
{{ $payload.items[*].{
    itemCode: itemCode,
    currentPrice: price,
    catalogPrice: $('priceList').payload.items[?code == itemCode][0].price || price
} }}
```

---

## 🔹 Advanced Filtering Combinations

### **Multi-Criteria Item Search**
```js
{{ $payload.items[?
    (price >= `20` && price <= `1500`) &&
    (contains(name, 'Laptop') || contains(name, 'Mouse')) &&
    qty > `0`
].{name: name, price: price, qty: qty} }}
```

### **Pattern Matching**
```js
{{ $payload.items[?
    contains(name, 'Laptop') || 
    contains(itemCode, 'MOUSE') ||
    starts_with(name, 'Smart')
] }}
```

---

## 🔹 Data Enrichment

### **Enrich Order Data**
```js
{{ $payload.{
    order: orderId,
    profile: {
        customer: {name: customerName, id: customerId},
        orderDetails: {
            orderFrequency: length(orders),
            avgOrderValue: avg(orders[*].amount),
            preferredCategory: max_by(orders, &amount).product
        },
        classification: {
            segment: sum(orders[*].amount) > `1000` && 'Premium' || 'Standard',
            risk: length(orders) == `0` && 'High' || 'Low'
        }
    }
} }}
```

---

## 🔹 Performance Optimization Patterns

### **Efficient Filtering**
```
// Instead of multiple expressions, combine operations:
{{ users[?age > `25`][?city == 'London'].{
    name: name, 
    summary: {
        orders: length(orders), 
        total: sum(orders[*].amount)
    }
} }}
```

### **Pre-computed Values**
```
{{ users[*].{
    name: name,
    orderStats: {
        count: length(orders),
        total: sum(orders[*].amount)
    }
}.{
    name: name,
    count: orderStats.count,
    total: orderStats.total,
    average: orderStats.total / max([`1`, orderStats.count])
} }}
```

---

## 🔹 Error Handling Patterns

### **Safe Division**
```
{{ value / max([`1`, divisor]) }}
```

### **Null Safety**
```
{{ field || 'default_value' }}
{{ length(array || []) }}
```

### **Type Safety**
```
{{ to_number(stringValue) || `0` }}
{{ to_string(anyValue) || '' }}
```

---

## 🔹 Reusable Pattern Templates

### **1. Ranking Pattern**
```
{{ sort_by(items, &score)[-5:] }}  // Top 5
```

### **2. Percentage Calculation**
```
{{ (part / total) * `100` }}
```

### **3. Conditional Aggregation**
```
{{ sum(items[?condition].values) }}
```

### **4. Dynamic Grouping**
```
{{ items[*].{
    key: groupField,
    items: @[?groupField == key]
} | unique_by(@, &key) }}
```

---

## 🔹 Best Practices for Complex Expressions

1. **Break down complex logic** into smaller expressions
2. **Use meaningful intermediate projections**
3. **Add null safety checks**
4. **Test edge cases** with empty data
5. **Document complex business logic**
6. **Consider performance** with large datasets

---

## Next Steps

- [Quick Start Guide](./01-quick-start.md) - Learn by doing in 3 minutes
- [Cheat Sheet](./10-cheat-sheet.md) - Quick reference for all operators and functions
- [Using Functions](./06-using-functions.md) - Built-in functions for data manipulation