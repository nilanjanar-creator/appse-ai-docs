---
slug: /platform/key-concepts/nodes/built-in/aggregator
title: Aggregator Node
---

# Aggregator Node

The **Aggregator Node** is used to consolidate multiple incoming records into a single structured output.  
It enables flexible data reshaping, batching, and grouping before passing data to downstream nodes.

---

## When to Use Aggregator

Use this node when you need to:

- Combine multiple records into one payload  
- Batch data for API requests   
- Build custom output objects  

---

## Aggregation Modes Overview

The Aggregator Node currently supports one aggregation mode:

- **All Item Data**

---

## 1. All Item Data

This mode aggregates entire records into a single array wrapped inside a defined output field.

### All Item Data – Configuration Breakdown

| Configuration Field    | Description |
|------------------|------------|
| Output Field Name | Specifies the wrapper field that will contain the aggregated array. Use any custom name as per your requirement |
| Fields to Include | Determines how fields from each input record are included. The dropdown provides three options: `All Fields`, `Specified Fields`, and `All Fields Except` |
| Specified Fields  | Enter the fields you want to include, separated by commas. This option appears only when `Specified Fields` is selected for the Fields to Include field |
| Fields to Exclude | Enter the fields you want to exclude, separated by commas. This option appears only when `All Fields Except` is selected for the Fields to Include field |

### All Item Data – Example

#### Fields to Include - All Fields:
**Configuration**
<img src="\img\platform\key-concepts\nodes\built-in\aggregator\Agg1.png" width="700"/>

**Output**
<img src="\img\platform\key-concepts\nodes\built-in\aggregator\Agg2.png" width="700"/>

#### Fields to Include - Specified Fields:
**Configuration**
<img src="\img\platform\key-concepts\nodes\built-in\aggregator\Agg3.png" width="700"/>

**Output**
<img src="\img\platform\key-concepts\nodes\built-in\aggregator\Agg4.png" width="700"/>

#### Fields to Include - All Fields Except:
**Configuration**
<img src="\img\platform\key-concepts\nodes\built-in\aggregator\Agg5.png" width="700"/>

**Output**
<img src="\img\platform\key-concepts\nodes\built-in\aggregator\Agg6.png" width="700"/>

---

The Aggregator Node provides structured flexibility, allowing you to choose between complete record aggregation or field-level grouping depending on your workflow needs.