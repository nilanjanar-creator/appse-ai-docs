id: advanced-patterns
title: Advanced Expression Patterns
sidebar_position: 6
description: Complex JMESPath scenarios, multi-level aggregations, and performance patterns for APPSeAI workflows.
keywords: [advanced, patterns, jmespath, aggregations]

Complex scenarios and advanced techniques for sophisticated data processing.

---

## 🔹 Complex Data Analysis

### **Top Spender Analysis**
```
{{ max_by(users, &sum(orders[*].amount)).name }}
```
**Output:** `"Alice"`
**Use Case:** Find the customer who has spent the most money

### **User Activity Summary**
```
{{ users[*].{
    User: name,
    Orders: length(orders),
    TotalSpent: sum(orders[*].amount),
    AvgOrder: avg(orders[*].amount) || `0`,
    TopProduct: max_by(orders, &amount).product || 'None'
} }}
```
**Use Case:** Complete customer analytics dashboard

---

## 🔹 Multi-Level Aggregations

### **Nested Statistics**
```
{{ {
    totalUsers: length(users),
    totalOrders: sum(users[*].length(orders)),
    totalRevenue: sum(users[*].orders[*].amount),
    avgRevenuePerUser: avg(users[*].sum(orders[*].amount)),
    topSpender: max_by(users, &sum(orders[*].amount)).name
} }}
```

### **Category Analysis**
```
{{ users[*].orders[*].{
    product: product,
    amount: amount,
    category: contains(product, 'Phone') && 'Mobile' || 
              contains(product, 'Laptop') && 'Computer' || 'Other'
}[?category != 'Other'] }}
```

---

## 🔹 Data Validation Patterns

### **Data Quality Checks**
```
{{ users[*].{
    name: name,
    hasOrders: length(orders) > `0`,
    validAge: age >= `18` && age <= `120`,
    hasValidCity: city != null && city != '',
    dataQuality: (length(orders) > `0`) && (age >= `18`) && (city != null) && 'Good' || 'Poor'
} }}
```

### **Missing Data Detection**
```
{{ users[?name == null || name == '' || length(orders) == `0`] }}
```

---

## 🔹 Business Logic Implementation

### **Loyalty Program Classification**
```
{{ users[*].{
    customer: name,
    totalSpent: sum(orders[*].amount),
    orderCount: length(orders),
    loyaltyTier: 
        sum(orders[*].amount) > `2000` && 'Platinum' ||
        sum(orders[*].amount) > `1000` && 'Gold' ||
        sum(orders[*].amount) > `500` && 'Silver' ||
        'Bronze'
} }}
```

### **Discount Calculation**
```
{{ users[*].orders[*].{
    product: product,
    originalAmount: amount,
    discount: amount > `1000` && amount * `0.1` ||
              amount > `500` && amount * `0.05` ||
              `0`,
    finalAmount: amount - (
        amount > `1000` && amount * `0.1` ||
        amount > `500` && amount * `0.05` ||
        `0`
    )
} }}
```

---

## 🔹 Time-Based Analysis

### **Recent Activity Filter**
```
{{ users[*].{
    name: name,
    recentOrders: orders[?date >= '2024-01-01'],
    recentSpending: sum(orders[?date >= '2024-01-01'].amount) || `0`
} }}
```

### **Trend Analysis**
```
{{ users[*].{
    customer: name,
    q1Spending: sum(orders[?date >= '2024-01-01' && date < '2024-04-01'].amount) || `0`,
    q2Spending: sum(orders[?date >= '2024-04-01' && date < '2024-07-01'].amount) || `0`,
    growthRate: (
        sum(orders[?date >= '2024-04-01'].amount) - 
        sum(orders[?date < '2024-04-01'].amount)
    ) / max([`1`, sum(orders[?date < '2024-04-01'].amount)]) * `100`
} }}
```

---

## 🔹 Advanced Filtering Combinations

### **Multi-Criteria Search**
```
{{ users[?
    (age >= `25` && age <= `40`) &&
    (city == 'London' || city == 'New York') &&
    sum(orders[*].amount) > `500`
].{name: name, city: city, totalSpent: sum(orders[*].amount)} }}
```

### **Pattern Matching**
```
{{ users[*].orders[?
    contains(product, 'Phone') || 
    contains(product, 'Laptop') ||
    starts_with(product, 'Smart')
] }}
```

---

## 🔹 Data Enrichment

### **Cross-Reference Data**
```
{{ users[*].{
    user: name,
    profile: {
        demographics: {age: age, city: city},
        behavior: {
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

## 🔹 Next Steps

- **[Template Integration](./07-template-integration.md)** - Use advanced patterns in templates
- **[Quick Reference](./08-quick-reference.md)** - Handy syntax reference