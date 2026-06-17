# ⚙️ 4th Gear: Database Normalization (Industry Standard)

*(Scroll to the very bottom of this document to shift gears to another topic)*

If you are building a Ninja Academy, why not just have one `Jutsus` table that includes `ShinobiName` and `ShinobiVillage` directly as columns?

## The Problem of Data Anomalies
If Naruto creates 500 jutsus, and Naruto moves from the Leaf Village to the Sand Village, you would have to update 500 rows. If you miss one, your database is corrupted (Update Anomaly).

## Normal Forms (1NF, 2NF, 3NF)
In the industry, databases are designed using strict mathematical rules called Normal Forms. 
By moving the Shinobi data into its own table (Normalization), Naruto's village is stored exactly once. If he moves, you update 1 row.

## 📖 External Reference Study

### 1. The Official Documentation
- **Advanced Googling**: `site:en.wikipedia.org Database normalization`
- **Direct Link**: [Database Normalization](https://en.wikipedia.org/wiki/Database_normalization)
- **Target**: The definition of Third Normal Form (3NF).
- **Landmark**: Look for "Every non-prime attribute is non-transitively dependent on the primary key".
- **Adaptation**: Database Architects get paid hundreds of thousands of dollars to design ERDs for massive companies. It's a complex, mathematical discipline.

### 2. The Community Perspective
- **Advanced Googling**: `site:dev.to database normalization explained simple`
- **Direct Link**: [Dev.to: Normalization Explained](https://dev.to/lmaccherone/database-normalization-explained-in-simple-english-40d6)
- **Target**: A developer breaking down the complex math into simple English.
- **Landmark**: Look for the examples of 1NF, 2NF, and 3NF.
- **Adaptation**: In bootcamps, you naturally reach 3NF just by following the "One-to-Many" logic without even realizing it!

> ⚙️ **Shift to 5th Gear**: *Want to read the actual C source code of the Postgres Database engine? [Read 5th-gear/postgres-c-source-code.md](../5th-gear/postgres-c-source-code.md)*

---
🧭 **Navigation**
[🔙 Climb up to 3rd Gear](../3rd-gear/sql-joins-engine.md) | [🔙 Back to 1st Gear (Survival)](../1st-gear/index.md) | [🏠 Back to Main Guide](../../../guides/01-database-setup.md)
