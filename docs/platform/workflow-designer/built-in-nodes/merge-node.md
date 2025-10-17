---
title: Merge Node
slug: /platform/workflow-designer/built-in-nodes/merge-node
---

# Merge Node 

The Merge Node is a built-in node that enables users to combine multiple input payloads into a combined output. This node is the sole way to merge items in APPSe AI. The users will get the following options to merge the inputs:

1. Simple Merge
2. Merge by Fields

Let's discuss their nuances in the upcoming section.

## Simple Merge

Simple Merge combines two or more datasets or record collections into a single unified dataset by stacking or appending all records together. Here is a scenario for better understanding -

  <div style={{ display: 'flex', gap: '40px' }}>
      <div>
      ### **Input 1**

| id | name   | color  |
|----|--------|--------|
| 1  | Apple  | red    |
| 2  | Banana | yellow |
| 3  | Orange | orange |
| 4  | Grape  | purple |
| 5  | Lemon  | yellow |
</div>
      <div>
      ### **Input 2**

| id | country  | flag_color  |
|----|-----------|-------------|
| 1  | America  | _null_ |
| 2  | India    | Orange      |
| 3  | China    | Red         |
| 4  | Nepal    | White       |
| 6  | Pakistan | Green       |
</div>
    </div>

--

### **Result**

The fields are appended across both tables and all the values are displayed. The cells with missing data return a null value.

| id | name        | color       | country     | flag_color  |
|----|--------------|-------------|-------------|-------------|
| 1  | Apple       | red         | America     | _null_ |
| 2  | Banana      | yellow      | India       | Orange      |
| 3  | Orange      | orange      | China       | Red         |
| 4  | Grape       | purple      | Nepal       | White       |
| 5  | Lemon       | yellow      | _null_ | _null_ |
| 6  | _null_ | _null_ | Pakistan    | Green       |

---

## Merge by Fields

Merge by Fields intelligently combines multiple datasets by matching records that share common field values. The merge by fields option also allows the users to use various SQL based merging methods such as:

1. Keep Matching Values (Inner Join)
2. Keep Everything (Outer Join)
3. Merge data into Input 1 (Left Join)
4. Merge data into Input 2 (Right Join)

Let's look at a few scenarios to better understand this:

### Scenario #1 : Matching two tables using a common field

These are the sample input tables will be the same as the simple merge input examples.

The the tables will be merged using the `id` field in both tables. The outputs will be as follows:

#### _Keep Matching Values (Inner Join)_

This will merge only records with matching values in both datasets, excluding non-matching entries.

| id | name   | color  | country  | flag_color  |
|----|--------|--------|----------|-------------|
| 1  | Apple  | red    | America  | _null_ |
| 2  | Banana | yellow | India    | Orange      |
| 3  | Orange | orange | China    | Red         |
| 4  | Grape  | purple | Nepal    | White       |

--

#### _Keep Everything (Outer Join)_

All records from both datasets, including non-matching entries will be displayed, the cells with missing values will return `null`.

| id | name   | color  | country     | flag_color  |
|----|--------|--------|-------------|-------------|
| 1  | Apple  | red    | America     | _null_ |
| 2  | Banana | yellow | India       | Orange      |
| 3  | Orange | orange | China       | Red         |
| 4  | Grape  | purple | Nepal       | White       |
| 5  | Lemon  | yellow | _null_ | _null_ |
| 6  | _null_ | _null_ | Pakistan | Green       |

--

#### _Merge data into Input 1 (Left Join)_

This optipon merges all records from Input 2 within the matching records from the Input 1 table, retaining all records from Input 1 and adding null values to the cells with no avaialable value.

| id | name   | color  | country  | flag_color  |
|----|--------|--------|----------|-------------|
| 1  | Apple  | red    | America  | _null_ |
| 2  | Banana | yellow | India    | Orange      |
| 3  | Orange | orange | China    | Red         |
| 4  | Grape  | purple | Nepal    | White       |
| 5  | Lemon  | yellow | _null_ | _null_ |

--

#### _Merge data into Input 2 (Right Join)_

This option merges all records from Input 1 into Input 2, retaining all records from Input 2. Null values are returned for cells with no relevant fields to return.

| id | name   | color  | country  | flag_color  |
|----|--------|--------|----------|-------------|
| 1  | Apple  | red    | America  | _null_ |
| 2  | Banana | yellow | India    | Orange      |
| 3  | Orange | orange | China    | Red         |
| 4  | Grape  | purple | Nepal    | White       |
| 6  | _null_ | _null_ | Pakistan | Green       |

`Note`: Users can match based on multiple fields. In this case, both field pairs must match for an item to qualify.

---

### Scenario 2: If the same tables are matched based on 2 fields

The output for the **inner join** condition when:
1. `id` in input 1 is matched with `id` in input
2. `color` in input 1 is matched with `flag_color` in input 2

The output will be _empty_, as there are no matching fields.

#### But if we introduct a new set of tables:

  <div style={{ display: 'flex', gap: '40px' }}>
      <div>
      ### **Input 1**

| id | name   | color  |
|----|--------|--------|
| 1  | Apple  | Red    |
| 2  | Banana | Yellow |
| 3  | Tangerine | Orange |
| 4  | Grape  | Purple |
| 5  | Lemon  | Yellow |
</div>
      <div>
      ### **Input 2**

| id | country  | flag_color  |
|----|-----------|-------------|
| 1  | America  | _null_ |
| 2  | China    | Red      |
| 3  | India    | Orange         |
| 4  | Nepal    | White       |
| 6  | Pakistan | Green       |
</div>
    </div>

The output will be:

| id | name   | color  | country | flag_color |
|----|--------|--------|---------|------------|
| 3  | Tangerine | Orange | India   | Orange     |

It only returns the record that matched both the `color` & `flag_color` fields and `id` & `id` fields match.

---

## Important Notes

1. If a matching field exists outside the specified merge criteria, the output will generate two separate columns named `field` and `field_2` to ensure no data is lost.
2. When merging fields that are nested inside an object, the system will correctly handle the merge and process the nested data appropriately.