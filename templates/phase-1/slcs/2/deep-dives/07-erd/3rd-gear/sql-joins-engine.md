# ⚙️ 3rd Gear: The SQL JOINs Engine

*(Scroll to the very bottom of this document to shift gears to another topic)*

When you separate data into two tables, you inevitably need to query them together.
To do this, you must use a `JOIN` clause in your SQL.

## 📖 External Reference Study

### 1. The Official Documentation
- **Advanced Googling**: `site:postgresqltutorial.com postgresql inner join`
- **Direct Link**: [PostgreSQL INNER JOIN](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-inner-join/)
- **Target**: PostgreSQL INNER JOIN guide.
- **Landmark**: Look for the first SQL code block under the introduction.
- **Adaptation**: Notice how the SQL engine mathematically calculates the Cartesian Product of the two tables, and then filters out rows that don't match the `ON` condition. Swap `table1` and `table2` with your actual exam tables, and map their Foreign Keys.

### 2. The Community Perspective
- **Advanced Googling**: `site:stackoverflow.com difference between inner join and left join`
- **Direct Link**: [StackOverflow: Inner Join vs Left Join](https://stackoverflow.com/questions/38549/what-is-the-difference-between-inner-join-and-outer-join)
- **Target**: The legendary StackOverflow thread explaining SQL Joins.
- **Landmark**: Look for the Venn Diagrams.
- **Adaptation**: Visualizing joins as intersecting circles is the single best way to memorize how they work. Inner Join is the intersection; Outer Joins include the non-intersecting parts.

> ⚙️ **Shift to 4th Gear**: *Why don't we just put all data in one giant table? [Read 4th-gear/database-normalization.md](../4th-gear/database-normalization.md)*

---
🧭 **Navigation**
[🔙 Climb up to 2nd Gear](../2nd-gear/foreign-keys.md) | [🔙 Back to 1st Gear (Survival)](../1st-gear/index.md) | [🏠 Back to Main Guide](../../../guides/01-database-setup.md)
