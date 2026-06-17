> 💡 **Tip:** Press `Ctrl+Shift+V` (Windows/Linux) or `Cmd+Shift+V` (Mac) to open Markdown Preview!

# 🚀 Guide 4: Create Data Form

*(Scroll to the very bottom of this document to navigate to other guides)*

**Goal:** Create a GET route to display an Add form, and a POST route to receive the data and insert it into the database.

## 1. GET Route: Rendering the Form
- Does the form require a dropdown (`<select>`) populated from the database? If so, your Model must query that lookup table (e.g., Production Houses) first.
- **Controller**: Await the Model, then render the add form view, passing the lookup data.
- **View**: Create a `<form>` with `method="POST"` and `action="/the-correct-route"`. 
- **CRITICAL**: Ensure every `<input>` and `<select>` has a `name` attribute!
- 🤿 **Deep Dive Reference**: When you submit a form, the browser uses the `name` attribute as the key, and the `express.urlencoded` middleware attaches it to `req.body`. If you forget the `name` attribute, `req.body` will be undefined! Don't know why the `name` attribute is so important? Read [Deep Dive 4: Form Submission & req.body](../deep-dives/04-req-body/1st-gear/index.md).

## 2. POST Route: Handling Submission
- **Action**: Extract the submitted data in the Controller and pass it to the Model, which executes an `INSERT INTO` query using Parameterized Queries. *(Scroll down to the "External Reference Study" block below to find the exact syntax so you can complete this step)*

### 📖 External Reference Study (Parameterized Queries)
*(Once you have successfully adapted the code, scroll back up to Step 2 to continue)*

**1. The Official Documentation**
- **Advanced Googling**: `site:node-postgres.com queries`
- **Direct Link**: [node-postgres: Queries](https://node-postgres.com/features/queries)
- **Target**: The `pg` documentation on executing queries.
- **Landmark**: Scroll to the "Parameterized query" section.
- **Adaptation**: Write your `INSERT` string using the parameterized `$1, $2` syntax, and pass your extracted `req.body` variables as the array in the second argument of the database execution method.

**2. The Community Perspective**
- **Advanced Googling**: `site:stackoverflow.com node postgres parameterization`
- **Direct Link**: [StackOverflow: SQL Injection prevention with pg](https://stackoverflow.com/questions/43114947/how-do-i-prevent-sql-injection-in-node-postgres)
- **Target**: A critical security discussion.
- **Landmark**: Look at the heavily upvoted answers warning against string concatenation.
- **Adaptation**: Never ever use template literals for SQL variables. Always use the `$1` syntax!

## 3. Redirect on Success
- **Action**: Await the Model method in your Controller and then redirect the user to the list page. *(Scroll down to the "External Reference Study" block below to find the exact syntax so you can complete this step)*

### 📖 External Reference Study (Redirection)
*(Once you have successfully adapted the code, scroll back up to Step 3 to continue)*

**1. The Official Documentation**
- **Advanced Googling**: `site:expressjs.com res.redirect`
- **Direct Link**: [Express: res.redirect](https://expressjs.com/en/4x/api.html#res.redirect)
- **Target**: Express API reference for `res.redirect`.
- **Landmark**: Look for the string path example.
- **Adaptation**: Use the response redirect method to point the user back to your list route after the insertion completes successfully.

**2. The Community Perspective**
- **Advanced Googling**: `site:stackoverflow.com express res.render vs res.redirect`
- **Direct Link**: [StackOverflow: render vs redirect](https://stackoverflow.com/questions/23605330/what-is-the-difference-between-res-render-and-res-redirect-in-express)
- **Target**: A classic beginner confusion thread.
- **Landmark**: Read the accepted answer explaining state.
- **Adaptation**: When you successfully INSERT data, NEVER `res.render`. If the user refreshes a rendered page, it resubmits the POST data and creates duplicate rows! Always `redirect` back to a safe GET list route.

---
Navigation:
[Previous: Guide 3: Read Operations](./03-mvc-read-operations.md) | [Next: Guide 5: Delete Data](./05-delete-data.md)
