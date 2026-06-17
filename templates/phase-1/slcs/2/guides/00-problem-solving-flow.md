# Problem Solving Flow: SLC 2 Demo

This guide breaks down the thought process and the developer experience (DX) behind the instructor's solution for the Phase 1 SLC 2 Demo. It aims to bridge the gap between a blank canvas and a fully functioning MVC application, explaining *why* each file exists and *when* it was created.

## Step-by-Step Guides

If you want a detailed walkthrough of each phase of the implementation, follow these step-by-step guides in order:

1. 🗄️ [Database Setup](./01-database-setup.md)
2. 🚀 [Express Setup](./02-express-setup.md)
3. 📖 [MVC Read Operations](./03-mvc-read-operations.md)
4. 📝 [Create Data Form](./04-create-data-form.md)
5. 🗑️ [Delete Data](./05-delete-data.md)
6. ✏️ [Update Data Form](./06-update-data-form.md)
7. 🛡️ [Server Validation](./07-server-validation.md)

---

## Deep Dive Modules

As you follow this problem-solving flow, you might encounter concepts you want to explore further. We've prepared several deep-dive modules for you to master these concepts from the ground up:

*   📦 [NPM & Package Management](../deep-dives/01-npm/1st-gear/index.md)
*   🙈 [Git & Gitignore Strategies](../deep-dives/02-gitignore/1st-gear/index.md)
*   🏛️ [Model View Controller (MVC) Architecture](../deep-dives/03-mvc/1st-gear/index.md)
*   📨 [HTTP POST & Request Body](../deep-dives/04-req-body/1st-gear/index.md)
*   🎨 [EJS Templating Engine](../deep-dives/05-ejs/1st-gear/index.md)
*   🔪 [Separation of Concerns (SoC)](../deep-dives/06-soc/1st-gear/index.md)
*   🗄️ [ERD & PostgreSQL Foundations](../deep-dives/07-erd/1st-gear/index.md)

---

## The Mental Model

When faced with a full-stack CRUD application, it's easy to get overwhelmed. The instructor's approach follows a clear, layered strategy:

1.  **Foundation (Database):** Establish the connection and prepare the tables/data.
2.  **Domain (Classes):** Define what the data looks like in the JavaScript world.
3.  **Data Access (Model):** Create the queries to interact with the database.
4.  **Brain (Controller):** Connect the requests, the data, and the responses.
5.  **Interface (Views):** Build the UI to display the data.
6.  **Wiring (App.js):** Connect the URLs to the controller.

---

## 1. Foundation: The Database Layer (`db/`)

Before writing any application logic, we must ensure our data storage is ready. The instructor isolates all database-related code in a dedicated `db` folder to keep the root directory clean.

### `db/config.js`
*   **What it does:** Initializes the `pg` (PostgreSQL) pool connection.
*   **Why it exists:** Instead of creating a new database connection every time we need to query data, we create a single "Pool" of connections here and export it. Any file that needs to talk to the database simply imports this file.

### `db/setup.js`
*   **What it does:** Executes DDL (Data Definition Language) queries to `DROP` and `CREATE` the `ProductionHouses` and `Movies` tables based on the schema requirements in the `readme.md`.
*   **Why it exists:** It automates the table creation process. Instead of manually running SQL in a GUI, developers run this script once (`node db/setup.js`) to guarantee the database schema is correct before starting development.

### `db/seed.js`
*   **What it does:** Reads data from `productionHouses.json` using the `fs` module and inserts it into the `ProductionHouses` table.
*   **Why it exists:** To populate the database with initial data required for the app to function (specifically for dropdowns when adding a movie). Like `setup.js`, this is an initialization script run once (`node db/seed.js`).

---

## 2. Domain Modeling: Shaping the Data (`models/class.js`)

### `models/class.js`
*   **What it does:** Defines JavaScript ES6 Classes (`ProductionHouse` and `Movie`) that mirror the structure of our database tables.
*   **Why it exists:** When we fetch data from PostgreSQL, it comes back as raw, generic objects. By instantiating these classes, we transform raw database rows into specific "Domain Objects". This makes our code more predictable, enabling methods/getters down the line if needed, and satisfying OOP principles.

---

## 3. Data Access: The Model (`models/model.js`)

### `models/model.js`
*   **What it does:** Contains a `Model` class with `static` methods (like `ph()`, `movie()`, `postAdd()`, `getDelete()`) that execute SQL queries using the connection from `db/config.js`.
*   **Why it exists:** This is the **M** in MVC. It encapsulates all database interactions. The Controller shouldn't know *how* to write SQL; it just asks the Model for data. Notice how the Model fetches raw rows from the DB and maps them into the Instances created in `class.js` before returning them.
*   **DX Focus:** Moving validations (like throwing errors if `name` is empty or `year > 2021`) into the Model or Controller ensures our business logic is centralized. In this demo, the model throws an array of errors which are caught by the Controller.

---

## 4. The Application Brain: The Controller (`controllers/controller.js`)

### `controllers/controller.js`
*   **What it does:** Contains a `Controller` class with `static` methods (like `home`, `ph`, `movie`, `getAdd`, `postAdd`) corresponding to each route required in the `readme.md`.
*   **Why it exists:** This is the **C** in MVC. It acts as the middleman.
    *   It receives the `req` (Request) from the Router.
    *   It asks the `Model` for data (or to save data).
    *   It takes that data and passes it to the `res.render()` (View) or `res.redirect()`.
*   **DX Focus:** Notice the consistent `try...catch` blocks. The controller is responsible for handling errors gracefully, often catching errors thrown by the Model and deciding how to present them to the user (e.g., using `res.send(error)` for simplicity in this demo).

---

## 5. The Interface: Views (`views/`)

The `views/` folder holds the EJS templates. This is the **V** in MVC.

### `views/home.ejs`
*   **What it does:** A simple landing page with links to `/production-houses` and `/movies`.

### `views/ph.ejs`
*   **What it does:** Renders a table of Production Houses. It expects an array of `ProductionHouse` instances (passed from the Controller) and loops over them using `<% data.forEach(...) %>`.

### `views/movie.ejs`
*   **What it does:** Renders a table of Movies. It demonstrates conditional logic in the view (`<% if (el.year >= 2000) { %>`) to display different actions based on business rules (e.g., showing a "Minus" button instead of "Delete" for newer movies).

### `views/add.ejs`
*   **What it does:** Contains the HTML `<form>` to add a new movie.
*   **Why it exists:** It needs data from the `ProductionHouses` table to populate the `<select>` dropdown. The Controller fetches this data via the Model and passes it here so the template can iterate over `ph` and create `<option>` tags.

---

## 6. Wiring it all together (`app.js`)

### `app.js`
*   **What it does:** The entry point of the Express application.
*   **Why it exists:** It initializes Express, sets the view engine (`app.set("view engine", "ejs")`), enables form data parsing (`app.use(express.urlencoded({extended: true}))`), and defines every single Route.
*   **DX Focus:** Instead of writing complex logic inside `app.get()`, `app.js` delegates the responsibility directly to the Controller (`app.get('/movies', Controller.movie)`). This keeps the entry file extremely clean, acting merely as a "Traffic Cop" directing URLs to the correct Controller method.

---

## Ready to Start?

Now that you understand the high-level architecture and the *why* behind each file, let's get your hands dirty! 

👉 **[Start with Step 1: Database Setup](./01-database-setup.md)**
