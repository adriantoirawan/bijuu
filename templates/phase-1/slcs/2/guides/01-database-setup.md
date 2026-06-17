> 💡 **Tip:** Press `Ctrl+Shift+V` (Windows/Linux) or `Cmd+Shift+V` (Mac) to open Markdown Preview!

# 🚀 Guide 1: Database Setup & Seeding

*(Scroll to the very bottom of this document to navigate to other guides)*

**Goal:** Master the `pg` setup process: draw the ERD, establish a connection pool, create tables with Foreign Keys, and seed data.

## 1. 🧠 Understanding the Goal: The ERD (Entity Relationship Diagram)
- Before you touch any code, you MUST visualize the database schema based on the exam README.
- Install the **Draw.io Integration** extension in VS Code.
- **Action**: Create a new file in your project root named exactly `erd.drawio.png`.
- Use this file to draw your tables, marking the `PK` (Primary Key) and the `FK` (Foreign Key). 
- Connect the tables. Remember, the Independent table is the "One" side, and the Dependent table (which holds the FK) is the "Many" side.
- 🤿 **Deep Dive Reference**: An ERD is a visual blueprint that shows how your tables connect (e.g., how a Movie table relies on a Production House table using a Foreign Key). If you don't know how to draw this or what the Crow's Foot arrow is, read the full [Deep Dive 7: Understanding ERDs](../deep-dives/07-erd/1st-gear/index.md).

## 2. Create the Database
- **Action**: Open DBeaver or your terminal (`psql`) to execute a SQL statement that creates the new database. *(Scroll down to the "External Reference Study" block below to find the exact syntax so you can complete this step)*

### 📖 External Reference Study (Database Creation)
*(Once you have successfully adapted the code, scroll back up to Step 2 to continue)*

**1. The Official Documentation**
- **Advanced Googling**: `site:postgresql.org create database`
- **Direct Link**: [PostgreSQL: CREATE DATABASE](https://www.postgresql.org/docs/current/sql-createdatabase.html)
- **Target**: Official Postgres documentation on creating a database.
- **Landmark**: Scroll to the "Examples" section.
- **Adaptation**: Replace the generic `name` with the exact database name required by the exam.

**2. The Community Perspective**
- **Advanced Googling**: `site:stackoverflow.com how to create database in postgresql`
- **Direct Link**: [StackOverflow: Create DB in Postgres](https://stackoverflow.com/questions/17691579/creating-a-postgresql-db)
- **Target**: A community discussion on the easiest way to spin up a DB.
- **Landmark**: Look at the top answers comparing the `createdb` command line tool vs the SQL `CREATE DATABASE` statement.
- **Adaptation**: If you use DBeaver, you'll use the SQL statement. If you use the terminal, you might prefer the `createdb` wrapper.

## 3. The Database Configuration (`db/config.js`)
- **Action**: Create a `db/config.js` file if not provided. *(Scroll down to the "External Reference Study" block below to find the exact syntax so you can complete this step)*
- **Goal**: Instantiate a `Pool` from the `pg` library. You will require this pool in your Models later to run SQL queries!
- 🤿 **Deep Dive Reference**: Why create a separate `config.js` instead of putting it in `app.js`? This is called *Separation of Concerns*. It keeps your web server logic separate from your database connection logic so other scripts (like `setup.js`) can safely connect without launching the whole server. For a deeper breakdown, read [Deep Dive 6: Separation of Concerns](../deep-dives/06-soc/1st-gear/index.md).
### 📖 External Reference Study (Pool Configuration)
*(Once you have successfully adapted the code, scroll back up to Step 3 to continue)*

**1. The Official Documentation**
- **Advanced Googling**: `site:node-postgres.com pool`
- **Direct Link**: [node-postgres: Pool](https://node-postgres.com/features/pooling)
- **Target**: The node-postgres documentation on creating a connection pool.
- **Landmark**: Look for the code block instantiating a `new Pool`.
- **Adaptation**: Copy the setup, but change the `user`, `password`, and `database` values to match your local PostgreSQL credentials. Add `module.exports = pool` at the bottom.

**2. The Community Perspective**
- **Advanced Googling**: `site:dev.to node postgres pool vs client`
- **Direct Link**: [Dev.to: Pool vs Client in node-postgres](https://dev.to/karanpratapsingh/pool-vs-client-in-node-postgres-3j85)
- **Target**: A blog explaining the architectural difference between a single Client and a Pool.
- **Landmark**: Look for the analogy explaining why connecting and disconnecting for every single query is slow.
- **Adaptation**: The Pool manages a fleet of connections automatically, which is why we export it and share it across the entire Express app.

## 4. Table Setup (`setup.js`)
- **Action**: Write an async function that creates your tables using `pool.query()`. *(Scroll down to the "External Reference Study" block below to find the exact syntax so you can complete this step)*
- **CRITICAL ARCHITECTURE RULE**: 
  - **Dropping Tables**: Always `DROP` the dependent table (the one with the Foreign Key) FIRST, then drop the independent table.
  - **Creating Tables**: Always `CREATE` the independent table FIRST, then create the dependent table (because the dependent table needs the independent table's `id` to reference).
### 📖 External Reference Study (Table Setup)
*(Once you have successfully adapted the code, scroll back up to Step 4 to continue)*

**1. The Official Documentation**
- **Advanced Googling**: `site:postgresql.org create table`
- **Direct Link**: [PostgreSQL: CREATE TABLE](https://www.postgresql.org/docs/current/sql-createtable.html)
- **Target**: The official Postgres CREATE TABLE documentation.
- **Landmark**: Scroll to the "Examples" section to see how to define columns.
- **Adaptation**: Structure your query as a template string, substituting your ERD column names. Ensure you include `id SERIAL PRIMARY KEY`.

**2. The Community Perspective**
- **Advanced Googling**: `site:stackoverflow.com postgresql foreign key`
- **Direct Link**: [StackOverflow: Adding a foreign key](https://stackoverflow.com/questions/18016764/adding-a-foreign-key-in-postgresql)
- **Target**: A thread explaining the syntax for adding foreign keys.
- **Landmark**: Look at the `REFERENCES` keyword.
- **Adaptation**: For your dependent table, define the column (e.g., `ParentId INTEGER`) and immediately follow it with `REFERENCES Parents(id)`.

## 5. Data Seeding (`seed.js`)
- **Action**: Use the `fs` module to read the provided `.json` file, map over the array to build an insert query string, and execute it using `pool.query()`. *(Scroll down to the "External Reference Study" block below to find the exact syntax so you can complete this step)*
### 📖 External Reference Study (Data Seeding)
*(Once you have successfully adapted the code, scroll back up to Step 5 to continue)*

**1. The Official Documentation**
- **Advanced Googling**: `site:nodejs.org readFileSync`
- **Direct Link**: [Node.js Docs: fs.readFileSync](https://nodejs.org/api/fs.html#fsreadfilesyncpath-options)
- **Target**: Node.js File System documentation.
- **Landmark**: Find the method signature showing it accepts a `path` and `options`.
- **Adaptation**: Pass the relative path to your JSON file and `'utf-8'`. Wrap the entire `fs.readFileSync` call inside `JSON.parse()`.

**2. The Community Perspective**
- **Advanced Googling**: `site:stackoverflow.com read file synchronously node js`
- **Direct Link**: [StackOverflow: How to read a file synchronously](https://stackoverflow.com/questions/34980249/returning-a-string-with-fs-readfilesync)
- **Target**: A community discussion on the easiest way to read files.
- **Landmark**: Notice the warnings about synchronous code blocking the event loop.
- **Adaptation**: In `seed.js`, blocking the event loop is perfectly fine because it's a one-time setup script, not an active Express server!

---
Navigation: 
[Next: Guide 2: Express Setup](./02-express-setup.md)
