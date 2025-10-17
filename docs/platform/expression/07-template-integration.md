---
id: template-integration
title: Template Integration
sidebar_position: 7
description: Best practices for using JMESPath expressions inside templates and generating dynamic outputs in APPSeAI workflows.
keywords: [templates, integration, interpolation]
---

Learn how to use expressions effectively within templates and different contexts.

---

## 🔹 String Templates

### **Simple Substitution**
```json
{
  "message": "Hello {{ users[0].name }}, you have {{ length(users[0].orders) }} orders."
}
```
**Output:**
```json
{
  "message": "Hello Alice, you have 2 orders."
}
```

### **Multiple Expressions in Strings**
```json
{
  "summary": "User {{ users[0].name }} from {{ users[0].city }} spent ${{ sum(users[0].orders[*].amount) }}"
}
```
**Output:**
```json
{
  "summary": "User Alice from London spent $1225"
}
```

---

## 🔹 Object Templates

### **Dynamic Object Properties**
```json
{
  "userSummary": "{{ users[*].{name: name, totalSpent: sum(orders[*].amount)} }}",
  "totalUsers": "{{ length(users) }}",
  "grandTotal": "{{ sum(users[*].orders[*].amount) }}"
}
```
**Output:**
```json
{
  "userSummary": [
    {"name":"Alice","totalSpent":1225},
    {"name":"Bob","totalSpent":800}
  ],
  "totalUsers": 2,
  "grandTotal": 2025
}
```

---

## 🔹 Array Templates

### **Dynamic Arrays**
```json
{
  "topCustomers": "{{ sort_by(users, &sum(orders[*].amount))[-2:][*].name }}",
  "allProducts": "{{ unique(users[*].orders[*].product) }}"
}
```

### **Array with Object Templates**
```json
[
  {
    "type": "summary",
    "data": "{{ {totalUsers: length(users), totalRevenue: sum(users[*].orders[*].amount)} }}"
  },
  {
    "type": "users",
    "data": "{{ users[*].{name: name, orderCount: length(orders)} }}"
  }
]
```

---

## 🔹 Conditional Templates

### **Conditional Content**
```json
{
  "status": "{{ length(users) > `0` && 'active' || 'inactive' }}",
  "message": "{{ length(users) > `5` && 'Many users found' || 'Few users found' }}"
}
```

### **Conditional Objects**
```json
{
  "userReport": "{{ length(users) > `0` && {
    count: length(users),
    revenue: sum(users[*].orders[*].amount),
    avgSpending: avg(users[*].sum(orders[*].amount))
  } || {error: 'No users found'} }}"
}
```

---

## 🔹 Nested Templates

### **Template within Template**
```json
{
  "dashboard": {
    "header": {
      "title": "User Dashboard",
      "subtitle": "{{ length(users) }} users, ${{ sum(users[*].orders[*].amount) }} total revenue"
    },
    "content": {
      "users": "{{ users[*].{
        name: name,
        summary: 'Orders: ' + to_string(length(orders)) + ', Spent: $' + to_string(sum(orders[*].amount))
      } }}"
    }
  }
}
```

---

## 🔹 Dynamic Template Structures

### **Variable Object Structure**
```json
{
  "report": "{{ users[*].{
    id: id,
    name: name,
    details: {
      age: age,
      location: city,
      stats: {
        orders: length(orders),
        spending: sum(orders[*].amount),
        avgOrder: avg(orders[*].amount) || `0`
      }
    }
  } }}"
}
```

### **Conditional Fields**
```json
{
  "userProfile": "{{ users[0].{
    name: name,
    age: age,
    orders: length(orders) > `0` && orders || null,
    status: sum(orders[*].amount) > `1000` && 'VIP' || 'Regular',
    recommendations: length(orders) == `0` && ['Browse our catalog'] || ['Thank you for your purchases']
  } }}"
}
```

---

## 🔹 Template Patterns

### **1. List with Details**
```json
{
  "items": "{{ items[*].{
    id: id,
    title: name,
    description: 'User from ' + city + ' with ' + to_string(length(orders)) + ' orders'
  } }}"
}
```

### **2. Summary Cards**
```json
{
  "cards": "{{ [
    {title: 'Total Users', value: length(users), type: 'count'},
    {title: 'Total Revenue', value: sum(users[*].orders[*].amount), type: 'currency'},
    {title: 'Avg Revenue', value: avg(users[*].sum(orders[*].amount)), type: 'currency'}
  ] }}"
}
```

### **3. Hierarchical Data**
```json
{
  "hierarchy": "{{ {
    summary: {
      users: length(users),
      orders: sum(users[*].length(orders))
    },
    details: users[*].{
      user: name,
      orders: orders[*].{product: product, amount: amount}
    }
  } }}"
}
```

---

## 🔹 Template Optimization

### **Pre-compute Common Values**
```json
{
  "stats": "{{ {
    userCount: length(users),
    totalRevenue: sum(users[*].orders[*].amount)
  } }}",
  "message": "We have {{ stats.userCount }} users with ${{ stats.totalRevenue }} revenue"
}
```

### **Reusable Sub-templates**
```json
{
  "userStats": "{{ users[*].{name: name, total: sum(orders[*].amount)} }}",
  "topUser": "{{ max_by(userStats, &total) }}",
  "summary": "Top customer: {{ topUser.name }} with ${{ topUser.total }}"
}
```

---

## 🔹 Error-Safe Templates

### **Handle Missing Data**
```json
{
  "userInfo": "{{ users[0] || {name: 'No user found', orders: []} }}",
  "orderCount": "{{ length((users[0] || {orders: []}).orders) }}"
}
```

### **Type-Safe Operations**
```json
{
  "calculation": "{{ to_number(value || '0') + to_number(otherValue || '0') }}",
  "safeString": "{{ to_string(data) || 'No data' }}"
}
```

---

## 🔹 Template Context Tips

1. **Use meaningful property names** in projections
2. **Keep string interpolation simple**
3. **Break complex expressions** into multiple template properties
4. **Add fallback values** for missing data
5. **Test templates** with various data scenarios

---

## 🔹 Common Template Use Cases

### **API Response Formatting**
```json
{
  "success": true,
  "data": "{{ users[*].{id: id, name: name, orderCount: length(orders)} }}",
  "meta": {
    "total": "{{ length(users) }}",
    "timestamp": "{{ now() }}"
  }
}
```

### **Email Templates**
```json
{
  "subject": "Order Summary for {{ users[0].name }}",
  "body": "Hello {{ users[0].name }}, you have {{ length(users[0].orders) }} orders totaling ${{ sum(users[0].orders[*].amount) }}."
}
```

### **Dashboard Configuration**
```json
{
  "widgets": "{{ [
    {type: 'metric', title: 'Users', value: length(users)},
    {type: 'metric', title: 'Revenue', value: sum(users[*].orders[*].amount)},
    {type: 'chart', data: users[*].{name: name, value: sum(orders[*].amount)}}
  ] }}"
}
```

---

## 🔹 Next Steps

- **[Quick Reference](./08-quick-reference.md)** - Essential syntax reference
- **[Expression Basics](./01-basics.md)** - Review fundamentals