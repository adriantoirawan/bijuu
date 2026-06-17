> 💡 **Tip:** Press `Ctrl+Shift+V` (Windows/Linux) or `Cmd+Shift+V` (Mac) to open Markdown Preview!

# 🚀 Guide 2: Express Setup

*(Scroll to the very bottom of this document to navigate to other guides)*

**Goal:** Initialize your project, install dependencies, and spin up an Express server with EJS templating.

## 1. Initialize and Install
- In your terminal, make sure you are at the root of your project folder.
- **Action**: Run `npm init -y`.
- 🤿 **Deep Dive Reference**: `npm init -y` instantly generates a `package.json` file without asking questions. This file acts as a blueprint to keep track of the third-party libraries (like Express) you install. Unsure what this command actually did? Read [Deep Dive 1: What is npm init](../deep-dives/01-npm/1st-gear/index.md).
- **Action**: Install `express`, `ejs`, and `pg`.
- 🤿 **Deep Dive Reference**: `node_modules` is massive. We put it in `.gitignore` so we don't accidentally push 10,000 library files to GitHub. Unsure how this works? Read [Deep Dive 2: Understanding gitignore](../deep-dives/02-gitignore/1st-gear/index.md).

## 2. Create the Server (`app.js`)
- **Action**: Create an `app.js` file at the root. Require Express, instantiate the `app`, and set it to listen on a port (e.g., 3000). *(Scroll down to the "External Reference Study" block below to find the exact syntax so you can complete this step)*

### 📖 External Reference Study (Server Instantiation)
*(Once you have successfully adapted the code, scroll back up to Step 2 to continue)*

**1. The Official Documentation**
- **Advanced Googling**: `site:expressjs.com hello world`
- **Direct Link**: [Express: Hello World](https://expressjs.com/en/starter/hello-world.html)
- **Target**: The Express "Hello World" documentation page.
- **Landmark**: The very first code block on the page.
- **Adaptation**: Copy the boilerplate you found at the landmark directly into your `app.js`. Run the server execution command in the terminal to verify your server is alive.

**2. The Community Perspective**
- **Advanced Googling**: `site:dev.to starting an express server`
- **Direct Link**: [Dev.to: Build a simple Express Server](https://dev.to/chibuike07/build-a-simple-express-server-in-node-js-121g)
- **Target**: A community tutorial for absolute beginners.
- **Landmark**: Look at how they define the port variable and use backticks in `console.log`.
- **Adaptation**: Notice how `app.listen` is always the last thing executed in the file, keeping the server perpetually open.

## 3. Setup Middlewares & View Engine
- **Action**: Tell Express to use EJS for rendering HTML. *(Scroll down to the "External Reference Study" block below to find the exact syntax so you can complete this step)*
- **Action**: Tell Express how to parse URL-encoded form data. *(Scroll down to the "External Reference Study" block below to find the exact syntax so you can complete this step)*

### 📖 External Reference Study (View Engine)
*(Once you have successfully adapted the code, scroll back up to Step 3 to continue)*

**1. The Official Documentation**
- **Advanced Googling**: `site:expressjs.com template engines`
- **Direct Link**: [Express: Using template engines](https://expressjs.com/en/guide/using-template-engines.html)
- **Target**: Using template engines with Express.
- **Landmark**: Look for the code block that says `app.set('view engine', ...)`
- **Adaptation**: Copy the engine setting line from the docs, but replace `pug` with `'ejs'`.

**2. The Community Perspective**
- **Advanced Googling**: `site:stackoverflow.com express set view engine ejs`
- **Direct Link**: [StackOverflow: Setup EJS in Express](https://stackoverflow.com/questions/44140030/how-to-setup-ejs-in-express)
- **Target**: A thread explaining the setup.
- **Landmark**: Look for the accepted answer detailing `app.set`.
- **Adaptation**: Without this line, Express doesn't know what `.ejs` files are!

### 📖 External Reference Study (Form Data)
*(Once you have successfully adapted the code, scroll back up to Step 3 to continue)*

**1. The Official Documentation**
- **Advanced Googling**: `site:expressjs.com express.urlencoded`
- **Direct Link**: [Express: express.urlencoded](https://expressjs.com/en/4x/api.html#express.urlencoded)
- **Target**: Express 4.x API Reference.
- **Landmark**: The code block demonstrating `express.urlencoded()`.
- **Adaptation**: Copy the middleware execution line from the docs and paste it *above* your routes.

**2. The Community Perspective**
- **Advanced Googling**: `site:stackoverflow.com what does urlencoded do`
- **Direct Link**: [StackOverflow: Purpose of urlencoded](https://stackoverflow.com/questions/29960764/what-does-extended-mean-in-express-4-0)
- **Target**: Discussion explaining the middleware.
- **Landmark**: Read the explanation of `req.body`.
- **Adaptation**: If you forget this middleware, `req.body` will literally be `undefined` when a user submits a form!

---
Navigation:
[Previous: Guide 1: Database Setup](./01-database-setup.md) | [Next: Guide 3: Read Operations](./03-mvc-read-operations.md)
