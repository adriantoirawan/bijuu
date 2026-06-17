> 💡 **Tip:** Press `Ctrl+Shift+V` (Windows/Linux) or `Cmd+Shift+V` (Mac) to open Markdown Preview!

# 🚀 Guide 5: Delete Data

*(Scroll to the very bottom of this document to navigate to other guides)*

**Goal:** Create a route that deletes a specific record based on its ID without requiring a dedicated view.

## 1. Setting Up the Route
- **Action**: In your routes, setup a `GET` route with a route parameter to capture the ID of the item to delete. *(Scroll down to the "External Reference Study" block below to find the exact syntax so you can complete this step)*

### 📖 External Reference Study (Route Parameters)
*(Once you have successfully adapted the code, scroll back up to Step 1 to continue)*

**1. The Official Documentation**
- **Advanced Googling**: `site:expressjs.com route parameters`
- **Direct Link**: [Express: Route Parameters](https://expressjs.com/en/guide/routing.html#route-parameters)
- **Target**: Express Routing guide, section on Route parameters.
- **Landmark**: Look for the `Route path: /users/:userId/books/:bookId` example.
- **Adaptation**: Define your path with `:id`, and grab the ID inside your Controller using `req.params.id`.

**2. The Community Perspective**
- **Advanced Googling**: `site:stackoverflow.com express req params vs req query`
- **Direct Link**: [StackOverflow: params vs query](https://stackoverflow.com/questions/14417592/node-js-difference-between-req-query-and-req-params)
- **Target**: Thread explaining the difference between URL variables.
- **Landmark**: Read the top answer showing the URL structure differences.
- **Adaptation**: `req.params` comes from the colon in your route definition (`/:id`), NOT from a question mark (`?id=`)!

## 2. The Model Query
- **Action**: Inside your Model, write a `DELETE FROM` query using parameterized queries to safely remove the row. *(Scroll down to the "External Reference Study" block below to find the exact syntax so you can complete this step)*

### 📖 External Reference Study (Deletion Query)
*(Once you have successfully adapted the code, scroll back up to Step 2 to continue)*

**1. The Official Documentation**
- **Advanced Googling**: `site:postgresql.org delete`
- **Direct Link**: [PostgreSQL: DELETE](https://www.postgresql.org/docs/current/sql-delete.html)
- **Target**: Postgres SQL Commands - DELETE.
- **Landmark**: Scroll to the "Examples" section.
- **Adaptation**: Write a `DELETE FROM` query where the ID equals `$1`, and pass the ID from the URL parameters as the array argument to your database execution method.

**2. The Community Perspective**
- **Advanced Googling**: `site:stackoverflow.com delete postgresql returning`
- **Direct Link**: [StackOverflow: Postgres DELETE RETURNING](https://stackoverflow.com/questions/11233128/how-to-return-deleted-rows-in-postgresql)
- **Target**: Discussion on returning deleted data.
- **Landmark**: Look at the `RETURNING *` addition.
- **Adaptation**: If the exam requires you to show the name of the deleted item in a success message, append `RETURNING *` to your SQL query to get the data back!

## 3. Redirect on Success
- **Controller**: Await the Model method, then redirect (`res.redirect`) back to the list page.

---
Navigation:
[Previous: Guide 4: Create Data Form](./04-create-data-form.md) | [Next: Guide 6: Update Data Form](./06-update-data-form.md)
