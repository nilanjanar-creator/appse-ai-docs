---
id: data-access-patterns
title: Data Access Patterns
sidebar_position: 2
description: Techniques for accessing properties and arrays in APPSeAI workflow expressions.
keywords: [data access, arrays, APPSeAI, JMESPath]
---

Master the techniques for accessing properties and working with arrays in APPSeAI workflow expressions. This guide focuses on extracting and navigating through your workflow data effectively.

---

## 🔹 Introduction

In APPSeAI workflows, data flows between nodes in JSON format. Learning how to access this data efficiently is crucial for:

- **Mapping fields** between different node configurations
- **Extracting specific values** for processing
- **Navigating complex data structures** from APIs or databases
- **Preparing data** for the next workflow step

---

## 🔹 Basic Property Access

Essential patterns for accessing individual data points in your workflow:

| **Expression** | **Output** | **APPSeAI Use Case** |
|---|---|---|
| `{{ users[0].name }}` | `"Alice"` | Extract customer name for email personalization |
| `{{ users[1].age }}` | `35` | Get age for demographic filtering |
| `{{ users[-1].name }}` | `"Bob"` | Access most recent record |
| `{{ users[0].orders[0].product }}` | `"Laptop"` | Get first ordered product for recommendations |

---

## 🔹 Array Operations

Work with collections of data that commonly flow through APPSeAI workflows:

| **Expression** | **Output** | **APPSeAI Use Case** |
|---|---|---|
| `{{ users[*].name }}` | `["Alice", "Bob"]` | Generate mailing list from customer data |
| `{{ users[*].age }}` | `[28, 35]` | Collect ages for analytics dashboard |
| `{{ users[*].orders[*].product }}` | `["Laptop", "Mouse", "Phone"]` | Aggregate all purchased products |
| `{{ length(users) }}` | `2` | Count records for batch processing limits |

---

## 🔹 Nested Array Access for Complex Data

### **Single Level Nesting**
```
{{ users[0].orders }}
```
**Output:** `[{"id":101,"product":"Laptop","amount":1200}, {"id":102,"product":"Mouse","amount":25}]`
**APPSeAI Use:** Extract all orders for a specific customer to process in order management node

### **Multiple Level Nesting**
```
{{ users[*].orders[*] }}
```
**Output:** All orders from all users (flattened)
**APPSeAI Use:** Collect all orders across customers for inventory analysis

### **Specific Nested Properties**
```
{{ users[*].orders[0].product }}
```
**Output:** `["Laptop", "Phone"]`
**APPSeAI Use:** Get first purchase from each customer for trend analysis

---

## 🔹 Array Indexing Patterns

| **Pattern** | **Description** | **Example** |
|---|---|---|
| `[0]` | First element | `users[0]` |
| `[1]` | Second element | `users[1]` |
| `[-1]` | Last element | `users[-1]` |
| `[-2]` | Second to last | `users[-2]` |
| `[*]` | All elements | `users[*]` |

---

## 🔹 Property Chain Examples

### **Deep Property Access**
```
{{ users[0].orders[0].amount }}
```
**Output:** `1200`

### **Multiple Property Chains**
```
{{ users[*].orders[*].amount }}
```
**Output:** `[1200, 25, 800]`

---

## 🔹 Common Patterns

### **1. Get All Values of a Property**
```
{{ items[*].propertyName }}
```

### **2. Access Nested Arrays**
```
{{ parent[*].children[*].value }}
```

### **3. Get First/Last Items**
```
{{ items[0] }}    // First
{{ items[-1] }}   // Last
```

### **4. Count Elements**
```
{{ length(items) }}
{{ length(items[*].subArray) }}
```

---

## 🔹 Common APPSeAI Data Access Patterns

### **1. Customer Data Extraction**
```
{{ customers[*].{name: fullName, email: contactInfo.email} }}
```
**Use:** Prepare customer list for email marketing node

### **2. API Response Processing**
```
{{ response.data[*].id }}
```
**Use:** Extract IDs from API response for subsequent API calls

### **3. Database Query Results**
```
{{ queryResults[*].{id: userId, status: accountStatus} }}
```
**Use:** Map database fields to standardized format for processing

### **4. File Processing Data**
```
{{ uploadedFiles[*].metadata.filename }}
```
**Use:** Get filenames for file processing workflow

---

## 🔹 Handling Different Data Sources

### **REST API Responses**
```
{{ response.items[*].attributes.value }}
```

### **Database Records**
```
{{ records[*].fields.customer_name }}
```

### **File Upload Metadata**
```
{{ files[*].properties.size }}
```

### **Form Submissions**
```
{{ submissions[*].formData.email }}
```

---

## 🔹 Performance Considerations in APPSeAI

### **Efficient Data Access**
```
// Preferred: Direct access
{{ users[0].name }}

// Avoid: Unnecessary array operations
{{ users[*].name[0] }}
```

### **Batch Processing Optimization**
```
// Good: Process all at once
{{ users[*].orders[*].amount }}

// Less efficient: Individual access in loops
{{ users[0].orders[*].amount }}, {{ users[1].orders[*].amount }}
```

---

## 🔹 Error Prevention

### **Safe Array Access**
```
{{ users[0] || {} }}              // Fallback to empty object
{{ length(users || []) }}         // Handle null arrays
{{ (users[0] || {}).name || '' }} // Chain safely
```

### **Checking Data Existence**
```
{{ length(users) > `0` && users[0].name || 'No users' }}
```

---

## 🔹 Real-World APPSeAI Examples

### **E-commerce Order Processing**
```json
{
  "orderId": "{{ orders[0].id }}",
  "customerEmail": "{{ orders[0].customer.email }}",
  "totalAmount": "{{ sum(orders[0].items[*].price) }}",
  "itemCount": "{{ length(orders[0].items) }}"
}
```

### **User Analytics Dashboard**
```json
{
  "totalUsers": "{{ length(users) }}",
  "userNames": "{{ users[*].profile.displayName }}",
  "averageAge": "{{ avg(users[*].profile.age) }}",
  "locations": "{{ unique(users[*].address.city) }}"
}
```

### **CRM Data Integration**
```json
{
  "contactId": "{{ contacts[0].id }}",
  "fullName": "{{ contacts[0].firstName + ' ' + contacts[0].lastName }}",
  "phoneNumbers": "{{ contacts[0].phones[*].number }}",
  "lastInteraction": "{{ contacts[0].interactions[-1].date }}"
}
```

---

## 🔹 Next Steps

Build on your data access skills with advanced techniques:

- **[Filtering Data](./03-filtering.md)** - Learn to filter arrays with conditions  
- **[Transformations](./04-transformations.md)** - Reshape and transform accessed data
- **[Functions Reference](./05-functions.md)** - Explore functions that work with accessed data

Master data access patterns to unlock the full potential of your APPSeAI workflows!