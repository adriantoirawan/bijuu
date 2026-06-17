# ⚙️ 1st Gear: ERDs & Relations (Survival Mode)

*(Scroll to the very bottom of this document to shift gears to another topic)*

Tables are connected. The "Many" side ALWAYS holds the Foreign Key.

- Example: 1 Parent has Many Children.
- Rule: The `Children` table must have the `ParentId` column.

If you drop tables, drop the dependent table first!

## 📖 External Reference Study (Survival Mode)
1. **Docs**: Google `site:postgresql.org foreign keys`. [Direct Link](https://www.postgresql.org/docs/current/tutorial-fk.html). Official docs on keeping tables linked.
2. **Community**: Google `site:stackoverflow.com postgresql foreign key`. [Direct Link](https://stackoverflow.com/questions/18016764/adding-a-foreign-key-in-postgresql). Quick syntax examples on defining `REFERENCES`.
> ⚙️ **Shift to 2nd Gear**: *Why does Postgres crash if you drop them in the wrong order? [Read 2nd-gear/foreign-keys.md](../2nd-gear/foreign-keys.md)*

---
🧭 **Navigation**
[🏠 Back to Main Guide](../../../guides/01-database-setup.md)
