> 💡 **Tip:** Press `Ctrl+Shift+V` (Windows/Linux) or `Cmd+Shift+V` (Mac) to open Markdown Preview!

# 🚀 Guide 6: Update Data Form

*(Scroll to the very bottom of this document to navigate to other guides)*

**Goal:** Create an Edit form that comes pre-populated with existing data, and a POST route to apply the changes.

## 1. GET Route: Pre-populating the Form
- The hardest part of updating is **pre-populating** the form. 
- **Controller**: Extract `req.params.id`. 
- **Model**: You need TWO pieces of data. First, query the independent table for the dropdown options. Second, query the specific item by its ID.
- **View**: Set the `value="<%= item.name %>"` attribute on your text inputs. 
- 🤿 **Deep Dive Reference**: To pre-select dropdowns, use EJS logic tags (`<% %>`) to write a JavaScript conditional. Check if the current loop item's ID matches the target Foreign Key. If true, print the HTML `selected` attribute. Unsure how to write EJS logic inside a tag? Read [Deep Dive 5: EJS Templating Rules](../deep-dives/05-ejs/1st-gear/index.md).

## 2. POST Route: Applying the Update
- **Controller**: The form should submit via `POST` to `/your-entity/edit/:id`. You must extract BOTH `req.params.id` AND `req.body`.
- **Action**: Inside your Model, write an `UPDATE` query to modify the existing row. *(Scroll down to the "External Reference Study" block below to find the exact syntax so you can complete this step)*

### 📖 External Reference Study (Update Query)
*(Once you have successfully adapted the code, scroll back up to Step 2 to continue)*

**1. The Official Documentation**
- **Advanced Googling**: `site:postgresql.org update`
- **Direct Link**: [PostgreSQL: UPDATE](https://www.postgresql.org/docs/current/sql-update.html)
- **Target**: Postgres SQL Commands - UPDATE.
- **Landmark**: Scroll to the "Examples" section.
- **Adaptation**: Write the `UPDATE` query setting your columns to `$1` and `$2`, with a `WHERE` clause targeting `$3`. Ensure your array of values passed to the execution method perfectly matches the ordered parameter sequence.

**2. The Community Perspective**
- **Advanced Googling**: `site:dev.to node postgres update multiple columns`
- **Direct Link**: [Dev.to: Updating Postgres with Node.js](https://dev.to/karanpratapsingh/postgresql-update-data-39b1)
- **Target**: A practical Node/Postgres UPDATE tutorial.
- **Landmark**: Look at the parameterized query syntax.
- **Adaptation**: The most common bug in Live Codes is mismatching the array order (e.g., passing `[id, name]` when the query expects `$1` to be `name` and `$2` to be `id`).

## 3. Redirect on Success
- Await the Model method and `res.redirect` back to the main list page.

---
Navigation:
[Previous: Guide 5: Delete Data](./05-delete-data.md) | [Next: Guide 7: Server Validation](./07-server-validation.md)
