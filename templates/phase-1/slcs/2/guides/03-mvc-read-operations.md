> 💡 **Tip:** Press `Ctrl+Shift+V` (Windows/Linux) or `Cmd+Shift+V` (Mac) to open Markdown Preview!

# 🚀 Guide 3: Read Operations & MVC

*(Scroll to the very bottom of this document to navigate to other guides)*

**Goal:** Render the Home page and list pages using the strict MVC structure required by Hacktiv8.

## 1. Architecture Setup
- Create `models/`, `views/`, `controllers/`, and `routes/` folders.
- 🤿 **Deep Dive Reference**: The MVC (Model-View-Controller) pattern prevents spaghetti code. The Controller receives requests, asks the Model for database info, and sends that info to the View. Confused about how these folders talk to each other? You MUST read [Deep Dive 3: The MVC Flow Explained](../deep-dives/03-mvc/1st-gear/index.md) before writing code.
- 🤿 **Deep Dive Reference**: If you are struggling with the syntax of setting up your Model and Controller classes (forgetting when to use `static` or `async/await`), consult [Deep Dive 3: The Anatomy of MVC Classes](../deep-dives/03-mvc/2nd-gear/class-anatomy.md) for a conceptual breakdown.

## 2. The Home Page (`/`)
- **Action**: Set up a route for the Home Page that renders the home view. *(Scroll down to the "External Reference Study" block below to find the exact syntax so you can complete this step)*

### 📖 External Reference Study (Routing)
*(Once you have successfully adapted the code, scroll back up to Step 2 to continue)*

**1. The Official Documentation**
- **Advanced Googling**: `site:expressjs.com basic routing`
- **Direct Link**: [Express: Basic Routing](https://expressjs.com/en/starter/basic-routing.html)
- **Target**: Express basic routing guide.
- **Landmark**: The code block demonstrating `app.get()`.
- **Adaptation**: Structure your route identically, but point the callback to your `Controller.home` static method. Inside that method, invoke the response render function with the name of your view file.

**2. The Community Perspective**
- **Advanced Googling**: `site:stackoverflow.com express routing controller`
- **Direct Link**: [StackOverflow: Express Router MVC](https://stackoverflow.com/questions/28305120/differences-between-express-router-and-app-get)
- **Target**: Thread differentiating direct app routes vs router files.
- **Landmark**: Look at the router.get implementation.
- **Adaptation**: For enterprise modularity, you place these routes inside `routes/index.js` instead of cluttering `app.js`.

## 3. The List Pages
- What exact URL paths does the prompt require for the lists (e.g., `/parents` or `/children`)? Does the exam require a specific `ORDER BY`?
- **Action**: Call the Model method (await it!) and pass the returned data object to the view's render function. *(Scroll down to the "External Reference Study" block below to find the exact syntax so you can complete this step)*

### 📖 External Reference Study (Passing Data)
*(Once you have successfully adapted the code, scroll back up to Step 3 to continue)*

**1. The Official Documentation**
- **Advanced Googling**: `site:expressjs.com res.render`
- **Direct Link**: [Express: res.render](https://expressjs.com/en/4x/api.html#res.render)
- **Target**: The API reference for `res.render`.
- **Landmark**: The section showing `res.render(view [, locals] [, callback])`.
- **Adaptation**: Pass your data as the second argument (the `locals` object) to the render function.

**2. The Community Perspective**
- **Advanced Googling**: `site:dev.to express res render ejs data`
- **Direct Link**: [Dev.to: Passing data to EJS in Express](https://dev.to/karanpratapsingh/passing-data-to-views-in-express-1g9f)
- **Target**: A practical tutorial on injecting variables into HTML.
- **Landmark**: Look for the `res.render('index', { user: 'John' })` code block.
- **Adaptation**: The key inside the object (e.g., `user` or `data`) becomes the exact variable name you use inside your `<% %>` tags in the EJS file!

- **View**: Use EJS `<% %>` tags to loop over the data and render HTML table rows (`<tr>`).
- 🤿 **Deep Dive Reference**: EJS uses `<%=` to print text to the screen, and `<%` for silent JavaScript logic (like a `for` loop). Confused about the rules? Read [Deep Dive 5: EJS Templating Rules](../deep-dives/05-ejs/1st-gear/index.md).

---
Navigation:
[Previous: Guide 2: Express Setup](./02-express-setup.md) | [Next: Guide 4: Create Data Form](./04-create-data-form.md)
