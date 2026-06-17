> 💡 **Tip:** Press `Ctrl+Shift+V` (Windows/Linux) or `Cmd+Shift+V` (Mac) to open Markdown Preview!

# 🚀 Guide 7: Server Validation

*(Scroll to the very bottom of this document to navigate to other guides)*

**Goal:** Intercept bad data *before* it hits the database and return helpful error messages to the user.

## 1. 🧠 Understanding the Goal: What are the Rules?
- Check the exam README. What are the specific validation rules? (e.g., `name` cannot be empty).
- **IMPORTANT**: The README usually states "NOT HTML VALIDATION". This means you cannot just add `required` to your `<input>` tags. You must handle it in your Node.js backend logic.

## 2. Implementing Validation in the Model
- When you receive the form data in your `Model.postAdd` or `Model.postEdit` methods, check the data *before* you run `pool.query()`.
- **Action**: Create an empty `let errors = []` array. 
- Use `if` statements to check the data against the rules.
- If a rule is violated, `.push()` a string message into the `errors` array.
- At the end of the checks, if `errors.length > 0`, `throw errors`. (Yes, you can throw arrays in JavaScript!).

## 3. Catching and Displaying Errors
- **Controller**: Since you threw the error in the Model, the `catch (error)` block in your Controller will intercept it.
- **Action**: The prompt usually asks to "tampilkan pesan error dengan res.send". Send the array of errors back to the client. *(Scroll down to the "External Reference Study" block below to find the exact syntax so you can complete this step)*

### 📖 External Reference Study (Error Response)
*(Once you have successfully adapted the code, scroll back up to Step 3 to continue)*

**1. The Official Documentation**
- **Advanced Googling**: `site:expressjs.com res.send`
- **Direct Link**: [Express: res.send](https://expressjs.com/en/4x/api.html#res.send)
- **Target**: Express API reference for `res.send`.
- **Landmark**: Look at the different types of data you can pass to `res.send()`.
- **Adaptation**: Simply pass the error payload into the response send method inside your catch block to display the array of strings directly in the browser.

**2. The Community Perspective**
- **Advanced Googling**: `site:stackoverflow.com express res send vs res json`
- **Direct Link**: [StackOverflow: res.send vs res.json](https://stackoverflow.com/questions/40608974/difference-between-res-send-and-res-json-in-express-js)
- **Target**: A community discussion on response methods.
- **Landmark**: Look at the accepted answer explaining content-types.
- **Adaptation**: When you pass an Array to `res.send`, Express automatically converts it into JSON format in the browser.

---
Navigation:
[Previous: Guide 6: Update Data Form](./06-update-data-form.md)
